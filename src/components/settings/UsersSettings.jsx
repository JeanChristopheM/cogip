import handleRequests from "../../logic/handleRequests";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserPlaceholder = () => {
  return (
    <div className="userCard placeholder">
      <span className="imageContainer">
        <span className="img"></span>
      </span>
      <span className="name">a</span>
      <span className="username">a</span>
      <span className="email">a</span>
      <span className="userType">a</span>
      <span className="options"></span>
    </div>
  );
};
const UsersSettings = ({ isAuth }) => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const amountOfPlaceholders = [1, 2, 3, 4, 5];
  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = async () => {
    const data = await handleRequests(
      "GET",
      "https://csharpproject.somee.com/api/Auth/users",
      isAuth.jwt
    );
    setUsers(data.dataPackage);
  };
  const handleOptionsClick = (e) => {
    console.log(e.target.parentNode.id);
  };
  const handleAdd = () => {
    navigate("/userAdd");
  };
  return (
    <div className="settings__users">
      <div className="users card">
        <h2 className="settings__users--title">
          Users
          <button
            type="button"
            id="userAdd"
            onClick={handleAdd}
            style={{ padding: "0 .5rem" }}
          >
            +
          </button>
        </h2>
        <div className="usersContainer">
          {users.length === 0
            ? amountOfPlaceholders.map((placeholder) => (
                <UserPlaceholder key={placeholder} />
              ))
            : users.map((user, index) => {
                const colors = (index) => {
                  let colorIndex = index % 4;
                  let colorArray = ["#61C9A8", "#ED9B40", "#BA3B46", "#508991"];
                  return colorArray[colorIndex];
                };
                return (
                  <div key={user.id} id={user.id} className="userCard">
                    <figure className="imageContainer">
                      <div
                        className="img"
                        style={{ backgroundColor: colors(index) }}
                      >
                        <span className="img--text">
                          {/* user.firstname.slice(0, 1).toUpperCase() */ "F"}
                          {/* user.lastname.slice(0, 1).toUpperCase() */ "L"}
                        </span>
                      </div>
                    </figure>
                    <span className="name">
                      {"Firstname"} {"Lastname"}
                    </span>
                    <span className="username">@{user.userName}</span>
                    <span className="email">{user.email}</span>
                    <span className="userType">{user.userType}</span>
                    <i
                      className="fas fa-ellipsis-v options"
                      onClick={handleOptionsClick}
                    ></i>
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
};
export default UsersSettings;
