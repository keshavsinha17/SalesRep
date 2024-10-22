import React from 'react';
import { MapPin, Clock, CheckCircle } from 'lucide-react';

export default function VisitSchedule() {
  const visits = [
    {
      id: 1,
      store: "Metro Supermarket",
      time: "9:00 AM",
      address: "123 Main St",
      status: "completed"
    },
    {
      id: 2,
      store: "Fresh Foods Market",
      time: "11:30 AM",
      address: "456 Oak Ave",
      status: "in-progress"
    },
    {
      id: 3,
      store: "Super Save",
      time: "2:00 PM",
      address: "789 Pine Rd",
      status: "planned"
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Today's Schedule</h2>
        <button className="text-blue-600 text-sm font-medium">View All</button>
      </div>
      
      <div className="space-y-4">
        {visits.map((visit) => (
          <div key={visit.id} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50">
            <div className={`p-2 rounded-full ${
              visit.status === 'completed' ? 'bg-green-100' :
              visit.status === 'in-progress' ? 'bg-blue-100' : 'bg-gray-100'
            }`}>
              <CheckCircle className={`w-5 h-5 ${
                visit.status === 'completed' ? 'text-green-600' :
                visit.status === 'in-progress' ? 'text-blue-600' : 'text-gray-600'
              }`} />
            </div>
            
            <div className="flex-1">
              <h3 className="font-medium">{visit.store}</h3>
              <div className="flex items-center space-x-4 mt-1 text-sm text-gray-500">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {visit.time}
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {visit.address}
                </div>
              </div>
            </div>
            
            <button className="px-3 py-1 text-sm rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100">
              Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}