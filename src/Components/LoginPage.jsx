import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [isHover, setIsHover] = useState(false);
  const [otpVisible, setOtpVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const phoneInputRef = useRef(null);
  const otpInputRef = useRef(null);

  const navigate = useNavigate();

  const isValidPhone = /^\d{10}$/.test(phone);
  const isValidOtp = /^\d{6}$/.test(otp);
  const isFormValid = isValidPhone && isValidOtp;

  const handleGetOtp = () => {
    setOtpVisible(true);
  };

  useEffect(() => {
    if (phoneInputRef.current) {
      phoneInputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (otpVisible && otpInputRef.current) {
      otpInputRef.current.focus();
    }
  }, [otpVisible]);

  const handleLogin = () => {
    if (isFormValid) {
      setIsLoading(true); // Set loading state to true when login is clicked
      setTimeout(() => {
        setIsLoading(false); // Set loading state to false after 2 seconds
        navigate("/select"); // Redirect to the SelectionPage after 2 seconds
      }, 2000);
    }
  };

  const styles = {
    page: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "linear-gradient(to left, #80301A, black)",
      position: "relative", // Added position relative for positioning the spinner
    },
    container: {
      backgroundColor: "black",
      borderRadius: "10px",
      padding: "30px",
      width: "100%",
      maxWidth: "400px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
      position: "relative",
      zIndex: 10, // Make sure the form is above the spinner
    },
    formContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "15px",
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
    button: {
      padding: "10px",
      backgroundColor: isValidPhone ? "#fff" : "#888",
      color: "#000",
      border: "none",
      borderRadius: "5px",
      cursor: isValidPhone ? "pointer" : "not-allowed",
      width: "80%",
      maxWidth: "300px",
      fontSize: "16px",
      marginTop: "10px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    getOtpButton: {
      padding: "10px",
      backgroundColor: "fff",
      color: "black",
      border: "none",
      borderRadius: "5px",
      cursor: isValidPhone ? "pointer" : "not-allowed",
      width: "80%",
      maxWidth: "300px",
      fontSize: "16px",
      marginTop: "10px",
    },
    resend: {
      marginTop: "10px",
      color: "#aaa",
      fontSize: "14px",
      cursor: "pointer",
      textDecoration: "underline",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <div style={styles.formContainer}>
          <label style={styles.label}>Phone Number</label>
          <input
            ref={phoneInputRef}
            type="tel"
            inputMode="numeric"
            style={styles.input}
            value={phone}
            maxLength="10"
            onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
            placeholder="Enter 10-digit number"
          />

          {isValidPhone && !otpVisible && (
            <button
              style={styles.getOtpButton}
              onClick={handleGetOtp}
            >
              Get OTP
            </button>
          )}

          {otpVisible && (
            <>
              <label style={styles.label}>OTP</label>
              <input
                ref={otpInputRef}
                type="tel"
                inputMode="numeric"
                style={styles.input}
                value={otp}
                maxLength="6"
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                placeholder="Enter 6-digit OTP"
              />
            </>
          )}

          <button
            style={styles.button}
            disabled={!isFormValid || isLoading}
            onClick={handleLogin}
          >
            {isLoading ? "Loading..." : "Login"}
          </button>

          <div style={styles.resend} onClick={() => alert("OTP resent!")}>
            Resend Code
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
