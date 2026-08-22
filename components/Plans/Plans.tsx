import { plans } from "@/data/plans";
import styles from "./Plans.module.css";

function formatPrice(price: number) {
  const [reais, centavos] = price.toFixed(2).split(".");

  return {
    reais,
    centavos,
  };
}

export default function Plans() {
  return (
    <section className={styles.plans} id="planos">
      <div className={styles.glowOne} />
      <div className={styles.glowTwo} />

      <div className={styles.container}>
        <div className={styles.heading}>
          <span className={styles.eyebrow}>PLANOS DE INTERNET</span>

          <h2>
            Escolha a velocidade
            <br />
            <strong>ideal para você.</strong>
          </h2>

          <p>
            Internet de verdade para todos os momentos.
            Escolha seu plano e conecte sua casa com a Litoral.
          </p>
        </div>

        <div className={styles.grid}>
          {plans.map((plan) => {
            const price = formatPrice(plan.price);

            return (
              <article
                key={plan.id}
                className={`${styles.card} ${
                  plan.featured ? styles.featured : ""
                } ${plan.premium ? styles.premium : ""}`}
              >
                {plan.badge && (
                  <div className={styles.badge}>{plan.badge}</div>
                )}

                <div className={styles.cardTop}>
                  <div className={styles.speed}>
                    <strong>{plan.speed}</strong>

                    <span>{plan.unit}</span>
                  </div>

                  {plan.benefits.some((benefit) =>
                    benefit.includes("TV Digital")
                  ) && (
                    <div className={styles.tvBadge}>
                      <span>+</span>
                      TV DIGITAL
                    </div>
                  )}
                </div>

                <p className={styles.description}>
                  {plan.description}
                </p>

                <div className={styles.divider} />

                <div className={styles.priceArea}>
                  <span className={styles.priceLabel}>
                    por apenas
                  </span>

                  <div className={styles.price}>
                    <span className={styles.currency}>R$</span>

                    <strong>{price.reais}</strong>

                    <div className={styles.priceDetails}>
                      <span>,{price.centavos}</span>
                      <small>/mês</small>
                    </div>
                  </div>
                </div>

                <div className={styles.benefits}>
                  {plan.benefits.map((benefit) => (
                    <div
                      key={benefit}
                      className={styles.benefit}
                    >
                      <span className={styles.check}>✓</span>

                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#cobertura"
                  className={styles.button}
                >
                  Quero esse plano

                  <span>→</span>
                </a>

                <span className={styles.availability}>
                  Consulte disponibilidade para sua região
                </span>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}