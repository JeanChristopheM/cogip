import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useTable, useSortBy } from "react-table";

function Contacts({ contacts, companies }) {
  const navigate = useNavigate();
  const handleAdd = (e) => {
    navigate(`/${e.target.id}`);
  };

  /* SETTING UP TABLE */
  const data = useMemo(() => {
    let results = [];
    for (let entry of contacts) {
      let obj = {
        icon: <i className="fas fa-user"></i>,
        col1: `${entry.firstname} ${entry.lastname}`,
        col2: entry.email,
        col3: entry.phonenumber,
        col4: companies.find((el) => el.id == entry.contactcompany).name,
        col5: `${entry.added.slice(8, 10)}-${entry.added.slice(
          5,
          7
        )}-${entry.added.slice(0, 4)}`,
        id: entry.id,
      };
      results.push(obj);
    }
    return results;
  }, []);
  const columns = useMemo(
    () => [
      {
        Header: "",
        accessor: "icon",
        className: "contactIcon",
        disableSortBy: true,
      },
      {
        Header: "Name",
        accessor: "col1",
        className: "contactName",
      },
      { Header: "Email", accessor: "col2", className: "contactEmail" },
      {
        Header: "Phone number",
        accessor: "col3",
        className: "contactPhonenumber",
      },
      {
        Header: "Company",
        accessor: "col4",
        className: "contactContactcompany",
      },
      { Header: "Added", accessor: "col5", className: "contactAdded" },
      { Header: "ID", accessor: "id", className: "contactId" },
    ],
    []
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
          <i
            className="fas fa-plus-square plusButton"
            id="contactAdd"
            onClick={handleAdd}
          ></i>
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
                    {column.render("Header")}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " 🔼"
                          : " 🔽"
                        : ""}
                    </span>
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
                          cell.column.Header == "Name" ||
                          cell.column.Header == "Company"
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
    </main>
  );
}

export default Contacts;
