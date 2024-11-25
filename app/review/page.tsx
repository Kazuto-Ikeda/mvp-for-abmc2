"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function ReviewPage() {
  const [loading, setLoading] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<string | null>(null);
  const router = useRouter(); // ページ遷移用のルーター

  // ビジネスモデルキャンパス生成ボタンの処理
  const handleGenerateClick = async () => {
    setLoading(true);
    try {
      // ダミーAPI呼び出し（必要なら本物のAPIをここで呼び出し）
      const response = await new Promise((resolve) =>
        setTimeout(() => resolve("ビジネスモデルキャンパスが生成されました！"), 2000)
      );
      setGeneratedContent(response as string);

      // 生成完了後に遷移
      router.push("/create-bmc");
    } catch (error) {
      console.error("Error generating content:", error);
      setGeneratedContent("エラーが発生しました。もう一度お試しください。");
    } finally {
      setLoading(false);
    }
  };

  // TOPに戻るボタンの処理
  const goToTop = () => {
    router.push("/");
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <p>ビジネスモデルキャンパスを生成します</p>
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

      {/* TOPに戻るボタン */}
      <button
        onClick={goToTop}
        style={{
          marginTop: "40px",
          padding: "10px 20px",
          backgroundColor: "#808080", // グレー
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        TOPに戻る
      </button>
    </div>
  );
}