import { useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { companyVerify } from "../logic/formValidation.js";
import putData from "../logic/putData";
import CompanyControls from "./CompanyControls.jsx";

function Company({ companies, contacts, setIsLoaded, isAuth }) {
  let params = useParams();
  const navigate = useNavigate();
  let company = companies.find((el) => el.id == params.companyId);

  const [isModifying, setIsModifying] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

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
    if (check.ok) {
      console.log(formData);
      await putData(
        `https://csharpproject.somee.com/api/company/${params.companyId}`,
        formData
      );
      setIsLoaded(false);
    } else {
      const issues = Object.keys(check);
      for (let issue of issues) {
        if (issue !== "ok") alert(check[issue]);
      }
    }
  };

  return (
    <main>
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
        {isAuth.admin ? (
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
    </main>
  );
}

export default Company;
