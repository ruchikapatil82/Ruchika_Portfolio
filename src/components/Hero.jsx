import React from 'react'
import { motion } from 'framer-motion'
import {
  Sparkles,
  ArrowRight,
  Mail,
  FileDown,
  MapPin,
  Code2,
  Terminal,
  Cpu,
  Layers,
  Award,
} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import { portfolioData } from '../data/portfolioData'

export default function Hero({ onOpenResume, onCopyEmail }) {
  const { personal, stats } = portfolioData

  return (
    <section id="home" style={{ paddingTop: '7.5rem', paddingBottom: '3.5rem', position: 'relative' }}>
      <div className="container-custom">
        {/* Main Bento Hero Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '1.5rem',
            alignItems: 'stretch',
          }}
        >
          {/* Bento Card 1: Main Introduction (Spans 8 cols on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bento-card hero-main-card"
            style={{
              gridColumn: 'span 12',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '420px',
              padding: '2.5rem',
              position: 'relative',
            }}
          >
            {/* Top Pill / Status */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.4rem 0.9rem',
                    borderRadius: '9999px',
                    background: 'rgba(16, 185, 129, 0.1)',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: '#10b981',
                  }}
                >
                  <span className="status-beacon"></span>
                  {personal.status}
                </div>

                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.4rem 0.85rem',
                    borderRadius: '9999px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border-subtle)',
                    fontSize: '0.8rem',
                    color: 'var(--text-secondary)',
                  }}
                >
                  <MapPin size={13} color="#a855f7" />
                  {personal.location}
                </div>
              </div>

              {/* Title & Headline */}
              <h1
                style={{
                  fontSize: 'clamp(2.2rem, 5vw, 3.75rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.035em',
                  lineHeight: 1.15,
                  marginBottom: '1rem',
                }}
              >
                Hi, I'm <span className="gradient-text">{personal.name}</span>
              </h1>

              <div
                style={{
                  fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                  fontWeight: 600,
                  color: 'var(--accent-purple)',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <Sparkles size={20} />
                <span>{personal.title}</span>
              </div>

              <p
                style={{
                  fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  maxWidth: '680px',
                  marginBottom: '2rem',
                }}
              >
                {personal.tagline}
              </p>
            </div>

            {/* CTAs & Socials */}
            <div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', alignItems: 'center' }}>
                <a href="#projects" className="btn-primary">
                  <span>Explore Projects</span>
                  <ArrowRight size={17} />
                </a>

                <button onClick={onOpenResume} className="btn-secondary">
                  <FileDown size={17} />
                  <span>Download Resume</span>
                </button>

                <a href="#contact" className="btn-secondary">
                  <span>Get in Touch</span>
                </a>
              </div>

              {/* Social Quick Links Bar */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginTop: '1.75rem',
                  paddingTop: '1.25rem',
                  borderTop: '1px solid var(--border-subtle)',
                }}
              >
                <span style={{ fontSize: '0.825rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                  Connect with me:
                </span>

                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  style={{
                    color: 'var(--text-secondary)',
                    transition: 'all 0.2s',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#c084fc')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  <GithubIcon size={18} />
                  <span>GitHub</span>
                </a>

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  style={{
                    color: 'var(--text-secondary)',
                    transition: 'all 0.2s',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#c084fc')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  <LinkedinIcon size={18} />
                  <span>LinkedIn</span>
                </a>

                <button
                  onClick={onCopyEmail}
                  aria-label="Copy Email Address"
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--text-secondary)',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontSize: '0.85rem',
                    padding: 0,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ec4899')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  <Mail size={18} />
                  <span>Copy Email</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Bento Card 2: 3D Developer Avatar & Interactive Code Badge (Spans 4 cols on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bento-card hero-side-card"
            style={{
              gridColumn: 'span 12',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '2rem',
              background: 'linear-gradient(180deg, rgba(20, 24, 40, 0.8) 0%, rgba(13, 15, 26, 0.95) 100%)',
            }}
          >
            {/* Developer Avatar Graphic Header */}
            <div style={{ textAlign: 'center', position: 'relative' }}>
              <div
                style={{
                  width: '120px',
                  height: '120px',
                  margin: '0 auto 1.25rem',
                  borderRadius: '28px',
                  background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.3), rgba(236, 72, 153, 0.3))',
                  padding: '3px',
                  boxShadow: '0 0 35px rgba(168, 85, 247, 0.35)',
                  position: 'relative',
                }}
              >
                {/* SVG 3D Developer Avatar Graphic */}
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '25px',
                    background: 'var(--bg-card-solid)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                  }}
                >
                  <svg viewBox="0 0 100 100" width="85" height="85">
                    {/* Glowing background aura */}
                    <circle cx="50" cy="50" r="42" fill="url(#avatarGlow)" opacity="0.25" />
                    {/* Modern stylized developer avatar */}
                    <path
                      d="M26 86 C26 70, 36 62, 50 62 C64 62, 74 70, 74 86"
                      fill="url(#bodyGrad)"
                    />
                    {/* Head */}
                    <circle cx="50" cy="40" r="18" fill="url(#faceGrad)" />
                    {/* Stylish glasses / AR visor */}
                    <rect x="36" y="36" width="28" height="9" rx="4.5" fill="#a855f7" opacity="0.9" />
                    <line x1="41" y1="40" x2="49" y2="40" stroke="#fdf4ff" strokeWidth="1.5" />
                    <line x1="51" y1="40" x2="59" y2="40" stroke="#fdf4ff" strokeWidth="1.5" />
                    {/* Code symbol badge */}
                    <circle cx="75" cy="28" r="12" fill="#ec4899" />
                    <text x="75" y="32" fontSize="9" fontWeight="bold" fill="#fff" textAnchor="middle">
                      &lt;/&gt;
                    </text>
                    <defs>
                      <linearGradient id="avatarGlow" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#a855f7" />
                        <stop offset="1%" stopColor="#ec4899" />
                      </linearGradient>
                      <linearGradient id="faceGrad" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#e9d5ff" />
                        <stop offset="1%" stopColor="#c084fc" />
                      </linearGradient>
                      <linearGradient id="bodyGrad" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#8b5cf6" />
                        <stop offset="1%" stopColor="#4f46e5" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              <div style={{ fontWeight: 700, fontSize: '1.1rem', letterSpacing: '-0.02em' }}>
                Ruchika Patil
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Computer Engineering @ RCPIT
              </div>
            </div>

            {/* Mini Tech Spec Terminal Snippet */}
            <div
              className="font-mono"
              style={{
                marginTop: '1.25rem',
                padding: '1rem',
                borderRadius: '0.85rem',
                background: 'rgba(0, 0, 0, 0.45)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                fontSize: '0.78rem',
                lineHeight: 1.7,
              }}
            >
              <div style={{ display: 'flex', gap: '6px', marginBottom: '8px' }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#ef4444' }}></span>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#f59e0b' }}></span>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981' }}></span>
              </div>
              <div>
                <span style={{ color: '#ec4899' }}>const</span> <span style={{ color: '#93c5fd' }}>developer</span> = &#123;
              </div>
              <div style={{ paddingLeft: '1rem' }}>
                <span style={{ color: '#c084fc' }}>role:</span> <span style={{ color: '#86efac' }}>'Full Stack'</span>,
              </div>
              <div style={{ paddingLeft: '1rem' }}>
                <span style={{ color: '#c084fc' }}>stack:</span> [<span style={{ color: '#fde047' }}>'React'</span>, <span style={{ color: '#fde047' }}>'MERN'</span>, <span style={{ color: '#fde047' }}>'Python'</span>],
              </div>
              <div style={{ paddingLeft: '1rem' }}>
                <span style={{ color: '#c084fc' }}>merit:</span> <span style={{ color: '#67e8f9' }}>'90.35%'</span>,
              </div>
              <div>&#125;;</div>
            </div>

            {/* Quick floating tech tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '1.25rem' }}>
              <span className="tech-pill" style={{ borderColor: 'rgba(168, 85, 247, 0.4)', color: '#c084fc' }}>
                <Code2 size={13} /> React.js
              </span>
              <span className="tech-pill">
                <Layers size={13} /> Node & Express
              </span>
              <span className="tech-pill">
                <Terminal size={13} /> Python & Flask
              </span>
              <span className="tech-pill">
                <Cpu size={13} /> C++ Core
              </span>
            </div>
          </motion.div>

          {/* Bento Stats Row (4 stats columns) */}
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + idx * 0.08 }}
              className="bento-card"
              style={{
                gridColumn: 'span 12',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '1.5rem',
              }}
              data-stat-card="true"
            >
              <div
                style={{
                  fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.03em',
                  color: idx === 0 ? '#c084fc' : idx === 1 ? '#ec4899' : idx === 2 ? '#60a5fa' : '#34d399',
                  lineHeight: 1.1,
                  marginBottom: '0.4rem',
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                {stat.label}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                {stat.note}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .hero-main-card {
            grid-column: span 8 !important;
          }
          .hero-side-card {
            grid-column: span 4 !important;
          }
          [data-stat-card="true"] {
            grid-column: span 3 !important;
          }
        }
        @media (min-width: 600px) and (max-width: 899px) {
          [data-stat-card="true"] {
            grid-column: span 6 !important;
          }
        }
      `}</style>
    </section>
  )
}
