import React from 'react'
import { motion } from 'framer-motion'
import {
  GraduationCap,
  Sparkles,
  Code2,
  CheckCircle,
  Lightbulb,
  Layers,
  Award,
  BookOpen,
} from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

export default function About() {
  const { personal, education } = portfolioData

  const principles = [
    {
      title: 'Clean, Readable Code',
      desc: 'Writing structured, modular code following modern ES6+ standards and reusable component principles.',
      icon: Code2,
    },
    {
      title: 'User-First Interfaces',
      desc: 'Transforming requirements into responsive, interactive, and visually refined web applications.',
      icon: Layers,
    },
    {
      title: 'Curious & Rapid Learner',
      desc: 'Honored as "Curious Catalyst" at Sumago Infotech for quickly absorbing new stacks and frameworks.',
      icon: Lightbulb,
    },
  ]

  return (
    <section id="about" style={{ padding: '5rem 0', position: 'relative' }}>
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-badge">
            <Sparkles size={14} />
            <span>Background & Journey</span>
          </div>
          <h2 className="section-title">
            Passionate About Engineering <span className="gradient-brand-text">Modern Web Systems</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            A glimpse into my academic background, technical focus, and commitment to building purposeful software.
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
          {/* Card 1: My Story (7 cols on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bento-card about-story-card"
            style={{
              gridColumn: 'span 12',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '2.25rem',
            }}
          >
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: 'var(--accent-purple)',
                  marginBottom: '1rem',
                }}
              >
                <BookOpen size={16} />
                <span>About Me</span>
              </div>

              <h3 style={{ fontSize: '1.65rem', fontWeight: 700, marginBottom: '1.25rem', lineHeight: 1.3 }}>
                Bridging Engineering Foundations with Full-Stack Web Development
              </h3>

              <p
                style={{
                  fontSize: '1.05rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.8,
                  marginBottom: '1.25rem',
                }}
              >
                {personal.about}
              </p>

              <p
                style={{
                  fontSize: '0.98rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.7,
                }}
              >
                From architecting database-driven applications in Python and Flask to creating dynamic user experiences in React, I focus on building software that is practical, accessible, and clean. My experience spans full-stack web development, relational and NoSQL databases, and object-oriented programming.
              </p>
            </div>

            {/* Quick Principles */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem',
                marginTop: '2rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid var(--border-subtle)',
              }}
            >
              {principles.map((item) => {
                const IconComponent = item.icon
                return (
                  <div key={item.title} style={{ display: 'flex', gap: '0.75rem' }}>
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '8px',
                        background: 'rgba(168, 85, 247, 0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <IconComponent size={16} color="#c084fc" />
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.88rem', color: 'var(--text-primary)' }}>
                        {item.title}
                      </div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                        {item.desc}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* Card 2: Academic Excellence Spotlight (5 cols on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bento-card about-edu-card"
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
                  gap: '0.5rem',
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
                <GraduationCap size={15} />
                <span>Education & Academic Merit</span>
              </div>

              {/* Institution */}
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                {education.institution}
              </h3>
              <div style={{ fontSize: '0.9rem', color: 'var(--accent-purple)', fontWeight: 500, marginBottom: '0.5rem' }}>
                {education.degree}
              </div>
              <div style={{ fontSize: '0.825rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                {education.pathway} • {education.location}
              </div>

              {/* Merit Score Callout */}
              <div
                style={{
                  padding: '1.25rem',
                  borderRadius: '1rem',
                  background: 'rgba(168, 85, 247, 0.08)',
                  border: '1px solid rgba(168, 85, 247, 0.25)',
                  marginBottom: '1.5rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)' }}>
                      Academic Achievement
                    </div>
                    <div style={{ fontSize: '2rem', fontWeight: 800, color: '#c084fc', lineHeight: 1.2 }}>
                      {education.achievement}
                    </div>
                  </div>
                  <div
                    style={{
                      width: '45px',
                      height: '45px',
                      borderRadius: '50%',
                      background: 'var(--gradient-brand)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 15px rgba(168, 85, 247, 0.4)',
                    }}
                  >
                    <Award size={22} color="#ffffff" />
                  </div>
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.4rem' }}>
                  {education.achievementLabel}
                </div>
              </div>

              {/* Key Coursework Tags */}
              <div style={{ fontSize: '0.825rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
                Core Coursework & Foundations:
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                {education.focusAreas.map((area) => (
                  <span key={area} className="tech-pill" style={{ fontSize: '0.78rem' }}>
                    <CheckCircle size={12} color="#a855f7" />
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .about-story-card {
            grid-column: span 7 !important;
          }
          .about-edu-card {
            grid-column: span 5 !important;
          }
        }
      `}</style>
    </section>
  )
}
