import React, { useState } from 'react';
import { X, Save, RotateCcw, Download, Upload, Plus, Trash2, Edit3, User, Briefcase, FolderGit2, Cpu, Code } from 'lucide-react';

export default function DataEditorModal({ isOpen, onClose, resumeData, onSave, onReset }) {
  const [activeTab, setActiveTab] = useState('personal');
  const [formData, setFormData] = useState(JSON.parse(JSON.stringify(resumeData)));
  const [jsonInput, setJsonInput] = useState('');

  if (!isOpen) return null;

  const handlePersonalChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      personal: {
        ...prev.personal,
        [field]: value
      }
    }));
  };

  const handleExperienceChange = (index, field, value) => {
    const updated = [...formData.experience];
    updated[index] = { ...updated[index], [field]: value };
    setFormData((prev) => ({ ...prev, experience: updated }));
  };

  const handleAddExperience = () => {
    const newExp = {
      id: `exp-${Date.now()}`,
      role: 'Software Engineer',
      company: 'Company Name',
      location: 'City, Country',
      period: '2024 - Present',
      description: 'Describe your responsibilities and impact.',
      highlights: ['Key achievement or impact bullet point'],
      technologies: ['React', 'Node.js']
    };
    setFormData((prev) => ({ ...prev, experience: [newExp, ...prev.experience] }));
  };

  const handleRemoveExperience = (index) => {
    setFormData((prev) => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index)
    }));
  };

  const handleProjectChange = (index, field, value) => {
    const updated = [...formData.projects];
    updated[index] = { ...updated[index], [field]: value };
    setFormData((prev) => ({ ...prev, projects: updated }));
  };

  const handleAddProject = () => {
    const newProj = {
      id: `proj-${Date.now()}`,
      title: 'New Project Name',
      category: 'Full Stack',
      shortDesc: 'Short project summary.',
      fullDesc: 'Detailed description of the project feature set and architecture.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      tags: ['React', 'TypeScript'],
      github: 'https://github.com',
      demo: 'https://example.com',
      featured: true
    };
    setFormData((prev) => ({ ...prev, projects: [newProj, ...prev.projects] }));
  };

  const handleRemoveProject = (index) => {
    setFormData((prev) => ({
      ...prev,
      projects: prev.projects.filter((_, i) => i !== index)
    }));
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  const handleExportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(formData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "resume_data.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleImportJSON = () => {
    try {
      const parsed = JSON.parse(jsonInput);
      setFormData(parsed);
      alert('JSON data successfully imported!');
    } catch (err) {
      alert('Invalid JSON format. Please check your syntax.');
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content editor-modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div className="editor-modal-title">
            <Edit3 size={20} className="accent-text" />
            <h3>Live Resume Editor</h3>
          </div>
          <button className="icon-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="editor-tabs">
          <button
            className={`editor-tab ${activeTab === 'personal' ? 'active' : ''}`}
            onClick={() => setActiveTab('personal')}
          >
            <User size={16} /> Personal Info
          </button>
          <button
            className={`editor-tab ${activeTab === 'experience' ? 'active' : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            <Briefcase size={16} /> Work History
          </button>
          <button
            className={`editor-tab ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            <FolderGit2 size={16} /> Projects
          </button>
          <button
            className={`editor-tab ${activeTab === 'json' ? 'active' : ''}`}
            onClick={() => setActiveTab('json')}
          >
            <Code size={16} /> JSON Import/Export
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body editor-body">
          {/* TAB 1: Personal Info */}
          {activeTab === 'personal' && (
            <div className="editor-form-grid">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  className="input-field"
                  value={formData.personal.name || ''}
                  onChange={(e) => handlePersonalChange('name', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Job Role / Title</label>
                <input
                  type="text"
                  className="input-field"
                  value={formData.personal.role || ''}
                  onChange={(e) => handlePersonalChange('role', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Location</label>
                <input
                  type="text"
                  className="input-field"
                  value={formData.personal.location || ''}
                  onChange={(e) => handlePersonalChange('location', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Status Pill Text</label>
                <input
                  type="text"
                  className="input-field"
                  value={formData.personal.status || ''}
                  onChange={(e) => handlePersonalChange('status', e.target.value)}
                />
              </div>
              <div className="form-group full-width">
                <label>Bio Summary</label>
                <textarea
                  rows="3"
                  className="input-field"
                  value={formData.personal.bio || ''}
                  onChange={(e) => handlePersonalChange('bio', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  className="input-field"
                  value={formData.personal.email || ''}
                  onChange={(e) => handlePersonalChange('email', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>GitHub URL</label>
                <input
                  type="text"
                  className="input-field"
                  value={formData.personal.github || ''}
                  onChange={(e) => handlePersonalChange('github', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>LinkedIn URL</label>
                <input
                  type="text"
                  className="input-field"
                  value={formData.personal.linkedin || ''}
                  onChange={(e) => handlePersonalChange('linkedin', e.target.value)}
                />
              </div>
            </div>
          )}

          {/* TAB 2: Experience */}
          {activeTab === 'experience' && (
            <div className="editor-items-wrapper">
              <div className="add-item-bar">
                <button className="btn btn-secondary btn-sm" onClick={handleAddExperience}>
                  <Plus size={16} /> Add Work Role
                </button>
              </div>

              {formData.experience.map((exp, idx) => (
                <div key={exp.id || idx} className="editor-card glass-panel">
                  <div className="card-top-bar">
                    <span className="badge badge-primary">Role #{idx + 1}</span>
                    <button
                      className="icon-btn btn-danger"
                      onClick={() => handleRemoveExperience(idx)}
                      title="Remove Role"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                  <div className="editor-form-grid">
                    <div className="form-group">
                      <label>Job Title</label>
                      <input
                        type="text"
                        className="input-field"
                        value={exp.role || ''}
                        onChange={(e) => handleExperienceChange(idx, 'role', e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>Company</label>
                      <input
                        type="text"
                        className="input-field"
                        value={exp.company || ''}
                        onChange={(e) => handleExperienceChange(idx, 'company', e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>Period (e.g. 2022 - Present)</label>
                      <input
                        type="text"
                        className="input-field"
                        value={exp.period || ''}
                        onChange={(e) => handleExperienceChange(idx, 'period', e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>Location</label>
                      <input
                        type="text"
                        className="input-field"
                        value={exp.location || ''}
                        onChange={(e) => handleExperienceChange(idx, 'location', e.target.value)}
                      />
                    </div>
                    <div className="form-group full-width">
                      <label>Description</label>
                      <textarea
                        rows="2"
                        className="input-field"
                        value={exp.description || ''}
                        onChange={(e) => handleExperienceChange(idx, 'description', e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: Projects */}
          {activeTab === 'projects' && (
            <div className="editor-items-wrapper">
              <div className="add-item-bar">
                <button className="btn btn-secondary btn-sm" onClick={handleAddProject}>
                  <Plus size={16} /> Add Project
                </button>
              </div>

              {formData.projects.map((proj, idx) => (
                <div key={proj.id || idx} className="editor-card glass-panel">
                  <div className="card-top-bar">
                    <span className="badge badge-primary">Project #{idx + 1}</span>
                    <button
                      className="icon-btn btn-danger"
                      onClick={() => handleRemoveProject(idx)}
                      title="Remove Project"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                  <div className="editor-form-grid">
                    <div className="form-group">
                      <label>Project Title</label>
                      <input
                        type="text"
                        className="input-field"
                        value={proj.title || ''}
                        onChange={(e) => handleProjectChange(idx, 'title', e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>Category</label>
                      <input
                        type="text"
                        className="input-field"
                        value={proj.category || ''}
                        onChange={(e) => handleProjectChange(idx, 'category', e.target.value)}
                      />
                    </div>
                    <div className="form-group full-width">
                      <label>Short Summary</label>
                      <input
                        type="text"
                        className="input-field"
                        value={proj.shortDesc || ''}
                        onChange={(e) => handleProjectChange(idx, 'shortDesc', e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>Demo URL</label>
                      <input
                        type="text"
                        className="input-field"
                        value={proj.demo || ''}
                        onChange={(e) => handleProjectChange(idx, 'demo', e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>GitHub URL</label>
                      <input
                        type="text"
                        className="input-field"
                        value={proj.github || ''}
                        onChange={(e) => handleProjectChange(idx, 'github', e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 4: JSON Import/Export */}
          {activeTab === 'json' && (
            <div className="json-editor-view">
              <div className="json-actions-bar">
                <button className="btn btn-secondary btn-sm" onClick={handleExportJSON}>
                  <Download size={16} /> Export Current Data as JSON
                </button>
              </div>

              <div className="form-group">
                <label>Paste Custom JSON Resume Payload Below:</label>
                <textarea
                  rows="12"
                  className="input-field font-mono"
                  placeholder="Paste your JSON here..."
                  value={jsonInput}
                  onChange={(e) => setJsonInput(e.target.value)}
                />
              </div>
              <button className="btn btn-primary btn-sm" onClick={handleImportJSON}>
                <Upload size={16} /> Apply Imported JSON
              </button>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <button className="btn btn-secondary btn-sm" onClick={onReset}>
            <RotateCcw size={16} /> Reset Defaults
          </button>
          <button className="btn btn-primary" onClick={handleSave}>
            <Save size={18} /> Save & Apply
          </button>
        </div>
      </div>

      <style>{`
        .editor-modal-content {
          max-width: 900px;
        }

        .editor-modal-title {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.2rem;
          font-weight: 700;
        }

        .editor-tabs {
          display: flex;
          background: var(--bg-secondary);
          border-bottom: 1px solid var(--border-color);
          overflow-x: auto;
        }

        .editor-tab {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.85rem 1.25rem;
          background: transparent;
          border: none;
          color: var(--text-muted);
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          border-bottom: 2px solid transparent;
          white-space: nowrap;
        }

        .editor-tab:hover, .editor-tab.active {
          color: var(--primary);
          border-bottom-color: var(--primary);
          background: rgba(255, 255, 255, 0.03);
        }

        .editor-body {
          padding: 1.5rem;
        }

        .editor-form-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .form-group.full-width {
          grid-column: span 2;
        }

        .form-group label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-muted);
        }

        .editor-items-wrapper {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .add-item-bar {
          display: flex;
          justify-content: flex-end;
        }

        .editor-card {
          padding: 1.25rem;
        }

        .card-top-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .btn-danger {
          color: #ef4444 !important;
          border-color: rgba(239, 68, 68, 0.3) !important;
        }

        .btn-danger:hover {
          background: rgba(239, 68, 68, 0.1) !important;
        }

        .json-editor-view {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .font-mono {
          font-family: var(--font-mono) !important;
          font-size: 0.85rem !important;
        }

        @media (max-width: 600px) {
          .editor-form-grid {
            grid-template-columns: 1fr;
          }
          .form-group.full-width {
            grid-column: span 1;
          }
        }
      `}</style>
    </div>
  );
}
