/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { initialPortfolioData } from './data/portfolio';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Goals } from './components/Goals';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const portfolio = initialPortfolioData;

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900 flex flex-col justify-between">
      {/* Top Navigation Bar */}
      <Navbar fullName={portfolio.fullName} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* SECTION 1: HOME */}
        <Hero
          fullName={portfolio.fullName}
          headline={portfolio.headline}
          intro={portfolio.heroIntro}
          avatarUrl={portfolio.avatarUrl}
          status={portfolio.status}
          location={portfolio.contact.location}
        />

        {/* SECTION 2: ABOUT ME */}
        <About
          summary={portfolio.about.summary}
          focusAreas={portfolio.about.focusAreas}
        />

        {/* SECTION 3: SKILLS */}
        <Skills
          technical={portfolio.skills.technical}
          personal={portfolio.skills.personal}
        />

        {/* SECTION 4: EDUCATION */}
        <Education entries={portfolio.education} />

        {/* SECTION 5: GOALS */}
        <Goals
          statement={portfolio.goals.statement}
          pillars={portfolio.goals.pillars}
        />

        {/* SECTION 6: CONTACT */}
        <Contact
          email={portfolio.contact.email}
          githubUsername={portfolio.contact.githubUsername}
          location={portfolio.contact.location}
          note={portfolio.contact.note}
        />
      </main>

      {/* FOOTER */}
      <Footer footerNote={portfolio.footerNote} />
    </div>
  );
}
