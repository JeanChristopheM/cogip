import { useState } from "react";

function CompanySelector({ companies, setSelectedCompany, currentCompany }) {
    const handleChange = (e) => {
        setSelectedCompany(companies.find((el) => el.name == e.target.value));
    };
    return (
        <select onChange={handleChange} defaultValue={currentCompany.name}>
            <option value="">Select a company</option>
            {companies.map((company) => {
                return (
                    <option value={company.name} key={company.id}>
                        {company.name}
                    </option>
                );
            })}
        </select>
    );
}

export default CompanySelector;
