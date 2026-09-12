import { useState } from 'react';
import { CURIO_CYCLE } from '../data/curioData';
import { Sparkles, ArrowRight, Lightbulb, Users, RefreshCw, Zap, CheckCircle2 } from 'lucide-react';

const STEP_ICONS: Record<string, typeof Lightbulb> = {
  '01': Lightbulb,
  '02': Zap,
  '03': RefreshCw,
  '04': CheckCircle2
};

export default function WhatIsCurio() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id="how-it-works"
      className="py-16 md:py-24 bg-white border-b border-stone-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 text-indigo-800 text-xs font-semibold uppercase tracking-wider mb-4 border border-indigo-100">
            Our Pedagogical Model
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-stone-950 tracking-tight leading-tight mb-5">
            Learning beyond the textbook.
          </h2>
          <p className="text-base sm:text-xl text-stone-600 leading-relaxed">
            Curio brings children into experiences that help them understand how the world actually works.
            Sessions are designed to be practical, interactive and age-appropriate — using conversations,
            simulations, role-play, real-world examples, challenges and practitioner-led experiences.
          </p>
        </div>

        {/* Visual 4-Step Cycle: LEARN -> EXPERIENCE -> REFLECT -> APPLY */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
              The 4-Step Curio Loop
            </span>
            <span className="text-xs font-medium text-stone-400">
              Tap any step to explore
            </span>
          </div>

          {/* Desktop & Mobile Responsive Process Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {CURIO_CYCLE.map((cycle, idx) => {
              const IconComponent = STEP_ICONS[cycle.step] || Sparkles;
              const isActive = activeStep === idx;

              return (
                <button
                  key={cycle.step}
                  id={`curio-cycle-step-${cycle.step}`}
                  onClick={() => setActiveStep(idx)}
                  className={`p-4 sm:p-5 rounded-2xl border text-left transition-all cursor-pointer relative overflow-hidden ${
                    isActive
                      ? 'border-stone-950 bg-stone-900 text-white shadow-md'
                      : 'border-stone-200 bg-stone-50/70 hover:bg-stone-100 text-stone-800'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-xs font-bold tracking-widest ${
                        isActive ? 'text-amber-400' : 'text-stone-400'
                      }`}
                    >
                      STEP {cycle.step}
                    </span>
                    <IconComponent
                      className={`w-5 h-5 ${
                        isActive ? 'text-amber-400' : 'text-stone-400'
                      }`}
                    />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold font-display tracking-tight mb-1">
                    {cycle.label}
                  </h3>
                  <p
                    className={`text-xs leading-relaxed line-clamp-2 ${
                      isActive ? 'text-stone-300' : 'text-stone-500'
                    }`}
                  >
                    {cycle.title}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Step Deep Dive Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-stone-50 border border-stone-200/90 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-200/80 mb-4">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-xl bg-stone-900 text-amber-400 font-bold font-display text-sm flex items-center justify-center shrink-0">
                {CURIO_CYCLE[activeStep].step}
              </span>
              <div>
                <h4 className="text-lg sm:text-xl font-bold font-display text-stone-950">
                  {CURIO_CYCLE[activeStep].label}: {CURIO_CYCLE[activeStep].title}
                </h4>
                <p className="text-xs text-stone-500">
                  Core method: Interactive real-world application
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-stone-200 text-stone-700">
                Age-Appropriate Dynamic
              </span>
            </div>
          </div>

          <p className="text-sm sm:text-base text-stone-700 leading-relaxed mb-4">
            {CURIO_CYCLE[activeStep].description}
          </p>

          <div className="flex flex-wrap items-center gap-2 pt-2 text-xs font-medium text-stone-600">
            <span className="px-2.5 py-1 bg-white rounded-md border border-stone-200">
              ✓ Active participation
            </span>
            <span className="px-2.5 py-1 bg-white rounded-md border border-stone-200">
              ✓ Practitioner guided
            </span>
            <span className="px-2.5 py-1 bg-white rounded-md border border-stone-200">
              ✓ Immediate peer feedback
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
