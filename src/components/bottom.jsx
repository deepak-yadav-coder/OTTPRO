import React from "react";
import { Link, NavLink } from "react-router-dom";

const BottomNav = () => {
  return (
    <div style={styles.nav}>

      <NavLink to="/" style={({ isActive }) => ({
        ...styles.link,
        backgroundColor: isActive ? "#333" : "transparent",
      })}>🏠 Home</NavLink>

      <NavLink to="/video" style={({ isActive }) => ({
        ...styles.link,
        backgroundColor: isActive ? "#333" : "transparent",
      })}>🎥 Video</NavLink>

      <NavLink to="/chat" style={({ isActive }) => ({
        ...styles.link,
        backgroundColor: isActive ? "#333" : "transparent",
      })}>💬 Chat</NavLink>

    </div>

  );
};

const styles = {
  nav: {
    position: "fixed",
    bottom: 0,
    width: "100%",
    height: "60px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#111",
  },
  link: {
    display: "block",
    padding: "10px",
    color: "white",
    textDecoration: "none",
    borderRadius: "5px",
    // width: "29%"
  },
};

export default BottomNav;