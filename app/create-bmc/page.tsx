"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function CreateBMCPage() {
  const [loading, setLoading] = useState(false);
  const [elevatorPitch, setElevatorPitch] = useState<string | null>(null);

  // エレベーターピッチ生成処理
  const handleGeneratePitch = async () => {
    setLoading(true);
    try {
      // ダミーAPI呼び出し（必要に応じてバックエンドのAPIエンドポイントに置き換え）
      const response = await new Promise((resolve) =>
        setTimeout(
          () =>
            resolve(
              "私たちのサービスは、自動車メーカー向けに、ペットオーナーのための新しい体験を提供する革新的なソリューションを提供します。"
            ),
          2000
        )
      );
      setElevatorPitch(response as string);
    } catch (error) {
      console.error("Error generating elevator pitch:", error);
      setElevatorPitch("エラーが発生しました。もう一度お試しください。");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Create BMC Page</h1>
      <p>以下のボタンをクリックして、エレベーターピッチを生成します。</p>
      <button
        onClick={handleGeneratePitch}
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
        {loading ? "生成中..." : "エレベーターピッチを生成"}
      </button>
      {elevatorPitch && (
        <div
          style={{
            marginTop: "20px",
            fontSize: "18px",
            fontWeight: "bold",
            color: "#333",
            textAlign: "left",
            lineHeight: "1.5",
            maxWidth: "600px",
            margin: "20px auto",
          }}
        >
          {elevatorPitch}
        </div>
      )}
      {/* ホームへ戻るボタン */}
      <div style={{ marginTop: "40px" }}>
        <Link href="/">
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#28a745",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            ホームへ戻る
          </button>
        </Link>
      </div>
    </div>
  );
}