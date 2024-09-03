import React, { useState } from 'react';

const Budget = () => {
  const [budget, setBudget] = useState(1000); // Example initial budget

  const handleBudgetChange = (e) => {
    setBudget(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6">Budget Manager</h1>
        <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Manage Budget</h2>
          <div className="flex items-center space-x-4">
            <span className="text-lg font-semibold">Current Budget:</span>
            <input
              type="number"
              value={budget}
              onChange={handleBudgetChange}
              className="p-2 border rounded-lg w-full"
            />
          </div>
          <p className="mt-4 text-gray-600">Your current budget is ${budget}</p>
        </div>
      </div>
    </div>
  );
};

export default Budget;
