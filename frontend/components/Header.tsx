import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <div className={styles.logoHologram}>
            <span className={styles.logoGlow}>TRADGEN</span>
            <div className={styles.logoScanline} />
          </div>
        </Link>

        {/* Menu Navigation */}
        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>
            <span className={styles.navIcon}>⟠</span>
            HOME
          </Link>
          <Link href="/predator" className={styles.navLink}>
            <span className={styles.navIcon}>⚡</span>
            PREDATOR AI
          </Link>
          <Link href="/suite" className={styles.navLink}>
            <span className={styles.navIcon}>🔮</span>
            QUANTUM SUITE
          </Link>
          <Link href="/manual" className={styles.navLink}>
            <span className={styles.navIcon}>📊</span>
            NEURAL MANUAL
          </Link>
        </nav>

        {/* CTA Button */}
        <div className={styles.ctaContainer}>
          <Link href="/loja" className={styles.cyberButton}>
            <span className={styles.buttonGlow}>ACCESS TERMINAL</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
