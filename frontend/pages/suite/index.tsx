// frontend/pages/tradgen.tsx
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/suite.module.css'


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

      {/* Galeria de Indicadores */}
      <section className={styles.gallery}>
        <Image src="/suite/1_tendencia_mercado.png" width={600} height={400} alt="Tendência do Mercado" />
        <Image src="/suite/2_forca_tendencia.png" width={600} height={400} alt="Força da Tendência" />
        <Image src="/suite/3_ball_tendencia.png" width={600} height={400} alt="Ball Tendência" />
        <Image src="/suite/4_consolidacao_alerta.png" width={800} height={400} alt="Consolidação Alerta" />
        <Image src="/suite/5_canal.png" width={800} height={400} alt="Canal" />
        <Image src="/suite/6_canal_tendencia.png" width={800} height={400} alt="Canal Tendência" />
        <Image src="/suite/7_consolidacao_canal.png" width={800} height={400} alt="Consolidação Canal" />
        <Image src="/suite/8_tendencia_canal.png" width={800} height={400} alt="Tendência Canal" />
        <Image src="/suite/9_histograma_contexto_mercado.png" width={1200} height={400} alt="Histograma Contexto do Mercado" />
        <Image src="/suite/10_escala_histograma.png" width={1200} height={400} alt="Escala do Histograma" />
        <Image src="/suite/11_histograma_tendencia.png" width={1200} height={400} alt="Histograma de Tendência" />
        <Image src="/suite/12_convergencia_indicadores.png" width={1200} height={500} alt="Convergência de Indicadores" />
        <Image src="/suite/13_consolidacao_suite.png" width={1200} height={500} alt="Consolidação Suite" />
        <Image src="/suite/14_suite.png" width={1200} height={500} alt="Visão Geral da Suite" />
      </section>

      {/* Manual */}
      <section className={styles.manual}>
        <h2>📘 Manual Completo da Suite</h2>
        <p>Acesse agora o manual online ou baixe o PDF completo.</p>
        <a href="/manual.html" target="_blank">Abrir Manual Online</a>
        <br />
        <a href="/manual.pdf" target="_blank">Baixar Manual PDF</a>
      </section>

      {/* Preço */}
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
