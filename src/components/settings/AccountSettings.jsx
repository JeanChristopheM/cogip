const AccountSettings = ({ isAuth }) => {
  return (
    <div className="card">
      <h2>You : </h2>
      <br />
      <p>Username : {isAuth.name}</p>
      <p>Role : {isAuth.role}</p>
    </div>
  );
};
export default AccountSettings;
