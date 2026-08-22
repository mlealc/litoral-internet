import { phonePlans } from "@/data/phonePlans";
import styles from "./PhonePlans.module.css";

function formatPrice(price: number) {
  const [reais, centavos] = price.toFixed(2).split(".");

  return {
    reais,
    centavos,
  };
}

export default function PhonePlans() {
  return (
    <section className={styles.phone}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <span className={styles.eyebrow}>TELEFONIA FIXA</span>

          <h2>
            Sua casa também
            <strong> fala pela fibra.</strong>
          </h2>

          <p>
            Planos de telefonia fixa 100% fibra óptica para você falar mais e
            gastar menos.
          </p>
        </div>

        <div className={styles.grid}>
          {phonePlans.map((plan) => {
            const price = formatPrice(plan.price);

            return (
              <article
                key={plan.id}
                className={`${styles.card} ${
                  plan.featured ? styles.featured : ""
                }`}
              >
                {plan.badge && (
                  <span className={styles.badge}>{plan.badge}</span>
                )}

                <div className={styles.planName}>
                  <span>LITORAL FONE</span>
                  <h3>{plan.name}</h3>
                </div>

                <div className={styles.price}>
                  <span className={styles.currency}>R$</span>

                  <strong>{price.reais}</strong>

                  <div>
                    <span>,{price.centavos}</span>
                    <small>/mês</small>
                  </div>
                </div>

                <div className={styles.divider} />

                <div className={styles.benefits}>
                  <div className={styles.benefit}>
                    <span>✓</span>
                    <p>100% fibra óptica</p>
                  </div>

                  <div className={styles.benefit}>
                    <span>✓</span>
                    <p>
                      <strong>{plan.minutes} minutos</strong> gratuitos para
                      qualquer tipo de ligação
                    </p>
                  </div>

                  {plan.unlimitedDDD48 && (
                    <div className={styles.benefit}>
                      <span>✓</span>
                      <p>
                        Ligações <strong>ILIMITADAS</strong> para DDD 48
                      </p>
                    </div>
                  )}
                </div>

                <a href="#cobertura" className={styles.button}>
                  Quero contratar
                  <span>→</span>
                </a>
              </article>
            );
          })}
        </div>

        <div className={styles.info}>
          <span className={styles.infoIcon}>☎</span>

          <p>
            Telefonia fixa com tecnologia de fibra óptica e qualidade Litoral
            Internet.
          </p>
        </div>
      </div>
    </section>
  );
}