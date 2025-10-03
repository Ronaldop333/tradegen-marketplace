import React from 'react';
import Link from 'next/link';

const SimpleNavbar: React.FC = () => {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      background: 'rgba(10, 10, 18, 0.95)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid var(--color-primary)',
      zIndex: 1000,
      padding: '1rem 0'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 2rem'
      }}>
        <Link href="/" style={{
          color: 'var(--color-primary)',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          textDecoration: 'none'
        }}>
          TRADGEN
        </Link>
        
        <div style={{ display: 'flex', gap: '2rem' }}>
          <Link href="/" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>Home</Link>
          <Link href="/suite" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>Suite</Link>
        </div>
      </div>
    </nav>
  );
};

export default SimpleNavbar;
