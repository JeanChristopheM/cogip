import CompanySelector from "./CompanySelector";

function ContactAdd({ companies }) {
  const handleSubmit = (e) => {
    console.log("Submitting form");
  };
  const handleCompanyChange = (value) => {
    console.log(value);
  };
  return (
    <main>
      <div className="card">
        <h2>Fill up the form</h2>
        <form className="contactForm" onSubmit={handleSubmit}>
          <ul>
            <li>
              <span>Firstname : </span>
              <input name="first" type="text" placeholder="Ex : Johnny" />
            </li>
            <li>
              <span>Lastname : </span>
              <input name="lastname" type="text" placeholder="Ex : Begood" />
            </li>
            <li>
              <span>Company : </span>
              <CompanySelector companies={companies} currentCompany={""} />
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
