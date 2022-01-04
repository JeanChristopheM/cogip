function CompanyLi({ data }) {
    return (
        <li>
            <span className="svg">
                <i className="fas fa-building"></i>
            </span>
            <span className="companyName">{data.name}</span>
            <span className="companyType">{data.status}</span>
        </li>
    );
}

export default CompanyLi;
