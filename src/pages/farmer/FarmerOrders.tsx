import { Package, Eye, Clock, CheckCircle, CreditCard } from 'lucide-react';

const FarmerOrders = () => {
  const orders = [
    { id: 'ORD-001', buyer: 'ABC Traders', crop: 'Rice (100kg)', amount: 'Rs. 12,000', status: 'Delivered', payment: 'Paid', date: 'Dec 10, 2024' },
    { id: 'ORD-002', buyer: 'Fresh Mart', crop: 'Tomatoes (50kg)', amount: 'Rs. 4,000', status: 'Shipped', payment: 'Pending', date: 'Dec 8, 2024' },
    { id: 'ORD-003', buyer: 'Green Grocers', crop: 'Chili (25kg)', amount: 'Rs. 5,000', status: 'Processing', payment: 'Pending', date: 'Dec 5, 2024' },
    { id: 'ORD-004', buyer: 'Super Store', crop: 'Cabbage (75kg)', amount: 'Rs. 3,750', status: 'Delivered', payment: 'Paid', date: 'Dec 1, 2024' },
  ];

  const stats = [
    { label: 'Total Orders', value: '24', icon: Package },
    { label: 'Pending', value: '3', icon: Clock },
    { label: 'Completed', value: '21', icon: CheckCircle },
    { label: 'Total Earnings', value: 'Rs. 145,000', icon: CreditCard },
  ];

  return (
    <div className="orders-page">
      <div className="page-header">
        <h1>Orders & Payments</h1>
        <p>Track your orders and payment status</p>
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
        <h3><Package size={20} /> Recent Orders</h3>
        <div className="orders-table">
          <table>
            <thead>
              <tr><th>Order ID</th><th>Buyer</th><th>Items</th><th>Amount</th><th>Status</th><th>Payment</th><th>Date</th><th></th></tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td><strong>{order.id}</strong></td>
                  <td>{order.buyer}</td>
                  <td>{order.crop}</td>
                  <td>{order.amount}</td>
                  <td><span className={`status ${order.status.toLowerCase()}`}>{order.status}</span></td>
                  <td><span className={`payment ${order.payment.toLowerCase()}`}>{order.payment}</span></td>
                  <td>{order.date}</td>
                  <td><button className="icon-btn"><Eye size={16} /></button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <style>{`
        .page-header { margin-bottom: var(--space-8); }
        .page-header h1 { font-size: var(--font-size-3xl); margin-bottom: var(--space-1); }
        .page-header p { color: var(--gray-500); margin: 0; }
        .stats-row { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: var(--space-4); margin-bottom: var(--space-6); }
        .stat-box { background: white; padding: var(--space-5); border-radius: var(--radius-lg); box-shadow: var(--shadow-sm); display: flex; flex-direction: column; align-items: center; text-align: center; gap: var(--space-2); }
        .stat-num { font-size: var(--font-size-2xl); font-weight: 700; color: var(--gray-900); }
        .stat-box > span:last-child { font-size: var(--font-size-sm); color: var(--gray-500); }
        .card { background: white; padding: var(--space-6); border-radius: var(--radius-xl); box-shadow: var(--shadow-md); }
        .card h3 { font-size: var(--font-size-lg); margin-bottom: var(--space-4); display: flex; align-items: center; gap: var(--space-2); }
        .orders-table { overflow-x: auto; }
        table { width: 100%; border-collapse: collapse; }
        th, td { padding: var(--space-3) var(--space-4); text-align: left; border-bottom: 1px solid var(--gray-100); }
        th { font-size: var(--font-size-sm); font-weight: 600; color: var(--gray-500); background: var(--gray-50); }
        td { font-size: var(--font-size-sm); }
        .status, .payment { padding: var(--space-1) var(--space-2); border-radius: var(--radius-sm); font-size: var(--font-size-xs); font-weight: 500; }
        .status.delivered { background: #d1fae5; color: #065f46; }
        .status.shipped { background: var(--accent-100); color: var(--accent-700); }
        .status.processing { background: #fef3c7; color: #92400e; }
        .payment.paid { background: #d1fae5; color: #065f46; }
        .payment.pending { background: #fef3c7; color: #92400e; }
        .icon-btn { width: 32px; height: 32px; border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; color: var(--gray-500); }
        .icon-btn:hover { background: var(--gray-100); color: var(--gray-700); }
      `}</style>
    </div>
  );
};

export default FarmerOrders;
