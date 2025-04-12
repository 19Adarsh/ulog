import React, { useState } from "react";

const LoginSignupPage = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [isHover, setIsHover] = useState(false);

  const styles = {
    page: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "linear-gradient(to left, #80301A, black)",
    },
    container: {
      backgroundColor: "black",
      borderRadius: "10px",
      padding: "30px",
      width: "100%",
      maxWidth: "400px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
    },
    toggleWrapper: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "20px",
    },
    toggleButton: (active) => ({
      flex: 1,
      padding: "10px",
      backgroundColor: active ? "#007bff" : "#222",
      color: active ? "#fff" : "#aaa",
      border: "none",
      cursor: "pointer",
      fontSize: "16px",
      transition: "all 0.3s ease",
    }),
    formContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "15px",
      maxHeight: "300px",
      overflowY: "auto",
      paddingRight: "5px",
    },
    label: {
      color: "#ccc",
      alignSelf: "flex-start",
      marginLeft: "10%",
      fontSize: "14px",
    },
    input: {
      fontSize: "16px",
      padding: "10px",
      width: "80%",
      maxWidth: "300px",
      borderRadius: "5px",
      border: "1px solid #80301A",
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      color: "#fff",
      outline: "none",
    },
    select: {
      fontSize: "16px",
      padding: "10px",
      width: "80%",
      maxWidth: "300px",
      borderRadius: "5px",
      border: "1px solid #80301A",
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      color: "#fff",
      outline: "none",
    },
    button: {
      padding: "10px",
      backgroundColor: "#fff",
      color: "#000",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      width: "80%",
      maxWidth: "300px",
      fontSize: "16px",
      marginTop: "10px",
    },

    buttonHover: {
      backgroundColor: "#0056b3",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <div style={styles.toggleWrapper}>
          <button
            style={styles.toggleButton(activeTab === "login")}
            onClick={() => setActiveTab("login")}
          >
            Login
          </button>
          <button
            style={styles.toggleButton(activeTab === "signup")}
            onClick={() => setActiveTab("signup")}
          >
            Sign Up
          </button>
        </div>

        {activeTab === "login" && (
          <div style={styles.formContainer}>
            <label style={styles.label}>Phone Number</label>
            <input type="tel" style={styles.input} />
            <label style={styles.label}>Password</label>
            <input type="password" style={styles.input} />
            <button
              style={{
                ...styles.button,
                ...(isHover ? styles.buttonHover : {}),
              }}
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            >
              Login
            </button>
          </div>
        )}

        {activeTab === "signup" && (
          <div style={styles.formContainer}>
            <label style={styles.label}>Full Name*</label>
            <input type="text" style={styles.input} required />
            <label style={styles.label}>Phone Number*</label>
            <input type="tel" style={styles.input} required />
            <label style={styles.label}>Date of Birth*</label>
            <input type="date" style={styles.input} required />
            <label style={styles.label}>Gender</label>
            <select style={styles.select}>
              <option value="">Select</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
            <label style={styles.label}>Referral Code</label>
            <input type="text" style={styles.input} />
            <button
              style={{
                ...styles.button,
                ...(isHover ? styles.buttonHover : {}),
              }}
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            >
              Sign Up
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginSignupPage;
