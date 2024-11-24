"use client";

import React, { useState } from "react";

export default function ReviewPage() {
  const [loading, setLoading] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<string | null>(null);

  // ビジネスモデルキャンパス生成ボタンの処理
  const handleGenerateClick = async () => {
    setLoading(true);
    try {
      // ダミーAPI呼び出し（必要なら本物のAPIをここで呼び出し）
      const response = await new Promise((resolve) =>
        setTimeout(() => resolve("ビジネスモデルキャンパスが生成されました！"), 2000)
      );
      setGeneratedContent(response as string);
    } catch (error) {
      console.error("Error generating content:", error);
      setGeneratedContent("エラーが発生しました。もう一度お試しください。");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Review Page</h1>
      <p>以下のボタンをクリックして、ビジネスモデルキャンパスを生成してください。</p>
      <button
        onClick={handleGenerateClick}
        disabled={loading}
        style={{
          padding: "10px 20px",
          backgroundColor: loading ? "#ccc" : "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: loading ? "not-allowed" : "pointer",
          fontSize: "16px",
        }}
      >
        {loading ? "生成中..." : "ビジネスモデルキャンパスを生成"}
      </button>
      {generatedContent && (
        <div style={{ marginTop: "20px", fontSize: "18px", fontWeight: "bold" }}>
          {generatedContent}
        </div>
      )}
    </div>
  );
}