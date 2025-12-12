import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Leaf, Mail, Lock, User, Truck, ShoppingCart, ArrowRight, Eye, EyeOff, MapPin, Phone } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import type { UserRole } from '../../context/AuthContext';

const Register = () => {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState<UserRole>('farmer');
  const [formData, setFormData] = useState({ name: '', email: '', password: '', phone: '', location: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const roles = [
    { id: 'farmer' as UserRole, label: 'Farmer', icon: User, desc: 'Grow and sell your crops' },
    { id: 'buyer' as UserRole, label: 'Buyer', icon: ShoppingCart, desc: 'Purchase fresh produce' },
    { id: 'supplier' as UserRole, label: 'Supplier', icon: Truck, desc: 'Supply farming inputs' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await register({ ...formData, role });
      navigate(`/${role}/dashboard`);
    } catch {
      console.error('Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <Link to="/" className="auth-logo"><Leaf size={32} /><span>AGRO</span></Link>
            <h1>Create Account</h1>
            <p>Join thousands of users on AGRO</p>
          </div>

          <div className="steps-indicator">
            {[1, 2].map((s) => (
              <div key={s} className={`step ${step >= s ? 'active' : ''}`}>{s}</div>
            ))}
          </div>

          {step === 1 && (
            <div className="step-content">
              <h3>Select your role</h3>
              <div className="role-grid">
                {roles.map((r) => (
                  <button key={r.id} className={`role-card ${role === r.id ? 'active' : ''}`} onClick={() => setRole(r.id)} type="button">
                    <r.icon size={28} />
                    <span className="role-title">{r.label}</span>
                    <span className="role-desc">{r.desc}</span>
                  </button>
                ))}
              </div>
              <button className="btn btn-primary btn-lg w-full" onClick={() => setStep(2)}>
                Continue <ArrowRight size={20} />
              </button>
            </div>
          )}

          {step === 2 && (
            <form onSubmit={handleSubmit} className="auth-form">
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <div className="input-icon">
                  <User size={18} />
                  <input type="text" className="form-input" placeholder="John Doe" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <div className="input-icon">
                  <Mail size={18} />
                  <input type="email" className="form-input" placeholder="your@email.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Phone</label>
                <div className="input-icon">
                  <Phone size={18} />
                  <input type="tel" className="form-input" placeholder="+94 XX XXX XXXX" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Location</label>
                <div className="input-icon">
                  <MapPin size={18} />
                  <input type="text" className="form-input" placeholder="City, District" value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })} required />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Password</label>
                <div className="input-icon">
                  <Lock size={18} />
                  <input type={showPassword ? 'text' : 'password'} className="form-input" placeholder="••••••••" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} required />
                  <button type="button" className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
              <div className="form-actions">
                <button type="button" className="btn btn-outline" onClick={() => setStep(1)}>Back</button>
                <button type="submit" className="btn btn-primary btn-lg" disabled={loading}>
                  {loading ? 'Creating...' : 'Create Account'}
                </button>
              </div>
            </form>
          )}

          <div className="auth-footer">
            <p>Already have an account? <Link to="/login">Sign in</Link></p>
          </div>
        </div>
      </div>

      <style>{`
        .auth-page { min-height: 100vh; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #f0fdf4 0%, #ecfeff 100%); padding: var(--space-8); }
        .auth-card { background: white; padding: var(--space-10); border-radius: var(--radius-2xl); box-shadow: var(--shadow-xl); width: 100%; max-width: 480px; }
        .auth-header { text-align: center; margin-bottom: var(--space-6); }
        .auth-logo { display: inline-flex; align-items: center; gap: var(--space-2); color: var(--primary-600); font-size: var(--font-size-2xl); font-weight: 800; margin-bottom: var(--space-4); }
        .auth-header h1 { font-size: var(--font-size-2xl); margin-bottom: var(--space-2); }
        .auth-header p { color: var(--gray-500); margin: 0; }
        .steps-indicator { display: flex; justify-content: center; gap: var(--space-4); margin-bottom: var(--space-6); }
        .step { width: 32px; height: 32px; border-radius: var(--radius-full); border: 2px solid var(--gray-300); display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: var(--font-size-sm); color: var(--gray-400); }
        .step.active { border-color: var(--primary-500); background: var(--primary-500); color: white; }
        .step-content h3 { text-align: center; margin-bottom: var(--space-6); }
        .role-grid { display: flex; flex-direction: column; gap: var(--space-3); margin-bottom: var(--space-6); }
        .role-card { display: flex; flex-direction: column; align-items: flex-start; gap: var(--space-1); padding: var(--space-4); border: 2px solid var(--gray-200); border-radius: var(--radius-lg); text-align: left; transition: all var(--transition-base); }
        .role-card:hover { border-color: var(--primary-300); }
        .role-card.active { border-color: var(--primary-500); background: var(--primary-50); }
        .role-card svg { color: var(--primary-600); margin-bottom: var(--space-1); }
        .role-title { font-weight: 600; color: var(--gray-900); }
        .role-desc { font-size: var(--font-size-sm); color: var(--gray-500); }
        .input-icon { position: relative; }
        .input-icon svg { position: absolute; left: var(--space-4); top: 50%; transform: translateY(-50%); color: var(--gray-400); }
        .input-icon .form-input { padding-left: var(--space-12); }
        .password-toggle { position: absolute; right: var(--space-4); top: 50%; transform: translateY(-50%); color: var(--gray-400); cursor: pointer; }
        .form-actions { display: flex; gap: var(--space-3); margin-top: var(--space-2); }
        .form-actions .btn { flex: 1; }
        .auth-footer { text-align: center; margin-top: var(--space-6); padding-top: var(--space-6); border-top: 1px solid var(--gray-100); font-size: var(--font-size-sm); color: var(--gray-600); }
        .auth-footer a { color: var(--primary-600); font-weight: 600; }
      `}</style>
    </div>
  );
};

export default Register;
