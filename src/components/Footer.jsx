import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';

export default function Footer({ name }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer section-footer">
      <div className="container footer-container">
        <div className="footer-left">
          <p className="copyright">
            © {new Date().getFullYear()} <span className="accent-text">{name || 'Alex Morgan'}</span>. All rights reserved.
          </p>
          <p className="footer-tagline">
            Built with React, Vite & Modern CSS Glassmorphism.
          </p>
        </div>

        <div className="footer-right no-print">
          <button className="icon-btn back-to-top" onClick={scrollToTop} title="Back to Top">
            <ArrowUp size={18} />
          </button>
        </div>
      </div>

      <style>{`
        .section-footer {
          padding: 2.5rem 0;
          border-top: 1px solid var(--border-color);
          background: var(--bg-secondary);
        }

        .footer-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .copyright {
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--text-main);
        }

        .footer-tagline {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-top: 0.2rem;
        }

        .back-to-top {
          border-radius: 50%;
        }
      `}</style>
    </footer>
  );
}
