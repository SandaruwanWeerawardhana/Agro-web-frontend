import { BarChart3, TrendingUp, Cloud, Calendar, Download } from 'lucide-react';

const FarmerReports = () => {
  const monthlyData = [
    { month: 'Jul', income: 35000 },
    { month: 'Aug', income: 42000 },
    { month: 'Sep', income: 38000 },
    { month: 'Oct', income: 45000 },
    { month: 'Nov', income: 52000 },
    { month: 'Dec', income: 48000 },
  ];
  const maxIncome = Math.max(...monthlyData.map(d => d.income));

  const cropPerformance = [
    { crop: 'Rice', yield: '2.5 tons', revenue: 'Rs. 75,000', growth: '+12%' },
    { crop: 'Tomato', yield: '800 kg', revenue: 'Rs. 32,000', growth: '+8%' },
    { crop: 'Chili', yield: '200 kg', revenue: 'Rs. 24,000', growth: '-5%' },
  ];

  const forecast = [
    { day: 'Mon', temp: '28°C', rain: '10%', icon: '☀️' },
    { day: 'Tue', temp: '27°C', rain: '20%', icon: '⛅' },
    { day: 'Wed', temp: '26°C', rain: '60%', icon: '🌧️' },
    { day: 'Thu', temp: '25°C', rain: '80%', icon: '🌧️' },
    { day: 'Fri', temp: '27°C', rain: '30%', icon: '⛅' },
    { day: 'Sat', temp: '29°C', rain: '10%', icon: '☀️' },
    { day: 'Sun', temp: '30°C', rain: '5%', icon: '☀️' },
  ];

  return (
    <div className="reports-page">
      <div className="page-header">
        <div>
          <h1>Reports & Insights</h1>
          <p>Track your farm performance and get actionable insights</p>
        </div>
        <button className="btn btn-outline"><Download size={18} /> Export Report</button>
      </div>

      <div className="reports-grid">
        <div className="card income-card">
          <h3><TrendingUp size={20} /> Monthly Income</h3>
          <div className="chart">
            {monthlyData.map((d, i) => (
              <div key={i} className="bar-container">
                <div className="bar" style={{ height: `${(d.income / maxIncome) * 100}%` }}>
                  <span className="bar-value">Rs. {(d.income / 1000).toFixed(0)}k</span>
                </div>
                <span className="bar-label">{d.month}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card weather-card">
          <h3><Cloud size={20} /> 7-Day Weather Forecast</h3>
          <div className="forecast-grid">
            {forecast.map((d, i) => (
              <div key={i} className="forecast-day">
                <span className="forecast-name">{d.day}</span>
                <span className="forecast-icon">{d.icon}</span>
                <span className="forecast-temp">{d.temp}</span>
                <span className="forecast-rain">💧 {d.rain}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card performance-card">
          <h3><BarChart3 size={20} /> Crop Performance</h3>
          <div className="performance-table">
            <table>
              <thead><tr><th>Crop</th><th>Yield</th><th>Revenue</th><th>Growth</th></tr></thead>
              <tbody>
                {cropPerformance.map((c, i) => (
                  <tr key={i}>
                    <td><strong>{c.crop}</strong></td>
                    <td>{c.yield}</td>
                    <td>{c.revenue}</td>
                    <td><span className={`growth ${c.growth.startsWith('+') ? 'positive' : 'negative'}`}>{c.growth}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="card insights-card">
          <h3><Calendar size={20} /> Key Insights</h3>
          <ul className="insights-list">
            <li className="insight success">📈 Your income increased by 15% compared to last month</li>
            <li className="insight warning">🌧️ Heavy rain expected mid-week - consider harvesting early</li>
            <li className="insight info">💡 Tomato prices are expected to rise next week</li>
            <li className="insight">🌱 Best time to plant for Yala season is approaching</li>
          </ul>
        </div>
      </div>

      <style>{`
        .page-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: var(--space-8); flex-wrap: wrap; gap: var(--space-4); }
        .page-header h1 { font-size: var(--font-size-3xl); margin-bottom: var(--space-1); }
        .page-header p { color: var(--gray-500); margin: 0; }
        .reports-grid { display: grid; grid-template-columns: 1fr; gap: var(--space-6); }
        @media (min-width: 1024px) { .reports-grid { grid-template-columns: 1fr 1fr; } }
        .card { background: white; padding: var(--space-6); border-radius: var(--radius-xl); box-shadow: var(--shadow-md); }
        .card h3 { font-size: var(--font-size-lg); margin-bottom: var(--space-4); display: flex; align-items: center; gap: var(--space-2); }
        .chart { display: flex; align-items: flex-end; justify-content: space-between; height: 200px; gap: var(--space-2); padding-top: var(--space-4); }
        .bar-container { display: flex; flex-direction: column; align-items: center; flex: 1; height: 100%; }
        .bar { width: 100%; max-width: 40px; background: linear-gradient(180deg, var(--primary-500), var(--primary-600)); border-radius: var(--radius-sm) var(--radius-sm) 0 0; display: flex; align-items: flex-start; justify-content: center; position: relative; transition: all var(--transition-base); }
        .bar:hover { background: linear-gradient(180deg, var(--primary-400), var(--primary-500)); }
        .bar-value { position: absolute; top: -24px; font-size: var(--font-size-xs); font-weight: 600; color: var(--gray-600); white-space: nowrap; }
        .bar-label { margin-top: var(--space-2); font-size: var(--font-size-sm); color: var(--gray-500); }
        .forecast-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: var(--space-2); }
        .forecast-day { display: flex; flex-direction: column; align-items: center; padding: var(--space-3); background: var(--gray-50); border-radius: var(--radius-lg); }
        .forecast-name { font-size: var(--font-size-sm); font-weight: 600; color: var(--gray-600); }
        .forecast-icon { font-size: var(--font-size-2xl); margin: var(--space-2) 0; }
        .forecast-temp { font-weight: 600; color: var(--gray-900); }
        .forecast-rain { font-size: var(--font-size-xs); color: var(--gray-500); }
        .performance-table { overflow-x: auto; }
        table { width: 100%; border-collapse: collapse; }
        th, td { padding: var(--space-3); text-align: left; border-bottom: 1px solid var(--gray-100); }
        th { font-size: var(--font-size-sm); font-weight: 600; color: var(--gray-500); }
        .growth { font-weight: 600; }
        .growth.positive { color: var(--success); }
        .growth.negative { color: var(--error); }
        .insights-list { display: flex; flex-direction: column; gap: var(--space-3); }
        .insight { padding: var(--space-3) var(--space-4); background: var(--gray-50); border-radius: var(--radius-lg); font-size: var(--font-size-sm); border-left: 3px solid var(--gray-300); }
        .insight.success { border-left-color: var(--success); background: #f0fdf4; }
        .insight.warning { border-left-color: var(--warning); background: #fffbeb; }
        .insight.info { border-left-color: var(--info); background: #eff6ff; }
      `}</style>
    </div>
  );
};

export default FarmerReports;
