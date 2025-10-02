import React from "react";

export default function Home() {
  const products = [
    {
      name: "TradGen PREDATOR",
      tagline: "Quando a maioria entra atrasada, ele já está saindo com lucro.",
      description:
        "Especialista em reversões curtas e rápidas com base em Renko 50R. Ideal para scalpers que operam até o meio-dia.",
      url: "https://www.nelogica.com.br/marketplace/produto/tradgen-predator", // substitua com URL real
    },
    {
      name: "TradGen SCALPER",
      tagline: "Alta frequência. Alta eficiência. Sem ruído.",
      description:
        "Feito para quem busca setups objetivos, rápidos e limpos. Roda com até 5 contratos sem comprometer performance.",
      url: "https://www.nelogica.com.br/marketplace/produto/tradgen-scalper", // substitua com URL real
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#1e1e1e",
        color: "#f0f0f0",
        fontFamily: "Segoe UI, Roboto, sans-serif",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", color: "#00ffcc", marginBottom: "1rem" }}>
        👋 Bem-vindo ao TradGen Marketplace
      </h1>

      <p style={{ maxWidth: "600px", margin: "0 auto", fontSize: "1.1rem" }}>
        Sua nova central de inteligência para robôs operacionais de alta performance. <br />
        Navegue, aprenda e ative estratégias com base em lógica, probabilidade e mindset de trader profissional.
      </p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "3rem",
          gap: "2rem",
        }}
      >
        {products.map((product, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#2b2b2b",
              borderRadius: "12px",
              padding: "2rem",
              maxWidth: "350px",
              minHeight: "250px",
              boxShadow: "0 0 10px rgba(0, 255, 204, 0.1)",
              textAlign: "left",
            }}
          >
            <h2 style={{ color: "#00ffcc", fontSize: "1.5rem" }}>{product.name}</h2>
            <p style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>{product.tagline}</p>
            <p style={{ fontSize: "0.95rem", marginBottom: "1rem" }}>{product.description}</p>
            <a
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#1e1e1e",
                backgroundColor: "#00ffcc",
                padding: "0.6rem 1.2rem",
                borderRadius: "8px",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              Ver na Loja
            </a>
          </div>
        ))}
      </div>

      <p style={{ fontSize: "0.9rem", marginTop: "4rem", color: "#999" }}>
        © 2025 TradGen. Todos os direitos reservados.
      </p>
    </div>
  );
}
