import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Award,
  Trophy,
  Medal,
  GraduationCap,
  Sparkles,
  Maximize2,
  X,
  CheckCircle2,
  BookOpen,
  Calendar,
  FileCheck,
  Eye,
  QrCode,
} from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

export default function EducationAndAchievements() {
  const { education, verifiedProofGallery, otherCertifications } = portfolioData
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedProof, setSelectedProof] = useState(null)

  const filterTabs = [
    { id: 'all', label: 'All Verified Proofs (4)' },
    { id: 'certificates', label: 'Official Certificates (2)' },
    { id: 'honors', label: 'Stage & Medal Honors (2)' },
  ]

  const filteredProofs = verifiedProofGallery.filter((item) => {
    if (activeCategory === 'all') return true
    if (activeCategory === 'certificates') return item.category.includes('Certificate') || item.category.includes('Competition')
    if (activeCategory === 'honors') return item.category.includes('Stage') || item.category.includes('Performance')
    return true
  })

  return (
    <section id="certificates" style={{ padding: '6.5rem 0', position: 'relative' }}>
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-meta-tag">
            <Award size={14} />
            <span>Official Credentials & Documentation</span>
          </div>
          <h2 className="section-editorial-title">
            Certificates, Honors & <span style={{ color: 'var(--accent-terracotta)', fontStyle: 'italic' }}>Verified Proof</span>
          </h2>
          <p className="section-editorial-sub" style={{ margin: '0 auto' }}>
            Tangible photographic evidence of industry certifications, state-level competition awards, and academic distinction.
          </p>

          {/* Gallery Category Filter Tabs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.65rem',
              marginTop: '2.25rem',
            }}
          >
            {filterTabs.map((tab) => {
              const isActive = activeCategory === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  style={{
                    padding: '0.5rem 1.25rem',
                    borderRadius: 'var(--radius-pill)',
                    border: '1px solid',
                    borderColor: isActive ? 'var(--accent-terracotta)' : 'var(--border-subtle)',
                    background: isActive ? 'rgba(224, 98, 77, 0.12)' : 'var(--bg-surface)',
                    color: isActive ? 'var(--accent-terracotta)' : 'var(--text-secondary)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.25s',
                  }}
                >
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* 🌟 1. INTERACTIVE FULL-SIZE CERTIFICATE & PROOF GALLERY (4 CARDS) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem',
            marginBottom: '4.5rem',
          }}
        >
          <AnimatePresence>
            {filteredProofs.map((proof, idx) => (
              <motion.div
                key={proof.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="proof-frame"
                onClick={() => setSelectedProof(proof)}
              >
                {/* Photo Container */}
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                  <img
                    src={proof.image}
                    alt={proof.title}
                    className="proof-frame-img"
                    style={{
                      height: proof.aspect === 'portrait' ? '310px' : '230px',
                      objectPosition: proof.aspect === 'portrait' ? 'center top' : 'center center',
                    }}
                  />

                  {/* Top Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '0.85rem',
                      left: '0.85rem',
                      padding: '0.3rem 0.75rem',
                      borderRadius: 'var(--radius-pill)',
                      background: 'rgba(10, 12, 16, 0.88)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: proof.badge.includes('Gold') ? '#fbbf24' : 'var(--accent-terracotta)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                    }}
                  >
                    {proof.badge.includes('Gold') ? <Medal size={13} color="#fbbf24" /> : <FileCheck size={13} />}
                    <span>{proof.badge}</span>
                  </div>

                  {/* Zoom Pill Button */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '0.85rem',
                      right: '0.85rem',
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: 'rgba(10, 12, 16, 0.8)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                    }}
                  >
                    <Maximize2 size={14} />
                  </div>
                </div>

                {/* Details Footer */}
                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--accent-terracotta)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.35rem' }}>
                      {proof.category} • {proof.date}
                    </div>

                    <h4 className="font-serif" style={{ fontSize: '1.25rem', fontWeight: 600, lineHeight: 1.3, marginBottom: '0.65rem' }}>
                      {proof.title}
                    </h4>

                    <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.85rem' }}>
                      {proof.issuer}
                    </div>
                  </div>

                  {/* Bottom Action Hint */}
                  <div
                    style={{
                      paddingTop: '0.85rem',
                      borderTop: '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontSize: '0.8rem',
                      color: 'var(--text-muted)',
                    }}
                  >
                    <span>Click to view full preview</span>
                    <span style={{ color: 'var(--accent-terracotta)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      Zoom <Eye size={13} />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* 🎓 2. ACADEMIC DISTINCTION PROGRESSION */}
        <div style={{ marginBottom: '4.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.75rem' }}>
            <GraduationCap size={22} color="var(--accent-terracotta)" />
            <h3 className="font-serif" style={{ fontSize: '1.75rem', fontWeight: 600 }}>
              Academic Foundation & Distinction
            </h3>
          </div>

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
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: eIdx * 0.1 }}
                className="atelier-card"
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <span
                      className="meta-pill"
                      style={{
                        background: eIdx === 1 ? 'rgba(221, 168, 67, 0.12)' : 'rgba(255, 255, 255, 0.04)',
                        borderColor: eIdx === 1 ? 'rgba(221, 168, 67, 0.3)' : 'var(--border-subtle)',
                        color: eIdx === 1 ? 'var(--accent-gold)' : 'var(--text-secondary)',
                        fontWeight: 700,
                      }}
                    >
                      {edu.badge}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      {edu.period}
                    </span>
                  </div>

                  <h4 className="font-serif" style={{ fontSize: '1.35rem', fontWeight: 600, lineHeight: 1.3, marginBottom: '0.35rem' }}>
                    {edu.degree}
                  </h4>

                  <div style={{ fontSize: '0.95rem', color: 'var(--accent-terracotta)', fontWeight: 600, marginBottom: '0.25rem' }}>
                    {edu.institution}
                  </div>

                  <div style={{ fontSize: '0.825rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                    {edu.location}
                  </div>

                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {edu.scoreDetail}
                  </p>
                </div>

                {/* Score Pill */}
                <div
                  style={{
                    padding: '0.95rem 1.25rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--bg-surface-elevated)',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Official Score
                    </div>
                    <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff' }}>
                      {edu.score}
                    </div>
                  </div>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '10px',
                      background: 'rgba(224, 98, 77, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <BookOpen size={17} color="var(--accent-terracotta)" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 📜 3. ADDITIONAL TECHNICAL WORKSHOPS & CERTIFICATES */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.5rem' }}>
            <Sparkles size={20} color="var(--accent-gold)" />
            <h3 className="font-serif" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
              Technical Symposiums & Active Participations
            </h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {otherCertifications.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="atelier-card"
                style={{
                  padding: '1.35rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.85rem',
                }}
              >
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    background: 'rgba(224, 98, 77, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Award size={18} color="var(--accent-terracotta)" />
                </div>
                <div>
                  <h5 style={{ fontSize: '0.92rem', fontWeight: 700, marginBottom: '0.2rem', lineHeight: 1.3 }}>
                    {item.title}
                  </h5>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    {item.issuer}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                    {item.type} • {item.date}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* 🔍 CLICKABLE FULL-SIZE LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedProof && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 150,
              background: 'rgba(5, 7, 12, 0.94)',
              backdropFilter: 'blur(18px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem',
            }}
            onClick={() => setSelectedProof(null)}
          >
            <motion.div
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 20 }}
              style={{
                maxWidth: '820px',
                width: '100%',
                background: 'var(--bg-surface)',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                border: '1px solid var(--border-medium)',
                boxShadow: 'var(--shadow-modal)',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image Frame */}
              <div style={{ position: 'relative' }}>
                <img
                  src={selectedProof.image}
                  alt={selectedProof.title}
                  style={{
                    width: '100%',
                    maxHeight: '65vh',
                    objectFit: 'contain',
                    background: '#07080c',
                    display: 'block',
                  }}
                />
                <button
                  onClick={() => setSelectedProof(null)}
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
                  <X size={18} />
                </button>
              </div>

              {/* Credential Data Footer */}
              <div style={{ padding: '1.75rem', background: 'var(--bg-surface-elevated)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                  <Award size={18} color="var(--accent-terracotta)" />
                  <h4 className="font-serif" style={{ fontSize: '1.4rem', fontWeight: 600 }}>
                    {selectedProof.title}
                  </h4>
                </div>

                <div style={{ fontSize: '0.88rem', color: 'var(--accent-terracotta)', fontWeight: 600, marginBottom: '0.75rem' }}>
                  {selectedProof.issuer} • {selectedProof.date}
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                  {selectedProof.caption}
                </p>

                {selectedProof.certificateNo && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    <QrCode size={14} color="var(--accent-terracotta)" />
                    <span>Certificate Identifier: <strong>{selectedProof.certificateNo}</strong></span>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
