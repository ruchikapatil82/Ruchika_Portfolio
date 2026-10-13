import React from 'react'
import { ArrowUp, Mail, Heart } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import { portfolioData } from '../data/portfolioData'

export default function Footer({ onCopyEmail }) {
  const { personal } = portfolioData

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-subtle)',
        background: 'var(--bg-secondary)',
        padding: '3rem 0 2rem',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div className="container-custom">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
            paddingBottom: '2rem',
            borderBottom: '1px solid var(--border-subtle)',
          }}
        >
          {/* Brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'var(--gradient-brand)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                color: '#ffffff',
                fontSize: '0.9rem',
              }}
            >
              RP
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '1rem' }}>{personal.name}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                {personal.title}
              </div>
            </div>
          </div>

          {/* Socials & Back to Top */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-secondary)',
                transition: 'all 0.2s',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#c084fc'
                e.currentTarget.style.borderColor = 'var(--border-glow)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)'
                e.currentTarget.style.borderColor = 'var(--border-subtle)'
              }}
            >
              <GithubIcon size={17} />
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-secondary)',
                transition: 'all 0.2s',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#c084fc'
                e.currentTarget.style.borderColor = 'var(--border-glow)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)'
                e.currentTarget.style.borderColor = 'var(--border-subtle)'
              }}
            >
              <LinkedinIcon size={17} />
            </a>

            <button
              onClick={onCopyEmail}
              aria-label="Copy Email"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-secondary)',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#ec4899'
                e.currentTarget.style.borderColor = 'var(--border-glow)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)'
                e.currentTarget.style.borderColor = 'var(--border-subtle)'
              }}
            >
              <Mail size={17} />
            </button>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="btn-secondary"
              style={{ padding: '0.45rem 0.9rem', fontSize: '0.8rem', borderRadius: '9999px' }}
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

        {/* Bottom copyright */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            paddingTop: '1.5rem',
            fontSize: '0.825rem',
            color: 'var(--text-muted)',
          }}
        >
          <div>
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span>Crafted with</span>
            <Heart size={13} color="#ec4899" fill="#ec4899" />
            <span>using React, Bento Grid & Clean Code</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
