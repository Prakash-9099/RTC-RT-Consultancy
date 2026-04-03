import { Link } from 'react-router-dom';
import {
  Target, Eye, Heart, Globe, Award, Users, CheckCircle,
  ArrowRight, Zap, TrendingUp, Shield, Lightbulb, Handshake, Star
} from 'lucide-react';

const values = [
  { icon: <Award className="w-6 h-6" />,      title: 'Professionalism', desc: 'We maintain the highest standards in training delivery, content quality, and student support across all programs.', color: 'from-sky-500 to-cyan-500' },
  { icon: <Shield className="w-6 h-6" />,     title: 'Integrity',       desc: 'Honest, transparent, and ethical practices in everything we do — from course content to business partnerships.', color: 'from-emerald-500 to-teal-500' },
  { icon: <Lightbulb className="w-6 h-6" />,  title: 'Innovation',      desc: 'Continuously evolving our curriculum and delivery methods to stay ahead of the rapidly changing technology landscape.', color: 'from-violet-500 to-purple-500' },
  { icon: <Handshake className="w-6 h-6" />,  title: 'Partnership',     desc: 'Building long-term relationships with students, corporate clients, and technology vendors for mutual growth.', color: 'from-amber-500 to-orange-500' },
  { icon: <Globe className="w-6 h-6" />,      title: 'Global Mindset',  desc: 'Thinking and operating at a global scale to serve IT professionals and businesses across continents.', color: 'from-rose-500 to-pink-500' },
  { icon: <TrendingUp className="w-6 h-6" />, title: 'Excellence',      desc: 'Striving for excellence in student outcomes, with a 97% first-attempt pass rate and 98% placement success.', color: 'from-indigo-500 to-blue-500' },
];

const team = [
  { name: 'Rakesh Tiwari', role: 'Founder & CEO',        expertise: 'Cisco CCIE | 20+ Years Experience', initials: 'RT', color: 'from-sky-500 to-cyan-500' },
  { name: 'Priya Singh',   role: 'Head of Training',     expertise: 'Microsoft MVP | Azure Expert',      initials: 'PS', color: 'from-violet-500 to-purple-500' },
  { name: 'Mohammed Zaid', role: 'Senior Instructor',    expertise: 'CCIE | Red Hat Expert | 15 Yrs',    initials: 'MZ', color: 'from-emerald-500 to-teal-500' },
  { name: 'Anjali Sharma', role: 'Cybersecurity Lead',   expertise: 'CEH | CISSP | CompTIA Expert',      initials: 'AS', color: 'from-rose-500 to-pink-500' },
];

const partners = [
  { name: 'Ruckus',    desc: 'Wireless Networking Solutions',    abbr: 'RU' },
  { name: 'Arris',     desc: 'Network Equipment & Infrastructure', abbr: 'AR' },
  { name: 'CommScope', desc: 'Network Infrastructure Leader',    abbr: 'CS' },
  { name: 'Csscorp',   desc: 'IT Services & Solutions',          abbr: 'CC' },
  { name: 'Movate',    desc: 'Technology Services',              abbr: 'MV' },
];

