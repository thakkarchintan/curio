import { useState } from 'react';
import { EXPERIENCE_JOURNEY } from '../data/curioData';
import { ArrowRight, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';

export default function ExperienceJourney() {
  const [activeStage, setActiveStage] = useState(2); // Start on 03 EXPERIENCE

  return (
    <section
      id="curio-journey-section"
      className="py-16 md:py-24 bg-stone-900 text-white border-b border-stone-800 relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-stone-800 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4 border border-amber-400/20">
            Session Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight leading-tight mb-4">
            The Curio Experience.
          </h2>
          <p className="text-base sm:text-lg text-stone-300 leading-relaxed">
            Every Curio workshop moves through a calibrated 5-phase arc. Children don't sit still listening
            to slides—they are immersed in active decision cycles from the first minute.
          </p>
        </div>

        {/* Timeline Journey: Mobile-first vertical stack / Desktop progressive row */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
          {EXPERIENCE_JOURNEY.map((stage, idx) => {
            const isSelected = activeStage === idx;

            return (
              <button
                key={stage.number}
                id={`journey-step-${stage.number}`}
                onClick={() => setActiveStage(idx)}
                className={`text-left p-5 rounded-2xl border transition-all cursor-pointer relative flex flex-col justify-between ${
                  isSelected
                    ? 'border-amber-400/80 bg-stone-800 text-white shadow-lg ring-1 ring-amber-400/50'
                    : 'border-stone-800 bg-stone-950/60 text-stone-400 hover:border-stone-700 hover:text-stone-200'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-xs font-bold font-mono px-2 py-0.5 rounded-md ${
                        isSelected ? 'bg-amber-400 text-stone-950' : 'bg-stone-800 text-stone-400'
                      }`}
                    >
                      PHASE {stage.number}
                    </span>
                    {idx < EXPERIENCE_JOURNEY.length - 1 && (
                      <ArrowRight className="hidden md:block w-3.5 h-3.5 text-stone-600" />
                    )}
                  </div>

                  <h3
                    className={`text-lg font-bold font-display tracking-tight mb-2 ${
                      isSelected ? 'text-white' : 'text-stone-300'
                    }`}
                  >
                    {stage.name}
                  </h3>

                  <p className="text-xs leading-relaxed line-clamp-3">
                    {stage.headline}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-800/80 flex items-center justify-between text-[11px]">
                  <span className={isSelected ? 'text-amber-300 font-semibold' : 'text-stone-500'}>
                    {isSelected ? 'Active Phase' : 'View details'}
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-stone-500" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Highlight Banner of Selected Phase */}
        <div className="p-6 sm:p-8 rounded-2xl bg-stone-800/90 border border-stone-700/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-stone-700">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Phase {EXPERIENCE_JOURNEY[activeStage].number} Deep Dive
              </span>
              <h4 className="text-xl sm:text-2xl font-bold font-display text-white">
                {EXPERIENCE_JOURNEY[activeStage].name} — {EXPERIENCE_JOURNEY[activeStage].headline}
              </h4>
            </div>
            <span className="text-xs px-3 py-1 rounded-full bg-stone-900 text-stone-300 border border-stone-700 w-fit">
              Experiential Immersion
            </span>
          </div>

          <p className="text-sm sm:text-base text-stone-300 leading-relaxed max-w-3xl">
            {EXPERIENCE_JOURNEY[activeStage].detail}
          </p>
        </div>
      </div>
    </section>
  );
}
