import { Link } from 'react-router-dom';
import {
  Code2, Shield, Cloud, Network, Headphones, ArrowRight,
  CheckCircle, Zap, BookOpen, Globe, Users, Award, Wifi,
  Database, Lock, Server
} from 'lucide-react';

const mainServices = [
  {
    id: 1,
    icon: <Code2 className="w-7 h-7" />,
    title: 'Programming & Web Development',
    tagline: 'Build Digital Solutions',
    desc: 'Comprehensive training in modern programming languages and web development frameworks. From front-end design to back-end architecture, we prepare developers for real-world projects.',
    features: [
      'Full-Stack Web Development (React, Node.js)',
      'Python, Java, JavaScript Development',
      'REST API Design & Development',
      'Database Design & SQL / NoSQL',
      'DevOps & CI/CD Pipelines',
      'Agile & Scrum Methodologies',
    ],
    tags: ['React', 'Python', 'Node.js', 'DevOps'],
    color: 'from-violet-500 to-purple-600',
    border: 'border-violet-100',
    iconColor: 'text-violet-600',
  },
  {
    id: 2,
    icon: <Shield className="w-7 h-7" />,
    title: 'Cybersecurity',
    tagline: 'Protect. Detect. Respond.',
    desc: 'End-to-end cybersecurity training covering ethical hacking, threat detection, incident response, and compliance frameworks. Prepare your team to defend against modern cyber threats.',
    features: [
      'Ethical Hacking & Penetration Testing (CEH v12)',
      'Network Defense & Security Operations',
      'SIEM, SOC Operations & Threat Hunting',
      'Risk Assessment & Vulnerability Management',
      'Compliance: ISO 27001, GDPR, PCI DSS',
      'Incident Response & Digital Forensics',
    ],
    tags: ['CEH v12', 'SOC', 'Pentesting', 'CND'],
    color: 'from-red-500 to-rose-600',
    border: 'border-red-100',
    iconColor: 'text-red-600',
  },
  {
    id: 3,
    icon: <Cloud className="w-7 h-7" />,
    title: 'Cloud Computing',
    tagline: 'Scale Without Limits',
    desc: 'Microsoft Azure and multi-cloud training covering architecture, deployment, DevOps, security, and AI. Empower your team to design and manage enterprise-grade cloud environments.',
    features: [
      'Microsoft Azure (AZ-900 to AZ-305)',
      'Cloud Architecture & Design Patterns',
      'Azure DevOps & CI/CD Automation',
      'Cloud Security & Identity Management',
      'Data Engineering & AI on Azure',
      'Cost Optimisation & Governance',
    ],
    tags: ['Azure', 'AZ-104', 'AZ-305', 'Cloud Native'],
    color: 'from-sky-500 to-cyan-600',
    border: 'border-sky-100',
    iconColor: 'text-sky-600',
  },
  {
    id: 4,
    icon: <Network className="w-7 h-7" />,
    title: 'Networking & Infrastructure',
    tagline: 'Connect Everything',
    desc: 'Comprehensive networking and infrastructure training including Cisco certifications, enterprise routing and switching, data centre technologies, and network automation.',
    features: [
      'Cisco CCNA, CCNP & CCIE Programs',
      'Enterprise Routing & Switching (OSPF, BGP)',
      'Data Centre Networking (ACI, VXLAN)',
      'SD-WAN & Network Automation',
      'Aruba Switching & Wireless',
      'Network Design & Architecture',
    ],
    tags: ['Cisco', 'CCNA', 'CCNP', 'SD-WAN'],
    color: 'from-emerald-500 to-teal-600',
    border: 'border-emerald-100',
    iconColor: 'text-emerald-600',
  },
  {
    id: 5,
    icon: <Wifi className="w-7 h-7" />,
    title: 'Wireless Technologies',
    tagline: 'Wireless Everywhere',
    desc: 'Specialised wireless networking training from foundational CWNA to advanced Cisco and Aruba vendor certifications. Design, deploy, and secure enterprise wireless networks.',
    features: [
      'CWNA, CWSP, CWAP, CWDP Certifications',
      'Cisco Wireless LAN Controller (WLC)',
      'Aruba ACMA & ACMP Programs',
      'Cisco Meraki Cloud Management',
      'Wi-Fi 6 & Wi-Fi 6E Deployment',
      'RF Analysis & Site Surveys',
    ],
    tags: ['CWNA', 'Aruba', 'Meraki', 'Wi-Fi 6'],
    color: 'from-amber-500 to-orange-600',
    border: 'border-amber-100',
    iconColor: 'text-amber-600',
  },
  {
    id: 6,
    icon: <Headphones className="w-7 h-7" />,
    title: '24/7 IT Support & Consultancy',
    tagline: 'Always Here for You',
    desc: 'Round-the-clock technical support and consultancy services for businesses of all sizes. Our expert team provides proactive monitoring, troubleshooting, and IT strategy guidance.',
    features: [
      '24/7 Technical Support Helpdesk',
      'Network Monitoring & Management',
      'IT Strategy & Technology Roadmap',
      'Infrastructure Assessment & Audit',
      'Vendor Management & Procurement',
      'Digital Transformation Consulting',
    ],
    tags: ['Support', 'Consulting', 'NOC', 'Strategy'],
    color: 'from-pink-500 to-rose-600',
    border: 'border-pink-100',
    iconColor: 'text-pink-600',
  },
];

