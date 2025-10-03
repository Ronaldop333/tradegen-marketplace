import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "56px",
        height: "56px",
        borderRadius: "50%",
        border: "2px solid var(--color-primary)",
        background: "rgba(0, 0, 0, 0.6)",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1.5rem",
        color: "var(--color-primary)",
        boxShadow: "0 0 12px var(--color-shadow)",
        backdropFilter: "blur(4px)",
        transition: "all 0.3s ease",
        zIndex: 9999,
      }}
      onMouseEnter={(e) =>
        ((e.target as HTMLButtonElement).style.boxShadow =
          "0 0 20px var(--color-primary)")
      }
      onMouseLeave={(e) =>
        ((e.target as HTMLButtonElement).style.boxShadow =
          "0 0 12px var(--color-shadow)")
      }
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}
