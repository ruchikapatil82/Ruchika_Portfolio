import React from 'react'
import { motion } from 'framer-motion'
import {
  Sparkles,
  ArrowRight,
  Mail,
  Phone,
  FileDown,
  MapPin,
  CheckCircle2,
  Award,
  ExternalLink,
  Code2,
} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import { portfolioData } from '../data/portfolioData'

export default function Hero({ onOpenResume, onCopyEmail }) {
  const { personal, stats } = portfolioData

  return (
    <section id="home" style={{ paddingTop: '8rem', paddingBottom: '4rem', position: 'relative' }}>
      <div className="container-custom">
        {/* Main Editorial Hero Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '2rem',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Introduction & Credentials (Spans 7 cols on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              gridColumn: 'span 12',
            }}
            className="hero-text-col"
          >
            {/* Status & Location Pill */}
            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.55rem',
                  padding: '0.45rem 1rem',
                  borderRadius: '9999px',
                  background: 'rgba(16, 185, 129, 0.12)',
                  border: '1px solid rgba(16, 185, 129, 0.35)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: '#10b981',
                }}
              >
                <span className="live-pulse"></span>
                <span>{personal.status}</span>
              </div>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.45rem 0.95rem',
                  borderRadius: '9999px',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)',
                  fontSize: '0.85rem',
                  color: 'var(--text-secondary)',
                }}
              >
                <MapPin size={14} color="#fb7185" />
                <span>{personal.location}</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.4rem, 5.2vw, 4.2rem)',
                fontWeight: 800,
                letterSpacing: '-0.04em',
                lineHeight: 1.12,
                marginBottom: '1rem',
              }}
            >
              Hi, I'm <span className="title-gradient">{personal.name}</span>
            </h1>

            {/* Specialization Subheading */}
            <div
              style={{
                fontSize: 'clamp(1.15rem, 2.2vw, 1.45rem)',
                fontWeight: 700,
                color: 'var(--accent-rose)',
                marginBottom: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem',
                flexWrap: 'wrap',
              }}
            >
              <span>{personal.title}</span>
            </div>

            {/* Bio Prose */}
            <p
              style={{
                fontSize: 'clamp(1.02rem, 1.4vw, 1.15rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                maxWidth: '640px',
                marginBottom: '2rem',
              }}
            >
              {personal.tagline}
            </p>

            {/* Primary CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', alignItems: 'center', marginBottom: '2.25rem' }}>
              <a href="#projects" className="btn-primary">
                <span>View Projects</span>
                <ArrowRight size={17} />
              </a>

              <a
                href={personal.resumeUrl}
                download="Ruchika_Patil_Resume.pdf"
                className="btn-gold"
              >
                <FileDown size={17} />
                <span>Download Resume</span>
              </a>

              <a href="#achievements" className="btn-secondary">
                <Award size={17} />
                <span>Award Photos</span>
              </a>
            </div>

            {/* Direct Contact & Social Links Bar */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '1.25rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid var(--border-subtle)',
              }}
            >
              <button
                onClick={onCopyEmail}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--text-secondary)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  fontSize: '0.88rem',
                  fontWeight: 500,
                  padding: 0,
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#fb7185')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                <Mail size={16} />
                <span>{personal.email}</span>
              </button>

              <a
                href={`tel:${personal.phone}`}
                style={{
                  color: 'var(--text-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  fontSize: '0.88rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#fb7185')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                <Phone size={16} />
                <span>{personal.phone}</span>
              </a>

              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'var(--text-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  fontSize: '0.88rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#fb7185')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                <GithubIcon size={16} />
                <span>GitHub</span>
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'var(--text-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  fontSize: '0.88rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#fb7185')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                <LinkedinIcon size={16} />
                <span>LinkedIn</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: High-Res Portrait in Studio Frame (Spans 5 cols on desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{
              gridColumn: 'span 12',
              display: 'flex',
              justifyContent: 'center',
              position: 'relative',
            }}
            className="hero-image-col"
          >
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '400px',
              }}
            >
              {/* Studio Backdrop Glow */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-15px',
                  borderRadius: '2.5rem',
                  background: 'linear-gradient(135deg, rgba(251, 113, 133, 0.45), rgba(245, 158, 11, 0.35), rgba(168, 85, 247, 0.3))',
                  filter: 'blur(25px)',
                  opacity: 0.6,
                  zIndex: 0,
                }}
              ></div>

              {/* Portrait Container */}
              <div
                style={{
                  position: 'relative',
                  borderRadius: '2.25rem',
                  padding: '8px',
                  background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.03))',
                  border: '1px solid var(--border-medium)',
                  boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.8)',
                  zIndex: 1,
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    borderRadius: '1.85rem',
                    overflow: 'hidden',
                    background: '#12141c',
                    position: 'relative',
                  }}
                >
                  <img
                    src={personal.photo}
                    alt={personal.fullName}
                    style={{
                      width: '100%',
                      height: '460px',
                      objectFit: 'cover',
                      objectPosition: 'center 15%',
                      display: 'block',
                      transition: 'transform 0.5s ease',
                    }}
                  />

                  {/* Gradient Overlay at Bottom */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '110px',
                      background: 'linear-gradient(to top, rgba(9, 10, 15, 0.95), transparent)',
                      pointerEvents: 'none',
                    }}
                  ></div>

                  {/* Bottom Portrait Floating Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '1.25rem',
                      left: '1.25rem',
                      right: '1.25rem',
                      padding: '0.85rem 1.15rem',
                      borderRadius: '1rem',
                      background: 'rgba(15, 17, 24, 0.88)',
                      backdropFilter: 'blur(16px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#ffffff' }}>
                        {personal.fullName}
                      </div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--accent-rose)', fontWeight: 600 }}>
                        Computer Engineering @ RCPIT
                      </div>
                    </div>
                    <div
                      style={{
                        padding: '0.35rem 0.65rem',
                        borderRadius: '9999px',
                        background: 'rgba(16, 185, 129, 0.15)',
                        border: '1px solid rgba(16, 185, 129, 0.35)',
                        color: '#10b981',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                      }}
                    >
                      Verified
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats Row Below (4 high-impact cards) */}
          <div
            style={{
              gridColumn: 'span 12',
              marginTop: '1.5rem',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '1.25rem',
              }}
            >
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + idx * 0.08 }}
                  className="studio-card"
                  style={{
                    padding: '1.5rem 1.75rem',
                    borderLeft: `3px solid ${
                      idx === 0 ? '#fb7185' : idx === 1 ? '#f59e0b' : idx === 2 ? '#38bdf8' : '#a855f7'
                    }`,
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.45rem', marginBottom: '0.35rem' }}>
                    <span
                      style={{
                        fontSize: 'clamp(1.9rem, 2.5vw, 2.4rem)',
                        fontWeight: 800,
                        letterSpacing: '-0.03em',
                        color: 'var(--text-primary)',
                        lineHeight: 1,
                      }}
                    >
                      {stat.value}
                    </span>
                    <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--accent-rose)' }}>
                      {stat.unit}
                    </span>
                  </div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                    {stat.label}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                    {stat.note}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .hero-text-col {
            grid-column: span 7 !important;
          }
          .hero-image-col {
            grid-column: span 5 !important;
          }
        }
      `}</style>
    </section>
  )
}
