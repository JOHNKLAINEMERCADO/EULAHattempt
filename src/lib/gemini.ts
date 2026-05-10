import { GoogleGenerativeAI } from "@google/generative-ai";

export interface RiskClause {
  id: string;
  type: string;
  riskLevel: "HIGH" | "MEDIUM" | "LOW";
  clauseText: string;
  explanation: string;
}

export interface AnalysisResult {
  totalRisks: number;
  highRisks: number;
  mediumRisks: number;
  lowRisks: number;
  overallRisk: "HIGH" | "MEDIUM" | "LOW";
  overallRiskMessage: string;
  clauses: RiskClause[];
  isDemo?: boolean;
}

const SYSTEM_PROMPT = `You are EULAH, a legal document risk analysis AI. Analyze the provided legal text and identify all potentially risky clauses.

For each risky clause found, provide:
1. type: A short descriptive name like "Automatic Renewal", "Data Collection & Sharing", "Arbitration Clause", "Liability Waiver", "Unilateral Changes", "Account Termination", "Content Rights", "Refund Policy", "Intellectual Property Grab", etc.
2. riskLevel: One of "HIGH", "MEDIUM", or "LOW"
3. clauseText: The exact or closely paraphrased text of the clause (quote it)
4. explanation: A brief 1-2 sentence explanation of why this clause is risky for users

Also provide:
5. overallRisk: The overall document risk level — "HIGH", "MEDIUM", or "LOW"
6. overallRiskMessage: A 1-2 sentence summary of the overall risk

Return ONLY valid JSON with no markdown formatting, no code blocks, no commentary. Use this exact structure:

{
  "totalRisks": <number>,
  "highRisks": <number>,
  "mediumRisks": <number>,
  "lowRisks": <number>,
  "overallRisk": "HIGH|MEDIUM|LOW",
  "overallRiskMessage": "<string>",
  "clauses": [
    {
      "type": "<string>",
      "riskLevel": "HIGH|MEDIUM|LOW",
      "clauseText": "<string>",
      "explanation": "<string>"
    }
  ]
}

If no risky clauses are found, return totalRisks: 0, overallRisk: "LOW", and an empty clauses array. Do not wrap in markdown code fences.`;

function hasValidApiKey(): boolean {
  const key = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  return !!key && !key.includes("your_") && key.length > 10;
}

