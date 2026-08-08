import React, { useState, useEffect } from 'react';
import { Mail, Download, ArrowRight, MapPin, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';
import princeAvatar from '../assets/prince-raj-profile.jpg';

export default function Hero({ personal, stats }) {
  const [typedText, setTypedText] = useState('');
  const roles = [personal?.role || 'Software Engineer', 'Full Stack Architect', 'AI Solutions Builder', 'UI/UX Craftsman'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect for role headline
  useEffect(() => {
    const currentRole = roles[roleIndex % roles.length];
    const updateSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setTypedText(currentRole.substring(0, typedText.length + 1));
        if (typedText === currentRole) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setTypedText(currentRole.substring(0, typedText.length - 1));
        if (typedText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => prev + 1);
        }
      }
    }, updateSpeed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, roleIndex]);

  return (
    <section id="about" className="section hero-section">
      <div className="container hero-grid">
        {/* Left Content Column */}
        <div className="hero-text-content animate-fade-in">
          {/* Status Pill */}
          <div className="status-pill">
            <span className="status-dot"></span>
            <span>{personal?.status || 'Available for New Opportunities'}</span>
          </div>

          {/* Name & Animated Title */}
          <h1 className="hero-name">
            Hi, I'm <span className="gradient-text">{personal?.name || 'Alex Morgan'}</span>
          </h1>

          <div className="hero-role-wrapper">
            <span className="role-typing">{typedText}</span>
            <span className="typing-cursor">|</span>
          </div>

          <div className="location-badge">
            <MapPin size={14} className="accent-text" />
            <span>{personal?.location || 'San Francisco, CA'}</span>
          </div>

          <p className="hero-bio">{personal?.bio}</p>

          {/* Quick Stats Grid */}
          {stats && stats.length > 0 && (
            <div className="hero-stats-grid">
              {stats.map((stat, idx) => (
                <div key={idx} className="stat-card glass-panel">
                  <div className="stat-value gradient-text">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Action CTAs */}
          <div className="hero-actions no-print">
            <a href="#projects" className="btn btn-primary">
              View Work
              <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
            <button className="btn btn-secondary icon-only" onClick={() => window.print()} title="Download CV">
              <Download size={18} />
            </button>
          </div>

          {/* Social Links */}
          <div className="social-links no-print">
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
            {personal?.email && (
              <a href={`mailto:${personal.email}`} className="social-link" title="Email">
                <Mail size={18} />
              </a>
            )}
          </div>
        </div>

        {/* Right Graphic / Avatar Column */}
        <div className="hero-avatar-column">
          <div className="avatar-frame animate-float">
            <div className="glow-backdrop"></div>
            <img
              src={princeAvatar}
              alt={personal?.name || 'Prince Raj'}
              className="avatar-img"
              onError={(e) => {
                e.target.src = princeAvatar;
              }}
            />
            <div className="avatar-badge glass-panel">
              <Sparkles size={16} className="accent-text" />
              <span>Full Stack & AI Architect</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          padding-top: 8.5rem;
          padding-bottom: 5rem;
          min-height: 88vh;
          display: flex;
          align-items: center;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 3.5rem;
          align-items: center;
        }

        .status-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.4rem 1rem;
          border-radius: var(--radius-full);
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.3);
          color: #10b981;
          font-size: 0.825rem;
          font-weight: 600;
          font-family: var(--font-mono);
          margin-bottom: 1.25rem;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 10px #10b981;
          animation: pulseGlow 2s infinite ease-in-out;
        }

        .hero-name {
          font-size: 3.25rem;
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.03em;
          margin-bottom: 0.5rem;
        }

        .hero-role-wrapper {
          font-size: 1.5rem;
          font-family: var(--font-mono);
          color: var(--text-muted);
          font-weight: 600;
          min-height: 2.2rem;
          margin-bottom: 0.75rem;
        }

        .role-typing {
          color: var(--primary);
        }

        .typing-cursor {
          animation: pulseGlow 0.8s infinite;
          color: var(--primary);
          margin-left: 2px;
        }

        .location-badge {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          color: var(--text-muted);
          font-size: 0.9rem;
          margin-bottom: 1.25rem;
        }

        .hero-bio {
          font-size: 1.05rem;
          color: var(--text-muted);
          max-width: 580px;
          line-height: 1.7;
          margin-bottom: 2rem;
        }

        .hero-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.75rem;
          margin-bottom: 2rem;
        }

        .stat-card {
          padding: 0.75rem;
          text-align: center;
        }

        .stat-value {
          font-size: 1.4rem;
          font-weight: 800;
          font-family: var(--font-mono);
        }

        .stat-label {
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-top: 0.2rem;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .social-links {
          display: flex;
          align-items: center;
          gap: 0.85rem;
        }

        .social-link {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-md);
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          color: var(--text-muted);
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .social-link:hover {
          border-color: var(--primary);
          color: var(--primary);
          transform: translateY(-3px);
        }

        /* Avatar styling */
        .hero-avatar-column {
          display: flex;
          justify-content: center;
        }

        .avatar-frame {
          position: relative;
          width: 340px;
          height: 420px;
          max-width: 100%;
        }

        .glow-backdrop {
          position: absolute;
          inset: -12px;
          border-radius: 26px;
          background: linear-gradient(135deg, var(--primary-glow) 0%, rgba(139, 92, 246, 0.35) 100%);
          filter: blur(25px);
          z-index: 1;
        }

        .avatar-img {
          position: relative;
          z-index: 2;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 15%;
          border-radius: 24px;
          border: 2px solid var(--border-hover);
          box-shadow: var(--shadow-lg), 0 0 25px var(--primary-glow);
          transition: transform 0.3s ease;
        }

        .avatar-frame:hover .avatar-img {
          transform: scale(1.02);
        }

        .avatar-badge {
          position: absolute;
          bottom: -15px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 3;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.2rem;
          white-space: nowrap;
          font-size: 0.85rem;
          font-weight: 600;
          box-shadow: var(--shadow-sm);
        }

        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-bio {
            margin-left: auto;
            margin-right: auto;
          }
          .location-badge {
            justify-content: center;
          }
          .hero-actions {
            justify-content: center;
          }
          .social-links {
            justify-content: center;
          }
          .hero-stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .hero-avatar-column {
            order: -1;
            margin-bottom: 2rem;
          }
          .avatar-frame {
            width: 280px;
            height: 350px;
          }
        }
      `}</style>
    </section>
  );
}
