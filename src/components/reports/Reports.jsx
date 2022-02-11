import { useState } from "react";
import YearChart from "../reusables/YearChart.jsx";
import { mockData } from "../../mock_data.js";

const Reports = ({ invoices, companies }) => {
  const [chartType, setChartType] = useState("year");
  const [year, setYear] = useState(new Date().getFullYear());
  const findBalance = (invoicesArray) => {
    const balance = invoicesArray.reduce((acc, current) => {
      const companyStatus =
        companies.find((el) => el.id === current.company)?.status ?? "Customer";
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
    <main className="reports">
      <div className="card">
        <h2>
          Revenue flow for{" "}
          <select
            name="year"
            id="year"
            onChange={(e) => setYear(e.target.value)}
            defaultValue={year}
          >
            {Object.keys(sortInvoicesPerYear(mockData)).map((year) => (
              <option value={year} key={year}>
                {year}
              </option>
            ))}
          </select>{" "}
        </h2>
        <section>
          <div className="canvasContainer">
            <YearChart
              invoices={mockData}
              companies={companies}
              findBalance={findBalance}
              chartType={chartType}
              year={year}
            />
          </div>
        </section>
      </div>
      <div className="card">
        <h2>Quick data</h2>
        <section>
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
      </div>
      <div className="card">
        <h2>Other card</h2>
        with some data
      </div>
    </main>
  );
};
export default Reports;
