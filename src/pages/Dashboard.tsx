import React from 'react';
import DashboardStats from '../components/DashboardStats';
import VisitSchedule from '../components/VisitSchedule';
import TaskList from '../components/TaskList';

export default function Dashboard() {
  return (
    <div>
      <p className="text-gray-500 mb-6">Welcome back! Here's what's happening today.</p>
      <DashboardStats />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <VisitSchedule />
        <TaskList />
      </div>
    </div>
  );
}