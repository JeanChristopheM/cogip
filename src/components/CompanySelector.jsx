import { useState } from "react";

function CompanySelector({ companies, handleCompanyChange, currentCompany }) {
  return (
    <select
      onChange={(e) => {
        let company = companies.find((el) => el.name == e.target.value)
          ? companies.find((el) => el.name == e.target.value)
          : "";
        handleCompanyChange(company);
      }}
      defaultValue={currentCompany.name}
    >
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
