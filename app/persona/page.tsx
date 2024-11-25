"use client";

import { useState } from "react";

export default function PersonaPage() {
  const [mainKeywords, setMainKeywords] = useState(["", "", ""]); // メインキーワード
  const [subKeywords, setSubKeywords] = useState(["", "", "", "", ""]); // サブキーワード

  // メインキーワードの更新処理
  const handleMainKeywordChange = (index: number, value: string) => {
    const updatedKeywords = [...mainKeywords];
    updatedKeywords[index] = value;
    setMainKeywords(updatedKeywords);
  };

  // サブキーワードの更新処理
  const handleSubKeywordChange = (index: number, value: string) => {
    const updatedKeywords = [...subKeywords];
    updatedKeywords[index] = value;
    setSubKeywords(updatedKeywords);
  };

  // ペルソナ生成ボタンのクリック処理
  const handlePersonaGeneration = () => {
    console.log("Main Keywords:", mainKeywords);
    console.log("Sub Keywords:", subKeywords);
    alert("ペルソナを生成しました！（詳細はコンソールをご確認ください）");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>ペルソナ生成ページ</h1>

      {/* メインキーワード入力欄 */}
      <div style={{ marginBottom: "20px" }}>
        <h2>メインキーワード</h2>
        <p style={{ color: "#555", marginBottom: "10px" }}>
          ペットや車など、ペルソナに紐づくテーマとなるキーワードを記入してください。
        </p>
        {mainKeywords.map((keyword, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <input
              type="text"
              placeholder={`メインキーワード ${index + 1}`}
              value={keyword}
              onChange={(e) => handleMainKeywordChange(index, e.target.value)}
              style={{ padding: "5px", width: "100%", maxWidth: "400px" }}
            />
          </div>
        ))}
      </div>

      {/* サブキーワード入力欄 */}
      <div style={{ marginBottom: "20px" }}>
        <h2>サブキーワード</h2>
        <p style={{ color: "#555", marginBottom: "10px" }}>
          メインキーワードに紐づく”ペットのおやつ”や”ペットのトイレ”などのサブキーワードを記入してください。
        </p>
        {subKeywords.map((keyword, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <input
              type="text"
              placeholder={`サブキーワード ${index + 1}`}
              value={keyword}
              onChange={(e) => handleSubKeywordChange(index, e.target.value)}
              style={{ padding: "5px", width: "100%", maxWidth: "400px" }}
            />
          </div>
        ))}
      </div>

      {/* ペルソナ生成ボタン */}
      <div>
        <button
          onClick={handlePersonaGeneration}
          style={{
            padding: "10px 20px",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          キーワードからマインドマップを生成
        </button>
      </div>
    </div>
  );
}