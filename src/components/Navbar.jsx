import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Phone, Heart, HelpCircle, BookOpen } from 'lucide-react'
import NavLogo from './navbar/logo.png'
import NavActions from './navbar/NavActions'

const HEALTH_LINKS = [
  { label: 'What is Health Insurance?',           href: '/faqs#what-is' },
  { label: 'How Much Coverage Do I Need?',        href: '/faqs#coverage' },
  { label: 'Health Insurance Checklist',          href: '/faqs#checklist' },
  { label: 'Best Health Plans 2026',              href: '/blogs#best-plans' },
  { label: 'Health Insurance for Family',         href: '/faqs#family' },
  { label: 'Pre-existing Disease Coverage',       href: '/faqs#pre-existing' },
  { label: 'Best Plans for Senior Citizens',      href: '/faqs#senior' },
  { label: 'Cashless Claim Process',              href: '/faqs#cashless' },
]

const CLAIM_LINKS = [
  { label: 'File a Claim',              href: '/claims' },
  { label: 'Claim Stories',             href: '/claim-stories' },
  { label: 'Claim Rejection Guide',     href: '/faqs#rejection' },
  { label: 'Cashless vs Reimbursement', href: '/faqs#cashless' },
]

export default function Navbar({ logged = false, onLogout = () => {} }) {
  const [mobileOpen, setMobileOpen]         = useState(false)
  const [scrolled, setScrolled]             = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()
  const closeTimeoutRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setActiveDropdown(null)
  }, [location])

  const handleDropdown = (name) =>
    setActiveDropdown(activeDropdown === name ? null : name)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b border-blue-100 ${
        scrolled ? 'shadow-sm' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo + Powered by Insurewell Advisory */}
          <div className="flex items-center gap-3">
            <img src={NavLogo} alt="InsureWell Logo" className="h-12 w-50" />
            <div className="hidden md:block text-[10px] leading-tight text-muted font-medium">
              Powered by<br />Insurewell Advisory
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">

            {/* Health Insurance Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current)
                setActiveDropdown('health')
              }}
              onMouseLeave={() => {
                closeTimeoutRef.current = setTimeout(() => {
                  setActiveDropdown(null)
                }, 250)
              }}
            >
              <Link 
                to="/" 
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeDropdown === 'health'
                    ? 'text-blue-500 bg-blue-50'
                    : 'text-muted hover:text-blue-500 hover:bg-blue-50'
                }`}
                onClick={() => setActiveDropdown(null)}
              >
                <Heart className="w-3.5 h-3.5" />
                Health Insurance
                <ChevronDown className={`w-3 h-3 transition-transform ${activeDropdown === 'health' ? 'rotate-180' : ''}`} />
              </Link>
              {activeDropdown === 'health' && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-blue-100 py-2 z-50">
                  {HEALTH_LINKS.map(link => (
                    <Link key={link.href} to={link.href}
                      className="block px-4 py-2.5 text-sm text-muted hover:text-blue-500 hover:bg-blue-50 transition-colors">
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Claims Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current)
                setActiveDropdown('claims')
              }}
              onMouseLeave={() => {
                closeTimeoutRef.current = setTimeout(() => {
                  setActiveDropdown(null)
                }, 250)
              }}
            >
              <button className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeDropdown === 'claims'
                  ? 'text-blue-500 bg-blue-50'
                  : 'text-muted hover:text-blue-500 hover:bg-blue-50'
              }`}>
                Claims
                <ChevronDown className={`w-3 h-3 transition-transform ${activeDropdown === 'claims' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'claims' && (
                <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-xl border border-blue-100 py-2 z-50">
                  {CLAIM_LINKS.map(link => (
                    <Link key={link.href} to={link.href}
                      className="block px-4 py-2.5 text-sm text-muted hover:text-blue-500 hover:bg-blue-50 transition-colors">
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/our-story"  className="px-3 py-2 rounded-lg text-sm font-medium text-muted hover:text-blue-500 hover:bg-blue-50 transition-colors">Our Story</Link>
            <Link to="/faqs"       className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-muted hover:text-blue-500 hover:bg-blue-50 transition-colors">
              <HelpCircle className="w-3.5 h-3.5" /> FAQs
            </Link>
            <Link to="/calculator" className="px-3 py-2 rounded-lg text-sm font-medium text-muted hover:text-blue-500 hover:bg-blue-50 transition-colors">Calculator</Link>
          </nav>

          {/* CTA buttons */}
          <NavActions logged={logged} onLogout={onLogout} />

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg text-muted hover:bg-blue-50 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-blue-100 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            <div>
              <button
                onClick={() => handleDropdown('m-health')}
                className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium text-ink rounded-lg hover:bg-blue-50"
              >
                Health Insurance
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'm-health' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'm-health' && (
                <div className="pl-4 mt-1 space-y-1">
                  {HEALTH_LINKS.map(link => (
                    <Link key={link.href} to={link.href}
                      className="block px-3 py-2 text-sm text-muted hover:text-blue-500 rounded-lg hover:bg-blue-50">
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div>
              <button
                onClick={() => handleDropdown('m-claims')}
                className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium text-ink rounded-lg hover:bg-blue-50"
              >
                Claims
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'm-claims' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'm-claims' && (
                <div className="pl-4 mt-1 space-y-1">
                  {CLAIM_LINKS.map(link => (
                    <Link key={link.href} to={link.href}
                      className="block px-3 py-2 text-sm text-muted hover:text-blue-500 rounded-lg hover:bg-blue-50">
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {[
              { to: '/our-story', label: 'Our Story' },
              { to: '/faqs',      label: 'FAQs' },
              { to: '/calculator',label: 'Calculator' },
            ].map(item => (
              <Link key={item.to} to={item.to}
                className="block px-3 py-2.5 text-sm font-medium text-ink rounded-lg hover:bg-blue-50 hover:text-blue-500">
                {item.label}
              </Link>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              <a href="https://wa.me/919217182171" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-blue-500 bg-blue-50 rounded-lg border border-blue-200">
                Chat on WhatsApp
              </a>
              <a href="tel:+91 9217182171"
                className="flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-white bg-blue-500 rounded-lg">
                <Phone className="w-4 h-4" /> Book Free Call
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}