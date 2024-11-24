"use client";

import Link from "next/link";
import React from "react";

export default function Home() {
  const buttonStyle: React.CSSProperties = {
    display: "inline-block",
    padding: "10px 20px",
    textAlign: "center",
    textDecoration: "none",
    color: "white", // 文字色を白
    backgroundColor: "gray", // ボタンの背景をグレー
    borderRadius: "5px",
    transition: "background-color 0.3s",
    cursor: "pointer",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center", // 横方向の中央揃え
        alignItems: "center", // 縦方向の中央揃え
        height: "100vh", // 画面全体の高さを確保
        flexDirection: "column", // ボタンを縦に並べる
        gap: "15px", // 各ボタン間のスペース
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Welcome to the Auto Create Business Model Canvas
      </h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
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
    </div>
  );
}