const dateFormatter = (dateInput) => {
  const dateOutput = `${dateInput.slice(8, 10)}-${dateInput.slice(
    5,
    7
  )}-${dateInput.slice(0, 4)}`;
  return dateOutput;
};
export { dateFormatter };
