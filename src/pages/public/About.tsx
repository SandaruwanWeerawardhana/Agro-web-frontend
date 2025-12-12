import { Link } from 'react-router-dom';
import { Target, Eye, Heart, Users, Award, Globe, ArrowRight, Leaf, TrendingUp, Shield } from 'lucide-react';

const About = () => {
  const values = [
    { icon: Heart, title: 'Farmer First', description: 'Every decision we make is guided by our commitment to improving farmers\' lives.' },
    { icon: Shield, title: 'Trust & Transparency', description: 'We build trust through honest communication and transparent practices.' },
    { icon: TrendingUp, title: 'Innovation', description: 'We continuously innovate to bring the best technology to agriculture.' },
    { icon: Globe, title: 'Sustainability', description: 'We promote sustainable farming practices for a healthier planet.' },
  ];

  const milestones = [
    { year: '2020', title: 'Founded', description: 'AGRO was born with a vision to transform agriculture.' },
    { year: '2021', title: 'AI Launch', description: 'Launched AI-powered disease detection with 90% accuracy.' },
    { year: '2022', title: '10K Farmers', description: 'Reached 10,000 active farmers on the platform.' },
    { year: '2023', title: 'Marketplace', description: 'Launched direct farmer-to-buyer marketplace.' },
    { year: '2024', title: '50K+ Users', description: 'Expanded to 50,000+ users across the country.' },
  ];

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <span className="section-badge">About AGRO</span>
          <h1>Empowering Farmers Through Technology</h1>
          <p>We're on a mission to revolutionize agriculture by connecting farmers with AI-powered tools and direct market access.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="story-grid">
            <div className="story-content">
              <span className="section-badge">Our Story</span>
              <h2>From Vision to Reality</h2>
              <p>AGRO was founded in 2020 with a simple yet powerful vision: to bridge the gap between traditional farming and modern technology.</p>
              <p>Our team of agricultural experts, data scientists, and software engineers came together to create a platform that puts the power of AI and market access directly in farmers' hands.</p>
              <div className="story-stats">
                <div><span className="stat-value">50K+</span><span className="stat-label">Farmers</span></div>
                <div><span className="stat-value">200+</span><span className="stat-label">Districts</span></div>
                <div><span className="stat-value">1M+</span><span className="stat-label">Crops</span></div>
              </div>
            </div>
            <div className="story-visual">
              <div className="story-image"><Leaf size={100} /></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section gradient-mesh">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-card">
              <Target size={32} className="text-primary" />
              <h3>Our Mission</h3>
              <p>To empower every farmer with AI-driven insights and direct market access, enabling sustainable agriculture.</p>
            </div>
            <div className="mission-card">
              <Eye size={32} className="text-primary" />
              <h3>Our Vision</h3>
              <p>A world where technology bridges the gap between farms and markets, ensuring food security.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Our Values</span>
            <h2 className="section-title">What Drives Us</h2>
          </div>
          <div className="values-grid">
            {values.map((v, i) => (
              <div key={i} className="value-card">
                <v.icon size={28} className="text-primary" />
                <h3>{v.title}</h3>
                <p>{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Journey</span>
            <h2 className="section-title">Our Milestones</h2>
          </div>
          <div className="timeline">
            {milestones.map((m, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-marker">{m.year}</div>
                <div className="timeline-content">
                  <h4>{m.title}</h4>
                  <p>{m.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="container text-center">
          <h2>Join Our Mission</h2>
          <p>Be part of the agricultural revolution.</p>
          <Link to="/register" className="btn btn-primary btn-lg">Get Started <ArrowRight size={20} /></Link>
        </div>
      </section>

      <style>{`
        .about-hero { background: linear-gradient(135deg, #f0fdf4 0%, #ecfeff 100%); padding: var(--space-20) 0; text-align: center; }
        .about-hero h1 { font-size: var(--font-size-4xl); margin-bottom: var(--space-6); }
        .about-hero p { font-size: var(--font-size-xl); color: var(--gray-600); max-width: 600px; margin: 0 auto; }
        .story-grid { display: grid; grid-template-columns: 1fr; gap: var(--space-12); align-items: center; }
        @media (min-width: 1024px) { .story-grid { grid-template-columns: 1fr 1fr; } }
        .story-content h2 { font-size: var(--font-size-3xl); margin-bottom: var(--space-6); }
        .story-content p { color: var(--gray-600); line-height: 1.8; margin-bottom: var(--space-4); }
        .story-stats { display: flex; gap: var(--space-8); margin-top: var(--space-8); padding-top: var(--space-8); border-top: 1px solid var(--gray-200); }
        .story-stats > div { display: flex; flex-direction: column; }
        .stat-value { font-size: var(--font-size-2xl); font-weight: 800; color: var(--primary-600); }
        .stat-label { font-size: var(--font-size-sm); color: var(--gray-500); }
        .story-image { width: 250px; height: 250px; background: linear-gradient(135deg, var(--primary-400) 0%, var(--primary-600) 100%); border-radius: var(--radius-2xl); display: flex; align-items: center; justify-content: center; color: white; box-shadow: var(--shadow-2xl); margin: 0 auto; }
        .mission-grid { display: grid; grid-template-columns: 1fr; gap: var(--space-8); }
        @media (min-width: 768px) { .mission-grid { grid-template-columns: repeat(2, 1fr); } }
        .mission-card { background: white; padding: var(--space-8); border-radius: var(--radius-xl); box-shadow: var(--shadow-lg); text-align: center; }
        .mission-card h3 { font-size: var(--font-size-xl); margin: var(--space-4) 0 var(--space-2); }
        .mission-card p { color: var(--gray-600); margin: 0; }
        .values-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--space-6); }
        @media (min-width: 1024px) { .values-grid { grid-template-columns: repeat(4, 1fr); } }
        .value-card { padding: var(--space-6); background: white; border-radius: var(--radius-xl); box-shadow: var(--shadow-md); text-align: center; }
        .value-card h3 { font-size: var(--font-size-lg); margin: var(--space-3) 0 var(--space-2); }
        .value-card p { font-size: var(--font-size-sm); color: var(--gray-600); margin: 0; }
        .timeline { max-width: 600px; margin: 0 auto; }
        .timeline-item { display: flex; gap: var(--space-4); padding-bottom: var(--space-6); position: relative; }
        .timeline-item:not(:last-child)::after { content: ''; position: absolute; left: 20px; top: 45px; bottom: 0; width: 2px; background: var(--primary-200); }
        .timeline-marker { width: 42px; height: 42px; background: var(--primary-600); border-radius: var(--radius-full); display: flex; align-items: center; justify-content: center; color: white; font-weight: 700; font-size: var(--font-size-xs); flex-shrink: 0; }
        .timeline-content h4 { font-size: var(--font-size-lg); margin-bottom: var(--space-1); }
        .timeline-content p { color: var(--gray-600); margin: 0; font-size: var(--font-size-sm); }
        .about-cta { background: var(--gray-900); padding: var(--space-16) 0; }
        .about-cta h2 { font-size: var(--font-size-3xl); color: white; margin-bottom: var(--space-4); }
        .about-cta p { font-size: var(--font-size-lg); color: var(--gray-300); margin-bottom: var(--space-8); }
      `}</style>
    </div>
  );
};

export default About;
