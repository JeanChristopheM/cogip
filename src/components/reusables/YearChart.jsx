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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const YearChart = ({ invoices, companies, findBalance }) => {
  const invoicesCurrentYear = invoices.filter(
    (el) => el.received.slice(0, 4) == new Date().getFullYear()
  );
  const sortedPerMonth = invoicesCurrentYear.reduce((acc, current) => {
    if (!acc[current.received.slice(5, 7)])
      acc[current.received.slice(5, 7)] = [];
    acc[current.received.slice(5, 7)].push(current);
    return acc;
  }, {});
  const months = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  for (let x of months) {
    if (!Object.keys(sortedPerMonth).includes(x)) sortedPerMonth[x] = 0;
  }
  const summedUp = Object.keys(sortedPerMonth)
    .sort((a, b) => a - b)
    .map((key) => {
      if (!sortedPerMonth[key]) return sortedPerMonth[key];
      else return findBalance(sortedPerMonth[key]);
    });
  let actualData = [];

  for (let i = 0; i < summedUp.length; i++) {
    let storage = 0;

    for (let j = i; j >= 0; j--) {
      storage += summedUp[j];
    }
    actualData.push(storage);
  }
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Dec",
    ],
    datasets: [
      {
        label: "My First Dataset",
        data: actualData,
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
  return <Line options={options} data={data} />;
};

export default YearChart;
