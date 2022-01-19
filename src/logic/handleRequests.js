const handleRequests = async (method, src, token, data = null) => {
  const options = {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  if (data) options.body = JSON.stringify(data);
  try {
    const response = await fetch(src, options);
    if (!response.ok) {
      let badResponse = await response.json();
      throw new Error(badResponse.title);
    }
    if (!data) {
      let result = await response.json();
      return result;
    }
    return response;
  } catch (e) {
    return e;
  }
};
export default handleRequests;
