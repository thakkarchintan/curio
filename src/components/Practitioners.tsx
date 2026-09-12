import { Briefcase, TrendingUp, Mic, Users2, Code2, Sparkles, CheckCircle2 } from 'lucide-react';
import { PRACTITIONER_PROFILES } from '../data/curioData';

const PRACTITIONER_ICONS = [
  Briefcase,
  TrendingUp,
  Mic,
  Users2,
  Code2
];

export default function Practitioners() {
  return (
    <section
      id="practitioners-section"
      className="py-16 md:py-24 bg-stone-100/60 border-b border-stone-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-stone-200/80 text-stone-700 text-xs font-semibold uppercase tracking-wider mb-4">
            The Faculty Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-stone-950 tracking-tight leading-tight mb-2">
            Don't just learn about the real world.
          </h2>
          <p className="text-xl sm:text-2xl font-bold font-display text-indigo-800 mb-5">
            Meet people who live in it.
          </p>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            Curio brings credible professionals, founders, and specialists directly into the room.
            Children hear real stories of failures, negotiations, budgeting decisions, and creative leaps
            from people who actually do this every day.
          </p>
        </div>

        {/* Practitioner Domains Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {PRACTITIONER_PROFILES.map((item, idx) => {
            const IconComp = PRACTITIONER_ICONS[idx] || Sparkles;

            return (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-stone-200 shadow-xs flex flex-col justify-between hover:border-stone-400/80 transition-all"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-stone-100 text-stone-900 flex items-center justify-center mb-4">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold font-display text-stone-950 mb-2">
                    {item.role}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-indigo-700 mb-3">
                    Focus: {item.focus}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 bg-stone-50/70 -mx-5 -mb-5 sm:-mx-6 sm:-mb-6 p-4 rounded-b-2xl">
                  <p className="text-xs text-stone-600 italic">
                    "{item.quote}"
                  </p>
                </div>
              </div>
            );
          })}

          {/* Plus domain card */}
          <div className="p-5 sm:p-6 rounded-2xl border-2 border-dashed border-stone-300 bg-stone-50/50 flex flex-col justify-center items-start text-stone-600">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-1">
              Curated per workshop
            </span>
            <h4 className="text-base font-bold font-display text-stone-800 mb-2">
              Topic-Specific Specialists
            </h4>
            <p className="text-xs leading-relaxed text-stone-500">
              From debate adjudicators and investigative journalists to civic architects and behavioral coaches,
              each module brings practitioners matched to the topic.
            </p>
          </div>
        </div>

        {/* Safeguarding & Pedagogy Note */}
        <div className="p-4 rounded-xl bg-white border border-stone-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-stone-600">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>All sessions are structured with certified youth pedagogical facilitators alongside practitioners.</span>
          </div>
          <span className="text-[11px] font-semibold text-stone-500 bg-stone-100 px-2.5 py-1 rounded-md">
            Safe • Facilitated • Age-Vetted
          </span>
        </div>
      </div>
    </section>
  );
}
