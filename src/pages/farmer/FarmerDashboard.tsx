import { Cloud, Leaf, TrendingUp, AlertTriangle, Sun, Droplets, Wind, Calendar } from 'lucide-react';

const FarmerDashboard = () => {
  const stats = [
    { icon: Leaf, label: 'Active Crops', value: '12', change: '+2 this month', color: 'primary' },
    { icon: TrendingUp, label: 'Monthly Income', value: 'Rs. 45,000', change: '+15% vs last month', color: 'success' },
    { icon: Cloud, label: 'Weather', value: '28°C', change: 'Partly cloudy', color: 'accent' },
    { icon: AlertTriangle, label: 'Alerts', value: '3', change: 'Action needed', color: 'warning' },
  ];

  const crops = [
    { name: 'Rice', health: 95, status: 'Excellent', stage: 'Flowering' },
    { name: 'Tomato', health: 78, status: 'Good', stage: 'Fruiting' },
    { name: 'Chili', health: 62, status: 'Attention', stage: 'Vegetative' },
  ];

  const activities = [
    { action: 'Disease detected', crop: 'Chili', time: '2 hours ago', type: 'warning' },
    { action: 'Order completed', crop: 'Rice - 50kg', time: '5 hours ago', type: 'success' },
    { action: 'Weather alert', crop: 'Heavy rain expected', time: '1 day ago', type: 'info' },
  ];

  return (
    <div className="farmer-dashboard">
      <div className="page-header">
        <div>
          <h1>Dashboard</h1>
          <p>Welcome back! Here's an overview of your farm.</p>
        </div>
        <div className="header-date">
          <Calendar size={18} />
          <span>{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>
      </div>

      <div className="stats-grid">
        {stats.map((stat, i) => (
          <div key={i} className={`stat-card stat-${stat.color}`}>
            <div className="stat-icon"><stat.icon size={24} /></div>
            <div className="stat-info">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
              <span className="stat-change">{stat.change}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-grid">
        <div className="card weather-card">
          <h3>Weather Forecast</h3>
          <div className="weather-main">
            <Sun size={48} />
            <div>
              <span className="temp">28°C</span>
              <span className="desc">Partly Cloudy</span>
            </div>
          </div>
          <div className="weather-details">
            <div><Droplets size={18} /> 65% Humidity</div>
            <div><Wind size={18} /> 12 km/h Wind</div>
          </div>
        </div>

        <div className="card crops-card">
          <h3>Crop Health</h3>
          <div className="crops-list">
            {crops.map((crop, i) => (
              <div key={i} className="crop-item">
                <div className="crop-info">
                  <span className="crop-name">{crop.name}</span>
                  <span className="crop-stage">{crop.stage}</span>
                </div>
                <div className="crop-health">
                  <div className="health-bar">
                    <div className="health-fill" style={{ width: `${crop.health}%`, background: crop.health > 80 ? 'var(--success)' : crop.health > 60 ? 'var(--warning)' : 'var(--error)' }}></div>
                  </div>
                  <span>{crop.health}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card activity-card">
          <h3>Recent Activity</h3>
          <div className="activity-list">
            {activities.map((act, i) => (
              <div key={i} className="activity-item">
                <div className={`activity-dot ${act.type}`}></div>
                <div className="activity-info">
                  <span className="activity-action">{act.action}</span>
                  <span className="activity-crop">{act.crop}</span>
                </div>
                <span className="activity-time">{act.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .page-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: var(--space-8); flex-wrap: wrap; gap: var(--space-4); }
        .page-header h1 { font-size: var(--font-size-3xl); margin-bottom: var(--space-1); }
        .page-header p { color: var(--gray-500); margin: 0; }
        .header-date { display: flex; align-items: center; gap: var(--space-2); color: var(--gray-500); font-size: var(--font-size-sm); }
        .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: var(--space-6); margin-bottom: var(--space-8); }
        .stat-card { background: white; padding: var(--space-6); border-radius: var(--radius-xl); box-shadow: var(--shadow-md); display: flex; gap: var(--space-4); }
        .stat-icon { width: 56px; height: 56px; border-radius: var(--radius-lg); display: flex; align-items: center; justify-content: center; }
        .stat-primary .stat-icon { background: var(--primary-100); color: var(--primary-600); }
        .stat-success .stat-icon { background: #d1fae5; color: #059669; }
        .stat-accent .stat-icon { background: var(--accent-100); color: var(--accent-600); }
        .stat-warning .stat-icon { background: #fef3c7; color: #d97706; }
        .stat-info { display: flex; flex-direction: column; }
        .stat-value { font-size: var(--font-size-2xl); font-weight: 700; color: var(--gray-900); }
        .stat-label { font-size: var(--font-size-sm); color: var(--gray-500); }
        .stat-change { font-size: var(--font-size-xs); color: var(--primary-600); margin-top: var(--space-1); }
        .dashboard-grid { display: grid; grid-template-columns: 1fr; gap: var(--space-6); }
        @media (min-width: 1024px) { .dashboard-grid { grid-template-columns: 1fr 1fr 1fr; } }
        .card { background: white; padding: var(--space-6); border-radius: var(--radius-xl); box-shadow: var(--shadow-md); }
        .card h3 { font-size: var(--font-size-lg); margin-bottom: var(--space-4); }
        .weather-main { display: flex; align-items: center; gap: var(--space-4); margin-bottom: var(--space-4); }
        .weather-main svg { color: #fbbf24; }
        .temp { display: block; font-size: var(--font-size-3xl); font-weight: 700; }
        .desc { color: var(--gray-500); }
        .weather-details { display: flex; gap: var(--space-4); color: var(--gray-600); font-size: var(--font-size-sm); }
        .weather-details div { display: flex; align-items: center; gap: var(--space-2); }
        .crops-list { display: flex; flex-direction: column; gap: var(--space-4); }
        .crop-item { display: flex; justify-content: space-between; align-items: center; gap: var(--space-4); }
        .crop-name { font-weight: 600; display: block; }
        .crop-stage { font-size: var(--font-size-sm); color: var(--gray-500); }
        .crop-health { display: flex; align-items: center; gap: var(--space-3); min-width: 120px; }
        .health-bar { flex: 1; height: 8px; background: var(--gray-200); border-radius: var(--radius-full); overflow: hidden; }
        .health-fill { height: 100%; border-radius: var(--radius-full); }
        .activity-list { display: flex; flex-direction: column; gap: var(--space-4); }
        .activity-item { display: flex; align-items: flex-start; gap: var(--space-3); }
        .activity-dot { width: 10px; height: 10px; border-radius: var(--radius-full); margin-top: 6px; flex-shrink: 0; }
        .activity-dot.warning { background: var(--warning); }
        .activity-dot.success { background: var(--success); }
        .activity-dot.info { background: var(--info); }
        .activity-info { flex: 1; }
        .activity-action { display: block; font-weight: 500; }
        .activity-crop { font-size: var(--font-size-sm); color: var(--gray-500); }
        .activity-time { font-size: var(--font-size-xs); color: var(--gray-400); white-space: nowrap; }
      `}</style>
    </div>
  );
};

export default FarmerDashboard;
