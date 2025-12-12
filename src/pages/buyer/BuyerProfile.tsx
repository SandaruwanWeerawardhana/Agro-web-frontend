import { useState } from 'react';
import { User, Mail, Phone, MapPin, Save, Camera, Building } from 'lucide-react';

const BuyerProfile = () => {
  const [profile, setProfile] = useState({
    name: 'ABC Trading Company',
    email: 'abc@traders.com',
    phone: '+94 11 234 5678',
    location: 'Colombo 03, Sri Lanka',
    businessType: 'Wholesale Trader',
    gstNumber: 'GST12345678',
  });

  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const addresses = [
    { id: 1, label: 'Main Warehouse', address: '123 Market Road, Colombo 03', isDefault: true },
    { id: 2, label: 'Branch Office', address: '456 Trade Street, Kandy', isDefault: false },
  ];

  return (
    <div className="profile-page">
      <div className="page-header">
        <h1>Profile Management</h1>
        <p>Update your business and contact details</p>
      </div>

      <div className="profile-grid">
        <div className="card profile-card">
          <div className="profile-avatar">
            <div className="avatar-circle"><Building size={40} /></div>
            <button className="avatar-edit"><Camera size={16} /></button>
          </div>
          <h3>{profile.name}</h3>
          <span className="profile-role">Buyer</span>
          <div className="profile-stats">
            <div><strong>28</strong><span>Orders</span></div>
            <div><strong>Rs. 125K</strong><span>Spent</span></div>
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
                <option>Wholesale Trader</option>
                <option>Retailer</option>
                <option>Restaurant/Hotel</option>
                <option>Export Company</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">GST Number</label>
              <input type="text" className="form-input" value={profile.gstNumber} onChange={(e) => setProfile({ ...profile, gstNumber: e.target.value })} />
            </div>
          </div>

          <h3>Delivery Addresses</h3>
          <div className="addresses-list">
            {addresses.map((addr) => (
              <div key={addr.id} className={`address-card ${addr.isDefault ? 'default' : ''}`}>
                <div className="address-info">
                  <span className="address-label">{addr.label}</span>
                  <span className="address-text">{addr.address}</span>
                </div>
                {addr.isDefault && <span className="default-badge">Default</span>}
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
        .avatar-circle { width: 100px; height: 100px; background: linear-gradient(135deg, var(--accent-400), var(--accent-600)); border-radius: var(--radius-full); display: flex; align-items: center; justify-content: center; color: white; }
        .avatar-edit { position: absolute; bottom: 0; right: 0; width: 32px; height: 32px; background: white; border: 2px solid var(--gray-200); border-radius: var(--radius-full); display: flex; align-items: center; justify-content: center; color: var(--gray-600); cursor: pointer; }
        .profile-card h3 { margin-bottom: var(--space-1); }
        .profile-role { color: var(--accent-600); font-weight: 500; display: block; margin-bottom: var(--space-4); }
        .profile-stats { display: flex; justify-content: center; gap: var(--space-6); padding-top: var(--space-4); border-top: 1px solid var(--gray-100); }
        .profile-stats div { text-align: center; }
        .profile-stats strong { display: block; font-size: var(--font-size-xl); color: var(--gray-900); }
        .profile-stats span { font-size: var(--font-size-sm); color: var(--gray-500); }
        .form-card h3 { font-size: var(--font-size-lg); margin-bottom: var(--space-4); padding-bottom: var(--space-3); border-bottom: 1px solid var(--gray-100); }
        .form-card h3:not(:first-child) { margin-top: var(--space-6); }
        .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-4); }
        .form-label { display: flex; align-items: center; gap: var(--space-2); }
        .addresses-list { display: flex; flex-direction: column; gap: var(--space-3); margin-bottom: var(--space-6); }
        .address-card { display: flex; justify-content: space-between; align-items: center; padding: var(--space-4); border: 2px solid var(--gray-200); border-radius: var(--radius-lg); }
        .address-card.default { border-color: var(--primary-500); background: var(--primary-50); }
        .address-label { display: block; font-weight: 600; }
        .address-text { font-size: var(--font-size-sm); color: var(--gray-500); }
        .default-badge { padding: var(--space-1) var(--space-2); background: var(--primary-100); color: var(--primary-700); border-radius: var(--radius-sm); font-size: var(--font-size-xs); font-weight: 500; }
        .btn-success { background: var(--success) !important; }
      `}</style>
    </div>
  );
};

export default BuyerProfile;
