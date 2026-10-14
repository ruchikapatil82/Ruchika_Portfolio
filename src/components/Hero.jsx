import React from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  FileDown,
  Mail,
  Phone,
  MapPin,
  Award,
  Sparkles,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import { portfolioData } from '../data/portfolioData'

export default function Hero({ onOpenResume, onCopyEmail }) {
  const { personal, stats } = portfolioData

  return (
    <section id="home" style={{ paddingTop: '8.5rem', paddingBottom: '4.5rem', position: 'relative' }}>
      <div className="container-custom">
        {/* Main Editorial Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '2.5rem',
            alignItems: 'center',
          }}
        >
          {/* Left Text Column (Spans 7 cols on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            style={{ gridColumn: 'span 12' }}
            className="hero-col-text"
          >
            {/* Editorial Status Tag */}
            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.75rem' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.55rem',
                  padding: '0.4rem 0.95rem',
                  borderRadius: 'var(--radius-pill)',
                  background: 'rgba(46, 184, 114, 0.1)',
                  border: '1px solid rgba(46, 184, 114, 0.3)',
                  fontSize: '0.825rem',
                  fontWeight: 600,
                  color: 'var(--accent-sage)',
                }}
              >
                <span className="status-indicator-live"></span>
                <span>{personal.status}</span>
              </div>

              <div className="meta-pill">
                <MapPin size={13} color="var(--accent-terracotta)" />
                <span>{personal.location}</span>
              </div>
            </div>

            {/* Editorial Headline */}
            <h1
              className="font-serif"
              style={{
                fontSize: 'clamp(2.75rem, 5.5vw, 4.4rem)',
                fontWeight: 500,
                letterSpacing: '-0.025em',
                lineHeight: 1.1,
                marginBottom: '1.25rem',
              }}
            >
              Ruchika Dilip Patil
            </h1>

            {/* Specialization Tagline */}
            <div
              style={{
                fontSize: 'clamp(1.15rem, 2vw, 1.35rem)',
                fontWeight: 600,
                color: 'var(--accent-terracotta)',
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
                fontSize: 'clamp(1.02rem, 1.3vw, 1.15rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.75,
                maxWidth: '640px',
                marginBottom: '2.25rem',
              }}
            >
              {personal.tagline}
            </p>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.9rem', alignItems: 'center', marginBottom: '2.5rem' }}>
              <a href="#projects" className="btn-editorial-primary">
                <span>View Case Studies</span>
                <ArrowRight size={16} />
              </a>

              <a
                href={personal.resumeUrl}
                download="Ruchika_Patil_Resume.pdf"
                className="btn-editorial-secondary"
              >
                <FileDown size={16} />
                <span>Download Resume (PDF)</span>
              </a>

              <a href="#certificates" className="btn-editorial-secondary">
                <Award size={16} />
                <span>Verified Certificates</span>
              </a>
            </div>

            {/* Direct Contact Bar */}
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
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-terracotta)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                <Mail size={15} />
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
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-terracotta)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                <Phone size={15} />
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
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-terracotta)')}
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
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-terracotta)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                <LinkedinIcon size={16} />
                <span>LinkedIn</span>
              </a>
            </div>
          </motion.div>

          {/* Right Portrait Column (Spans 5 cols on desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{
              gridColumn: 'span 12',
              display: 'flex',
              justifyContent: 'center',
            }}
            className="hero-col-portrait"
          >
            <div style={{ position: 'relative', width: '100%', maxWidth: '390px' }}>
              {/* Refined Gallery Frame */}
              <div
                style={{
                  borderRadius: 'var(--radius-xl)',
                  padding: '6px',
                  background: 'var(--bg-surface-elevated)',
                  border: '1px solid var(--border-medium)',
                  boxShadow: 'var(--shadow-elevated)',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    borderRadius: '1.45rem',
                    overflow: 'hidden',
                    background: '#12151e',
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
                    }}
                  />

                  {/* Gradient Shadow Vignette */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '100px',
                      background: 'linear-gradient(to top, rgba(10, 12, 16, 0.92), transparent)',
                      pointerEvents: 'none',
                    }}
                  ></div>

                  {/* Identification Pill */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '1rem',
                      left: '1rem',
                      right: '1rem',
                      padding: '0.85rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      background: 'rgba(15, 18, 24, 0.92)',
                      backdropFilter: 'blur(12px)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.92rem', color: '#ffffff' }}>
                        {personal.fullName}
                      </div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--accent-terracotta)', fontWeight: 600 }}>
                        Computer Engineering @ RCPIT
                      </div>
                    </div>
                    <span
                      style={{
                        padding: '0.25rem 0.6rem',
                        borderRadius: '9999px',
                        background: 'rgba(46, 184, 114, 0.15)',
                        border: '1px solid rgba(46, 184, 114, 0.3)',
                        color: 'var(--accent-sage)',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                      }}
                    >
                      Verified
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Academic & Experience Key Metrics Strip */}
          <div style={{ gridColumn: 'span 12', marginTop: '1rem' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '1.25rem',
              }}
            >
              {stats.map((stat, sIdx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + sIdx * 0.08 }}
                  className="atelier-card"
                  style={{
                    padding: '1.5rem 1.75rem',
                    borderLeft: `3px solid ${sIdx === 0 ? 'var(--accent-terracotta)' : sIdx === 1 ? 'var(--accent-gold)' : sIdx === 2 ? 'var(--accent-sage)' : 'var(--accent-slate)'
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
                    <span style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--accent-terracotta)' }}>
                      {stat.unit}
                    </span>
                  </div>
                  <div style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--text-primary)' }}>
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
          .hero-col-text {
            grid-column: span 7 !important;
          }
          .hero-col-portrait {
            grid-column: span 5 !important;
          }
        }
      `}</style>
    </section>
  )
}
