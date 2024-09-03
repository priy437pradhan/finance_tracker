import  { useState } from 'react';
import { FaWallet, FaDollarSign, FaEdit } from 'react-icons/fa';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';

const initialBudgets = [
  { id: 1, category: 'Groceries', limit: 300, spent: 150 },
  { id: 2, category: 'Entertainment', limit: 100, spent: 80 }
];

const BudgetManager = () => {
  const [budgets, setBudgets] = useState(initialBudgets);
  const [category, setCategory] = useState('');
  const [limit, setLimit] = useState('');

  const handleAddBudget = (e) => {
    e.preventDefault();
    const newBudget = {
      id: budgets.length + 1,
      category,
      limit: parseFloat(limit),
      spent: 0
    };
    setBudgets([...budgets, newBudget]);
    setCategory('');
    setLimit('');
  };

  const handleUpdateSpent = (id, amount) => {
    setBudgets(budgets.map(budget =>
      budget.id === id
        ? { ...budget, spent: budget.spent + amount }
        : budget
    ));
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Budget Manager</h2>

      <form onSubmit={handleAddBudget} className="mb-6 space-y-4">
        <div className="flex items-center border border-gray-300 rounded-lg p-2">
          <FaWallet className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border-none focus:ring-0"
            required
          />
        </div>

        <div className="flex items-center border border-gray-300 rounded-lg p-2">
          <FaDollarSign className="text-gray-500 mr-2" />
          <input
            type="number"
            placeholder="Limit"
            value={limit}
            onChange={(e) => setLimit(e.target.value)}
            className="w-full p-2 border-none focus:ring-0"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 focus:outline-none transition duration-200 ease-in-out"
        >
          Add Budget
        </button>
      </form>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        {budgets.map(budget => (
          <div
            key={budget.id}
            className={`p-4 rounded-lg shadow-lg ${budget.spent >= budget.limit ? 'bg-red-100' : 'bg-gray-100'}`}
          >
            <h3 className="text-lg font-semibold">{budget.category}</h3>
            <div className="flex items-center">
              <p className="text-gray-600">Limit: ${budget.limit}</p>
              <p className="ml-4 text-gray-600">Spent: ${budget.spent}</p>
            </div>
            <button
              onClick={() => handleUpdateSpent(budget.id, 50)} 
              className="mt-2 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 focus:outline-none transition duration-200 ease-in-out"
            >
              Add $50 Spent
            </button>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default BudgetManager;
