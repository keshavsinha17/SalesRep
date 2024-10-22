import React from 'react';
import { TrendingUp, Package, Store, AlertCircle } from 'lucide-react';

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <StatCard
        icon={<TrendingUp className="text-green-500" />}
        title="Today's Sales"
        value="$12,456"
        trend="+8.2%"
        trendUp={true}
      />
      <StatCard
        icon={<Package className="text-blue-500" />}
        title="Orders"
        value="64"
        trend="+12"
        trendUp={true}
      />
      <StatCard
        icon={<Store className="text-purple-500" />}
        title="Stores Visited"
        value="8/12"
        trend="67%"
        trendUp={false}
      />
      <StatCard
        icon={<AlertCircle className="text-red-500" />}
        title="Stock Alerts"
        value="3"
        trend="-2"
        trendUp={true}
      />
    </div>
  );
}

function StatCard({ 
  icon, 
  title, 
  value, 
  trend, 
  trendUp 
}: { 
  icon: React.ReactNode; 
  title: string; 
  value: string; 
  trend: string; 
  trendUp: boolean; 
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 bg-gray-50 rounded-lg">{icon}</div>
        <span className={`text-sm ${trendUp ? 'text-green-500' : 'text-red-500'}`}>
          {trend}
        </span>
      </div>
      <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
      <p className="text-2xl font-semibold mt-1">{value}</p>
    </div>
  );
}