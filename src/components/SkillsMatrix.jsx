import React from 'react';
import { Cpu, Terminal, Database, Code2, Sparkles } from 'lucide-react';

export default function SkillsMatrix({ skills }) {
  const getCategoryIcon = (category) => {
    if (category.toLowerCase().includes('frontend')) return <Code2 size={20} className="accent-text" />;
    if (category.toLowerCase().includes('backend')) return <Database size={20} className="accent-text" />;
    if (category.toLowerCase().includes('ai')) return <Sparkles size={20} className="accent-text" />;
    return <Terminal size={20} className="accent-text" />;
  };

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrapper">
          <span className="section-tag">
            <Cpu size={14} /> Expertise
          </span>
          <h2 className="section-title">
            Technical <span className="gradient-text">Skills & Proficiency</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive breakdown of programming languages, frameworks, cloud tooling, and domain knowledge.
          </p>
        </div>

        {/* Skills Category Grid */}
        <div className="skills-grid">
          {skills?.map((cat, idx) => (
            <div key={idx} className="skill-card glass-card">
              <div className="skill-card-header">
                <div className="cat-icon-wrapper">{getCategoryIcon(cat.category)}</div>
                <h3 className="cat-title">{cat.category}</h3>
              </div>

              <div className="skills-list">
                {cat.items?.map((item, iIdx) => (
                  <div key={iIdx} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{item.name}</span>
                      <span className="skill-level">{item.level}%</span>
                    </div>
                    <div className="progress-bar-track">
                      <div
                        className="progress-bar-fill"
                        style={{ width: `${item.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.75rem;
        }

        .skill-card {
          padding: 1.5rem;
        }

        .skill-card-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--border-color);
        }

        .cat-icon-wrapper {
          width: 36px;
          height: 36px;
          border-radius: var(--radius-sm);
          background: var(--primary-glow);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cat-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-main);
        }

        .skills-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .skill-item {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .skill-info {
          display: flex;
          justify-content: space-between;
          font-size: 0.95rem;
        }

        .skill-name {
          font-weight: 600;
          color: var(--text-main);
        }

        .skill-level {
          color: var(--text-muted);
          font-family: var(--font-mono);
          font-size: 0.85rem;
        }

        .progress-bar-track {
          width: 100%;
          height: 7px;
          background: rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-full);
          overflow: hidden;
        }

        [data-theme="light"] .progress-bar-track {
          background: rgba(0, 0, 0, 0.08);
        }

        .progress-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
          border-radius: var(--radius-full);
          transition: width 1s ease-out;
        }
      `}</style>
    </section>
  );
}
