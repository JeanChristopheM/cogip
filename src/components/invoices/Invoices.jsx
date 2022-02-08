import { useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTable, useSortBy, useFilters } from "react-table";
import SelectFilter from "../reusables/SelectFilter";
import { dateFormatter } from "../../logic/dateFormatter";
import { ToastContainer, toast } from "react-toastify";

function Invoices({ invoices, contacts, companies }) {
  useEffect(() => {
    const message = sessionStorage.getItem("cogipToast");
    if (!message) return;
    toast.success(message, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    sessionStorage.removeItem("cogipToast");
  }, []);
  const navigate = useNavigate();
  const handleAdd = (e) => {
    navigate(`/${e.target.id}`);
  };
  /* SETTING UP TABLE */
  const data = useMemo(() => {
    let results = [];
    for (let entry of invoices) {
      const company = companies.find((el) => el.id == entry.company);
      const contact = contacts.find((el) => el.id == entry.contact)
        ? contacts.find((el) => el.id == entry.contact)
        : null;
      let arrow = company.status === "Customer" ? "down" : "up";
      let obj = {
        icon: <i className={`fas fa-arrow-${arrow}`}></i>,
        col1: entry.reference,
        col2: `${entry.amount}€`,
        col3: `${entry.paid}€`,
        col4: `${entry.due}€`,
        col5: company.name,
        col6: contact ? `${contact.firstname} ${contact.lastname}` : "None",
        col7: dateFormatter(entry.received),
        col8: entry.paidStatus ? "Paid" : "To be paid",
        id: entry.id,
      };
      results.push(obj);
    }
    return results;
  }, [invoices]);
  const columns = useMemo(
    () => [
      {
        Header: "",
        accessor: "icon",
        className: "invoiceIcon",
        disableSortBy: true,
        disableFilters: true,
      },
      {
        Header: "Reference",
        accessor: "col1",
        className: "invoiceReference",
        disableFilters: true,
      },
      {
        Header: "Amount",
        accessor: "col2",
        className: "invoiceAmount",
        disableFilters: true,
      },
      {
        Header: "Paid",
        accessor: "col3",
        className: "invoicePaid",
        disableFilters: true,
      },
      {
        Header: "Due",
        accessor: "col4",
        className: "invoiceDue",
        disableFilters: true,
      },
      {
        Header: "Company",
        accessor: "col5",
        className: "invoiceCompany",
        Filter: SelectFilter,
        filter: "includes",
      },
      {
        Header: "Contact",
        accessor: "col6",
        className: "invoiceContact",
        Filter: SelectFilter,
        filter: "includes",
      },
      {
        Header: "Received",
        accessor: "col7",
        className: "invoiceReceived",
        disableFilters: true,
      },
      {
        Header: "Status",
        accessor: "col8",
        className: "invoicePaidStatus",
        Filter: SelectFilter,
        filter: "includes",
      },
      {
        Header: "ID",
        accessor: "id",
        className: "contactId",
        disableFilters: true,
      },
    ],
    [invoices]
  );
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
        initialState: {
          sortBy: [{ id: "col1", desc: false }],
          hiddenColumns: ["id"],
        },
      },
      useFilters,
      useSortBy
    );
  const handleClick = (header, contactName, companyName, invoiceId) => {
    switch (header) {
      case "Contact":
        if (contactName !== "None")
          navigate(
            `/contact/${
              contacts.find(
                (el) => `${el.firstname} ${el.lastname}` == contactName
              ).id
            }`
          );
        break;
      case "Company":
        navigate(
          `/company/${companies.find((el) => el.name == companyName).id}`
        );
        break;
      case "Reference":
        navigate(`/invoice/${invoiceId}`);
        break;
      default:
        break;
    }
  };
  return (
    <main>
      <section className="invoices card">
        <h2>
          Invoices
          <button
            type="button"
            id="invoiceAdd"
            onClick={handleAdd}
            style={{ padding: "0 .5rem" }}
          >
            +
          </button>
        </h2>
        <table className="table" {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps(
                      column.getSortByToggleProps({
                        className: column.className,
                      })
                    )}
                  >
                    <div className="thContainer">
                      {column.render("Header")}
                      <span>
                        {column.isSorted ? (
                          column.isSortedDesc ? (
                            <i className="fas fa-arrow-alt-circle-up sorted"></i>
                          ) : (
                            <i className="fas fa-arrow-alt-circle-down sorted"></i>
                          )
                        ) : (
                          <i className="fas fa-arrow-alt-circle-down unSorted"></i>
                        )}
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            ))}
            {headerGroups.map((headerGroup) => (
              <tr
                {...headerGroup.getHeaderGroupProps()}
                className={"filtersRow"}
              >
                {headerGroup.headers.map((column) => (
                  <th
                    key={column.id}
                    {...column.getHeaderProps({
                      className: column.className,
                    })}
                  >
                    <div className="filterContainer">
                      {column.canFilter ? column.render("Filter") : null}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td
                        {...cell.getCellProps({
                          className: cell.column.className,
                        })}
                        onClick={() => {
                          handleClick(
                            cell.column.Header,
                            cell.row.allCells[6].value,
                            cell.row.allCells[5].value,
                            cell.row.allCells[9].value
                          );
                        }}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
      <ToastContainer />
    </main>
  );
}

export default Invoices;
