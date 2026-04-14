import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Zap, MessageSquare, User, AtSign } from 'lucide-react';

const contactInfo = [
  { icon: <MapPin className="w-5 h-5" />, title: 'Our Address',     color: 'from-sky-500 to-cyan-500',   bg: 'bg-sky-50',    border: 'border-sky-100', tc: 'text-sky-600',    lines: ['RZ-91, Street No. 11,', 'East Sagarpur,', 'New Delhi – 110046, India'] },
  { icon: <Phone className="w-5 h-5" />,  title: 'Phone Numbers',   color: 'from-emerald-500 to-teal-500', bg: 'bg-emerald-50', border: 'border-emerald-100', tc: 'text-emerald-600', lines: ['+91-8447850714', '+91-7291009911'], links: ['tel:+918447850714', 'tel:+917291009911'] },
  { icon: <Mail className="w-5 h-5" />,   title: 'Email Addresses', color: 'from-violet-500 to-purple-500', bg: 'bg-violet-50', border: 'border-violet-100', tc: 'text-violet-600', lines: ['info@rtconsultancy.in', 'admin@rtconsultancy.in'], links: ['mailto:info@rtconsultancy.in', 'mailto:admin@rtconsultancy.in'] },
  { icon: <Clock className="w-5 h-5" />,  title: 'Business Hours',  color: 'from-amber-500 to-orange-500', bg: 'bg-amber-50',  border: 'border-amber-100',  tc: 'text-amber-600',  lines: ['Mon – Sat: 9:00 AM – 7:00 PM', 'Sunday: 10:00 AM – 4:00 PM', 'India Standard Time (IST)'] },
];

const faqs = [
  { q: 'How are your courses delivered?', a: 'We offer instructor-led classes in both in-person (Delhi) and virtual online formats, making training accessible worldwide.' },
  { q: 'Do you provide exam vouchers?',   a: 'Yes, we arrange certified exam vouchers for all major vendors including Cisco, Microsoft, CompTIA, and Red Hat.' },
  { q: 'Is corporate / group training available?', a: 'Absolutely! We specialise in corporate training with customised curriculum, flexible scheduling, and on-site delivery.' },
  { q: 'What is your refund policy?',     a: 'We offer a 100% satisfaction guarantee. If not satisfied within the first session, we arrange a full refund or course transfer.' },
];

