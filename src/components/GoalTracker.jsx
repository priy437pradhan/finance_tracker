import React, { useState } from 'react';
import { FaBullseye, FaCheckCircle, FaEdit } from 'react-icons/fa';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';

const initialGoals = [
  { id: 1, title: 'Save for Vacation', targetAmount: 1500, currentAmount: 500, completed: false },
  { id: 2, title: 'Emergency Fund', targetAmount: 2000, currentAmount: 800, completed: false }
];

const GoalTracker = () => {
  const [goals, setGoals] = useState(initialGoals);
  const [newGoal, setNewGoal] = useState('');
  const [targetAmount, setTargetAmount] = useState('');

  const handleAddGoal = (e) => {
    e.preventDefault();
    const newGoalObj = {
      id: goals.length + 1,
      title: newGoal,
      targetAmount: parseFloat(targetAmount),
      currentAmount: 0,
      completed: false
    };
    setGoals([...goals, newGoalObj]);
    setNewGoal('');
    setTargetAmount('');
  };

  const handleUpdateGoal = (id, amount) => {
    setGoals(goals.map(goal =>
      goal.id === id
        ? { ...goal, currentAmount: goal.currentAmount + amount, completed: goal.currentAmount + amount >= goal.targetAmount }
        : goal
    ));
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Goal Tracker</h2>

      <form onSubmit={handleAddGoal} className="mb-6 space-y-4">
        <div className="flex items-center border border-gray-300 rounded-lg p-2">
          <FaBullseye className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Goal Title"
            value={newGoal}
            onChange={(e) => setNewGoal(e.target.value)}
            className="w-full p-2 border-none focus:ring-0"
            required
          />
        </div>

        <div className="flex items-center border border-gray-300 rounded-lg p-2">
          <FaBullseye className="text-gray-500 mr-2" />
          <input
            type="number"
            placeholder="Target Amount"
            value={targetAmount}
            onChange={(e) => setTargetAmount(e.target.value)}
            className="w-full p-2 border-none focus:ring-0"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 focus:outline-none transition duration-200 ease-in-out"
        >
          Add Goal
        </button>
      </form>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        {goals.map(goal => (
          <div
            key={goal.id}
            className={`p-4 rounded-lg shadow-lg ${goal.completed ? 'bg-green-100' : 'bg-gray-100'}`}
          >
            <h3 className="text-lg font-semibold">{goal.title}</h3>
            <div className="flex items-center">
              <p className="text-gray-600">Target: ${goal.targetAmount}</p>
              <p className="ml-4 text-gray-600">Current: ${goal.currentAmount}</p>
            </div>
            <button
              onClick={() => handleUpdateGoal(goal.id, 100)} // Example: Adding $100 to the goal
              className="mt-2 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 focus:outline-none transition duration-200 ease-in-out"
            >
              Add $100
            </button>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default GoalTracker;
