import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Search, Star, X, Layers, Code } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectsShowcase({ projects }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProject, setActiveModalProject] = useState(null);

  // Extract unique categories
  const categories = ['All', ...new Set(projects?.map((p) => p.category) || [])];

  // Filter projects based on category and search query
  const filteredProjects = projects?.filter((proj) => {
    const matchesCategory = selectedCategory === 'All' || proj.category === selectedCategory;
    const matchesSearch =
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.tags?.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrapper">
          <span className="section-tag">
            <FolderGit2 size={14} /> Showcase
          </span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            A selection of web platforms, enterprise software tools, and open-source packages I've designed and engineered.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="projects-controls no-print">
          {/* Categories */}
          <div className="category-pills">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`cat-pill ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="search-box">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              placeholder="Search projects or tech tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-field search-input"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects?.map((proj) => (
            <div key={proj.id} className="project-card glass-card">
              {/* Image Preview Container */}
              <div className="card-image-wrapper">
                <img src={proj.image} alt={proj.title} className="proj-image" />
                <div className="image-overlay">
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => setActiveModalProject(proj)}
                  >
                    View Details
                  </button>
                </div>
                {proj.featured && (
                  <div className="featured-badge">
                    <Star size={12} /> Featured
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="card-body">
                <div className="card-top">
                  <span className="badge badge-primary">{proj.category}</span>
                </div>
                <h3 className="proj-title">{proj.title}</h3>
                <p className="proj-short-desc">{proj.shortDesc}</p>

                {/* Tech Tags */}
                <div className="tech-tags">
                  {proj.tags?.map((tag, idx) => (
                    <span key={idx} className="badge">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* External Action Links */}
                <div className="proj-actions no-print">
                  {proj.demo && (
                    <a
                      href={proj.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-secondary btn-sm"
                    >
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  )}
                  {proj.github && (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-secondary btn-sm icon-only"
                      title="GitHub Repository"
                    >
                      <GithubIcon size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects?.length === 0 && (
          <div className="empty-state glass-panel">
            <p>No projects match your search criteria.</p>
            <button
              className="btn btn-secondary btn-sm"
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Project Case Study Details Modal */}
      {activeModalProject && (
        <div className="modal-backdrop" onClick={() => setActiveModalProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title-group">
                <span className="badge badge-primary">{activeModalProject.category}</span>
                <h3 className="modal-title">{activeModalProject.title}</h3>
              </div>
              <button
                className="icon-btn"
                onClick={() => setActiveModalProject(null)}
              >
                <X size={20} />
              </button>
            </div>

            <div className="modal-body">
              <img
                src={activeModalProject.image}
                alt={activeModalProject.title}
                className="modal-cover-img"
              />
              <h4 className="modal-subheading">Overview</h4>
              <p className="modal-desc">{activeModalProject.fullDesc || activeModalProject.shortDesc}</p>

              <h4 className="modal-subheading">Technologies & Stack</h4>
              <div className="tech-tags mb-4">
                {activeModalProject.tags?.map((t, idx) => (
                  <span key={idx} className="badge badge-primary">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="modal-footer">
              {activeModalProject.github && (
                <a
                  href={activeModalProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                >
                  <GithubIcon size={16} /> View Code
                </a>
              )}
              {activeModalProject.demo && (
                <a
                  href={activeModalProject.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  <ExternalLink size={16} /> Open Live App
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      <style>{`
        .projects-controls {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
        }

        .category-pills {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .cat-pill {
          padding: 0.45rem 1rem;
          border-radius: var(--radius-full);
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          color: var(--text-muted);
          font-size: 0.85rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .cat-pill:hover, .cat-pill.active {
          background: var(--primary-glow);
          border-color: var(--primary);
          color: var(--primary);
        }

        .search-box {
          position: relative;
          min-width: 260px;
        }

        .search-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
        }

        .search-input {
          padding-left: 2.5rem !important;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.75rem;
        }

        .project-card {
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .card-image-wrapper {
          position: relative;
          width: 100%;
          height: 200px;
          overflow: hidden;
        }

        .proj-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .project-card:hover .proj-image {
          transform: scale(1.05);
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .card-image-wrapper:hover .image-overlay {
          opacity: 1;
        }

        .featured-badge {
          position: absolute;
          top: 0.75rem;
          right: 0.75rem;
          display: flex;
          align-items: center;
          gap: 0.3rem;
          padding: 0.25rem 0.6rem;
          border-radius: var(--radius-full);
          background: rgba(0, 0, 0, 0.75);
          border: 1px solid rgba(245, 158, 11, 0.5);
          color: #f59e0b;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .card-body {
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .card-top {
          margin-bottom: 0.5rem;
        }

        .proj-title {
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: var(--text-main);
        }

        .proj-short-desc {
          color: var(--text-muted);
          font-size: 0.9rem;
          line-height: 1.5;
          margin-bottom: 1rem;
          flex-grow: 1;
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-bottom: 1.25rem;
        }

        .proj-actions {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .modal-title-group {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .modal-title {
          font-size: 1.35rem;
          font-weight: 800;
        }

        .modal-cover-img {
          width: 100%;
          max-height: 280px;
          object-fit: cover;
          border-radius: var(--radius-md);
          margin-bottom: 1.25rem;
        }

        .modal-subheading {
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: var(--primary);
        }

        .modal-desc {
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 1.25rem;
        }

        .empty-state {
          padding: 3rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        @media (max-width: 768px) {
          .projects-controls {
            flex-direction: column;
            align-items: stretch;
          }
          .search-box {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
