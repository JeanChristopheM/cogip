const handleRequests = async (method, src, token, data = null) => {
  const options = {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  if (data) options.body = JSON.stringify(data);

  let message;
  let dataPackage;
  /* Fetching */
  const response = await fetch(src, options);
  const status = response.status;
  if (status === 200 && method === "GET") {
    // SUCCESS AT GETTING DATA
    message = "Success !";
    dataPackage = await response.json();
  } else if (status === 200 && token === null) {
    // SUCCESS AT LOGIN
    message = "Success !";
    dataPackage = await response.json();
  } else if (status === 200) {
    // OTHER SUCCESSES
    message = "Success !";
    dataPackage = null;
  } else if (status !== 200 && token === null) {
    // FAIL AT LOGIN
    message = await response.text();
    dataPackage = null;
  } else {
    // OTHER FAILS
    const body = await response.json();
    message = body.title;
    dataPackage = null;
  }
  return { status, message, dataPackage };
};
export default handleRequests;
