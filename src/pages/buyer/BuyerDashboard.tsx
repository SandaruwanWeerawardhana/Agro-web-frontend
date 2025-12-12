import { TrendingUp, ShoppingCart, Heart, Package, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const BuyerDashboard = () => {
  const stats = [
    { icon: ShoppingCart, label: 'Active Orders', value: '5', change: '+2 this week', trend: 'up' },
    { icon: Heart, label: 'Saved Crops', value: '12', change: 'Updated today', trend: 'up' },
    { icon: Package, label: 'Delivered', value: '28', change: 'All time', trend: 'up' },
    { icon: TrendingUp, label: 'Total Spent', value: 'Rs. 125,000', change: 'This month', trend: 'up' },
  ];

  const trendingCrops = [
    { name: 'Rice (Samba)', price: 'Rs. 120/kg', trend: '+5%', trendDir: 'up' },
    { name: 'Tomatoes', price: 'Rs. 80/kg', trend: '-12%', trendDir: 'down' },
    { name: 'Green Chili', price: 'Rs. 200/kg', trend: '+8%', trendDir: 'up' },
    { name: 'Potatoes', price: 'Rs. 95/kg', trend: '+3%', trendDir: 'up' },
  ];

  const recentOrders = [
    { id: 'ORD-101', item: 'Rice 50kg', farmer: 'John Farm', status: 'Shipped', date: 'Dec 10' },
    { id: 'ORD-100', item: 'Tomatoes 25kg', farmer: 'Green Valley', status: 'Delivered', date: 'Dec 8' },
    { id: 'ORD-099', item: 'Onions 30kg', farmer: 'Hill Farm', status: 'Delivered', date: 'Dec 5' },
  ];

  const savedCrops = [
    { name: 'Organic Rice', farmer: 'Green Farm', price: 'Rs. 150/kg' },
    { name: 'Fresh Tomatoes', farmer: 'Valley Farms', price: 'Rs. 75/kg' },
    { name: 'Red Chili', farmer: 'Spice Garden', price: 'Rs. 220/kg' },
  ];

  return (
    <div className="buyer-dashboard">
      <div className="page-header">
        <h1>Dashboard</h1>
        <p>Welcome back! Here's your market overview.</p>
      </div>

      <div className="stats-grid">
        {stats.map((s, i) => (
          <div key={i} className="stat-card">
            <div className="stat-icon"><s.icon size={24} /></div>
            <div className="stat-info">
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
              <span className="stat-change">{s.change}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-grid">
        <div className="card">
          <h3><TrendingUp size={20} /> Market Trends</h3>
          <div className="trends-list">
            {trendingCrops.map((c, i) => (
              <div key={i} className="trend-item">
                <span className="trend-name">{c.name}</span>
                <span className="trend-price">{c.price}</span>
                <span className={`trend-change ${c.trendDir}`}>
                  {c.trendDir === 'up' ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                  {c.trend}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h3><Package size={20} /> Recent Orders</h3>
          <div className="orders-list">
            {recentOrders.map((o, i) => (
              <div key={i} className="order-item">
                <div className="order-main">
                  <span className="order-id">{o.id}</span>
                  <span className="order-item-name">{o.item}</span>
                </div>
                <div className="order-meta">
                  <span className={`order-status ${o.status.toLowerCase()}`}>{o.status}</span>
                  <span className="order-date">{o.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h3><Heart size={20} /> Saved Crops</h3>
          <div className="saved-list">
            {savedCrops.map((c, i) => (
              <div key={i} className="saved-item">
                <div className="saved-info">
                  <span className="saved-name">{c.name}</span>
                  <span className="saved-farmer">{c.farmer}</span>
                </div>
                <span className="saved-price">{c.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .page-header { margin-bottom: var(--space-8); }
        .page-header h1 { font-size: var(--font-size-3xl); margin-bottom: var(--space-1); }
        .page-header p { color: var(--gray-500); margin: 0; }
        .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: var(--space-6); margin-bottom: var(--space-8); }
        .stat-card { background: white; padding: var(--space-6); border-radius: var(--radius-xl); box-shadow: var(--shadow-md); display: flex; gap: var(--space-4); }
        .stat-icon { width: 56px; height: 56px; background: var(--primary-100); border-radius: var(--radius-lg); display: flex; align-items: center; justify-content: center; color: var(--primary-600); }
        .stat-info { display: flex; flex-direction: column; }
        .stat-value { font-size: var(--font-size-2xl); font-weight: 700; }
        .stat-label { font-size: var(--font-size-sm); color: var(--gray-500); }
        .stat-change { font-size: var(--font-size-xs); color: var(--primary-600); margin-top: var(--space-1); }
        .dashboard-grid { display: grid; grid-template-columns: 1fr; gap: var(--space-6); }
        @media (min-width: 1024px) { .dashboard-grid { grid-template-columns: repeat(3, 1fr); } }
        .card { background: white; padding: var(--space-6); border-radius: var(--radius-xl); box-shadow: var(--shadow-md); }
        .card h3 { font-size: var(--font-size-lg); margin-bottom: var(--space-4); display: flex; align-items: center; gap: var(--space-2); }
        .trends-list { display: flex; flex-direction: column; gap: var(--space-3); }
        .trend-item { display: flex; align-items: center; justify-content: space-between; padding: var(--space-3); background: var(--gray-50); border-radius: var(--radius-lg); }
        .trend-name { font-weight: 500; flex: 1; }
        .trend-price { color: var(--gray-600); font-size: var(--font-size-sm); }
        .trend-change { display: flex; align-items: center; gap: var(--space-1); font-size: var(--font-size-sm); font-weight: 600; margin-left: var(--space-3); }
        .trend-change.up { color: var(--success); }
        .trend-change.down { color: var(--error); }
        .orders-list { display: flex; flex-direction: column; gap: var(--space-3); }
        .order-item { display: flex; justify-content: space-between; padding: var(--space-3); background: var(--gray-50); border-radius: var(--radius-lg); }
        .order-id { font-size: var(--font-size-xs); color: var(--gray-500); display: block; }
        .order-item-name { font-weight: 500; }
        .order-meta { text-align: right; }
        .order-status { display: block; font-size: var(--font-size-xs); font-weight: 500; padding: var(--space-1) var(--space-2); border-radius: var(--radius-sm); }
        .order-status.shipped { background: var(--accent-100); color: var(--accent-700); }
        .order-status.delivered { background: #d1fae5; color: #065f46; }
        .order-date { font-size: var(--font-size-xs); color: var(--gray-400); }
        .saved-list { display: flex; flex-direction: column; gap: var(--space-3); }
        .saved-item { display: flex; justify-content: space-between; align-items: center; padding: var(--space-3); background: var(--gray-50); border-radius: var(--radius-lg); }
        .saved-name { font-weight: 500; display: block; }
        .saved-farmer { font-size: var(--font-size-sm); color: var(--gray-500); }
        .saved-price { font-weight: 600; color: var(--primary-600); }
      `}</style>
    </div>
  );
};

export default BuyerDashboard;
