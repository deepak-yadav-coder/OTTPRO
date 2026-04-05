import { useNavigate } from "react-router-dom";

const Logout = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <div style={styles.card}>

          <p style={styles.sectionLabel}>Account</p>
          <h2 style={styles.heading}>Logging out?</h2>

          <hr style={styles.divider} />

          <button style={styles.logoutBtn} onClick={handleLogout}>
            Yes, Logout
          </button>
          <button style={styles.cancelBtn} onClick={handleCancel}>
            Cancel
          </button>

        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    fontFamily: "system-ui, Avenir, Helvetica, Arial, sans-serif",
  },
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px 24px",
  },
  card: {
    background: "white",
    borderRadius: "10px",
    padding: "40px 48px",
    maxWidth: "400px",
    width: "100%",
  },
  sectionLabel: {
    fontSize: "11px",
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    color: "#9ca3af",
    marginBottom: "8px",
  },
  heading: {
    fontSize: "22px",
    fontWeight: "700",
    color: "#050101",
    marginBottom: "8px",
  },
  divider: {
    border: "none",
    borderTop: "1px solid #ccc8c8",
    marginBottom: "28px",
  },
  logoutBtn: {
    width: "100%",
    padding: "11px",
    borderRadius: "8px",
    border: "none",
    background: "#1224ca",
    color: "white",
    fontSize: "15px",
    fontWeight: "600",
    cursor: "pointer",
    marginBottom: "12px",
    fontFamily: "system-ui, Avenir, Helvetica, Arial, sans-serif",
  },
  cancelBtn: {
    width: "100%",
    padding: "11px",
    borderRadius: "8px",
    border: "1px solid #ccc8c8",
    background: "none",
    color: "#050101",
    fontSize: "15px",
    cursor: "pointer",
    fontFamily: "system-ui, Avenir, Helvetica, Arial, sans-serif",
  },
};

export default Logout;