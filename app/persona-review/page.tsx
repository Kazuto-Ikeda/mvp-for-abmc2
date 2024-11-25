"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function PersonaReviewPage() {
  const [selectedDetails, setSelectedDetails] = useState({
    needs: "",
    painPoints: "",
    solutions: "",
  });

  const router = useRouter(); // ページ遷移用のルーター

  // ハンドラー関数: ペルソナ詳細情報生成
  const handlePersonaDetailsGeneration = () => {
    alert("ペルソナの詳細情報を生成しました！（モック機能）");
  };

  // ハンドラー関数: インタビューページに遷移
  const goToInterview = () => {
    router.push("/interview");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", padding: "20px" }}>
      <h1>Persona Review</h1>

      {/* マインドマップ生成ボタン */}
      <button
        onClick={handleMindMapGeneration}
        style={{
          padding: "10px 20px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        マインドマップを生成（対象ペルソナのニーズ、ペインポイント、解決手段を生成）
      </button>

      {/* マインドマップから特定項目を選定 */}
      <div style={{ width: "100%", textAlign: "center" }}>
        <h2>マインドマップから特定のキーワードを選定</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "center" }}>
          <input
            type="text"
            placeholder="マインドマップから特定のニーズを1つ入力"
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
            placeholder="マインドマップから特定のペインポイントを1つ入力"
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
            placeholder="マインドマップから特定の解決手段を1つ入力"
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

      {/* ペルソナの詳細情報生成ボタンとインタビューに進むボタン */}
      <div style={{ display: "flex", gap: "10px" }}>
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
        <button
          onClick={goToInterview}
          style={{
            padding: "10px 20px",
            backgroundColor: "#FF5722",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          インタビューに進む
        </button>
      </div>
    </div>
  );
}