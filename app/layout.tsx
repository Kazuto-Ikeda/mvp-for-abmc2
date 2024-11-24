import React from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* メタデータを追加 */}
        <title>Auto Create BMC</title>
        <meta name="description" content="Automatically generate business model canvases with AI." />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {/* 共通のデザイン（ヘッダー、フッター）を追加可能 */}
        <header style={{ padding: "10px", background: "#0070f3", color: "white", textAlign: "center" }}>
          <h1>Auto Create Business Model Canvas</h1>
        </header>
        <main>{children}</main>
        <footer style={{ padding: "10px", background: "#f5f5f5", textAlign: "center" }}>
          <p>&copy; 2024 Auto Create BMC</p>
        </footer>
      </body>
    </html>
  );
}