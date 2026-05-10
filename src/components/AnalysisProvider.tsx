"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import { type AnalysisResult } from "@/lib/gemini";

interface AnalysisContextValue {
  result: AnalysisResult | null;
  originalText: string;
  isAnalyzing: boolean;
  error: string | null;
  setResult: (result: AnalysisResult, originalText: string) => void;
  setIsAnalyzing: (value: boolean) => void;
  setError: (error: string | null) => void;
  clear: () => void;
}

const AnalysisContext = createContext<AnalysisContextValue | undefined>(
  undefined
);

export function AnalysisProvider({ children }: { children: ReactNode }) {
  const [result, setResultState] = useState<AnalysisResult | null>(null);
  const [originalText, setOriginalText] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setErrorState] = useState<string | null>(null);

  const setResult = useCallback(
    (newResult: AnalysisResult, text: string) => {
      setResultState(newResult);
      setOriginalText(text);
      setErrorState(null);
    },
    []
  );

  const setError = useCallback((err: string | null) => {
    setErrorState(err);
    setIsAnalyzing(false);
  }, []);

  const clear = useCallback(() => {
    setResultState(null);
    setOriginalText("");
    setIsAnalyzing(false);
    setErrorState(null);
  }, []);

  return (
    <AnalysisContext.Provider
      value={{
        result,
        originalText,
        isAnalyzing,
        error,
        setResult,
        setIsAnalyzing,
        setError,
        clear,
      }}
    >
      {children}
    </AnalysisContext.Provider>
  );
}

export function useAnalysis() {
  const context = useContext(AnalysisContext);
  if (!context) {
    throw new Error("useAnalysis must be used within an AnalysisProvider");
  }
  return context;
}
