import React, { useState, useEffect } from 'react';
import { Sun, Moon, Palette, Edit3, Printer, Menu, X, Code2 } from 'lucide-react';

export default function Navbar({ theme, setTheme, accent, setAccent, onOpenEditor, resumeData }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [accentDropdownOpen, setAccentDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const accents = [
    { id: 'cyan', name: 'Cyan Glow', color: '#06b6d4' },
    { id: 'emerald', name: 'Emerald', color: '#10b981' },
    { id: 'violet', name: 'Violet', color: '#8b5cf6' },
    { id: 'amber', name: 'Amber Glow', color: '#f59e0b' }
  ];

  const handlePrint = () => {
    window.print();
  };

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Brand Logo */}
        <a href="#about" className="nav-brand">
          <div className="logo-icon">
            <Code2 size={20} className="accent-text" />
          </div>
          <span className="brand-name">
            {resumeData?.personal?.name?.split(' ')[0] || 'Dev'}
            <span className="accent-text">.dev</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions & Utilities */}
        <div className="nav-actions no-print">
          {/* Accent Color Selector */}
          <div className="accent-picker-wrapper">
            <button
              className="icon-btn"
              title="Change Accent Theme"
              onClick={() => setAccentDropdownOpen(!accentDropdownOpen)}
            >
              <Palette size={18} />
            </button>
            {accentDropdownOpen && (
              <div className="accent-dropdown glass-panel">
                <div className="dropdown-header">Accent Colors</div>
                {accents.map((acc) => (
                  <button
                    key={acc.id}
                    className={`accent-option ${accent === acc.id ? 'active' : ''}`}
                    onClick={() => {
                      setAccent(acc.id);
                      setAccentDropdownOpen(false);
                    }}
                  >
                    <span className="accent-dot" style={{ backgroundColor: acc.color }} />
                    {acc.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Dark / Light Theme Toggle */}
          <button
            className="icon-btn"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Print / Download CV Button */}
          <button
            className="btn btn-secondary btn-sm"
            onClick={handlePrint}
            title="Export CV as PDF or Print"
          >
            <Printer size={16} />
            <span className="hide-mobile">PDF CV</span>
          </button>

          {/* Live Data Editor Trigger */}
          <button
            className="btn btn-primary btn-sm editor-trigger"
            onClick={onOpenEditor}
            title="Edit Resume Information Live"
          >
            <Edit3 size={16} />
            <span className="hide-mobile">Edit Resume</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="icon-btn mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu glass-panel no-print">
          <nav className="mobile-nav-links">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}

      <style>{`
        .navbar-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          padding: 1.1rem 0;
          transition: all 0.3s ease;
        }

        .navbar-header.scrolled {
          padding: 0.75rem 0;
          background: var(--card-bg);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border-color);
          box-shadow: var(--shadow-sm);
        }

        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nav-brand {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          text-decoration: none;
          color: var(--text-main);
          font-weight: 800;
          font-size: 1.2rem;
          letter-spacing: -0.02em;
        }

        .logo-icon {
          width: 34px;
          height: 34px;
          border-radius: var(--radius-sm);
          background: var(--primary-glow);
          border: 1px solid var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-link {
          color: var(--text-muted);
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 500;
          transition: color 0.2s ease;
        }

        .nav-link:hover {
          color: var(--primary);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .icon-btn {
          width: 38px;
          height: 38px;
          border-radius: var(--radius-md);
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          color: var(--text-main);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .icon-btn:hover {
          border-color: var(--primary);
          color: var(--primary);
          transform: translateY(-2px);
        }

        .accent-picker-wrapper {
          position: relative;
        }

        .accent-dropdown {
          position: absolute;
          top: 120%;
          right: 0;
          width: 170px;
          padding: 0.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          z-index: 200;
          box-shadow: var(--shadow-lg);
        }

        .dropdown-header {
          font-size: 0.75rem;
          font-family: var(--font-mono);
          color: var(--text-muted);
          padding: 0.25rem 0.5rem;
          text-transform: uppercase;
        }

        .accent-option {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.4rem 0.6rem;
          border: none;
          background: transparent;
          color: var(--text-main);
          font-size: 0.85rem;
          font-weight: 500;
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .accent-option:hover, .accent-option.active {
          background: rgba(255, 255, 255, 0.08);
          color: var(--primary);
        }

        .accent-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }

        .mobile-toggle {
          display: none;
        }

        .mobile-menu {
          margin-top: 0.5rem;
          padding: 1rem 1.5rem;
        }

        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .mobile-nav-link {
          color: var(--text-main);
          text-decoration: none;
          font-size: 1.1rem;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .desktop-nav {
            display: none;
          }
          .mobile-toggle {
            display: flex;
          }
          .hide-mobile {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}