const milestones = [
  { year: '2012', event: 'RTC Founded in New Delhi',  desc: 'Started with Cisco training programs' },
  { year: '2015', event: 'Microsoft Partnership',     desc: 'Became authorized Microsoft training partner' },
  { year: '2017', event: 'International Expansion',   desc: 'Extended services to Middle East and Africa' },
  { year: '2019', event: '1000+ Students Milestone',  desc: 'Crossed 1000 trained professionals' },
  { year: '2021', event: '4C Solutions Partnership',  desc: 'Strategic partner for Djibouti operations' },
  { year: '2024', event: '5000+ Trained Globally',    desc: 'Serving 25+ countries worldwide' },
];

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 pt-14 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            <div>
              <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 rounded-full px-5 py-2 mb-7">
                <Zap className="w-3.5 h-3.5 text-sky-400" />
                <span className="text-sky-300 text-xs font-bold uppercase tracking-wider">About RTC</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-5 leading-tight">
                Empowering the IT{' '}
                <span className="gradient-text">World</span>
              </h1>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
                RTC – RT Consultancy is a premier global IT training and consultancy organisation dedicated to
                empowering IT professionals with the skills, certifications, and knowledge to excel in today's
                technology-driven world.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/courses" className="btn-primary rounded-xl px-6 py-3 shadow-lg shadow-sky-500/25">
                  Our Courses <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/contact" className="btn-outline border-sky-400 text-sky-300 hover:bg-sky-500 hover:text-white rounded-xl px-6 py-3">
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '5000+', label: 'Students Trained', color: 'text-sky-400' },
                { value: '97%',   label: 'Pass Rate',        color: 'text-emerald-400' },
                { value: '25+',   label: 'Countries Served', color: 'text-amber-400' },
                { value: '10+',   label: 'Years Active',     color: 'text-violet-400' },
              ].map((s, i) => (
                <div key={i} className="glass-dark rounded-2xl p-6 border border-white/8 text-center card-hover">
                  <p className={`text-3xl font-black ${s.color} mb-1.5`}>{s.value}</p>
                  <p className="text-slate-300 text-sm font-medium">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Who We Are ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 xl:gap-20 items-start">

            <div>
              <div className="inline-flex items-center gap-2 bg-sky-50 border border-sky-200 rounded-full px-4 py-1.5 mb-5">
                <Users className="w-3.5 h-3.5 text-sky-600" />
                <span className="text-sky-700 text-xs font-bold uppercase tracking-wider">Who We Are</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-5 leading-tight">
                A Premier Global IT Training{' '}
                <span className="gradient-text">&amp; Consultancy</span>
              </h2>
              <div className="space-y-4 text-slate-500 text-sm leading-relaxed">
                <p>
                  Founded with a vision to bridge the gap between classroom learning and real-world IT demands,
                  <strong className="text-slate-700"> RTC – RT Consultancy</strong> has grown into a trusted name in global IT education
                  and consultancy since our establishment in New Delhi.
                </p>
                <p>
                  We specialise in delivering <strong className="text-slate-700">globally recognised certifications</strong> from
                  industry giants including Cisco, Microsoft, Red Hat, and CompTIA — combined with hands-on lab
                  environments and expert mentorship that prepares professionals for actual job roles.
                </p>
                <p>
                  Our training programs are designed by <strong className="text-slate-700">industry veterans</strong> with decades
                  of combined experience, ensuring our students receive the most current, relevant, and impactful
                  training available anywhere in the world.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { icon: <Target className="w-5 h-5 text-sky-600" />,   title: 'Our Mission', bg: 'bg-sky-50 border-sky-100',     text: 'To empower IT professionals worldwide with practical skills, globally recognised certifications, and industry-relevant knowledge that accelerates career growth and organisational success.' },
                { icon: <Eye className="w-5 h-5 text-violet-600" />,   title: 'Our Vision',  bg: 'bg-violet-50 border-violet-100', text: "To be the world's most trusted IT training and consultancy partner — recognised for excellence, innovation, and transformative impact on individuals and organisations." },
                { icon: <Heart className="w-5 h-5 text-rose-600" />,   title: 'Our Purpose', bg: 'bg-rose-50 border-rose-100',   text: 'To create a global community of skilled IT professionals who drive technological innovation and shape the digital future of businesses and societies worldwide.' },
              ].map((item, i) => (
                <div key={i} className={`${item.bg} rounded-2xl p-6 border card-hover`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-white rounded-xl flex items-center justify-center shadow-sm shrink-0">
                      {item.icon}
                    </div>
                    <h4 className="text-slate-900 font-bold text-sm">{item.title}</h4>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-20 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-sky-50 border border-sky-200 rounded-full px-4 py-1.5 mb-4">
              <Heart className="w-3.5 h-3.5 text-sky-600" />
              <span className="text-sky-700 text-xs font-bold uppercase tracking-wider">Our Foundation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-3 leading-tight">
              Values That <span className="gradient-text">Drive Us</span>
            </h2>
            <p className="text-slate-500 text-base max-w-xl mx-auto">
              Our core values guide every decision, every course, and every student interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm card-hover group">
                <div className={`w-13 h-13 rounded-2xl bg-gradient-to-br ${v.color} flex items-center justify-center text-white mb-5 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  {v.icon}
                </div>
                <h3 className="text-slate-900 font-bold text-base mb-2.5">{v.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Milestones ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-sky-50 border border-sky-200 rounded-full px-4 py-1.5 mb-4">
              <TrendingUp className="w-3.5 h-3.5 text-sky-600" />
              <span className="text-sky-700 text-xs font-bold uppercase tracking-wider">Our Journey</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-3 leading-tight">
              A Decade of <span className="gradient-text">Excellence</span>
            </h2>
          </div>

          <div className="relative">
            {/* centre line */}
            <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-sky-200 to-cyan-200 -translate-x-1/2 rounded-full" />

            <div className="space-y-7">
              {milestones.map((m, i) => (
                <div key={i} className={`flex items-center gap-4 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:pr-14 text-left' : 'md:pl-14 text-right'}`}>
                    <div className={`bg-white rounded-2xl border border-slate-100 shadow-sm p-6 card-hover inline-block w-full max-w-sm ${i % 2 !== 0 ? 'md:ml-auto' : ''}`}>
                      <p className="text-sky-600 font-black text-2xl mb-1">{m.year}</p>
                      <p className="text-slate-900 font-bold text-sm mb-1">{m.event}</p>
                      <p className="text-slate-400 text-xs">{m.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-10 h-10 rounded-full bg-gradient-to-br from-sky-500 to-cyan-500 items-center justify-center text-white font-bold text-xs shrink-0 z-10 shadow-lg">
                    {i + 1}
                  </div>
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="py-20 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-sky-50 border border-sky-200 rounded-full px-4 py-1.5 mb-4">
              <Users className="w-3.5 h-3.5 text-sky-600" />
              <span className="text-sky-700 text-xs font-bold uppercase tracking-wider">Meet the Experts</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-3 leading-tight">
              Our Leadership <span className="gradient-text">Team</span>
            </h2>
            <p className="text-slate-500 text-base max-w-xl mx-auto">
              Industry-certified professionals with decades of real-world experience leading your training journey.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-7 text-center card-hover group">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${m.color} flex items-center justify-center text-white font-black text-xl mx-auto mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {m.initials}
                </div>
                <h3 className="text-slate-900 font-bold text-sm mb-1">{m.name}</h3>
                <p className="text-sky-600 font-semibold text-xs mb-2">{m.role}</p>
                <p className="text-slate-400 text-xs leading-snug">{m.expertise}</p>
                <div className="flex justify-center gap-0.5 mt-3">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-3 h-3 text-amber-400 fill-amber-400" />)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Partners ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-sky-50 border border-sky-200 rounded-full px-4 py-1.5 mb-4">
              <Handshake className="w-3.5 h-3.5 text-sky-600" />
              <span className="text-sky-700 text-xs font-bold uppercase tracking-wider">Trusted Partners</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-3 leading-tight">
              Our Clients &amp; <span className="gradient-text">Partners</span>
            </h2>
            <p className="text-slate-500 text-base max-w-xl mx-auto">
              We partner with global technology leaders to deliver the highest quality training and consultancy.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 mb-12">
            {partners.map((p, i) => (
              <div key={i} className="group flex flex-col items-center gap-2.5 bg-slate-50 border border-slate-100 rounded-2xl px-8 py-6 hover:border-sky-200 hover:bg-sky-50 hover:shadow-md transition-all duration-300 cursor-pointer card-hover min-w-[140px]">
                <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center text-white font-black text-sm shadow-md group-hover:shadow-sky-200 transition-shadow">
                  {p.abbr}
                </div>
                <p className="text-slate-900 font-bold text-sm">{p.name}</p>
                <p className="text-slate-400 text-xs text-center">{p.desc}</p>
              </div>
            ))}
          </div>

          {/* 4C Solutions feature box */}
          <div className="bg-gradient-to-br from-sky-50 to-cyan-50 border border-sky-200 rounded-3xl p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div>
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center text-white font-black text-lg shadow-lg shrink-0">
                    4C
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-black text-lg leading-tight">4C Solutions</h3>
                    <p className="text-sky-600 text-sm font-medium">Djibouti, Africa</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-5">
                  <strong>4C Solutions</strong> is our strategic partner in the Republic of Djibouti,
                  extending RTC's world-class IT training and consultancy capabilities to East Africa.
                  Through this partnership, professionals across the African continent gain access to
                  Cisco, Microsoft, and wireless networking certifications.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Cisco Training', 'Wireless Certs', 'On-Site Delivery', 'Corporate Programs'].map((tag) => (
                    <span key={tag} className="bg-sky-100 text-sky-700 text-xs px-3 py-1 rounded-full font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                {[
                  'Authorized Cisco training delivery in Djibouti',
                  'Wireless and networking certifications for East Africa',
                  'On-site corporate training programs',
                  'Joint consultancy services for regional enterprises',
                  'Multilingual training support (English / French / Arabic)',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-sky-600 mt-0.5 shrink-0" />
                    <span className="text-slate-600 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-gradient-to-r from-sky-600 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 leading-tight">
            Join the RTC Family
          </h2>
          <p className="text-sky-100 text-base sm:text-lg mb-9 max-w-xl mx-auto leading-relaxed">
            Become part of our global community of 5,000+ IT professionals who chose RTC for their career transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/courses" className="btn-white rounded-xl px-8 py-3.5 text-sky-700 shadow-xl">
              Start Learning <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-sky-700 rounded-xl px-8 py-3.5">
              Talk to Us
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
