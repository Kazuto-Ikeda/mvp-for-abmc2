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
        flexDirection: "column", // 全体のレイアウトは縦方向
        justifyContent: "center", // 縦方向中央揃え
        alignItems: "center", // 横方向中央揃え
        height: "100vh", // 画面全体の高さ
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
      <div
        style={{
          display: "flex", // ボタンを横並びにする
          justifyContent: "center", // 横方向中央揃え
          gap: "15px", // ボタン間のスペース
        }}
      >
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