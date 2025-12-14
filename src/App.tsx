import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthStore } from "./store/authStore";

// Layouts
import PublicLayout from "./layouts/PublicLayout";
import DashboardLayout from "./layouts/DashboardLayout";

// Public Pages
import Home from "./pages/public/Home";
import About from "./pages/public/About";
import Services from "./pages/public/Services";
import Contact from "./pages/public/Contact";
import Login from "./pages/public/Login";
import Register from "./pages/public/Register";

// Farmer Pages
import FarmerDashboard from "./pages/farmer/FarmerDashboard";
import FarmerProfile from "./pages/farmer/FarmerProfile";
import LandCropAnalysis from "./pages/farmer/LandCropAnalysis";
import DiseaseDetection from "./pages/farmer/DiseaseDetection";
import FarmerMarketplace from "./pages/farmer/FarmerMarketplace";
import FarmerOrders from "./pages/farmer/FarmerOrders";
import FarmerReports from "./pages/farmer/FarmerReports";

// Buyer Pages
import BuyerDashboard from "./pages/buyer/BuyerDashboard";
import BuyerProfile from "./pages/buyer/BuyerProfile";
import SearchCrops from "./pages/buyer/SearchCrops";
import BuyerOrders from "./pages/buyer/BuyerOrders";
import BuyerPayments from "./pages/buyer/BuyerPayments";

// Supplier Pages
import SupplierDashboard from "./pages/supplier/SupplierDashboard";
import SupplierProfile from "./pages/supplier/SupplierProfile";
import SupplyItems from "./pages/supplier/SupplyItems";
import SupplierOrders from "./pages/supplier/SupplierOrders";

import "./index.css";

// Role-based redirect component
const RoleRedirect = () => {
  const { user, isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  switch (user?.role) {
    case "farmer":
      return <Navigate to="/farmer/dashboard" replace />;
    case "buyer":
      return <Navigate to="/buyer/dashboard" replace />;
    case "supplier":
      return <Navigate to="/supplier/dashboard" replace />;
    default:
      return <Navigate to="/login" replace />;
  }
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* Auth Routes (no layout) */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Role-based redirect */}
        <Route path="/dashboard" element={<RoleRedirect />} />

        {/* Farmer Dashboard Routes */}
        <Route path="/farmer" element={<DashboardLayout />}>
          <Route path="dashboard" element={<FarmerDashboard />} />
          <Route path="profile" element={<FarmerProfile />} />
          <Route path="crop-analysis" element={<LandCropAnalysis />} />
          <Route path="disease-detection" element={<DiseaseDetection />} />
          <Route path="marketplace" element={<FarmerMarketplace />} />
          <Route path="orders" element={<FarmerOrders />} />
          <Route path="reports" element={<FarmerReports />} />
          <Route index element={<Navigate to="dashboard" replace />} />
        </Route>

        {/* Buyer Dashboard Routes */}
        <Route path="/buyer" element={<DashboardLayout />}>
          <Route path="dashboard" element={<BuyerDashboard />} />
          <Route path="profile" element={<BuyerProfile />} />
          <Route path="search" element={<SearchCrops />} />
          <Route path="orders" element={<BuyerOrders />} />
          <Route path="payments" element={<BuyerPayments />} />
          <Route index element={<Navigate to="dashboard" replace />} />
        </Route>

        {/* Supplier Dashboard Routes */}
        <Route path="/supplier" element={<DashboardLayout />}>
          <Route path="dashboard" element={<SupplierDashboard />} />
          <Route path="profile" element={<SupplierProfile />} />
          <Route path="items" element={<SupplyItems />} />
          <Route path="orders" element={<SupplierOrders />} />
          <Route index element={<Navigate to="dashboard" replace />} />
        </Route>

        {/* Catch all - redirect to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
