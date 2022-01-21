import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useTable, useSortBy, useFilters } from "react-table";
import SelectFilter from "../reusables/SelectFilter";

function Invoices({ invoices, contacts, companies, setInvoiceId }) {
  const navigate = useNavigate();
  const handleAdd = (e) => {
    navigate(`/${e.target.id}`);
  };
  /* SETTING UP TABLE */
  const data = useMemo(() => {
    let results = [];
    for (let entry of invoices) {
      const company = companies.find((el) => el.id == entry.company);
      const contact = contacts.find((el) => el.id == entry.contact);
      let arrow = company.status === "Client" ? "down" : "up";
      let obj = {
        icon: <i className={`fas fa-arrow-${arrow}`}></i>,
        col1: entry.reference,
        col2: `${entry.amount}€`,
        col3: company.name,
        col4: `${contact.firstname} ${contact.lastname}`,
        col5: `${entry.received.slice(8, 10)}-${entry.received.slice(
          5,
          7
        )}-${entry.received.slice(0, 4)}`,
        col6: entry.paid ? "Paid" : "To be paid",
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
        Header: "Company",
        accessor: "col3",
        className: "invoiceCompany",
        Filter: SelectFilter,
        filter: "includes",
      },
      {
        Header: "Contact",
        accessor: "col4",
        className: "invoiceContact",
        Filter: SelectFilter,
        filter: "includes",
      },
      {
        Header: "Received",
        accessor: "col5",
        className: "invoiceReceived",
        disableFilters: true,
      },
      {
        Header: "Status",
        accessor: "col6",
        className: "invoicePaid",
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
                    style={{
                      color: "rgb(39, 76, 119)",
                      fontWeight: "bold",
                      cursor: "pointer",
                      fontSize: "1.2rem",
                      padding: "1rem",
                    }}
                  >
                    <div className="thContainer">
                      {column.render("Header")}
                      <span>
                        {column.isSorted ? (
                          column.isSortedDesc ? (
                            <i
                              style={{
                                color: "rgb(39, 76, 119)",
                                fontSize: ".9rem",
                                paddingLeft: ".2rem",
                              }}
                              className="fas fa-arrow-alt-circle-up"
                            ></i>
                          ) : (
                            <i
                              style={{
                                color: "rgb(39, 76, 119)",
                                fontSize: ".9rem",
                                paddingLeft: ".2rem",
                              }}
                              className="fas fa-arrow-alt-circle-down"
                            ></i>
                          )
                        ) : (
                          <i
                            style={{
                              color: "rgb(135, 156, 179)",
                              fontSize: ".9rem",
                              paddingLeft: ".2rem",
                              opacity: ".3",
                            }}
                            className="fas fa-arrow-alt-circle-down"
                          ></i>
                        )}
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            ))}
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
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
                        style={
                          cell.column.Header == "Contact" ||
                          cell.column.Header == "Company" ||
                          cell.column.Header == "Reference"
                            ? {
                                padding: "1rem",
                                //border: "solid 1px rgb(135, 156, 179)",
                                cursor: "pointer",
                              }
                            : {
                                padding: "1rem",
                                //border: "solid 1px rgb(135, 156, 179)",
                              }
                        }
                        onClick={() => {
                          handleClick(
                            cell.column.Header,
                            cell.row.allCells[4].value,
                            cell.row.allCells[3].value,
                            cell.row.allCells[7].value
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
    </main>
  );
}

export default Invoices;
