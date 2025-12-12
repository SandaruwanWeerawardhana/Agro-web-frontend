import { useState } from 'react';
import { Plus, Edit2, Trash2, Eye, ShoppingCart } from 'lucide-react';

const FarmerMarketplace = () => {
  const [showModal, setShowModal] = useState(false);
  const [listings] = useState([
    { id: 1, crop: 'Rice (Samba)', quantity: '100 kg', price: 'Rs. 120/kg', quality: 'Premium', status: 'Active', views: 45 },
    { id: 2, crop: 'Tomatoes', quantity: '50 kg', price: 'Rs. 80/kg', quality: 'Grade A', status: 'Active', views: 32 },
    { id: 3, crop: 'Green Chili', quantity: '25 kg', price: 'Rs. 200/kg', quality: 'Fresh', status: 'Sold', views: 28 },
  ]);

  return (
    <div className="marketplace-page">
      <div className="page-header">
        <div>
          <h1>Marketplace</h1>
          <p>List and manage your crops for sale</p>
        </div>
        <button className="btn btn-primary" onClick={() => setShowModal(true)}>
          <Plus size={18} /> Add Listing
        </button>
      </div>

      <div className="stats-row">
        <div className="stat-box"><span className="stat-num">3</span><span>Total Listings</span></div>
        <div className="stat-box"><span className="stat-num">2</span><span>Active</span></div>
        <div className="stat-box"><span className="stat-num">1</span><span>Sold</span></div>
        <div className="stat-box"><span className="stat-num">105</span><span>Total Views</span></div>
      </div>

      <div className="card">
        <h3><ShoppingCart size={20} /> Your Listings</h3>
        <div className="listings-table">
          <table>
            <thead>
              <tr><th>Crop</th><th>Quantity</th><th>Price</th><th>Quality</th><th>Status</th><th>Views</th><th>Actions</th></tr>
            </thead>
            <tbody>
              {listings.map((item) => (
                <tr key={item.id}>
                  <td><strong>{item.crop}</strong></td>
                  <td>{item.quantity}</td>
                  <td>{item.price}</td>
                  <td><span className="quality-badge">{item.quality}</span></td>
                  <td><span className={`status-badge ${item.status.toLowerCase()}`}>{item.status}</span></td>
                  <td><Eye size={14} /> {item.views}</td>
                  <td>
                    <div className="action-btns">
                      <button className="icon-btn"><Edit2 size={16} /></button>
                      <button className="icon-btn danger"><Trash2 size={16} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>Add New Listing</h3>
            <form>
              <div className="form-group"><label className="form-label">Crop Name</label><input className="form-input" placeholder="e.g., Rice (Samba)" /></div>
              <div className="form-row">
                <div className="form-group"><label className="form-label">Quantity</label><input className="form-input" placeholder="e.g., 100 kg" /></div>
                <div className="form-group"><label className="form-label">Price per unit</label><input className="form-input" placeholder="e.g., Rs. 120/kg" /></div>
              </div>
              <div className="form-group"><label className="form-label">Quality Grade</label><select className="form-input form-select"><option>Premium</option><option>Grade A</option><option>Grade B</option><option>Standard</option></select></div>
              <div className="form-group"><label className="form-label">Description</label><textarea className="form-input form-textarea" placeholder="Describe your produce..."></textarea></div>
              <div className="modal-actions">
                <button type="button" className="btn btn-outline" onClick={() => setShowModal(false)}>Cancel</button>
                <button type="submit" className="btn btn-primary">Add Listing</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style>{`
        .page-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: var(--space-8); flex-wrap: wrap; gap: var(--space-4); }
        .page-header h1 { font-size: var(--font-size-3xl); margin-bottom: var(--space-1); }
        .page-header p { color: var(--gray-500); margin: 0; }
        .stats-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--space-4); margin-bottom: var(--space-6); }
        .stat-box { background: white; padding: var(--space-4); border-radius: var(--radius-lg); box-shadow: var(--shadow-sm); text-align: center; }
        .stat-num { display: block; font-size: var(--font-size-2xl); font-weight: 700; color: var(--primary-600); }
        .stat-box span:last-child { font-size: var(--font-size-sm); color: var(--gray-500); }
        .card { background: white; padding: var(--space-6); border-radius: var(--radius-xl); box-shadow: var(--shadow-md); }
        .card h3 { font-size: var(--font-size-lg); margin-bottom: var(--space-4); display: flex; align-items: center; gap: var(--space-2); }
        .listings-table { overflow-x: auto; }
        table { width: 100%; border-collapse: collapse; }
        th, td { padding: var(--space-3) var(--space-4); text-align: left; border-bottom: 1px solid var(--gray-100); }
        th { font-size: var(--font-size-sm); font-weight: 600; color: var(--gray-500); background: var(--gray-50); }
        td { font-size: var(--font-size-sm); }
        .quality-badge { background: var(--accent-100); color: var(--accent-700); padding: var(--space-1) var(--space-2); border-radius: var(--radius-sm); font-size: var(--font-size-xs); font-weight: 500; }
        .status-badge { padding: var(--space-1) var(--space-2); border-radius: var(--radius-sm); font-size: var(--font-size-xs); font-weight: 500; }
        .status-badge.active { background: #d1fae5; color: #065f46; }
        .status-badge.sold { background: var(--gray-200); color: var(--gray-600); }
        .action-btns { display: flex; gap: var(--space-2); }
        .icon-btn { width: 32px; height: 32px; border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; color: var(--gray-500); transition: all var(--transition-base); }
        .icon-btn:hover { background: var(--gray-100); color: var(--gray-700); }
        .icon-btn.danger:hover { background: #fee2e2; color: #dc2626; }
        .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: var(--z-modal); padding: var(--space-4); }
        .modal { background: white; padding: var(--space-8); border-radius: var(--radius-xl); width: 100%; max-width: 500px; max-height: 90vh; overflow-y: auto; }
        .modal h3 { margin-bottom: var(--space-6); }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-4); }
        .modal-actions { display: flex; gap: var(--space-3); justify-content: flex-end; margin-top: var(--space-6); }
      `}</style>
    </div>
  );
};

export default FarmerMarketplace;
