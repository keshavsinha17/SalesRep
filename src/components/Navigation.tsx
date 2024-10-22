import React from 'react';
import { Home, Store, ShoppingCart, BarChart2, Calendar } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 md:left-0 md:top-0 md:w-64 md:h-screen md:border-r">
      <div className="flex flex-row md:flex-col h-full">
        <div className="hidden md:flex items-center p-4 border-b">
          <h1 className="text-xl font-bold text-blue-600">RetailExec Pro</h1>
        </div>
        
        <div className="flex flex-row md:flex-col justify-around md:justify-start w-full p-2 md:p-4">
          <NavItem icon={<Home />} to="/" label="Dashboard" />
          <NavItem icon={<Store />} to="/stores" label="Stores" />
          <NavItem icon={<Calendar />} to="/visits" label="Visits" />
          <NavItem icon={<ShoppingCart />} to="/orders" label="Orders" />
          <NavItem icon={<BarChart2 />} to="/analytics" label="Analytics" />
        </div>
      </div>
    </nav>
  );
}

function NavItem({ icon, to, label }: { icon: React.ReactNode; to: string; label: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `
        flex items-center space-x-2 p-2 rounded-lg w-full mb-1
        ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'}
      `}
    >
      {icon}
      <span className="hidden md:inline">{label}</span>
    </NavLink>
  );
}