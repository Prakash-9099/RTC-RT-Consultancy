import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Clock, BarChart3, ArrowRight, BookOpen, ChevronRight, Zap, X } from 'lucide-react';

const categories = [
  { id: 'all',          label: 'All Courses',      icon: '🎯', count: 45 },
  { id: 'cisco',        label: 'Cisco',            icon: '🔵', count: 9 },
  { id: 'azure',        label: 'Microsoft Azure',  icon: '☁️', count: 15 },
  { id: 'redhat',       label: 'Red Hat',          icon: '🔴', count: 5 },
  { id: 'comptia',      label: 'CompTIA',          icon: '🟢', count: 6 },
  { id: 'wireless',     label: 'Wireless',         icon: '📡', count: 8 },
  { id: 'cybersecurity',label: 'Cybersecurity',    icon: '🔒', count: 2 },
];

const courses = [
  // Cisco
  { id:1,  cat:'cisco',         name:'CCNA',                      code:'200-301',       level:'Associate',    dur:'5 Days',  desc:'Enterprise networking fundamentals, IP services, security, and automation.', hot:true },
  { id:2,  cat:'cisco',         name:'DevNet Associate',          code:'200-901 DEVASC',level:'Associate',    dur:'5 Days',  desc:'Software development and design for Cisco platforms using APIs and DevOps.', hot:false },
  { id:3,  cat:'cisco',         name:'CyberOps Associate',        code:'200-201 CBROPS',level:'Associate',    dur:'5 Days',  desc:'Security operations center fundamentals and cybersecurity operations.', hot:false },
  { id:4,  cat:'cisco',         name:'ENCOR',                     code:'350-401',       level:'Professional', dur:'7 Days',  desc:'Enterprise core: dual-stack architecture, virtualization, infrastructure.', hot:true },
  { id:5,  cat:'cisco',         name:'ENARSI',                    code:'300-410',       level:'Professional', dur:'5 Days',  desc:'Advanced routing and services: EIGRP, OSPF, BGP, and route manipulation.', hot:false },
  { id:6,  cat:'cisco',         name:'DCCOR',                     code:'350-601',       level:'Professional', dur:'7 Days',  desc:'Data center core: compute, network, storage, and automation.', hot:false },
  { id:7,  cat:'cisco',         name:'DCACI',                     code:'300-620',       level:'Professional', dur:'5 Days',  desc:'Implementing Cisco Application Centric Infrastructure (ACI) solutions.', hot:false },
  { id:8,  cat:'cisco',         name:'CCIE Enterprise Infrastructure', code:'CCIE EI',  level:'Expert',       dur:'10 Days', desc:'Highest level Cisco enterprise infrastructure certification globally.', hot:true },
  { id:9,  cat:'cisco',         name:'CCIE Enterprise Wireless',  code:'CCIE EW',       level:'Expert',       dur:'10 Days', desc:'Expert-level wireless enterprise infrastructure design and troubleshooting.', hot:false },
  // Azure
  { id:10, cat:'azure',         name:'Azure Fundamentals',        code:'AZ-900',        level:'Beginner',     dur:'2 Days',  desc:'Core cloud concepts, Azure services, pricing, SLA, and lifecycle.', hot:true },
  { id:11, cat:'azure',         name:'Azure Data Fundamentals',   code:'DP-900',        level:'Beginner',     dur:'2 Days',  desc:'Core data concepts, relational and non-relational data on Azure.', hot:false },
  { id:12, cat:'azure',         name:'Azure AI Fundamentals',     code:'AI-900',        level:'Beginner',     dur:'2 Days',  desc:'AI and machine learning concepts and services in Microsoft Azure.', hot:false },
  { id:13, cat:'azure',         name:'Security Fundamentals',     code:'SC-900',        level:'Beginner',     dur:'2 Days',  desc:'Fundamentals of security, compliance, and identity on Microsoft platforms.', hot:false },
  { id:14, cat:'azure',         name:'Azure Administrator',       code:'AZ-104',        level:'Intermediate', dur:'5 Days',  desc:'Implement, manage, and monitor Azure identities, storage, and networks.', hot:true },
  { id:15, cat:'azure',         name:'Azure Developer',           code:'AZ-204',        level:'Intermediate', dur:'5 Days',  desc:'Design, build, test, and maintain cloud applications on Azure.', hot:false },
  { id:16, cat:'azure',         name:'Azure Database Admin',      code:'DP-300',        level:'Intermediate', dur:'4 Days',  desc:'Administer on-premises and cloud databases built on Azure Data Services.', hot:false },
  { id:17, cat:'azure',         name:'Azure Security Engineer',   code:'AZ-500',        level:'Intermediate', dur:'4 Days',  desc:'Implement security controls and threat protection in Azure environments.', hot:true },
  { id:18, cat:'azure',         name:'Azure Network Engineer',    code:'AZ-700',        level:'Intermediate', dur:'3 Days',  desc:'Design and implement Azure networking solutions including hybrid connectivity.', hot:false },
  { id:19, cat:'azure',         name:'Azure Data Engineer',       code:'DP-203',        level:'Intermediate', dur:'4 Days',  desc:'Design and implement data storage, processing, and security on Azure.', hot:false },
  { id:20, cat:'azure',         name:'Azure AI Engineer',         code:'AI-102',        level:'Intermediate', dur:'4 Days',  desc:'Build AI solutions using Azure Cognitive Services and Machine Learning.', hot:false },
  { id:21, cat:'azure',         name:'Azure Stack Hub Operator',  code:'AZ-600',        level:'Advanced',     dur:'4 Days',  desc:'Operate and support Azure Stack Hub infrastructure and services.', hot:false },
  { id:22, cat:'azure',         name:'Azure Solutions Architect', code:'AZ-305',        level:'Advanced',     dur:'5 Days',  desc:'Design enterprise-grade Azure solutions: infrastructure, data, security.', hot:true },
  { id:23, cat:'azure',         name:'Azure DevOps Engineer',     code:'AZ-400',        level:'Advanced',     dur:'5 Days',  desc:'Implement DevOps practices for continuous delivery on Azure.', hot:false },
  { id:24, cat:'azure',         name:'Security Architecture Expert', code:'SC-100',     level:'Expert',       dur:'5 Days',  desc:'Design a Zero Trust strategy and architecture for Microsoft security.', hot:false },
  // Red Hat
  { id:25, cat:'redhat',        name:'RHCE',                      code:'EX294',         level:'Advanced',     dur:'5 Days',  desc:'Red Hat Certified Engineer: Ansible automation and advanced system admin.', hot:true },
  { id:26, cat:'redhat',        name:'RHCA',                      code:'RHCA',          level:'Expert',       dur:'15 Days', desc:'Red Hat Certified Architect: highest level of Red Hat certification.', hot:false },
  { id:27, cat:'redhat',        name:'RHEL Administration',       code:'RH134',         level:'Intermediate', dur:'5 Days',  desc:'Red Hat Enterprise Linux system administration and management.', hot:true },
  { id:28, cat:'redhat',        name:'OpenStack Administration',  code:'CL210',         level:'Advanced',     dur:'5 Days',  desc:'Red Hat OpenStack Platform administration and management.', hot:false },
  { id:29, cat:'redhat',        name:'Ansible Automation',        code:'DO407',         level:'Intermediate', dur:'5 Days',  desc:'Automate enterprise IT tasks and deployments using Red Hat Ansible.', hot:true },
  // CompTIA
  { id:30, cat:'comptia',       name:'CompTIA A+',                code:'Core 1 & 2',    level:'Beginner',     dur:'5 Days',  desc:'Foundation IT hardware, software, networking, and troubleshooting skills.', hot:true },
  { id:31, cat:'comptia',       name:'CompTIA Network+',          code:'N10-009',       level:'Beginner',     dur:'5 Days',  desc:'Networking concepts, infrastructure, operations, and security fundamentals.', hot:true },
  { id:32, cat:'comptia',       name:'CompTIA Security+',         code:'SY0-701',       level:'Intermediate', dur:'5 Days',  desc:'Core security: threats, cryptography, identity, and risk management.', hot:true },
  { id:33, cat:'comptia',       name:'CompTIA Server+',           code:'SK0-005',       level:'Intermediate', dur:'4 Days',  desc:'Server hardware, software, storage, disaster recovery, and troubleshooting.', hot:false },
  { id:34, cat:'comptia',       name:'CompTIA Cloud+',            code:'CV0-004',       level:'Intermediate', dur:'5 Days',  desc:'Cloud infrastructure, deployment, operations, security, and troubleshooting.', hot:false },
  { id:35, cat:'comptia',       name:'CompTIA Linux+',            code:'XK0-005',       level:'Intermediate', dur:'5 Days',  desc:'Linux administration, security, scripting, and system management.', hot:false },
  // Wireless
  { id:36, cat:'wireless',      name:'CWNA',                      code:'CWNA-109',      level:'Associate',    dur:'5 Days',  desc:'Certified Wireless Network Administrator: foundational enterprise WLAN skills.', hot:true },
  { id:37, cat:'wireless',      name:'CWSP',                      code:'CWSP-208',      level:'Professional', dur:'5 Days',  desc:'Certified Wireless Security Professional: advanced wireless security.', hot:false },
  { id:38, cat:'wireless',      name:'CWAP',                      code:'CWAP-404',      level:'Professional', dur:'5 Days',  desc:'Certified Wireless Analysis Professional: protocol analysis.', hot:false },
  { id:39, cat:'wireless',      name:'CWDP',                      code:'CWDP-309',      level:'Professional', dur:'5 Days',  desc:'Certified Wireless Design Professional: enterprise WLAN design.', hot:false },
  { id:40, cat:'wireless',      name:'Aruba ACMA',                code:'HPE6-A83',      level:'Associate',    dur:'3 Days',  desc:'Aruba Certified Mobility Associate: foundational Aruba wireless skills.', hot:false },
  { id:41, cat:'wireless',      name:'Aruba ACMP',                code:'HPE6-A84',      level:'Professional', dur:'5 Days',  desc:'Aruba Certified Mobility Professional: advanced Aruba wireless deployment.', hot:false },
  { id:42, cat:'wireless',      name:'Cisco Meraki ECMS1',        code:'ECMS1',         level:'Associate',    dur:'2 Days',  desc:'Cisco Meraki enterprise cloud networking administration essentials.', hot:false },
  { id:43, cat:'wireless',      name:'Cisco Meraki ECMS2',        code:'ECMS2',         level:'Professional', dur:'2 Days',  desc:'Advanced Cisco Meraki enterprise cloud networking and management.', hot:false },
  // Cybersecurity
  { id:44, cat:'cybersecurity', name:'CEH v12',                   code:'CEH v12',       level:'Advanced',     dur:'5 Days',  desc:'Certified Ethical Hacker: penetration testing, hacking techniques, countermeasures.', hot:true },
  { id:45, cat:'cybersecurity', name:'CND',                       code:'CND v2',        level:'Intermediate', dur:'5 Days',  desc:'Certified Network Defender: network defense strategies and security controls.', hot:false },
];

