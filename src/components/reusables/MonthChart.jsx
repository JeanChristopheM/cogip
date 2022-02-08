import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
//* END IMPORTS.

//* Needed functions.
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
//* End of needed functions.

//* Actual component.
const MonthChart = () => {
  const data = {
    labels: [],
    datasets: [
      {
        label: "Revenue flow for " + period,
        data: /*DATA VARIABLE*/ null,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: true,
  };
  //. JSX.
  return <Line options={options} data={data} />;
};

export default MonthChart;
