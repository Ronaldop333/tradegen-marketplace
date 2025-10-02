import React from "react";

interface ProductCardProps {
  name: string;
  tagline: string;
  description: string;
  url: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  name,
  tagline,
  description,
  url,
}) => {
  return (
    <div
      style={{
        backgroundColor: "#2b2b2b",
        borderRadius: "12px",
        padding: "2rem",
        maxWidth: "350px",
        minHeight: "250px",
        boxShadow: "0 0 10px rgba(0, 255, 204, 0.1)",
        textAlign: "left",
        transition: "transform 0.2s ease-in-out",
      }}
    >
      <h2 style={{ color: "#00ffcc", fontSize: "1.5rem" }}>{name}</h2>
      <p style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>{tagline}</p>
      <p style={{ fontSize: "0.95rem", marginBottom: "1rem" }}>{description}</p>
      <a
        href={url}
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
  );
};
