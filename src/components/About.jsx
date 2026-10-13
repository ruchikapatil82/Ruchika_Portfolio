import React from 'react'
import { motion } from 'framer-motion'
import {
  User,
  Sparkles,
  Code2,
  Compass,
  Music,
  Sprout,
  Heart,
  GraduationCap,
  Briefcase,
  CheckCircle2,
} from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

export default function About() {
  const { personal, stats } = portfolioData

  const interestIcons = {
    Travelling: Compass,
    'Listening to Music': Music,
    Gardening: Sprout,
  }

  return (
    <section id="about" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-tag">
            <User size={14} />
            <span>Story & Philosophy</span>
          </div>
          <h2 className="section-heading">
            Behind the Code: <span className="title-gradient">Driven by Curiosity</span>
          </h2>
          <p className="section-subheading" style={{ margin: '0 auto' }}>
            A disciplined path through diploma engineering, hands-on full-stack development, and real-world milestones.
          </p>
        </div>

        {/* Editorial Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '2rem',
            alignItems: 'stretch',
          }}
        >
          {/* Main Story (8 cols on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="studio-card about-story-col"
            style={{
              gridColumn: 'span 12',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '2.5rem',
            }}
          >
            <div>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1.25rem', lineHeight: 1.3 }}>
                Engineering Real Solutions, Beyond Just Theoretical Code
              </h3>

              <p
                style={{
                  fontSize: '1.08rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.8,
                  marginBottom: '1.25rem',
                }}
              >
                {personal.about}
              </p>

              <p
                style={{
                  fontSize: '1rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.75,
                }}
              >
                My approach to software is grounded in strong fundamentals: clean architecture, data structures, and intuitive interfaces. During my full-stack internship at Sumago Infotech, I worked daily on React.js workflows, component state lifecycles, and backend integrations — earning the <strong>Best Performer of the Month</strong> and the <strong>Curious Catalyst Award</strong> for learning agility.
              </p>
            </div>

            {/* Core Values / Strengths */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '1.25rem',
                marginTop: '2.25rem',
                paddingTop: '1.75rem',
                borderTop: '1px solid var(--border-subtle)',
              }}
            >
              <div style={{ display: 'flex', gap: '0.85rem' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    background: 'rgba(251, 113, 133, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Code2 size={18} color="#fb7185" />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>Modular React Craft</div>
                  <div style={{ fontSize: '0.825rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                    Reusable components, clean hooks, and responsive UX.
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.85rem' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    background: 'rgba(245, 158, 11, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Sparkles size={18} color="#f59e0b" />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>Learning Agility</div>
                  <div style={{ fontSize: '0.825rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                    Rapid absorption of new libraries, tools, and paradigms.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Personal & Beyond Code (4 cols on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="studio-card about-personal-col"
            style={{
              gridColumn: 'span 12',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '2.5rem',
              background: 'linear-gradient(180deg, rgba(20, 23, 34, 0.95) 0%, rgba(15, 17, 24, 0.98) 100%)',
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
                  background: 'rgba(251, 113, 133, 0.12)',
                  color: 'var(--accent-rose)',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  marginBottom: '1.25rem',
                }}
              >
                <Heart size={14} />
                <span>The Human Touch</span>
              </div>

              <h4 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.75rem' }}>
                Beyond The Terminal
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                Great engineering comes from balance and mindfulness. When I am not debugging code or designing components, you will find me:
              </p>

              {/* Real Interests List (from resume) */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {personal.interests.map((interest) => {
                  const Icon = interestIcons[interest] || Compass
                  return (
                    <div
                      key={interest}
                      style={{
                        padding: '1rem 1.25rem',
                        borderRadius: '1rem',
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid var(--border-subtle)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.85rem',
                      }}
                    >
                      <div
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '10px',
                          background: 'rgba(251, 113, 133, 0.12)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Icon size={18} color="#fb7185" />
                      </div>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>{interest}</div>
                        <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                          {interest === 'Travelling' && 'Exploring new perspectives & cultures'}
                          {interest === 'Listening to Music' && 'Soundtracks that enhance deep focus'}
                          {interest === 'Gardening' && 'Patience, growth & nurturing details'}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Quick Diploma Merit Badge */}
            <div
              style={{
                marginTop: '1.75rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid var(--border-subtle)',
                fontSize: '0.825rem',
                color: 'var(--text-muted)',
              }}
            >
              🎓 Diploma in Computer Engineering from <strong>SSVPS Polytechnic</strong> (90.71 CGPA).
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .about-story-col {
            grid-column: span 8 !important;
          }
          .about-personal-col {
            grid-column: span 4 !important;
          }
        }
      `}</style>
    </section>
  )
}
