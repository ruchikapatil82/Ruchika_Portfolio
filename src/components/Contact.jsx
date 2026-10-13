import React, { useState } from 'react'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'
import {
  Mail,
  Phone,
  Send,
  MapPin,
  CheckCircle2,
  Copy,
  Sparkles,
  MessageSquare,
  FileDown,
} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import { portfolioData } from '../data/portfolioData'

export default function Contact({ onOpenResume, onCopyEmail, copiedToast }) {
  const { personal } = portfolioData

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error')
      setErrorMessage('Please fill in your Name, Email, and Message.')
      return
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setStatus('error')
      setErrorMessage('Please provide a valid email address.')
      return
    }

    setStatus('submitting')
    setErrorMessage('')

    // Simulate clean submission & launch confetti
    setTimeout(() => {
      setStatus('success')
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#a855f7', '#ec4899', '#8b5cf6', '#3b82f6'],
        })
      } catch (err) {
        // Fallback gracefully if canvas context isn't supported
      }

      // Pre-fill mailto fallback
      const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(
        formData.subject || 'Portfolio Inquiry'
      )}&body=${encodeURIComponent(
        `Hi Ruchika,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`

      // Give user option to trigger default email client
      window.location.href = mailtoUrl
    }, 600)
  }

  return (
    <section id="contact" style={{ padding: '5rem 0 6rem', position: 'relative' }}>
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-badge">
            <MessageSquare size={14} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">
            Let's Build Something <span className="gradient-brand-text">Great Together</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Have an open position, an internship opportunity, or a collaborative project? Reach out directly!
          </p>
        </div>

        {/* Bento Grid: 2 Columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '1.75rem',
          }}
        >
          {/* Left Column: Direct Info & Quick Actions (5 cols on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bento-card contact-info-card"
            style={{
              gridColumn: 'span 12',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '2.5rem',
            }}
          >
            <div>
              <h3 style={{ fontSize: '1.65rem', fontWeight: 700, marginBottom: '0.85rem' }}>
                Contact Details
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                I am actively seeking Full Stack Developer and React opportunities. Feel free to connect via email, LinkedIn, or GitHub.
              </p>

              {/* Action Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {/* Email Action */}
                <div
                  style={{
                    padding: '1.15rem',
                    borderRadius: '1rem',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.75rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', minWidth: 0 }}>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '10px',
                        background: 'rgba(168, 85, 247, 0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Mail size={18} color="#c084fc" />
                    </div>
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Email Address</div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)', wordBreak: 'break-all' }}>
                        {personal.email}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={onCopyEmail}
                    className="btn-secondary"
                    style={{ padding: '0.45rem 0.85rem', fontSize: '0.8rem', flexShrink: 0 }}
                  >
                    <Copy size={13} />
                    <span>Copy</span>
                  </button>
                </div>

                {/* Phone Action */}
                <div
                  style={{
                    padding: '1.15rem',
                    borderRadius: '1rem',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.75rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', minWidth: 0 }}>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '10px',
                        background: 'rgba(251, 113, 133, 0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Phone size={18} color="#fb7185" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Direct Phone / WhatsApp</div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                        {personal.phone}
                      </div>
                    </div>
                  </div>

                  <a
                    href={`tel:${personal.phone}`}
                    className="btn-secondary"
                    style={{ padding: '0.45rem 0.85rem', fontSize: '0.8rem', flexShrink: 0, textDecoration: 'none' }}
                  >
                    <span>Call</span>
                  </a>
                </div>

                {/* Location */}
                <div
                  style={{
                    padding: '1.15rem',
                    borderRadius: '1rem',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                  }}
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: 'rgba(168, 85, 247, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <MapPin size={18} color="#c084fc" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Location</div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                      {personal.location}
                    </div>
                  </div>
                </div>

                {/* GitHub & LinkedIn Links */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginTop: '0.5rem' }}>
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                    style={{ padding: '0.75rem', fontSize: '0.85rem', textAlign: 'center' }}
                  >
                    <GithubIcon size={16} />
                    <span>GitHub Profile</span>
                  </a>

                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                    style={{ padding: '0.75rem', fontSize: '0.85rem', textAlign: 'center' }}
                  >
                    <LinkedinIcon size={16} />
                    <span>LinkedIn Profile</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Resume Callout */}
            <div
              style={{
                marginTop: '2rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.92rem' }}>Looking for my resume?</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>One-page summary of skills & projects</div>
              </div>
              <button onClick={onOpenResume} className="btn-primary" style={{ padding: '0.5rem 1.15rem', fontSize: '0.85rem' }}>
                <FileDown size={15} />
                <span>Resume</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Working Contact Form (7 cols on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bento-card contact-form-card"
            style={{
              gridColumn: 'span 12',
              padding: '2.5rem',
            }}
          >
            <h3 style={{ fontSize: '1.65rem', fontWeight: 700, marginBottom: '0.5rem' }}>
              Send a Message
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '1.75rem' }}>
              Fill out the form below and I will get back to you as soon as possible.
            </p>

            {status === 'success' ? (
              <div
                style={{
                  padding: '2.5rem 1.5rem',
                  borderRadius: '1.25rem',
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: '#10b981',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.25rem',
                  }}
                >
                  <CheckCircle2 size={32} color="#ffffff" />
                </div>
                <h4 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                  Thank you for reaching out!
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '400px', margin: '0 auto 1.5rem' }}>
                  Your email client has been prepared with your message, and I will respond to your inquiry shortly.
                </p>
                <button
                  onClick={() => {
                    setStatus('idle')
                    setFormData({ name: '', email: '', subject: '', message: '' })
                  }}
                  className="btn-secondary"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.45rem' }}>
                      Your Name <span style={{ color: '#ec4899' }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g., Alex Sharma"
                      required
                      className="input-field"
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.45rem' }}>
                      Your Email <span style={{ color: '#ec4899' }}>*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g., alex@company.com"
                      required
                      className="input-field"
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.45rem' }}>
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g., Full Stack Developer Opportunity / Project Inquiry"
                    className="input-field"
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.45rem' }}>
                    Your Message <span style={{ color: '#ec4899' }}>*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, team, or opportunity..."
                    required
                    rows="5"
                    className="input-field"
                    style={{ resize: 'vertical' }}
                  ></textarea>
                </div>

                {status === 'error' && (
                  <div
                    style={{
                      padding: '0.75rem 1rem',
                      borderRadius: '0.75rem',
                      background: 'rgba(239, 68, 68, 0.1)',
                      border: '1px solid rgba(239, 68, 68, 0.3)',
                      color: '#ef4444',
                      fontSize: '0.85rem',
                    }}
                  >
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-primary"
                  style={{ width: '100%', padding: '0.85rem', fontSize: '1rem', marginTop: '0.5rem' }}
                >
                  {status === 'submitting' ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .contact-info-card {
            grid-column: span 5 !important;
          }
          .contact-form-card {
            grid-column: span 7 !important;
          }
        }
      `}</style>
    </section>
  )
}
