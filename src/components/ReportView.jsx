import { motion } from 'framer-motion';
import { Bar } from 'react-chartjs-2';
import 'tailwindcss/tailwind.css';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';


ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);


const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Expenses',
      data: [50, 100, 75, 125, 200, 150, 175],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    tooltip: {
      callbacks: {
        label: (tooltipItem) => `$${tooltipItem.raw}`,
      },
    },
  },
};

const ReportView = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Expense Report</h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <Bar data={data} options={options} />
      </motion.div>

      <div className="space-y-4">
        <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold">Summary</h3>
          <ul className="list-disc list-inside">
            <li>Total Expenses: $875</li>
            <li>Average Monthly Expense: $125</li>
            <li>Highest Expense Month: April ($125)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ReportView;
