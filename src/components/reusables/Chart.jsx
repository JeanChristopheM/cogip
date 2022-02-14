import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = ({ invoices }) => {
  let paid, unpaid;
  if (invoices.length > 0) {
    paid = invoices.reduce((tally, invoice) => {
      if (invoice.paidStatus) return tally + 1;
      return tally;
    }, 0);
    unpaid = invoices.reduce((tally, invoice) => {
      if (!invoice.paidStatus) return tally + 1;
      return tally;
    }, 0);
  }
  const primaryColor =
    document.documentElement.style.getPropertyValue("--clr-text") || "#274c77";
  const secondaryColor =
    document.documentElement.style.getPropertyValue("--clr-text-low") ||
    "#879cb3";
  const data = {
    labels: ["Paid", "Unpaid"],
    datasets: [
      {
        label: "My First Dataset",
        data: [paid, unpaid],
        backgroundColor: [primaryColor, secondaryColor],
        hoverOffset: 4,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        labels: {
          color: primaryColor,
        },
      },
    },
  };
  return <Pie options={options} data={data} />;
};

export default Chart;