const inputCls = 'w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-400 focus:bg-white transition-all duration-200 text-sm';
const iconInputCls = 'w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-400 focus:bg-white transition-all duration-200 text-sm';
const labelCls = 'block text-slate-700 text-sm font-semibold mb-2';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', course: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1600);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className="min-h-screen bg-slate-50">

      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 pt-14 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/8 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 rounded-full px-5 py-2 mb-7">
            <MessageSquare className="w-3.5 h-3.5 text-sky-400" />
            <span className="text-sky-300 text-xs font-bold uppercase tracking-wider">We'd Love to Hear From You</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-5 leading-tight">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Have questions about our courses? Want to enrol or schedule corporate training?
            Our team is ready to help you take the next step in your IT career.
          </p>
        </div>
      </section>

      {/* ── Contact info cards (overlap hero) ── */}
      <div className="max-w-7xl py-18 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 -mt-10 mb-14">
          {contactInfo.map((d, i) => (
            <div key={i} className={`bg-white rounded-2xl border ${d.border} shadow-md p-6 card-hover`}>
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${d.color} flex items-center justify-center text-white mb-4 shadow-md`}>
                {d.icon}
              </div>
              <h3 className="text-slate-900 font-bold text-sm mb-3">{d.title}</h3>
              <div className="space-y-1">
                {d.lines.map((line, j) =>
                  d.links ? (
                    <a key={j} href={d.links[j]} className={`block text-sm ${d.tc} font-semibold hover:opacity-75 transition-opacity`}>{line}</a>
                  ) : (
                    <p key={j} className="text-slate-500 text-sm leading-snug">{line}</p>
                  )
                )}
              </div>
            </div>
          ))}
        </div>

        {/* ── Form + sidebar ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 pb-16">

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 md:p-10">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 bg-sky-50 border border-sky-200 rounded-full px-4 py-1.5 mb-3">
                  <Send className="w-3.5 h-3.5 text-sky-600" />
                  <span className="text-sky-700 text-xs font-bold uppercase tracking-wider">Send Us a Message</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2 leading-tight">
                  Let's Start a Conversation
                </h2>
                <p className="text-slate-500 text-sm">
                  Fill out the form and our team will respond within 24 hours.
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-14">
                  <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-5 ring-8 ring-emerald-50">
                    <CheckCircle className="w-10 h-10 text-emerald-500" />
                  </div>
                  <h3 className="text-slate-900 font-black text-2xl mb-2">Message Sent!</h3>
                  <p className="text-slate-500 text-base max-w-xs mx-auto mb-7">
                    Thank you for reaching out! We'll respond within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', subject: '', course: '', message: '' }); }}
                    className="btn-primary rounded-xl px-6 py-3"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelCls}>Full Name <span className="text-red-500">*</span></label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                        <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="John Smith" className={iconInputCls} />
                      </div>
                    </div>
                    <div>
                      <label className={labelCls}>Email Address <span className="text-red-500">*</span></label>
                      <div className="relative">
                        <AtSign className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                        <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="john@example.com" className={iconInputCls} />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelCls}>Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                        <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" className={iconInputCls} />
                      </div>
                    </div>
                    <div>
                      <label className={labelCls}>Subject</label>
                      <input type="text" name="subject" value={form.subject} onChange={handleChange} placeholder="Course Inquiry" className={inputCls} />
                    </div>
                  </div>

                  <div>
                    <label className={labelCls}>Course of Interest</label>
                    <select name="course" value={form.course} onChange={handleChange} className={inputCls}>
                      <option value="">Select a course…</option>
                      <optgroup label="Cisco">
                        <option>CCNA (200-301)</option>
                        <option>ENCOR (350-401)</option>
                        <option>CCIE Enterprise Infrastructure</option>
                        <option>CCIE Enterprise Wireless</option>
                      </optgroup>
                      <optgroup label="Microsoft Azure">
                        <option>AZ-900 Azure Fundamentals</option>
                        <option>AZ-104 Azure Administrator</option>
                        <option>AZ-305 Azure Architect</option>
                        <option>AZ-500 Azure Security</option>
                      </optgroup>
                      <optgroup label="Red Hat">
                        <option>RHCE (EX294)</option>
                        <option>RHCA</option>
                        <option>Ansible Automation</option>
                      </optgroup>
                      <optgroup label="CompTIA">
                        <option>CompTIA A+</option>
                        <option>CompTIA Network+</option>
                        <option>CompTIA Security+</option>
                      </optgroup>
                      <optgroup label="Cybersecurity">
                        <option>CEH v12</option>
                        <option>CND</option>
                      </optgroup>
                      <option value="other">Other / Corporate Training</option>
                    </select>
                  </div>

                  <div>
                    <label className={labelCls}>Message <span className="text-red-500">*</span></label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your training goals, questions, or how we can help you…"
                      className={`${inputCls} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-primary rounded-xl py-4 text-base shadow-lg shadow-sky-200 disabled:opacity-70 disabled:cursor-not-allowed justify-center"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending Message…
                      </>
                    ) : (
                      <>
                        Send Message <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>

                  <p className="text-slate-400 text-xs text-center">
                    By submitting, you agree to our Privacy Policy. We'll never share your details.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-5">

            {/* Map */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
              <div className="bg-gradient-to-br from-slate-900 to-sky-950 px-6 py-4">
                <h3 className="text-white font-bold text-sm flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-sky-400" /> Find Us on Map
                </h3>
                <p className="text-slate-400 text-xs mt-0.5">East Sagarpur, New Delhi – 110046</p>
              </div>
              <div className="relative bg-slate-100" style={{ height: '210px' }}>
                <div className="absolute inset-0 dot-pattern opacity-60" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-sky-500 flex items-center justify-center pulse-glow shadow-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-center">
                    <p className="text-slate-800 font-bold text-sm">RTC – RT Consultancy</p>
                    <p className="text-slate-500 text-xs">East Sagarpur, New Delhi</p>
                  </div>
                  <a
                    href="https://maps.google.com/?q=East+Sagarpur+New+Delhi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary rounded-lg px-4 py-2 text-xs"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Quick contact */}
            <div className="bg-gradient-to-br from-sky-500 to-cyan-600 rounded-2xl p-6 text-white">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h4 className="font-black text-base mb-2">Quick Response Guaranteed</h4>
              <p className="text-sky-100 text-sm leading-relaxed mb-4">
                We respond to all enquiries within 24 hours. For urgent queries, call us directly.
              </p>
              <div className="space-y-2">
                <a href="tel:+918447850714" className="flex items-center gap-2 text-white hover:text-sky-200 text-sm font-semibold transition-colors">
                  <Phone className="w-4 h-4" /> +91-8447850714
                </a>
                <a href="tel:+917291009911" className="flex items-center gap-2 text-white hover:text-sky-200 text-sm font-semibold transition-colors">
                  <Phone className="w-4 h-4" /> +91-7291009911
                </a>
                <a href="mailto:info@rtconsultancy.in" className="flex items-center gap-2 text-white hover:text-sky-200 text-xs font-medium transition-colors mt-1">
                  <Mail className="w-3.5 h-3.5" /> info@rtconsultancy.in
                </a>
              </div>
            </div>

            {/* FAQs */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
              <h4 className="text-slate-900 font-black text-sm mb-5 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-sky-600" />
                Frequently Asked
              </h4>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <div key={i} className="border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                    <p className="text-slate-900 font-semibold text-sm mb-1.5">{faq.q}</p>
                    <p className="text-slate-500 text-xs leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Social connect ── */}
      <section className="py-14 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-black text-slate-900 mb-3 leading-tight">Connect With Us</h3>
          <p className="text-slate-500 text-sm mb-8 max-w-lg mx-auto">
            Follow us on social media for the latest course updates, IT industry insights, and career tips.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { platform: 'LinkedIn',  icon: '💼', color: 'bg-blue-600 hover:bg-blue-700' },
              { platform: 'YouTube',   icon: '▶️', color: 'bg-red-600 hover:bg-red-700' },
              { platform: 'Instagram', icon: '📸', color: 'bg-pink-600 hover:bg-pink-700' },
              { platform: 'Twitter/X', icon: '🐦', color: 'bg-slate-800 hover:bg-slate-900' },
              { platform: 'Facebook',  icon: '👤', color: 'bg-blue-700 hover:bg-blue-800' },
            ].map((s) => (
              <a
                key={s.platform}
                href="#"
                className={`${s.color} text-white px-5 py-2.5 rounded-xl font-semibold text-sm flex items-center gap-2 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md`}
              >
                <span>{s.icon}</span>
                {s.platform}
              </a>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
