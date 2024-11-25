"use client";  

import { useState } from 'react';
import React from "react";
import { useRouter } from "next/navigation";

// 質問の型定義
interface Question {
  question: string;
}

export default function InterviewPage() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [csvFile, setCsvFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [csvUploadSuccess, setCsvUploadSuccess] = useState<boolean | null>(null);
  const router = useRouter(); // ページ遷移用のルーター

  const FASTAPI_URL = "https://mvp-for-abmc-95a9eb1015ef.herokuapp.com/generate-questions";

  // アンケート項目生成
  const generateQuestions = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${FASTAPI_URL}`, { method: 'GET' });
      const data = await response.json();
      setQuestions(data);
    } catch (error) {
      console.error('Error fetching interview questions:', error);
    } finally {
      setLoading(false);
    }
  };

  // CSVファイルのアップロード処理
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setCsvFile(file);
  };

  // CSVデータをバックエンドに送信
  const uploadCsv = async () => {
    if (!csvFile) {
      alert('Please select a CSV file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('file', csvFile);

    try {
      const response = await fetch('/api/upload-csv', {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();
      setCsvUploadSuccess(true);
      console.log('CSV uploaded successfully:', result);
    } catch (error) {
      console.error('Error uploading CSV:', error);
      setCsvUploadSuccess(false);
    }
  };

  // ページ遷移ハンドラー
  const goToReview = () => {
    router.push("/review");
  };

  const goToTop = () => {
    router.push("/");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", padding: "20px" }}>
      <h1>Interview Page</h1>

      {/* アンケート項目生成ボタン */}
      <button 
        onClick={generateQuestions} 
        disabled={loading}
        style={{
          padding: "10px 20px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: loading ? "not-allowed" : "pointer",
        }}
      >
        {loading ? 'Generating...' : 'インタビューの質問を生成'}
      </button>

      {/* アンケート項目の表示 */}
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {questions.map((question, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>{question.question}</li>
        ))}
      </ul>

      {/* CSVファイルアップロードフィールド */}
      <div>
        <h2>アンケートのインサイト分析のためにアンケート結果のCSVデータをアップロードしてください</h2>
        <input type="file" accept=".csv" onChange={handleFileUpload} />
        <button 
          onClick={uploadCsv}
          style={{
            marginTop: "10px",
            padding: "10px 20px",
            backgroundColor: "#008CBA",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Upload CSV
        </button>
        {csvUploadSuccess && <p style={{ color: "green" }}>CSV uploaded successfully!</p>}
        {csvUploadSuccess === false && <p style={{ color: "red" }}>Error uploading CSV.</p>}
      </div>

      {/* インサイト分析とビジネスモデルキャンパス生成ボタン */}
      <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
        <button
          onClick={() => alert("インサイト分析を実行しました！（モック機能）")}
          style={{
            padding: "10px 20px",
            backgroundColor: "#FFA500",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          インサイト分析
        </button>
        <button
          onClick={goToReview}
          style={{
            padding: "10px 20px",
            backgroundColor: "#FF5722",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          ビジネスモデルキャンパスを生成する
        </button>
      </div>

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
        }}
      >
        TOPに戻る
      </button>
    </div>
  );
}