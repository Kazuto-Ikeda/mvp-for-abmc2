"use client";

import React, { useState } from "react";

export default function PersonaReviewPage() {
  const [selectedDetails, setSelectedDetails] = useState({
    needs: "",
    painPoints: "",
    solutions: "",
  });

  // ハンドラー関数: マインドマップ生成
  const handleMindMapGeneration = () => {
    alert("マインドマップを生成しました！（モック機能）");
  };

  // ハンドラー関数: ペルソナ詳細情報生成
  const handlePersonaDetailsGeneration = () => {
    alert("ペルソナの詳細情報を生成しました！（モック機能）");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", padding: "20px" }}>
      <h1>Persona Review</h1>

      {/* マインドマップ生成ボタン */}
      <div style={{ textAlign: "center" }}>
        <button
          onClick={handleMindMapGeneration}
          style={{
            display: "block",
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          マインドマップ生成
        </button>
        <p style={{ fontSize: "14px", marginTop: "10px", color: "#555" }}>
          ※対象ペルソナのニーズ、ペインポイント、解決手段を生成
        </p>
      </div>

      {/* マインドマップから特定項目を選定 */}
      <div style={{ width: "100%", textAlign: "center" }}>
        <h2>マインドマップから選定</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "center" }}>
          <input
            type="text"
            placeholder="特定のニーズを入力"
            value={selectedDetails.needs}
            onChange={(e) => setSelectedDetails({ ...selectedDetails, needs: e.target.value })}
            style={{
              padding: "10px",
              width: "80%",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
          <input
            type="text"
            placeholder="特定のペインポイントを入力"
            value={selectedDetails.painPoints}
            onChange={(e) => setSelectedDetails({ ...selectedDetails, painPoints: e.target.value })}
            style={{
              padding: "10px",
              width: "80%",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
          <input
            type="text"
            placeholder="特定の解決手段を入力"
            value={selectedDetails.solutions}
            onChange={(e) => setSelectedDetails({ ...selectedDetails, solutions: e.target.value })}
            style={{
              padding: "10px",
              width: "80%",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
        </div>
      </div>

      {/* ペルソナの詳細情報生成ボタン */}
      <button
        onClick={handlePersonaDetailsGeneration}
        style={{
          padding: "10px 20px",
          backgroundColor: "#008CBA",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        ペルソナの詳細情報を生成
      </button>
    </div>
  );
}