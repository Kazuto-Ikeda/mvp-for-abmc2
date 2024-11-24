import React from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Auto Create Business Model Canvas</title>
        <meta name="description" content="Automatically generate business model canvases with AI." />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {/* ヘッダー部分 */}
        <header
          style={{
            backgroundColor: "white", // 背景色を白
            color: "red", // 文字色を赤
            textAlign: "center",
            padding: "20px 0",
            fontFamily: "'Arial', sans-serif",
            fontWeight: "bold",
            fontSize: "24px",
          }}
        >
          Auto Create Business Model Canvas
        </header>

        {/* ページコンテンツ */}
        <main>{children}</main>

        {/* フッター部分 */}
        <footer
          style={{
            backgroundColor: "#f5f5f5",
            textAlign: "center",
            padding: "10px 0",
            marginTop: "20px",
            fontFamily: "'Arial', sans-serif",
            fontSize: "14px",
            color: "#555",
          }}
        >
          &copy; 2024 Auto Create Business Model Canvas. All rights reserved.
        </footer>
      </body>
    </html>
  );
}