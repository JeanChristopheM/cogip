import { useState } from "react";
import postData from "../logic/postData";
import CompanySelector from "./CompanySelector";

function ContactAdd({ companies }) {
  const [selectedCompany, setSelectedCompany] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting form");
    const formData = {
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      contactcompany: selectedCompany.id.toString(),
      email: e.target.email.value,
      phonenumber: e.target.phonenumber.value,
    };
    postData("https://csharpproject.somee.com/api/contact", formData);
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
              <input name="firstname" type="text" placeholder="Ex : Johnny" />
            </li>
            <li>
              <span>Lastname : </span>
              <input name="lastname" type="text" placeholder="Ex : Begood" />
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
              />
            </li>
            <li>
              <span>Phone number : </span>
              <input
                name="phonenumber"
                type="text"
                placeholder="Ex : 0487272320"
              />
            </li>
          </ul>
          <button>Submit</button>
        </form>
      </div>
    </main>
  );
}

export default ContactAdd;
