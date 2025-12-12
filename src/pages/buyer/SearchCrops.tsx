import { useState } from 'react';
import { Search, Filter, Heart, ShoppingCart, MapPin, Star } from 'lucide-react';

const SearchCrops = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['All', 'Grains', 'Vegetables', 'Fruits', 'Spices'];

  const crops = [
    { id: 1, name: 'Organic Rice (Samba)', price: 'Rs. 150/kg', farmer: 'Green Valley Farm', location: 'Anuradhapura', rating: 4.8, available: '500 kg', image: '🌾' },
    { id: 2, name: 'Fresh Tomatoes', price: 'Rs. 80/kg', farmer: 'Hill Side Farm', location: 'Nuwara Eliya', rating: 4.5, available: '200 kg', image: '🍅' },
    { id: 3, name: 'Green Chili', price: 'Rs. 200/kg', farmer: 'Spice Garden', location: 'Matale', rating: 4.7, available: '100 kg', image: '🌶️' },
    { id: 4, name: 'Red Onions', price: 'Rs. 120/kg', farmer: 'Dry Zone Farms', location: 'Jaffna', rating: 4.6, available: '300 kg', image: '🧅' },
    { id: 5, name: 'Potatoes', price: 'Rs. 95/kg', farmer: 'Cool Climate Farm', location: 'Badulla', rating: 4.4, available: '400 kg', image: '🥔' },
    { id: 6, name: 'Carrots', price: 'Rs. 110/kg', farmer: 'Veggie World', location: 'Nuwara Eliya', rating: 4.5, available: '150 kg', image: '🥕' },
  ];

  const filteredCrops = crops.filter(c => 
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.farmer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="search-page">
      <div className="page-header">
        <h1>Search Crops</h1>
        <p>Browse and purchase fresh produce directly from farmers</p>
      </div>

      <div className="search-bar">
        <div className="search-input-wrapper">
          <Search size={20} />
          <input type="text" placeholder="Search crops, farmers..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="search-input" />
        </div>
        <button className="btn btn-outline"><Filter size={18} /> Filters</button>
      </div>

      <div className="categories">
        {categories.map((cat) => (
          <button key={cat} className={`category-btn ${selectedCategory === cat.toLowerCase() ? 'active' : ''}`} onClick={() => setSelectedCategory(cat.toLowerCase())}>
            {cat}
          </button>
        ))}
      </div>

      <div className="results-info">
        <span>Showing {filteredCrops.length} results</span>
      </div>

      <div className="crops-grid">
        {filteredCrops.map((crop) => (
          <div key={crop.id} className="crop-card">
            <div className="crop-image">{crop.image}</div>
            <button className="favorite-btn"><Heart size={18} /></button>
            <div className="crop-content">
              <h4>{crop.name}</h4>
              <p className="crop-farmer">{crop.farmer}</p>
              <div className="crop-meta">
                <span className="crop-location"><MapPin size={14} /> {crop.location}</span>
                <span className="crop-rating"><Star size={14} fill="currentColor" /> {crop.rating}</span>
              </div>
              <div className="crop-footer">
                <div className="crop-price">{crop.price}</div>
                <button className="btn btn-primary btn-sm"><ShoppingCart size={16} /> Add</button>
              </div>
              <span className="crop-available">{crop.available} available</span>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .page-header { margin-bottom: var(--space-6); }
        .page-header h1 { font-size: var(--font-size-3xl); margin-bottom: var(--space-1); }
        .page-header p { color: var(--gray-500); margin: 0; }
        .search-bar { display: flex; gap: var(--space-4); margin-bottom: var(--space-6); }
        .search-input-wrapper { flex: 1; position: relative; }
        .search-input-wrapper svg { position: absolute; left: var(--space-4); top: 50%; transform: translateY(-50%); color: var(--gray-400); }
        .search-input { width: 100%; padding: var(--space-3) var(--space-4) var(--space-3) var(--space-12); border: 2px solid var(--gray-200); border-radius: var(--radius-lg); font-size: var(--font-size-base); }
        .search-input:focus { outline: none; border-color: var(--primary-500); }
        .categories { display: flex; gap: var(--space-2); margin-bottom: var(--space-6); overflow-x: auto; }
        .category-btn { padding: var(--space-2) var(--space-4); border: 2px solid var(--gray-200); border-radius: var(--radius-full); font-weight: 500; color: var(--gray-600); white-space: nowrap; transition: all var(--transition-base); }
        .category-btn:hover { border-color: var(--primary-300); }
        .category-btn.active { border-color: var(--primary-500); background: var(--primary-50); color: var(--primary-600); }
        .results-info { margin-bottom: var(--space-4); font-size: var(--font-size-sm); color: var(--gray-500); }
        .crops-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: var(--space-6); }
        .crop-card { background: white; border-radius: var(--radius-xl); box-shadow: var(--shadow-md); overflow: hidden; position: relative; transition: all var(--transition-base); }
        .crop-card:hover { box-shadow: var(--shadow-xl); transform: translateY(-4px); }
        .crop-image { height: 120px; background: var(--gray-100); display: flex; align-items: center; justify-content: center; font-size: 48px; }
        .favorite-btn { position: absolute; top: var(--space-3); right: var(--space-3); width: 36px; height: 36px; background: white; border-radius: var(--radius-full); display: flex; align-items: center; justify-content: center; color: var(--gray-400); box-shadow: var(--shadow-sm); transition: all var(--transition-base); }
        .favorite-btn:hover { color: #ef4444; }
        .crop-content { padding: var(--space-4); }
        .crop-content h4 { font-size: var(--font-size-lg); margin-bottom: var(--space-1); }
        .crop-farmer { font-size: var(--font-size-sm); color: var(--gray-500); margin-bottom: var(--space-2); }
        .crop-meta { display: flex; gap: var(--space-4); margin-bottom: var(--space-3); font-size: var(--font-size-sm); color: var(--gray-500); }
        .crop-meta span { display: flex; align-items: center; gap: var(--space-1); }
        .crop-rating { color: #fbbf24; }
        .crop-footer { display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--space-2); }
        .crop-price { font-size: var(--font-size-xl); font-weight: 700; color: var(--primary-600); }
        .crop-available { font-size: var(--font-size-xs); color: var(--gray-400); }
      `}</style>
    </div>
  );
};

export default SearchCrops;
