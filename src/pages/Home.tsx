import { Link } from 'react-router-dom';
import {
  ArrowRight, Shield, Cloud, Network, Code2, Headphones,
  Star, Quote, CheckCircle, Globe, Users, Award, BookOpen,
  ChevronRight, MapPin, Zap, TrendingUp, Target, Wifi, Play
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

/* ── Animated counter ── */
function useCounter(end: number, duration = 2200, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let t: number | null = null;
    const step = (ts: number) => {
      if (!t) t = ts;
      const p = Math.min((ts - t) / duration, 1);
      setCount(Math.floor(p * end));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, start]);
  return count;
}

/* ── Intersection observer ── */
function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

/* ── Data ── */
const services = [
  { icon: <Code2 className="w-6 h-6" />, title: 'Programming & Web Dev', desc: 'Full-stack training with modern frameworks and industry-standard tools.', color: 'from-violet-500 to-purple-600', light: 'bg-violet-50 text-violet-600', border: 'border-violet-100' },
  { icon: <Shield className="w-6 h-6" />, title: 'Cybersecurity', desc: 'Comprehensive security training covering ethical hacking, threat defense, and compliance.', color: 'from-red-500 to-rose-600', light: 'bg-red-50 text-red-600', border: 'border-red-100' },
  { icon: <Cloud className="w-6 h-6" />, title: 'Cloud Computing', desc: 'Azure and multi-cloud architecture training for modern enterprise infrastructure.', color: 'from-sky-500 to-cyan-600', light: 'bg-sky-50 text-sky-600', border: 'border-sky-100' },
  { icon: <Network className="w-6 h-6" />, title: 'Networking & Infrastructure', desc: 'Cisco, Aruba, and enterprise networking solutions for scalable IT environments.', color: 'from-emerald-500 to-teal-600', light: 'bg-emerald-50 text-emerald-600', border: 'border-emerald-100' },
  { icon: <Wifi className="w-6 h-6" />, title: 'Wireless Technologies', desc: 'Expert wireless networking certifications including CWNA, CWSP, and vendor tracks.', color: 'from-amber-500 to-orange-600', light: 'bg-amber-50 text-amber-600', border: 'border-amber-100' },
  { icon: <Headphones className="w-6 h-6" />, title: '24/7 IT Support', desc: 'Round-the-clock technical support and consultancy for businesses of all sizes.', color: 'from-pink-500 to-rose-600', light: 'bg-pink-50 text-pink-600', border: 'border-pink-100' },
];

const featuredCourses = [
  { vendor: 'Cisco', color: 'from-blue-600 to-blue-700', badge: 'bg-blue-600', emoji: '🔵', courses: ['CCNA 200-301', 'ENCOR 350-401', 'CCIE Enterprise', 'DEVASC 200-901'] },
  { vendor: 'Microsoft Azure', color: 'from-sky-500 to-sky-600', badge: 'bg-sky-500', emoji: '☁️', courses: ['AZ-900 Fundamentals', 'AZ-104 Administrator', 'AZ-305 Architect', 'AZ-500 Security'] },
  { vendor: 'Red Hat', color: 'from-red-600 to-red-700', badge: 'bg-red-600', emoji: '🔴', courses: ['RHCE Certification', 'RHCA Expert', 'Ansible Automation', 'OpenStack'] },
  { vendor: 'CompTIA', color: 'from-emerald-600 to-teal-700', badge: 'bg-emerald-600', emoji: '🟢', courses: ['Security+', 'Network+', 'Cloud+', 'Linux+'] },
];

const testimonials = [
  { name: 'Arjun Sharma', role: 'Network Engineer, Infosys', text: 'RTC transformed my career completely. The CCNA training was world-class with real lab environments. Cleared my exam on the very first attempt!', rating: 5, initials: 'AS', color: 'from-sky-500 to-cyan-500' },
  { name: 'Priya Mehta', role: 'Cloud Architect, Wipro', text: 'The Azure training at RTC is exceptional. Instructors have real-world experience and the course content is always up-to-date with industry standards.', rating: 5, initials: 'PM', color: 'from-violet-500 to-purple-500' },
  { name: 'Mohammed Al-Rashid', role: 'IT Manager, Dubai', text: 'Excellent international training experience. Virtual lab access and flexible timing made it perfect for my busy schedule. Highly recommended!', rating: 5, initials: 'MA', color: 'from-emerald-500 to-teal-500' },
  { name: 'Sarah Johnson', role: 'Cybersecurity Analyst, UK', text: 'The CompTIA Security+ course was comprehensive and practical. The instructors are highly knowledgeable and supportive throughout the journey.', rating: 5, initials: 'SJ', color: 'from-rose-500 to-pink-500' },
];

