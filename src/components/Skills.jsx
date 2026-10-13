import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Code2,
  Layers,
  Database,
  Cpu,
  Terminal,
  Braces,
  Atom,
  FileCode,
  Palette,
  Smartphone,
  Server,
  Network,
  HardDrive,
  GitBranch,
  Laptop,
  Sparkles,
  Info,
} from 'lucide-react'
import { GithubIcon, FigmaIcon } from './BrandIcons'
import { portfolioData } from '../data/portfolioData'

const iconMap = {
  Code2,
  Cpu,
  Terminal,
  Braces,
  Atom,
  Code: Code2,
  FileCode,
  Palette,
  Smartphone,
  Server,
  Layers,
  Network,
  Database,
  HardDrive,
  GitBranch,
  Github: GithubIcon,
  Laptop,
  Figma: FigmaIcon,
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all')
  const { skills } = portfolioData

  const tabs = [
    { id: 'all', label: 'All Technologies' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'languages', label: 'Languages' },
    { id: 'database', label: 'Databases' },
    { id: 'tools', label: 'Tools & Platforms' },
  ]

  // Flatten skills with categories
  const allSkills = [
    ...skills.frontend.map((s) => ({ ...s, category: 'frontend', catLabel: 'Frontend' })),
    ...skills.backend.map((s) => ({ ...s, category: 'backend', catLabel: 'Backend' })),
    ...skills.languages.map((s) => ({ ...s, category: 'languages', catLabel: 'Language' })),
    ...skills.database.map((s) => ({ ...s, category: 'database', catLabel: 'Database' })),
    ...skills.tools.map((s) => ({ ...s, category: 'tools', catLabel: 'Tool' })),
  ]

  const filteredSkills =
    activeTab === 'all' ? allSkills : allSkills.filter((s) => s.category === activeTab)

  return (
    <section id="skills" style={{ padding: '5rem 0', position: 'relative' }}>
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-badge">
            <Cpu size={14} />
            <span>Technical Proficiency</span>
          </div>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Core Tech Stack</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Only technologies I have hands-on experience with, have used in practical projects, and can confidently explain.
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
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    background: isActive ? 'var(--gradient-brand)' : 'var(--bg-card)',
                    color: isActive ? '#ffffff' : 'var(--text-secondary)',
                    border: '1px solid',
                    borderColor: isActive ? 'transparent' : 'var(--border-subtle)',
                    padding: '0.5rem 1.15rem',
                    borderRadius: '9999px',
                    fontSize: '0.875rem',
                    fontWeight: isActive ? 600 : 500,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: isActive ? '0 4px 15px rgba(168, 85, 247, 0.35)' : 'none',
                  }}
                >
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Skills Bento Grid */}
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '1.25rem',
          }}
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => {
              const Icon = iconMap[skill.icon] || Code2
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  key={skill.name}
                  className="bento-card"
                  style={{
                    padding: '1.5rem',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                  }}
                >
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '14px',
                      background: skill.isLearning
                        ? 'rgba(236, 72, 153, 0.15)'
                        : 'rgba(168, 85, 247, 0.12)',
                      border: '1px solid',
                      borderColor: skill.isLearning
                        ? 'rgba(236, 72, 153, 0.3)'
                        : 'rgba(168, 85, 247, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={22} color={skill.isLearning ? '#ec4899' : '#c084fc'} />
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)' }}>
                        {skill.name}
                      </span>
                      <span
                        style={{
                          fontSize: '0.7rem',
                          color: 'var(--text-muted)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.04em',
                        }}
                      >
                        {skill.catLabel}
                      </span>
                    </div>

                    <div style={{ fontSize: '0.825rem', color: 'var(--text-secondary)' }}>
                      {skill.level}
                    </div>

                    {/* Learning Flag (Figma requirement) */}
                    {skill.isLearning && (
                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.3rem',
                          marginTop: '0.6rem',
                          padding: '0.2rem 0.6rem',
                          borderRadius: '9999px',
                          background: 'rgba(236, 72, 153, 0.12)',
                          border: '1px solid rgba(236, 72, 153, 0.35)',
                          fontSize: '0.725rem',
                          fontWeight: 600,
                          color: '#f472b6',
                        }}
                      >
                        <Sparkles size={11} />
                        Learning UI/UX Design
                      </div>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>

        {/* Verification Note Callout */}
        <div
          style={{
            marginTop: '2.5rem',
            padding: '1.25rem 1.75rem',
            borderRadius: '1rem',
            background: 'rgba(168, 85, 247, 0.05)',
            border: '1px solid rgba(168, 85, 247, 0.2)',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            maxWidth: '750px',
            margin: '2.5rem auto 0',
          }}
        >
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'rgba(168, 85, 247, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <Info size={18} color="#c084fc" />
          </div>
          <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
            <strong style={{ color: 'var(--text-primary)' }}>Verified Practical Stacks:</strong> All skills listed above are backed by actual academic coursework, Sumago Infotech internship deliverables, and verified GitHub repositories.
          </div>
        </div>
      </div>
    </section>
  )
}
