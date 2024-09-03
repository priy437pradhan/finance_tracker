import { useState } from 'react';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);
  const [editingExpense, setEditingExpense] = useState(null);

  const addExpense = (newExpense) => {
    if (editingExpense) {
      setExpenses(
        expenses.map((expense) =>
          expense.id === editingExpense.id ? newExpense : expense
        )
      );
      setEditingExpense(null); 
    } else {
      setExpenses([...expenses, newExpense]);
    }
  };

  const handleEdit = (id) => {
    const expenseToEdit = expenses.find((expense) => expense.id === id);
    setEditingExpense(expenseToEdit);
  };

  const handleDelete = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-green-100 p-6">
      <div className="container mx-auto max-w-4xl">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Expense Tracker</h1>
          <p className="text-xl text-gray-700 mt-2">Effortlessly manage your expenses with our intuitive tool</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-300 transition-transform transform hover:scale-105">
            <ExpenseForm onAddExpense={addExpense} expenseToEdit={editingExpense} />
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-300 transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Expense Overview</h2>
            <ExpenseList
              expenses={expenses}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expenses;
