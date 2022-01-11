const getData = async (source) => {
  let response = await fetch(source);
  let data = await response.json();
  return data;
};
export { getData };
