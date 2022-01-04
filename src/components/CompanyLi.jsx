function CompanyLi({ company }) {
    return (
        <li>
            <span className="svg">
                <i className="fas fa-building"></i>
            </span>
            <span className="companyName">{company.name}</span>
            <span className="companyType">{company.status}</span>
        </li>
    );
}

export default CompanyLi;
