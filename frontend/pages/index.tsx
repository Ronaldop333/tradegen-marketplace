import React from "react";

export default function Home() {
  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#1e1e1e", // Dark ameno
      color: "#f0f0f0",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Segoe UI, Roboto, sans-serif",
      padding: "2rem"
    }}>
      <h1 style={{ fontSize: "2.5rem", color: "#00ffcc", marginBottom: "1rem" }}>
        👋 Bem-vindo ao TradGen Marketplace
      </h1>
      <p style={{ maxWidth: "600px", textAlign: "center", fontSize: "1.1rem" }}>
        Sua nova central de inteligência para robôs operacionais de alta performance.
        Navegue, aprenda e ative estratégias com base em lógica, probabilidade e mindset de trader profissional.
      </p>
      <p style={{ fontSize: "0.9rem", marginTop: "2rem", color: "#999" }}>
        © 2025 TradGen. Todos os direitos reservados.
      </p>
    </div>
  );
}

