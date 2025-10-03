import React from "react";
import ThemeToggle from "../components/ThemeToggle";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "var(--color-bg)",
        color: "var(--color-text)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Segoe UI, Roboto, sans-serif",
        padding: "2rem",
        transition: "background 0.6s ease, color 0.6s ease",
      }}
    >
      {/* Botão de Tema */}
      <ThemeToggle />

      <img
        src="/logo-tradgen.png"
        alt="TradGen Logo"
        className="logo"
        style={{
          width: "140px",
          marginBottom: "2rem",
          transition: "all 0.6s ease",
        }}
      />

      <h1
        style={{
          fontSize: "2.5rem",
          color: "var(--color-primary)",
          marginBottom: "1rem",
          transition: "color 0.6s ease",
        }}
      >
        👋 Bem-vindo ao TradGen Marketplace
      </h1>

      <p
        style={{
          maxWidth: "700px",
          textAlign: "center",
          fontSize: "1.1rem",
          color: "var(--color-muted)",
          transition: "color 0.6s ease",
        }}
      >
        Desenvolvemos soluções inteligentes para o ambiente de trading.
        Automatizamos operações, integramos ferramentas. Criamos
        sistemas personalizados para Gestão de Risco e Controle Emocional.
      </p>

      <p
        style={{
          maxWidth: "700px",
          textAlign: "center",
          fontSize: "1.1rem",
          marginTop: "0.5rem",
          color: "var(--color-muted)",
          transition: "color 0.6s ease",
        }}
      >
        Descubra o Tradgen System e seja um Trader de alta performance.
      </p>

      <div
        style={{
          display: "flex",
          gap: "2rem",
          marginTop: "3rem",
          flexWrap: "wrap",
        }}
      >
        {/* Produto 1: Predator */}
        <div
          className="card"
          style={{
            backgroundColor: "var(--color-bg-alt)",
            borderRadius: "10px",
            padding: "2rem",
            width: "320px",
            boxShadow: "0 0 10px var(--color-shadow)",
            transition: "all 0.6s ease",
          }}
        >
          <h2 style={{ color: "var(--color-primary)" }}>TradGen PREDATOR - alta Performance</h2>
          <p style={{ fontWeight: "bold", marginTop: "1rem" }}>
            Quando a maioria entra atrasada, ele já está saindo com lucro.
          </p>
          <p style={{ marginTop: "0.5rem" }}>
            Especialista em Gráficos Renko com foco no 50R. Ideal para quem
            busca Lucros Consistentes.
          </p>
          <a
            href="https://loja.nelogica.com.br"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginTop: "1rem",
              display: "inline-block",
              backgroundColor: "var(--color-primary)",
              color: "var(--color-bg)",
              padding: "0.6rem 1.2rem",
              borderRadius: "6px",
              fontWeight: "bold",
              textDecoration: "none",
              transition: "background 0.2s ease",
            }}
          >
            Ver na Loja
          </a>
        </div>

        {/* Produto 2: Suite Indicadors */}
        <div
          className="card"
          style={{
            backgroundColor: "var(--color-bg-alt)",
            borderRadius: "10px",
            padding: "2rem",
            width: "320px",
            boxShadow: "0 0 10px var(--color-shadow)",
            transition: "all 0.6s ease",
          }}
        >
          <h2 style={{ color: "var(--color-primary)" }}>
            TradGen SUITE INDICADORS
          </h2>
          <p style={{ fontWeight: "bold", marginTop: "1rem" }}>
            Suite indicadors... um pacote de Indicadores.
          </p>
          <p style={{ marginTop: "0.5rem" }}>
            Feito para quem busca setups objetivos, rápidos e limpos.
            Aqui o Tradgen indica o Caminho, Basta Seguir!
          </p>
          <a
            href="/suite"
            style={{
              marginTop: "1rem",
              display: "inline-block",
              backgroundColor: "var(--color-primary)",
              color: "var(--color-bg)",
              padding: "0.6rem 1.2rem",
              borderRadius: "6px",
              fontWeight: "bold",
              textDecoration: "none",
              transition: "background 0.2s ease",
            }}
          >
            Ver Suite
          </a>
        </div>
      </div>

      <footer
        style={{
          marginTop: "4rem",
          fontSize: "0.9rem",
          color: "var(--color-muted)",
          transition: "color 0.6s ease",
        }}
      >
        © 2025 TradGen. Todos os direitos reservados.
      </footer>
    </div>
  );
}


