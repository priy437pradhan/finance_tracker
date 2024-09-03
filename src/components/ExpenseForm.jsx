import { useState, useEffect } from 'react';
import { FaDollarSign, FaCalendarAlt, FaTag, FaRegEdit } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

const ExpenseForm = ({ onAddExpense, expenseToEdit }) => {
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [highlight, setHighlight] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (expenseToEdit) {
      setAmount(expenseToEdit.amount);
      setDate(expenseToEdit.date);
      setCategory(expenseToEdit.category);
      setDescription(expenseToEdit.description);
      setHighlight(true);
    } else {
      setHighlight(false);
    }
  }, [expenseToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      id: expenseToEdit ? expenseToEdit.id : Date.now(), // Use existing ID or generate new one
      amount,
      date,
      category,
      description
    };
    onAddExpense(newExpense);
    navigate('/expenses');
  };

  return (
    <div
      className={`max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg transition-transform duration-300 ${
        highlight ? 'border-2 border-blue-500 transform scale-105' : ''
      }`}
    >
      <h2 className="text-2xl font-bold mb-4">
        {expenseToEdit ? 'Edit Expense' : 'Add New Expense'}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-center border border-gray-300 rounded-lg p-2">
          <FaDollarSign className="text-gray-500 mr-2" />
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2 border-none focus:ring-0"
            required
          />
        </div>

        <div className="flex items-center border border-gray-300 rounded-lg p-2">
          <FaCalendarAlt className="text-gray-500 mr-2" />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-2 border-none focus:ring-0"
            required
          />
        </div>

        <div className="flex items-center border border-gray-300 rounded-lg p-2">
          <FaTag className="text-gray-500 mr-2" />
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
          <FaRegEdit className="text-gray-500 mr-2" />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className
            className="w-full p-2 border-none focus:ring-0"
            rows="3"
          />
        </div>

        <button
          type="submit"
          className={`w-full p-2 rounded-lg focus:outline-none transition-colors duration-300 ${
            highlight ? 'bg-green-500 text-white hover:bg-green-600' : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
        >
          {expenseToEdit ? 'Update Expense' : 'Add Expense'}
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
