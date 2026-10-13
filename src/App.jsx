import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Copy } from 'lucide-react'
import { portfolioData } from './data/portfolioData'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import EducationAndAchievements from './components/EducationAndAchievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ResumeModal from './components/ResumeModal'

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolix_theme') || 'dark'
  })
  const [isResumeOpen, setIsResumeOpen] = useState(false)
  const [copyToast, setCopyToast] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('portfolix_theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email)
    setCopyToast(true)
    setTimeout(() => setCopyToast(false), 3000)
  }

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Ambient Radial Lights */}
      <div className="ambient-bg" aria-hidden="true">
        <div className="ambient-orb ambient-orb-1"></div>
        <div className="ambient-orb ambient-orb-2"></div>
        <div className="ambient-orb ambient-orb-3"></div>
      </div>

      {/* Subtle Grid Pattern Overlay */}
      <div className="mesh-grid" aria-hidden="true"></div>

      {/* Main Navigation */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        {/* Section 1: Hero */}
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onCopyEmail={handleCopyEmail}
        />

        {/* Section 2: About Me */}
        <About />

        {/* Section 3: Skills & Technologies */}
        <Skills />

        {/* Section 4: Featured Projects */}
        <Projects />

        {/* Section 5: Internship Experience */}
        <Experience />

        {/* Section 6: Education & Achievements */}
        <EducationAndAchievements />

        {/* Section 7: Contact Me */}
        <Contact
          onOpenResume={() => setIsResumeOpen(true)}
          onCopyEmail={handleCopyEmail}
        />
      </main>

      {/* Footer */}
      <Footer onCopyEmail={handleCopyEmail} />

      {/* Resume Viewer / Download Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Copied to Clipboard Toast */}
      <AnimatePresence>
        {copyToast && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              bottom: '2rem',
              right: '2rem',
              zIndex: 110,
              background: 'var(--bg-card-solid)',
              border: '1px solid var(--accent-purple)',
              boxShadow: '0 10px 30px rgba(168, 85, 247, 0.4)',
              borderRadius: '9999px',
              padding: '0.75rem 1.4rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              backdropFilter: 'blur(16px)',
            }}
          >
            <CheckCircle2 size={18} color="#10b981" />
            <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)' }}>
              Email copied to clipboard! ({portfolioData.personal.email})
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
