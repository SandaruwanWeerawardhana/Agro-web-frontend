import { Link } from 'react-router-dom';
import { Shield, TrendingUp, Cloud, Truck, BarChart3, Leaf, ArrowRight, Check } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: 'Disease Detection',
      description: 'AI-powered crop disease identification using advanced image recognition. Get instant diagnosis with 95% accuracy and personalized treatment recommendations.',
      features: ['Instant photo analysis', 'Treatment recommendations', 'Disease history tracking', 'Expert consultation'],
    },
    {
      icon: Leaf,
      title: 'Crop Analysis',
      description: 'Comprehensive analysis of your crops including health assessment, growth tracking, and yield predictions based on real-time data.',
      features: ['Health monitoring', 'Growth tracking', 'Yield prediction', 'Soil recommendations'],
    },
    {
      icon: TrendingUp,
      title: 'Market Access',
      description: 'Connect directly with verified buyers and get fair market prices. List your produce and manage sales without middlemen.',
      features: ['Direct buyer connection', 'Price comparison', 'Secure transactions', 'Quality certification'],
    },
    {
      icon: Cloud,
      title: 'Weather Forecasting',
      description: 'Hyperlocal weather forecasts and alerts tailored for agricultural planning. Plan your farming activities with confidence.',
      features: ['7-day forecasts', 'Rain alerts', 'Temperature tracking', 'Seasonal insights'],
    },
    {
      icon: Truck,
      title: 'Supply Chain',
      description: 'Access quality seeds, fertilizers, and equipment from verified suppliers. Ensure you have the best inputs for optimal yields.',
      features: ['Verified suppliers', 'Quality products', 'Doorstep delivery', 'Bulk discounts'],
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reports',
      description: 'Comprehensive reports and insights on your farming operations. Track performance, identify trends, and make data-driven decisions.',
      features: ['Performance reports', 'Income tracking', 'Trend analysis', 'Custom dashboards'],
    },
  ];

  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="container">
          <span className="section-badge">Our Services</span>
          <h1>Comprehensive Solutions for Modern Farming</h1>
          <p>From disease detection to market access, we provide everything you need to optimize your agricultural operations.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">
                  <service.icon size={32} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, i) => (
                    <li key={i}><Check size={16} /> {feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-cta gradient-mesh">
        <div className="container text-center">
          <h2>Ready to Get Started?</h2>
          <p>Join thousands of farmers already using AGRO to grow smarter.</p>
          <Link to="/register" className="btn btn-primary btn-lg">
            Start Free Trial <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <style>{`
        .services-hero { background: linear-gradient(135deg, #f0fdf4 0%, #ecfeff 100%); padding: var(--space-20) 0; text-align: center; }
        .services-hero h1 { font-size: var(--font-size-4xl); margin-bottom: var(--space-6); }
        .services-hero p { font-size: var(--font-size-xl); color: var(--gray-600); max-width: 600px; margin: 0 auto; }
        .services-grid { display: grid; grid-template-columns: 1fr; gap: var(--space-8); }
        @media (min-width: 768px) { .services-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .services-grid { grid-template-columns: repeat(3, 1fr); } }
        .service-card { background: white; padding: var(--space-8); border-radius: var(--radius-xl); box-shadow: var(--shadow-md); transition: all var(--transition-base); }
        .service-card:hover { box-shadow: var(--shadow-xl); transform: translateY(-4px); }
        .service-icon { width: 64px; height: 64px; background: linear-gradient(135deg, var(--primary-100), var(--primary-200)); border-radius: var(--radius-lg); display: flex; align-items: center; justify-content: center; color: var(--primary-600); margin-bottom: var(--space-4); }
        .service-card h3 { font-size: var(--font-size-xl); margin-bottom: var(--space-3); }
        .service-card > p { color: var(--gray-600); font-size: var(--font-size-sm); line-height: 1.7; margin-bottom: var(--space-4); }
        .service-features { display: flex; flex-direction: column; gap: var(--space-2); }
        .service-features li { display: flex; align-items: center; gap: var(--space-2); font-size: var(--font-size-sm); color: var(--gray-700); }
        .service-features li svg { color: var(--primary-500); flex-shrink: 0; }
        .services-cta { padding: var(--space-16) 0; }
        .services-cta h2 { font-size: var(--font-size-3xl); margin-bottom: var(--space-4); }
        .services-cta p { font-size: var(--font-size-lg); color: var(--gray-600); margin-bottom: var(--space-8); }
      `}</style>
    </div>
  );
};

export default Services;
