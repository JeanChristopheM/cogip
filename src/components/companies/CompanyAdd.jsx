import { useState, useEffect } from "react";
import handleRequests from "../../logic/handleRequests";
import { companyVerify } from "../../logic/formValidation";

// toaster
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CompanyIllustration from "../reusables/CompanyIllustration";
// end toaster

function CompanyAdd({ setIsLoaded, isAuth }) {
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
    const formData = {
      country: e.target.country.value,
      name: e.target.name.value,
      status: e.target.status.value,
      street: e.target.street.value,
      streetnumber: e.target.streetnumber.value,
      town: e.target.town.value,
      vat: e.target.vat.value,
      zip: e.target.zip.value,
      contacts: [],
    };
    let check = companyVerify(formData);
    if (check.ok) {
      const { status, message, dataPackage } = await handleRequests(
        "POST",
        "https://csharpproject.somee.com/api/Company",
        isAuth.jwt,
        formData
      );
      if (status === 200)
        sessionStorage.setItem("cogipToast", "success,Success !");
      else sessionStorage.setItem("cogipToast", `error,${message}`);
      setTimeout(() => {
        setIsLoaded(false);
        setIsFetching(false);
      }, 1000);
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
      }, 250);
    }
  };
  return (
    <main>
      <div className="companyAdd card">
        <h2>Fill up the form</h2>
        <form className="companyForm" onSubmit={handleSubmit} method="post">
          <div className="formContent">
            <fieldset>
              <legend>Company details</legend>
              <div>
                <label htmlFor="name">Name : </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Ex : BeCode"
                  required
                />
              </div>
              <div>
                <label htmlFor="vat">VAT : </label>
                <input
                  name="vat"
                  type="text"
                  placeholder="Ex : 1235431658"
                  required
                />
              </div>
              <div>
                <label htmlFor="status">Status : </label>
                <select name="status" required>
                  <option value="">Select a status</option>
                  <option value="Supplier">Supplier</option>
                  <option value="Customer">Customer</option>
                </select>
              </div>
            </fieldset>
            <fieldset>
              <legend>Address</legend>
              <div>
                <label htmlFor="streetnumber">Streetnumber : </label>
                <input
                  type="text"
                  name="streetnumber"
                  id="streetnumber"
                  required
                />
              </div>
              <div>
                <label htmlFor="street">Street : </label>
                <input type="text" name="street" id="street" required />
              </div>
              <div>
                <label htmlFor="town">Town : </label>
                <input type="text" name="town" id="town" required />
              </div>
              <div>
                <label htmlFor="country">Country : </label>
                <input type="text" name="country" id="country" required />
              </div>
              <div>
                <label htmlFor="zip">Zip : </label>
                <input type="text" name="zip" id="zip" />
              </div>
            </fieldset>
          </div>
          <button>Submit</button>
        </form>
        <div className="formIllu">
          <CompanyIllustration />
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

export default CompanyAdd;
