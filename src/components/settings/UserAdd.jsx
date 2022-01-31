const UserAdd = () => {
  return (
    <main>
      <section className="card">
        <h2>Please fill the form up</h2>
        <form className="userForm">
          <ul>
            <li>
              <span>Firstname : </span>
              <input type="text" placeholder="Firstname" />
            </li>
            <li>
              <span>Lastname : </span>
              <input type="text" placeholder="Lastname" />
            </li>
            <li>
              <span>Username : </span>
              <input type="text" placeholder="Username" />
            </li>
            <li>
              <span>Email : </span>
              <input type="text" placeholder="Email" />
            </li>
            <li>
              <span>Phonenumber : </span>
              <input type="text" placeholder="Phonenumber" />
            </li>
            <li>
              <span>Status : </span>
              <select name="userStatus" id="userStatus">
                <option value="">-Select a user status-</option>
                <option value="Admin">Admin</option>
                <option value="User">User</option>
              </select>
            </li>
          </ul>
          <button>Submit</button>
        </form>
      </section>
    </main>
  );
};

export default UserAdd;
