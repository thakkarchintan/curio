/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TheProblem from './components/TheProblem';
import WhatIsCurio from './components/WhatIsCurio';
import WhatTheyLearn from './components/WhatTheyLearn';
import ComparisonSection from './components/ComparisonSection';
import Practitioners from './components/Practitioners';
import WhyParents from './components/WhyParents';
import ExperienceJourney from './components/ExperienceJourney';
import ProgramFormat from './components/ProgramFormat';
import ParentQuiz from './components/ParentQuiz';
import RegistrationSection from './components/RegistrationSection';
import FaqSection from './components/FaqSection';
import FinalStatement from './components/FinalStatement';
import MobileStickyBar from './components/MobileStickyBar';

export default function App() {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const scrollToRegister = useCallback(() => {
    const el = document.getElementById('register-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const scrollToCurriculum = useCallback(() => {
    const el = document.getElementById('what-they-learn');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleSelectRecommendedInterests = useCallback((interests: string[]) => {
    setSelectedInterests(interests);
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col selection:bg-indigo-600 selection:text-white">
      {/* Top Navigation */}
      <Navbar onRegisterClick={scrollToRegister} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Section 5: Hero */}
        <Hero
          onExploreClick={scrollToRegister}
          onCurriculumClick={scrollToCurriculum}
        />

        {/* Section 6: The Problem */}
        <TheProblem />

        {/* Section 7: What is Curio */}
        <WhatIsCurio />

        {/* Section 8: What Will Children Learn (12 topics) */}
        <WhatTheyLearn />

        {/* Section 9: How Curio is Different ("Not another class") */}
        <ComparisonSection />

        {/* Section 10: Learn From People Who Actually Do It */}
        <Practitioners />

        {/* Section 11: Why Parents Should Consider Curio */}
        <WhyParents />

        {/* Section 12: The Curio Experience */}
        <ExperienceJourney />

        {/* Sections 13 & 14: Program Format & Age Group */}
        <ProgramFormat />

        {/* Interactive Parent Curiosity Check / Assessment */}
        <ParentQuiz
          onSelectRecommendedInterests={handleSelectRecommendedInterests}
          onScrollToRegister={scrollToRegister}
        />

        {/* Section 15: Parent CTA / Registration of Interest */}
        <RegistrationSection externalSelectedInterests={selectedInterests} />

        {/* Section 18: FAQ Section */}
        <FaqSection />
      </main>

      {/* Sections 16 & 17: Final Brand Statement & Footer */}
      <FinalStatement onRegisterClick={scrollToRegister} />

      {/* Mobile Sticky CTA Bar */}
      <MobileStickyBar onRegisterClick={scrollToRegister} />
    </div>
  );
}