const extras = [
  { icon: <Database className="w-5 h-5" />, title: 'Database Management',    desc: 'SQL, NoSQL, and cloud database design, optimisation, and administration services.' },
  { icon: <Server className="w-5 h-5" />,   title: 'Linux Administration',   desc: 'Red Hat Enterprise Linux training and administration for enterprise environments.' },
  { icon: <Lock className="w-5 h-5" />,     title: 'Compliance & Governance',desc: 'IT compliance frameworks: ISO 27001, GDPR, SOC2, and PCI DSS consulting.' },
  { icon: <Globe className="w-5 h-5" />,    title: 'Global Training Delivery',desc: 'Instructor-led online and on-site training worldwide in multiple languages.' },
  { icon: <Users className="w-5 h-5" />,    title: 'Corporate Training',      desc: 'Custom enterprise training programs designed for organisational skill development.' },
  { icon: <Award className="w-5 h-5" />,    title: 'Exam Preparation',        desc: 'Focused bootcamps, practice labs, and mock exams for certification success.' },
];

const process = [
  { step: '01', title: 'Assessment', desc: 'We analyse your current skills, goals, and organisational needs.', icon: <Users className="w-5 h-5" /> },
  { step: '02', title: 'Planning',   desc: 'Custom training roadmap designed for your specific requirements.', icon: <BookOpen className="w-5 h-5" /> },
  { step: '03', title: 'Training',   desc: 'Expert-led sessions with hands-on labs and real-world scenarios.', icon: <Award className="w-5 h-5" /> },
  { step: '04', title: 'Support',    desc: 'Post-training mentorship and ongoing career development support.', icon: <Headphones className="w-5 h-5" /> },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 pt-14 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-500/8 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/8 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 rounded-full px-5 py-2 mb-7">
            <Zap className="w-3.5 h-3.5 text-sky-400" />
            <span className="text-sky-300 text-xs font-bold uppercase tracking-wider">End-to-End IT Solutions</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-5 leading-tight">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            From specialised IT training and certifications to enterprise consultancy,
            RTC offers a complete suite of technology services for individuals and organisations.
          </p>
        </div>
      </section>

      {/* ── Main Services ── */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-3 leading-tight">
            What We <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto">
            Each service is crafted to meet the real-world demands of modern IT industries.
          </p>
        </div>

        <div className="space-y-7">
          {mainServices.map((svc, i) => (
            <div
              key={svc.id}
              className={`bg-white rounded-3xl border ${svc.border} shadow-sm overflow-hidden card-hover group`}
            >
              <div className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>

                {/* colour panel */}
                <div className={`lg:w-72 xl:w-80 bg-gradient-to-br ${svc.color} p-8 flex flex-col justify-between shrink-0`}>
                  <div>
                    <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-white mb-5 shadow-md">
                      {svc.icon}
                    </div>
                    <h3 className="text-white font-black text-xl leading-tight mb-2">{svc.title}</h3>
                    <p className="text-white/75 text-sm font-medium">{svc.tagline}</p>
                  </div>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {svc.tags.map((tag) => (
                      <span key={tag} className="bg-white/20 text-white text-xs px-2.5 py-1 rounded-full font-semibold">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* content panel */}
                <div className="flex-1 p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    <p className="text-slate-500 leading-relaxed mb-7 text-sm">{svc.desc}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {svc.features.map((f) => (
                        <div key={f} className="flex items-start gap-2.5">
                          <CheckCircle className={`w-4 h-4 mt-0.5 shrink-0 ${svc.iconColor}`} />
                          <span className="text-slate-600 text-sm leading-snug">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link to="/contact" className="btn-primary rounded-xl px-6 py-3 text-sm shadow-sm">
                      Get Started <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link to="/courses" className="btn-outline rounded-xl px-6 py-3 text-sm">
                      View Courses <BookOpen className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Additional capabilities ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-3 leading-tight">
              Additional <span className="gradient-text">Capabilities</span>
            </h2>
            <p className="text-slate-500 text-base max-w-xl mx-auto">More ways we can help your organisation succeed.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {extras.map((e, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-sky-200 hover:bg-sky-50 hover:shadow-md transition-all duration-300 card-hover group cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center text-sky-600 mb-4 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300 shadow-sm">
                  {e.icon}
                </div>
                <h4 className="text-slate-900 font-bold text-sm mb-2">{e.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How We Work ── */}
      <section className="py-16 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-3 leading-tight">
              How We <span className="gradient-text">Work</span>
            </h2>
            <p className="text-slate-500 text-base max-w-xl mx-auto">
              Our proven process ensures every engagement delivers measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* connector */}
            <div className="hidden lg:block absolute top-8 h-0.5 bg-gradient-to-r from-sky-200 to-cyan-200 z-0" style={{ left: '14%', right: '14%' }} />

            {process.map((p, i) => (
              <div key={i} className="relative z-10 text-center bg-white rounded-2xl border border-slate-100 shadow-sm p-7 card-hover">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center text-white mx-auto mb-5 shadow-lg shadow-sky-200">
                  <span className="font-black text-base">{p.step}</span>
                </div>
                <h4 className="text-slate-900 font-bold text-base mb-2.5">{p.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-gradient-to-r from-sky-600 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-white/8 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 leading-tight">
            Ready to Get Started?
          </h2>
          <p className="text-sky-100 text-base sm:text-lg mb-9 max-w-xl mx-auto leading-relaxed">
            Contact us today for a free consultation and let us design the perfect training programme for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-white rounded-xl px-8 py-3.5 text-sky-700 shadow-xl">
              Free Consultation <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/courses" className="btn-outline border-white text-white hover:bg-white hover:text-sky-700 rounded-xl px-8 py-3.5">
              Browse Courses
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
