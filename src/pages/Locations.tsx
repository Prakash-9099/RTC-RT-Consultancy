import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Globe, ArrowRight, Building2, Clock, Zap, Users, CheckCircle } from 'lucide-react';

const regions = [
  {
    region: 'South Asia',
    color: 'from-orange-500 to-amber-500',
    bg: 'bg-orange-50',
    border: 'border-orange-100',
    textColor: 'text-orange-600',
    locations: [
      {
        city: 'New Delhi', country: 'India', flag: '🇮🇳', role: 'Headquarters',
        address: 'RZ-91, Street No. 11, East Sagarpur, New Delhi – 110046',
        phone: '+91-8447850714 / +91-7291009911',
        email: 'info@rtconsultancy.in',
        hours: 'Mon – Sat: 9:00 AM – 7:00 PM IST',
        highlights: ['Main Training Campus', 'Cisco Lab Center', 'Administration HQ', 'In-Person & Virtual'],
        primary: true,
      },
      {
        city: 'Mumbai', country: 'India', flag: '🇮🇳', role: 'Training Center',
        address: 'Mumbai, Maharashtra, India',
        phone: '+91-8447850714',
        email: 'info@rtconsultancy.in',
        hours: 'Mon – Sat: 9:00 AM – 7:00 PM IST',
        highlights: ['Corporate Training Hub', 'Weekend Bootcamps', 'Virtual Labs Access', 'Exam Vouchers'],
        primary: false,
      },
    ],
  },
  {
    region: 'Middle East',
    color: 'from-sky-500 to-cyan-600',
    bg: 'bg-sky-50',
    border: 'border-sky-100',
    textColor: 'text-sky-600',
    locations: [
      {
        city: 'Dubai', country: 'UAE', flag: '🇦🇪', role: 'Regional Office',
        address: 'Dubai, United Arab Emirates',
        phone: '+91-8447850714',
        email: 'info@rtconsultancy.in',
        hours: 'Sun – Thu: 9:00 AM – 6:00 PM GST',
        highlights: ['Middle East Training Hub', 'Arabic-English Programs', 'Corporate Workshops', 'Online & Blended'],
        primary: false,
      },
    ],
  },
  {
    region: 'Europe',
    color: 'from-violet-500 to-purple-600',
    bg: 'bg-violet-50',
    border: 'border-violet-100',
    textColor: 'text-violet-600',
    locations: [
      {
        city: 'London', country: 'United Kingdom', flag: '🇬🇧', role: 'Partner Hub',
        address: 'London, United Kingdom',
        phone: '+91-7291009911',
        email: 'admin@rtconsultancy.in',
        hours: 'Mon – Fri: 9:00 AM – 6:00 PM GMT',
        highlights: ['European Training Partner', 'Cisco Authorized Delivery', 'Virtual Training', 'Enterprise Solutions'],
        primary: false,
      },
    ],
  },
  {
    region: 'Asia Pacific',
    color: 'from-emerald-500 to-teal-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
    textColor: 'text-emerald-600',
    locations: [
      {
        city: 'Singapore', country: 'Singapore', flag: '🇸🇬', role: 'APAC Partner',
        address: 'Singapore',
        phone: '+91-8447850714',
        email: 'info@rtconsultancy.in',
        hours: 'Mon – Fri: 9:00 AM – 6:00 PM SGT',
        highlights: ['APAC Delivery Hub', 'Multi-Vendor Training', 'Online Programs', 'Certification Support'],
        primary: false,
      },
    ],
  },
  {
    region: 'Africa',
    color: 'from-rose-500 to-red-600',
    bg: 'bg-rose-50',
    border: 'border-rose-100',
    textColor: 'text-rose-600',
    locations: [
      {
        city: 'Djibouti', country: 'Djibouti', flag: '🇩🇯', role: '4C Solutions Partner',
        address: 'Djibouti City, Republic of Djibouti',
        phone: '+91-8447850714',
        email: 'info@rtconsultancy.in',
        hours: 'Sun – Thu: 8:00 AM – 5:00 PM EAT',
        highlights: ['4C Solutions Partnership', 'Cisco & Wireless Training', 'On-Site Delivery', 'Regional Hub'],
        primary: false,
      },
    ],
  },
];

