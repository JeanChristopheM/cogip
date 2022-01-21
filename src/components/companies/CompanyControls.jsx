function CompanyControls({
  isModifying,
  isDeleting,
  setIsModifying,
  setIsDeleting,
  handleModif,
}) {
  const handleDelete = () => {
    console.log("deleted");
  };
  if (isModifying) {
    return (
      <div className={"companyControls"}>
        <button type="button" onClick={handleModif}>
          Submit
        </button>
        <button
          type="button"
          onClick={() => {
            setIsModifying(false);
          }}
        >
          Cancel
        </button>
      </div>
    );
  }
  if (isDeleting) {
    return (
      <div className={"companyControls"}>
        <button type="button" onClick={handleDelete}>
          Confirm
        </button>
        <button
          type="button"
          onClick={() => {
            setIsDeleting(false);
          }}
        >
          Cancel
        </button>
      </div>
    );
  }
  return (
    <div className={"companyControls"}>
      <button
        type="button"
        onClick={() => {
          setIsModifying(true);
        }}
      >
        Modify
      </button>
      <button
        type="button"
        onClick={() => {
          setIsDeleting(true);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default CompanyControls;
