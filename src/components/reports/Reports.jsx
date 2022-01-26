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
  console.log(sortInvoicesPerYear(invoices));
  return (
    <main>
      <div className="card">
        <h2>Financial report</h2>
        <br />
        <p>Current balance : {findBalance(invoices)}€</p>
        <section>
          <h3>This year :</h3>
          <p>{sortInvoicesPerYear(invoices).Date.now()}</p>
        </section>
      </div>
    </main>
  );
};
export default Reports;
