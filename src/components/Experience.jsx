import React from 'react'
import { motion } from 'framer-motion'
import {
  Briefcase,
  Sparkles,
  Award,
  CheckCircle2,
  Calendar,
  Layers,
  Building2,
  ExternalLink,
} from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

export default function Experience() {
  const { experience } = portfolioData

  return (
    <section id="experience" style={{ padding: '5rem 0', position: 'relative' }}>
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-badge">
            <Briefcase size={14} />
            <span>Professional Journey</span>
          </div>
          <h2 className="section-title">
            Internship <span className="gradient-brand-text">Experience</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Hands-on industry engineering experience working with modern web workflows, agile milestones, and the MERN stack.
          </p>
        </div>

        {/* Bento Layout for Internship */}
        <div style={{ maxWidth: '950px', margin: '0 auto' }}>
          {experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bento-card"
              style={{
                padding: '2.5rem',
                borderLeft: '4px solid var(--accent-purple)',
              }}
            >
              {/* Top Row: Role, Company & Badges */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  marginBottom: '1.25rem',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.35rem' }}>
                    <div
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '10px',
                        background: 'rgba(168, 85, 247, 0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Building2 size={20} color="#c084fc" />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                        {exp.role}
                      </h3>
                      <div style={{ fontSize: '1.05rem', color: 'var(--accent-purple)', fontWeight: 600 }}>
                        {exp.company}
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center' }}>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      padding: '0.35rem 0.85rem',
                      borderRadius: '9999px',
                      background: 'rgba(168, 85, 247, 0.12)',
                      border: '1px solid rgba(168, 85, 247, 0.3)',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: '#c084fc',
                    }}
                  >
                    <Layers size={13} />
                    {exp.technology}
                  </span>

                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      padding: '0.35rem 0.85rem',
                      borderRadius: '9999px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--border-subtle)',
                      fontSize: '0.8rem',
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
                  fontSize: '1rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.75,
                  marginBottom: '1.75rem',
                }}
              >
                {exp.description}
              </p>

              {/* Achievements & Recognition Grid */}
              <div
                style={{
                  padding: '1.5rem',
                  borderRadius: '1.25rem',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <div
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: 'var(--accent-purple)',
                    marginBottom: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                  }}
                >
                  <Award size={16} />
                  <span>Key Recognitions & Highlights During Internship</span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0.85rem' }}>
                  {exp.achievements.map((item, aIdx) => (
                    <div
                      key={aIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.65rem',
                        fontSize: '0.9rem',
                        color: 'var(--text-primary)',
                        padding: '0.75rem',
                        borderRadius: '0.75rem',
                        background: 'rgba(168, 85, 247, 0.06)',
                        border: '1px solid rgba(168, 85, 247, 0.15)',
                      }}
                    >
                      <CheckCircle2 size={17} color="#a855f7" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ lineHeight: 1.45 }}>{item}</span>
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
