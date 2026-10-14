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
  QrCode,
} from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

export default function Experience() {
  const { experience } = portfolioData

  return (
    <section id="experience" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-meta-tag">
            <Briefcase size={14} />
            <span>Industrial Experience</span>
          </div>
          <h2 className="section-editorial-title">
            Internship <span style={{ color: 'var(--accent-terracotta)', fontStyle: 'italic' }}>Milestones</span>
          </h2>
          <p className="section-editorial-sub" style={{ margin: '0 auto' }}>
            Hands-on 12-week industrial training at Sumago Infotech, Nashik — delivering React.js components, REST integrations, and earning two official honors.
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
              className="atelier-card"
              style={{
                padding: '2.75rem',
                borderLeft: '4px solid var(--accent-terracotta)',
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
                        width: '44px',
                        height: '44px',
                        borderRadius: 'var(--radius-md)',
                        background: 'rgba(224, 98, 77, 0.12)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Building2 size={22} color="var(--accent-terracotta)" />
                    </div>
                    <div>
                      <h3 className="font-serif" style={{ fontSize: '1.75rem', fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                        {exp.role}
                      </h3>
                      <div style={{ fontSize: '1.05rem', color: 'var(--accent-terracotta)', fontWeight: 600 }}>
                        {exp.company} ({exp.division}) • {exp.location}
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', alignItems: 'center' }}>
                  <span className="meta-pill meta-pill-accent">
                    <Layers size={13} />
                    <span>{exp.technology}</span>
                  </span>

                  <span className="meta-pill">
                    <Calendar size={13} />
                    <span>{exp.period}</span>
                  </span>

                  <span className="meta-pill meta-pill-gold">
                    <QrCode size={13} />
                    <span>Cert No. {exp.certificateNo}</span>
                  </span>
                </div>
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: '1.02rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.75,
                  marginBottom: '2rem',
                }}
              >
                {exp.description}
              </p>

              {/* Deliverables Highlight Strip */}
              <div
                style={{
                  padding: '1.5rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--bg-surface-elevated)',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <div
                  style={{
                    fontSize: '0.825rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: 'var(--accent-terracotta)',
                    marginBottom: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Award size={16} />
                    <span>Official Training Deliverables & Recognitions</span>
                  </div>
                  <a
                    href="#certificates"
                    style={{
                      color: 'var(--accent-terracotta)',
                      fontSize: '0.8rem',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                    }}
                  >
                    <span>View Certificate & Medals</span>
                    <ArrowRight size={13} />
                  </a>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.85rem' }}>
                  {exp.deliverables.map((item, dIdx) => (
                    <div
                      key={dIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.65rem',
                        fontSize: '0.9rem',
                        color: 'var(--text-primary)',
                        padding: '0.85rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid var(--border-subtle)',
                      }}
                    >
                      <CheckCircle2 size={16} color="var(--accent-terracotta)" style={{ flexShrink: 0, marginTop: '3px' }} />
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
