import { Outlet } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const PublicLayout = () => {
  return (
    <div className="public-layout">
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />

      <style>{`
        .public-layout {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .main-content {
          flex: 1;
          padding-top: 72px; /* Navbar height */
        }
      `}</style>
    </div>
  );
};

export default PublicLayout;
