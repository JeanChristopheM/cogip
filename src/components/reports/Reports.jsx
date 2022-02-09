import { useState } from "react";
import YearChart from "../reusables/YearChart.jsx";

const Reports = ({ invoices, companies }) => {
  const [chartType, setChartType] = useState("year");

  const findBalance = (invoicesArray) => {
    const balance = invoicesArray.reduce((acc, current) => {
      const companyStatus = companies.find(
        (el) => el.id === current.company
      ).status;
      if (companyStatus === "Customer") return acc + current.amount;
      else return acc - current.amount;
    }, 0);
    return balance;
  };
  const sortInvoicesPerYear = (invoicesArray) => {
    const answer = invoicesArray.reduce(function (buckets, invoice) {
      if (!buckets[invoice.received.slice(0, 4)])
        buckets[invoice.received.slice(0, 4)] = [];
      buckets[invoice.received.slice(0, 4)].push(invoice);
      return buckets;
    }, {});
    return answer;
  };
  const switchChart = (chartType) => {
    setChartType(chartType);
  };
  //. JSX.
  return (
    <main>
      <div className="card">
        <h2>Financial report</h2>
        <br />
        <section>
          <br />
          <h3>Balance :</h3>
          <p>Current balance : {findBalance(invoices)}€</p>
          {Object.keys(sortInvoicesPerYear(invoices))
            .sort((a, b) => b - a)
            .map((key) => {
              return (
                <p key={key}>
                  {key} : {findBalance(sortInvoicesPerYear(invoices)[key])}€
                </p>
              );
            })}
        </section>
        <section>
          <br />
          <h3>Invoices that need to be paid : </h3>
          {invoices.filter((el) => !el.paid).length}
        </section>
        <section>
          <br />
          <h3>Year chart</h3>
          <button onClick={() => switchChart("year")}>Year</button>
          <button onClick={() => switchChart("month")}>Month</button>
          <div className="canvasContainer">
            <YearChart
              invoices={invoices}
              companies={companies}
              findBalance={findBalance}
              chartType={chartType}
            />
          </div>
        </section>
      </div>
    </main>
  );
};
export default Reports;
