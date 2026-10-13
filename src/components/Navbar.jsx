import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Menu, X, FileDown, Sparkles } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

export default function Navbar({ theme, toggleTheme, onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact']
      const scrollPosition = window.scrollY + 150

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Honors & Proof', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ]

  const handleNavClick = (href) => {
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
        background: isScrolled
          ? theme === 'dark'
            ? 'rgba(7, 8, 13, 0.85)'
            : 'rgba(255, 255, 255, 0.88)'
          : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: isScrolled
          ? theme === 'dark'
            ? '1px solid rgba(255, 255, 255, 0.08)'
            : '1px solid rgba(15, 23, 42, 0.08)'
          : '1px solid transparent',
        padding: isScrolled ? '0.75rem 0' : '1.25rem 0',
      }}
    >
      <div className="container-custom" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <a
          href="#home"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '12px',
              background: 'var(--gradient-brand)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: '1rem',
              color: '#ffffff',
              boxShadow: '0 4px 15px rgba(168, 85, 247, 0.4)',
            }}
          >
            RP
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: '1rem', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              Ruchika Patil
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              Full Stack Developer
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '0.25rem',
            background: theme === 'dark' ? 'rgba(255, 255, 255, 0.03)' : 'rgba(15, 23, 42, 0.03)',
            padding: '0.35rem 0.5rem',
            borderRadius: '9999px',
            border: '1px solid var(--border-subtle)',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => {
            const id = link.href.replace('#', '')
            const isActive = activeSection === id
            return (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                style={{
                  background: isActive ? 'var(--gradient-brand)' : 'transparent',
                  color: isActive ? '#ffffff' : 'var(--text-secondary)',
                  border: 'none',
                  padding: '0.45rem 1rem',
                  borderRadius: '9999px',
                  fontSize: '0.875rem',
                  fontWeight: isActive ? 600 : 500,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: isActive ? '0 2px 10px rgba(168, 85, 247, 0.3)' : 'none',
                }}
              >
                {link.name}
              </button>
            )
          })}
        </nav>

        {/* Right Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark/light theme"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            {theme === 'dark' ? <Sun size={18} color="#facc15" /> : <Moon size={18} color="#8b5cf6" />}
          </button>

          {/* Resume Button */}
          <button
            onClick={onOpenResume}
            className="btn-secondary"
            style={{
              display: 'none',
              padding: '0.5rem 1.1rem',
              fontSize: '0.85rem',
            }}
            id="nav-resume-btn"
          >
            <FileDown size={15} />
            Resume
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
            className="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              overflow: 'hidden',
              background: theme === 'dark' ? 'rgba(11, 14, 23, 0.98)' : 'rgba(255, 255, 255, 0.98)',
              borderBottom: '1px solid var(--border-subtle)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <div className="container-custom" style={{ padding: '1.25rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                    style={{
                      textAlign: 'left',
                      background: 'transparent',
                      border: 'none',
                      color: 'var(--text-primary)',
                      padding: '0.75rem 1rem',
                      borderRadius: '0.75rem',
                      fontSize: '1rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                    }}
                  >
                    {link.name}
                  </button>
                ))}

                <button
                  onClick={() => {
                    setMobileMenuOpen(false)
                    onOpenResume()
                  }}
                  className="btn-primary"
                  style={{ width: '100%', marginTop: '0.5rem', padding: '0.75rem' }}
                >
                  <FileDown size={17} />
                  Download / View Resume
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 860px) {
          .desktop-nav { display: flex !important; }
          #nav-resume-btn { display: inline-flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </header>
  )
}
