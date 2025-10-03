import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      style={{
        padding: '8px 16px',
        margin: '10px',
        borderRadius: '6px',
        border: 'none',
        cursor: 'pointer',
        background: 'var(--color-primary)',
        color: 'var(--color-bg)',
        fontWeight: 'bold'
      }}
    >
      {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
  );
}
