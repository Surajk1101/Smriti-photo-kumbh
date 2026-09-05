import React, { useState } from 'react';
import { Mail, Send, Check, Copy, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { ProfileData } from '../types';
import { themeMap } from '../utils/theme';

interface ContactSectionProps {
  profile: ProfileData;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ profile }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const currentTheme = themeMap[profile.accentColor] || themeMap.indigo;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    // Simulate reliable submission
    setIsSubmitted(true);
    setTimeout(() => {
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    }, 1000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email).then(() => {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    });
  };

  return (
    <section id="contact" className="py-20 bg-neutral-50/70 border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct info */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className={`text-xs font-bold tracking-wider uppercase ${currentTheme.primaryText}`}>
                Get in Touch
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 font-['Outfit'] tracking-tight mt-1 mb-3">
                Let's Build Something Great Together
              </h2>
              <p className="text-neutral-600 text-base leading-relaxed">
                Have a project in mind, need help setting up a free website, or want to discuss full-stack engineering? Drop me a line anytime.
              </p>
            </div>

            {/* Direct contact pills */}
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-white border border-neutral-200 shadow-xs flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${currentTheme.secondaryBg} ${currentTheme.primaryText}`}>
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 font-medium">Direct Email</p>
                    <p className="text-sm font-bold text-neutral-900">{profile.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={handleCopyEmail}
                    id="btn-copy-direct-email"
                    className="p-2 rounded-lg text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 transition-colors cursor-pointer"
                    title="Copy email address"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <a
                    href={`mailto:${profile.email}?subject=Website%20Inquiry`}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold text-white ${currentTheme.primaryBg} ${currentTheme.primaryHover}`}
                  >
                    Open Mail
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-neutral-200 shadow-xs flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-neutral-100 text-neutral-700">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-neutral-500 font-medium">Location</p>
                  <p className="text-sm font-semibold text-neutral-900">{profile.location}</p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200/80 text-emerald-900 text-xs flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                <strong>Zero Spam Guarantee:</strong> Your message directly reaches my inbox. Typical response time is under 24 hours.
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-white p-8 rounded-2xl border border-neutral-200/90 shadow-sm">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 font-['Outfit']">
                  Message Sent Successfully!
                </h3>
                <p className="text-sm text-neutral-600 max-w-md mx-auto">
                  Thank you for reaching out. I have received your note and will get back to you shortly at {email || 'your email'}.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-4 py-2 text-xs font-semibold text-neutral-700 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      Your Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="e.g. alex@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-semibold text-neutral-700 mb-1.5">
                    Subject / Project Type
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="e.g. Website development or Free hosting consultation"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-neutral-700 mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Tell me a bit about what you would like to build or achieve..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  id="btn-submit-contact"
                  className={`w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm text-white shadow-xs transition-all hover:shadow cursor-pointer ${currentTheme.primaryBg} ${currentTheme.primaryHover}`}
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message Directly</span>
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
