import { useState } from 'react';
import { ArrowRight, ChevronDown, Sparkles, Users, Compass, ShieldCheck, CheckCircle2, ChevronRight } from 'lucide-react';
import { PARENT_PROVOCATIONS } from '../data/curioData';

interface HeroProps {
  onExploreClick: () => void;
  onCurriculumClick: () => void;
}

export default function Hero({ onExploreClick, onCurriculumClick }: HeroProps) {
  const [activeProvocation, setActiveProvocation] = useState(0);

  return (
    <section
      id="hero-section"
      className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden border-b border-stone-200/70"
    >
      {/* Subtle architectural grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Core Brand Anchor - Mobile First */}
        <div className="flex flex-col items-start max-w-4xl">
          {/* Positioning Eyebrow Pill */}
          <div
            id="hero-positioning-pill"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-900 text-stone-100 text-xs font-semibold tracking-wide mb-5 shadow-xs"
          >
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span>School + Curio = A Complete Education</span>
          </div>

          {/* Core Tension Statement */}
          <p className="text-base sm:text-lg md:text-xl font-medium text-stone-600 mb-3 tracking-tight">
            School prepares children for the classroom.{' '}
            <span className="text-stone-950 font-semibold underline decoration-amber-500/80 decoration-2 underline-offset-4">
              Curio prepares them for the world.
            </span>
          </p>

          {/* Primary Bold Headline */}
          <h1
            id="hero-main-headline"
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-stone-950 leading-[1.12] mb-6 text-balance"
          >
            What if school taught everything your child needs for exams —{' '}
            <span className="text-stone-950 underline decoration-indigo-600/40 decoration-wavy decoration-2">
              but not everything they need for life?
            </span>
          </h1>

          {/* Supporting Copy */}
          <p
            id="hero-supporting-copy"
            className="text-base sm:text-lg md:text-xl text-stone-600 leading-relaxed max-w-3xl mb-8"
          >
            Curio is an experiential learning program designed to help children build the practical skills,
            confidence and real-world understanding that traditional classrooms often leave out.
          </p>

          {/* Action CTAs - Responsive Full Width on Mobile, Inline on Desktop */}
          <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-12">
            <button
              id="hero-primary-cta-btn"
              onClick={onExploreClick}
              className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl text-base font-semibold bg-stone-900 text-white shadow-md hover:bg-indigo-700 active:scale-98 transition-all cursor-pointer group"
            >
              <span>Explore Curio / Register Interest</span>
              <ArrowRight className="w-5 h-5 text-amber-400 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              id="hero-secondary-cta-btn"
              onClick={onCurriculumClick}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-medium bg-white text-stone-800 border border-stone-300 hover:bg-stone-100 hover:border-stone-400 active:scale-98 transition-all cursor-pointer"
            >
              <span>What will my child learn?</span>
              <ChevronDown className="w-4 h-4 text-stone-500" />
            </button>
          </div>
        </div>

        {/* Hero Visual: Modern Workshop / Innovation Lab Environment */}
        <div
          id="hero-workshop-showcase"
          className="w-full rounded-2xl border border-stone-200 bg-white overflow-hidden shadow-sm"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left: Interactive Real-World Workshop Preview */}
            <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[380px] bg-stone-900 overflow-hidden flex flex-col justify-end p-6 sm:p-8">
              {/* High quality compressed responsive imagery representing youth innovation */}
              <picture>
                <source
                  type="image/webp"
                  srcSet="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=75 600w, https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=75 900w, https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80 1200w"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 800px"
                />
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=75"
                  srcSet="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=75 600w, https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=75 900w, https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80 1200w"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 800px"
                  alt="Teenagers collaborating in a modern workshop innovation lab"
                  width="1200"
                  height="800"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover object-center opacity-45 mix-blend-luminosity hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent" />

              <div className="relative z-10">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-500/20 text-amber-300 text-xs font-medium border border-amber-400/30">
                    <Sparkles className="w-3.5 h-3.5" />
                    Interactive Simulation Lab
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-stone-800/80 text-stone-300 text-xs font-medium border border-stone-700">
                    <Users className="w-3.5 h-3.5" />
                    Small Cohorts (Ages 10–16)
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-2 leading-snug">
                  Learning through action, not passive memorisation.
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm max-w-lg leading-relaxed">
                  Real dilemmas, live group negotiations, budgeting scenarios, and public presentations
                  led by industry practitioners.
                </p>
              </div>
            </div>

            {/* Right: Parent Provocations / Mindset Ticker */}
            <div className="lg:col-span-5 p-5 sm:p-7 bg-stone-100/70 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-stone-200">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
                    The Questions Parents Ask
                  </span>
                  <span className="text-xs font-semibold text-stone-400">
                    {activeProvocation + 1} of {PARENT_PROVOCATIONS.length}
                  </span>
                </div>

                {/* Active Thought Card */}
                <div className="p-4 sm:p-5 rounded-xl bg-white border border-stone-200 shadow-xs mb-4 min-h-[140px] flex flex-col justify-between">
                  <div>
                    <span className="inline-block text-[11px] font-bold text-indigo-700 uppercase tracking-wider mb-2">
                      {PARENT_PROVOCATIONS[activeProvocation].highlight}
                    </span>
                    <p className="text-stone-900 font-medium text-sm sm:text-base leading-snug">
                      "{PARENT_PROVOCATIONS[activeProvocation].quote}"
                    </p>
                  </div>
                  <div className="mt-3 pt-2.5 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-[11px] font-medium text-stone-500">
                      Curio Module: <strong className="text-stone-800">{PARENT_PROVOCATIONS[activeProvocation].topic}</strong>
                    </span>
                  </div>
                </div>

                {/* Ticker Selector Dots / Quick Taps for Mobile */}
                <div className="flex items-center gap-1.5 mb-2">
                  {PARENT_PROVOCATIONS.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveProvocation(idx)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        activeProvocation === idx
                          ? 'w-6 bg-stone-900'
                          : 'w-2 bg-stone-300 hover:bg-stone-400'
                      }`}
                      aria-label={`View provocation ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Bottom Quick Feature Highlights */}
              <div className="pt-4 border-t border-stone-200/80 grid grid-cols-2 gap-3 text-xs text-stone-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>No rote learning</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Practitioner-led</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Weekend sessions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Complements school</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
