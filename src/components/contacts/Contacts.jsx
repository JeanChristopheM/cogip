import { useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTable, useSortBy, useFilters } from "react-table";
import SelectFilter from "../reusables/SelectFilter";
import { dateFormatter } from "../../logic/dateFormatter";
import { ToastContainer, toast } from "react-toastify";

function Contacts({ contacts, companies }) {
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
    for (let contact of contacts) {
      let obj = {
        icon: <i className="fas fa-user"></i>,
        col1: `${contact.firstname} ${contact.lastname}`,
        col2: contact.email,
        col3: contact.phonenumber,
        col4:
          contact.companies.length === 0
            ? "None"
            : contact.companies.length === 1
            ? companies.find((el) => el.id == contact.companies[0]).name
            : "Multiple",
        col5: dateFormatter(contact.added),
        id: contact.id,
      };
      results.push(obj);
    }
    return results;
  }, [contacts]);
  const columns = useMemo(
    () => [
      {
        Header: "",
        accessor: "icon",
        className: "contactIcon",
        disableSortBy: true,
        disableFilters: true,
      },
      {
        Header: "Name",
        accessor: "col1",
        className: "contactName",
        disableFilters: true,
      },
      {
        Header: "Email",
        accessor: "col2",
        className: "contactEmail",
        disableFilters: true,
      },
      {
        Header: "Phone number",
        accessor: "col3",
        className: "contactPhonenumber",
        disableFilters: true,
      },
      {
        Header: "Company",
        accessor: "col4",
        className: "contactContactcompany",
        Filter: SelectFilter,
        filter: "includes",
      },
      {
        Header: "Added",
        accessor: "col5",
        className: "contactAdded",
        disableFilters: true,
      },
      {
        Header: "ID",
        accessor: "id",
        className: "contactId",
        disableFilters: true,
      },
    ],
    [contacts]
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
  const handleClick = (header, contactId, companyName) => {
    switch (header) {
      case "Name":
        navigate(`/contact/${contactId}`);
        break;
      case "Company":
        navigate(
          `/company/${companies.find((el) => el.name == companyName).id}`
        );
        break;
      default:
        break;
    }
  };
  return (
    <main>
      <section className="contacts card">
        <h2>
          Contacts
          <button
            type="button"
            id="contactAdd"
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
                            cell.row.allCells[4].value
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

export default Contacts;
