import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import handleRequests from "../../logic/handleRequests";

const UserEdit = ({ isAuth }) => {
  const [user, setUser] = useState(null);
  const params = useParams();
  const navigate = useNavigate();
  const getUser = async (userId) => {
    try {
      const { status, message, dataPackage } = await handleRequests(
        "GET",
        `https://csharpproject.somee.com/api/Auth/user/${userId}`,
        isAuth.jwt
      );
      if (status === 200) {
        setUser(dataPackage[0]);
      } else {
        toast.error(message);
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getUser(params.userId);
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      email: e.target.email.value,
      userName: e.target.username.value,
      password: e.target.password.value,
      userType: e.target.userStatus.value,
    };
    try {
      const { status, message, dataPackage } = await handleRequests(
        "PUT",
        `https://csharpproject.somee.com/api/Auth/user/${params.userId}`,
        isAuth.jwt,
        formData
      );
      if (status === 200) toast.success(message);
      else toast.error(message);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <main>
      <div className="card">
        <h2>Modify the user</h2>
        {user ? (
          <form method="post" className="userForm" onSubmit={handleSubmit}>
            <div className="formContent">
              <fieldset>
                <legend>User informations</legend>
                <div>
                  <label htmlFor="firstname">Firstname : </label>
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    placeholder="Firstname"
                    defaultValue={user.firstname}
                    autoFocus
                    required
                  />
                </div>
                <div>
                  <span htmlFor="lastname">Lastname : </span>
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    placeholder="Lastname"
                    defaultValue={user.lastname}
                    required
                  />
                </div>
                <div>
                  <span htmlFor="email">Email : </span>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email"
                    defaultValue={user.email}
                    required
                  />
                </div>
              </fieldset>
              <fieldset>
                <legend>User credentials</legend>
                <div>
                  <span htmlFor="username">Username : </span>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username"
                    defaultValue={user.userName}
                    required
                  />
                </div>
                <div>
                  <span htmlFor="Password">Password : </span>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    required
                  />
                </div>
                <div>
                  <span>Status : </span>
                  <select
                    name="userStatus"
                    id="userStatus"
                    defaultValue={user.userType}
                    required
                  >
                    <option value="">-Select a user status-</option>
                    <option value="Admin">Admin</option>
                    <option value="User">User</option>
                  </select>
                </div>
              </fieldset>
            </div>
            <div className="controls">
              <button>Submit</button>
              <button type="button" onClick={() => navigate("/settings")}>
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <div className="fetcherHolder">
            <div className="lds-dual-ring"></div>
          </div>
        )}
      </div>
      <ToastContainer />
    </main>
  );
};

export default UserEdit;
