import { Calendar, Users, Sparkles, UserCheck, Shield, Clock, Compass, BookOpen } from 'lucide-react';

export default function ProgramFormat() {
  const formatPillars = [
    {
      title: 'Weekend Sessions',
      subtitle: 'Non-disruptive schedule',
      description: 'Scheduled on weekends so learning complements school without compounding academic weekday fatigue.',
      icon: Calendar
    },
    {
      title: 'Small Cohorts',
      subtitle: 'High engagement ratio',
      description: 'Intentionally capped group sizes to ensure every young person speaks, leads, and receives facilitator attention.',
      icon: Users
    },
    {
      title: 'Interactive Experiences',
      subtitle: '100% active participation',
      description: 'Role-playing, crisis simulations, mock boardrooms, peer reviews, and collaborative problem-solving.',
      icon: Sparkles
    },
    {
      title: 'Practitioner-Led',
      subtitle: 'Real-world credibility',
      description: 'Guided by founders, finance specialists, communication coaches, and experienced educators.',
      icon: UserCheck
    }
  ];

  return (
    <section
      id="program-format"
      className="py-16 md:py-24 bg-white border-b border-stone-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 13: Program Format */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-stone-100 text-stone-700 text-xs font-semibold uppercase tracking-wider mb-4">
            Flexible Structure
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-stone-950 tracking-tight leading-tight mb-4">
            Designed around experiences, not semesters.
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            Curio programs can range from focused workshops to multi-session learning journeys.
            Each experience is designed around a specific real-world skill or theme.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {formatPillars.map((pillar, idx) => {
            const IconComp = pillar.icon;
            return (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl border border-stone-200 bg-stone-50/60 flex flex-col justify-between hover:bg-white hover:border-stone-400/80 transition-all hover:shadow-xs"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white border border-stone-200 text-stone-900 flex items-center justify-center mb-4">
                    <IconComp className="w-5 h-5 text-indigo-700" />
                  </div>
                  <h3 className="text-lg font-bold font-display text-stone-950 mb-1">
                    {pillar.title}
                  </h3>
                  <span className="text-xs font-semibold text-stone-500 block mb-3">
                    {pillar.subtitle}
                  </span>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section 14: Age Group */}
        <div className="rounded-3xl border border-stone-200 bg-stone-900 text-white p-6 sm:p-10 lg:p-12 overflow-hidden relative">
          <div className="max-w-3xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-stone-800 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4 border border-amber-400/20">
              Target Eligibility
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold font-display text-white mb-4">
              Built for curious minds.
            </h3>
            <p className="text-base sm:text-lg text-stone-300 leading-relaxed mb-6">
              Designed initially for school-age children, broadly around <strong className="text-white">10–16 years</strong> (typically Classes 6–10),
              with programs structured carefully around age and developmental stage.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-xl bg-stone-800/80 border border-stone-700/60">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">
                  Junior Cohorts (Ages 10–12)
                </span>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Focus on curiosity, foundational money concepts, conversational confidence, and collaborative play.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-800/80 border border-stone-700/60">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">
                  Senior Cohorts (Ages 13–16)
                </span>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Focus on critical thinking, ethical dilemmas, micro-entrepreneurship, negotiation, and digital awareness.
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-stone-950/70 border border-stone-800 flex items-center gap-2.5 text-xs text-stone-400">
              <Compass className="w-4 h-4 text-amber-400 shrink-0" />
              <span>
                <strong>Note:</strong> Program-specific age eligibility and cohort groupings may vary based on module depth.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
