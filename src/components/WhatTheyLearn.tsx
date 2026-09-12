import { useState, useMemo } from 'react';
import { LEARNING_TOPICS } from '../data/curioData';
import { LearningTopic } from '../types';
import {
  MessageSquareQuote,
  Wallet,
  Rocket,
  Brain,
  Sparkles,
  Compass,
  Clock,
  ShieldCheck,
  Globe,
  HeartHandshake,
  Users,
  Award,
  Search,
  ChevronRight,
  CheckCircle2,
  Info
} from 'lucide-react';

const ICON_MAP: Record<string, typeof MessageSquareQuote> = {
  MessageSquareQuote,
  Wallet,
  Rocket,
  Brain,
  Sparkles,
  Compass,
  Clock,
  ShieldCheck,
  Globe,
  HeartHandshake,
  Users,
  Award
};

const CATEGORIES = [
  'All',
  'Communication',
  'Financial',
  'Thinking',
  'Personal',
  'Social'
] as const;

export default function WhatTheyLearn() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedTopicId, setExpandedTopicId] = useState<string | null>(null);

  const filteredTopics = useMemo(() => {
    return LEARNING_TOPICS.filter((topic) => {
      const matchesCategory =
        selectedCategory === 'All' || topic.category === selectedCategory;
      const matchesSearch =
        topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        topic.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        topic.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section
      id="what-they-learn"
      className="py-16 md:py-24 bg-stone-50/50 border-b border-stone-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-stone-200/80 text-stone-700 text-xs font-semibold uppercase tracking-wider mb-4">
            Curio Skill Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-stone-950 tracking-tight leading-tight mb-4">
            The things they wish someone had taught them earlier.
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed mb-3">
            Practical skills, independent judgment, and personal poise. These are key areas Curio can explore
            across its upcoming programs, workshops, and immersive journeys.
          </p>
          <div className="inline-flex items-center gap-2 text-xs font-medium text-amber-800 bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-200/60">
            <Info className="w-3.5 h-3.5 shrink-0" />
            <span>Curio programs explore selected themes in depth; specific cohort offerings will vary.</span>
          </div>
        </div>

        {/* Mobile Filter & Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          {/* Horizontally scrollable category pills on mobile */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
            {CATEGORIES.map((cat) => {
              const count =
                cat === 'All'
                  ? LEARNING_TOPICS.length
                  : LEARNING_TOPICS.filter((t) => t.category === cat).length;
              const isSelected = selectedCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-stone-900 text-white shadow-xs'
                      : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-100'
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isSelected ? 'bg-stone-700 text-stone-200' : 'bg-stone-100 text-stone-500'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills (e.g. money, speaking)..."
              className="w-full pl-9 pr-3.5 py-2 text-xs bg-white border border-stone-200 rounded-xl placeholder:text-stone-400 focus:outline-hidden focus:border-stone-900 focus:ring-1 focus:ring-stone-900 transition-all text-stone-800"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* 12 Learning Topic Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredTopics.map((topic) => {
            const IconComp = ICON_MAP[topic.icon] || Sparkles;
            const isExpanded = expandedTopicId === topic.id;

            return (
              <div
                key={topic.id}
                id={`topic-card-${topic.id}`}
                className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-6 flex flex-col justify-between hover:border-stone-400/80 transition-all hover:shadow-xs group"
              >
                <div>
                  {/* Category Tag & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 bg-stone-100 px-2.5 py-0.5 rounded-md">
                      {topic.category}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-stone-100 text-stone-900 flex items-center justify-center group-hover:bg-indigo-50 group-hover:text-indigo-700 transition-colors">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-lg font-bold font-display text-stone-950 tracking-tight leading-snug mb-1.5">
                    {topic.title}
                  </h3>
                  <p className="text-xs font-semibold text-indigo-700 mb-3">
                    {topic.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                    {topic.description}
                  </p>

                  {/* Key Skills Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {topic.keySkills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] px-2 py-0.5 rounded-md bg-stone-100/90 text-stone-700 font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Real-World Scenario / Tap for details */}
                <div className="pt-3 border-t border-stone-100">
                  {isExpanded ? (
                    <div className="p-3 bg-stone-50 rounded-xl text-xs text-stone-700 mb-2 animate-in fade-in duration-200">
                      <strong className="block text-[10px] uppercase font-bold text-stone-500 mb-1">
                        Real-World Workshop Scenario:
                      </strong>
                      <p className="italic leading-relaxed">{topic.realWorldPrompt}</p>
                      <button
                        onClick={() => setExpandedTopicId(null)}
                        className="mt-2 text-[11px] font-semibold text-stone-900 underline cursor-pointer"
                      >
                        Close scenario
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setExpandedTopicId(topic.id)}
                      className="w-full flex items-center justify-between text-xs font-semibold text-stone-700 hover:text-stone-950 py-1 cursor-pointer"
                    >
                      <span>See real-world scenario</span>
                      <ChevronRight className="w-3.5 h-3.5 text-stone-400 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {filteredTopics.length === 0 && (
          <div className="p-12 text-center rounded-2xl bg-white border border-stone-200 text-stone-500">
            <p className="text-sm font-medium">No skills match your search "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-3 text-xs font-semibold text-stone-900 underline cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
