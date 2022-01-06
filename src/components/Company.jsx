import { useParams } from "react-router-dom";
import CompanyControls from "./CompanyControls.jsx";

function Company({ companies }) {
    let params = useParams();
    let company = companies.find((el) => el.id == params.companyId);
    return (
        <main>
            <div className="card">
                <h2>Details about {company.name}</h2>
                <div className="companyGrid">
                    <span>Name : </span>
                    <span id="companyName">{company.name}</span>
                    <span>VAT : </span>
                    <span id="companyVat">{company.vat}</span>
                    <span>Status : </span>
                    <span id="companyStatus">{company.status}</span>
                </div>
                <CompanyControls />
            </div>
        </main>
    );
}

export default Company;