function runKeywordAnalysis(text: string): AnalysisResult {
  const lower = text.toLowerCase();
  const clauses: RiskClause[] = [];

  const patterns: Array<{
    keywords: string[];
    type: string;
    riskLevel: "HIGH" | "MEDIUM" | "LOW";
    explanation: string;
  }> = [
    {
      keywords: ["auto renew", "automatic renew", "automatically renew", "renew at the end", "billing period"],
      type: "Automatic Renewal",
      riskLevel: "HIGH",
      explanation:
        "This clause indicates your subscription will automatically renew and you'll be charged unless you manually cancel. This can lead to unexpected charges.",
    },
    {
      keywords: ["share", "third-party", "third party", "partners", "marketing purposes", "data collection", "personal data", "location data", "browsing history"],
      type: "Data Collection & Sharing",
      riskLevel: "HIGH",
      explanation:
        "Your personal data may be collected and shared with third parties. This could include your browsing habits, location, and other sensitive information.",
    },
    {
      keywords: ["arbitration", "binding arbitration", "waive your right", "jury trial", "class action"],
      type: "Arbitration Clause",
      riskLevel: "HIGH",
      explanation:
        "You're waiving your right to take legal action in court. Disputes must be resolved through arbitration, which may favor the company.",
    },
    {
      keywords: ["not liable", "limitation of liability", "not responsible", "disclaim", "no liability", "damages"],
      type: "Liability Waiver",
      riskLevel: "MEDIUM",
      explanation:
        "The company limits or eliminates their responsibility for damages, losses, or problems you may experience while using their service.",
    },
    {
      keywords: ["modify these terms", "change the terms", "without prior notice", "without notice", "at any time", "reserves the right"],
      type: "Unilateral Changes",
      riskLevel: "MEDIUM",
      explanation:
        "The company can change the terms at any time without notifying you. You may unknowingly agree to new conditions.",
    },
    {
      keywords: ["terminate", "suspend your account", "any time", "without prior notice", "for any reason"],
      type: "Account Termination",
      riskLevel: "LOW",
      explanation:
        "Your account can be terminated or suspended at the company's discretion, potentially without warning or explanation.",
    },
    {
      keywords: ["grant us", "perpetual", "worldwide", "royalty-free", "license to use", "content", "intellectual property"],
      type: "Content Rights",
      riskLevel: "MEDIUM",
      explanation:
        "You're granting the company broad rights to use, modify, and distribute your content, potentially forever and without compensation.",
    },
  ];

  for (const pattern of patterns) {
    const found = pattern.keywords.some((kw) => lower.includes(kw.toLowerCase()));
    if (found) {
      // Extract a snippet around the matched keyword
      let snippet = text;
      const kw = pattern.keywords.find((k) => lower.includes(k.toLowerCase()));
      if (kw) {
        const idx = lower.indexOf(kw.toLowerCase());
        const start = Math.max(0, idx - 60);
        const end = Math.min(text.length, idx + kw.length + 120);
        snippet = text.slice(start, end).trim();
        if (start > 0) snippet = "..." + snippet;
        if (end < text.length) snippet = snippet + "...";
      }
      clauses.push({
        id: `clause-${clauses.length}`,
        type: pattern.type,
        riskLevel: pattern.riskLevel,
        clauseText: snippet,
        explanation: pattern.explanation,
      });
    }
  }

  const high = clauses.filter((c) => c.riskLevel === "HIGH").length;
  const medium = clauses.filter((c) => c.riskLevel === "MEDIUM").length;
  const low = clauses.filter((c) => c.riskLevel === "LOW").length;
  const total = clauses.length;

  let overall: "HIGH" | "MEDIUM" | "LOW" = "LOW";
  if (high > 0) overall = "HIGH";
  else if (medium > 0) overall = "MEDIUM";

  return {
    totalRisks: total,
    highRisks: high,
    mediumRisks: medium,
    lowRisks: low,
    overallRisk: overall,
    overallRiskMessage:
      overall === "HIGH"
        ? "This document contains several clauses that could significantly impact your rights and privacy. We strongly recommend reviewing the highlighted sections carefully before agreeing."
        : overall === "MEDIUM"
          ? "This document contains some clauses that may affect your rights. Review the highlighted sections before proceeding."
          : "This document appears to have minimal risk clauses. Always read carefully before agreeing.",
    clauses,
    isDemo: true,
  };
}

export async function analyzeDocument(text: string): Promise<AnalysisResult> {
  // Demo mode: no valid API key → keyword-based analysis
  if (!hasValidApiKey()) {
    // Simulate a brief delay so it feels like real AI processing
    await new Promise((r) => setTimeout(r, 1200));
    return runKeywordAnalysis(text);
  }

  const client = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY!);
  const model = client.getGenerativeModel({ model: "gemini-2.0-flash" });

  const result = await model.generateContent({
    contents: [
      { role: "user", parts: [{ text: SYSTEM_PROMPT }] },
      {
        role: "model",
        parts: [{ text: "Understood. I will analyze the legal document and return only the requested JSON." }],
      },
      { role: "user", parts: [{ text: `Analyze this legal document:\n\n${text}` }] },
    ],
  });

  const responseText = result.response.text().trim();

  const jsonMatch = responseText.match(/\{[\s\S]*\}/);
  const cleanJson = jsonMatch ? jsonMatch[0] : responseText;

  const parsed = JSON.parse(cleanJson) as Omit<AnalysisResult, "clauses" | "isDemo"> & {
    clauses: Array<Pick<RiskClause, "type" | "riskLevel" | "clauseText" | "explanation">>;
  };

  const clauses: RiskClause[] = parsed.clauses.map((c, i) => ({
    id: `clause-${i}`,
    type: c.type,
    riskLevel: c.riskLevel,
    clauseText: c.clauseText,
    explanation: c.explanation,
  }));

  return {
    totalRisks: parsed.totalRisks,
    highRisks: parsed.highRisks,
    mediumRisks: parsed.mediumRisks,
    lowRisks: parsed.lowRisks,
    overallRisk: parsed.overallRisk,
    overallRiskMessage: parsed.overallRiskMessage,
    clauses,
    isDemo: false,
  };
}
