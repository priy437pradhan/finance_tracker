import { useState } from 'react';
import { FaDollarSign, FaCalendarAlt, FaTag, FaRegEdit } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

const ExpenseForm = () => {
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ amount, date, category, description });

    navigate('/expenses');
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Add New Expense</h2>
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
            className="w-full p-2 border-none focus:ring-0"
            rows="3"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 focus:outline-none"
        >
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
