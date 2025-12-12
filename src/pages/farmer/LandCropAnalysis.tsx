import { useState } from 'react';
import { Upload, Leaf, CloudSun, Droplets, ThermometerSun, MapPin, CheckCircle } from 'lucide-react';

const LandCropAnalysis = () => {
  const [uploaded, setUploaded] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);

  const handleUpload = () => {
    setAnalyzing(true);
    setTimeout(() => { setAnalyzing(false); setUploaded(true); }, 2000);
  };

  const suggestions = [
    { icon: Leaf, title: 'Soil Type', value: 'Red Loamy Soil', desc: 'Good for rice and vegetables' },
    { icon: Droplets, title: 'Irrigation', value: 'Moderate', desc: 'Drip irrigation recommended' },
    { icon: ThermometerSun, title: 'Temperature', value: '25-32°C', desc: 'Optimal for tropical crops' },
    { icon: CloudSun, title: 'Season', value: 'Maha Season', desc: 'Best for paddy cultivation' },
  ];

  const recommendedCrops = ['Rice', 'Tomato', 'Chili', 'Okra', 'Brinjal'];

  return (
    <div className="analysis-page">
      <div className="page-header">
        <h1>Land & Crop Analysis</h1>
        <p>Upload photos of your land for AI-powered analysis and recommendations</p>
      </div>

      <div className="analysis-grid">
        <div className="card upload-card">
          <h3>Upload Land Photo</h3>
          <div className={`upload-zone ${uploaded ? 'uploaded' : ''}`} onClick={handleUpload}>
            {analyzing ? (
              <div className="analyzing"><div className="spinner"></div><span>Analyzing...</span></div>
            ) : uploaded ? (
              <div className="upload-success"><CheckCircle size={48} /><span>Analysis Complete</span></div>
            ) : (
              <><Upload size={48} /><span>Click to upload or drag and drop</span><span className="upload-hint">JPG, PNG up to 10MB</span></>
            )}
          </div>
          <div className="upload-tips">
            <h4>Tips for better analysis:</h4>
            <ul>
              <li>Take photos in natural daylight</li>
              <li>Include soil samples if possible</li>
              <li>Capture multiple angles of the land</li>
            </ul>
          </div>
        </div>

        {uploaded && (
          <div className="results-section">
            <div className="card">
              <h3><MapPin size={20} /> Land Analysis Results</h3>
              <div className="suggestions-grid">
                {suggestions.map((s, i) => (
                  <div key={i} className="suggestion-card">
                    <s.icon size={24} className="text-primary" />
                    <div>
                      <span className="sugg-title">{s.title}</span>
                      <span className="sugg-value">{s.value}</span>
                      <span className="sugg-desc">{s.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card">
              <h3><Leaf size={20} /> Recommended Crops</h3>
              <div className="crops-tags">
                {recommendedCrops.map((crop, i) => (
                  <span key={i} className="crop-tag">{crop}</span>
                ))}
              </div>
              <p className="crops-note">Based on your soil type and current season, these crops have the highest yield potential.</p>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .page-header { margin-bottom: var(--space-8); }
        .page-header h1 { font-size: var(--font-size-3xl); margin-bottom: var(--space-1); }
        .page-header p { color: var(--gray-500); margin: 0; }
        .analysis-grid { display: grid; grid-template-columns: 1fr; gap: var(--space-6); }
        @media (min-width: 1024px) { .analysis-grid { grid-template-columns: 1fr 1.5fr; } }
        .card { background: white; padding: var(--space-6); border-radius: var(--radius-xl); box-shadow: var(--shadow-md); }
        .card h3 { font-size: var(--font-size-lg); margin-bottom: var(--space-4); display: flex; align-items: center; gap: var(--space-2); }
        .upload-zone { border: 2px dashed var(--gray-300); border-radius: var(--radius-xl); padding: var(--space-12); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: var(--space-2); color: var(--gray-400); cursor: pointer; transition: all var(--transition-base); min-height: 200px; }
        .upload-zone:hover { border-color: var(--primary-400); background: var(--primary-50); }
        .upload-zone.uploaded { border-color: var(--success); background: #d1fae5; }
        .upload-hint { font-size: var(--font-size-sm); }
        .upload-success { color: var(--success); display: flex; flex-direction: column; align-items: center; gap: var(--space-2); }
        .analyzing { display: flex; flex-direction: column; align-items: center; gap: var(--space-3); color: var(--primary-600); }
        .spinner { width: 40px; height: 40px; border: 3px solid var(--gray-200); border-top-color: var(--primary-600); border-radius: var(--radius-full); animation: spin 1s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
        .upload-tips { margin-top: var(--space-6); padding-top: var(--space-4); border-top: 1px solid var(--gray-100); }
        .upload-tips h4 { font-size: var(--font-size-sm); margin-bottom: var(--space-2); }
        .upload-tips ul { font-size: var(--font-size-sm); color: var(--gray-600); padding-left: var(--space-4); }
        .upload-tips li { margin-bottom: var(--space-1); list-style: disc; }
        .results-section { display: flex; flex-direction: column; gap: var(--space-6); }
        .suggestions-grid { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-4); }
        .suggestion-card { display: flex; gap: var(--space-3); padding: var(--space-4); background: var(--gray-50); border-radius: var(--radius-lg); }
        .sugg-title { display: block; font-size: var(--font-size-sm); color: var(--gray-500); }
        .sugg-value { display: block; font-weight: 600; color: var(--gray-900); }
        .sugg-desc { display: block; font-size: var(--font-size-xs); color: var(--gray-400); }
        .crops-tags { display: flex; flex-wrap: wrap; gap: var(--space-2); margin-bottom: var(--space-4); }
        .crop-tag { padding: var(--space-2) var(--space-4); background: var(--primary-100); color: var(--primary-700); border-radius: var(--radius-full); font-size: var(--font-size-sm); font-weight: 500; }
        .crops-note { font-size: var(--font-size-sm); color: var(--gray-500); margin: 0; }
      `}</style>
    </div>
  );
};

export default LandCropAnalysis;
