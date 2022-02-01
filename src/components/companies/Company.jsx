import { useState, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { companyVerify } from "../../logic/formValidation.js";
import handleRequests from "../../logic/handleRequests";
import CompanyControls from "./CompanyControls.jsx";
import CompanyIllustration from "../reusables/CompanyIllustration.jsx";

// toaster
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// end toaster

function Company({ companies, contacts, setIsLoaded, isAuth }) {
  const loaded = companies.length > 0 ? true : false;
  const params = useParams();
  const navigate = useNavigate();
  const company = companies.find((el) => el.id == params.companyId);
  const [isModifying, setIsModifying] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    if (!company) navigate("/companies");
  }, [companies]);
  const nameRef = useRef();
  const vatRef = useRef();
  const statusRef = useRef();

  const handleModif = async () => {
    const formData = {
      name: nameRef.current.value,
      vat: vatRef.current.value,
      status: statusRef.current.value,
    };
    console.log(formData);
    /* let check = companyVerify(formData);
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
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        }, 250);
      } else {
        setTimeout(() => {
          toast.error(message, {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        }, 250);
      }
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
    } */
  };
  const handleDelete = async () => {
    setIsFetching(true);
    const { status, message } = await handleRequests(
      "DELETE",
      `https://csharpproject.somee.com/api/Company/${company.id}`,
      isAuth.jwt
    );
    setIsFetching(false);
    if (status !== 200) {
      toast.error("There was an error deleting this company", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
    sessionStorage.setItem("cogipToast", "Success !");
    setIsDeleting(false);
    setIsLoaded(false);
  };

  return (
    <main>
      {isFetching || !loaded || !company ? (
        <div className="fetching">
          <div className="lds-dual-ring"></div>
        </div>
      ) : (
        <div className="card">
          <h2>Details :</h2>
          <div className="companyGrid">
            {isModifying ? (
              <>
                <div className="companyGrid__section--child">
                  <span>Name : </span>
                  <input
                    type="text"
                    name="companyName"
                    defaultValue={company.name}
                    ref={nameRef}
                    required
                  />
                </div>
                <div className="companyGrid__section--child">
                  <span>VAT : </span>
                  <input
                    type="text"
                    name="companyVat"
                    defaultValue={company.vat}
                    ref={vatRef}
                    required
                  />
                </div>
                <div className="companyGrid__section--child">
                  <span>Status : </span>
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
                </div>
                <div className="companyGrid__section--child">
                  <span>Contacts : </span>
                  <ul>
                    {contacts.map((el) => {
                      if (el.companies.includes(company.id)) {
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
              </>
            ) : (
              <>
                <section className="companyGrid__section">
                  <div className="companyGrid__section--child name">
                    <span className="labels">Name : </span>
                    <span id="companyName">{company.name}</span>
                  </div>
                  <div className="companyGrid__section--child">
                    <span className="labels">VAT : </span>
                    <span id="companyVat">{company.vat}</span>
                  </div>
                  <div className="companyGrid__section--child">
                    <span className="labels">Status : </span>
                    <span id="companyStatus">{company.status}</span>
                  </div>
                </section>
                <section className="companyGrid__section">
                  <h3>Where</h3>
                  <div className="companyGrid__section--child">
                    <span>Country : </span>
                    <span>{company.country}</span>
                  </div>
                </section>
                <section className="companyGrid__section">
                  <div className="companyGrid__section--child">
                    <span>Contacts : </span>
                    <ul>
                      {contacts.map((el) => {
                        if (el.companies.includes(company.id)) {
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
                </section>
                <section className="decoration">
                  <CompanyIllustration />
                </section>
              </>
            )}
          </div>
          {isAuth.role == "Admin" ? (
            <CompanyControls
              isModifying={isModifying}
              isDeleting={isDeleting}
              setIsDeleting={setIsDeleting}
              setIsModifying={setIsModifying}
              handleModif={handleModif}
              handleDelete={handleDelete}
              company={company}
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
