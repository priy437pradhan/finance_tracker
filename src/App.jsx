import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Expenses from './pages/Expenses'; 
import Budget from './pages/Budget'; 
import Goals from './pages/Goals'; 
import Reports from './pages/Reports';

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
