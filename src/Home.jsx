import { FaWallet, FaChartPie, FaDollarSign, FaTachometerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="container mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Personal Finance Dashboard</h1>
        </header>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/expenses"
            className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-between hover:bg-gray-100"
          >
            <div className="flex items-center">
              <FaWallet className="text-blue-500 text-3xl mr-4" />
              <span className="text-lg font-semibold">Expenses</span>
            </div>
            <span className="text-gray-500">View</span>
          </Link>

          <Link
            to="/budget"
            className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-between hover:bg-gray-100"
          >
            <div className="flex items-center">
              <FaDollarSign className="text-green-500 text-3xl mr-4" />
              <span className="text-lg font-semibold">Budget</span>
            </div>
            <span className="text-gray-500">Manage</span>
          </Link>

          <Link
            to="/goals"
            className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-between hover:bg-gray-100"
          >
            <div className="flex items-center">
              <FaTachometerAlt className="text-yellow-500 text-3xl mr-4" />
              <span className="text-lg font-semibold">Goals</span>
            </div>
            <span className="text-gray-500">Track</span>
          </Link>

          <Link
            to="/reports"
            className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-between hover:bg-gray-100"
          >
            <div className="flex items-center">
              <FaChartPie className="text-red-500 text-3xl mr-4" />
              <span className="text-lg font-semibold">Reports</span>
            </div>
            <span className="text-gray-500">View</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
