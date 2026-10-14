import React from 'react';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  footerNote: string;
}

export const Footer: React.FC<FooterProps> = ({ footerNote }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
          <p className="text-xs sm:text-sm text-slate-500 font-normal">
            {footerNote}
          </p>

          <div className="flex items-center gap-6">
            <span className="text-xs text-slate-400">
              Uganda Christian University · BSc Data Science & Analytics
            </span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-blue-600 transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
