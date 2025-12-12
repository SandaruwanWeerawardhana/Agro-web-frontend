import { useState } from 'react';
import { Upload, Shield, AlertTriangle, CheckCircle, Clock, Leaf, Bug } from 'lucide-react';

const DiseaseDetection = () => {
  const [uploaded, setUploaded] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);

  const handleUpload = () => {
    setAnalyzing(true);
    setTimeout(() => { setAnalyzing(false); setUploaded(true); }, 2500);
  };

  const detectionResult = {
    disease: 'Bacterial Leaf Blight',
    confidence: 94,
    severity: 'Moderate',
    crop: 'Rice',
  };

  const treatments = [
    'Apply copper-based bactericides',
    'Remove and destroy infected leaves',
    'Improve field drainage',
    'Avoid overhead irrigation',
  ];

  const history = [
    { date: 'Dec 10, 2024', crop: 'Rice', disease: 'Leaf Blight', status: 'Treated' },
    { date: 'Nov 28, 2024', crop: 'Tomato', disease: 'None Detected', status: 'Healthy' },
    { date: 'Nov 15, 2024', crop: 'Chili', disease: 'Anthracnose', status: 'Treated' },
  ];

  return (
    <div className="detection-page">
      <div className="page-header">
        <h1>Disease Detection</h1>
        <p>Upload crop photos for AI-powered disease detection and treatment recommendations</p>
      </div>

      <div className="detection-grid">
        <div className="card upload-card">
          <h3><Shield size={20} /> Upload Crop Photo</h3>
          <div className={`upload-zone ${uploaded ? 'uploaded' : ''}`} onClick={handleUpload}>
            {analyzing ? (
              <div className="analyzing"><div className="spinner"></div><span>Analyzing for diseases...</span></div>
            ) : uploaded ? (
              <div className="upload-success"><CheckCircle size={48} /><span>Detection Complete</span></div>
            ) : (
              <><Upload size={48} /><span>Click or drag photo of affected crop</span><span className="upload-hint">Clear close-up photos work best</span></>
            )}
          </div>
        </div>

        {uploaded && (
          <div className="card result-card">
            <h3><AlertTriangle size={20} className="text-warning" /> Detection Results</h3>
            <div className="result-header">
              <div className="result-badge warning"><Bug size={20} /> Disease Detected</div>
            </div>
            <div className="result-details">
              <div className="detail-row">
                <span className="detail-label">Disease:</span>
                <span className="detail-value">{detectionResult.disease}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Confidence:</span>
                <span className="detail-value">{detectionResult.confidence}%</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Severity:</span>
                <span className={`severity ${detectionResult.severity.toLowerCase()}`}>{detectionResult.severity}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Crop:</span>
                <span className="detail-value">{detectionResult.crop}</span>
              </div>
            </div>

            <h4>Recommended Treatments</h4>
            <ul className="treatment-list">
              {treatments.map((t, i) => <li key={i}><CheckCircle size={16} /> {t}</li>)}
            </ul>
          </div>
        )}

        <div className="card history-card">
          <h3><Clock size={20} /> Scan History</h3>
          <div className="history-list">
            {history.map((h, i) => (
              <div key={i} className="history-item">
                <div className="history-icon"><Leaf size={18} /></div>
                <div className="history-info">
                  <span className="history-crop">{h.crop}</span>
                  <span className="history-disease">{h.disease}</span>
                </div>
                <div className="history-meta">
                  <span className={`status ${h.status.toLowerCase()}`}>{h.status}</span>
                  <span className="history-date">{h.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .page-header { margin-bottom: var(--space-8); }
        .page-header h1 { font-size: var(--font-size-3xl); margin-bottom: var(--space-1); }
        .page-header p { color: var(--gray-500); margin: 0; }
        .detection-grid { display: grid; grid-template-columns: 1fr; gap: var(--space-6); }
        @media (min-width: 1024px) { .detection-grid { grid-template-columns: 1fr 1fr; } }
        .card { background: white; padding: var(--space-6); border-radius: var(--radius-xl); box-shadow: var(--shadow-md); }
        .card h3 { font-size: var(--font-size-lg); margin-bottom: var(--space-4); display: flex; align-items: center; gap: var(--space-2); }
        .card h4 { font-size: var(--font-size-base); margin: var(--space-6) 0 var(--space-3); }
        .upload-zone { border: 2px dashed var(--gray-300); border-radius: var(--radius-xl); padding: var(--space-10); display: flex; flex-direction: column; align-items: center; gap: var(--space-2); color: var(--gray-400); cursor: pointer; transition: all var(--transition-base); }
        .upload-zone:hover { border-color: var(--primary-400); background: var(--primary-50); }
        .upload-zone.uploaded { border-color: var(--success); background: #d1fae5; }
        .upload-hint { font-size: var(--font-size-sm); }
        .upload-success { color: var(--success); display: flex; flex-direction: column; align-items: center; gap: var(--space-2); }
        .analyzing { display: flex; flex-direction: column; align-items: center; gap: var(--space-3); color: var(--primary-600); }
        .spinner { width: 40px; height: 40px; border: 3px solid var(--gray-200); border-top-color: var(--primary-600); border-radius: var(--radius-full); animation: spin 1s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
        .result-badge { display: inline-flex; align-items: center; gap: var(--space-2); padding: var(--space-2) var(--space-4); border-radius: var(--radius-full); font-weight: 600; font-size: var(--font-size-sm); }
        .result-badge.warning { background: #fef3c7; color: #92400e; }
        .result-details { background: var(--gray-50); padding: var(--space-4); border-radius: var(--radius-lg); margin-top: var(--space-4); }
        .detail-row { display: flex; justify-content: space-between; padding: var(--space-2) 0; border-bottom: 1px solid var(--gray-200); }
        .detail-row:last-child { border: none; }
        .detail-label { color: var(--gray-500); }
        .detail-value { font-weight: 600; }
        .severity { padding: var(--space-1) var(--space-2); border-radius: var(--radius-sm); font-size: var(--font-size-sm); font-weight: 500; }
        .severity.moderate { background: #fef3c7; color: #92400e; }
        .treatment-list { display: flex; flex-direction: column; gap: var(--space-2); }
        .treatment-list li { display: flex; align-items: center; gap: var(--space-2); font-size: var(--font-size-sm); color: var(--gray-700); }
        .treatment-list li svg { color: var(--success); flex-shrink: 0; }
        .history-list { display: flex; flex-direction: column; gap: var(--space-3); }
        .history-item { display: flex; align-items: center; gap: var(--space-3); padding: var(--space-3); background: var(--gray-50); border-radius: var(--radius-lg); }
        .history-icon { width: 40px; height: 40px; background: var(--primary-100); border-radius: var(--radius-lg); display: flex; align-items: center; justify-content: center; color: var(--primary-600); }
        .history-info { flex: 1; }
        .history-crop { display: block; font-weight: 600; }
        .history-disease { font-size: var(--font-size-sm); color: var(--gray-500); }
        .history-meta { text-align: right; }
        .status { display: block; font-size: var(--font-size-xs); font-weight: 500; padding: var(--space-1) var(--space-2); border-radius: var(--radius-sm); }
        .status.treated { background: var(--primary-100); color: var(--primary-700); }
        .status.healthy { background: #d1fae5; color: #065f46; }
        .history-date { font-size: var(--font-size-xs); color: var(--gray-400); }
      `}</style>
    </div>
  );
};

export default DiseaseDetection;
