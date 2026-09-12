import { useState } from 'react';
import { FAQ_LIST } from '../data/curioData';
import { ChevronDown, HelpCircle, Search, Sparkles } from 'lucide-react';

export default function FaqSection() {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1'); // Open first by default
  const [search, setSearch] = useState('');

  const filteredFaqs = FAQ_LIST.filter(
    (faq) =>
      faq.question.toLowerCase().includes(search.toLowerCase()) ||
      faq.answer.toLowerCase().includes(search.toLowerCase())
  );

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section
      id="faq"
      className="py-16 md:py-24 bg-white border-b border-stone-200/80"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-stone-100 text-stone-700 text-xs font-semibold uppercase tracking-wider mb-4">
            Clarity for Parents
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-stone-950 tracking-tight leading-tight mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-stone-600">
            Straightforward answers to the most common questions parents ask about Curio.
          </p>
        </div>

        {/* Quick Search */}
        <div className="relative mb-6">
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search questions (e.g. offline, subjects, tutor)..."
            className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl placeholder:text-stone-400 focus:outline-hidden focus:border-stone-900 focus:bg-white transition-all text-stone-800"
          />
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;

            return (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className="rounded-2xl border border-stone-200 overflow-hidden bg-stone-50/40 transition-all hover:border-stone-300"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-hidden bg-white hover:bg-stone-50/80 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold font-display text-stone-900">
                    {faq.question}
                  </span>
                  <div
                    className={`w-6 h-6 rounded-full bg-stone-100 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-stone-900 text-white' : 'text-stone-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="p-4 sm:p-5 pt-0 sm:pt-0 bg-white border-t border-stone-100 text-xs sm:text-sm text-stone-600 leading-relaxed animate-in fade-in duration-200">
                    <p className="mt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {filteredFaqs.length === 0 && (
          <div className="p-8 text-center rounded-2xl bg-stone-50 border border-stone-200 text-stone-500 text-xs sm:text-sm">
            No questions match "{search}". You can ask any question in the registration form below.
          </div>
        )}
      </div>
    </section>
  );
}
