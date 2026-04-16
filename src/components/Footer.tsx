import { Link } from 'react-router-dom';
import { Zap, MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Youtube, Instagram, ArrowRight, ChevronRight } from 'lucide-react';

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'Courses', path: '/courses' },
  { label: 'Services', path: '/services' },
  { label: 'Locations', path: '/locations' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact Us', path: '/contact' },
];

const courseLinks = [
  'Cisco Certifications',
  'Microsoft Azure',
  'Red Hat Linux',
  'CompTIA Certifications',
  'Wireless Certifications',
  'Cybersecurity',
];

const socials = [
  { icon: <Facebook className="w-4 h-4" />, label: 'Facebook' },
  { icon: <Twitter className="w-4 h-4" />, label: 'Twitter' },
  { icon: <Linkedin className="w-4 h-4" />, label: 'LinkedIn' },
  { icon: <Instagram className="w-4 h-4" />, label: 'Instagram' },
  { icon: <Youtube className="w-4 h-4" />, label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-25" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-sky-500/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/4 rounded-full blur-3xl pointer-events-none" />

      {/* ── Top CTA strip ── */}
      {/* <div className="relative bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-1.5 leading-tight">
                Ready to Transform Your IT Career?
              </h3>
              <p className="text-sky-100 text-sm md:text-base">
                Join thousands of professionals trained by RTC – RT Consultancy.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link to="/courses" className="btn-white rounded-xl px-6 py-3 text-sky-700 shadow-lg hover:shadow-xl">
                Browse Courses <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-sky-700 rounded-xl px-6 py-3">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div> */}

      {/* ── Main footer body ── */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-2.5 group mb-5">
              <div className="flex items-center gap-3">
                <img
                  src="/images/RTC_logo.jpeg"
                  alt="RALPANA Logo"
                  className="h-10 w-auto object-contain rounded-md shadow-md"
                />

                <div className="leading-none">
                  <p className="text-sky-400 font-semibold text-lg">
                    RALPANA
                  </p>
                  <p className="text-slate-500 text-xs font-medium">
                    Training & Consultancy
                  </p>
                </div>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Empowering IT professionals with globally recognised certifications and real-world skills.
              Your trusted partner in digital transformation.
            </p>
            <div className="flex items-center gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-sky-600 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-250"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5 flex items-center gap-2.5">
              <div className="w-1 h-5 bg-gradient-to-b from-sky-500 to-cyan-500 rounded-full" />
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-sky-400 text-sm flex items-center gap-2 transition-colors group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-sky-600 group-hover:translate-x-1 transition-transform shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5 flex items-center gap-2.5">
              <div className="w-1 h-5 bg-gradient-to-b from-sky-500 to-cyan-500 rounded-full" />
              Our Courses
            </h4>
            <ul className="space-y-2.5">
              {courseLinks.map((label) => (
                <li key={label}>
                  <Link
                    to="/courses"
                    className="text-slate-400 hover:text-sky-400 text-sm flex items-center gap-2 transition-colors group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-sky-600 group-hover:translate-x-1 transition-transform shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5 flex items-center gap-2.5">
              <div className="w-1 h-5 bg-gradient-to-b from-sky-500 to-cyan-500 rounded-full" />
              Contact Us
            </h4>
            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-sky-400" />
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">
                  RZ-91, Street No. 11,<br />East Sagarpur,<br />New Delhi – 110046
                </p>
              </div>
              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center shrink-0">
                  <Phone className="w-3.5 h-3.5 text-sky-400" />
                </div>
                <div className="space-y-1">
                  <a href="tel:+918447850714" className="text-slate-400 hover:text-sky-400 text-xs font-medium block transition-colors">+91-8447850714</a>
                  <a href="tel:+917291009911" className="text-slate-400 hover:text-sky-400 text-xs font-medium block transition-colors">+91-7291009911</a>
                </div>
              </div>
              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center shrink-0">
                  <Mail className="w-3.5 h-3.5 text-sky-400" />
                </div>
                <div className="space-y-1">
                  <a href="mailto:info@rtconsultancy.in" className="text-slate-400 hover:text-sky-400 text-xs font-medium block transition-colors">info@rtconsultancy.in</a>
                  <a href="mailto:admin@rtconsultancy.in" className="text-slate-400 hover:text-sky-400 text-xs font-medium block transition-colors">admin@rtconsultancy.in</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-slate-800 mt-12 pt-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs text-center sm:text-left">
            © {new Date().getFullYear()}{' '}
            <span className="text-sky-400 font-semibold">RTC – RT Consultancy</span>.
            All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((link) => (
              <a key={link} href="#" className="text-slate-500 hover:text-sky-400 text-xs transition-colors">{link}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
