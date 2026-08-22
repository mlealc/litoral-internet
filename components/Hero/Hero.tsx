"use client";

import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlayGlow} />

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            FIBRA ÓPTICA DE VERDADE
          </div>

          <h1>
            Litoral Internet,
            <strong>
              Imbituba se
              <br />
              conecta aqui!
            </strong>
          </h1>

          <p className={styles.description}>
            Internet rápida, estável e confiável para conectar você ao que
            realmente importa.
          </p>

          <div className={styles.buttons}>
            <a href="#planos" className={styles.primaryButton}>
              Ver planos
              <span>→</span>
            </a>

            <a href="#cobertura" className={styles.secondaryButton}>
              <span className={styles.locationIcon}>⌖</span>
              Consultar cobertura
            </a>
          </div>

          <div className={styles.socialProof}>
            <div className={styles.avatars}>
              <span></span>
            </div>

            <div className={styles.proofText}>
              <strong>+5.000 clientes conectados</strong>
              <small>em Imbituba</small>
            </div>
          </div>
        </div>

        <div className={styles.visual}>
          <div
            className={`${styles.floatingCard} ${styles.speedCard}`}
          >
            <div className={styles.speedIcon}>◴</div>

            <div>
              <small>VELOCIDADE DE ATÉ</small>

              <div className={styles.speed}>
                <strong>1</strong>
                <span>GIGA</span>
              </div>
            </div>
          </div>

          <div
            className={`${styles.floatingCard} ${styles.wifiCard}`}
          >
            <div className={styles.cardIcon}>⌁</div>

            <div>
              <small>ROTEADOR EM</small>
              <strong>COMODATO</strong>
            </div>
          </div>

          <div
            className={`${styles.floatingCard} ${styles.installCard}`}
          >
            <div className={styles.cardIcon}>✦</div>

            <div>
              <small>INSTALAÇÃO</small>
              <strong>GRÁTIS</strong>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.benefits}>
        <article className={styles.benefit}>
          <div
            className={`${styles.benefitIcon} ${styles.fiberIcon}`}
          >
            →
          </div>

          <div>
            <strong>Fibra óptica</strong>
            <p>
              Mais velocidade e estabilidade para o seu dia a dia.
            </p>
          </div>
        </article>

        <article className={styles.benefit}>
          <div className={styles.benefitIcon}>⌁</div>

          <div>
            <strong>Roteador em comodato</strong>
            <p>
              Roteador de alta performance sem custo adicional.
            </p>
          </div>
        </article>

        <article className={styles.benefit}>
          <div className={styles.benefitIcon}>✦</div>

          <div>
            <strong>Instalação grátis</strong>
            <p>
              Instalação rápida e sem custo para você.
            </p>
          </div>
        </article>

        <article className={styles.benefit}>
          <div className={styles.benefitIcon}>◉</div>

          <div>
            <strong>Suporte local</strong>
            <p>
              Atendimento humanizado e perto de você.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}