import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X, Leaf, User, LogIn } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="navbar-brand">
            <Leaf className="navbar-logo-icon" />
            <span className="navbar-logo-text">AGRO</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="navbar-links">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`navbar-link ${isActive(link.path) ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="navbar-actions">
            <Link to="/login" className="btn btn-ghost">
              <LogIn size={18} />
              Login
            </Link>
            <Link to="/register" className="btn btn-primary">
              <User size={18} />
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="navbar-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="navbar-mobile">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`navbar-mobile-link ${isActive(link.path) ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="navbar-mobile-actions">
              <Link
                to="/login"
                className="btn btn-outline w-full"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="btn btn-primary w-full"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: var(--z-fixed);
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--gray-100);
        }

        .navbar-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 72px;
        }

        .navbar-brand {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          font-size: var(--font-size-xl);
          font-weight: 800;
          color: var(--primary-600);
        }

        .navbar-logo-icon {
          width: 32px;
          height: 32px;
        }

        .navbar-links {
          display: none;
          align-items: center;
          gap: var(--space-8);
        }

        @media (min-width: 768px) {
          .navbar-links {
            display: flex;
          }
        }

        .navbar-link {
          font-weight: 500;
          color: var(--gray-600);
          transition: color var(--transition-base);
          position: relative;
        }

        .navbar-link:hover,
        .navbar-link.active {
          color: var(--primary-600);
        }

        .navbar-link.active::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--primary-500);
          border-radius: var(--radius-full);
        }

        .navbar-actions {
          display: none;
          align-items: center;
          gap: var(--space-3);
        }

        @media (min-width: 768px) {
          .navbar-actions {
            display: flex;
          }
        }

        .navbar-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: var(--space-2);
          color: var(--gray-600);
        }

        @media (min-width: 768px) {
          .navbar-toggle {
            display: none;
          }
        }

        .navbar-mobile {
          display: flex;
          flex-direction: column;
          padding: var(--space-4) 0;
          border-top: 1px solid var(--gray-100);
        }

        @media (min-width: 768px) {
          .navbar-mobile {
            display: none;
          }
        }

        .navbar-mobile-link {
          padding: var(--space-3) 0;
          font-weight: 500;
          color: var(--gray-600);
          transition: color var(--transition-base);
        }

        .navbar-mobile-link:hover,
        .navbar-mobile-link.active {
          color: var(--primary-600);
        }

        .navbar-mobile-actions {
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
          margin-top: var(--space-4);
          padding-top: var(--space-4);
          border-top: 1px solid var(--gray-100);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
