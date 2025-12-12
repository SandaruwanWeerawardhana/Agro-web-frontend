import { Package, Eye, Truck, CheckCircle, Clock, RotateCcw } from 'lucide-react';

const BuyerOrders = () => {
  const orders = [
    { id: 'ORD-101', items: 'Rice 50kg, Tomatoes 10kg', farmer: 'Green Valley Farm', total: 'Rs. 8,800', status: 'Shipped', date: 'Dec 10, 2024', tracking: 'In Transit' },
    { id: 'ORD-100', items: 'Fresh Tomatoes 25kg', farmer: 'Hill Side Farm', total: 'Rs. 2,000', status: 'Delivered', date: 'Dec 8, 2024', tracking: 'Completed' },
    { id: 'ORD-099', items: 'Red Onions 30kg', farmer: 'Dry Zone Farms', total: 'Rs. 3,600', status: 'Delivered', date: 'Dec 5, 2024', tracking: 'Completed' },
    { id: 'ORD-098', items: 'Potatoes 50kg', farmer: 'Cool Climate Farm', total: 'Rs. 4,750', status: 'Delivered', date: 'Dec 1, 2024', tracking: 'Completed' },
  ];

  const stats = [
    { icon: Package, label: 'Total Orders', value: '28' },
    { icon: Truck, label: 'In Transit', value: '2' },
    { icon: CheckCircle, label: 'Delivered', value: '25' },
    { icon: RotateCcw, label: 'Returns', value: '1' },
  ];

  return (
    <div className="orders-page">
      <div className="page-header">
        <h1>Order Management</h1>
        <p>Track and manage your orders</p>
      </div>

      <div className="stats-row">
        {stats.map((s, i) => (
          <div key={i} className="stat-box">
            <s.icon size={24} className="text-primary" />
            <span className="stat-num">{s.value}</span>
            <span>{s.label}</span>
          </div>
        ))}
      </div>

      <div className="card">
        <h3><Package size={20} /> Order History</h3>
        <div className="orders-list">
          {orders.map((order) => (
            <div key={order.id} className="order-card">
              <div className="order-header">
                <span className="order-id">{order.id}</span>
                <span className={`order-status ${order.status.toLowerCase()}`}>{order.status}</span>
              </div>
              <div className="order-body">
                <div className="order-items">{order.items}</div>
                <div className="order-farmer">From: {order.farmer}</div>
              </div>
              <div className="order-footer">
                <div className="order-total">{order.total}</div>
                <div className="order-meta">
                  <span className="order-tracking"><Clock size={14} /> {order.tracking}</span>
                  <span className="order-date">{order.date}</span>
                </div>
                <div className="order-actions">
                  <button className="btn btn-sm btn-outline"><Eye size={14} /> Details</button>
                  {order.status === 'Delivered' && <button className="btn btn-sm btn-outline"><RotateCcw size={14} /> Reorder</button>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .page-header { margin-bottom: var(--space-8); }
        .page-header h1 { font-size: var(--font-size-3xl); margin-bottom: var(--space-1); }
        .page-header p { color: var(--gray-500); margin: 0; }
        .stats-row { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: var(--space-4); margin-bottom: var(--space-6); }
        .stat-box { background: white; padding: var(--space-5); border-radius: var(--radius-lg); box-shadow: var(--shadow-sm); display: flex; flex-direction: column; align-items: center; text-align: center; gap: var(--space-2); }
        .stat-num { font-size: var(--font-size-2xl); font-weight: 700; }
        .stat-box > span:last-child { font-size: var(--font-size-sm); color: var(--gray-500); }
        .card { background: white; padding: var(--space-6); border-radius: var(--radius-xl); box-shadow: var(--shadow-md); }
        .card h3 { font-size: var(--font-size-lg); margin-bottom: var(--space-4); display: flex; align-items: center; gap: var(--space-2); }
        .orders-list { display: flex; flex-direction: column; gap: var(--space-4); }
        .order-card { border: 1px solid var(--gray-200); border-radius: var(--radius-lg); overflow: hidden; }
        .order-header { display: flex; justify-content: space-between; align-items: center; padding: var(--space-3) var(--space-4); background: var(--gray-50); border-bottom: 1px solid var(--gray-200); }
        .order-id { font-weight: 600; }
        .order-status { padding: var(--space-1) var(--space-2); border-radius: var(--radius-sm); font-size: var(--font-size-xs); font-weight: 500; }
        .order-status.shipped { background: var(--accent-100); color: var(--accent-700); }
        .order-status.delivered { background: #d1fae5; color: #065f46; }
        .order-body { padding: var(--space-4); }
        .order-items { font-weight: 500; margin-bottom: var(--space-1); }
        .order-farmer { font-size: var(--font-size-sm); color: var(--gray-500); }
        .order-footer { display: flex; justify-content: space-between; align-items: center; padding: var(--space-3) var(--space-4); background: var(--gray-50); border-top: 1px solid var(--gray-200); flex-wrap: wrap; gap: var(--space-3); }
        .order-total { font-size: var(--font-size-lg); font-weight: 700; color: var(--primary-600); }
        .order-meta { display: flex; gap: var(--space-4); font-size: var(--font-size-sm); color: var(--gray-500); }
        .order-tracking { display: flex; align-items: center; gap: var(--space-1); }
        .order-actions { display: flex; gap: var(--space-2); }
      `}</style>
    </div>
  );
};

export default BuyerOrders;
