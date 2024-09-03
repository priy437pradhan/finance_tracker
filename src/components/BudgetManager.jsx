import { useState } from 'react';
import { FaWallet, FaDollarSign, FaEdit, FaTrashAlt } from 'react-icons/fa';
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
  const [editingBudget, setEditingBudget] = useState(null);

  const handleAddOrUpdateBudget = (e) => {
    e.preventDefault();
    if (category.trim() === '' || isNaN(limit) || parseFloat(limit) <= 0) {
      alert('Please provide valid category and limit.');
      return;
    }
    if (editingBudget) {
      setBudgets(
        budgets.map((budget) =>
          budget.id === editingBudget.id
            ? { ...budget, category, limit: parseFloat(limit) }
            : budget
        )
      );
      setEditingBudget(null);
    } else {
      const newBudget = {
        id: budgets.length + 1,
        category,
        limit: parseFloat(limit),
        spent: 0
      };
      setBudgets([...budgets, newBudget]);
    }
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

  const handleEdit = (budget) => {
    setCategory(budget.category);
    setLimit(budget.limit);
    setEditingBudget(budget);
  };

  const handleRemove = (id) => {
    if (window.confirm('Are you sure you want to remove this budget?')) {
      setBudgets(budgets.filter((budget) => budget.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-3xl font-bold mb-4">{editingBudget ? 'Edit Budget' : 'Budget Manager'}</h2>

          <form onSubmit={handleAddOrUpdateBudget} className="mb-6 space-y-4">
            <div className="flex flex-col md:flex-row items-center border border-gray-300 rounded-lg p-2 bg-gray-50">
              <FaWallet className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="flex-grow p-2 border-none bg-gray-50 focus:ring-0"
                required
              />
            </div>

            <div className="flex flex-col md:flex-row items-center border border-gray-300 rounded-lg p-2 bg-gray-50">
              <FaDollarSign className="text-gray-500 mr-2" />
              <input
                type="number"
                placeholder="Limit"
                value={limit}
                onChange={(e) => setLimit(e.target.value)}
                className="flex-grow p-2 border-none bg-gray-50 focus:ring-0"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 focus:outline-none transition duration-200 ease-in-out"
            >
              {editingBudget ? 'Update Budget' : 'Add Budget'}
            </button>
            {editingBudget && (
              <button
                type="button"
                onClick={() => setEditingBudget(null)}
                className="w-full mt-2 bg-gray-300 text-black p-3 rounded-lg hover:bg-gray-400 focus:outline-none transition duration-200 ease-in-out"
              >
                Cancel
              </button>
            )}
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {budgets.map(budget => (
              <motion.div
                key={budget.id}
                className={`p-4 rounded-lg shadow-md ${budget.spent >= budget.limit ? 'bg-red-100' : 'bg-white'} transition-all duration-300`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold">{budget.category}</h3>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEdit(budget)}
                      className="bg-yellow-500 text-white p-2 rounded-lg hover:bg-yellow-600 focus:outline-none transition duration-200 ease-in-out"
                      aria-label={`Edit ${budget.category}`}
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleRemove(budget.id)}
                      className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 focus:outline-none transition duration-200 ease-in-out"
                      aria-label={`Remove ${budget.category}`}
                    >
                      <FaTrashAlt />
                    </button>
                  </div>
                </div>
                <div className="flex justify-between text-gray-600">
                  <p>Limit: ${budget.limit}</p>
                  <p>Spent: ${budget.spent}</p>
                </div>
                <button
                  onClick={() => handleUpdateSpent(budget.id, 50)}
                  className="mt-2 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 focus:outline-none transition duration-200 ease-in-out"
                >
                  Add $50 Spent
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BudgetManager;
