import { Link } from 'react-router-dom';
import {
  Leaf,
  Shield,
  TrendingUp,
  Cloud,
  Users,
  Smartphone,
  ArrowRight,
  Check,
  Star,
} from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: Shield,
      title: 'Disease Detection',
      description: 'AI-powered crop disease identification with instant diagnosis and treatment recommendations.',
    },
    {
      icon: TrendingUp,
      title: 'Market Access',
      description: 'Connect directly with buyers and get fair prices for your produce without middlemen.',
    },
    {
      icon: Cloud,
      title: 'Weather Insights',
      description: 'Real-time weather forecasts and alerts to help you plan your farming activities.',
    },
    {
      icon: Smartphone,
      title: 'Mobile First',
      description: 'Access all features from your smartphone, anywhere in the field.',
    },
  ];

  const stats = [
    { value: '50K+', label: 'Active Farmers' },
    { value: '1M+', label: 'Crops Analyzed' },
    { value: '95%', label: 'Accuracy Rate' },
    { value: '200+', label: 'Districts Covered' },
  ];

  const testimonials = [
    {
      name: 'Saman Perera',
      role: 'Rice Farmer, Anuradhapura',
      content: 'AGRO helped me detect a disease in my paddy field early. Saved my entire harvest!',
      rating: 5,
    },
    {
      name: 'Kumari Silva',
      role: 'Vegetable Farmer, Nuwara Eliya',
      content: 'The market access feature helped me find better prices for my vegetables.',
      rating: 5,
    },
    {
      name: 'Rajitha Fernando',
      role: 'Tea Planter, Kandy',
      content: 'Weather alerts have been a game-changer for planning my harvesting schedule.',
      rating: 5,
    },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-gradient"></div>
          <div className="hero-pattern"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge animate-fadeIn">
              <Leaf size={16} />
              <span>Smart Agriculture Platform</span>
            </div>
            <h1 className="hero-title animate-fadeInUp">
              Grow Smarter with
              <span className="text-gradient"> AI-Powered</span>
              <br />Agriculture
            </h1>
            <p className="hero-description animate-fadeInUp stagger-2">
              Empowering farmers with cutting-edge technology for disease detection,
              crop analysis, and direct market access. Transform your farming journey today.
            </p>
            <div className="hero-actions animate-fadeInUp stagger-3">
              <Link to="/register" className="btn btn-primary btn-lg">
                Get Started Free
                <ArrowRight size={20} />
              </Link>
              <Link to="/services" className="btn btn-secondary btn-lg">
                Explore Services
              </Link>
            </div>
            <div className="hero-trust animate-fadeInUp stagger-4">
              <div className="hero-trust-avatars">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="hero-trust-avatar">
                    <Users size={16} />
                  </div>
                ))}
              </div>
              <p>
                <strong>50,000+</strong> farmers already growing smarter
              </p>
            </div>
          </div>
          <div className="hero-visual animate-fadeIn stagger-3">
            <div className="hero-card hero-card-1 animate-float">
              <Shield size={24} className="text-primary" />
              <span>Disease Detected</span>
              <span className="badge badge-success">98% Match</span>
            </div>
            <div className="hero-card hero-card-2 animate-float stagger-2">
              <TrendingUp size={24} className="text-primary" />
              <span>Market Price</span>
              <span className="badge badge-primary">↑ 12%</span>
            </div>
            <div className="hero-card hero-card-3 animate-float stagger-4">
              <Cloud size={24} className="text-primary" />
              <span>Weather Alert</span>
              <span className="badge badge-warning">Rain Tomorrow</span>
            </div>
            <div className="hero-image">
              <div className="hero-image-placeholder">
                <Leaf size={80} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Features</span>
            <h2 className="section-title">
              Everything You Need to
              <span className="text-gradient"> Succeed</span>
            </h2>
            <p className="section-description">
              Our comprehensive platform provides all the tools you need to optimize
              your farming operations and maximize your yields.
            </p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  <feature.icon size={28} />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <Link to="/services" className="feature-link">
                  Learn more <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section how-it-works gradient-mesh">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">How It Works</span>
            <h2 className="section-title">
              Start in <span className="text-gradient">3 Simple Steps</span>
            </h2>
          </div>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Create Account</h3>
              <p>Sign up as a farmer, buyer, or supplier in just 2 minutes.</p>
            </div>
            <div className="step-connector"></div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Upload & Analyze</h3>
              <p>Upload crop photos for instant AI-powered analysis and insights.</p>
            </div>
            <div className="step-connector"></div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Grow & Sell</h3>
              <p>Use insights to improve yields and connect with buyers directly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Testimonials</span>
            <h2 className="section-title">
              Trusted by <span className="text-gradient">Farmers</span> Nationwide
            </h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="testimonial-content">"{testimonial.content}"</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">
                    <Users size={20} />
                  </div>
                  <div>
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-card">
            <div className="cta-content">
              <h2>Ready to Transform Your Farming?</h2>
              <p>Join thousands of farmers already using AGRO to grow smarter and earn more.</p>
              <div className="cta-features">
                <div className="cta-feature">
                  <Check size={20} />
                  <span>Free to start</span>
                </div>
                <div className="cta-feature">
                  <Check size={20} />
                  <span>No credit card required</span>
                </div>
                <div className="cta-feature">
                  <Check size={20} />
                  <span>24/7 support</span>
                </div>
              </div>
              <Link to="/register" className="btn btn-primary btn-lg">
                Get Started Free
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .home-page {
          overflow-x: hidden;
        }

        /* Hero Section */
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: var(--space-20) 0;
          overflow: hidden;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          z-index: -1;
        }

        .hero-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #f0fdf4 0%, #ecfeff 50%, #f0fdf4 100%);
        }

        .hero-pattern {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle at 1px 1px, var(--primary-200) 1px, transparent 0);
          background-size: 40px 40px;
          opacity: 0.5;
        }

        .hero .container {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-12);
          align-items: center;
        }

        @media (min-width: 1024px) {
          .hero .container {
            grid-template-columns: 1fr 1fr;
          }
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: var(--space-2);
          padding: var(--space-2) var(--space-4);
          background: var(--primary-100);
          color: var(--primary-700);
          border-radius: var(--radius-full);
          font-size: var(--font-size-sm);
          font-weight: 600;
          margin-bottom: var(--space-6);
        }

        .hero-title {
          font-size: var(--font-size-4xl);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: var(--space-6);
        }

        @media (min-width: 768px) {
          .hero-title {
            font-size: var(--font-size-5xl);
          }
        }

        @media (min-width: 1024px) {
          .hero-title {
            font-size: var(--font-size-6xl);
          }
        }

        .hero-description {
          font-size: var(--font-size-lg);
          color: var(--gray-600);
          max-width: 540px;
          margin-bottom: var(--space-8);
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-4);
          margin-bottom: var(--space-8);
        }

        .hero-trust {
          display: flex;
          align-items: center;
          gap: var(--space-4);
        }

        .hero-trust-avatars {
          display: flex;
        }

        .hero-trust-avatar {
          width: 36px;
          height: 36px;
          border-radius: var(--radius-full);
          background: var(--primary-100);
          border: 2px solid white;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary-600);
          margin-left: -10px;
        }

        .hero-trust-avatar:first-child {
          margin-left: 0;
        }

        .hero-trust p {
          font-size: var(--font-size-sm);
          color: var(--gray-600);
          margin: 0;
        }

        .hero-visual {
          position: relative;
          display: none;
          height: 500px;
        }

        @media (min-width: 1024px) {
          .hero-visual {
            display: block;
          }
        }

        .hero-image {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 300px;
          height: 300px;
        }

        .hero-image-placeholder {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, var(--primary-400) 0%, var(--primary-600) 100%);
          border-radius: var(--radius-2xl);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: var(--shadow-2xl);
        }

        .hero-card {
          position: absolute;
          display: flex;
          align-items: center;
          gap: var(--space-3);
          padding: var(--space-4);
          background: white;
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-lg);
          font-weight: 500;
        }

        .hero-card-1 {
          top: 10%;
          right: 10%;
        }

        .hero-card-2 {
          top: 40%;
          left: 0;
        }

        .hero-card-3 {
          bottom: 10%;
          right: 20%;
        }

        /* Stats Section */
        .stats-section {
          padding: var(--space-16) 0;
          background: var(--gray-900);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-8);
        }

        @media (min-width: 768px) {
          .stats-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .stat-card {
          text-align: center;
        }

        .stat-value {
          display: block;
          font-size: var(--font-size-4xl);
          font-weight: 800;
          color: white;
          margin-bottom: var(--space-1);
        }

        .stat-label {
          font-size: var(--font-size-sm);
          color: var(--gray-400);
        }

        /* Section Headers */
        .section-header {
          text-align: center;
          max-width: 640px;
          margin: 0 auto var(--space-12);
        }

        .section-badge {
          display: inline-block;
          padding: var(--space-1) var(--space-4);
          background: var(--primary-100);
          color: var(--primary-700);
          border-radius: var(--radius-full);
          font-size: var(--font-size-sm);
          font-weight: 600;
          margin-bottom: var(--space-4);
        }

        .section-title {
          font-size: var(--font-size-3xl);
          margin-bottom: var(--space-4);
        }

        @media (min-width: 768px) {
          .section-title {
            font-size: var(--font-size-4xl);
          }
        }

        .section-description {
          font-size: var(--font-size-lg);
          color: var(--gray-600);
          margin: 0;
        }

        /* Features Section */
        .features-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-6);
        }

        @media (min-width: 640px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .features-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .feature-card {
          padding: var(--space-8);
          background: white;
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-md);
          transition: all var(--transition-base);
        }

        .feature-card:hover {
          box-shadow: var(--shadow-xl);
          transform: translateY(-4px);
        }

        .feature-icon {
          width: 56px;
          height: 56px;
          background: linear-gradient(135deg, var(--primary-100) 0%, var(--primary-200) 100%);
          border-radius: var(--radius-xl);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary-600);
          margin-bottom: var(--space-4);
        }

        .feature-title {
          font-size: var(--font-size-xl);
          margin-bottom: var(--space-2);
        }

        .feature-description {
          color: var(--gray-600);
          font-size: var(--font-size-sm);
          line-height: 1.7;
          margin-bottom: var(--space-4);
        }

        .feature-link {
          display: inline-flex;
          align-items: center;
          gap: var(--space-2);
          color: var(--primary-600);
          font-weight: 600;
          font-size: var(--font-size-sm);
          transition: gap var(--transition-base);
        }

        .feature-link:hover {
          gap: var(--space-3);
        }

        /* Steps Section */
        .steps-grid {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-6);
        }

        @media (min-width: 768px) {
          .steps-grid {
            flex-direction: row;
            justify-content: center;
          }
        }

        .step-card {
          text-align: center;
          padding: var(--space-8);
          background: white;
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-md);
          max-width: 280px;
        }

        .step-number {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, var(--primary-500) 0%, var(--primary-600) 100%);
          color: white;
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: var(--font-size-xl);
          font-weight: 700;
          margin: 0 auto var(--space-4);
        }

        .step-card h3 {
          margin-bottom: var(--space-2);
        }

        .step-card p {
          color: var(--gray-600);
          font-size: var(--font-size-sm);
          margin: 0;
        }

        .step-connector {
          width: 2px;
          height: 40px;
          background: var(--primary-300);
        }

        @media (min-width: 768px) {
          .step-connector {
            width: 60px;
            height: 2px;
          }
        }

        /* Testimonials Section */
        .testimonials-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-6);
        }

        @media (min-width: 768px) {
          .testimonials-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .testimonial-card {
          padding: var(--space-8);
          background: white;
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-md);
        }

        .testimonial-rating {
          display: flex;
          gap: var(--space-1);
          color: #fbbf24;
          margin-bottom: var(--space-4);
        }

        .testimonial-content {
          font-size: var(--font-size-lg);
          color: var(--gray-700);
          line-height: 1.7;
          margin-bottom: var(--space-6);
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: var(--space-3);
        }

        .testimonial-avatar {
          width: 48px;
          height: 48px;
          background: var(--primary-100);
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary-600);
        }

        .testimonial-author strong {
          display: block;
          color: var(--gray-900);
        }

        .testimonial-author span {
          font-size: var(--font-size-sm);
          color: var(--gray-500);
        }

        /* CTA Section */
        .cta-section {
          padding: var(--space-20) 0;
        }

        .cta-card {
          background: linear-gradient(135deg, var(--primary-600) 0%, var(--primary-800) 100%);
          border-radius: var(--radius-2xl);
          padding: var(--space-12);
          text-align: center;
        }

        @media (min-width: 768px) {
          .cta-card {
            padding: var(--space-16);
          }
        }

        .cta-content h2 {
          font-size: var(--font-size-3xl);
          color: white;
          margin-bottom: var(--space-4);
        }

        @media (min-width: 768px) {
          .cta-content h2 {
            font-size: var(--font-size-4xl);
          }
        }

        .cta-content p {
          font-size: var(--font-size-lg);
          color: var(--primary-100);
          margin-bottom: var(--space-8);
        }

        .cta-features {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: var(--space-6);
          margin-bottom: var(--space-8);
        }

        .cta-feature {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          color: white;
          font-weight: 500;
        }

        .cta-section .btn-primary {
          background: white;
          color: var(--primary-700);
          box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.2);
        }

        .cta-section .btn-primary:hover {
          background: var(--primary-50);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </div>
  );
};

export default Home;
