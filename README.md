# Agro Platform - Agricultural Management System

A comprehensive agricultural platform connecting farmers, buyers, and suppliers in a unified ecosystem. Built with React, TypeScript, Vite, and Tailwind CSS.

## 🌟 Features

### Multi-Role Authentication
- **Farmers**: Manage crops, monitor land analysis, access weather data
- **Buyers**: Browse products, place orders, track purchases
- **Suppliers**: Manage inventory, fulfill orders, track sales

### Core Functionalities
- 🌾 **Crop Management** - Track planting, growth, and harvest cycles
- 📊 **Land & Crop Analysis** - Monitor soil health and crop performance
- 🛒 **Marketplace** - Buy and sell agricultural products
- 📦 **Order Management** - Complete order lifecycle tracking
- 🌤️ **Weather Integration** - Real-time weather data for farming decisions
- 💰 **Financial Tracking** - Sales, purchases, and revenue analytics
- 👥 **User Profiles** - Customizable profiles for each role

## 🏗️ Project Structure

```
agro/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images, icons, fonts
│   ├── components/      # Reusable React components
│   │   ├── common/      # Shared components (Navbar, Footer)
│   │   └── dashboard/   # Dashboard-specific components (Sidebar)
│   ├── context/         # React Context (AuthContext)
│   ├── layouts/         # Layout components
│   │   ├── PublicLayout.tsx
│   │   └── DashboardLayout.tsx
│   ├── pages/           # Page components
│   │   ├── public/      # Public pages (Home, Login, Register)
│   │   ├── farmer/      # Farmer dashboard pages
│   │   ├── buyer/       # Buyer dashboard pages
│   │   └── supplier/    # Supplier dashboard pages
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles with Tailwind
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
└── package.json         # Project dependencies
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd agro
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Language**: TypeScript
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **State Management**: React Context API

## 📱 User Roles & Access

### Farmer
- Dashboard with crop overview
- Land and crop analysis tools
- Weather forecast integration
- Product listings management

### Buyer
- Browse agricultural products
- Place and track orders
- View order history
- Manage shopping cart

### Supplier
- Inventory management
- Order fulfillment
- Supply item catalog
- Sales analytics

## 🔐 Authentication

The application uses a context-based authentication system with local storage persistence. Mock authentication is currently implemented for development purposes.

## 🎨 Styling

The project uses Tailwind CSS 4 with PostCSS for utility-first styling. Custom components are built with reusable Tailwind classes.

---
