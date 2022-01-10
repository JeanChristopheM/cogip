function CompanyControls({
  isModifying,
  isDeleting,
  setIsModifying,
  setIsDeleting,
}) {
  const handleDelete = () => {
    console.log("deleted");
  };
  const handleSubmit = () => {
    console.log("Submitting changes");
  };
  if (isModifying) {
    return (
      <div className={"contactControls"}>
        <button type="button" onClick={handleSubmit}>
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
      <div className={"contactControls"}>
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
    <div className={"contactControls"}>
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
