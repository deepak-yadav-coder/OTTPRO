
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import profileIcon from "../assets/icons/favicon_io/favicon.ico";

const Sidebar = () => {

    const [open, setOpen] = useState(false);

    const menuItems = [
        { label: "Profile", path: "/profile" },
        { label: "Settings", path: "/settings" },
        { label: "Logout", path: "/logout" },
    ];

    return (
        <div style={styles.container} >
            {/* Profile Icon */}
            <div
                style={styles.iconWrapper}
                onClick={() => setOpen(!open)}
            >
                <img src={profileIcon} alt="Profile" style={styles.icon} />
            </div>

            {/* Dropdown Menu */}
            {open && (
                <div style={styles.menu}>
                    {menuItems.map((item, index) => (
                        <NavLink
                            key={index}
                            to={item.path}
                            style={({ isActive }) => ({
                                ...styles.link,
                                backgroundColor: isActive ? "#1f2937" : "transparent",
                            })}
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </div>
            )}

        </div>
    );
};


const styles = {
    container: {
        position: "fixed",
        top: "10px",
        right: "20px",
        zIndex: 1000
    },

    iconWrapper: {
        cursor: "pointer",
        position: "fixed",
        top: "10px",
        right: "20px",
    },

    icon: {
        width: "40px",
        height: "40px"
    },

    menu: {
        marginTop: "50px",
        backgroundColor: "#111",
        borderRadius: "10px",
        padding: "10px",
        width: "150px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
    },

    link: {
        display: "block",
        padding: "10px",
        color: "white",
        textDecoration: "none",
        borderRadius: "5px"
    }
};

export default Sidebar;