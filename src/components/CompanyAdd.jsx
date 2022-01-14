import { useState } from "react";
import postData from "../logic/postData";
import { companyVerify } from "../logic/formValidation";

function CompanyAdd({ setIsLoaded, isAuth }) {
  const [isFetching, setIsFetching] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsFetching(true);
    const formData = {
      name: e.target.name.value,
      vat: e.target.vat.value,
      status: e.target.status.value,
    };
    let check = companyVerify(formData);
    if (check.ok) {
      console.log(formData);
      await postData(
        "https://csharpproject.somee.com/api/company",
        formData,
        isAuth
      );
      setIsFetching(false);
      setIsLoaded(false);
    } else {
      setIsFetching(false);
      const issues = Object.keys(check);
      for (let issue of issues) {
        if (issue !== "ok") alert(check[issue]);
      }
    }
  };
  return (
    <main>
      <div className="card">
        <h2>Fill up the form</h2>
        <form className="companyForm" onSubmit={handleSubmit}>
          <ul>
            <li>
              <span>Name : </span>
              <input
                name="name"
                type="text"
                placeholder="Ex : BeCode"
                required
              />
            </li>
            <li>
              <span>VAT : </span>
              <input
                name="vat"
                type="text"
                placeholder="Ex : 1235431658"
                required
              />
            </li>
            <li>
              <span>Status : </span>
              <select name="status" required>
                <option value="">Select a status</option>
                <option value="Supplier">Supplier</option>
                <option value="Client">Client</option>
              </select>
            </li>
          </ul>
          <button>Submit</button>
        </form>
      </div>
      {isFetching ? (
        <div className="fetching dark">
          <div className="lds-dual-ring"></div>
        </div>
      ) : null}
    </main>
  );
}

export default CompanyAdd;
