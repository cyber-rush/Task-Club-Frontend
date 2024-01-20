import { Chart as ChartJS } from "chart.js/auto"
import { Doughnut } from "react-chartjs-2";
import { useTaskContext } from "../context/TaskProvider";


const PieChart = () => {

    const { completedTasksCount, pendingTasksCount } = useTaskContext()

    const data = {
        labels: ['Completed Tasks', 'Pending Tasks'],
        datasets: [
            {
                data: [completedTasksCount, pendingTasksCount], // data percentages
                backgroundColor: ['#4CAF50', '#FFC107'], // Green, Yellow
                hoverBackgroundColor: ['#45A049', '#FFA000'],
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false, // Hide the legend to save space
        },

    };

    return (
        <div className="w-100 h-40" >
            <h2 className="text-lg font-semibold mb-4">Today's Tasks Overview</h2>
            <Doughnut data={data} options={options} />
        </div >
    );
};

export default PieChart;
