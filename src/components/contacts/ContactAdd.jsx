import { useState, useEffect } from "react";
import { contactVerify } from "../../logic/formValidation";
import handleRequests from "../../logic/handleRequests";
import CompanySelector from "../reusables/CompanySelector";

// toaster
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactIllustration from "../reusables/ContactIllustration";
// end toaster

function ContactAdd({ companies, setIsLoaded, isAuth }) {
  const [selectorAmount, setSelectorAmount] = useState(1);
  const [isFetching, setIsFetching] = useState(false);
  useEffect(() => {
    const message = sessionStorage.getItem("cogipToast");
    if (!message) return;
    const messageArray = message.split(",");
    toast[messageArray[0]](messageArray[1], {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    sessionStorage.removeItem("cogipToast");
  }, [isFetching]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsFetching(true);
    const getCompaniesArray = (nodeList) => {
      let compArr = [];
      for (let node of nodeList) {
        compArr.push(
          companies.find((company) =>
            company.name == node.value ? true : false
          ).id
        );
      }
      return [...new Set([...compArr])];
    };
    const formData = {
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      companies: getCompaniesArray(e.target.company),
      email: e.target.email.value,
      phonenumber: e.target.phonenumber.value,
    };
    console.log(formData);
    let check = contactVerify(formData);
    if (check.ok) {
      const { status, message, dataPackage } = await handleRequests(
        "POST",
        "https://csharpproject.somee.com/api/Contact",
        isAuth.jwt,
        formData
      );
      setIsFetching(false);
      setIsLoaded(false);
      if (status === 200)
        sessionStorage.setItem("cogipToast", "success,Success !");
      else sessionStorage.setItem("cogipToast", `error,${message}`);
    } else {
      setIsFetching(false);
      const issues = Object.keys(check);
      setTimeout(() => {
        for (let issue of issues) {
          if (issue !== "ok") {
            toast.error(check[issue], {
              position: toast.POSITION.BOTTOM_RIGHT,
            });
          }
        }
      }, 500);
    }
  };

  const handleCompanyChange = (value) => {
    return;
  };
  const handleAddCompSelector = () => {
    setSelectorAmount((amount) => amount + 1);
  };
  const handleRemoveCompSelector = () => {
    setSelectorAmount((amount) => (amount > 1 ? amount - 1 : amount));
  };
  const renderSelector = (amount) => {
    let selectorArray = [];
    for (let x = 0; x < amount; x++) {
      selectorArray.push(
        <div key={x}>
          <label>Company Selector : </label>
          <CompanySelector
            companies={companies}
            currentCompany={""}
            handleCompanyChange={handleCompanyChange}
            name={"company"}
            key={x}
          />
        </div>
      );
    }
    return selectorArray;
  };
  return (
    <main>
      <div className="contactAdd card">
        <h2>Fill up the form</h2>
        <form className="contactForm" onSubmit={handleSubmit} method="post">
          <div className="formContent">
            <fieldset>
              <legend>Contact</legend>
              <div>
                <label htmlFor="firstname">Firstname : </label>
                <input
                  name="firstname"
                  id="firstname"
                  type="text"
                  placeholder="Ex : Johnny"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastname">Lastname : </label>
                <input
                  name="lastname"
                  id="lastname"
                  type="text"
                  placeholder="Ex : Begood"
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Email : </label>
                <input
                  name="email"
                  id="email"
                  type="text"
                  placeholder="Ex : johnny.begood@yahoo.fr"
                  required
                />
              </div>
              <div>
                <label htmlFor="phonenumber">Phone number : </label>
                <input
                  name="phonenumber"
                  id="phonenumber"
                  type="text"
                  placeholder="Ex : 0487272320"
                  required
                />
              </div>
            </fieldset>
            <fieldset>
              <legend>
                From
                <button
                  type="button"
                  id="addCompanySelector"
                  onClick={handleAddCompSelector}
                  style={{ padding: "0 .5rem" }}
                >
                  +
                </button>
                <button
                  type="button"
                  id="removeCompanySelector"
                  onClick={handleRemoveCompSelector}
                  style={{ padding: "0 .5rem" }}
                >
                  -
                </button>
              </legend>
              {renderSelector(selectorAmount)}
            </fieldset>
          </div>
          <button>Submit</button>
        </form>
        <div className="formIllu">
          <ContactIllustration />
        </div>
        <ToastContainer />
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
