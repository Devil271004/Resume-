import React, { useState, useEffect } from 'react';
import { initialResumeData } from './data/initialData';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExperienceTimeline from './components/ExperienceTimeline';
import ProjectsShowcase from './components/ProjectsShowcase';
import SkillsMatrix from './components/SkillsMatrix';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import DataEditorModal from './components/DataEditorModal';

export default function App() {
  // Theme state: dark / light
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio_theme') || 'dark';
  });

  // Accent color state: cyan / emerald / violet / amber
  const [accent, setAccent] = useState(() => {
    return localStorage.getItem('portfolio_accent') || 'cyan';
  });

  // Resume dataset state (persisted to localStorage)
  const [resumeData, setResumeData] = useState(() => {
    const saved = localStorage.getItem('portfolio_resume_data_prince_v4');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed?.personal?.avatar?.includes('unsplash')) {
          parsed.personal.avatar = initialResumeData.personal.avatar;
        }
        return parsed;
      } catch (e) {
        console.error('Failed to parse saved resume data', e);
      }
    }
    return initialResumeData;
  });

  // Live Data Editor Modal state
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  // Sync theme & accent with HTML attributes and localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio_theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('data-accent', accent);
    localStorage.setItem('portfolio_accent', accent);
  }, [accent]);

  // Save modified resume data to localStorage
  const handleSaveData = (newData) => {
    setResumeData(newData);
    localStorage.setItem('portfolio_resume_data_prince_v4', JSON.stringify(newData));
  };

  // Reset resume data back to default initial values
  const handleResetData = () => {
    if (window.confirm('Reset all resume data to default values?')) {
      setResumeData(initialResumeData);
      localStorage.removeItem('portfolio_resume_data_prince_v4');
      setIsEditorOpen(false);
    }
  };

  return (
    <div className="app-root">
      <Navbar
        theme={theme}
        setTheme={setTheme}
        accent={accent}
        setAccent={setAccent}
        onOpenEditor={() => setIsEditorOpen(true)}
        resumeData={resumeData}
      />

      <main>
        <Hero personal={resumeData.personal} stats={resumeData.stats} />

        <ExperienceTimeline
          experience={resumeData.experience}
          education={resumeData.education}
          certifications={resumeData.certifications}
        />

        <ProjectsShowcase projects={resumeData.projects} />

        <SkillsMatrix skills={resumeData.skills} />

        <ContactSection personal={resumeData.personal} />
      </main>

      <Footer name={resumeData.personal?.name} />

      <DataEditorModal
        isOpen={isEditorOpen}
        onClose={() => setIsEditorOpen(false)}
        resumeData={resumeData}
        onSave={handleSaveData}
        onReset={handleResetData}
      />
    </div>
  );
}
