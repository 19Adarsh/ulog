import React from "react";
import { Link, useLocation } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { FaUser, FaBriefcase, FaRegSmile, FaPhoneAlt } from "react-icons/fa";

const styles = {
  container: {
    background: "#120E0E",
    display: "flex",
    justifyContent: "center",
    padding: "10px",
  },
  menu: {
    width: "550px",
    height: "80px",
    background: "linear-gradient(to right, #80301A, black)",
    borderRadius: "40px 10px 40px",
    display: "flex",
    alignItems: "center",
    padding: "0 30px",
    boxShadow: "0 10px 25px 0 rgba(0, 0, 0, 0.1)",
  },
  ul: {
    width: "100%",
    listStyle: "none",
    display: "flex",
    gap: "10px",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 0,
  },
  link: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "50px",
    height: "20px",
    borderRadius: "99rem",
    position: "relative",
    overflow: "hidden",
    transition: "all 0.3s ease-in-out",
    cursor: "pointer",
    padding: "10px",
    color: "white",
    textDecoration: "none",
  },
  linkExpanded: {
    width: "auto",
    padding: "10px 20px",
    background: "rgba(255, 255, 255, 0.3)",
    transform: "scale(1.2)",
    display: "flex",
    gap: "10px",
    border: "2px solid white",
    transition: "transform 0.6s cubic-bezier(0.42, 0, 0.58, 1)",
  },
  linkIcon: {
    fontSize: "24px",
    transition: "transform 0.4s ease-in-out",
  },
  linkText: {
    fontSize: "14px",
    whiteSpace: "nowrap",
    opacity: 0,
    transition: "opacity 0.3s ease-in-out",
  },
  linkTextVisible: {
    opacity: 1,
  },
};

const NavBar = () => {
  const location = useLocation();
// ahachg
  const menuItems = [
    { icon: <GoHome />, label: "Home", path: "/" },
    { icon: <FaUser />, label: "Login", path: "/login" },
    { icon: <FaBriefcase />, label: "Portfolio", path: "" },
    { icon: <FaRegSmile />, label: "Welcome", path: "" },
    { icon: <FaPhoneAlt />, label: "Contact", path: "" },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.menu}>
        <ul style={styles.ul}>
          {menuItems.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <li
                key={index}
                style={{
                  ...styles.link,
                  ...(isActive ? styles.linkExpanded : {}),
                }}
              >
                <Link
                  to={item.path}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  <span style={styles.linkIcon}>{item.icon}</span>
                  {isActive && (
                    <span style={{ ...styles.linkText, ...styles.linkTextVisible }}>
                      {item.label}
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;