import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ExternalLink,
  FolderGit2,
  CheckCircle2,
  Lock,
  Landmark,
  GraduationCap,
  ClipboardList,
  Layers,
  Sparkles,
  Maximize2,
  X,
  Eye,
} from 'lucide-react'
import { GithubIcon } from './BrandIcons'
import { portfolioData } from '../data/portfolioData'

export default function Projects() {
  const { projects } = portfolioData
  const [museumActiveView, setMuseumActiveView] = useState(0)
  const [selectedScreenshot, setSelectedScreenshot] = useState(null)

  return (
    <section id="projects" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="section-meta-tag">
            <FolderGit2 size={14} />
            <span>Case Studies & Systems</span>
          </div>
          <h2 className="section-editorial-title">
            Featured Projects & <span style={{ color: 'var(--accent-terracotta)', fontStyle: 'italic' }}>Live Interfaces</span>
          </h2>
          <p className="section-editorial-sub" style={{ margin: '0 auto' }}>
            Production-grade web applications, security platforms, and academic tools backed by genuine implementations and screenshots.
          </p>
        </div>

        {/* 🌟 PROJECT 1: THE TIMES GALLERY (MUSEUM WEBSITE) — CASE STUDY SHOWCASE */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="atelier-card"
          style={{
            padding: '2.5rem',
            marginBottom: '3rem',
            border: '1px solid var(--border-medium)',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              gap: '2.5rem',
              alignItems: 'center',
            }}
          >
            {/* Project Details (Spans 5 cols) */}
            <div style={{ gridColumn: 'span 12' }} className="project-detail-col">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
                <span className="meta-pill meta-pill-accent">
                  <Landmark size={13} />
                  <span>Featured Full Stack Project</span>
                </span>
                <span className="meta-pill">MERN Architecture</span>
              </div>

              <h3 className="font-serif" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.3rem)', fontWeight: 600, lineHeight: 1.2, marginBottom: '0.75rem' }}>
                The Times Gallery
              </h3>

              <div style={{ fontSize: '0.98rem', color: 'var(--accent-terracotta)', fontWeight: 600, marginBottom: '1.25rem' }}>
                Cultural Exhibition Portal & Administrative Membership Ledger
              </div>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                A full-stack web application designed for cultural institutions to showcase exhibitions, facilitate online ticket reservations, and manage museum memberships through a centralized administrative dashboard.
              </p>

              {/* Highlights */}
              <div style={{ marginBottom: '1.75rem' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.65rem' }}>
                  Architecture & Deliverables:
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                    <CheckCircle2 size={16} color="var(--accent-terracotta)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span><strong>Public Visitor Portal:</strong> Timings (9:00 AM – 6:00 PM), schedule views, ticket booking forms.</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                    <CheckCircle2 size={16} color="var(--accent-terracotta)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span><strong>Admin Dashboard:</strong> Live membership records ledger with action items & pass validation.</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                    <CheckCircle2 size={16} color="var(--accent-terracotta)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span><strong>RESTful Services:</strong> Express.js & MongoDB backend persisting visitor passes and inquiries.</span>
                  </div>
                </div>
              </div>

              {/* Tech Stack Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '1.75rem' }}>
                {projects[0].techStack.map((tech) => (
                  <span key={tech} className="meta-pill" style={{ fontSize: '0.78rem' }}>
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a
                  href={projects[0].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-editorial-secondary"
                  style={{ padding: '0.55rem 1.25rem', fontSize: '0.85rem' }}
                >
                  <GithubIcon size={15} />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </div>

            {/* Interactive Browser Mockup with View Switcher (Spans 7 cols) */}
            <div style={{ gridColumn: 'span 12' }} className="project-mockup-col">
              {/* Tab Selector for Screenshots */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '0.85rem',
                }}
              >
                <button
                  onClick={() => setMuseumActiveView(0)}
                  style={{
                    padding: '0.4rem 0.95rem',
                    borderRadius: 'var(--radius-pill)',
                    border: '1px solid',
                    borderColor: museumActiveView === 0 ? 'var(--accent-terracotta)' : 'var(--border-subtle)',
                    background: museumActiveView === 0 ? 'rgba(224, 98, 77, 0.12)' : 'var(--bg-surface)',
                    color: museumActiveView === 0 ? 'var(--accent-terracotta)' : 'var(--text-secondary)',
                    fontSize: '0.825rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                >
                  View 1: Visitor Exhibition Portal
                </button>
                <button
                  onClick={() => setMuseumActiveView(1)}
                  style={{
                    padding: '0.4rem 0.95rem',
                    borderRadius: 'var(--radius-pill)',
                    border: '1px solid',
                    borderColor: museumActiveView === 1 ? 'var(--accent-terracotta)' : 'var(--border-subtle)',
                    background: museumActiveView === 1 ? 'rgba(224, 98, 77, 0.12)' : 'var(--bg-surface)',
                    color: museumActiveView === 1 ? 'var(--accent-terracotta)' : 'var(--text-secondary)',
                    fontSize: '0.825rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                >
                  View 2: Admin Membership Dashboard
                </button>
              </div>

              {/* Browser Window Frame */}
              <div
                className="browser-window"
                style={{ cursor: 'pointer' }}
                onClick={() => setSelectedScreenshot(projects[0].images[museumActiveView])}
              >
                <div className="browser-header">
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <span className="browser-dot" style={{ background: '#ef4444' }}></span>
                    <span className="browser-dot" style={{ background: '#f59e0b' }}></span>
                    <span className="browser-dot" style={{ background: '#10b981' }}></span>
                  </div>
                  <div className="browser-address">
                    {museumActiveView === 0 ? 'https://thetimesgallery.org/exhibitions' : 'https://thetimesgallery.org/admin/membership'}
                  </div>
                  <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-muted)', fontSize: '0.75rem' }}>
                    <Eye size={13} />
                    <span>Click to Zoom</span>
                  </div>
                </div>

                <div style={{ position: 'relative', overflow: 'hidden' }}>
                  <img
                    src={projects[0].images[museumActiveView].url}
                    alt={projects[0].images[museumActiveView].caption}
                    className="browser-content-img"
                    style={{ maxHeight: '380px' }}
                  />
                  <div
                    style={{
                      padding: '0.85rem 1rem',
                      background: 'rgba(15, 18, 24, 0.94)',
                      borderTop: '1px solid var(--border-subtle)',
                      fontSize: '0.8rem',
                      color: 'var(--text-secondary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span>{projects[0].images[museumActiveView].caption}</span>
                    <Maximize2 size={13} color="var(--accent-terracotta)" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 🌟 PROJECT 2: VAULTNEST — REAL ACCOUNT SECURITY & AUTH UI */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="atelier-card"
          style={{
            padding: '2.5rem',
            marginBottom: '3rem',
            border: '1px solid var(--border-medium)',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              gap: '2.5rem',
              alignItems: 'center',
            }}
          >
            {/* Browser Mockup (Spans 6 cols) */}
            <div style={{ gridColumn: 'span 12' }} className="project-mockup-col-2">
              <div
                className="browser-window"
                style={{ cursor: 'pointer' }}
                onClick={() => setSelectedScreenshot(projects[1].images[0])}
              >
                <div className="browser-header">
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <span className="browser-dot" style={{ background: '#ef4444' }}></span>
                    <span className="browser-dot" style={{ background: '#f59e0b' }}></span>
                    <span className="browser-dot" style={{ background: '#10b981' }}></span>
                  </div>
                  <div className="browser-address">
                    https://vaultnest.app/register
                  </div>
                  <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-muted)', fontSize: '0.75rem' }}>
                    <Eye size={13} />
                    <span>Click to Zoom</span>
                  </div>
                </div>

                <div style={{ position: 'relative', overflow: 'hidden' }}>
                  <img
                    src={projects[1].images[0].url}
                    alt={projects[1].images[0].caption}
                    className="browser-content-img"
                    style={{ maxHeight: '380px' }}
                  />
                  <div
                    style={{
                      padding: '0.85rem 1rem',
                      background: 'rgba(15, 18, 24, 0.94)',
                      borderTop: '1px solid var(--border-subtle)',
                      fontSize: '0.8rem',
                      color: 'var(--text-secondary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span>{projects[1].images[0].caption}</span>
                    <Maximize2 size={13} color="var(--accent-terracotta)" />
                  </div>
                </div>
              </div>
            </div>

            {/* Details (Spans 6 cols) */}
            <div style={{ gridColumn: 'span 12' }} className="project-detail-col-2">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
                <span className="meta-pill meta-pill-accent">
                  <Lock size={13} />
                  <span>Security & Web Architecture</span>
                </span>
                <span className="meta-pill">Python / Flask</span>
              </div>

              <h3 className="font-serif" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.3rem)', fontWeight: 600, lineHeight: 1.2, marginBottom: '0.75rem' }}>
                VaultNest — Password Manager
              </h3>

              <div style={{ fontSize: '0.98rem', color: 'var(--accent-terracotta)', fontWeight: 600, marginBottom: '1.25rem' }}>
                Cryptographic Hashing, Entropy Scoring & Authenticated Vault
              </div>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                A focused security web application built to safeguard digital credentials. Provides users with an intuitive vault interface protected by cryptographic hashing, session tokens, and client-side password strength validation.
              </p>

              {/* Highlights */}
              <div style={{ marginBottom: '1.75rem' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.65rem' }}>
                  Core Implementation Features:
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                    <CheckCircle2 size={16} color="var(--accent-terracotta)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span><strong>Werkzeug Cryptography:</strong> Salted password hashing securing all user authentication credentials.</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                    <CheckCircle2 size={16} color="var(--accent-terracotta)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span><strong>Strength Entropy Meter:</strong> Real-time visual feedback checking minimum 12+ characters, symbols, and match confirmation.</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                    <CheckCircle2 size={16} color="var(--accent-terracotta)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span><strong>Protected Routes:</strong> Session-guarded endpoints ensuring credentials can only be accessed by authenticated users.</span>
                  </div>
                </div>
              </div>

              {/* Tech Stack */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '1.75rem' }}>
                {projects[1].techStack.map((tech) => (
                  <span key={tech} className="meta-pill" style={{ fontSize: '0.78rem' }}>
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <a
                  href={projects[1].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-editorial-primary"
                  style={{ padding: '0.55rem 1.25rem', fontSize: '0.85rem' }}
                >
                  <GithubIcon size={15} />
                  <span>View Verified GitHub Code</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 🌟 PROJECTS 3 & 4: CO ATTAINMENT & STUDENT ATTENDANCE (2-COL ARCHITECTURE) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {/* Project 3: CO Attainment */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="atelier-card"
            style={{
              padding: '2.25rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <span className="meta-pill meta-pill-gold">
                  <GraduationCap size={13} />
                  <span>Academic Accreditation Engine</span>
                </span>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Python & Django</span>
              </div>

              <h4 className="font-serif" style={{ fontSize: '1.45rem', fontWeight: 600, marginBottom: '0.4rem', lineHeight: 1.25 }}>
                CO Attainment Calculation System
              </h4>

              <div style={{ fontSize: '0.88rem', color: 'var(--accent-terracotta)', fontWeight: 600, marginBottom: '1rem' }}>
                Automated Course Outcome Analysis & Pandas Gap Computation
              </div>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                An automated computational system developed for engineering departments to calculate Course Outcome (CO) attainment percentages, aggregate assessment evaluations, and generate gap analyses aligned with engineering accreditation requirements.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                {projects[2].techStack.map((tech) => (
                  <span key={tech} className="meta-pill" style={{ fontSize: '0.75rem' }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)' }}>
              <a
                href={projects[2].github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-editorial-secondary"
                style={{ width: '100%', padding: '0.6rem', fontSize: '0.85rem' }}
              >
                <GithubIcon size={15} />
                <span>Open Source Repository</span>
              </a>
            </div>
          </motion.div>

          {/* Project 4: Student Attendance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="atelier-card"
            style={{
              padding: '2.25rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <span className="meta-pill">
                  <ClipboardList size={13} />
                  <span>Desktop Software</span>
                </span>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Python & SQLite3</span>
              </div>

              <h4 className="font-serif" style={{ fontSize: '1.45rem', fontWeight: 600, marginBottom: '0.4rem', lineHeight: 1.25 }}>
                Student Attendance Management System
              </h4>

              <div style={{ fontSize: '0.88rem', color: 'var(--accent-terracotta)', fontWeight: 600, marginBottom: '1rem' }}>
                Relational Database Ledger & Roll-Call Accounting
              </div>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                A standalone desktop application engineered for academic recordkeeping, enabling faculty to maintain student profiles, record daily classroom attendance, and query historical attendance percentages with persistent database reliability.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                {projects[3].techStack.map((tech) => (
                  <span key={tech} className="meta-pill" style={{ fontSize: '0.75rem' }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)' }}>
              <a
                href={projects[3].github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-editorial-secondary"
                style={{ width: '100%', padding: '0.6rem', fontSize: '0.85rem' }}
              >
                <GithubIcon size={15} />
                <span>GitHub Profile Repository</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 🔍 LIGHTBOX MODAL FOR PROJECT SCREENSHOTS */}
      <AnimatePresence>
        {selectedScreenshot && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 140,
              background: 'rgba(5, 7, 12, 0.92)',
              backdropFilter: 'blur(16px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem',
            }}
            onClick={() => setSelectedScreenshot(null)}
          >
            <motion.div
              initial={{ scale: 0.94, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 15 }}
              style={{
                maxWidth: '900px',
                width: '100%',
                background: 'var(--bg-surface)',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                border: '1px solid var(--border-medium)',
                boxShadow: 'var(--shadow-modal)',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ position: 'relative' }}>
                <img
                  src={selectedScreenshot.url}
                  alt={selectedScreenshot.caption}
                  style={{
                    width: '100%',
                    maxHeight: '70vh',
                    objectFit: 'contain',
                    background: '#0a0c10',
                    display: 'block',
                  }}
                />
                <button
                  onClick={() => setSelectedScreenshot(null)}
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'rgba(0, 0, 0, 0.75)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                >
                  <X size={18} />
                </button>
              </div>

              <div style={{ padding: '1.5rem', background: 'var(--bg-surface-elevated)' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  {selectedScreenshot.caption}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 960px) {
          .project-detail-col {
            grid-column: span 5 !important;
          }
          .project-mockup-col {
            grid-column: span 7 !important;
          }
          .project-mockup-col-2 {
            grid-column: span 7 !important;
          }
          .project-detail-col-2 {
            grid-column: span 5 !important;
          }
        }
      `}</style>
    </section>
  )
}
