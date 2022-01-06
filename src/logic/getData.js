const getCompanies = async (source) => {
    let response = await fetch(source);
    let data = await response.json();
    return data;
};

const getInvoices = async (source) => {
    let response = await fetch(source);
    let data = await response.json();
    return data;
};

const getContacts = async (source) => {
    let response = await fetch(source);
    let data = await response.json();
    return data;
};
export { getCompanies, getInvoices, getContacts };
