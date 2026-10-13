import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FileDown,
  X,
  ExternalLink,
  Award,
  CheckCircle2,
  GraduationCap,
  Briefcase,
  Layers,
  Sparkles,
} from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

export default function ResumeModal({ isOpen, onClose }) {
  const { personal, education, experience, skills, projects } = portfolioData

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 100,
          background: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.25rem',
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: 20 }}
          className="bento-card"
          style={{
            maxWidth: '680px',
            width: '100%',
            maxHeight: '88vh',
            overflowY: 'auto',
            padding: '2rem',
            background: 'var(--bg-card-solid)',
            position: 'relative',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '1.5rem',
              paddingBottom: '1rem',
              borderBottom: '1px solid var(--border-subtle)',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FileDown size={20} color="#c084fc" />
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, margin: 0 }}>
                  Resume Summary — {personal.name}
                </h3>
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                Computer Engineering | Full Stack & React Developer
              </div>
            </div>

            <button
              onClick={onClose}
              aria-label="Close Resume Modal"
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-secondary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <X size={18} />
            </button>
          </div>

          {/* Quick Resume Highlights */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Education Summary */}
            <div
              style={{
                padding: '1rem 1.25rem',
                borderRadius: '0.85rem',
                background: 'rgba(168, 85, 247, 0.06)',
                border: '1px solid rgba(168, 85, 247, 0.2)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.25rem' }}>
                <GraduationCap size={16} color="#c084fc" />
                <span>{education.degree}</span>
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                {education.institution} • {education.location}
              </div>
              <div style={{ fontSize: '0.825rem', color: '#c084fc', fontWeight: 600, marginTop: '0.35rem' }}>
                Academic Merit: {education.achievement} ({education.achievementLabel})
              </div>
            </div>

            {/* Internship Summary */}
            <div
              style={{
                padding: '1rem 1.25rem',
                borderRadius: '0.85rem',
                background: 'rgba(236, 72, 153, 0.06)',
                border: '1px solid rgba(236, 72, 153, 0.2)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.25rem' }}>
                <Briefcase size={16} color="#ec4899" />
                <span>{experience[0].role} — {experience[0].company}</span>
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                Stack: {experience[0].technology} • {experience[0].period}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                Best Performer of the Month • Curious Catalyst Award
              </div>
            </div>

            {/* Core Tech Stack */}
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Core Competencies
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {skills.frontend.map((s) => (
                  <span key={s.name} className="tech-pill" style={{ fontSize: '0.78rem' }}>
                    {s.name}
                  </span>
                ))}
                {skills.backend.map((s) => (
                  <span key={s.name} className="tech-pill" style={{ fontSize: '0.78rem' }}>
                    {s.name}
                  </span>
                ))}
                {skills.languages.map((s) => (
                  <span key={s.name} className="tech-pill" style={{ fontSize: '0.78rem' }}>
                    {s.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Featured Projects Highlight */}
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Key Projects Included
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {projects.slice(0, 3).map((p) => (
                  <div key={p.id} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    <CheckCircle2 size={14} color="#10b981" />
                    <strong style={{ color: 'var(--text-primary)' }}>{p.title}:</strong>
                    <span>{p.category} ({p.techStack.slice(0, 3).join(', ')})</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Instructions box for PDF replacement */}
            <div
              style={{
                padding: '0.85rem 1rem',
                borderRadius: '0.75rem',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px dashed var(--border-subtle)',
                fontSize: '0.78rem',
                color: 'var(--text-muted)',
                lineHeight: 1.5,
              }}
            >
              💡 <strong>Pro-Tip for Ruchika:</strong> Put your PDF file named <code>resume.pdf</code> into the <code>public/</code> folder, or paste your Google Drive link into <code>src/data/portfolioData.js</code> to enable instant direct downloads!
            </div>
          </div>

          {/* Action Buttons */}
          <div
            style={{
              display: 'flex',
              gap: '0.75rem',
              marginTop: '1.75rem',
              paddingTop: '1.25rem',
              borderTop: '1px solid var(--border-subtle)',
            }}
          >
            <a
              href="/resume.pdf"
              download="Ruchika_Patil_Resume.pdf"
              className="btn-primary"
              style={{ flex: 1, textDecoration: 'none' }}
              onClick={() => {
                // If local resume doesn't exist yet, fallback to alert or guide
              }}
            >
              <FileDown size={17} />
              <span>Download Resume PDF</span>
            </a>

            <button onClick={onClose} className="btn-secondary">
              Close
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
