import React from "react";
import { ProductCard } from "../components/ProductCard";

export default function Home() {
  const products = [
    {
      name: "TradGen PREDATOR",
      tagline: "Quando a maioria entra atrasada, ele já está saindo com lucro.",
      description:
        "Especialista em reversões curtas e rápidas com base em Renko 50R. Ideal para scalpers que operam até o meio-dia.",
      url: "https://www.nelogica.com.br/marketplace/produto/tradgen-predator",
    },
    {
      name: "TradGen SCALPER",
      tagline: "Alta frequência. Alta eficiência. Sem ruído.",
      description:
        "Feito para quem busca setups objetivos, rápidos e limpos. Roda com até 5 contratos sem comprometer performance.",
      url: "https://www.nelogica.com.br/marketplace/produto/tradgen-scalper",
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

      <img 
  src="/logo-tradgen.png" 
  alt="TradGen Logo" 
  style={{ width: "120px", marginBottom: "1rem" }} 
      />

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
          <ProductCard key={index} {...product} />
        ))}
      </div>

      <p style={{ fontSize: "0.9rem", marginTop: "4rem", color: "#999" }}>
        © 2025 TradGen. Todos os direitos reservados.
      </p>
    </div>
  );
}
