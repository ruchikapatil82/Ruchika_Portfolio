import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Award,
  Trophy,
  Medal,
  Sparkles,
  GraduationCap,
  Calendar,
  CheckCircle2,
  Maximize2,
  X,
  ExternalLink,
  BookOpen,
} from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

export default function EducationAndAchievements() {
  const { education, achievementGallery, otherCertifications } = portfolioData
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <section id="achievements" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-tag">
            <Trophy size={14} />
            <span>Verified Honors & Proof</span>
          </div>
          <h2 className="section-heading">
            Honors, Awards & <span className="title-gradient">Photographic Proof</span>
          </h2>
          <p className="section-subheading" style={{ margin: '0 auto' }}>
            Real recognition from Sumago Infotech internship, academic merit milestones, and competitive programming achievements.
          </p>
        </div>

        {/* 🌟 1. REAL ACHIEVEMENT PHOTO SHOWCASE (The Star Feature) 🌟 */}
        <div style={{ marginBottom: '4rem' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '1.5rem',
            }}
          >
            <div>
              <h3 style={{ fontSize: '1.45rem', fontWeight: 800, letterSpacing: '-0.02em' }}>
                Internship Honors Spotlight
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                Photographic evidence of medals and stage felicitations conferred at Sumago Infotech, Nashik.
              </p>
            </div>
            <span
              style={{
                fontSize: '0.78rem',
                fontWeight: 700,
                padding: '0.3rem 0.75rem',
                borderRadius: '9999px',
                background: 'rgba(245, 158, 11, 0.12)',
                color: '#f59e0b',
                border: '1px solid rgba(245, 158, 11, 0.3)',
              }}
            >
              2 Official Honors
            </span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '1.75rem',
            }}
          >
            {achievementGallery.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="proof-photo-card"
                onClick={() => setSelectedImage(item)}
                style={{ cursor: 'pointer' }}
              >
                {/* Photo with Overlay */}
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="proof-photo-img"
                    style={{
                      height: '340px',
                      objectPosition: idx === 0 ? 'center center' : 'center 20%',
                    }}
                  />

                  {/* Gradient Overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(9, 10, 15, 0.95) 0%, rgba(9, 10, 15, 0.2) 60%, transparent 100%)',
                    }}
                  ></div>

                  {/* Top Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      padding: '0.35rem 0.85rem',
                      borderRadius: '9999px',
                      background: 'rgba(9, 10, 15, 0.85)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      color: idx === 0 ? '#fbbf24' : '#fb7185',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                    }}
                  >
                    {idx === 0 ? <Medal size={14} color="#fbbf24" /> : <Sparkles size={14} color="#fb7185" />}
                    <span>{item.badge}</span>
                  </div>

                  {/* Click to Zoom Pill */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      width: '34px',
                      height: '34px',
                      borderRadius: '50%',
                      background: 'rgba(9, 10, 15, 0.8)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                    }}
                  >
                    <Maximize2 size={15} />
                  </div>

                  {/* Bottom Captions Overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '1.25rem',
                      left: '1.25rem',
                      right: '1.25rem',
                    }}
                  >
                    <h4 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.35rem', lineHeight: 1.2 }}>
                      {item.title}
                    </h4>
                    <div style={{ fontSize: '0.85rem', color: 'var(--accent-rose)', fontWeight: 600, marginBottom: '0.35rem' }}>
                      {item.issuer} • {item.date}
                    </div>
                    <p style={{ fontSize: '0.825rem', color: '#cbd5e1', lineHeight: 1.45 }}>
                      {item.highlight}
                    </p>
                  </div>
                </div>

                {/* Card Footer Bar */}
                <div
                  style={{
                    padding: '1rem 1.25rem',
                    background: 'var(--bg-surface-elevated)',
                    borderTop: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    Official Sumago Infotech Certificate & Trophy
                  </span>
                  <span
                    style={{
                      fontSize: '0.825rem',
                      fontWeight: 700,
                      color: 'var(--accent-rose)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                    }}
                  >
                    View Full Image <Maximize2 size={13} />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 🎓 2. ACADEMIC JOURNEY & MERIT TIMELINE */}
        <div style={{ marginBottom: '4rem' }}>
          <h3 style={{ fontSize: '1.45rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <GraduationCap size={22} color="#fb7185" />
            <span>Academic Excellence & Progression</span>
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {education.map((edu, eIdx) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: eIdx * 0.1 }}
                className="studio-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '2rem',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        padding: '0.25rem 0.65rem',
                        borderRadius: '9999px',
                        background: eIdx === 1 ? 'rgba(245, 158, 11, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid',
                        borderColor: eIdx === 1 ? 'rgba(245, 158, 11, 0.35)' : 'var(--border-subtle)',
                        color: eIdx === 1 ? '#fbbf24' : 'var(--text-secondary)',
                      }}
                    >
                      {edu.badge}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      {edu.period}
                    </span>
                  </div>

                  <h4 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.35rem', lineHeight: 1.3 }}>
                    {edu.degree}
                  </h4>

                  <div style={{ fontSize: '0.95rem', color: 'var(--accent-rose)', fontWeight: 600, marginBottom: '0.25rem' }}>
                    {edu.institution}
                  </div>

                  <div style={{ fontSize: '0.825rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                    {edu.location}
                  </div>
                </div>

                {/* Score Pill Banner */}
                <div
                  style={{
                    padding: '1rem 1.25rem',
                    borderRadius: '1rem',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      {edu.scoreLabel}
                    </div>
                    <div style={{ fontSize: '1.45rem', fontWeight: 800, color: '#ffffff' }}>
                      {edu.score}
                    </div>
                  </div>
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '10px',
                      background: 'rgba(251, 113, 133, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <BookOpen size={18} color="#fb7185" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 📜 3. OTHER VERIFIED CERTIFICATES & PARTICIPATIONS */}
        <div>
          <h3 style={{ fontSize: '1.45rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <Award size={22} color="#f59e0b" />
            <span>Additional Certifications & Participations</span>
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {otherCertifications.map((cert, cIdx) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: cIdx * 0.06 }}
                className="studio-card"
                style={{
                  padding: '1.4rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.9rem',
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '12px',
                    background: 'rgba(251, 113, 133, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Award size={18} color="#fb7185" />
                </div>
                <div>
                  <h5 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.2rem', lineHeight: 1.3 }}>
                    {cert.title}
                  </h5>
                  <div style={{ fontSize: '0.825rem', color: 'var(--text-secondary)' }}>
                    {cert.issuer}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.35rem' }}>
                    {cert.type} • {cert.date}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* 🔍 LIGHTBOX PHOTO MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 120,
              background: 'rgba(5, 6, 10, 0.92)',
              backdropFilter: 'blur(16px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem',
            }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              style={{
                maxWidth: '750px',
                width: '100%',
                background: 'var(--bg-surface)',
                borderRadius: '1.75rem',
                overflow: 'hidden',
                border: '1px solid var(--border-medium)',
                boxShadow: '0 30px 80px rgba(0, 0, 0, 0.8)',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ position: 'relative' }}>
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  style={{
                    width: '100%',
                    maxHeight: '65vh',
                    objectFit: 'contain',
                    background: '#05060a',
                    display: 'block',
                  }}
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: 'rgba(0, 0, 0, 0.75)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                >
                  <X size={20} />
                </button>
              </div>

              <div style={{ padding: '1.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                  <Medal size={18} color="#f59e0b" />
                  <h4 style={{ fontSize: '1.35rem', fontWeight: 800 }}>
                    {selectedImage.title}
                  </h4>
                </div>
                <div style={{ fontSize: '0.9rem', color: 'var(--accent-rose)', fontWeight: 600, marginBottom: '0.75rem' }}>
                  {selectedImage.issuer} • {selectedImage.date}
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  {selectedImage.caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