const globalStats = [
  { value: '25+', label: 'Countries Served',        icon: <Globe className="w-5 h-5" /> },
  { value: '6',   label: 'Regional Offices',         icon: <Building2 className="w-5 h-5" /> },
  { value: '5000+', label: 'Professionals Trained',  icon: <Users className="w-5 h-5" /> },
  { value: '10+', label: 'Years of Experience',      icon: <CheckCircle className="w-5 h-5" /> },
];

export default function Locations() {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 pt-14 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-sky-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-500/8 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 rounded-full px-5 py-2 mb-7">
            <Globe className="w-3.5 h-3.5 text-sky-400" />
            <span className="text-sky-300 text-xs font-bold uppercase tracking-wider">Global Training Network</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-5 leading-tight">
            Our Global <span className="gradient-text">Presence</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            With a headquarters in New Delhi and a growing international network, RTC delivers world-class
            IT training across Asia, the Middle East, Europe, and Africa.
          </p>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {globalStats.map((s, i) => (
              <div key={i} className="text-center p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all card-hover bg-white">
                <div className="w-11 h-11 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-600 mx-auto mb-3 ring-4 ring-sky-50">
                  {s.icon}
                </div>
                <p className="text-3xl font-black text-sky-600 mb-1">{s.value}</p>
                <p className="text-slate-500 text-sm font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Map visual ── */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="bg-gradient-to-br from-slate-900 to-sky-950 rounded-3xl p-8 md:p-12 relative overflow-hidden mb-16">
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="relative text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">Training Worldwide</h2>
            <p className="text-slate-400 text-sm">Our active training locations across the globe</p>
          </div>

          <div className="relative bg-sky-950/60 rounded-2xl border border-sky-800/30 overflow-hidden">
            <svg viewBox="0 0 900 420" className="w-full" style={{ minHeight: '280px' }}>
              <rect width="900" height="420" fill="#0c1a2e" rx="16" />
              {[1,2,3,4,5].map(i => <line key={`h${i}`} x1="0" y1={i*84} x2="900" y2={i*84} stroke="rgba(14,165,233,0.08)" strokeWidth="1" />)}
              {[1,2,3,4,5,6,7,8,9,10].map(i => <line key={`v${i}`} x1={i*90} y1="0" x2={i*90} y2="420" stroke="rgba(14,165,233,0.08)" strokeWidth="1" />)}
              Continents
              <ellipse cx="175" cy="160" rx="90" ry="65"  fill="rgba(30,58,95,0.7)" stroke="rgba(14,165,233,0.18)" strokeWidth="1" />
              <ellipse cx="230" cy="280" rx="55" ry="75"  fill="rgba(30,58,95,0.7)" stroke="rgba(14,165,233,0.18)" strokeWidth="1" />
              <ellipse cx="440" cy="125" rx="55" ry="38"  fill="rgba(30,58,95,0.7)" stroke="rgba(14,165,233,0.18)" strokeWidth="1" />
              <ellipse cx="450" cy="255" rx="62" ry="85"  fill="rgba(30,58,95,0.7)" stroke="rgba(14,165,233,0.18)" strokeWidth="1" />
              <ellipse cx="640" cy="148" rx="145" ry="76" fill="rgba(30,58,95,0.7)" stroke="rgba(14,165,233,0.18)" strokeWidth="1" />
              <ellipse cx="715" cy="242" rx="48" ry="38"  fill="rgba(30,58,95,0.7)" stroke="rgba(14,165,233,0.18)" strokeWidth="1" />
              <ellipse cx="752" cy="318" rx="62" ry="42"  fill="rgba(30,58,95,0.7)" stroke="rgba(14,165,233,0.18)" strokeWidth="1" />
              Pins
              New Delhi HQ
              <circle cx="595" cy="182" r="14" fill="#0ea5e9" opacity="0.15" /><circle cx="595" cy="182" r="8" fill="#0ea5e9" opacity="0.4" /><circle cx="595" cy="182" r="5" fill="#0ea5e9" />
              <text x="612" y="178" fill="white" fontSize="10" fontWeight="bold">🇮🇳 New Delhi (HQ)</text>
              Dubai
              <circle cx="540" cy="190" r="10" fill="#06b6d4" opacity="0.2" /><circle cx="540" cy="190" r="5" fill="#06b6d4" opacity="0.5" /><circle cx="540" cy="190" r="3" fill="#06b6d4" />
              <text x="480" y="182" fill="#94a3b8" fontSize="9">🇦🇪 Dubai</text>
              London
              <circle cx="415" cy="120" r="10" fill="#8b5cf6" opacity="0.2" /><circle cx="415" cy="120" r="5" fill="#8b5cf6" opacity="0.5" /><circle cx="415" cy="120" r="3" fill="#8b5cf6" />
              <text x="418" y="114" fill="#94a3b8" fontSize="9">🇬🇧 London</text>
              Singapore
              <circle cx="700" cy="252" r="10" fill="#10b981" opacity="0.2" /><circle cx="700" cy="252" r="5" fill="#10b981" opacity="0.5" /><circle cx="700" cy="252" r="3" fill="#10b981" />
              <text x="707" y="246" fill="#94a3b8" fontSize="9">🇸🇬 Singapore</text>
              Djibouti
              <circle cx="510" cy="232" r="10" fill="#f43f5e" opacity="0.2" /><circle cx="510" cy="232" r="5" fill="#f43f5e" opacity="0.5" /><circle cx="510" cy="232" r="3" fill="#f43f5e" />
              <text x="515" y="226" fill="#94a3b8" fontSize="9">🇩🇯 Djibouti</text>
              Mumbai
              <circle cx="585" cy="208" r="7" fill="#0ea5e9" opacity="0.2" /><circle cx="585" cy="208" r="4" fill="#0ea5e9" opacity="0.4" /><circle cx="585" cy="208" r="2.5" fill="#0ea5e9" />
              Legend
              <rect x="18" y="375" width="170" height="34" rx="8" fill="rgba(15,23,42,0.85)" />
              <circle cx="34" cy="392" r="4" fill="#0ea5e9" />
              <text x="44" y="396" fill="#94a3b8" fontSize="10">● Active Training Location</text>
            </svg>
          </div>
        </div> */}

        {/* ── Region heading ── */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-sky-50 border border-sky-200 rounded-full px-4 py-1.5 mb-4">
            <MapPin className="w-3.5 h-3.5 text-sky-600" />
            <span className="text-sky-700 text-xs font-bold uppercase tracking-wider">Our Offices</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-3 leading-tight">
            Training <span className="gradient-text">Locations</span>
          </h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto">
            From our Delhi headquarters to global partner offices, we're always close to you.
          </p>
        </div>

        {/* Region cards */}
        <div className="space-y-10">
          {regions.map((region) => (
            <div key={region.region}>
              <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold mb-5 bg-gradient-to-r ${region.color} text-white shadow-sm`}>
                <Globe className="w-4 h-4" />
                {region.region}
              </div>

              <div className={`grid grid-cols-1 ${region.locations.length > 1 ? 'lg:grid-cols-2' : ''} gap-5`}>
                {region.locations.map((loc) => (
                  <div
                    key={loc.city}
                    className={`bg-white rounded-2xl border ${region.border} shadow-sm overflow-hidden card-hover ${loc.primary ? 'ring-2 ring-sky-500 ring-offset-2' : ''}`}
                  >
                    {loc.primary && (
                      <div className="bg-gradient-to-r from-sky-500 to-cyan-500 py-2.5 text-center">
                        <span className="text-white text-xs font-bold tracking-wide">⭐ GLOBAL HEADQUARTERS</span>
                      </div>
                    )}
                    <div className="p-7">
                      {/* header */}
                      <div className="flex items-start justify-between gap-4 mb-6">
                        <div className="flex items-center gap-3.5">
                          <span className="text-4xl leading-none">{loc.flag}</span>
                          <div>
                            <h3 className="text-slate-900 font-black text-xl leading-tight">{loc.city}</h3>
                            <p className="text-slate-400 text-sm">{loc.country}</p>
                          </div>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${region.color} text-white shrink-0`}>
                          {loc.role}
                        </span>
                      </div>

                      {/* details */}
                      <div className="space-y-3 mb-6">
                        {[
                          { icon: <MapPin className={`w-4 h-4 shrink-0 mt-0.5 ${region.textColor}`} />, text: loc.address },
                          { icon: <Phone className={`w-4 h-4 shrink-0 ${region.textColor}`} />, text: loc.phone },
                          { icon: <Mail className={`w-4 h-4 shrink-0 ${region.textColor}`} />, text: loc.email },
                          { icon: <Clock className={`w-4 h-4 shrink-0 ${region.textColor}`} />, text: loc.hours },
                        ].map((row, ri) => (
                          <div key={ri} className="flex items-start gap-3">
                            {row.icon}
                            <span className="text-slate-600 text-sm leading-snug">{row.text}</span>
                          </div>
                        ))}
                      </div>

                      {/* highlights */}
                      <div className={`${region.bg} rounded-xl p-4 mb-5`}>
                        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-3">What We Offer Here</p>
                        <div className="grid grid-cols-2 gap-2">
                          {loc.highlights.map((h) => (
                            <div key={h} className="flex items-center gap-1.5">
                              <CheckCircle className={`w-3.5 h-3.5 shrink-0 ${region.textColor}`} />
                              <span className="text-slate-600 text-xs leading-snug">{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Link
                        to="/contact"
                        className="flex items-center justify-center gap-2 w-full bg-slate-50 hover:bg-sky-500 border border-slate-200 hover:border-sky-500 text-slate-600 hover:text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300"
                      >
                        Contact This Office <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Train anywhere ── */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3 leading-tight">
              Train From <span className="text-sky-400">Anywhere</span>
            </h2>
            <p className="text-slate-300 text-base max-w-xl mx-auto">
              Can't come to us? We come to you — virtually! Our online training platform delivers the same
              quality experience from the comfort of your home or office.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: '🖥️', title: 'Live Virtual Classes', desc: 'Real-time sessions with expert instructors via our online platform.' },
              { icon: '🔬', title: 'Remote Lab Access',    desc: '24/7 access to virtual labs — no hardware required.' },
              { icon: '📱', title: 'Mobile Learning',      desc: 'Study on any device — laptop, tablet, or smartphone.' },
              { icon: '🌍', title: 'Global Time Zones',    desc: 'Flexible scheduling to accommodate learners worldwide.' },
            ].map((item, i) => (
              <div key={i} className="glass-dark rounded-2xl p-6 border border-sky-500/10 text-center card-hover">
                <div className="text-4xl mb-4 leading-none">{item.icon}</div>
                <h4 className="text-white font-bold text-sm mb-2">{item.title}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/contact" className="btn-primary rounded-xl px-8 py-3.5 shadow-lg shadow-sky-500/25">
              Schedule Online Training <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="w-14 h-14 rounded-2xl bg-sky-50 flex items-center justify-center mx-auto mb-5 shadow-sm">
            <Zap className="w-7 h-7 text-sky-600" />
          </div>
          <h2 className="text-3xl font-black text-slate-900 mb-3 leading-tight">
            Find Training Near You
          </h2>
          <p className="text-slate-500 text-base mb-8 leading-relaxed">
            Contact us to find the nearest training centre or schedule a virtual session anywhere in the world.
          </p>
          <Link to="/contact" className="btn-primary rounded-xl px-8 py-3.5 shadow-md shadow-sky-200">
            Contact Us Today <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
}
