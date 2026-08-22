import styles from "./Support.module.css";

const CENTRAL_ASSINANTE_URL =
  "https://ixc.litoralinternet.com.br/central_assinante_web/login";

export default function Support() {
  return (
    <section className={styles.support} id="suporte">
      <div className={styles.container}>
        <div className={styles.heading}>
          <span className={styles.eyebrow}>JÁ É CLIENTE?</span>

          <h2>
            A Litoral está
            <strong> perto de você.</strong>
          </h2>

          <p>
            Acesse os serviços da sua conta ou fale com nossa equipe
            sempre que precisar.
          </p>
        </div>

        <div className={styles.grid}>
          <a
            href={CENTRAL_ASSINANTE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mainCard}
          >
            <div>
              <span className={styles.cardLabel}>
                ÁREA DO CLIENTE
              </span>

              <h3>Central do Assinante</h3>

              <p>
                Consulte faturas, segunda via, pagamentos e informações
                sobre seu plano.
              </p>
            </div>

            <div className={styles.cardBottom}>
              <span>Acessar minha conta</span>
              <strong>→</strong>
            </div>

          </a>

          <a href="#" className={styles.card}>
            <div className={styles.icon}>?</div>

            <div>
              <span className={styles.cardLabel}>
                PRECISA DE AJUDA?
              </span>

              <h3>Suporte técnico</h3>

              <p>
                Nossa equipe está pronta para ajudar você com sua conexão.
              </p>
            </div>

            <span className={styles.cardLink}>
              Falar com o suporte
              <strong>→</strong>
            </span>
          </a>

          <a href="#cobertura" className={styles.card}>
            <div className={styles.icon}>+</div>

            <div>
              <span className={styles.cardLabel}>
                QUERO SER CLIENTE
              </span>

              <h3>Atendimento comercial</h3>

              <p>
                Consulte a cobertura e encontre o plano ideal para você.
              </p>
            </div>

            <span className={styles.cardLink}>
              Consultar cobertura
              <strong>→</strong>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}