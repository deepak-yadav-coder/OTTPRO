const Logout = ({ setIsLoggedIn }) => {


  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <div>
      <h2>Are you sure you want to logout?</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;