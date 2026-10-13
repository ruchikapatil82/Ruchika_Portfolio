import React from 'react'
import { motion } from 'framer-motion'
import {
  GraduationCap,
  Award,
  Trophy,
  Medal,
  Sparkles,
  FileCheck,
  CheckCircle2,
  BookOpen,
} from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

const iconMap = {
  Trophy,
  Sparkles,
  Medal,
  Award,
  FileCheck,
  GraduationCap,
  CheckCircle2,
}

export default function EducationAndAchievements() {
  const { education, achievements } = portfolioData

  return (
    <section id="education" style={{ padding: '5rem 0', position: 'relative' }}>
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-badge">
            <Award size={14} />
            <span>Academic & Honors</span>
          </div>
          <h2 className="section-title">
            Education & <span className="gradient-brand-text">Achievements</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Academic merit record at RCPIT and recognized performance achievements across internships and competitions.
          </p>
        </div>

        {/* Bento Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '1.5rem',
          }}
        >
          {/* Card 1: Education Comprehensive Bento (Spans 12 or 7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bento-card edu-main-card"
            style={{
              gridColumn: 'span 12',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '2.5rem',
            }}
          >
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '9999px',
                  background: 'rgba(168, 85, 247, 0.12)',
                  border: '1px solid rgba(168, 85, 247, 0.3)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: '#c084fc',
                  marginBottom: '1.25rem',
                }}
              >
                <GraduationCap size={15} />
                <span>Formal Education</span>
              </div>

              <h3 style={{ fontSize: '1.65rem', fontWeight: 700, marginBottom: '0.45rem', lineHeight: 1.3 }}>
                {education.degree}
              </h3>

              <div style={{ fontSize: '1.1rem', color: 'var(--accent-purple)', fontWeight: 600, marginBottom: '0.5rem' }}>
                {education.institution}
              </div>

              <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1.75rem' }}>
                {education.pathway} • {education.location}
              </div>

              {/* Coursework highlights */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                {education.focusAreas.map((area) => (
                  <span key={area} className="tech-pill" style={{ fontSize: '0.8rem' }}>
                    <BookOpen size={13} color="#a855f7" />
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Academic Score Banner */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1.25rem 1.75rem',
                borderRadius: '1.25rem',
                background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.15) 0%, rgba(236, 72, 153, 0.1) 100%)',
                border: '1px solid rgba(168, 85, 247, 0.3)',
                marginTop: '1rem',
              }}
            >
              <div>
                <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)' }}>
                  Academic Performance
                </div>
                <div style={{ fontSize: '2.25rem', fontWeight: 800, color: '#c084fc', lineHeight: 1.15 }}>
                  {education.achievement}
                </div>
                <div style={{ fontSize: '0.825rem', color: 'var(--text-secondary)' }}>
                  {education.achievementLabel}
                </div>
              </div>
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '16px',
                  background: 'var(--gradient-brand)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 20px rgba(168, 85, 247, 0.4)',
                }}
              >
                <Trophy size={26} color="#ffffff" />
              </div>
            </div>
          </motion.div>

          {/* Card 2: Sumago Infotech Honors Spotlight (Spans 12 or 5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bento-card edu-side-card"
            style={{
              gridColumn: 'span 12',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '2.25rem',
              background: 'linear-gradient(180deg, rgba(23, 20, 38, 0.8) 0%, rgba(13, 14, 25, 0.95) 100%)',
            }}
          >
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '9999px',
                  background: 'rgba(236, 72, 153, 0.12)',
                  border: '1px solid rgba(236, 72, 153, 0.3)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: '#f472b6',
                  marginBottom: '1.25rem',
                }}
              >
                <Sparkles size={14} />
                <span>Featured Honors</span>
              </div>

              <h3 style={{ fontSize: '1.45rem', fontWeight: 700, marginBottom: '1.25rem', lineHeight: 1.3 }}>
                Sumago Infotech Valedictory Recognitions
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div
                  style={{
                    padding: '1rem',
                    borderRadius: '0.85rem',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(168, 85, 247, 0.2)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                    <Trophy size={16} color="#fbbf24" />
                    <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>Best Performer of the Month</span>
                  </div>
                  <div style={{ fontSize: '0.825rem', color: 'var(--text-secondary)' }}>
                    Conferred for highest consistency and project milestone delivery.
                  </div>
                </div>

                <div
                  style={{
                    padding: '1rem',
                    borderRadius: '0.85rem',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(236, 72, 153, 0.2)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                    <Sparkles size={16} color="#ec4899" />
                    <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>Curious Catalyst Award</span>
                  </div>
                  <div style={{ fontSize: '0.825rem', color: 'var(--text-secondary)' }}>
                    Special honor at valedictory for proactive technical exploration.
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                marginTop: '1.5rem',
                paddingTop: '1rem',
                borderTop: '1px solid var(--border-subtle)',
                fontSize: '0.825rem',
                color: 'var(--text-muted)',
              }}
            >
              Awarded during the Full Stack Development Internship at Sumago Infotech.
            </div>
          </motion.div>

          {/* All 7 Verified Certifications & Achievements Cards */}
          <div
            style={{
              gridColumn: 'span 12',
              marginTop: '1.5rem',
            }}
          >
            <div style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Medal size={20} color="#a855f7" />
              <span>All Verified Awards & Certifications</span>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '1.25rem',
              }}
            >
              {achievements.map((item, index) => {
                const IconComponent = iconMap[item.icon] || Award
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: index * 0.06 }}
                    className="bento-card"
                    style={{
                      padding: '1.5rem',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                        <div
                          style={{
                            width: '38px',
                            height: '38px',
                            borderRadius: '10px',
                            background: 'rgba(168, 85, 247, 0.12)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <IconComponent size={18} color="#c084fc" />
                        </div>
                        <span
                          style={{
                            fontSize: '0.72rem',
                            fontWeight: 600,
                            padding: '0.2rem 0.55rem',
                            borderRadius: '9999px',
                            background: 'rgba(255, 255, 255, 0.04)',
                            border: '1px solid var(--border-subtle)',
                            color: 'var(--text-muted)',
                            textTransform: 'uppercase',
                          }}
                        >
                          {item.type}
                        </span>
                      </div>

                      <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.35rem', lineHeight: 1.3 }}>
                        {item.title}
                      </h4>

                      <div style={{ fontSize: '0.825rem', color: 'var(--accent-purple)', fontWeight: 600, marginBottom: '0.5rem' }}>
                        {item.issuer}
                      </div>

                      <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                        {item.detail}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .edu-main-card {
            grid-column: span 7 !important;
          }
          .edu-side-card {
            grid-column: span 5 !important;
          }
        }
      `}</style>
    </section>
  )
}
