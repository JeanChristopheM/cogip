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
      phonenumber: e.target.phonenumber.value,
      userName: e.target.username.value,
      password: e.target.password.value,
      userType: e.target.userStatus.value,
    };
    console.log(formData);
    const { status, message, dataPackage } = await handleRequests(
      "POST",
      "https://csharpproject.somee.com/api/Auth/register",
      isAuth.jwt,
      formData
    );
    if (status === 200) toast.success(message);
    else toast.error(message);
    setIsFetching(false);
  };
  return (
    <main>
      <section className="card">
        <h2>{isFetching ? "Sending the form" : "Please fill the form up"}</h2>
        {isFetching ? (
          <div className="fetcherHolder">
            <div className="lds-dual-ring"></div>
          </div>
        ) : (
          <form className="userForm" onSubmit={handleSubmit} method="post">
            <div className="formContent">
              <div>
                <label htmlFor="firstname">Firstname : </label>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder="Firstname"
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
              <div>
                <span htmlFor="phonenumber">Phonenumber : </span>
                <input
                  type="text"
                  name="phonenumber"
                  id="phonenumber"
                  placeholder="Phonenumber"
                  required
                />
              </div>
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
            </div>
            <div className="controls">
              <button>Submit</button>
              <button type="button" onClick={() => navigate("/settings")}>
                Cancel
              </button>
            </div>
          </form>
        )}
      </section>
      <section className="formIllu">
        <ContactIllustration />
      </section>
      <ToastContainer />
    </main>
  );
};

export default UserAdd;
