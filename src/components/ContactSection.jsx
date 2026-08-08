import React, { useState } from 'react';
import { Mail, Send, Check, Copy, MessageSquare, MapPin, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';
import confetti from 'canvas-confetti';

export default function ContactSection({ personal }) {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formValues, setFormValues] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    if (personal?.email) {
      navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formValues.name || !formValues.email || !formValues.message) return;

    setSubmitted(true);
    // Fire festive celebration confetti!
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    setTimeout(() => {
      setSubmitted(false);
      setFormValues({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrapper">
          <span className="section-tag">
            <MessageSquare size={14} /> Contact
          </span>
          <h2 className="section-title">
            Let's Build Something <span className="gradient-text">Great Together</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind, an exciting role opportunity, or just want to connect? Drop me a message below.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Direct Info & Quick Cards */}
          <div className="contact-info-col">
            <div className="info-card glass-card">
              <h3 className="info-card-title">Get in Touch</h3>
              <p className="info-card-desc">
                I am currently open to high-impact senior engineering positions, remote leadership opportunities, and technical consulting.
              </p>

              <div className="direct-links-list">
                {/* Email Direct Action */}
                <div className="direct-item">
                  <div className="direct-icon">
                    <Mail size={18} className="accent-text" />
                  </div>
                  <div className="direct-text">
                    <span className="direct-label">Email Address</span>
                    <span className="direct-val">{personal?.email}</span>
                  </div>
                  <button
                    className="btn btn-secondary btn-sm icon-only no-print"
                    onClick={handleCopyEmail}
                    title="Copy Email Address"
                  >
                    {copied ? <Check size={16} className="accent-text" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* Location Item */}
                <div className="direct-item">
                  <div className="direct-icon">
                    <MapPin size={18} className="accent-text" />
                  </div>
                  <div className="direct-text">
                    <span className="direct-label">Location</span>
                    <span className="direct-val">{personal?.location}</span>
                  </div>
                </div>

                {/* Phone / Availability Item */}
                {personal?.phone && (
                  <div className="direct-item">
                    <div className="direct-icon">
                      <Phone size={18} className="accent-text" />
                    </div>
                    <div className="direct-text">
                      <span className="direct-label">Phone</span>
                      <span className="direct-val">{personal.phone}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Social Channels */}
              <div className="connect-socials no-print">
                <span className="connect-label">Connect via:</span>
                <div className="social-row">
                  {personal?.github && (
                    <a href={personal.github} target="_blank" rel="noreferrer" className="social-link" title="GitHub">
                      <GithubIcon size={18} />
                    </a>
                  )}
                  {personal?.linkedin && (
                    <a href={personal.linkedin} target="_blank" rel="noreferrer" className="social-link" title="LinkedIn">
                      <LinkedinIcon size={18} />
                    </a>
                  )}
                  {personal?.twitter && (
                    <a href={personal.twitter} target="_blank" rel="noreferrer" className="social-link" title="Twitter / X">
                      <TwitterIcon size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="contact-form-col no-print">
            <form onSubmit={handleSubmit} className="contact-form glass-card">
              <h3 className="form-title">Send a Direct Message</h3>

              {submitted ? (
                <div className="success-banner glass-panel animate-fade-in">
                  <div className="success-icon">
                    <Check size={24} />
                  </div>
                  <h4>Message Sent Successfully!</h4>
                  <p>Thank you for reaching out. I'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <>
                  <div className="form-group">
                    <label>Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      className="input-field"
                      value={formValues.name}
                      onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>Your Email</label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="input-field"
                      value={formValues.email}
                      onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>Your Message</label>
                    <textarea
                      rows="4"
                      required
                      placeholder="Hello, I'd like to talk about..."
                      className="input-field"
                      value={formValues.message}
                      onChange={(e) => setFormValues({ ...formValues, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary btn-submit">
                    Send Message <Send size={16} />
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 2.5rem;
          align-items: start;
        }

        .info-card {
          padding: 2rem;
        }

        .info-card-title {
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
        }

        .info-card-desc {
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .direct-links-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-bottom: 2rem;
        }

        .direct-item {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .direct-icon {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-md);
          background: var(--primary-glow);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .direct-text {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .direct-label {
          font-size: 0.75rem;
          color: var(--text-muted);
          text-transform: uppercase;
          font-family: var(--font-mono);
        }

        .direct-val {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-main);
        }

        .connect-socials {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-color);
        }

        .connect-label {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .social-row {
          display: flex;
          gap: 0.5rem;
        }

        /* Form Styling */
        .contact-form {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-title {
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .btn-submit {
          width: 100%;
          padding: 0.85rem;
          margin-top: 0.5rem;
        }

        .success-banner {
          padding: 2rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.3);
          border-radius: var(--radius-md);
        }

        .success-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #10b981;
          color: #000;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
