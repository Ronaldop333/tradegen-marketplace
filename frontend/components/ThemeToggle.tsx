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
        width: "48px",
        height: "48px",
        borderRadius: "50%",
        border: "2px solid var(--color-primary)",
        background: "transparent",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1.4rem",
        color: "var(--color-primary)",
        boxShadow: "0 0 10px var(--color-shadow)",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) =>
        ((e.target as HTMLButtonElement).style.boxShadow =
          "0 0 18px var(--color-primary)")
      }
      onMouseLeave={(e) =>
        ((e.target as HTMLButtonElement).style.boxShadow =
          "0 0 10px var(--color-shadow)")
      }
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}
