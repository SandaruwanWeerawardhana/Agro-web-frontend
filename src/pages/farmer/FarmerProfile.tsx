import { useState } from 'react';
import { User, MapPin, Phone, Mail, Save, Camera, Crop } from 'lucide-react';

const FarmerProfile = () => {
  const [profile, setProfile] = useState({
    name: 'John Farmer',
    email: 'john@email.com',
    phone: '+94 77 123 4567',
    location: 'Anuradhapura, Sri Lanka',
    farmSize: '5 acres',
    mainCrops: 'Rice, Vegetables',
    experience: '10 years',
  });

  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="profile-page">
      <div className="page-header">
        <h1>Profile Management</h1>
        <p>Update your personal and farm details</p>
      </div>

      <div className="profile-grid">
        <div className="card profile-card">
          <div className="profile-avatar">
            <div className="avatar-circle">JF</div>
            <button className="avatar-edit"><Camera size={16} /></button>
          </div>
          <h3>{profile.name}</h3>
          <span className="profile-role">Farmer</span>
          <div className="profile-stats">
            <div><strong>5</strong><span>Acres</span></div>
            <div><strong>12</strong><span>Crops</span></div>
            <div><strong>10</strong><span>Years</span></div>
          </div>
        </div>

        <form className="card form-card" onSubmit={handleSave}>
          <h3>Personal Information</h3>
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label"><User size={16} /> Full Name</label>
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
          </div>

          <h3>Farm Details</h3>
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">Farm Size</label>
              <input type="text" className="form-input" value={profile.farmSize} onChange={(e) => setProfile({ ...profile, farmSize: e.target.value })} />
            </div>
            <div className="form-group">
              <label className="form-label"><Crop size={16} /> Main Crops</label>
              <input type="text" className="form-input" value={profile.mainCrops} onChange={(e) => setProfile({ ...profile, mainCrops: e.target.value })} />
            </div>
            <div className="form-group full-width">
              <label className="form-label">Farming Experience</label>
              <input type="text" className="form-input" value={profile.experience} onChange={(e) => setProfile({ ...profile, experience: e.target.value })} />
            </div>
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
        .avatar-circle { width: 100px; height: 100px; background: linear-gradient(135deg, var(--primary-400), var(--primary-600)); border-radius: var(--radius-full); display: flex; align-items: center; justify-content: center; color: white; font-size: var(--font-size-3xl); font-weight: 700; }
        .avatar-edit { position: absolute; bottom: 0; right: 0; width: 32px; height: 32px; background: white; border: 2px solid var(--gray-200); border-radius: var(--radius-full); display: flex; align-items: center; justify-content: center; color: var(--gray-600); cursor: pointer; }
        .profile-card h3 { margin-bottom: var(--space-1); }
        .profile-role { color: var(--primary-600); font-weight: 500; display: block; margin-bottom: var(--space-4); }
        .profile-stats { display: flex; justify-content: center; gap: var(--space-6); padding-top: var(--space-4); border-top: 1px solid var(--gray-100); }
        .profile-stats div { text-align: center; }
        .profile-stats strong { display: block; font-size: var(--font-size-xl); color: var(--gray-900); }
        .profile-stats span { font-size: var(--font-size-sm); color: var(--gray-500); }
        .form-card h3 { font-size: var(--font-size-lg); margin-bottom: var(--space-4); padding-bottom: var(--space-3); border-bottom: 1px solid var(--gray-100); }
        .form-card h3:not(:first-child) { margin-top: var(--space-6); }
        .form-grid { display: grid; grid-template-columns: 1fr; gap: var(--space-4); }
        @media (min-width: 640px) { .form-grid { grid-template-columns: 1fr 1fr; } }
        .form-group.full-width { grid-column: 1 / -1; }
        .form-label { display: flex; align-items: center; gap: var(--space-2); }
        .btn-success { background: var(--success) !important; }
      `}</style>
    </div>
  );
};

export default FarmerProfile;
