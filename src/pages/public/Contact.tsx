import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    { icon: MapPin, title: 'Address', content: '123 Agriculture Road, Colombo 07, Sri Lanka' },
    { icon: Phone, title: 'Phone', content: '+94 11 234 5678' },
    { icon: Mail, title: 'Email', content: 'info@agro.com' },
    { icon: Clock, title: 'Hours', content: 'Mon - Fri: 8:00 AM - 6:00 PM' },
  ];

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <span className="section-badge">Contact Us</span>
          <h1>Get in Touch</h1>
          <p>Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-wrapper">
              <h2>Send us a Message</h2>
              {submitted ? (
                <div className="success-message">
                  <MessageSquare size={48} />
                  <h3>Thank you!</h3>
                  <p>Your message has been sent. We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Name</label>
                      <input type="text" className="form-input" placeholder="Your name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email</label>
                      <input type="email" className="form-input" placeholder="your@email.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Subject</label>
                    <input type="text" className="form-input" placeholder="How can we help?" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Message</label>
                    <textarea className="form-input form-textarea" placeholder="Your message..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required />
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg w-full">
                    <Send size={20} /> Send Message
                  </button>
                </form>
              )}
            </div>

            <div className="contact-info">
              <h2>Contact Information</h2>
              <p>Reach out to us through any of these channels.</p>
              <div className="info-cards">
                {contactInfo.map((info, i) => (
                  <div key={i} className="info-card">
                    <div className="info-icon"><info.icon size={24} /></div>
                    <div>
                      <h4>{info.title}</h4>
                      <p>{info.content}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="map-placeholder">
                <MapPin size={48} />
                <p>Map Integration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .contact-hero { background: linear-gradient(135deg, #f0fdf4 0%, #ecfeff 100%); padding: var(--space-20) 0; text-align: center; }
        .contact-hero h1 { font-size: var(--font-size-4xl); margin-bottom: var(--space-6); }
        .contact-hero p { font-size: var(--font-size-xl); color: var(--gray-600); max-width: 500px; margin: 0 auto; }
        .contact-grid { display: grid; grid-template-columns: 1fr; gap: var(--space-12); }
        @media (min-width: 1024px) { .contact-grid { grid-template-columns: 1fr 1fr; } }
        .contact-form-wrapper { background: white; padding: var(--space-8); border-radius: var(--radius-xl); box-shadow: var(--shadow-lg); }
        .contact-form-wrapper h2 { font-size: var(--font-size-2xl); margin-bottom: var(--space-6); }
        .form-row { display: grid; grid-template-columns: 1fr; gap: var(--space-4); }
        @media (min-width: 640px) { .form-row { grid-template-columns: 1fr 1fr; } }
        .success-message { text-align: center; padding: var(--space-12); color: var(--primary-600); }
        .success-message h3 { margin: var(--space-4) 0 var(--space-2); }
        .success-message p { color: var(--gray-600); margin: 0; }
        .contact-info h2 { font-size: var(--font-size-2xl); margin-bottom: var(--space-2); }
        .contact-info > p { color: var(--gray-600); margin-bottom: var(--space-6); }
        .info-cards { display: flex; flex-direction: column; gap: var(--space-4); margin-bottom: var(--space-8); }
        .info-card { display: flex; gap: var(--space-4); padding: var(--space-4); background: white; border-radius: var(--radius-lg); box-shadow: var(--shadow-sm); }
        .info-icon { width: 48px; height: 48px; background: var(--primary-100); border-radius: var(--radius-lg); display: flex; align-items: center; justify-content: center; color: var(--primary-600); flex-shrink: 0; }
        .info-card h4 { font-size: var(--font-size-base); margin-bottom: var(--space-1); }
        .info-card p { font-size: var(--font-size-sm); color: var(--gray-600); margin: 0; }
        .map-placeholder { height: 200px; background: var(--gray-100); border-radius: var(--radius-lg); display: flex; flex-direction: column; align-items: center; justify-content: center; color: var(--gray-400); gap: var(--space-2); }
      `}</style>
    </div>
  );
};

export default Contact;
