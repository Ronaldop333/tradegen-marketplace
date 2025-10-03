import React from "react";
import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>TradGen - Quantum Trading Technology</title>
        <meta name="description" content="Neural networks reinventing financial markets" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "var(--color-bg)",
          color: "var(--color-text)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontFamily: "Segoe UI, Roboto, sans-serif",
          padding: "2rem",
          paddingTop: "120px", // ✅ Espaço para o header fixo
        }}
      >
        {/* Logo - Opcional já que tem no header */}
        <img
          src="/logo-tradgen.png"
          alt="TradGen Logo"
          className="logo"
          style={{
            width: "140px",
            marginBottom: "2rem",
          }}
        />

        <h1
          style={{
            fontSize: "2.5rem",
            color: "var(--color-primary)",
            marginBottom: "1rem",
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
            justifyContent: "center",
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
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              border: "1px solid var(--color-border)",
            }}
          >
            <h2 style={{ color: "var(--color-primary)" }}>
              TradGen PREDATOR - alta Performance
            </h2>
            <p style={{ fontWeight: "bold", marginTop: "1rem" }}>
              Quando a maioria entra atrasada, ele já está saindo com lucro.
            </p>
            <p style={{ marginTop: "0.5rem" }}>
              Especialista em Gráficos Renko com foco no 50R. Ideal para quem
              busca Lucros Consistentes com gerenciamento do risco.
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
              }}
            >
              Ver na Loja
            </a>
          </div>

          {/* Produto 2: Suite Indicadores */}
          <div
            className="card"
            style={{
              backgroundColor: "var(--color-bg-alt)",
              borderRadius: "10px",
              padding: "2rem",
              width: "320px",
              boxShadow: "0 0 10px var(--color-shadow)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              border: "1px solid var(--color-border)",
            }}
          >
            <h2 style={{ color: "var(--color-primary)" }}>
              TradGen SUITE INDICADORES
            </h2>
            <p style={{ fontWeight: "bold", marginTop: "1rem" }}>
              Suite indicadores... um pacote de Indicadores.
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
          }}
        >
          © 2025 TradGen. Todos os direitos reservados.
        </footer>
      </div>
    </>
  );
}
