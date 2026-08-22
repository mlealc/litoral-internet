import { addons } from "@/data/addons";
import styles from "./Extras.module.css";

function formatPrice(price: number) {
  const [reais, centavos] = price.toFixed(2).split(".");

  return {
    reais,
    centavos,
  };
}

export default function Extras() {
  return (
    <section className={styles.extras} id="extras">
      <div className={styles.container}>
        <div className={styles.heading}>
          <span className={styles.eyebrow}>MAIS PARA SUA CONEXÃO</span>

          <h2>
            Turbine sua
            <strong> experiência.</strong>
          </h2>

          <p>
            Adicione mais cobertura e segurança ao seu plano de internet.
          </p>
        </div>

        <div className={styles.grid}>
          {addons.map((addon) => {
            const price = formatPrice(addon.price);

            return (
              <article key={addon.id} className={styles.card}>
                <div className={styles.decorativeGlow} />

                <div className={styles.top}>
                  <div>
                    {addon.badge && (
                      <span className={styles.badge}>{addon.badge}</span>
                    )}

                    <h3>{addon.name}</h3>

                    <span className={styles.subtitle}>
                      {addon.subtitle}
                    </span>
                  </div>

                  <div className={styles.icon}>
                    {addon.id === "camera" ? "◉" : "⌁"}
                  </div>
                </div>

                <p className={styles.description}>
                  {addon.description}
                </p>

                <div className={styles.bottom}>
                  <div className={styles.priceArea}>
                    <span className={styles.plus}>+</span>

                    <span className={styles.currency}>R$</span>

                    <strong>{price.reais}</strong>

                    <div>
                      <span>,{price.centavos}</span>
                      <small>/mês</small>
                    </div>
                  </div>

                  <a href="#cobertura" className={styles.button}>
                    Adicionar ao plano
                    <span>→</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}