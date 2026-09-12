import { useState } from 'react';
import { HelpCircle, ArrowRight, Sparkles, CheckCircle, RefreshCw } from 'lucide-react';

interface ParentQuizProps {
  onSelectRecommendedInterests: (interests: string[]) => void;
  onScrollToRegister: () => void;
}

export default function ParentQuiz({
  onSelectRecommendedInterests,
  onScrollToRegister
}: ParentQuizProps) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const questions = [
    {
      title: 'Speaking & Confidence',
      prompt: 'When asked to share their ideas or speak in front of unfamiliar people, your child usually...',
      options: [
        { label: 'Hesitates or prefers to stay quiet', tag: 'Communication & Public Speaking' },
        { label: 'Talks comfortably with close friends, but holds back in groups', tag: 'Confidence & Self-Expression' },
        { label: 'Speaks readily, but could learn to structure arguments better', tag: 'Critical Thinking & Problem Solving' }
      ]
    },
    {
      title: 'Financial & Practical Literacy',
      prompt: 'How does your child currently perceive money and value in everyday life?',
      options: [
        { label: 'Thinks of money mostly as a card or app tap; unaware of real costs', tag: 'Money & Financial Literacy' },
        { label: 'Understands basic math formulas, but not real budgeting or trade-offs', tag: 'Decision Making' },
        { label: 'Curious about business or starting a project of their own', tag: 'Entrepreneurship' }
      ]
    },
    {
      title: 'Time & Decision Autonomy',
      prompt: 'When managing schoolwork, extracurriculars, or peer conflicts, they...',
      options: [
        { label: 'Struggle with procrastination and screen distractions', tag: 'Time Management' },
        { label: 'Rely heavily on parents to make decisions or resolve conflicts', tag: 'Interpersonal Skills' },
        { label: 'Handle tasks well, but get stressed or anxious under pressure', tag: 'Emotional Intelligence' }
      ]
    }
  ];

  const handleSelectOption = (optionIndex: number) => {
    const nextAnswers = [...answers, optionIndex];
    setAnswers(nextAnswers);

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      // Completed quiz
      setStep(questions.length);
    }
  };

  const resetQuiz = () => {
    setStep(0);
    setAnswers([]);
  };

  // Compute recommended areas
  const getRecommendations = () => {
    const recommended: string[] = [];
    answers.forEach((ansIdx, qIdx) => {
      const opt = questions[qIdx]?.options[ansIdx];
      if (opt && !recommended.includes(opt.tag)) {
        recommended.push(opt.tag);
      }
    });
    return recommended;
  };

  return (
    <section
      id="curiosity-check"
      className="py-14 sm:py-20 bg-stone-100/70 border-b border-stone-200/80"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-stone-200 text-stone-700 text-xs font-semibold uppercase tracking-wider mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>45-Second Parent Reflection</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-stone-950">
            Is Curio right for your child?
          </h2>
          <p className="text-sm text-stone-600 mt-2">
            Answer 3 quick questions to identify the specific real-world areas where your child would benefit most.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-stone-200 p-5 sm:p-8 shadow-xs">
          {step < questions.length ? (
            <div>
              {/* Progress bar */}
              <div className="flex items-center justify-between text-xs font-semibold text-stone-400 mb-3">
                <span className="uppercase tracking-wider">
                  Question {step + 1} of {questions.length} • {questions[step].title}
                </span>
                <span>{Math.round(((step + 1) / questions.length) * 100)}%</span>
              </div>
              <div className="w-full h-1.5 bg-stone-100 rounded-full mb-6 overflow-hidden">
                <div
                  className="h-full bg-stone-900 rounded-full transition-all duration-300"
                  style={{ width: `${((step + 1) / questions.length) * 100}%` }}
                />
              </div>

              {/* Question prompt */}
              <h3 className="text-base sm:text-lg font-bold font-display text-stone-900 mb-5">
                {questions[step].prompt}
              </h3>

              {/* Options */}
              <div className="space-y-3">
                {questions[step].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    className="w-full p-4 rounded-xl border border-stone-200 bg-stone-50/50 hover:bg-stone-100 hover:border-stone-400 text-left text-sm font-medium text-stone-800 transition-all flex items-center justify-between group cursor-pointer active:scale-99"
                  >
                    <span>{option.label}</span>
                    <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-stone-900 group-hover:translate-x-1 transition-all shrink-0 ml-3" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Results Screen */
            <div className="text-center py-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-700 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-display text-stone-950 mb-2">
                Identified Growth Pathways
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto mb-6">
                Based on your answers, these key Curio areas offer the highest immediate developmental leverage for your child:
              </p>

              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {getRecommendations().map((tag, i) => (
                  <span
                    key={i}
                    className="px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-900 text-xs sm:text-sm font-semibold"
                  >
                    ★ {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={() => {
                    onSelectRecommendedInterests(getRecommendations());
                    onScrollToRegister();
                  }}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-stone-900 text-white text-sm font-semibold hover:bg-indigo-700 transition-colors shadow-xs cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Apply to Register Interest</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={resetQuiz}
                  className="px-4 py-3 rounded-xl text-xs font-semibold text-stone-500 hover:text-stone-800 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Start over</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
