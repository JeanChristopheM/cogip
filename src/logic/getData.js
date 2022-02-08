import handleRequests from "./handleRequests";
const getInvoices = async (token) => {
  const src = "https://csharpproject.somee.com/api/Invoice";
  return await handleRequests("GET", src, token);
};

const getContacts = async (token) => {
  const src = "https://csharpproject.somee.com/api/Contact";
  return await handleRequests("GET", src, token);
};

const getCompanies = async (token) => {
  const src = "https://csharpproject.somee.com/api/Company";
  return await handleRequests("GET", src, token);
};

const getCategories = async (token) => {
  const src = "https://csharpproject.somee.com/api/InvoiceCategory";
  return await handleRequests("GET", src, token);
};

export { getInvoices, getContacts, getCompanies, getCategories };
