const getCompanies = async () => {
    let response = await fetch("/companies.json");
    let data = await response.json();
    return data;
};
const getInvoices = async () => {
    let response = await fetch("/invoices.json");
    let data = await response.json();
    return data;
};
const getContacts = async () => {
    let response = await fetch("/contacts.json");
    let data = await response.json();
    return data;
};

export { getCompanies, getInvoices, getContacts };
