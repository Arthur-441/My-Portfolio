import React from 'react';
import { GraduationCap, School, Calendar, MapPin } from 'lucide-react';
import { EducationEntry } from '../data/portfolio';

interface EducationProps {
  entries: EducationEntry[];
}

export const Education: React.FC<EducationProps> = ({ entries }) => {
  return (
    <section id="education" className="py-20 border-b border-slate-100 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
            Academic Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mt-2 mb-4">
            Education Timeline
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            My verified educational history, outlining my current undergraduate
            studies in Data Science and Analytics and preceding secondary education.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-200 ml-3 sm:ml-6 space-y-10 pl-6 sm:pl-8">
          {entries.map((entry, index) => {
            const isCurrent = entry.period.toLowerCase().includes('current') || index === 0;

            return (
              <div key={entry.id || index} className="relative group">
                {/* Node marker on the line */}
                <div
                  className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 transition-colors ${
                    isCurrent
                      ? 'bg-blue-600 border-white ring-4 ring-blue-100'
                      : 'bg-white border-slate-400 group-hover:border-slate-600'
                  }`}
                />

                {/* Card Content */}
                <div className="bg-white rounded-xl border border-slate-200/80 p-6 sm:p-7 hover:border-slate-300 transition-colors shadow-2xs">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                    <div>
                      {/* Institution Title */}
                      <div className="flex items-center gap-2">
                        {isCurrent ? (
                          <GraduationCap className="w-5 h-5 text-blue-600 shrink-0" />
                        ) : (
                          <School className="w-5 h-5 text-slate-500 shrink-0" />
                        )}
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                          {entry.institution}
                        </h3>
                      </div>

                      {/* Degree / Programme */}
                      <p className="text-sm sm:text-base font-semibold text-slate-700 mt-1">
                        {entry.qualificationOrLevel}
                      </p>
                    </div>

                    {/* Timeline date / semester status */}
                    <div className="flex flex-col sm:items-end gap-1 shrink-0">
                      <div className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        <span>{entry.period}</span>
                      </div>
                      {entry.statusBadge && (
                        <span className="text-xs font-semibold text-blue-700">
                          {entry.statusBadge}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Details / Summary */}
                  {entry.details && (
                    <p className="text-sm text-slate-600 leading-relaxed mt-2">
                      {entry.details}
                    </p>
                  )}

                  {/* Location unboxed metadata */}
                  {entry.location && (
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-slate-400">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{entry.location}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
