import { useState } from 'react';
import { Plus, Edit2, Trash2, Package, AlertTriangle } from 'lucide-react';

const SupplyItems = () => {
  const [showModal, setShowModal] = useState(false);

  const items = [
    { id: 1, name: 'NPK Fertilizer (10-26-26)', category: 'Fertilizer', price: 'Rs. 90/kg', stock: 500, unit: 'kg', status: 'In Stock' },
    { id: 2, name: 'Urea Fertilizer', category: 'Fertilizer', price: 'Rs. 65/kg', stock: 800, unit: 'kg', status: 'In Stock' },
    { id: 3, name: 'Rice Seeds BG 300', category: 'Seeds', price: 'Rs. 150/kg', stock: 50, unit: 'kg', status: 'Low Stock' },
    { id: 4, name: 'Organic Pesticide', category: 'Pesticide', price: 'Rs. 220/L', stock: 150, unit: 'L', status: 'In Stock' },
    { id: 5, name: 'Tomato Seeds Hybrid', category: 'Seeds', price: 'Rs. 450/pack', stock: 0, unit: 'pack', status: 'Out of Stock' },
  ];

  const categories = ['All', 'Fertilizers', 'Seeds', 'Pesticides', 'Equipment'];

  return (
    <div className="supply-items-page">
      <div className="page-header">
        <div>
          <h1>Supply Items</h1>
          <p>Manage your inventory of seeds, fertilizers, and equipment</p>
        </div>
        <button className="btn btn-primary" onClick={() => setShowModal(true)}>
          <Plus size={18} /> Add Product
        </button>
      </div>

      <div className="filters">
        {categories.map((cat) => (
          <button key={cat} className="filter-btn">{cat}</button>
        ))}
      </div>

      <div className="card">
        <h3><Package size={20} /> Inventory ({items.length} items)</h3>
        <div className="items-table">
          <table>
            <thead>
              <tr><th>Product</th><th>Category</th><th>Price</th><th>Stock</th><th>Status</th><th>Actions</th></tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td><strong>{item.name}</strong></td>
                  <td>{item.category}</td>
                  <td>{item.price}</td>
                  <td>{item.stock} {item.unit}</td>
                  <td>
                    <span className={`status ${item.status.toLowerCase().replace(' ', '-')}`}>
                      {item.status === 'Low Stock' && <AlertTriangle size={12} />}
                      {item.status}
                    </span>
                  </td>
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
            <h3>Add New Product</h3>
            <form>
              <div className="form-group"><label className="form-label">Product Name</label><input className="form-input" placeholder="e.g., NPK Fertilizer" /></div>
              <div className="form-row">
                <div className="form-group"><label className="form-label">Category</label><select className="form-input form-select"><option>Fertilizer</option><option>Seeds</option><option>Pesticide</option><option>Equipment</option></select></div>
                <div className="form-group"><label className="form-label">Unit</label><select className="form-input form-select"><option>kg</option><option>L</option><option>pack</option><option>piece</option></select></div>
              </div>
              <div className="form-row">
                <div className="form-group"><label className="form-label">Price per Unit</label><input className="form-input" placeholder="Rs. 0" /></div>
                <div className="form-group"><label className="form-label">Stock Quantity</label><input className="form-input" type="number" placeholder="0" /></div>
              </div>
              <div className="form-group"><label className="form-label">Description</label><textarea className="form-input form-textarea" placeholder="Product description..."></textarea></div>
              <div className="modal-actions">
                <button type="button" className="btn btn-outline" onClick={() => setShowModal(false)}>Cancel</button>
                <button type="submit" className="btn btn-primary">Add Product</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style>{`
        .page-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: var(--space-6); flex-wrap: wrap; gap: var(--space-4); }
        .page-header h1 { font-size: var(--font-size-3xl); margin-bottom: var(--space-1); }
        .page-header p { color: var(--gray-500); margin: 0; }
        .filters { display: flex; gap: var(--space-2); margin-bottom: var(--space-6); overflow-x: auto; }
        .filter-btn { padding: var(--space-2) var(--space-4); border: 2px solid var(--gray-200); border-radius: var(--radius-full); font-weight: 500; color: var(--gray-600); white-space: nowrap; }
        .filter-btn:hover, .filter-btn.active { border-color: var(--secondary-500); color: var(--secondary-600); }
        .card { background: white; padding: var(--space-6); border-radius: var(--radius-xl); box-shadow: var(--shadow-md); }
        .card h3 { font-size: var(--font-size-lg); margin-bottom: var(--space-4); display: flex; align-items: center; gap: var(--space-2); }
        .items-table { overflow-x: auto; }
        table { width: 100%; border-collapse: collapse; }
        th, td { padding: var(--space-3) var(--space-4); text-align: left; border-bottom: 1px solid var(--gray-100); }
        th { font-size: var(--font-size-sm); font-weight: 600; color: var(--gray-500); background: var(--gray-50); }
        .status { display: inline-flex; align-items: center; gap: var(--space-1); padding: var(--space-1) var(--space-2); border-radius: var(--radius-sm); font-size: var(--font-size-xs); font-weight: 500; }
        .status.in-stock { background: #d1fae5; color: #065f46; }
        .status.low-stock { background: #fef3c7; color: #d97706; }
        .status.out-of-stock { background: #fee2e2; color: #dc2626; }
        .action-btns { display: flex; gap: var(--space-2); }
        .icon-btn { width: 32px; height: 32px; border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; color: var(--gray-500); }
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

export default SupplyItems;
