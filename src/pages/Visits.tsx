import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Plus, X } from 'lucide-react';
import { format } from 'date-fns';

export default function Visits() {
  const [showNewVisit, setShowNewVisit] = useState(false);
  const [visits] = useState([
    {
      id: '1',
      store: 'Metro Supermarket',
      date: '2024-03-15',
      time: '09:00',
      status: 'planned',
      tasks: ['Inventory check', 'Display setup']
    },
    {
      id: '2',
      store: 'Fresh Foods Market',
      date: '2024-03-15',
      time: '14:00',
      status: 'planned',
      tasks: ['Promotion setup', 'Order collection']
    }
  ]);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-500">Schedule and manage your store visits</p>
        <button 
          className="btn-primary flex items-center space-x-2"
          onClick={() => setShowNewVisit(true)}
        >
          <Plus className="w-4 h-4" />
          <span>Schedule Visit</span>
        </button>
      </div>

      <div className="space-y-4">
        {visits.map((visit) => (
          <div key={visit.id} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold">{visit.store}</h3>
                <div className="flex items-center space-x-4 mt-2 text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{format(new Date(visit.date), 'MMM d, yyyy')}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{visit.time}</span>
                  </div>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="btn-secondary">Edit</button>
                <button className="btn-primary bg-red-600 hover:bg-red-700">Cancel</button>
              </div>
            </div>
            <div className="mt-4">
              <h4 className="font-medium mb-2">Tasks:</h4>
              <ul className="list-disc list-inside text-gray-600">
                {visit.tasks.map((task, index) => (
                  <li key={index}>{task}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {showNewVisit && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Schedule New Visit</h2>
              <button onClick={() => setShowNewVisit(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Store</label>
                <select className="input-field">
                  <option>Metro Supermarket</option>
                  <option>Fresh Foods Market</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Date</label>
                <input type="date" className="input-field" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Time</label>
                <input type="time" className="input-field" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Tasks</label>
                <textarea className="input-field" rows={3} placeholder="Enter tasks..."></textarea>
              </div>
              <div className="flex space-x-2">
                <button type="button" className="btn-secondary flex-1" onClick={() => setShowNewVisit(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn-primary flex-1">
                  Schedule
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}