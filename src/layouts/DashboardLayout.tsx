import { Outlet, Navigate } from 'react-router-dom';
import Sidebar from '../components/dashboard/Sidebar';
import { useAuth } from '../context/AuthContext';

const DashboardLayout = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="dashboard-main">
        <div className="dashboard-content">
          <Outlet />
        </div>
      </main>

      <style>{`
        .dashboard-layout { display: flex; min-height: 100vh; background: var(--gray-50); }
        .dashboard-main { flex: 1; margin-left: 260px; }
        .dashboard-content { padding: var(--space-8); max-width: 1400px; }
        @media (max-width: 1024px) {
          .dashboard-main { margin-left: 0; }
        }
      `}</style>
    </div>
  );
};

export default DashboardLayout;
