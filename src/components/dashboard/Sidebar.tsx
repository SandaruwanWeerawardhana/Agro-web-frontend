import { Link, useLocation } from "react-router-dom";
import {
  Leaf,
  LogOut,
  User,
  Home,
  BarChart3,
  Shield,
  ShoppingCart,
  FileText,
  Truck,
  Package,
  CreditCard,
  Search,
  Settings,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useAuthStore } from "../../store/authStore";
import type { UserRole } from "../../store/authStore";

interface NavItem {
  path: string;
  label: string;
  icon: LucideIcon;
}

const Sidebar = () => {
  const { user, logout } = useAuthStore();
  const location = useLocation();

  const getNavItems = (role: UserRole): NavItem[] => {
    switch (role) {
      case "farmer":
        return [
          { path: "/farmer/dashboard", label: "Dashboard", icon: Home },
          { path: "/farmer/profile", label: "Profile", icon: User },
          {
            path: "/farmer/crop-analysis",
            label: "Crop Analysis",
            icon: BarChart3,
          },
          {
            path: "/farmer/disease-detection",
            label: "Disease Detection",
            icon: Shield,
          },
          {
            path: "/farmer/marketplace",
            label: "Marketplace",
            icon: ShoppingCart,
          },
          { path: "/farmer/orders", label: "Orders", icon: Package },
          { path: "/farmer/reports", label: "Reports", icon: FileText },
        ];
      case "buyer":
        return [
          { path: "/buyer/dashboard", label: "Dashboard", icon: Home },
          { path: "/buyer/profile", label: "Profile", icon: User },
          { path: "/buyer/search", label: "Search Crops", icon: Search },
          { path: "/buyer/orders", label: "Orders", icon: Package },
          { path: "/buyer/payments", label: "Payments", icon: CreditCard },
        ];
      case "supplier":
        return [
          { path: "/supplier/dashboard", label: "Dashboard", icon: Home },
          { path: "/supplier/profile", label: "Profile", icon: User },
          { path: "/supplier/items", label: "Supply Items", icon: Truck },
          { path: "/supplier/orders", label: "Orders", icon: Package },
        ];
      default:
        return [];
    }
  };

  const navItems = user ? getNavItems(user.role) : [];
  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <Link to="/" className="sidebar-logo">
          <Leaf size={28} />
          <span>AGRO</span>
        </Link>
      </div>

      <div className="sidebar-user">
        <div className="user-avatar">
          {user?.name?.charAt(0).toUpperCase() || "U"}
        </div>
        <div className="user-info">
          <span className="user-name">{user?.name || "User"}</span>
          <span className="user-role">{user?.role}</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`nav-item ${isActive(item.path) ? "active" : ""}`}
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="sidebar-footer">
        <Link to={`/${user?.role}/settings`} className="nav-item">
          <Settings size={20} />
          <span>Settings</span>
        </Link>
        <button
          onClick={() => {
            logout();
            window.location.href = "/";
          }}
          className="nav-item logout"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>

      <style>{`
        .sidebar { width: 260px; height: 100vh; background: white; border-right: 1px solid var(--gray-200); display: flex; flex-direction: column; position: fixed; left: 0; top: 0; z-index: var(--z-fixed); }
        .sidebar-header { padding: var(--space-6); border-bottom: 1px solid var(--gray-100); }
        .sidebar-logo { display: flex; align-items: center; gap: var(--space-2); color: var(--primary-600); font-size: var(--font-size-xl); font-weight: 800; }
        .sidebar-user { display: flex; align-items: center; gap: var(--space-3); padding: var(--space-6); border-bottom: 1px solid var(--gray-100); }
        .user-avatar { width: 44px; height: 44px; background: linear-gradient(135deg, var(--primary-400), var(--primary-600)); border-radius: var(--radius-full); display: flex; align-items: center; justify-content: center; color: white; font-weight: 700; font-size: var(--font-size-lg); }
        .user-info { display: flex; flex-direction: column; }
        .user-name { font-weight: 600; color: var(--gray-900); }
        .user-role { font-size: var(--font-size-sm); color: var(--gray-500); text-transform: capitalize; }
        .sidebar-nav { flex: 1; padding: var(--space-4); overflow-y: auto; }
        .nav-item { display: flex; align-items: center; gap: var(--space-3); padding: var(--space-3) var(--space-4); border-radius: var(--radius-lg); color: var(--gray-600); font-weight: 500; transition: all var(--transition-base); cursor: pointer; }
        .nav-item:hover { background: var(--gray-100); color: var(--gray-900); }
        .nav-item.active { background: var(--primary-50); color: var(--primary-600); }
        .sidebar-footer { padding: var(--space-4); border-top: 1px solid var(--gray-100); }
        .nav-item.logout { color: var(--error); width: 100%; }
        .nav-item.logout:hover { background: #fee2e2; }
      `}</style>
    </aside>
  );
};

export default Sidebar;
