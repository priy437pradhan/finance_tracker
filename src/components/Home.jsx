import { FaWallet, FaChartPie, FaDollarSign, FaTachometerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 via-green-200 to-yellow-200 flex flex-col items-center justify-center p-4">
      <header className="text-center mb-12">
      <motion.h1
          className="text-4xl font-bold text-gray-800 sm:text-5xl md:text-6xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Personal Finance Dashboard
        </motion.h1>
      </header>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Link
          to="/expenses"
          className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center text-center hover:bg-gray-100 transition-all duration-300"
        >
          <FaWallet className="text-blue-500 text-5xl mb-4" />
          <span className="text-xl font-semibold mb-2">Expenses</span>
          <span className="text-gray-500">View</span>
        </Link>

        <Link
          to="/budget"
          className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center text-center hover:bg-gray-100 transition-all duration-300"
        >
          <FaDollarSign className="text-green-500 text-5xl mb-4" />
          <span className="text-xl font-semibold mb-2">Budget</span>
          <span className="text-gray-500">Manage</span>
        </Link>

        <Link
          to="/goals"
          className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center text-center hover:bg-gray-100 transition-all duration-300"
        >
          <FaTachometerAlt className="text-yellow-500 text-5xl mb-4" />
          <span className="text-xl font-semibold mb-2">Goals</span>
          <span className="text-gray-500">Track</span>
        </Link>

        <Link
          to="/reports"
          className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center text-center hover:bg-gray-100 transition-all duration-300"
        >
          <FaChartPie className="text-red-500 text-5xl mb-4" />
          <span className="text-xl font-semibold mb-2">Reports</span>
          <span className="text-gray-500">View</span>
        </Link>
      </motion.div>
    </div>
  );
};

export default Home;
