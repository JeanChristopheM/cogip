import handleRequests from "../../logic/handleRequests";
import { useEffect, useState } from "react";

const fakeUsersEndpoint = (method, src, token, data = null) => {
  let status = 200;
  let message = "Success";
  let dataPackage = [
    {
      id: 1,
      firstname: "JC",
      lastname: "Molhant",
      username: "JeanCM",
      email: "jc@jc.com",
      role: "Admin",
    },
    {
      id: 2,
      firstname: "Baptiste",
      lastname: "Geron",
      username: "BapG",
      email: "bap@baptiste.com",
      role: "Admin",
    },
    {
      id: 3,
      firstname: "Nicolas",
      lastname: "Jamar",
      username: "MrJamar",
      email: "n.jamar@becode.org",
      role: "User",
    },
    {
      id: 4,
      firstname: "Tanya",
      lastname: "Leenders",
      username: "TanyaL",
      email: "t.leenders@becode.org",
      role: "User",
    },
  ];
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ status, message, dataPackage });
      reject("Bad request ?");
    }, 2000);
  });
};
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
  const [users, setUsers] = useState([]);
  const amountOfPlaceholders = [1, 2, 3, 4, 5];
  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = async () => {
    const data = await fakeUsersEndpoint(
      "GET",
      "https://csharpproject.somee/users",
      isAuth.jwt
    );
    setUsers(data.dataPackage);
  };
  const handleOptionsClick = (e) => {
    console.log(e.target.parentNode.id);
  };
  return (
    <div className="settings__users">
      <div className="users card">
        <h2 className="settings__users--title">Users</h2>
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
                          {user.firstname.slice(0, 1).toUpperCase()}
                          {user.lastname.slice(0, 1).toUpperCase()}
                        </span>
                      </div>
                    </figure>
                    <span className="name">
                      {user.firstname} {user.lastname}
                    </span>
                    <span className="username">@{user.username}</span>
                    <span className="email">{user.email}</span>
                    <span className="userType">{user.role}</span>
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
