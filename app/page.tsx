"use client";

import Link from "next/link";
import React from "react";

export default function Home() {
  const buttonStyle: React.CSSProperties = {
    display: "inline-block",
    padding: "10px 20px",
    textAlign: "center",
    textDecoration: "none",
    color: "white",
    backgroundColor: "red",
    borderRadius: "5px",
    transition: "background-color 0.3s",
    cursor: "pointer",
  };

  return (
    <div>
      <nav>
        <h1>Welcome to the Auto Create Business Model Canvas</h1>
        <div style={{ display: "flex", gap: "10px" }}>
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