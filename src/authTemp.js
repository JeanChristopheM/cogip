export default dbUserCheck = async (data) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  try {
    const response = await fetch(
      "https://csharpproject.somee.com/api/Auth/login",
      options
    );
    const res = [response.status, await response.text()];
    return res;
  } catch (error) {
    return error;
  }
};
