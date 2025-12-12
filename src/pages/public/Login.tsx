import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Leaf, Mail, Lock, User, Truck, ShoppingCart, ArrowRight, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import type { UserRole } from '../../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<UserRole>('farmer');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { login } = useAuth();
  const navigate = useNavigate();

  const roles = [
    { id: 'farmer' as UserRole, label: 'Farmer', icon: User, desc: 'Grow and sell crops' },
    { id: 'buyer' as UserRole, label: 'Buyer', icon: ShoppingCart, desc: 'Purchase fresh produce' },
    { id: 'supplier' as UserRole, label: 'Supplier', icon: Truck, desc: 'Supply farming inputs' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await login(email, password, role);
      navigate(`/${role}/dashboard`);
    } catch {
      setError('Invalid credentials. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <Link to="/" className="auth-logo">
              <Leaf size={32} />
              <span>AGRO</span>
            </Link>
            <h1>Welcome Back</h1>
            <p>Sign in to your account to continue</p>
          </div>

          <div className="role-selector">
            {roles.map((r) => (
              <button key={r.id} className={`role-btn ${role === r.id ? 'active' : ''}`} onClick={() => setRole(r.id)} type="button">
                <r.icon size={20} />
                <span>{r.label}</span>
              </button>
            ))}
          </div>

          {error && <div className="auth-error">{error}</div>}

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label className="form-label">Email</label>
              <div className="input-icon">
                <Mail size={18} />
                <input type="email" className="form-input" placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Password</label>
              <div className="input-icon">
                <Lock size={18} />
                <input type={showPassword ? 'text' : 'password'} className="form-input" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="button" className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            <div className="form-row-between">
              <label className="checkbox-label">
                <input type="checkbox" /> Remember me
              </label>
              <a href="#" className="forgot-link">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-primary btn-lg w-full" disabled={loading}>
              {loading ? 'Signing in...' : 'Sign In'} <ArrowRight size={20} />
            </button>
          </form>

          <div className="auth-footer">
            <p>Don't have an account? <Link to="/register">Sign up</Link></p>
          </div>
        </div>
      </div>

      <style>{`
        .auth-page { min-height: 100vh; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #f0fdf4 0%, #ecfeff 100%); padding: var(--space-8); }
        .auth-card { background: white; padding: var(--space-10); border-radius: var(--radius-2xl); box-shadow: var(--shadow-xl); width: 100%; max-width: 440px; }
        .auth-header { text-align: center; margin-bottom: var(--space-8); }
        .auth-logo { display: inline-flex; align-items: center; gap: var(--space-2); color: var(--primary-600); font-size: var(--font-size-2xl); font-weight: 800; margin-bottom: var(--space-4); }
        .auth-header h1 { font-size: var(--font-size-2xl); margin-bottom: var(--space-2); }
        .auth-header p { color: var(--gray-500); margin: 0; }
        .role-selector { display: flex; gap: var(--space-3); margin-bottom: var(--space-6); }
        .role-btn { flex: 1; display: flex; flex-direction: column; align-items: center; gap: var(--space-2); padding: var(--space-4); border: 2px solid var(--gray-200); border-radius: var(--radius-lg); color: var(--gray-500); font-size: var(--font-size-sm); font-weight: 500; transition: all var(--transition-base); }
        .role-btn:hover { border-color: var(--primary-300); color: var(--primary-600); }
        .role-btn.active { border-color: var(--primary-500); background: var(--primary-50); color: var(--primary-600); }
        .auth-error { background: #fee2e2; color: #991b1b; padding: var(--space-3) var(--space-4); border-radius: var(--radius-lg); font-size: var(--font-size-sm); margin-bottom: var(--space-4); }
        .input-icon { position: relative; }
        .input-icon svg { position: absolute; left: var(--space-4); top: 50%; transform: translateY(-50%); color: var(--gray-400); }
        .input-icon .form-input { padding-left: var(--space-12); }
        .password-toggle { position: absolute; right: var(--space-4); top: 50%; transform: translateY(-50%); color: var(--gray-400); cursor: pointer; }
        .form-row-between { display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--space-6); font-size: var(--font-size-sm); }
        .checkbox-label { display: flex; align-items: center; gap: var(--space-2); color: var(--gray-600); cursor: pointer; }
        .forgot-link { color: var(--primary-600); font-weight: 500; }
        .auth-footer { text-align: center; margin-top: var(--space-6); padding-top: var(--space-6); border-top: 1px solid var(--gray-100); font-size: var(--font-size-sm); color: var(--gray-600); }
        .auth-footer a { color: var(--primary-600); font-weight: 600; }
      `}</style>
    </div>
  );
};

export default Login;
