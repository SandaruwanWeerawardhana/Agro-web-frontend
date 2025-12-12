import { Package, Eye, Check, X, Truck } from 'lucide-react';

const SupplierOrders = () => {
  const orders = [
    { id: 'SUP-105', farmer: 'John Perera', location: 'Anuradhapura', items: 'NPK Fertilizer 100kg', amount: 'Rs. 9,000', date: 'Dec 12, 2024', status: 'Pending' },
    { id: 'SUP-104', farmer: 'Kumari Silva', location: 'Nuwara Eliya', items: 'Rice Seeds 50kg', amount: 'Rs. 7,500', date: 'Dec 11, 2024', status: 'Processing' },
    { id: 'SUP-103', farmer: 'Rajitha Fernando', location: 'Kandy', items: 'Organic Pesticide 20L', amount: 'Rs. 4,400', date: 'Dec 10, 2024', status: 'Shipped' },
    { id: 'SUP-102', farmer: 'Saman Bandara', location: 'Matale', items: 'Urea 200kg', amount: 'Rs. 13,000', date: 'Dec 8, 2024', status: 'Delivered' },
    { id: 'SUP-101', farmer: 'Nimal Jayasinghe', location: 'Kurunegala', items: 'Tomato Seeds 10 packs', amount: 'Rs. 4,500', date: 'Dec 5, 2024', status: 'Delivered' },
  ];

  const stats = [
    { label: 'Pending', value: '5', color: 'warning' },
    { label: 'Processing', value: '3', color: 'info' },
    { label: 'Shipped', value: '8', color: 'primary' },
    { label: 'Delivered', value: '124', color: 'success' },
  ];

  return (
    <div className="supplier-orders-page">
      <div className="page-header">
        <h1>Orders from Farmers</h1>
        <p>View and process incoming orders</p>
      </div>

      <div className="stats-row">
        {stats.map((s, i) => (
          <div key={i} className={`stat-box stat-${s.color}`}>
            <span className="stat-num">{s.value}</span>
            <span>{s.label}</span>
          </div>
        ))}
      </div>

      <div className="card">
        <h3><Package size={20} /> All Orders</h3>
        <div className="orders-list">
          {orders.map((order) => (
            <div key={order.id} className="order-card">
              <div className="order-header">
                <div className="order-id-section">
                  <span className="order-id">{order.id}</span>
                  <span className={`order-status ${order.status.toLowerCase()}`}>{order.status}</span>
                </div>
                <span className="order-date">{order.date}</span>
              </div>
              <div className="order-body">
                <div className="order-farmer">
                  <strong>{order.farmer}</strong>
                  <span>{order.location}</span>
                </div>
                <div className="order-items">{order.items}</div>
              </div>
              <div className="order-footer">
                <span className="order-amount">{order.amount}</span>
                <div className="order-actions">
                  {order.status === 'Pending' && (
                    <>
                      <button className="btn btn-sm btn-primary"><Check size={14} /> Accept</button>
                      <button className="btn btn-sm btn-outline danger"><X size={14} /> Reject</button>
                    </>
                  )}
                  {order.status === 'Processing' && (
                    <button className="btn btn-sm btn-primary"><Truck size={14} /> Mark Shipped</button>
                  )}
                  <button className="btn btn-sm btn-outline"><Eye size={14} /> Details</button>
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
        .stats-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--space-4); margin-bottom: var(--space-6); }
        .stat-box { background: white; padding: var(--space-5); border-radius: var(--radius-lg); box-shadow: var(--shadow-sm); text-align: center; border-left: 4px solid; }
        .stat-box.stat-warning { border-color: var(--warning); }
        .stat-box.stat-info { border-color: var(--info); }
        .stat-box.stat-primary { border-color: var(--primary-500); }
        .stat-box.stat-success { border-color: var(--success); }
        .stat-num { display: block; font-size: var(--font-size-2xl); font-weight: 700; }
        .stat-box > span:last-child { font-size: var(--font-size-sm); color: var(--gray-500); }
        .card { background: white; padding: var(--space-6); border-radius: var(--radius-xl); box-shadow: var(--shadow-md); }
        .card h3 { font-size: var(--font-size-lg); margin-bottom: var(--space-4); display: flex; align-items: center; gap: var(--space-2); }
        .orders-list { display: flex; flex-direction: column; gap: var(--space-4); }
        .order-card { border: 1px solid var(--gray-200); border-radius: var(--radius-lg); overflow: hidden; }
        .order-header { display: flex; justify-content: space-between; align-items: center; padding: var(--space-3) var(--space-4); background: var(--gray-50); border-bottom: 1px solid var(--gray-200); }
        .order-id-section { display: flex; align-items: center; gap: var(--space-3); }
        .order-id { font-weight: 600; }
        .order-status { padding: var(--space-1) var(--space-2); border-radius: var(--radius-sm); font-size: var(--font-size-xs); font-weight: 500; }
        .order-status.pending { background: #fef3c7; color: #d97706; }
        .order-status.processing { background: var(--accent-100); color: var(--accent-700); }
        .order-status.shipped { background: var(--primary-100); color: var(--primary-700); }
        .order-status.delivered { background: #d1fae5; color: #065f46; }
        .order-date { font-size: var(--font-size-sm); color: var(--gray-500); }
        .order-body { padding: var(--space-4); }
        .order-farmer strong { display: block; }
        .order-farmer span { font-size: var(--font-size-sm); color: var(--gray-500); }
        .order-items { margin-top: var(--space-2); color: var(--gray-700); }
        .order-footer { display: flex; justify-content: space-between; align-items: center; padding: var(--space-3) var(--space-4); background: var(--gray-50); border-top: 1px solid var(--gray-200); flex-wrap: wrap; gap: var(--space-3); }
        .order-amount { font-size: var(--font-size-lg); font-weight: 700; color: var(--secondary-600); }
        .order-actions { display: flex; gap: var(--space-2); }
        .btn-outline.danger { color: var(--error); border-color: var(--error); }
        .btn-outline.danger:hover { background: #fee2e2; }
      `}</style>
    </div>
  );
};

export default SupplierOrders;