const levelStyle: Record<string, string> = {
  Beginner:     'level-beginner',
  Associate:    'level-associate',
  Intermediate: 'level-intermediate',
  Professional: 'level-professional',
  Advanced:     'level-advanced',
  Expert:       'level-expert',
};

export default function Courses() {
  const [activeCat, setActiveCat] = useState('all');
  const [query, setQuery] = useState('');

  const filtered = courses.filter((c) => {
    const matchCat = activeCat === 'all' || c.cat === activeCat;
    const q = query.toLowerCase();
    const matchQ = !q || c.name.toLowerCase().includes(q) || c.code.toLowerCase().includes(q) || c.desc.toLowerCase().includes(q);
    return matchCat && matchQ;
  });

  const catLabel = categories.find(c => c.id === activeCat)?.label ?? 'All';

  return (
    <div className="min-h-screen bg-slate-50">

      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 pt-14 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/8 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 rounded-full px-5 py-2 mb-7">
            <BookOpen className="w-3.5 h-3.5 text-sky-400" />
            <span className="text-sky-300 text-xs font-bold uppercase tracking-wider">80+ Professional Courses</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-5 leading-tight">
            Industry-Leading <span className="gradient-text">Certifications</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            From Cisco to Microsoft Azure, we offer globally recognised IT certifications that open doors to premium careers worldwide.
          </p>
        </div>
      </section>

      {/* ── Main content ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Search + count */}
        <div className="flex flex-col md:flex-row gap-4 mb-7">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Search by course name, code, or keyword…"
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="w-full pl-11 pr-10 py-3.5 bg-white border border-slate-200 rounded-xl text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-400 shadow-sm text-sm transition-all"
            />
            {query && (
              <button onClick={() => setQuery('')} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors">
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          <div className="flex items-center gap-2.5 bg-white border border-slate-200 rounded-xl px-5 py-3.5 shadow-sm text-slate-600 text-sm font-medium shrink-0">
            <Filter className="w-4 h-4 text-sky-500" />
            <span><strong className="text-slate-900">{filtered.length}</strong> courses found</span>
          </div>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2.5 mb-9">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCat(cat.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-250 ${
                activeCat === cat.id
                  ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-md shadow-sky-200/60'
                  : 'bg-white text-slate-600 hover:bg-sky-50 hover:text-sky-600 border border-slate-200 hover:border-sky-200'
              }`}
            >
              <span className="text-base leading-none">{cat.icon}</span>
              <span>{cat.label}</span>
              {activeCat === cat.id && (
                <span className="bg-white/25 text-white text-xs px-1.5 py-0.5 rounded-full font-bold">{filtered.length}</span>
              )}
            </button>
          ))}
        </div>

        {/* Popular banner */}
        {activeCat === 'all' && !query && (
          <div className="bg-gradient-to-r from-sky-50 to-cyan-50 border border-sky-200 rounded-2xl px-6 py-4 mb-8 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-sky-500 flex items-center justify-center shrink-0 shadow-md shadow-sky-200">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-bold text-slate-900 text-sm">🔥 Most Popular Certifications in 2025</p>
              <p className="text-slate-500 text-xs mt-0.5">CCNA · AZ-104 · Security+ · RHCE · CWNA · CEH v12 — most enrolled by professionals worldwide.</p>
            </div>
          </div>
        )}

        {/* Course section heading */}
        {filtered.length > 0 && (
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-slate-900 font-bold text-lg">
              {query ? `Results for "${query}"` : `${catLabel} Courses`}
              <span className="ml-2 text-slate-400 font-normal text-base">({filtered.length})</span>
            </h2>
          </div>
        )}

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {filtered.map((course) => (
              <div key={course.id} className="bg-white rounded-2xl border border-slate-100 shadow-sm card-hover overflow-hidden group relative flex flex-col">

                {/* popular badge */}
                {course.hot && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="badge-popular">🔥 Popular</span>
                  </div>
                )}

                <div className="p-6 flex flex-col flex-1">
                  {/* category tag */}
                  <div className="mb-4">
                    <span className="text-[10px] font-bold text-sky-700 uppercase tracking-widest bg-sky-50 border border-sky-100 px-2.5 py-1 rounded-lg">
                      {categories.find(c => c.id === course.cat)?.label ?? course.cat}
                    </span>
                  </div>

                  <h3 className="text-slate-900 font-bold text-base leading-snug mb-1">{course.name}</h3>
                  <p className="text-sky-600 font-semibold text-sm mb-3">{course.code}</p>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5 flex-1">{course.desc}</p>

                  {/* meta */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="flex items-center gap-1.5">
                      <BarChart3 className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                      <span className={`px-2 py-0.5 rounded-full text-[11px] ${levelStyle[course.level]}`}>{course.level}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-500 text-xs">
                      <Clock className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                      <span>{course.dur}</span>
                    </div>
                  </div>

                  {/* action */}
                  <Link
                    to="/contact"
                    className="flex items-center justify-center gap-2 bg-slate-50 hover:bg-sky-500 text-slate-700 hover:text-white px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 border border-slate-200 hover:border-sky-500 group/btn mt-auto"
                  >
                    View Details
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <div className="text-6xl mb-5">🔍</div>
            <h3 className="text-slate-700 font-bold text-xl mb-2">No courses found</h3>
            <p className="text-slate-400 text-sm mb-6">Try adjusting your search or browse all categories.</p>
            <button
              onClick={() => { setQuery(''); setActiveCat('all'); }}
              className="btn-primary rounded-xl px-7 py-3"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-16 bg-gradient-to-br from-slate-900 to-sky-950 rounded-3xl p-10 sm:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-sky-500/10 rounded-full blur-2xl" />
          <div className="relative">
            <div className="w-14 h-14 rounded-2xl bg-sky-500/20 border border-sky-500/30 flex items-center justify-center mx-auto mb-5">
              <Zap className="w-7 h-7 text-sky-400" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 leading-tight">
              Can't find what you're looking for?
            </h3>
            <p className="text-slate-300 mb-8 text-base max-w-md mx-auto">
              Contact us for customised training programs tailored to your team's exact needs.
            </p>
            <Link to="/contact" className="btn-primary rounded-xl px-8 py-3.5 shadow-lg shadow-sky-500/25">
              Request Custom Training <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
