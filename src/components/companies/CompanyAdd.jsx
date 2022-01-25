import { useState, useEffect } from "react";
import handleRequests from "../../logic/handleRequests";
import { companyVerify } from "../../logic/formValidation";

// toaster
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
      name: e.target.name.value,
      vat: e.target.vat.value,
      status: e.target.status.value,
    };
    let check = companyVerify(formData);
    if (check.ok) {
      const { status, message, dataPackage } = await handleRequests(
        "POST",
        "https://csharpproject.somee.com/api/Company",
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
      }, 250);
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
