import React from "react";

const Footer = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>
        Join us and explore south as <br /> never before
      </h1>
      <div style={styles.buttonContainer}>
        <button style={styles.button}>Contact Us</button>
        <button style={styles.button}>Some CTA</button>
      </div>
      <footer style={styles.footer}>
        <span>&copy; Hotcult</span>
        <span style={styles.socialIcons}>SOCIAL ICONS</span>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#000",
    color: "#fff",
    textAlign: "left",
    padding: "0px 100px",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    fontSize: "52px",
    // fontWeight: "bold",
    marginBottom: "20px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-start",
    gap: "20px",
    marginBottom: "30px",
  },
  button: {
    backgroundColor: "transparent",
    color: "#fff",
    border: "1px solid #fff",
    borderRadius: "25px",
    padding: "8px 20px",
    fontSize: "1rem",
    cursor: "pointer",
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
    fontSize: "0.9rem",
    // opacity: 0.8,
  },
  socialIcons: {
    // fontWeight: "bold",
  },
};

export default Footer;
