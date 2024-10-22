import React from 'react';
import { Bell, Search } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const getPageTitle = () => {
    switch (location.pathname) {
      case '/': return 'Dashboard';
      case '/stores': return 'Stores';
      case '/visits': return 'Store Visits';
      case '/orders': return 'Orders';
      case '/analytics': return 'Analytics';
      default: return 'Dashboard';
    }
  };

  return (
    <header className="bg-white border-b">
      <div className="flex items-center justify-between p-4">
        <div className="flex-1 max-w-xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="search"
              placeholder="Search stores, products..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500"
            />
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="relative p-2 text-gray-400 hover:text-gray-600">
            <Bell className="w-6 h-6" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </div>
      <div className="px-6 py-4">
        <h1 className="text-2xl font-bold text-gray-900">{getPageTitle()}</h1>
      </div>
    </header>
  );
}