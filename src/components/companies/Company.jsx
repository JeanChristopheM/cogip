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
  const streetnumberRef = useRef();
  const streetRef = useRef();
  const townRef = useRef();
  const countryRef = useRef();
  const zipRef = useRef();

  const handleModif = async () => {
    const formData = {
      name: nameRef.current.value,
      vat: vatRef.current.value,
      status: statusRef.current.value,
      streetnumber: streetnumberRef.current.value,
      street: streetRef.current.value,
      town: townRef.current.value,
      country: countryRef.current.value,
      zip: zipRef.current.value,
      contacts: [],
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
                <section className="companyGrid__section">
                  <div className="companyGrid__section--child name">
                    <span className="labels">Name : </span>
                    <input
                      type="text"
                      name="companyName"
                      defaultValue={company.name}
                      ref={nameRef}
                      required
                    />
                  </div>
                  <div className="companyGrid__section--child">
                    <span className="labels">VAT : </span>
                    <input
                      type="text"
                      name="companyVat"
                      defaultValue={company.vat}
                      ref={vatRef}
                      required
                    />
                  </div>
                  <div className="companyGrid__section--child">
                    <span className="labels">Status : </span>
                    <select
                      name="companyStatus"
                      ref={statusRef}
                      defaultValue={company.status}
                      required
                    >
                      <option value="">Select a status</option>
                      <option value="Supplier">Supplier</option>
                      <option value="Customer">Customer</option>
                    </select>
                  </div>
                </section>
                <section className="companyGrid__section adress">
                  <h3>Where</h3>
                  <div className="companyGrid__section--child adress">
                    <label htmlFor="streetnumber" className="labels">
                      Street Number :{" "}
                    </label>
                    <input
                      type="text"
                      id="streetnumber"
                      name="streetnumber"
                      ref={streetnumberRef}
                      defaultValue={company.streetnumber}
                    />
                  </div>
                  <div className="companyGrid__section--child adress">
                    <label htmlFor="street" className="labels">
                      Street :{" "}
                    </label>
                    <input
                      type="text"
                      id="street"
                      name="street"
                      ref={streetRef}
                      defaultValue={company.street}
                    />
                  </div>
                  <div className="companyGrid__section--child adress">
                    <label htmlFor="town" className="labels">
                      Town :{" "}
                    </label>
                    <input
                      type="text"
                      id="town"
                      name="town"
                      ref={townRef}
                      defaultValue={company.town}
                    />
                  </div>
                  <div className="companyGrid__section--child adress">
                    <label htmlFor="zip" className="labels">
                      Zip Code :{" "}
                    </label>
                    <input
                      type="text"
                      id="zip"
                      name="zip"
                      ref={zipRef}
                      defaultValue={company.zip}
                    />
                  </div>
                  <div className="companyGrid__section--child adress">
                    <label htmlFor="country" className="labels">
                      Country :{" "}
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      ref={countryRef}
                      defaultValue={company.country}
                    />
                  </div>
                </section>
                <section className="companyGrid__section">
                  <h3>Contacts</h3>
                  <div className="companyGrid__section--child">
                    {company.contacts.length > 0 ? (
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
                    ) : (
                      <span>None</span>
                    )}
                  </div>
                </section>
                <section className="decoration">
                  <CompanyIllustration />
                </section>
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
                <section className="companyGrid__section adress">
                  <h3>Where</h3>
                  <div className="companyGrid__section--child">
                    <span className="labels">Number : </span>
                    <span>{company.streetnumber}</span>
                  </div>
                  <div className="companyGrid__section--child">
                    <span className="labels">Street : </span>
                    <span>{company.street}</span>
                  </div>
                  <div className="companyGrid__section--child">
                    <span className="labels">Town : </span>
                    <span>{company.town}</span>
                  </div>
                  <div className="companyGrid__section--child">
                    <span className="labels">Zip Code : </span>
                    <span>{company.zip}</span>
                  </div>
                  <div className="companyGrid__section--child">
                    <span className="labels">Country : </span>
                    <span>{company.country}</span>
                  </div>
                </section>
                <section className="companyGrid__section">
                  <h3>Contacts</h3>
                  <div className="companyGrid__section--child">
                    {company.contacts.length > 0 ? (
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
                    ) : (
                      <span>None</span>
                    )}
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
