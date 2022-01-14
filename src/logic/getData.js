const getData = async (source, token) => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  let response = await fetch(source, options);
  let data = await response.json();
  return data;
};
export { getData };
