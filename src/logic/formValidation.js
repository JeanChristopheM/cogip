const invoiceVerify = (dataToVerify) => {
  let response = {};
  if (!dataToVerify.reference) response.reference = "Please enter a reference";
  if (!dataToVerify.company) response.company = "Please select a company";
  if (!dataToVerify.amount) response.amount = "Please enter an amount";
  if (!dataToVerify.received) response.received = "Please select a date";
  if (dataToVerify.paidStatus !== false && dataToVerify.paidStatus !== true)
    response.paid = "Please select a paid status";
  response.ok = Object.keys(response).length > 0 ? false : true;
  return response;
};
const contactVerify = (dataToVerify) => {
  let response = {};
  if (!dataToVerify.firstname) response.firstname = "Please enter a firstname";
  if (!dataToVerify.lastname) response.lastname = "Please enter a lastname";
  if (!dataToVerify.companies) response.companies = "Please select a contact";
  if (!dataToVerify.email) response.email = "Please enter an email";
  if (!dataToVerify.phonenumber)
    response.phonenumber = "Please enter a phone number";
  response.ok = Object.keys(response).length > 0 ? false : true;
  return response;
};

const companyVerify = (dataToVerify) => {
  let response = {};
  if (!dataToVerify.name) response.name = "Please enter a name";
  if (!dataToVerify.vat) response.vat = "Please enter a vat number";
  if (!dataToVerify.town) response.town = "Please enter a town";
  if (!dataToVerify.street) response.street = "Please enter a street";
  if (!dataToVerify.streetnumber)
    response.streetnumber = "Please enter a street number";
  if (!dataToVerify.country) response.country = "Please enter a country";
  if (!dataToVerify.status) response.status = "Please select a status";
  response.ok = Object.keys(response).length > 0 ? false : true;
  return response;
};

export { invoiceVerify, contactVerify, companyVerify };
