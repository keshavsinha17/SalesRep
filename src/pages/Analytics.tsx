import React from 'react';
import { BarChart2, TrendingUp, ShoppingCart, Store } from 'lucide-react';

export default function Analytics() {
  return (
    <div>
      <div className="mb-6">
        <p className="text-gray-500">View performance metrics and insights</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Sales Overview</h3>
            <select className="input-field w-32">
              <option>This Week</option>
              <option>This Month</option>
              <option>This Year</option>
            </select>
          </div>
          <div className="h-64 flex items-center justify-center border rounded">
            <BarChart2 className="w-12 h-12 text-gray-300" />
            <span className="ml-2 text-gray-500">Sales Chart</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Visit Completion Rate</h3>
            <select className="input-field w-32">
              <option>This Week</option>
              <option>This Month</option>
              <option>This Year</option>
            </select>
          </div>
          <div className="h-64 flex items-center justify-center border rounded">
            <TrendingUp className="w-12 h-12 text-gray-300" />
            <span className="ml-2 text-gray-500">Completion Chart</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Top Performing Stores</h3>
          </div>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                <div className="flex items-center space-x-2">
                  <Store className="w-5 h-5 text-gray-400" />
                  <span>Store {i}</span>
                </div>
                <span className="text-green-600">+{Math.floor(Math.random() * 100)}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Recent Orders</h3>
          </div>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                <div className="flex items-center space-x-2">
                  <ShoppingCart className="w-5 h-5 text-gray-400" />
                  <span>Order #{1000 + i}</span>
                </div>
                <span className="text-gray-600">${(Math.random() * 1000).toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}