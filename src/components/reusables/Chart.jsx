import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = ({ invoices }) => {
  let paid, unpaid;
  if (invoices.length > 0) {
    paid = invoices.reduce((tally, invoice) => {
      if (invoice.paid == true) return tally + 1;
      return tally;
    }, 0);
    unpaid = invoices.reduce((tally, invoice) => {
      if (invoice.paid == false) return tally + 1;
      return tally;
    }, 0);
  }
  const data = {
    labels: ["Paid", "Unpaid"],
    datasets: [
      {
        label: "My First Dataset",
        data: [paid, unpaid],
        backgroundColor: ["rgb(39, 76, 119)", "rgb(135, 156, 179)"],
        hoverOffset: 4,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: true,
  };
  return <Pie options={options} data={data} />;
};

export default Chart;
