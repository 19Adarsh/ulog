import React from "react";
import { Link, useLocation } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { FaUser, FaBriefcase, FaPhoneAlt } from "react-icons/fa";
import image from "../Assets/Golu.jpg"
import { FaShoppingBag } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa"; 

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
  },
  menu: {
    width: "100%",
    height: "70px",
    background: "linear-gradient(to right, #80301A, black)",
    borderRadius: "0px 0px 40px 40px",
    display: "flex",
    alignItems: "center",
    padding: "0 30px",
    boxShadow: "0 10px 25px 0 rgba(0, 0, 0, 0.1)",
    gap: "30px",
  },
  logo: {
    height: "40px",
    width: "40px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  navItems: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },
  ul: {
    display: "flex",
    gap: "10px",
    listStyle: "none",
    alignItems: "center",
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
  searchBox: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
  },
  input: {
    width: "60%",
    maxWidth: "400px",
    padding: "8px 16px",
    borderRadius: "20px",
    border: "1px solid #fff",
    backgroundColor: "transparent",
    color: "white",
    fontSize: "14px",
    outline: "none",
  },
  profile: {
    color: "white",
    fontSize: "24px",
    cursor: "pointer",
  },
};

const LifestyleNavBar = () => {
  const location = useLocation();

  const menuItems = [
    { icon: <GoHome />, label: "Home", path: "/homli" },
    { icon: <FaBriefcase />, label: "Product", path: "/product" },
    { icon: <FaShoppingBag />, label: "Cart", path: "/cartpage" },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.menu}>
        {/* Left Logo */}
        <img
          src={image} 
          alt="Logo"
          style={styles.logo}
        />

        {/* Menu Icons */}
        <div style={styles.navItems}>
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
                      <span
                        style={{
                          ...styles.linkText,
                          ...styles.linkTextVisible,
                        }}
                      >
                        {item.label}
                      </span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Search Box */}
        <div style={styles.searchBox}>
          <input type="text" placeholder="Search..." style={styles.input} />
        </div>

        {/* Profile Icon */}
        <Link to="/profilife">
          <FaUserCircle style={styles.profile} />
        </Link>
      </div>
    </div>
  );
};

export default LifestyleNavBar;
