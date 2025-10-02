import React from "react";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#1e1e1e",
        color: "#f0f0f0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Segoe UI, Roboto, sans-serif",
        padding: "2rem",
      }}
    >
      <img
        src="/logo-tradgen.png"
        alt="TradGen Logo"
        style={{ width: "140px", marginBottom: "2rem" }}
      />

      <h1 style={{ fontSize: "2.5rem", color: "#00ffcc", marginBottom: "1rem" }}>
        👋 Bem-vindo ao TradGen Marketplace
      </h1>

      <p style={{ maxWidth: "700px", textAlign: "center", fontSize: "1.1rem" }}>
        Desenvolvemos soluções inteligentes para o ambiente de trading.
        Automatizamos operações, integramos ferramentas. Criamos
        sistemas personalizados para Gestão de Risco e Controle Emocional.
      </p>

      <p style={{ maxWidth: "700px", textAlign: "center", fontSize: "1.1rem", marginTop: "0.5rem" }}>
        Descubra o Tradgen System e seja um Trader de alta performance.
      </p>

      <div style={{ display: "flex", gap: "2rem", marginTop: "3rem", flexWrap: "wrap" }}>
        {/* Produto 1: Predator */}
        <div
          style={{
            backgroundColor: "#2a2a2a",
            borderRadius: "10px",
            padding: "2rem",
            width: "320px",
            boxShadow: "0 0 10px rgba(0,255,204,0.1)",
          }}
        >
          <h2 style={{ color: "#00ffcc" }}>TradGen IA   PREDATOR</h2>
          <p style={{ fontWeight: "bold", marginTop: "1rem" }}>
            Quando a maioria entra atrasada, ele já está saindo com lucro.
          </p>
          <p style={{ marginTop: "0.5rem" }}>
            Especialista em Gráficos renko com foco no 50R .
            Ideal para quem busca Lucros Consistentes.
          </p>
          <a
            href="https://loja.nelogica.com.br"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginTop: "1rem",
              display: "inline-block",
              backgroundColor: "#00ffcc",
              color: "#000",
              padding: "0.6rem 1.2rem",
              borderRadius: "6px",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            Ver na Loja
          </a>
        </div>

        {/* Produto 2: Scalper */}
        <div
          style={{
            backgroundColor: "#2a2a2a",
            borderRadius: "10px",
            padding: "2rem",
            width: "320px",
            boxShadow: "0 0 10px rgba(0,255,204,0.1)",
          }}
        >
          <h2 style={{ color: "#00ffcc" }}>TradGen SUITE INDICADORS</h2>
          <p style={{ fontWeight: "bold", marginTop: "1rem" }}>
            Suite indicadors... um pacote de Indicadores.
          </p>
          <p style={{ marginTop: "0.5rem" }}>
            Feito para quem busca setups objetivos, rápidos e limpos.
            Aqui o Tradgen indica o Caminho, Basta Seguir!
          </p>
          <a
            href="https://loja.nelogica.com.br"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginTop: "1rem",
              display: "inline-block",
              backgroundColor: "#00ffcc",
              color: "#000",
              padding: "0.6rem 1.2rem",
              borderRadius: "6px",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            Ver na Loja
          </a>
        </div>
      </div>

      <footer style={{ marginTop: "4rem", fontSize: "0.9rem", color: "#999" }}>
        © 2025 TradGen. Todos os direitos reservados.
      </footer>
    </div>
  );
}
