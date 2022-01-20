import { useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { companyVerify } from "../logic/formValidation.js";
import handleRequests from "../logic/handleRequests";
import CompanyControls from "./CompanyControls.jsx";

// toaster
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// end toaster

function Company({ companies, contacts, setIsLoaded, isAuth }) {
  const loaded = companies.length > 0 ? true : false;
  let params = useParams();
  const navigate = useNavigate();
  let company = companies.find((el) => el.id == params.companyId);

  const [isModifying, setIsModifying] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  const nameRef = useRef();
  const vatRef = useRef();
  const statusRef = useRef();

  const handleModif = async () => {
    const formData = {
      name: nameRef.current.value,
      vat: vatRef.current.value,
      status: statusRef.current.value,
    };
    let check = companyVerify(formData);
    setIsFetching(true);
    if (check.ok) {
      const { status, message, dataPackage } = await handleRequests(
        "PUT",
        `https://csharpproject.somee.com/api/company/${params.companyId}`,
        isAuth.jwt,
        formData
      );
      setIsLoaded(false);
      setIsFetching(false);
      if (status === 200) {
        setTimeout(() => {
          toast.success(message, {
            position: toast.POSITION.TOP_CENTER,
          });
        }, 500);
      } else {
        setTimeout(() => {
          toast.error(message, {
            position: toast.POSITION.TOP_CENTER,
          });
        }, 500);
      }
    } else {
      setIsFetching(false);
      const issues = Object.keys(check);
      setTimeout(() => {
        for (let issue of issues) {
          if (issue !== "ok") {
            toast.error(check[issue], {
              position: toast.POSITION.TOP_CENTER,
            });
          }
        }
      }, 500);
    }
  };

  return (
    <main>
      {isFetching || !loaded ? (
        <div className="fetching">
          <div className="lds-dual-ring"></div>
        </div>
      ) : (
        <div className="card">
          <h2>Details about {company.name}</h2>
          <div className="companyGrid">
            <span>Name : </span>
            {isModifying ? (
              <input
                type="text"
                name="companyName"
                defaultValue={company.name}
                ref={nameRef}
                required
              />
            ) : (
              <span id="companyName">{company.name}</span>
            )}
            <span>VAT : </span>
            {isModifying ? (
              <input
                type="text"
                name="companyVat"
                defaultValue={company.vat}
                ref={vatRef}
                required
              />
            ) : (
              <span id="companyVat">{company.vat}</span>
            )}
            <span>Status : </span>
            {isModifying ? (
              <select
                name="companyStatus"
                ref={statusRef}
                defaultValue={company.status}
                required
              >
                <option value="">Select a status</option>
                <option value="Supplier">Supplier</option>
                <option value="Client">Client</option>
              </select>
            ) : (
              <span id="companyStatus">{company.status}</span>
            )}
            <span>___</span>
            <span>___</span>
            <span>Contacts : </span>
            <ul>
              {contacts.map((el) => {
                if (el.contactcompany == company.id) {
                  return (
                    <li
                      key={el.id}
                      onClick={() => {
                        navigate(`/contact/${el.id}`);
                      }}
                      style={{ cursor: "pointer" }}
                    >{`${el.firstname} ${el.lastname}`}</li>
                  );
                }
              })}
            </ul>
          </div>
          {isAuth.role == "Admin" ? (
            <CompanyControls
              isModifying={isModifying}
              isDeleting={isDeleting}
              setIsDeleting={setIsDeleting}
              setIsModifying={setIsModifying}
              handleModif={handleModif}
            />
          ) : (
            ""
          )}
        </div>
      )}
      <ToastContainer />
    </main>
  );
}

export default Company;
