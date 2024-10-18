import React from 'react';
import { Play, Pause } from 'lucide-react';

const Meditation: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Guided Meditation & Relaxation</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">5-Minute Breathing Exercise</h3>
          <p className="mb-4">A quick breathing technique to calm your mind.</p>
          <div className="flex items-center justify-center bg-gray-200 h-40 rounded">
            <Play size={48} className="text-blue-500 cursor-pointer" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">15-Minute Body Scan</h3>
          <p className="mb-4">Relax your body and mind with this guided meditation.</p>
          <div className="flex items-center justify-center bg-gray-200 h-40 rounded">
            <Pause size={48} className="text-blue-500 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meditation;