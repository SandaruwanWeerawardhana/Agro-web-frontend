import { Package, TrendingUp, Users, AlertCircle, BarChart3, Leaf } from 'lucide-react';

const SupplierDashboard = () => {
  const stats = [
    { icon: Package, label: 'Active Products', value: '24', change: '+3 this month' },
    { icon: TrendingUp, label: 'Monthly Sales', value: 'Rs. 85,000', change: '+22% vs last month' },
    { icon: Users, label: 'Active Farmers', value: '156', change: 'Buying from you' },
    { icon: AlertCircle, label: 'Low Stock', value: '3', change: 'Items to restock' },
  ];

  const demandItems = [
    { name: 'NPK Fertilizer', demand: 'High', orders: 45, stock: '500 kg' },
    { name: 'Rice Seeds (BG 300)', demand: 'High', orders: 32, stock: '200 kg' },
    { name: 'Organic Pesticide', demand: 'Medium', orders: 18, stock: '150 L' },
    { name: 'Urea Fertilizer', demand: 'Medium', orders: 25, stock: '800 kg' },
  ];

  const recentOrders = [
    { id: 'SUP-101', farmer: 'John Farm', items: 'NPK Fertilizer 50kg', amount: 'Rs. 4,500', status: 'Pending' },
    { id: 'SUP-100', farmer: 'Green Valley', items: 'Rice Seeds 25kg', amount: 'Rs. 3,750', status: 'Shipped' },
    { id: 'SUP-099', farmer: 'Hill Farm', items: 'Pesticide 10L', amount: 'Rs. 2,200', status: 'Delivered' },
  ];

  return (
    <div className="supplier-dashboard">
      <div className="page-header">
        <h1>Dashboard</h1>
        <p>Welcome back! Here's your supply overview.</p>
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
          <h3><BarChart3 size={20} /> Product Demand</h3>
          <div className="demand-list">
            {demandItems.map((item, i) => (
              <div key={i} className="demand-item">
                <div className="demand-info">
                  <span className="demand-name">{item.name}</span>
                  <span className="demand-stock">Stock: {item.stock}</span>
                </div>
                <div className="demand-meta">
                  <span className={`demand-level ${item.demand.toLowerCase()}`}>{item.demand}</span>
                  <span className="demand-orders">{item.orders} orders</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h3><Package size={20} /> Recent Orders</h3>
          <div className="orders-list">
            {recentOrders.map((order, i) => (
              <div key={i} className="order-item">
                <div className="order-info">
                  <span className="order-id">{order.id}</span>
                  <span className="order-farmer">{order.farmer}</span>
                  <span className="order-items">{order.items}</span>
                </div>
                <div className="order-meta">
                  <span className="order-amount">{order.amount}</span>
                  <span className={`order-status ${order.status.toLowerCase()}`}>{order.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h3><Leaf size={20} /> Top Categories</h3>
          <div className="categories-list">
            <div className="category-item"><span>Fertilizers</span><div className="bar" style={{width:'85%'}}></div><span>85%</span></div>
            <div className="category-item"><span>Seeds</span><div className="bar" style={{width:'65%'}}></div><span>65%</span></div>
            <div className="category-item"><span>Pesticides</span><div className="bar" style={{width:'45%'}}></div><span>45%</span></div>
            <div className="category-item"><span>Equipment</span><div className="bar" style={{width:'30%'}}></div><span>30%</span></div>
          </div>
        </div>
      </div>

      <style>{`
        .page-header { margin-bottom: var(--space-8); }
        .page-header h1 { font-size: var(--font-size-3xl); margin-bottom: var(--space-1); }
        .page-header p { color: var(--gray-500); margin: 0; }
        .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: var(--space-6); margin-bottom: var(--space-8); }
        .stat-card { background: white; padding: var(--space-6); border-radius: var(--radius-xl); box-shadow: var(--shadow-md); display: flex; gap: var(--space-4); }
        .stat-icon { width: 56px; height: 56px; background: var(--secondary-100); border-radius: var(--radius-lg); display: flex; align-items: center; justify-content: center; color: var(--secondary-600); }
        .stat-info { display: flex; flex-direction: column; }
        .stat-value { font-size: var(--font-size-2xl); font-weight: 700; }
        .stat-label { font-size: var(--font-size-sm); color: var(--gray-500); }
        .stat-change { font-size: var(--font-size-xs); color: var(--secondary-600); margin-top: var(--space-1); }
        .dashboard-grid { display: grid; grid-template-columns: 1fr; gap: var(--space-6); }
        @media (min-width: 1024px) { .dashboard-grid { grid-template-columns: 1fr 1fr 1fr; } }
        .card { background: white; padding: var(--space-6); border-radius: var(--radius-xl); box-shadow: var(--shadow-md); }
        .card h3 { font-size: var(--font-size-lg); margin-bottom: var(--space-4); display: flex; align-items: center; gap: var(--space-2); }
        .demand-list, .orders-list { display: flex; flex-direction: column; gap: var(--space-3); }
        .demand-item, .order-item { display: flex; justify-content: space-between; align-items: center; padding: var(--space-3); background: var(--gray-50); border-radius: var(--radius-lg); }
        .demand-name, .order-farmer { font-weight: 500; display: block; }
        .demand-stock, .order-items { font-size: var(--font-size-sm); color: var(--gray-500); }
        .order-id { font-size: var(--font-size-xs); color: var(--gray-400); display: block; }
        .demand-meta, .order-meta { text-align: right; }
        .demand-level { display: block; font-size: var(--font-size-xs); font-weight: 600; padding: var(--space-1) var(--space-2); border-radius: var(--radius-sm); }
        .demand-level.high { background: #fee2e2; color: #dc2626; }
        .demand-level.medium { background: #fef3c7; color: #d97706; }
        .demand-orders { font-size: var(--font-size-xs); color: var(--gray-400); }
        .order-amount { display: block; font-weight: 600; color: var(--gray-900); }
        .order-status { font-size: var(--font-size-xs); font-weight: 500; padding: var(--space-1) var(--space-2); border-radius: var(--radius-sm); }
        .order-status.pending { background: #fef3c7; color: #d97706; }
        .order-status.shipped { background: var(--accent-100); color: var(--accent-700); }
        .order-status.delivered { background: #d1fae5; color: #065f46; }
        .categories-list { display: flex; flex-direction: column; gap: var(--space-4); }
        .category-item { display: flex; align-items: center; gap: var(--space-3); }
        .category-item > span:first-child { width: 80px; font-size: var(--font-size-sm); }
        .category-item .bar { height: 8px; background: linear-gradient(90deg, var(--secondary-400), var(--secondary-600)); border-radius: var(--radius-full); flex: 1; }
        .category-item > span:last-child { font-size: var(--font-size-sm); font-weight: 600; width: 40px; text-align: right; }
      `}</style>
    </div>
  );
};

export default SupplierDashboard;
