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
    <div>
      <h1>ペルソナ生成ページ</h1>

      {/* メインキーワード入力欄 */}
      <div>
        <h2>メインキーワード</h2>
        {mainKeywords.map((keyword, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder={`メインキーワード ${index + 1}`}
              value={keyword}
              onChange={(e) => handleMainKeywordChange(index, e.target.value)}
            />
          </div>
        ))}
      </div>

      {/* サブキーワード入力欄 */}
      <div>
        <h2>サブキーワード</h2>
        {subKeywords.map((keyword, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder={`サブキーワード ${index + 1}`}
              value={keyword}
              onChange={(e) => handleSubKeywordChange(index, e.target.value)}
            />
          </div>
        ))}
      </div>

      {/* ペルソナ生成ボタン */}
      <div>
        <button onClick={handlePersonaGeneration}>ペルソナ生成</button>
      </div>
    </div>
  );
}