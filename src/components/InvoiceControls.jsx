function InvoiceControls({
    invoice,
    isModifying,
    setIsModifying,
    setSelectedCompany,
    originalCompany,
    isDeleting,
    setIsDeleting,
    originalContact,
    setSelectedContact,
}) {
    const handleDelete = () => {
        console.log("deleted");
    };
    if (isModifying) {
        return (
            <div className={"invoiceControls"}>
                <button type="button">Submit</button>
                <button
                    type="button"
                    onClick={() => {
                        setIsModifying(false);
                        setSelectedCompany(originalCompany);
                        setSelectedContact(originalContact);
                    }}
                >
                    Cancel
                </button>
            </div>
        );
    }
    if (isDeleting) {
        return (
            <div className={"invoiceControls"}>
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
        <div className={"invoiceControls"}>
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
    return (
        <div className={"invoiceControls"}>
            {isDeleting ? "" : ""}
            {isModifying ? (
                <>
                    <button type="button">Submit</button>
                    <button
                        type="button"
                        onClick={() => {
                            setIsModifying(false);
                            setSelectedCompany(originalCompany);
                            setSelectedContact(originalContact);
                        }}
                    >
                        Cancel
                    </button>
                </>
            ) : (
                <>
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
                </>
            )}
        </div>
    );
}

export default InvoiceControls;
