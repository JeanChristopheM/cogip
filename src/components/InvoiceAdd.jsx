import CompanySelector from "./CompanySelector";
function InvoiceAdd({ contacts, companies }) {
  const handleCompanyChange = (value) => {};
  return (
    <main>
      <div className="card">
        <h2>Fill up the form</h2>
        <form className="invoiceForm">
          <ul>
            <li>
              <span>Name : </span>
              <CompanySelector
                companies={companies}
                handleCompanyChange={handleCompanyChange}
                currentCompany={{ name: "" }}
              />
            </li>
          </ul>
        </form>
      </div>
    </main>
  );
}

export default InvoiceAdd;
