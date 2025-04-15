import React from 'react';
import { useNavigate } from 'react-router-dom';

const SelectionPage = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    if (path === "/homedu") {
      localStorage.setItem("userCategory", "education");
    } else if (path === "/homli") {
      localStorage.setItem("userCategory", "lifestyle");
    }
    navigate(path);
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.heading}>Choose Your Destiny</h1>
      <div style={styles.optionsWrapper}>
        <div
          style={{ ...styles.optionBox, ...styles.education }}
          onClick={() => handleNavigate("/homedu")}
        >
          <p style={styles.buttonTitle}>Education</p>
        </div>
        <div
          style={{ ...styles.optionBox, ...styles.lifestyle }}
          onClick={() => handleNavigate("/homli")}
        >
          <p style={styles.buttonTitle}>Lifestyle</p>
        </div>
      </div>
    </div>
  );
};

export default SelectionPage;

const styles = {
  page: {
    backgroundColor: "#000",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  heading: {
    fontSize: "48px",
    fontWeight: "bold",
    color: "white",
    marginBottom: "40px",
    textAlign: "center",
  },
  optionsWrapper: {
    display: "flex",
    gap: "40px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  optionBox: {
    height: "200px",
    width: "300px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    borderRadius: "12px",
    boxShadow: "0 8px 16px rgba(0,0,0,0.3)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
  education: {
    background: "linear-gradient(to right, #80301A, black)",
  },
  lifestyle: {
    background: "linear-gradient(to right, #80301A, black)",
  },
  buttonTitle: {
    fontSize: "26px",
    fontWeight: "600",
    color: "white",
  },
};
