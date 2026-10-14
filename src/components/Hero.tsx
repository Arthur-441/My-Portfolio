import React, { useState } from 'react';
import { ArrowDown, Mail, GraduationCap, MapPin } from 'lucide-react';

interface HeroProps {
  fullName: string;
  headline: string;
  intro: string;
  avatarUrl: string;
  status: string;
  location: string;
}

export const Hero: React.FC<HeroProps> = ({
  fullName,
  headline,
  intro,
  avatarUrl,
  status,
  location,
}) => {
  const [imageError, setImageError] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24 border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Typographic Presentation */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Academic Status Label (Clean unboxed metadata) */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-700 mb-4">
              <GraduationCap className="w-4 h-4 text-blue-600 shrink-0" />
              <span>{status}</span>
            </div>

            {/* Primary Name Display */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-4">
              {fullName}
            </h1>

            {/* Subtitle / Headline */}
            <p className="text-lg sm:text-xl font-medium text-slate-700 mb-6 leading-relaxed">
              {headline}
            </p>

            {/* Introduction paragraph */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl">
              {intro}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <button
                onClick={() => scrollTo('about')}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-slate-900 hover:bg-blue-600 rounded-lg transition-colors cursor-pointer shadow-xs"
              >
                <span>About Me</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg transition-colors cursor-pointer"
              >
                <Mail className="w-4 h-4 text-slate-600" />
                <span>Contact</span>
              </button>
            </div>

            {/* Subtle verification footnote */}
            <div className="mt-10 pt-6 border-t border-slate-100 flex items-center gap-3 text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>{location}</span>
              </div>
              <span aria-hidden="true">·</span>
              <span>Semester 1</span>
              <span aria-hidden="true">·</span>
              <span>Foundational Studies</span>
            </div>
          </div>

          {/* Right Column: Authentic Student Portrait & Academic Anchor */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xs sm:max-w-sm">
              <div className="relative overflow-hidden rounded-2xl bg-slate-100 border border-slate-200/90 shadow-sm aspect-[4/5]">
                {!imageError ? (
                  <img
                    src={avatarUrl}
                    alt={`${fullName} - First-Year University Student`}
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover object-[center_68%] transition-transform duration-300 hover:scale-[1.02]"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-slate-50 to-slate-100">
                    <div className="w-20 h-20 rounded-full bg-blue-100 text-blue-700 font-bold text-2xl flex items-center justify-center mb-3">
                      ALS
                    </div>
                    <p className="font-semibold text-slate-800 text-base">{fullName}</p>
                    <p className="text-xs text-slate-500 mt-1">Uganda Christian University</p>
                  </div>
                )}
              </div>

              {/* Clean unboxed caption card */}
              <div className="mt-3.5 px-3 py-2 bg-slate-50 rounded-lg border border-slate-200/60 flex items-center justify-between text-xs text-slate-600">
                <span className="font-medium text-slate-900">Uganda Christian University</span>
                <span className="text-slate-500">Data Science & Analytics</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
