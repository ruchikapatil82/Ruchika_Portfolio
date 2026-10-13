import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FileDown,
  X,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Award,
  CheckCircle2,
  Mail,
  Phone,
  Eye,
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
          zIndex: 150,
          background: 'rgba(5, 6, 10, 0.88)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.25rem',
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.94, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.94, y: 20 }}
          style={{
            maxWidth: '720px',
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto',
            padding: '2.25rem',
            background: 'var(--bg-surface)',
            borderRadius: '2rem',
            border: '1px solid var(--border-medium)',
            boxShadow: '0 30px 80px rgba(0, 0, 0, 0.8)',
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
              marginBottom: '1.75rem',
              paddingBottom: '1.25rem',
              borderBottom: '1px solid var(--border-subtle)',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <FileDown size={22} color="#fb7185" />
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, margin: 0 }}>
                  Official Resume — {personal.fullName}
                </h3>
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                Computer Engineering | Sumago Infotech Intern | 90.71 CGPA
              </div>
            </div>

            <button
              onClick={onClose}
              aria-label="Close Resume Modal"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
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

          {/* Quick Contact Header on Resume */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              padding: '1rem 1.25rem',
              borderRadius: '1rem',
              background: 'var(--bg-surface-elevated)',
              marginBottom: '1.5rem',
              border: '1px solid var(--border-subtle)',
              fontSize: '0.88rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-primary)' }}>
              <Mail size={15} color="#fb7185" />
              <span>{personal.email}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-primary)' }}>
              <Phone size={15} color="#fb7185" />
              <span>{personal.phone}</span>
            </div>
            <div style={{ color: 'var(--text-muted)' }}>
              {personal.location}
            </div>
          </div>

          {/* Key Qualifications Grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Education Record */}
            <div
              style={{
                padding: '1.15rem 1.35rem',
                borderRadius: '1rem',
                background: 'rgba(245, 158, 11, 0.06)',
                border: '1px solid rgba(245, 158, 11, 0.25)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800, fontSize: '0.98rem', marginBottom: '0.35rem' }}>
                <GraduationCap size={18} color="#f59e0b" />
                <span>Diploma in Computer Engineering — SSVPS Polytechnic</span>
              </div>
              <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                Dhule, Maharashtra • Completed with <strong>90.71 CGPA</strong>
              </div>
              <div style={{ fontSize: '0.825rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                Current: Direct Second Year B.E. at R.C. Patel Institute of Technology (RCPIT), Shirpur
              </div>
            </div>

            {/* Internship Record */}
            <div
              style={{
                padding: '1.15rem 1.35rem',
                borderRadius: '1rem',
                background: 'rgba(251, 113, 133, 0.06)',
                border: '1px solid rgba(251, 113, 133, 0.25)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800, fontSize: '0.98rem', marginBottom: '0.35rem' }}>
                <Briefcase size={18} color="#fb7185" />
                <span>{experience[0].role} — {experience[0].company}</span>
              </div>
              <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                {experience[0].location} • {experience[0].period} ({experience[0].technology})
              </div>
              <div style={{ fontSize: '0.825rem', color: '#f43f5e', fontWeight: 600, marginTop: '0.35rem' }}>
                Awarded: Best Performer of the Month (July) & Curious Catalyst Valedictory Award
              </div>
            </div>

            {/* Core Technical Stacks */}
            <div>
              <div style={{ fontSize: '0.825rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                Core Skills Matrix (from Resume)
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                <span className="pill-tag">React.js</span>
                <span className="pill-tag">Node.js</span>
                <span className="pill-tag">Express.js</span>
                <span className="pill-tag">MongoDB</span>
                <span className="pill-tag">JavaScript (ES6+)</span>
                <span className="pill-tag">Python & Django</span>
                <span className="pill-tag">C Language</span>
                <span className="pill-tag">Java</span>
                <span className="pill-tag">HTML5 / CSS3</span>
                <span className="pill-tag">OOP & Data Structures</span>
              </div>
            </div>

            {/* Key Projects */}
            <div>
              <div style={{ fontSize: '0.825rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                Academic Projects Featured
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {projects.slice(0, 3).map((p) => (
                  <div key={p.id} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                    <CheckCircle2 size={15} color="#10b981" />
                    <strong style={{ color: 'var(--text-primary)' }}>{p.title}:</strong>
                    <span>{p.category}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              marginTop: '2rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid var(--border-subtle)',
            }}
          >
            <a
              href="/resume.pdf"
              download="Ruchika_Patil_Resume.pdf"
              className="btn-primary"
              style={{ flex: 1, textDecoration: 'none' }}
            >
              <FileDown size={18} />
              <span>Download Official Resume PDF</span>
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ textDecoration: 'none' }}
            >
              <Eye size={17} />
              <span>Open in New Tab</span>
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
