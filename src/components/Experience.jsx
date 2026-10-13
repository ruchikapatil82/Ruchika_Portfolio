import React from 'react'
import { motion } from 'framer-motion'
import {
  Briefcase,
  Building2,
  Calendar,
  Layers,
  Award,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
} from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

export default function Experience() {
  const { experience } = portfolioData

  return (
    <section id="experience" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-tag">
            <Briefcase size={14} />
            <span>Industry Exposure</span>
          </div>
          <h2 className="section-heading">
            Internship <span className="title-gradient">Milestones</span>
          </h2>
          <p className="section-subheading" style={{ margin: '0 auto' }}>
            Practical engineering experience at Sumago Infotech, Nashik — delivering React.js components and full-stack integration.
          </p>
        </div>

        {/* Experience Showcase Card */}
        <div style={{ maxWidth: '980px', margin: '0 auto' }}>
          {experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="studio-card"
              style={{
                padding: '2.75rem',
                borderLeft: '4px solid var(--accent-rose)',
              }}
            >
              {/* Header Info */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  gap: '1.25rem',
                  marginBottom: '1.5rem',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.4rem' }}>
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '12px',
                        background: 'rgba(251, 113, 133, 0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Building2 size={22} color="#fb7185" />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.65rem', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                        {exp.role}
                      </h3>
                      <div style={{ fontSize: '1.1rem', color: 'var(--accent-rose)', fontWeight: 700 }}>
                        {exp.company} • {exp.location}
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', alignItems: 'center' }}>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      padding: '0.4rem 0.95rem',
                      borderRadius: '9999px',
                      background: 'rgba(251, 113, 133, 0.12)',
                      border: '1px solid rgba(251, 113, 133, 0.3)',
                      fontSize: '0.825rem',
                      fontWeight: 700,
                      color: 'var(--accent-rose)',
                    }}
                  >
                    <Layers size={13} />
                    {exp.technology}
                  </span>

                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      padding: '0.4rem 0.95rem',
                      borderRadius: '9999px',
                      background: 'var(--bg-surface)',
                      border: '1px solid var(--border-subtle)',
                      fontSize: '0.825rem',
                      fontWeight: 600,
                      color: 'var(--text-secondary)',
                    }}
                  >
                    <Calendar size={13} />
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: '1.05rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.8,
                  marginBottom: '2rem',
                }}
              >
                {exp.description}
              </p>

              {/* Achievements Highlight Strip */}
              <div
                style={{
                  padding: '1.5rem',
                  borderRadius: '1.25rem',
                  background: 'var(--bg-surface-elevated)',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <div
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: 'var(--accent-rose)',
                    marginBottom: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Award size={16} />
                    <span>Conferred Honors & Deliverables</span>
                  </div>
                  <a
                    href="#achievements"
                    style={{
                      color: 'var(--accent-rose)',
                      fontSize: '0.8rem',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                    }}
                  >
                    <span>View Real Photos</span>
                    <ArrowRight size={13} />
                  </a>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.85rem' }}>
                  {exp.achievements.map((item, aIdx) => (
                    <div
                      key={aIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.65rem',
                        fontSize: '0.92rem',
                        color: 'var(--text-primary)',
                        padding: '0.85rem 1rem',
                        borderRadius: '0.85rem',
                        background: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid var(--border-subtle)',
                      }}
                    >
                      <CheckCircle2 size={16} color="#fb7185" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span style={{ lineHeight: 1.5 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
