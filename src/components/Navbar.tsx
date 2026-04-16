import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Courses', path: '/courses' },
  { label: 'Services', path: '/services' },
  { label: 'Locations', path: '/locations' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [location]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* ── Top Announcement Bar ── */}
      <div className="bg-gradient-to-r from-sky-700 via-sky-600 to-cyan-600 text-white text-sm font-medium py-2 px-4 text-center hidden sm:block">
        <span>🎓 Enroll now & get 20% off your first course &nbsp;|&nbsp;</span>
        {/* <a href="tel:+918447850714" className="inline-flex items-center gap-1 underline underline-offset-2 hover:text-sky-100 transition-colors">
          <Phone className="w-3 h-3" /> +91-8447850714
        </a> */}
        <Link to="/contact" className="inline-flex items-center gap-1 underline underline-offset-2 hover:text-sky-100 transition-colors">
          Enroll Now
        </Link>

        <span>&nbsp;|&nbsp; Globally Recognized Certifications</span>
      </div>

      {/* ── Main Navbar ── */}
      <nav
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-400 ${scrolled
          ? 'bg-white/98 backdrop-blur-2xl shadow-md shadow-slate-200/60 border-b border-slate-100'
          : 'bg-white/95 backdrop-blur-xl border-b border-slate-100/70'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group shrink-0">
              {/* <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center shadow-md shadow-sky-200 group-hover:shadow-sky-300 transition-all duration-300 shrink-0">
                <Zap className="w-4.5 h-4.5 text-white" strokeWidth={2.5} />
              </div> */}
              {/* <div className="leading-none">
                <div className="flex items-baseline gap-1">
                  <span className="text-sky-600 font-black text-2xl tracking-tight">RTC</span>
                  <span className="text-slate-500 font-medium text-md hidden sm:inline">- RT Consultancy</span>
                </div>
                <p className="text-slate-400 text-[11px] font-medium hidden sm:block mt-px">
                  Empowering Skills. Transforming Careers.
                </p>
              </div> */}
              <div className="leading-none flex items-center gap-2">
                <img
                  src="/images/RTC_logo.jpeg"
                  alt="RTC Logo"
                  className="h-10 w-auto object-contain"
                />

                <div className="hidden sm:block">
                  <p className="text-slate-600 font-medium text-xl">
                    RALPANA
                  </p>
                  <p className="text-slate-500 text-[12px] font-medium mt-px">
                    Training & Consultancy
                  </p>
                </div>
              </div>
            </Link>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link px-3.5 py-2 rounded-lg text-md font-semibold transition-all duration-250 ${isActive(link.path)
                    ? 'text-sky-600 bg-sky-50'
                    : 'text-slate-600 hover:text-sky-600 hover:bg-sky-50/70'
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+918447850714"
                className="flex items-center gap-1.5 text-slate-500 hover:text-sky-600 text-md font-medium transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span className="hidden xl:inline">+91-8447850714</span>
              </a>
              <Link
                to="/contact"
                className="btn-primary text-sm px-5 py-2.5 rounded-xl shadow-sm shadow-sky-200"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="lg:hidden w-9 h-9 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-sky-50 hover:border-sky-200 hover:text-sky-600 transition-all"
            >
              {isOpen ? <X className="w-4.5 h-4.5" /> : <Menu className="w-4.5 h-4.5" />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-350 ${isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          <div className="bg-white border-t border-slate-100 px-4 pt-3 pb-5 space-y-1 shadow-xl shadow-slate-200/50">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-250 ${isActive(link.path)
                  ? 'text-sky-600 bg-sky-50 border-l-[3px] border-sky-500 pl-3'
                  : 'text-slate-600 hover:text-sky-600 hover:bg-sky-50/70'
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 grid grid-cols-2 gap-2">
              <a
                href="tel:+918447850714"
                className="btn-outline text-sm justify-center py-2.5"
              >
                <Phone className="w-4 h-4" /> Call Now
              </a>
              <Link
                to="/contact"
                className="btn-primary text-sm justify-center py-2.5"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
