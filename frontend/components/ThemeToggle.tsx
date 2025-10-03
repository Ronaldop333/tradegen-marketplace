import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const html = document.documentElement;

    // adiciona classe temporária para efeito de blur
    html.classList.add("theme-transition");

    // remove o blur depois de 300ms
    setTimeout(() => {
      html.classList.remove("theme-transition");
    }, 300);

    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
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
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}

