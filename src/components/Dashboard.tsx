import React from 'react';
import { BarChart2, BookOpen, Target } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Welcome back, User!</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2 flex items-center">
            <BarChart2 className="mr-2" /> Mood Overview
          </h3>
          <p>Your mood has been improving this week!</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2 flex items-center">
            <BookOpen className="mr-2" /> Journal Entries
          </h3>
          <p>You've written 3 entries this week.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2 flex items-center">
            <Target className="mr-2" /> Goals Progress
          </h3>
          <p>You're 70% towards your weekly meditation goal!</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;