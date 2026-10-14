import React, { useState } from 'react';
import { Mail, Check, Copy, ExternalLink, Github, MessageSquare, MapPin } from 'lucide-react';

interface ContactProps {
  email: string;
  githubUsername?: string;
  location?: string;
  note: string;
}

export const Contact: React.FC<ContactProps> = ({
  email,
  githubUsername,
  location,
  note,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    if (!email) return;
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const hasGithub = Boolean(githubUsername && githubUsername.trim() !== '');

  return (
    <section id="contact" className="py-20 border-b border-slate-100 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mt-2 mb-4">
            Contact
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {note}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Primary Email Card */}
          <div className="p-7 rounded-2xl border border-slate-200/90 bg-slate-50/50 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">Email Address</h3>
                  <p className="text-xs text-slate-500">Direct student communication</p>
                </div>
              </div>

              <div className="p-4 bg-white rounded-xl border border-slate-200/70 mb-5">
                <p className="text-xs text-slate-400 font-medium mb-1">Primary Email</p>
                <p className="text-base sm:text-lg font-semibold text-slate-900 select-all break-all">
                  {email || 'arthurshalomz81@gmail.com'}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${email || 'arthurshalomz81@gmail.com'}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-blue-600 rounded-lg transition-colors cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Send Email</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700 font-semibold">Copied to Clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-500" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Secondary Details & Optional Profiles */}
          <div className="space-y-4">
            {/* GitHub Profile Card - Only shown if real information has been provided */}
            {hasGithub && (
              <div className="p-6 rounded-2xl border border-slate-200/90 bg-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-slate-100 text-slate-800 rounded-lg">
                      <Github className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">GitHub Profile</h4>
                      <p className="text-xs text-slate-500">@{githubUsername}</p>
                    </div>
                  </div>

                  <a
                    href={`https://github.com/${githubUsername}`}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 hover:text-blue-600 border border-slate-200 rounded-lg transition-colors"
                  >
                    <span>View Profile</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            )}

            {/* Academic Location Card */}
            {location && (
              <div className="p-6 rounded-2xl border border-slate-200/90 bg-white">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-slate-100 text-slate-700 rounded-lg">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Academic Institution Location</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Uganda Christian University (UCU), {location}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Academic Inquiries note */}
            <div className="p-6 rounded-2xl border border-slate-200/90 bg-white">
              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-blue-50 text-blue-600 rounded-lg mt-0.5">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Academic & Study Collaborations</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Always glad to connect with fellow students, course group partners, and academic mentors on computing, mathematics, and introductory data analysis coursework.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
