import React from 'react';
import { CheckSquare, Square, MoreVertical } from 'lucide-react';

export default function TaskList() {
  const tasks = [
    {
      id: 1,
      title: "Check promotional display at Metro",
      completed: true,
      priority: "high"
    },
    {
      id: 2,
      title: "Update inventory counts at Fresh Foods",
      completed: false,
      priority: "medium"
    },
    {
      id: 3,
      title: "Submit weekly sales report",
      completed: false,
      priority: "high"
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Tasks</h2>
        <button className="text-blue-600 text-sm font-medium">Add Task</button>
      </div>
      
      <div className="space-y-2">
        {tasks.map((task) => (
          <div key={task.id} className="flex items-center p-3 rounded-lg hover:bg-gray-50">
            <button className="mr-3">
              {task.completed ? (
                <CheckSquare className="w-5 h-5 text-green-600" />
              ) : (
                <Square className="w-5 h-5 text-gray-400" />
              )}
            </button>
            
            <span className={`flex-1 ${task.completed ? 'line-through text-gray-400' : ''}`}>
              {task.title}
            </span>
            
            <div className={`px-2 py-1 rounded-full text-xs mr-2 ${
              task.priority === 'high' 
                ? 'bg-red-100 text-red-600' 
                : 'bg-yellow-100 text-yellow-600'
            }`}>
              {task.priority}
            </div>
            
            <button className="text-gray-400 hover:text-gray-600">
              <MoreVertical className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}