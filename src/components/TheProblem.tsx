import { useState } from 'react';
import { BookOpen, Compass, Check, ArrowRight, ShieldAlert, Sparkles, Plus } from 'lucide-react';
import { PROBLEM_COMPARISON } from '../data/curioData';

export default function TheProblem() {
  const [viewMode, setViewMode] = useState<'both' | 'school' | 'curio'>('both');

  return (
    <section
      id="why-curio"
      className="py-16 md:py-24 bg-stone-100/60 border-b border-stone-200/80 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-stone-200/80 text-stone-700 text-xs font-semibold uppercase tracking-wider mb-4">
            The Educational Gap
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-display text-stone-950 tracking-tight leading-tight mb-4">
            Your child spends years learning what to know.
          </h2>
          <p className="text-lg sm:text-2xl font-medium text-stone-600 leading-snug">
            But what about learning how to navigate the world?
          </p>
        </div>

        {/* Mobile View Toggle - Allows parent to focus on comparison easily on narrow screens */}
        <div className="flex sm:hidden items-center justify-center p-1 bg-stone-200/70 rounded-xl mb-6">
          <button
            onClick={() => setViewMode('both')}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
              viewMode === 'both' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600'
            }`}
          >
            Split View
          </button>
          <button
            onClick={() => setViewMode('school')}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
              viewMode === 'school' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600'
            }`}
          >
            School Focus
          </button>
          <button
            onClick={() => setViewMode('curio')}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
              viewMode === 'curio' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600'
            }`}
          >
            Curio Addition
          </button>
        </div>

        {/* Split Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* Card 1: School Often Focuses On */}
          {(viewMode === 'both' || viewMode === 'school') && (
            <div
              id="school-focus-card"
              className="rounded-2xl border border-stone-200/90 bg-white p-6 sm:p-8 flex flex-col justify-between shadow-xs transition-all"
            >
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-stone-100 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center text-stone-600">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400">
                        Conventional Education
                      </span>
                      <h3 className="text-xl font-bold font-display text-stone-900">
                        School often focuses on
                      </h3>
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-stone-100 text-stone-600">
                    Essential Base
                  </span>
                </div>

                <ul className="space-y-3.5 mb-8">
                  {PROBLEM_COMPARISON.school.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-stone-700">
                      <div className="w-5 h-5 rounded-full bg-stone-100 text-stone-500 flex items-center justify-center text-xs mt-0.5 shrink-0 font-medium">
                        •
                      </div>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-5 border-t border-stone-100 bg-stone-50/70 -mx-6 -mb-6 sm:-mx-8 sm:-mb-8 p-5 rounded-b-2xl">
                <p className="text-xs text-stone-500 italic">
                  Academic foundations are vital for exam performance and certifications.
                </p>
              </div>
            </div>
          )}

          {/* Card 2: Curio Adds */}
          {(viewMode === 'both' || viewMode === 'curio') && (
            <div
              id="curio-adds-card"
              className="rounded-2xl border-2 border-indigo-900/40 bg-stone-900 text-white p-6 sm:p-8 flex flex-col justify-between shadow-lg relative overflow-hidden"
            >
              {/* Subtle visual glow accent */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center justify-between pb-5 border-b border-stone-800 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-400 text-stone-950 flex items-center justify-center font-bold">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                        Real-World Capability
                      </span>
                      <h3 className="text-xl font-bold font-display text-white">
                        Curio adds
                      </h3>
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-stone-800 text-amber-300 border border-amber-400/30">
                    The Complete Picture
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {PROBLEM_COMPARISON.curio.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2.5 p-2.5 rounded-xl bg-stone-800/80 border border-stone-700/60 text-xs sm:text-sm text-stone-200"
                    >
                      <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs shrink-0 font-bold">
                        ✓
                      </div>
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dynamic Plus Bridge Equation */}
              <div className="relative z-10 pt-5 border-t border-stone-800 bg-stone-950/60 -mx-6 -mb-6 sm:-mx-8 sm:-mb-8 p-5 rounded-b-2xl">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-stone-400 font-medium">
                    Integrated Development
                  </span>
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    School + Curio = Total Preparation
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Closing Statement Callout */}
        <div
          id="problem-closing-statement"
          className="mt-10 p-6 rounded-2xl bg-white border border-stone-200/90 text-center max-w-2xl mx-auto shadow-xs"
        >
          <p className="text-base sm:text-xl font-bold font-display text-stone-900">
            “We don't replace school.{' '}
            <span className="text-indigo-700 underline decoration-indigo-300 underline-offset-4">
              We complete the picture.
            </span>”
          </p>
          <p className="text-xs sm:text-sm text-stone-500 mt-2">
            Your child gets the academic rigor of school plus the practical real-world readiness from Curio.
          </p>
        </div>
      </div>
    </section>
  );
}
