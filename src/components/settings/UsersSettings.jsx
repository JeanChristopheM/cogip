import handleRequests from "../../logic/handleRequests";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";

//. COMPONENT .
const UsersSettings = ({ isAuth }) => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [isDeleting, setIsDeleting] = useState(false);
  //. INIT effect .
  useEffect(() => {
    getUsers();
  }, []);
  //* Fetcher function .
  const getUsers = async () => {
    const data = await handleRequests(
      "GET",
      "https://csharpproject.somee.com/api/Auth/users",
      isAuth.jwt
    );
    setUsers(data.dataPackage);
  };
  //* Handle click on user options .
  const handleOptionsClick = (e) => {
    document
      .querySelectorAll(".userCard.active")
      .forEach((el) => el.classList.remove("active"));
    e.target.parentNode.classList.add("active");
  };
  const handleOptionsCancel = (e) => {
    e.target.parentNode.parentNode.classList.remove("active");
  };
  //* Handle click on edit & delete btns
  const handleUserEdit = (e) => {
    const userId = e.target.parentNode.parentNode.id;
    navigate(`/userEdit/${userId}`);
  };
  const handleUserDelete = async (e) => {
    const userId = e.target.parentNode.parentNode.parentNode.id;
    console.log(`User ${userId}`);
    try {
      const { status, message, dataPackage } = await handleRequests(
        "DELETE",
        `https://csharpproject.somee.com/api/Auth/user/${userId}`,
        isAuth.jwt
      );
      if (status === 200) toast.success(message);
      else toast.error(message);
    } catch (e) {
      console.log(e);
    }
    setIsDeleting(false);
    getUsers();
  };
  //* Handle click on add user .
  const handleAdd = () => {
    navigate("/userAdd");
  };
  //. JSX .
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
          {users.length === 0 ? (
            <div className="fetcherHolder">
              <div className="lds-dual-ring"></div>
            </div>
          ) : (
            users.map((user, index) => {
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
                  <span className="username">@{user.userName}</span>
                  <span className="email">{user.email}</span>
                  <span className="userType">{user.userType}</span>
                  <i
                    className="fas fa-ellipsis-v options"
                    onClick={handleOptionsClick}
                  ></i>
                  <div className="userCardBack">
                    <button type="button" id="editBtn" onClick={handleUserEdit}>
                      Edit user
                    </button>
                    {isDeleting ? (
                      <div className="confirmationDelete">
                        <button
                          type="button"
                          id="confirmDelete"
                          onClick={handleUserDelete}
                        >
                          Confirm
                        </button>
                        <button
                          type="button"
                          id="cancelDelete"
                          onClick={() => setIsDeleting(false)}
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        id="deleteBtn"
                        onClick={() => setIsDeleting(true)}
                      >
                        Delete user
                      </button>
                    )}

                    <i
                      className="fas fa-ellipsis-v options"
                      onClick={handleOptionsCancel}
                    ></i>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
export default UsersSettings;
