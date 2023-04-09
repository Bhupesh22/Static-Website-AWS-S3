import React, { useState } from "react";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    background: "#f2f2f2",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "1rem",
    textAlign: "center",
  },
  description: {
    fontSize: "1rem",
    marginBottom: "1rem",
    textAlign: "center",
  },
  button: {
    fontSize: "1rem",
    padding: "0.5rem 1rem",
    border: "none",
    borderRadius: "0.25rem",
    background: "#007bff",
    color: "#fff",
    cursor: "pointer",
    transition: "background 0.3s ease",
    "&:hover": {
      background: "#0069d9",
    },
  },
  result: {
    fontSize: "1rem",
    marginTop: "1rem",
    textAlign: "center",
  },
  number: {
    fontWeight: "bold",
  },
};

function App() {
  const [randomNumber, setRandomNumber] = useState(null);

  const generateRandomNumber = () => {
    const newRandomNumber = Math.floor(Math.random() * 100);
    setRandomNumber(newRandomNumber);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Random Number Generator</h1>
      <p style={styles.description}>
        Click the button to generate a random number between 0 and 100:
      </p>
      <button style={styles.button} onClick={generateRandomNumber}>
        Generate
      </button>
      {randomNumber && (
        <p style={styles.result}>
          The generated random number is: <span style={styles.number}>{randomNumber}</span>
        </p>
      )}
    </div>
  );
}

export default App;
