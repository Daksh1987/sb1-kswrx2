import React, { useState } from 'react';
import { PlusCircle, CheckCircle } from 'lucide-react';

const Goals: React.FC = () => {
  const [goals, setGoals] = useState([
    { id: 1, text: 'Meditate for 10 minutes daily', completed: false },
    { id: 2, text: 'Write in journal 3 times a week', completed: false },
    { id: 3, text: 'Exercise for 30 minutes, 5 days a week', completed: false },
  ]);

  const toggleGoal = (id: number) => {
    setGoals(goals.map(goal => 
      goal.id === id ? { ...goal, completed: !goal.completed } : goal
    ));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Goal Setting & Tracking</h2>
      <div className="bg-white p-6 rounded-lg shadow">
        <ul>
          {goals.map(goal => (
            <li key={goal.id} className="flex items-center mb-4">
              <button
                onClick={() => toggleGoal(goal.id)}
                className={`mr-2 ${goal.completed ? 'text-green-500' : 'text-gray-400'}`}
              >
                <CheckCircle size={24} />
              </button>
              <span className={goal.completed ? 'line-through text-gray-500' : ''}>
                {goal.text}
              </span>
            </li>
          ))}
        </ul>
        <button className="mt-4 flex items-center text-blue-500">
          <PlusCircle size={20} className="mr-2" />
          Add New Goal
        </button>
      </div>
    </div>
  );
};

export default Goals;