import { useState } from "react";
import { contactVerify } from "../logic/formValidation";
import handleRequests from "../logic/handleRequests";
import CompanySelector from "./CompanySelector";

function ContactAdd({ companies, setIsLoaded, isAuth }) {
  const [selectedCompany, setSelectedCompany] = useState("");
  const [isFetching, setIsFetching] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsFetching(true);
    const formData = {
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      contactcompany: selectedCompany.id.toString(),
      email: e.target.email.value,
      phonenumber: e.target.phonenumber.value,
    };
    let check = contactVerify(formData);
    if (check.ok) {
      await handleRequests(
        "POST",
        "https://csharpproject.somee.com/api/contact",
        isAuth.jwt,
        formData
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

  const handleCompanyChange = (value) => {
    setSelectedCompany(value);
  };

  return (
    <main>
      <div className="card">
        <h2>Fill up the form</h2>
        <form className="contactForm" onSubmit={handleSubmit}>
          <ul>
            <li>
              <span>Firstname : </span>
              <input
                name="firstname"
                type="text"
                placeholder="Ex : Johnny"
                required
              />
            </li>
            <li>
              <span>Lastname : </span>
              <input
                name="lastname"
                type="text"
                placeholder="Ex : Begood"
                required
              />
            </li>
            <li>
              <span>Company : </span>
              <CompanySelector
                companies={companies}
                currentCompany={""}
                handleCompanyChange={handleCompanyChange}
                name={"company"}
              />
            </li>
            <li>
              <span>Email : </span>
              <input
                name="email"
                type="text"
                placeholder="Ex : johnny.begood@yahoo.fr"
                required
              />
            </li>
            <li>
              <span>Phone number : </span>
              <input
                name="phonenumber"
                type="text"
                placeholder="Ex : 0487272320"
                required
              />
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

export default ContactAdd;
