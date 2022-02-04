import handleRequests from "./handleRequests";

const checkAuth = async (setAuth, switchTheme, setCheckedAuth) => {
  const checkFetch = async (authData) => {
    const { status, message, dataPackage } = await handleRequests(
      "GET",
      "https://csharpproject.somee.com/api/InvoiceCategory",
      authData.jwt
    );
    return { status, message, dataPackage };
  };

  /* Checking if theme stored in local storage and applying if needed */
  if (localStorage.getItem("cogipTheme")) {
    switchTheme(JSON.parse(localStorage.getItem("cogipTheme")));
  }
  /* Checking stored data & fetching with token */
  if (sessionStorage.getItem("cogipAuth")) {
    try {
      const authData = JSON.parse(sessionStorage.getItem("cogipAuth"));
      const { status } = await checkFetch(authData);
      if (status === 200) setAuth(authData);
    } catch (e) {
      console.log(e);
    }
  } else if (localStorage.getItem("cogipAuth")) {
    try {
      const authData = JSON.parse(localStorage.getItem("cogipAuth"));
      const { status } = checkFetch(authData);
      if (status === 200) setAuth(authData);
    } catch (e) {
      console.log(e);
    }
  }
  setCheckedAuth(true);
};
export default checkAuth;
