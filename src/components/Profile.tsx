import React from 'react';
import { User, Mail, Lock } from 'lucide-react';

const Profile: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex items-center mb-6">
          <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center">
            <User size={40} className="text-gray-600" />
          </div>
          <div className="ml-4">
            <h3 className="text-xl font-semibold">John Doe</h3>
            <p className="text-gray-600">Member since: January 2023</p>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <div className="flex items-center border rounded px-3 py-2">
            <Mail size={20} className="text-gray-500 mr-2" />
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="email"
              id="email"
              value="john.doe@example.com"
              readOnly
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <div className="flex items-center border rounded px-3 py-2">
            <Lock size={20} className="text-gray-500 mr-2" />
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="password"
              id="password"
              value="********"
              readOnly
            />
          </div>
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;