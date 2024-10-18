import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Heart, BarChart2, Headphones, BookOpen, Target, UserCircle } from 'lucide-react';
import Dashboard from './components/Dashboard';
import MoodTracker from './components/MoodTracker';
import Meditation from './components/Meditation';
import Resources from './components/Resources';
import Goals from './components/Goals';
import Profile from './components/Profile';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {isLoggedIn ? (
          <div className="flex">
            <nav className="bg-white w-64 min-h-screen p-4">
              <h1 className="text-2xl font-bold mb-8">MindWell</h1>
              <ul>
                <li className="mb-4">
                  <Link to="/" className="flex items-center text-gray-700 hover:text-blue-500">
                    <Heart className="mr-2" /> Dashboard
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/mood" className="flex items-center text-gray-700 hover:text-blue-500">
                    <BarChart2 className="mr-2" /> Mood Tracker
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/meditation" className="flex items-center text-gray-700 hover:text-blue-500">
                    <Headphones className="mr-2" /> Meditation
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/resources" className="flex items-center text-gray-700 hover:text-blue-500">
                    <BookOpen className="mr-2" /> Resources
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/goals" className="flex items-center text-gray-700 hover:text-blue-500">
                    <Target className="mr-2" /> Goals
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/profile" className="flex items-center text-gray-700 hover:text-blue-500">
                    <UserCircle className="mr-2" /> Profile
                  </Link>
                </li>
              </ul>
            </nav>
            <main className="flex-1 p-8">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/mood" element={<MoodTracker />} />
                <Route path="/meditation" element={<Meditation />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/goals" element={<Goals />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
            </main>
          </div>
        ) : (
          <div className="flex items-center justify-center h-screen">
            <button
              onClick={() => setIsLoggedIn(true)}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Log In
            </button>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;