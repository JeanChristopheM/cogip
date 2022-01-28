import YearChart from "../reusables/YearChart.jsx";

const Reports = ({ invoices, companies }) => {
  const allTransactionsEqual = invoices.reduce((acc, currentValue) => {
    const companyStatus = companies.find(
      (el) => el.id === currentValue.company
    ).status;
    if (companyStatus === "Client") return acc + currentValue.amount;
    else return acc - currentValue.amount;
  }, 0);
  const findBalance = (invoicesArray) => {
    const balance = invoicesArray.reduce((acc, current) => {
      const companyStatus = companies.find(
        (el) => el.id === current.company
      ).status;
      if (companyStatus === "Client") return acc + current.amount;
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
          <YearChart
            invoices={invoices}
            companies={companies}
            findBalance={findBalance}
          />
        </section>
      </div>
    </main>
  );
};
export default Reports;
