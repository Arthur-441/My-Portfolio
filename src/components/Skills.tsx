import React from 'react';
import { Terminal, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { SkillCategory } from '../data/portfolio';

interface SkillsProps {
  technical: SkillCategory;
  personal: SkillCategory;
}

export const Skills: React.FC<SkillsProps> = ({ technical, personal }) => {
  return (
    <section id="skills" className="py-20 border-b border-slate-100 bg-slate-50/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
            Competencies & Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mt-2 mb-4">
            Skills & Development
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Presented honestly as skills I am actively developing, practicing in my
            university coursework, and eager to apply in practical problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Category 1: Technical Skills */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-7 shadow-xs">
            <div className="flex items-center gap-3 pb-5 border-b border-slate-100">
              <div className="p-2.5 rounded-lg bg-blue-50 text-blue-700">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  {technical.title}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  {technical.description}
                </p>
              </div>
            </div>

            <ul className="mt-6 space-y-4">
              {technical.items.map((item, idx) => (
                <li
                  key={idx}
                  className="p-3.5 rounded-xl border border-slate-100 bg-slate-50/60 hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-slate-900 leading-snug">
                        {item.name}
                      </p>
                      {item.note && (
                        <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                          {item.note}
                        </p>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Category 2: Personal Skills */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-7 shadow-xs">
            <div className="flex items-center gap-3 pb-5 border-b border-slate-100">
              <div className="p-2.5 rounded-lg bg-indigo-50 text-indigo-700">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  {personal.title}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  {personal.description}
                </p>
              </div>
            </div>

            <ul className="mt-6 space-y-4">
              {personal.items.map((item, idx) => (
                <li
                  key={idx}
                  className="p-3.5 rounded-xl border border-slate-100 bg-slate-50/60 hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-slate-900 leading-snug">
                        {item.name}
                      </p>
                      {item.note && (
                        <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                          {item.note}
                        </p>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Honest learning philosophy note */}
        <div className="mt-8 p-4 rounded-xl border border-blue-100 bg-blue-50/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-600">
          <p className="leading-relaxed">
            <span className="font-semibold text-slate-900">Academic Transparency:</span> As a first-year student, my priority is thorough comprehension over superficial breadth. I focus on developing clean code syntax, sound logic, and repeatable workflows.
          </p>
        </div>
      </div>
    </section>
  );
};
