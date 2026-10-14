import React from 'react';
import { Target, Layers, Code, FolderGit2 } from 'lucide-react';

interface GoalsProps {
  statement: string;
  pillars: Array<{
    title: string;
    description: string;
  }>;
}

export const Goals: React.FC<GoalsProps> = ({ statement, pillars }) => {
  const getGoalIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Layers className="w-5 h-5 text-blue-600" />;
      case 1:
        return <Code className="w-5 h-5 text-blue-600" />;
      case 2:
        return <Target className="w-5 h-5 text-blue-600" />;
      case 3:
      default:
        return <FolderGit2 className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="goals" className="py-20 border-b border-slate-100 bg-slate-50/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
            Aspirations & Next Steps
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mt-2 mb-4">
            Academic & Learning Goals
          </h2>
          <div className="p-5 rounded-xl border border-blue-100 bg-white shadow-2xs">
            <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-medium">
              "{statement}"
            </p>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="bg-white rounded-xl border border-slate-200/80 p-6 flex flex-col justify-between hover:border-slate-300 transition-colors shadow-2xs"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 bg-blue-50 text-blue-600 rounded-lg">
                    {getGoalIcon(index)}
                  </div>
                  <span className="text-xs font-bold text-slate-400 tabular-nums">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 text-[11px] font-medium text-blue-600 flex items-center gap-1">
                <span>In Progress</span>
                <span aria-hidden="true">·</span>
                <span>Semester 1</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
