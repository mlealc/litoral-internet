"use client";

import { phonePlans } from "@/data/phonePlans";

import {
  useOffers,
} from "@/components/Offers/OfferProvider";

import styles from "./PhonePlans.module.css";

function formatPrice(price: number) {
  const [reais, centavos] =
    price.toFixed(2).split(".");

  return {
    reais,
    centavos,
  };
}

export default function PhonePlans() {
  const {
    addOffer,
    hasOffer,
  } = useOffers();

  function selectPhonePlan(
    plan: (typeof phonePlans)[number]
  ) {
    const details = [
      "100% fibra óptica",
      `${plan.minutes} minutos gratuitos para qualquer tipo de ligação`,
    ];

    if (plan.unlimitedDDD48) {
      details.push(
        "Ligações ilimitadas para DDD 48"
      );
    }

    addOffer({
      id: plan.id,

      type: "phone",

      name: plan.name,

      price: plan.price,

      subtitle: "Plano de telefonia fixa Litoral",

      details,
    });
  }

  return (
    <section
      className={styles.phone}
      id="telefonia"
    >
      <div className={styles.container}>
        <div className={styles.heading}>
          <span className={styles.eyebrow}>
            TELEFONIA FIXA
          </span>

          <h2>
            Sua casa também
            <strong>
              {" "}
              fala pela fibra.
            </strong>
          </h2>

          <p>
            Planos de telefonia fixa 100% fibra óptica
            para você falar mais e gastar menos.
          </p>
        </div>

        <div className={styles.grid}>
          {phonePlans.map((plan) => {
            const price =
              formatPrice(plan.price);

            const selected =
              hasOffer(
                "phone",
                plan.id
              );

            return (
              <article
                key={plan.id}
                className={`${styles.card} ${
                  plan.featured
                    ? styles.featured
                    : ""
                } ${
                  selected
                    ? styles.selected
                    : ""
                }`}
              >
                {plan.badge && (
                  <span className={styles.badge}>
                    {plan.badge}
                  </span>
                )}

                <div className={styles.planName}>
                  <span>
                    LITORAL FONE
                  </span>

                  <h3>
                    {plan.name}
                  </h3>
                </div>

                <div className={styles.price}>
                  <span className={styles.currency}>
                    R$
                  </span>

                  <strong>
                    {price.reais}
                  </strong>

                  <div>
                    <span>
                      ,{price.centavos}
                    </span>

                    <small>
                      /mês
                    </small>
                  </div>
                </div>

                <div className={styles.divider} />

                <div className={styles.benefits}>
                  <div className={styles.benefit}>
                    <span>
                      ✓
                    </span>

                    <p>
                      100% fibra óptica
                    </p>
                  </div>

                  <div className={styles.benefit}>
                    <span>
                      ✓
                    </span>

                    <p>
                      <strong>
                        {plan.minutes} minutos
                      </strong>{" "}
                      gratuitos para qualquer tipo de ligação
                    </p>
                  </div>

                  {plan.unlimitedDDD48 && (
                    <div className={styles.benefit}>
                      <span>
                        ✓
                      </span>

                      <p>
                        Ligações{" "}
                        <strong>
                          ILIMITADAS
                        </strong>{" "}
                        para DDD 48
                      </p>
                    </div>
                  )}
                </div>
<button
  type="button"
  className={styles.button}
  onClick={() => selectPhonePlan(plan)}
>
  {selected
    ? "Telefonia selecionada"
    : "Quero contratar"}

  <span>
    {selected ? "✓" : "+"}
  </span>
</button>
              </article>
            );
          })}
        </div>

        <div className={styles.info}>
          <span className={styles.infoIcon}>
          </span>

          <p>
            Telefonia fixa com tecnologia de fibra óptica
            e qualidade Litoral Internet.
          </p>
        </div>
      </div>
    </section>
  );
}