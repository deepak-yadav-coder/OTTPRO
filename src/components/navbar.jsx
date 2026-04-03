import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/icons/favicon.ico"

const Navbar = () => {

  let headerItem = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" }
  ];

  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>
        <img src={logo} alt="Profile" style={styles.img} />
      </h2>
      <ul style={styles.menu}>
        {
          headerItem.map((item, index) => (
            <span key={index}>
              {/* {console.log(item)} */}
              <Link to={item.path} style={styles.menu}>{item.label}</Link>
            </span>
          ))
        }

      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1px 30px",
    backgroundColor: "#111",
    color: "#fff",

  },
  logo: {
    margin: '1px',
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  img: {
    height: '60px',
    width: '60px',
    borderRadius: "30px",
    marginRight: "10px",
    border : '1px solid grey',
  },
  menu: {
    display: "flex",
    gap: "20px",
    color: "white",
    textDecoration: 'none'
  },
};

export default Navbar;