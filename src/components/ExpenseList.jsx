import React from 'react';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ExpenseList = ({ expenses, onEdit, onDelete }) => {
  return (
    <div className="max-w-4xl mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Expense List</h2>
      {expenses.length === 0 ? (
        <p className="text-gray-500">No expenses to display.</p>
      ) : (
        <div className="space-y-4">
          {expenses.map((expense) => (
            <motion.div
              key={expense.id}
              className="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-sm"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col">
                <span className="text-lg font-semibold">${expense.amount}</span>
                <span className="text-gray-600">{expense.category}</span>
                <span className="text-gray-500">{expense.date}</span>
                <p className="text-gray-400">{expense.description}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => onEdit(expense.id)}
                  aria-label={`Edit expense ${expense.id}`}
                  className="text-blue-500 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <FaEdit className="text-xl" />
                </button>
                <button
                  onClick={() => onDelete(expense.id)}
                  aria-label={`Delete expense ${expense.id}`}
                  className="text-red-500 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                >
                  <FaTrashAlt className="text-xl" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExpenseList;
