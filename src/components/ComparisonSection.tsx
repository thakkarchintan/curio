import { useState } from 'react';
import { TRADITIONAL_VS_CURIO } from '../data/curioData';
import { ArrowRight, Check, X, Sparkles, BookOpen } from 'lucide-react';

export default function ComparisonSection() {
  return (
    <section
      id="comparison-section"
      className="py-16 md:py-24 bg-white border-b border-stone-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-stone-100 text-stone-700 text-xs font-semibold uppercase tracking-wider mb-4">
            Direct Comparison
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-stone-950 tracking-tight leading-tight mb-4">
            Not another class.
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            Curio is intentionally designed from the ground up to feel different from the school day.
            No lectures, no desks in rows, and no standardized test at the end.
          </p>
        </div>

        {/* Comparison Structure: Mobile-first card rows / Desktop table */}
        <div className="w-full rounded-2xl border border-stone-200 overflow-hidden bg-white shadow-xs">
          {/* Header Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 bg-stone-900 text-white">
            <div className="p-4 sm:p-5 border-b md:border-b-0 md:border-r border-stone-800 flex items-center gap-2.5">
              <BookOpen className="w-4 h-4 text-stone-400" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-300">
                Traditional Learning
              </span>
            </div>
            <div className="p-4 sm:p-5 flex items-center justify-between bg-stone-950">
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-400">
                  Curio Learning Experience
                </span>
              </div>
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 hidden sm:inline-block">
                Experiential
              </span>
            </div>
          </div>

          {/* Comparison Rows */}
          <div className="divide-y divide-stone-200">
            {TRADITIONAL_VS_CURIO.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-2 hover:bg-stone-50/70 transition-colors"
              >
                {/* Traditional Side */}
                <div className="p-4 sm:p-5 flex items-start gap-3 bg-stone-50/40 md:border-r border-stone-200">
                  <div className="w-5 h-5 rounded-full bg-stone-200/80 text-stone-500 flex items-center justify-center text-xs mt-0.5 shrink-0 font-bold">
                    ✕
                  </div>
                  <div>
                    <span className="text-xs text-stone-400 font-semibold uppercase tracking-wider block md:hidden mb-0.5">
                      Traditional:
                    </span>
                    <p className="text-sm sm:text-base font-medium text-stone-600">
                      {row.traditional}
                    </p>
                  </div>
                </div>

                {/* Curio Side */}
                <div className="p-4 sm:p-5 flex items-start gap-3 bg-white">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs mt-0.5 shrink-0 font-bold">
                    ✓
                  </div>
                  <div>
                    <span className="text-xs text-indigo-700 font-semibold uppercase tracking-wider block md:hidden mb-0.5">
                      Curio:
                    </span>
                    <p className="text-sm sm:text-base font-bold text-stone-950">
                      {row.curio}
                    </p>
                    <p className="text-xs text-stone-500 mt-1 font-medium">
                      {row.note}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Punchline */}
        <div
          id="comparison-closing-line"
          className="mt-8 p-6 sm:p-8 rounded-2xl bg-stone-900 text-white text-center max-w-3xl mx-auto shadow-md"
        >
          <p className="text-lg sm:text-2xl font-bold font-display text-white leading-snug">
            “Because knowing something and knowing what to do with it are two different skills.”
          </p>
          <p className="text-xs sm:text-sm text-stone-400 mt-2">
            Curio helps children bridge the gap between abstract knowledge and real-world execution.
          </p>
        </div>
      </div>
    </section>
  );
}
