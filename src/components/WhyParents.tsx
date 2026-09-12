import { PARENT_BENEFITS } from '../data/curioData';
import { Sun, Eye, Lightbulb, Wrench, Compass, Sparkles, HelpCircle } from 'lucide-react';

const BENEFIT_ICONS: Record<string, typeof Sun> = {
  Sun,
  Eye,
  Lightbulb,
  Wrench,
  Compass
};

export default function WhyParents() {
  return (
    <section
      id="why-parents-section"
      className="py-16 md:py-24 bg-white border-b border-stone-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-stone-100 text-stone-700 text-xs font-semibold uppercase tracking-wider mb-4">
            Parent Perspectives
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-stone-950 tracking-tight leading-tight mb-4">
            Because the world your child is entering is changing faster than the curriculum.
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            School teaches children how to pass examinations. Curio gives them the internal confidence,
            intellectual tools, and life literacy to navigate their teen and adult years with resilience.
          </p>
        </div>

        {/* 5 Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {PARENT_BENEFITS.map((benefit, idx) => {
            const IconComp = BENEFIT_ICONS[benefit.icon] || Sparkles;

            return (
              <div
                key={benefit.id}
                id={`benefit-card-${benefit.id}`}
                className="rounded-2xl border border-stone-200 bg-stone-50/50 p-6 flex flex-col justify-between hover:bg-white hover:border-stone-400/80 transition-all hover:shadow-xs group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-md border border-indigo-100">
                      {benefit.tag}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-white text-stone-900 border border-stone-200 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-amber-400 transition-colors">
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold font-display text-stone-950 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed mb-5">
                    {benefit.description}
                  </p>
                </div>

                {/* Parent Mindset Resonance Quote */}
                <div className="pt-4 border-t border-stone-200/80">
                  <div className="flex items-start gap-2">
                    <HelpCircle className="w-4 h-4 text-stone-400 mt-0.5 shrink-0" />
                    <p className="text-xs font-semibold text-stone-800 italic">
                      {benefit.parentThought}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

          {/* 6th Card: Realistic Expectations Note */}
          <div className="rounded-2xl border border-dashed border-stone-300 bg-white p-6 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block mb-3">
                No Gimmicks • Authentic Growth
              </span>
              <h4 className="text-lg font-bold font-display text-stone-900 mb-2">
                Realistic, Long-Term Capability
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                We make no false promises of "overnight genius" or "guaranteed transformations".
                Growth comes from repeated exposure to unfamiliar situations, honest peer discussions,
                and guided practice in safe environments.
              </p>
            </div>
            <div className="pt-4 border-t border-stone-100 mt-4 text-[11px] font-semibold text-stone-500">
              Parent-first transparency
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
