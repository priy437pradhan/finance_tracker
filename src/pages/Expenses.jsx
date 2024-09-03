import  { useState } from 'react';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  const handleEdit = (id) => {
    // Logic to handle editing an expense
    console.log(`Edit expense with id: ${id}`);
  };

  const handleDelete = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6">Expenses</h1>
        <ExpenseForm onAddExpense={addExpense} />
        <ExpenseList expenses={expenses} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
    </div>
  );
};

export default Expenses;
