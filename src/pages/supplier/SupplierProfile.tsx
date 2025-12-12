import { useState } from 'react';
import { Building, Mail, Phone, MapPin, Save, Camera, Award, FileText } from 'lucide-react';

const SupplierProfile = () => {
  const [profile, setProfile] = useState({
    name: 'AgriSupply Co.',
    email: 'info@agrisupply.com',
    phone: '+94 11 456 7890',
    location: 'Kurunegala, Sri Lanka',
    businessType: 'Wholesale Supplier',
    registration: 'REG-2020-12345',
  });

  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const certifications = [
    { name: 'Organic Certified', issuer: 'Control Union', expiry: 'Dec 2025' },
    { name: 'Quality Assured', issuer: 'Sri Lanka Standards', expiry: 'Jun 2024' },
  ];

  return (
    <div className="profile-page">
      <div className="page-header">
        <h1>Profile Management</h1>
        <p>Update your business details and certifications</p>
      </div>

      <div className="profile-grid">
        <div className="card profile-card">
          <div className="profile-avatar">
            <div className="avatar-circle"><Building size={40} /></div>
            <button className="avatar-edit"><Camera size={16} /></button>
          </div>
          <h3>{profile.name}</h3>
          <span className="profile-role">Supplier</span>
          <div className="profile-stats">
            <div><strong>24</strong><span>Products</span></div>
            <div><strong>156</strong><span>Customers</span></div>
          </div>
        </div>

        <form className="card form-card" onSubmit={handleSave}>
          <h3>Business Information</h3>
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label"><Building size={16} /> Business Name</label>
              <input type="text" className="form-input" value={profile.name} onChange={(e) => setProfile({ ...profile, name: e.target.value })} />
            </div>
            <div className="form-group">
              <label className="form-label"><Mail size={16} /> Email</label>
              <input type="email" className="form-input" value={profile.email} onChange={(e) => setProfile({ ...profile, email: e.target.value })} />
            </div>
            <div className="form-group">
              <label className="form-label"><Phone size={16} /> Phone</label>
              <input type="tel" className="form-input" value={profile.phone} onChange={(e) => setProfile({ ...profile, phone: e.target.value })} />
            </div>
            <div className="form-group">
              <label className="form-label"><MapPin size={16} /> Location</label>
              <input type="text" className="form-input" value={profile.location} onChange={(e) => setProfile({ ...profile, location: e.target.value })} />
            </div>
            <div className="form-group">
              <label className="form-label">Business Type</label>
              <select className="form-input form-select" value={profile.businessType} onChange={(e) => setProfile({ ...profile, businessType: e.target.value })}>
                <option>Wholesale Supplier</option>
                <option>Manufacturer</option>
                <option>Distributor</option>
                <option>Retailer</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label"><FileText size={16} /> Registration No.</label>
              <input type="text" className="form-input" value={profile.registration} onChange={(e) => setProfile({ ...profile, registration: e.target.value })} />
            </div>
          </div>

          <h3><Award size={18} /> Certifications</h3>
          <div className="certs-list">
            {certifications.map((cert, i) => (
              <div key={i} className="cert-card">
                <Award size={24} className="cert-icon" />
                <div className="cert-info">
                  <span className="cert-name">{cert.name}</span>
                  <span className="cert-issuer">{cert.issuer}</span>
                  <span className="cert-expiry">Expires: {cert.expiry}</span>
                </div>
              </div>
            ))}
          </div>

          <button type="submit" className={`btn btn-primary ${saved ? 'btn-success' : ''}`}>
            <Save size={18} /> {saved ? 'Saved!' : 'Save Changes'}
          </button>
        </form>
      </div>

      <style>{`
        .page-header { margin-bottom: var(--space-8); }
        .page-header h1 { font-size: var(--font-size-3xl); margin-bottom: var(--space-1); }
        .page-header p { color: var(--gray-500); margin: 0; }
        .profile-grid { display: grid; grid-template-columns: 1fr; gap: var(--space-6); }
        @media (min-width: 1024px) { .profile-grid { grid-template-columns: 280px 1fr; } }
        .card { background: white; padding: var(--space-6); border-radius: var(--radius-xl); box-shadow: var(--shadow-md); }
        .profile-card { text-align: center; }
        .profile-avatar { position: relative; display: inline-block; margin-bottom: var(--space-4); }
        .avatar-circle { width: 100px; height: 100px; background: linear-gradient(135deg, var(--secondary-400), var(--secondary-600)); border-radius: var(--radius-full); display: flex; align-items: center; justify-content: center; color: white; }
        .avatar-edit { position: absolute; bottom: 0; right: 0; width: 32px; height: 32px; background: white; border: 2px solid var(--gray-200); border-radius: var(--radius-full); display: flex; align-items: center; justify-content: center; color: var(--gray-600); cursor: pointer; }
        .profile-card h3 { margin-bottom: var(--space-1); }
        .profile-role { color: var(--secondary-600); font-weight: 500; display: block; margin-bottom: var(--space-4); }
        .profile-stats { display: flex; justify-content: center; gap: var(--space-6); padding-top: var(--space-4); border-top: 1px solid var(--gray-100); }
        .profile-stats div { text-align: center; }
        .profile-stats strong { display: block; font-size: var(--font-size-xl); color: var(--gray-900); }
        .profile-stats span { font-size: var(--font-size-sm); color: var(--gray-500); }
        .form-card h3 { font-size: var(--font-size-lg); margin-bottom: var(--space-4); padding-bottom: var(--space-3); border-bottom: 1px solid var(--gray-100); display: flex; align-items: center; gap: var(--space-2); }
        .form-card h3:not(:first-child) { margin-top: var(--space-6); }
        .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-4); }
        .form-label { display: flex; align-items: center; gap: var(--space-2); }
        .certs-list { display: flex; flex-direction: column; gap: var(--space-3); margin-bottom: var(--space-6); }
        .cert-card { display: flex; gap: var(--space-4); padding: var(--space-4); background: var(--gray-50); border-radius: var(--radius-lg); }
        .cert-icon { color: #fbbf24; flex-shrink: 0; }
        .cert-name { display: block; font-weight: 600; }
        .cert-issuer { display: block; font-size: var(--font-size-sm); color: var(--gray-500); }
        .cert-expiry { display: block; font-size: var(--font-size-xs); color: var(--gray-400); margin-top: var(--space-1); }
        .btn-success { background: var(--success) !important; }
      `}</style>
    </div>
  );
};

export default SupplierProfile;
