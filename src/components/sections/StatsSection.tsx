"use client";

const stats = [
  { value: "99.8%", label: "Detection Accuracy" },
  { value: "<2s", label: "Average Analysis" },
  { value: "47+", label: "Risk Categories" },
  { value: "100K+", label: "Documents Scanned" },
];

export default function StatsSection() {
  return (
    <section className="w-full bg-[#F9FAF5] px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-8 border-t border-[#E8EDDE] pt-10 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span className="text-2xl font-bold text-[#9BC53D] sm:text-3xl">
                {stat.value}
              </span>
              <span className="text-xs text-[#888]">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