const partners = [
  { name: 'Ruckus',     desc: 'Wireless Solutions',  abbr: 'RU' },
  { name: 'Arris',      desc: 'Network Equipment',   abbr: 'AR' },
  { name: 'CommScope',  desc: 'Infrastructure',       abbr: 'CS' },
  { name: 'Csscorp',    desc: 'IT Services',          abbr: 'CC' },
  { name: 'Movate',     desc: 'Tech Solutions',       abbr: 'MV' },
];

const locations = [
  { city: 'New Delhi',  country: 'India',        flag: '🇮🇳', role: 'Headquarters' },
  { city: 'Mumbai',     country: 'India',        flag: '🇮🇳', role: 'Training Center' },
  { city: 'Dubai',      country: 'UAE',          flag: '🇦🇪', role: 'Regional Office' },
  { city: 'London',     country: 'UK',           flag: '🇬🇧', role: 'Partner Hub' },
  { city: 'Singapore',  country: 'Asia Pacific', flag: '🇸🇬', role: 'Training Partner' },
  { city: 'Djibouti',   country: 'Africa',       flag: '🇩🇯', role: '4C Solutions' },
];

/* ══════════════════════════════════════════════════ */
export default function Home() {
  const statsSection = useInView();
  const students  = useCounter(5000, 2500, statsSection.inView);
  const courses   = useCounter(80,   2000, statsSection.inView);
  const countries = useCounter(25,   2000, statsSection.inView);
  const experts   = useCounter(50,   2000, statsSection.inView);

  return (
    <div className="min-h-screen">

      {/* ══ HERO ══ */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900">
        {/* background layers */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }} />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/96 via-sky-950/92 to-slate-900/96" />
        <div className="absolute inset-0 grid-pattern opacity-20" />

        {/* decorative blobs */}
        <div className="absolute top-24 left-16 w-80 h-80 bg-sky-500/18 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-24 right-16 w-96 h-96 bg-cyan-500/12 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-sky-600/4 rounded-full blur-3xl pointer-events-none" />

        {/* floating badge – top right */}
        <div className="absolute top-28 right-12 float-animation hidden xl:block">
          <div className="glass-dark rounded-2xl px-4 py-3 border border-sky-500/20 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-md shrink-0">
                <Award className="w-4.5 h-4.5 text-white" />
              </div>
              <div>
                <p className="text-white text-xs font-bold leading-none mb-0.5">Cisco CCIE</p>
                <p className="text-sky-400 text-xs">Expert Certified</p>
              </div>
            </div>
          </div>
        </div>

        {/* floating badge – bottom left */}
        <div className="absolute bottom-36 left-12 float-animation hidden xl:block" style={{ animationDelay: '1.6s' }}>
          <div className="glass-dark rounded-2xl px-4 py-3 border border-emerald-500/20 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-md shrink-0">
                <CheckCircle className="w-4.5 h-4.5 text-white" />
              </div>
              <div>
                <p className="text-white text-xs font-bold leading-none mb-0.5">5000+ Trained</p>
                <p className="text-emerald-400 text-xs">Professionals</p>
              </div>
            </div>
          </div>
        </div>

        {/* hero content */}
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="max-w-4xl mx-auto text-center">

            {/* pill badge */}
            <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 rounded-full px-5 py-2 mb-8">
              <Zap className="w-3.5 h-3.5 text-sky-400" />
              <span className="text-sky-300 text-xs font-semibold tracking-wide uppercase">Global IT Training &amp; Consultancy</span>
            </div>

            {/* headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[4.5rem] font-black text-white leading-[1.1] mb-6 tracking-tight">
              Build Your{' '}
              <span className="gradient-text">IT Career</span>
              <br className="hidden sm:block" />
              {' '}with Industry{' '}
              <span className="text-sky-300">Experts</span>
            </h1>

            <p className="text-slate-300 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto font-light">
              Real-world skills. Global certifications. Industry-recognised training that empowers professionals
              across <span className="text-sky-400 font-semibold">25+ countries</span>.
            </p>

            {/* CTA row */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
              <Link to="/courses" className="btn-primary rounded-xl px-8 py-3.5 text-base shadow-lg shadow-sky-500/25">
                Explore Courses <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/contact" className="btn-outline border-sky-400 text-sky-300 hover:bg-sky-500 hover:text-white rounded-xl px-8 py-3.5 text-base">
                Contact Us <ChevronRight className="w-5 h-5" />
              </Link>
              <button className="flex items-center gap-3 text-slate-300 hover:text-sky-300 transition-colors group">
                <div className="w-11 h-11 rounded-full bg-white/8 flex items-center justify-center border border-white/15 group-hover:bg-sky-500/20 group-hover:border-sky-500/30 transition-all">
                  <Play className="w-4 h-4 ml-0.5 fill-current" />
                </div>
                <span className="text-sm font-medium">Watch Demo</span>
              </button>
            </div>

            {/* trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8 text-slate-400">
              {[
                { icon: <Award className="w-4 h-4 text-sky-400" />,    text: 'Cisco Authorized' },
                { icon: <CheckCircle className="w-4 h-4 text-emerald-400" />, text: 'Microsoft Partner' },
                { icon: <Star className="w-4 h-4 text-amber-400 fill-amber-400" />, text: 'ISO Certified' },
                { icon: <Globe className="w-4 h-4 text-cyan-400" />,   text: '25+ Countries' },
              ].map((b, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  {b.icon}
                  <span className="font-medium">{b.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* wave */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 72L60 62C120 52 240 32 360 22.7C480 13 600 14 720 19.3C840 25 960 35 1080 40.7C1200 46 1320 46 1380 46L1440 46V72H0Z" fill="#f8fafc"/>
          </svg>
        </div>
      </section>

      {/* ══ STATS ══ */}
      <section className="py-16 bg-white" ref={statsSection.ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { value: students,  suffix: '+', label: 'Students Trained',   icon: <Users className="w-5 h-5" />,    bg: 'bg-sky-50',     color: 'text-sky-600',     ring: 'ring-sky-100' },
              { value: courses,   suffix: '+', label: 'Courses Available',  icon: <BookOpen className="w-5 h-5" />, bg: 'bg-violet-50',  color: 'text-violet-600',  ring: 'ring-violet-100' },
              { value: countries, suffix: '+', label: 'Countries Served',   icon: <Globe className="w-5 h-5" />,    bg: 'bg-emerald-50', color: 'text-emerald-600', ring: 'ring-emerald-100' },
              { value: experts,   suffix: '+', label: 'Expert Instructors', icon: <Award className="w-5 h-5" />,    bg: 'bg-amber-50',   color: 'text-amber-600',   ring: 'ring-amber-100' },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 card-hover p-6 text-center group">
                <div className={`w-12 h-12 ${s.bg} ring-4 ${s.ring} rounded-2xl flex items-center justify-center mx-auto mb-4 ${s.color} group-hover:scale-110 transition-transform duration-300`}>
                  {s.icon}
                </div>
                <p className={`text-3xl lg:text-4xl font-black ${s.color} mb-1 tabular-nums`}>
                  {s.value.toLocaleString()}{s.suffix}
                </p>
                <p className="text-slate-500 text-sm font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SERVICES ══ */}
      <section className="py-20 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* heading */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-sky-50 border border-sky-200 rounded-full px-4 py-1.5 mb-4">
              <Zap className="w-3.5 h-3.5 text-sky-600" />
              <span className="text-sky-700 text-xs font-bold uppercase tracking-wider">Our Expertise</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 leading-tight">
              Comprehensive <span className="gradient-text">IT Services</span>
            </h2>
            <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto">
              From cutting-edge certifications to 24/7 support, we provide end-to-end IT training and consultancy.
            </p>
          </div>

          {/* grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} className={`bg-white rounded-2xl border ${s.border} p-7 shadow-sm card-hover group cursor-pointer`}>
                <div className={`w-13 h-13 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center text-white mb-5 shadow-md shadow-slate-200 group-hover:scale-110 transition-transform duration-300`}>
                  {s.icon}
                </div>
                <h3 className="text-slate-900 font-bold text-lg mb-2.5 leading-snug">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">{s.desc}</p>
                <Link to="/services" className="inline-flex items-center gap-1.5 text-sky-600 font-semibold text-sm group-hover:gap-2.5 transition-all duration-300">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/services" className="btn-primary rounded-xl px-8 py-3.5 shadow-md shadow-sky-200">
              View All Services <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══ FEATURED COURSES ══ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-sky-50 border border-sky-200 rounded-full px-4 py-1.5 mb-4">
              <BookOpen className="w-3.5 h-3.5 text-sky-600" />
              <span className="text-sky-700 text-xs font-bold uppercase tracking-wider">Top Certifications</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 leading-tight">
              Featured <span className="gradient-text">Courses</span>
            </h2>
            <p className="text-slate-500 text-base sm:text-lg max-w-xl mx-auto">
              Industry-recognised certifications from global technology leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCourses.map((v, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden card-hover group">
                {/* header */}
                <div className={`bg-gradient-to-br ${v.color} px-5 pt-5 pb-6`}>
                  <div className="text-3xl mb-3">{v.emoji}</div>
                  <h3 className="font-black text-white text-base leading-snug">{v.vendor}</h3>
                  <p className="text-white/65 text-xs mt-1">{v.courses.length} Courses</p>
                </div>
                {/* list */}
                <div className="p-5 space-y-2.5">
                  {v.courses.map((c, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                      <span>{c}</span>
                    </div>
                  ))}
                  <Link to="/courses" className="inline-flex items-center gap-1.5 text-sky-600 font-semibold text-sm mt-4 group-hover:gap-2.5 transition-all duration-300">
                    View All <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/courses" className="btn-primary rounded-xl px-8 py-3.5 shadow-md shadow-sky-200">
              Explore All 80+ Courses <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══ WHY CHOOSE US ══ */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute -top-20 right-0 w-96 h-96 bg-sky-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/8 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 xl:gap-20 items-center">

            {/* left copy */}
            <div>
              <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 rounded-full px-4 py-1.5 mb-6">
                <Target className="w-3.5 h-3.5 text-sky-400" />
                <span className="text-sky-300 text-xs font-bold uppercase tracking-wider">Why Choose RTC</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5 leading-tight">
                The RTC Advantage for Your{' '}
                <span className="text-sky-300">Career Growth</span>
              </h2>
              <p className="text-slate-300 text-base leading-relaxed mb-10">
                We combine industry expertise, hands-on labs, and globally recognised certifications to deliver
                training that truly transforms careers.
              </p>

              <div className="space-y-6">
                {[
                  { icon: <Award className="w-5 h-5 text-sky-400" />,     title: 'Industry-Expert Instructors', desc: 'Learn from certified professionals with 10+ years of real-world experience.' },
                  { icon: <Globe className="w-5 h-5 text-emerald-400" />, title: 'Global Recognition',          desc: 'Certifications accepted by top companies worldwide across 25+ countries.' },
                  { icon: <TrendingUp className="w-5 h-5 text-amber-400" />, title: 'Career-Focused Curriculum', desc: 'Practical labs and real scenarios that prepare you for actual job roles.' },
                  { icon: <Headphones className="w-5 h-5 text-violet-400" />, title: '24/7 Support & Mentoring', desc: 'Post-training support and mentorship to guide your career journey.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/6 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1 text-sm">{item.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* right grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Pass Rate',    value: '97%',  icon: <TrendingUp className="w-6 h-6" />, color: 'text-sky-400',    desc: 'First-attempt success' },
                { label: 'Satisfaction', value: '4.9★', icon: <Star className="w-6 h-6" />,       color: 'text-amber-400',  desc: 'Student rating' },
                { label: 'Live Labs',    value: '500+', icon: <Code2 className="w-6 h-6" />,      color: 'text-emerald-400',desc: 'Hands-on exercises' },
                { label: 'Placements',   value: '98%',  icon: <Users className="w-6 h-6" />,      color: 'text-violet-400', desc: 'Job placement rate' },
              ].map((c, i) => (
                <div key={i} className="glass-dark rounded-2xl p-6 border border-white/8 card-hover text-center">
                  <div className={`${c.color} flex justify-center mb-3`}>{c.icon}</div>
                  <p className={`text-2xl font-black ${c.color} mb-1`}>{c.value}</p>
                  <p className="text-white font-semibold text-sm">{c.label}</p>
                  <p className="text-slate-400 text-xs mt-1">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ GLOBAL PRESENCE ══ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-sky-50 border border-sky-200 rounded-full px-4 py-1.5 mb-4">
              <Globe className="w-3.5 h-3.5 text-sky-600" />
              <span className="text-sky-700 text-xs font-bold uppercase tracking-wider">Global Presence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 leading-tight">
              Training Professionals <span className="gradient-text">Worldwide</span>
            </h2>
            <p className="text-slate-500 text-base sm:text-lg max-w-xl mx-auto">
              From our Delhi headquarters to international locations, RTC serves IT professionals globally.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
            {locations.map((loc, i) => (
              <div key={i} className="region-card bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-sky-200 hover:shadow-md p-4 text-center transition-all duration-300">
                <div className="text-4xl mb-3 leading-none">{loc.flag}</div>
                <p className="text-slate-900 font-bold text-sm leading-snug">{loc.city}</p>
                <p className="text-slate-400 text-xs mt-0.5">{loc.country}</p>
                <span className="mt-2.5 inline-block px-2.5 py-0.5 bg-sky-50 text-sky-600 text-[10px] font-semibold rounded-full">
                  {loc.role}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/locations" className="btn-outline rounded-xl px-7 py-3">
              View All Locations <MapPin className="w-4 h-4" />
            </Link>
          </div>
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

      {/* ══ TESTIMONIALS ══ */}
      <section className="py-20 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-sky-50 border border-sky-200 rounded-full px-4 py-1.5 mb-4">
              <Star className="w-3.5 h-3.5 text-sky-600" />
              <span className="text-sky-700 text-xs font-bold uppercase tracking-wider">Success Stories</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 leading-tight">
              What Our <span className="gradient-text">Students Say</span>
            </h2>
            <p className="text-slate-500 text-base sm:text-lg max-w-xl mx-auto">
              Real stories from professionals who transformed their careers with RTC.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-100 shadow-sm card-hover p-7 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-36 h-36 bg-sky-50 rounded-full -translate-y-20 translate-x-20 pointer-events-none" />
                <Quote className="w-7 h-7 text-sky-200 mb-4" />
                <p className="text-slate-600 text-sm leading-relaxed mb-6 relative z-10">"{t.text}"</p>
                <div className="flex items-center gap-3.5">
                  <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-xs shrink-0`}>
                    {t.initials}
                  </div>
                  <div className="min-w-0">
                    <p className="text-slate-900 font-bold text-sm truncate">{t.name}</p>
                    <p className="text-slate-400 text-xs truncate">{t.role}</p>
                  </div>
                  <div className="ml-auto flex gap-0.5 shrink-0">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PARTNERS / CLIENTS ══ */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-slate-400 text-xs font-bold uppercase tracking-widest mb-3">Trusted by Industry Leaders</p>
          <h3 className="text-center text-slate-900 font-bold text-2xl mb-10">Our Clients &amp; Partners</h3>
          <div className="flex flex-wrap items-center justify-center gap-5">
            {partners.map((p, i) => (
              <div key={i} className="group flex flex-col items-center gap-2.5 px-8 py-5 rounded-2xl border border-slate-100 bg-slate-50 hover:border-sky-200 hover:bg-sky-50 hover:shadow-md transition-all duration-300 cursor-pointer min-w-[130px]">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center text-white font-black text-sm shadow-md group-hover:shadow-sky-200 transition-shadow">
                  {p.abbr}
                </div>
                <p className="text-slate-900 font-bold text-sm">{p.name}</p>
                <p className="text-slate-400 text-xs">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA BANNER ══ */}
      <section className="py-20 bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-500 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-white/8 rounded-full blur-3xl" />
        <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-white/8 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
            Start Your IT Journey Today
          </h2>
          <p className="text-sky-100 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Join 5,000+ professionals who have transformed their careers with RTC's world-class training programs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/courses" className="btn-white rounded-xl px-8 py-3.5 text-sky-700 shadow-xl">
              Browse Courses <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-sky-700 rounded-xl px-8 py-3.5">
              Free Consultation
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
