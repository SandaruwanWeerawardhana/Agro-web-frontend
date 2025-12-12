import { Link } from 'react-router-dom';
import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' },
  ];

  const services = [
    'Disease Detection',
    'Crop Analysis',
    'Market Access',
    'Weather Forecasting',
    'Supply Management',
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <Leaf className="footer-logo-icon" />
              <span>AGRO</span>
            </Link>
            <p className="footer-description">
              Empowering farmers with AI-driven insights for sustainable agriculture
              and better yields.
            </p>
            <div className="footer-social">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="footer-social-link"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-column">
            <h4 className="footer-heading">Our Services</h4>
            <ul className="footer-links">
              {services.map((service) => (
                <li key={service}>
                  <span className="footer-link">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-column">
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="footer-contact">
              <li>
                <MapPin size={18} />
                <span>123 Agriculture Road, Colombo, Sri Lanka</span>
              </li>
              <li>
                <Phone size={18} />
                <span>+94 11 234 5678</span>
              </li>
              <li>
                <Mail size={18} />
                <span>info@agro.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} AGRO. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>

      <style>{`
        .footer {
          background: var(--gray-900);
          color: var(--gray-300);
          padding: var(--space-16) 0 var(--space-8);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-8);
          margin-bottom: var(--space-12);
        }

        @media (min-width: 640px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .footer-grid {
            grid-template-columns: 2fr 1fr 1fr 1.5fr;
          }
        }

        .footer-brand {
          max-width: 300px;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          font-size: var(--font-size-2xl);
          font-weight: 800;
          color: white;
          margin-bottom: var(--space-4);
        }

        .footer-logo-icon {
          width: 32px;
          height: 32px;
          color: var(--primary-400);
        }

        .footer-description {
          font-size: var(--font-size-sm);
          line-height: 1.7;
          margin-bottom: var(--space-6);
        }

        .footer-social {
          display: flex;
          gap: var(--space-3);
        }

        .footer-social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: var(--gray-800);
          border-radius: var(--radius-full);
          color: var(--gray-400);
          transition: all var(--transition-base);
        }

        .footer-social-link:hover {
          background: var(--primary-600);
          color: white;
          transform: translateY(-2px);
        }

        .footer-column {
          display: flex;
          flex-direction: column;
        }

        .footer-heading {
          font-size: var(--font-size-lg);
          font-weight: 600;
          color: white;
          margin-bottom: var(--space-4);
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
        }

        .footer-link {
          font-size: var(--font-size-sm);
          color: var(--gray-400);
          transition: color var(--transition-base);
          cursor: pointer;
        }

        .footer-link:hover {
          color: var(--primary-400);
        }

        .footer-contact {
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }

        .footer-contact li {
          display: flex;
          align-items: flex-start;
          gap: var(--space-3);
          font-size: var(--font-size-sm);
          color: var(--gray-400);
        }

        .footer-contact li svg {
          flex-shrink: 0;
          color: var(--primary-400);
          margin-top: 2px;
        }

        .footer-bottom {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-4);
          padding-top: var(--space-8);
          border-top: 1px solid var(--gray-800);
          font-size: var(--font-size-sm);
        }

        @media (min-width: 768px) {
          .footer-bottom {
            flex-direction: row;
            justify-content: space-between;
          }
        }

        .footer-bottom-links {
          display: flex;
          gap: var(--space-6);
        }

        .footer-bottom-links a {
          color: var(--gray-400);
          transition: color var(--transition-base);
        }

        .footer-bottom-links a:hover {
          color: var(--primary-400);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
