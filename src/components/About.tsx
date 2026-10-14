import React from 'react';
import { BookOpen, Users, Compass, MessageSquare } from 'lucide-react';

interface AboutProps {
  summary: string;
  focusAreas: Array<{
    title: string;
    description: string;
  }>;
}

export const About: React.FC<AboutProps> = ({ summary, focusAreas }) => {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <BookOpen className="w-5 h-5 text-blue-600" />;
      case 1:
        return <Users className="w-5 h-5 text-blue-600" />;
      case 2:
        return <Compass className="w-5 h-5 text-blue-600" />;
      case 3:
      default:
        return <MessageSquare className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="about" className="py-20 border-b border-slate-100 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Section Kicker */}
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
            Background & Mindset
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mt-2 mb-6">
            About Me
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed font-normal mb-12">
            {summary}
          </p>
        </div>

        {/* 4 Pillars of Learning and Growth */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 pt-2">
          {focusAreas.map((area, index) => (
            <div
              key={area.title}
              className="p-6 rounded-xl border border-slate-200/80 bg-slate-50/50 hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center gap-3.5 mb-3">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg shrink-0">
                  {getIcon(index)}
                </div>
                <h3 className="text-base font-semibold text-slate-900">
                  {area.title}
                </h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
