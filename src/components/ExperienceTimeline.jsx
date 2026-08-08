import React, { useState } from 'react';
import { Briefcase, GraduationCap, Award, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function ExperienceTimeline({ experience, education, certifications }) {
  const [filter, setFilter] = useState('all'); // 'all' | 'work' | 'education' | 'certifications'

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrapper">
          <span className="section-tag">
            <Briefcase size={14} /> Background
          </span>
          <h2 className="section-title">
            Work Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subtitle">
            A timeline of key software engineering roles, impactful achievements, and academic credentials.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="filter-tabs no-print">
          <button
            className={`tab-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Background
          </button>
          <button
            className={`tab-btn ${filter === 'work' ? 'active' : ''}`}
            onClick={() => setFilter('work')}
          >
            Work History ({experience?.length || 0})
          </button>
          <button
            className={`tab-btn ${filter === 'education' ? 'active' : ''}`}
            onClick={() => setFilter('education')}
          >
            Education ({education?.length || 0})
          </button>
          <button
            className={`tab-btn ${filter === 'certifications' ? 'active' : ''}`}
            onClick={() => setFilter('certifications')}
          >
            Certifications ({certifications?.length || 0})
          </button>
        </div>

        {/* Timeline Container */}
        <div className="timeline-wrapper">
          <div className="timeline-line"></div>

          {/* Work Experience Items */}
          {(filter === 'all' || filter === 'work') &&
            experience?.map((exp) => (
              <div key={exp.id} className="timeline-item">
                <div className="timeline-icon work-icon">
                  <Briefcase size={18} />
                </div>
                <div className="timeline-content glass-card">
                  <div className="card-header">
                    <div>
                      <h3 className="role-title">{exp.role}</h3>
                      <div className="company-info">
                        <span className="company-name accent-text">{exp.company}</span>
                        <span className="info-dot">•</span>
                        <span className="company-loc">
                          <MapPin size={12} /> {exp.location}
                        </span>
                      </div>
                    </div>
                    <div className="period-badge">
                      <Calendar size={13} />
                      {exp.period}
                    </div>
                  </div>

                  <p className="exp-desc">{exp.description}</p>

                  {/* Highlights Bullet List */}
                  {exp.highlights && exp.highlights.length > 0 && (
                    <ul className="highlights-list">
                      {exp.highlights.map((item, idx) => (
                        <li key={idx} className="highlight-item">
                          <CheckCircle2 size={15} className="check-icon accent-text" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Technologies Badges */}
                  {exp.technologies && (
                    <div className="tech-stack-row">
                      {exp.technologies.map((tech, idx) => (
                        <span key={idx} className="badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

          {/* Education Items */}
          {(filter === 'all' || filter === 'education') &&
            education?.map((edu) => (
              <div key={edu.id} className="timeline-item">
                <div className="timeline-icon edu-icon">
                  <GraduationCap size={18} />
                </div>
                <div className="timeline-content glass-card">
                  <div className="card-header">
                    <div>
                      <h3 className="role-title">{edu.degree}</h3>
                      <div className="company-info">
                        <span className="company-name accent-text">{edu.institution}</span>
                      </div>
                    </div>
                    <div className="period-badge">
                      <Calendar size={13} />
                      {edu.period}
                    </div>
                  </div>
                  <p className="exp-desc">{edu.details}</p>
                </div>
              </div>
            ))}

          {/* Certification Items */}
          {(filter === 'all' || filter === 'certifications') &&
            certifications?.map((cert) => (
              <div key={cert.id} className="timeline-item">
                <div className="timeline-icon cert-icon">
                  <Award size={18} />
                </div>
                <div className="timeline-content glass-card">
                  <div className="card-header">
                    <div>
                      <h3 className="role-title">{cert.title}</h3>
                      <div className="company-info">
                        <span className="company-name accent-text">{cert.issuer}</span>
                      </div>
                    </div>
                    <div className="period-badge">
                      <Calendar size={13} />
                      Issued {cert.date}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      <style>{`
        .filter-tabs {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .tab-btn {
          padding: 0.5rem 1.25rem;
          border-radius: var(--radius-full);
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          color: var(--text-muted);
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .tab-btn:hover, .tab-btn.active {
          background: var(--primary-glow);
          border-color: var(--primary);
          color: var(--primary);
        }

        .timeline-wrapper {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
          padding-left: 2rem;
        }

        .timeline-line {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 15px;
          width: 2px;
          background: linear-gradient(180deg, var(--primary) 0%, var(--secondary) 100%);
          opacity: 0.4;
        }

        .timeline-item {
          position: relative;
          margin-bottom: 2rem;
        }

        .timeline-icon {
          position: absolute;
          left: -2rem;
          top: 1.25rem;
          transform: translateX(-50%);
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          border: 2px solid var(--bg-color);
        }

        .work-icon {
          background: var(--primary);
          color: #000;
          box-shadow: 0 0 12px var(--primary-glow);
        }

        .edu-icon {
          background: var(--secondary);
          color: #fff;
          box-shadow: 0 0 12px rgba(139, 92, 246, 0.4);
        }

        .cert-icon {
          background: var(--accent);
          color: #fff;
        }

        .timeline-content {
          padding: 1.5rem;
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 0.75rem;
        }

        .role-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--text-main);
        }

        .company-info {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          margin-top: 0.2rem;
        }

        .company-name {
          font-weight: 600;
        }

        .company-loc {
          color: var(--text-muted);
          display: flex;
          align-items: center;
          gap: 0.2rem;
        }

        .info-dot {
          color: var(--text-subtle);
        }

        .period-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.3rem 0.7rem;
          border-radius: var(--radius-full);
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-color);
          color: var(--text-muted);
          font-size: 0.8rem;
          font-family: var(--font-mono);
          white-space: nowrap;
        }

        .exp-desc {
          color: var(--text-muted);
          font-size: 0.95rem;
          margin-bottom: 1rem;
        }

        .highlights-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1.25rem;
        }

        .highlight-item {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-size: 0.9rem;
          color: var(--text-main);
        }

        .check-icon {
          flex-shrink: 0;
          margin-top: 0.2rem;
        }

        .tech-stack-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        @media (max-width: 600px) {
          .card-header {
            flex-direction: column;
            gap: 0.5rem;
          }
          .timeline-wrapper {
            padding-left: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
