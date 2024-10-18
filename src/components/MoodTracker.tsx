import React, { useState } from 'react';
import { Smile, Meh, Frown } from 'lucide-react';

const MoodTracker: React.FC = () => {
  const [mood, setMood] = useState<string | null>(null);

  const handleMoodSelect = (selectedMood: string) => {
    setMood(selectedMood);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Mood Tracker</h2>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">How are you feeling today?</h3>
        <div className="flex justify-around">
          <button
            onClick={() => handleMoodSelect('happy')}
            className={`p-4 rounded-full ${mood === 'happy' ? 'bg-green-200' : 'bg-gray-100'}`}
          >
            <Smile size={48} className="text-green-500" />
          </button>
          <button
            onClick={() => handleMoodSelect('neutral')}
            className={`p-4 rounded-full ${mood === 'neutral' ? 'bg-yellow-200' : 'bg-gray-100'}`}
          >
            <Meh size={48} className="text-yellow-500" />
          </button>
          <button
            onClick={() => handleMoodSelect('sad')}
            className={`p-4 rounded-full ${mood === 'sad' ? 'bg-red-200' : 'bg-gray-100'}`}
          >
            <Frown size={48} className="text-red-500" />
          </button>
        </div>
        {mood && (
          <div className="mt-4 text-center">
            <p>You're feeling {mood} today.</p>
            <textarea
              className="w-full mt-2 p-2 border rounded"
              placeholder="Want to add any notes about your mood?"
              rows={3}
            ></textarea>
            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Save</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MoodTracker;