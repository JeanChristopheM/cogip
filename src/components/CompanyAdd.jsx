import postData from "../logic/postData";

function CompanyAdd() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitting form");
    const formData = {
      name: e.target.name.value,
      vat: e.target.vat.value,
      status: e.target.status.value,
    };
    postData("https://csharpproject.somee.com/api/company", formData);
  };
  return (
    <main>
      <div className="card">
        <h2>Fill up the form</h2>
        <form className="companyForm" onSubmit={handleSubmit}>
          <ul>
            <li>
              <span>Name : </span>
              <input name="name" type="text" placeholder="Ex : BeCode" />
            </li>
            <li>
              <span>VAT : </span>
              <input name="vat" type="text" placeholder="Ex : 1235431658" />
            </li>
            <li>
              <span>Status : </span>
              <select name="status">
                <option value="">Select a status</option>
                <option value="Supplier">Supplier</option>
                <option value="Client">Client</option>
              </select>
            </li>
          </ul>
          <button>Submit</button>
        </form>
      </div>
    </main>
  );
}

export default CompanyAdd;
