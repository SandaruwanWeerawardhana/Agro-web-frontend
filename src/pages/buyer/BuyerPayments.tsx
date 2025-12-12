import { CreditCard, Plus, Download, Check } from 'lucide-react';

const BuyerPayments = () => {
  const paymentMethods = [
    { id: 1, type: 'Visa', last4: '4242', expiry: '12/26', isDefault: true },
    { id: 2, type: 'Mastercard', last4: '8888', expiry: '08/25', isDefault: false },
  ];

  const transactions = [
    { id: 'TXN-001', order: 'ORD-101', amount: 'Rs. 8,800', method: 'Visa ****4242', date: 'Dec 10, 2024', status: 'Completed' },
    { id: 'TXN-002', order: 'ORD-100', amount: 'Rs. 2,000', method: 'Visa ****4242', date: 'Dec 8, 2024', status: 'Completed' },
    { id: 'TXN-003', order: 'ORD-099', amount: 'Rs. 3,600', method: 'Mastercard ****8888', date: 'Dec 5, 2024', status: 'Completed' },
    { id: 'TXN-004', order: 'ORD-098', amount: 'Rs. 4,750', method: 'Visa ****4242', date: 'Dec 1, 2024', status: 'Completed' },
  ];

  return (
    <div className="payments-page">
      <div className="page-header">
        <h1>Payments</h1>
        <p>Manage your payment methods and view transactions</p>
      </div>

      <div className="payments-grid">
        <div className="card">
          <div className="card-header">
            <h3><CreditCard size={20} /> Payment Methods</h3>
            <button className="btn btn-sm btn-outline"><Plus size={16} /> Add New</button>
          </div>
          <div className="methods-list">
            {paymentMethods.map((method) => (
              <div key={method.id} className={`method-card ${method.isDefault ? 'default' : ''}`}>
                <div className="method-icon">{method.type === 'Visa' ? '💳' : '💳'}</div>
                <div className="method-info">
                  <span className="method-name">{method.type} ****{method.last4}</span>
                  <span className="method-expiry">Expires {method.expiry}</span>
                </div>
                {method.isDefault && <span className="default-badge"><Check size={14} /> Default</span>}
              </div>
            ))}
          </div>
        </div>

        <div className="card summary-card">
          <h3>Payment Summary</h3>
          <div className="summary-stats">
            <div className="summary-item">
              <span>This Month</span>
              <strong>Rs. 19,150</strong>
            </div>
            <div className="summary-item">
              <span>Last Month</span>
              <strong>Rs. 12,500</strong>
            </div>
            <div className="summary-item">
              <span>All Time</span>
              <strong>Rs. 125,000</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h3>Transaction History</h3>
          <button className="btn btn-sm btn-outline"><Download size={16} /> Export</button>
        </div>
        <div className="transactions-table">
          <table>
            <thead>
              <tr><th>Transaction ID</th><th>Order</th><th>Amount</th><th>Method</th><th>Date</th><th>Status</th></tr>
            </thead>
            <tbody>
              {transactions.map((txn) => (
                <tr key={txn.id}>
                  <td><strong>{txn.id}</strong></td>
                  <td>{txn.order}</td>
                  <td>{txn.amount}</td>
                  <td>{txn.method}</td>
                  <td>{txn.date}</td>
                  <td><span className="status-badge">{txn.status}</span></td>
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
        .payments-grid { display: grid; grid-template-columns: 1fr; gap: var(--space-6); margin-bottom: var(--space-6); }
        @media (min-width: 1024px) { .payments-grid { grid-template-columns: 2fr 1fr; } }
        .card { background: white; padding: var(--space-6); border-radius: var(--radius-xl); box-shadow: var(--shadow-md); }
        .card-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--space-4); }
        .card h3 { font-size: var(--font-size-lg); display: flex; align-items: center; gap: var(--space-2); margin: 0; }
        .methods-list { display: flex; flex-direction: column; gap: var(--space-3); }
        .method-card { display: flex; align-items: center; gap: var(--space-4); padding: var(--space-4); border: 2px solid var(--gray-200); border-radius: var(--radius-lg); transition: all var(--transition-base); }
        .method-card.default { border-color: var(--primary-500); background: var(--primary-50); }
        .method-icon { font-size: var(--font-size-2xl); }
        .method-info { flex: 1; }
        .method-name { display: block; font-weight: 600; }
        .method-expiry { font-size: var(--font-size-sm); color: var(--gray-500); }
        .default-badge { display: flex; align-items: center; gap: var(--space-1); padding: var(--space-1) var(--space-2); background: var(--primary-100); color: var(--primary-700); border-radius: var(--radius-sm); font-size: var(--font-size-xs); font-weight: 500; }
        .summary-stats { display: flex; flex-direction: column; gap: var(--space-4); }
        .summary-item { display: flex; justify-content: space-between; padding: var(--space-3); background: var(--gray-50); border-radius: var(--radius-lg); }
        .summary-item span { color: var(--gray-500); }
        .summary-item strong { font-size: var(--font-size-lg); color: var(--gray-900); }
        .transactions-table { overflow-x: auto; }
        table { width: 100%; border-collapse: collapse; }
        th, td { padding: var(--space-3) var(--space-4); text-align: left; border-bottom: 1px solid var(--gray-100); }
        th { font-size: var(--font-size-sm); font-weight: 600; color: var(--gray-500); background: var(--gray-50); }
        td { font-size: var(--font-size-sm); }
        .status-badge { padding: var(--space-1) var(--space-2); background: #d1fae5; color: #065f46; border-radius: var(--radius-sm); font-size: var(--font-size-xs); font-weight: 500; }
      `}</style>
    </div>
  );
};

export default BuyerPayments;
