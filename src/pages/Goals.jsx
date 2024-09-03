import React, { useState } from 'react';

const Goals = () => {
  const [goals, setGoals] = useState([]);

  const addGoal = (goal) => {
    setGoals([...goals, goal]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6">Goal Tracker</h1>
        <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Your Goals</h2>
          <ul className="space-y-4">
            {goals.map((goal, index) => (
              <li key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-sm">
                <span className="text-lg">{goal}</span>
              </li>
            ))}
          </ul>
          <button
            onClick={() => addGoal(prompt('Enter a new goal:'))}
            className="mt-4 w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
          >
            Add New Goal
          </button>
        </div>
      </div>
    </div>
  );
};

export default Goals;
