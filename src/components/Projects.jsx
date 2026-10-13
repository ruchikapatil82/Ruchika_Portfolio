import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ExternalLink,
  FolderGit2,
  Sparkles,
  Layers,
  CheckCircle2,
  Lock,
  GraduationCap,
  Landmark,
  ClipboardList,
} from 'lucide-react'
import { GithubIcon } from './BrandIcons'
import { portfolioData } from '../data/portfolioData'

const projectIcons = {
  'museum-web': Landmark,
  'obe-attainment': GraduationCap,
  vaultnest: Lock,
  'student-attendance': ClipboardList,
}

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)
  const { projects } = portfolioData

  const filterCategories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack & Web' },
    { id: 'python', label: 'Python & Data Systems' },
  ]

  const filteredProjects = projects.filter((p) => {
    if (filter === 'all') return true
    if (filter === 'fullstack') return p.category.includes('Full Stack') || p.category.includes('Security')
    if (filter === 'python') return p.techStack.includes('Python') || p.category.includes('Academic')
    return true
  })

  return (
    <section id="projects" style={{ padding: '5rem 0', position: 'relative' }}>
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-badge">
            <FolderGit2 size={14} />
            <span>Portfolio Work</span>
          </div>
          <h2 className="section-title">
            Featured <span className="gradient-brand-text">Projects & Systems</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Real-world applications spanning React, the MERN stack, Python web frameworks, and database architectures.
          </p>

          {/* Filter Pills */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.5rem',
              marginTop: '2rem',
            }}
          >
            {filterCategories.map((cat) => {
              const isActive = filter === cat.id
              return (
                <button
                  key={cat.id}
                  onClick={() => setFilter(cat.id)}
                  style={{
                    background: isActive ? 'var(--gradient-brand)' : 'var(--bg-card)',
                    color: isActive ? '#ffffff' : 'var(--text-secondary)',
                    border: '1px solid',
                    borderColor: isActive ? 'transparent' : 'var(--border-subtle)',
                    padding: '0.5rem 1.25rem',
                    borderRadius: '9999px',
                    fontSize: '0.875rem',
                    fontWeight: isActive ? 600 : 500,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: isActive ? '0 4px 15px rgba(168, 85, 247, 0.35)' : 'none',
                  }}
                >
                  {cat.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Bento Grid Projects */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '1.75rem',
          }}
        >
          {filteredProjects.map((project, idx) => {
            const Icon = projectIcons[project.id] || Layers
            const isWide = idx === 0 || idx === 1

            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="bento-card project-card"
                style={{
                  gridColumn: 'span 12',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '2rem',
                }}
                data-is-wide={isWide ? 'true' : 'false'}
              >
                <div>
                  {/* Top Bar: Icon + Category Badge + Status */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1.5rem',
                    }}
                  >
                    <div
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '14px',
                        background: 'rgba(168, 85, 247, 0.15)',
                        border: '1px solid rgba(168, 85, 247, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon size={22} color="#c084fc" />
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          padding: '0.25rem 0.65rem',
                          borderRadius: '9999px',
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid var(--border-subtle)',
                          color: 'var(--text-secondary)',
                        }}
                      >
                        {project.category}
                      </span>
                      <span
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 600,
                          padding: '0.25rem 0.65rem',
                          borderRadius: '9999px',
                          background: 'rgba(168, 85, 247, 0.12)',
                          color: '#c084fc',
                          border: '1px solid rgba(168, 85, 247, 0.3)',
                        }}
                      >
                        {project.statusBadge}
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3
                    style={{
                      fontSize: '1.45rem',
                      fontWeight: 700,
                      letterSpacing: '-0.02em',
                      marginBottom: '0.85rem',
                      lineHeight: 1.3,
                    }}
                  >
                    {project.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.95rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.65,
                      marginBottom: '1.5rem',
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Highlights Bullet Points */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Key Features & Architecture:
                    </div>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                      {project.highlights.map((item, hIdx) => (
                        <li
                          key={hIdx}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.5rem',
                            fontSize: '0.85rem',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.45,
                          }}
                        >
                          <CheckCircle2 size={14} color="#a855f7" style={{ flexShrink: 0, marginTop: '2px' }} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom: Tech Stack Pills & Action Links */}
                <div>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.4rem',
                      marginBottom: '1.5rem',
                      paddingTop: '1.25rem',
                      borderTop: '1px solid var(--border-subtle)',
                    }}
                  >
                    {project.techStack.map((tech) => (
                      <span key={tech} className="tech-pill" style={{ fontSize: '0.78rem' }}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary"
                        style={{ padding: '0.5rem 1.15rem', fontSize: '0.85rem' }}
                      >
                        <GithubIcon size={15} />
                        <span>Source Code</span>
                      </a>
                    )}

                    {project.liveDemo ? (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                        style={{ padding: '0.5rem 1.15rem', fontSize: '0.85rem' }}
                      >
                        <span>Live Demo</span>
                        <ExternalLink size={15} />
                      </a>
                    ) : (
                      <button
                        onClick={() => setSelectedProject(project)}
                        style={{
                          background: 'transparent',
                          border: 'none',
                          color: 'var(--accent-purple)',
                          fontSize: '0.85rem',
                          fontWeight: 600,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          padding: '0.5rem 0.5rem',
                        }}
                      >
                        <Sparkles size={14} />
                        <span>Details & Stack</span>
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 100,
              background: 'rgba(0, 0, 0, 0.75)',
              backdropFilter: 'blur(8px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem',
            }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bento-card"
              style={{
                maxWidth: '600px',
                width: '100%',
                maxHeight: '90vh',
                overflowY: 'auto',
                padding: '2.25rem',
                background: 'var(--bg-card-solid)',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>{selectedProject.title}</h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--text-muted)',
                    cursor: 'pointer',
                    fontSize: '1.25rem',
                  }}
                >
                  ✕
                </button>
              </div>

              <div style={{ fontSize: '0.85rem', color: 'var(--accent-purple)', fontWeight: 600, marginBottom: '1rem' }}>
                {selectedProject.category} • {selectedProject.statusBadge}
              </div>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                {selectedProject.description}
              </p>

              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.5rem' }}>Implemented Stack:</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {selectedProject.techStack.map((tech) => (
                    <span key={tech} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.5rem' }}>Core Capabilities:</div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {selectedProject.highlights.map((h, i) => (
                    <li key={i} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                      <CheckCircle2 size={16} color="#a855f7" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ flex: 1 }}
                  >
                    <GithubIcon size={16} />
                    <span>Open GitHub Repository</span>
                  </a>
                )}
                <button onClick={() => setSelectedProject(null)} className="btn-secondary">
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 900px) {
          .project-card[data-is-wide="true"] {
            grid-column: span 6 !important;
          }
          .project-card[data-is-wide="false"] {
            grid-column: span 6 !important;
          }
        }
      `}</style>
    </section>
  )
}
