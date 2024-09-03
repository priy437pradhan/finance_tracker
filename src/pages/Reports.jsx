import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Reports = () => {
  const data = {
    labels: ['January', 'February', 'March'],
    datasets: [
      {
        label: 'Expenses',
        data: [30, 20, 50],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Reports</h1>
      <div className="max-w-4xl mx-auto p-4 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Expense Report</h2>
        <Bar data={data} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
      </div>
    </div>
  </div>
);
};

export default Reports;