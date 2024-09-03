import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Expenses from './components/ExpenseForm.jsx'; 
import Budget from './components/BudgetManager'; 
import Goals from './components/GoalTracker'; 
import Reports from './components/ReportView'; 

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/expenses" element={<Expenses />} />
      <Route path="/budget" element={<Budget />} />
      <Route path="/goals" element={<Goals />} />
      <Route path="/reports" element={<Reports />} />
    </Routes>
  );
};

export default App;
