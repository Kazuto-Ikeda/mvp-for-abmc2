import Link from 'next/link';
import React from "react";

export default function Home() {
  return (
    <div>
      <nav>
        <h1 style={{ textAlign: "center" }}>Welcome to the Auto create Business Model Campus</h1>
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "16px",
          marginTop: "20px",
        }}>
          <Link href="/home">
            <a style={buttonStyle}>Home</a>
          </Link>
          <Link href="/persona">
            <a style={buttonStyle}>Persona</a>
          </Link>
          <Link href="/persona-review">
            <a style={buttonStyle}>Persona Review</a>
          </Link>
          <Link href="/interview">
            <a style={buttonStyle}>Interview</a>
          </Link>
          <Link href="/review">
            <a style={buttonStyle}>Review</a>
          </Link>
          <Link href="/create-bmc">
            <a style={buttonStyle}>Create BMC</a>
          </Link>
        </div>
      </nav>
    </div>
  );
}

const buttonStyle = {
  display: "inline-block",
  padding: "10px 20px",
  textAlign: "center",
  textDecoration: "none",
  color: "white",
  backgroundColor: "#0070f3",
  borderRadius: "5px",
  transition: "background-color 0.3s",
  cursor: "pointer",
};

buttonStyle[':hover'] = {
  backgroundColor: "#005bb5",
};