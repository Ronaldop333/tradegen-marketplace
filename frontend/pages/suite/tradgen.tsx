// frontend/pages/tradgen.tsx
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles.module.css'

export default function TradGen() {
  return (
    <>
      <Head>
        <title>Suite TradGen – A Inteligência Visual do Trader</title>
        <meta name="description" content="Suite de indicadores visuais para trading profissional" />
      </Head>

      <header className={styles.header}>
        <h1>Suite TradGen</h1>
        <p>O sistema visual mais completo para traders: leia o mercado em 1 segundo com 11 indicadores integrados.</p>
      </header>

      <section className={styles.gallery}>
        <Image src="/exemplo1.png" width={400} height={240} alt="Exemplo TradGen" />
        <Image src="/exemplo2.png" width={400} height={240} alt="Exemplo TradGen" />
        <Image src="/exemplo3.png" width={400} height={240} alt="Exemplo TradGen" />
        <Image src="/exemplo4.png" width={400} height={240} alt="Exemplo TradGen" />
      </section>

      <section className={styles.manual}>
        <h2>📘 Manual Completo da Suite</h2>
        <p>Acesse agora o manual online ou baixe o PDF completo.</p>
        <a href="/manual.html" target="_blank">Abrir Manual Online</a>
        <br />
        <a href="/manual.pdf" target="_blank">Baixar Manual PDF</a>
      </section>

      <section className={styles.pricing}>
        <h2>💰 Preço de Lançamento</h2>
        <div className={styles.price}>R$ 497</div>
        <a href="/checkout">Comprar Agora</a>
      </section>

      <footer className={styles.footer}>
        © 2025 TradGen. Todos os direitos reservados.
      </footer>
    </>
  )
}
