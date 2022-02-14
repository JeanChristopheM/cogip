import { useState } from "react";
import { useNavigate } from "react-router-dom";
import handleRequests from "../../logic/handleRequests.js";
import ContactIllustration from "../reusables/ContactIllustration.jsx";

import { ToastContainer, toast } from "react-toastify";

const UserAdd = ({ isAuth }) => {
  const navigate = useNavigate();
  const [isFetching, setIsFetching] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsFetching(true);
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
        "POST",
        "https://csharpproject.somee.com/api/Auth/register",
        isAuth.jwt,
        formData
      );
      if (status === 200) toast.success(message);
      else toast.error(message);
    } catch (e) {
      console.log(e);
    }
    setIsFetching(false);
  };
  return (
    <main>
      <div style={{ position: "relative" }} className="card">
        <h2>{isFetching ? "Sending the form" : "Please fill the form up"}</h2>
        {isFetching ? (
          <div className="fetcherHolder">
            <div className="lds-dual-ring"></div>
          </div>
        ) : (
          <>
            <form className="userForm" onSubmit={handleSubmit} method="post">
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
                    <select name="userStatus" id="userStatus" required>
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
            <section className="formIllu">
              <ContactIllustration />
            </section>
          </>
        )}
      </div>
      <ToastContainer />
    </main>
  );
};

export default UserAdd;
