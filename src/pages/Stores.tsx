import React, { useState } from 'react';
import { MapPin, Phone, Clock, Plus } from 'lucide-react';

export default function Stores() {
  const [stores] = useState([
    {
      id: '1',
      name: 'Metro Supermarket',
      address: '123 Main St, City',
      contact: '+1 234-567-8900',
      lastVisit: '2024-03-10',
      status: 'active'
    },
    {
      id: '2',
      name: 'Fresh Foods Market',
      address: '456 Oak Ave, Town',
      contact: '+1 234-567-8901',
      lastVisit: '2024-03-08',
      status: 'active'
    }
  ]);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-500">Manage your store locations and details</p>
        <button className="btn-primary flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>Add Store</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {stores.map((store) => (
          <div key={store.id} className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-4">{store.name}</h3>
            <div className="space-y-2 text-gray-600">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>{store.address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>{store.contact}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Last visit: {store.lastVisit}</span>
              </div>
            </div>
            <div className="mt-4 flex space-x-2">
              <button className="btn-secondary flex-1">Edit</button>
              <button className="btn-primary flex-1">Schedule Visit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}