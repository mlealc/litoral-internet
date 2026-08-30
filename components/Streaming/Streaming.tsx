"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  streamingPlans,
  type StreamingApp,
} from "@/data/streaming";

import {
  useOffers,
} from "@/components/Offers/OfferProvider";

import styles from "./Streaming.module.css";


/*formatar preço*/

function formatPrice(
  price: number
) {
  const [
    reais,
    centavos,
  ] = price
    .toFixed(2)
    .split(".");

  return {
    reais,
    centavos,
  };
}


/*streaming*/

export default function Streaming() {
  const [
    selectedApp,
    setSelectedApp,
  ] =
    useState<StreamingApp | null>(
      null
    );

  const {
    addOffer,
    removeOffer,
    hasOffer,
  } =
    useOffers();


  /*fechar modal com ESC*/

  useEffect(() => {
    if (!selectedApp) {
      return;
    }

    function handleKeyDown(
      event: KeyboardEvent
    ) {
      if (
        event.key ===
        "Escape"
      ) {
        setSelectedApp(
          null
        );
      }
    }

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [
    selectedApp,
  ]);


  /*bloquear scroll da página com o modal aberto*/

  useEffect(() => {
    if (!selectedApp) {
      document.body.style.overflow =
        "";

      return;
    }

    document.body.style.overflow =
      "hidden";

    return () => {
      document.body.style.overflow =
        "";
    };
  }, [
    selectedApp,
  ]);


  return (
    <>
      <section
        className={
          styles.streaming
        }
        id="streaming"
      >
        <div
          className={
            styles.glowLeft
          }
        />

        <div
          className={
            styles.glowRight
          }
        />


        <div
          className={
            styles.container
          }
        >
          {/*cabeçalho*/}

          <div
            className={
              styles.heading
            }
          >
            <span
              className={
                styles.eyebrow
              }
            >
              ENTRETENIMENTO
            </span>

            <h2>
              Sua internet.

              <strong>
                {" "}
                Seu entretenimento.
              </strong>
            </h2>

            <p>
              Escolha o pacote que
              combina com você e
              aproveite ainda mais sua
              conexão Litoral Internet.
            </p>
          </div>


          {/*planos*/}

          <div
            className={
              styles.grid
            }
          >
            {streamingPlans.map(
              (plan) => {
                const price =
                  formatPrice(
                    plan.price
                  );

                const selected =
                  hasOffer(
                    "streaming",
                    plan.id
                  );


                /*selecionar/remover streaming*/

                function selectStreaming() {
                  if (selected) {
                    removeOffer(
                      "streaming",
                      plan.id
                    );

                    return;
                  }

                  addOffer({
                    id:
                      plan.id,

                    type:
                      "streaming",

                    name:
                      plan.name,

                    price:
                      plan.price,

                    subtitle:
                      "Pacote de entretenimento Litoral",

                    details:
                      plan.services,
                  });
                }


                return (
                  <article
                    key={
                      plan.id
                    }
                    className={`${styles.card} ${
                      plan.highlighted
                        ? styles.highlighted
                        : ""
                    } ${
                      selected
                        ? styles.selected
                        : ""
                    }`}
                  >
                    {/*badge*/}

                    {plan.highlighted && (
                      <span
                        className={
                          styles.badge
                        }
                      >
                        PACOTE COMPLETO
                      </span>
                    )}


                    {/*cabeçalho card*/}

                    <div
                      className={
                        styles.cardHeader
                      }
                    >
                      <span
                        className={
                          styles.planLabel
                        }
                      >
                        LITORAL
                      </span>

                      <h3>
                        {plan.name.replace(
                          " Litoral",
                          ""
                        )}
                      </h3>
                    </div>


                    {/*preço*/}

                    <div
                      className={
                        styles.priceArea
                      }
                    >
                      <span
                        className={
                          styles.from
                        }
                      >
                        a partir de
                      </span>

                      <div
                        className={
                          styles.price
                        }
                      >
                        <span
                          className={
                            styles.currency
                          }
                        >
                          R$
                        </span>

                        <strong>
                          {
                            price.reais
                          }
                        </strong>

                        <div>
                          <span>
                            ,
                            {
                              price.centavos
                            }
                          </span>

                          <small>
                            /mês
                          </small>
                        </div>
                      </div>
                    </div>


                    <div
                      className={
                        styles.separator
                      }
                    />


                    {/* SERVIÇOS */}

                    <div
                      className={
                        styles.services
                      }
                    >
                      {plan.services.map(
                        (
                          service
                        ) => (
                          <div
                            key={
                              service
                            }
                            className={
                              styles.service
                            }
                          >
                            <span>
                              ✓
                            </span>

                            <p>
                              {
                                service
                              }
                            </p>
                          </div>
                        )
                      )}
                    </div>


                    {/*apps */}

                    <div
                      className={
                        styles.appsArea
                      }
                    >
                      <span
                        className={
                          styles.appsLabel
                        }
                      >
                        Apps e canais
                        inclusos
                      </span>

                      <div
                        className={
                          styles.appsGrid
                        }
                      >
                        {plan.apps.map(
                          (
                            app
                          ) => (
                            <button
                              key={`${plan.id}-${app.name}`}
                              type="button"
                              className={
                                styles.appIcon
                              }
                              onClick={() =>
                                setSelectedApp(
                                  app
                                )
                              }
                              aria-label={`Saiba mais sobre ${app.name}`}
                            >
                              <img
                                src={`/icons/${app.icon}`}
                                alt={
                                  app.name
                                }
                                loading="lazy"
                              />
                            </button>
                          )
                        )}
                      </div>

                      <span
                        className={
                          styles.appsHint
                        }
                      >
                        Clique em um app
                        para saber mais
                      </span>
                    </div>


                    {/*troca mensal*/}

                    <div
                      className={
                        styles.flexInfo
                      }
                    >
                      <div
                        className={
                          styles.flexIcon
                        }
                      >
                        ↻
                      </div>

                      <div>
                        <strong>
                          Troque todo mês
                        </strong>

                        <p>
                          Use um dos apps
                          disponíveis por
                          30 dias e, no
                          próximo ciclo,
                          escolha outro
                          app do mesmo
                          pacote.
                        </p>
                      </div>
                    </div>


                    {/*seleção*/}

                    <button
                      type="button"
                      className={
                        styles.button
                      }
                      onClick={
                        selectStreaming
                      }
                    >
                      {selected
                        ? "Streaming selecionado"
                        : "Quero adicionar"}

                      <span>
                        {selected
                          ? "✓"
                          : "+"}
                      </span>
                    </button>
                  </article>
                );
              }
            )}
          </div>


          {/*observações*/}

          <div
            className={
              styles.note
            }
          >
            <div
              className={
                styles.noteIcon
              }
            >
              ✦
            </div>

            <div>
              <strong>
                Internet +
                entretenimento
              </strong>

              <p>
                Adicione um pacote de
                streaming ao seu plano
                de internet a partir de
                R$ 7,99 por mês.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/*modal do app */}

      {selectedApp && (
        <div
          className={
            styles.appModalOverlay
          }
          onClick={() =>
            setSelectedApp(
              null
            )
          }
        >
          <div
            className={
              styles.appModal
            }
            role="dialog"
            aria-modal="true"
            aria-labelledby="streaming-app-title"
            data-lenis-prevent
            onClick={(
              event
            ) =>
              event.stopPropagation()
            }
          >
            {/*fechar*/}

            <button
              type="button"
              className={
                styles.appModalClose
              }
              onClick={() =>
                setSelectedApp(
                  null
                )
              }
              aria-label="Fechar informações"
            >
              ×
            </button>


            {/*ícone/}

            <div
              className={
                styles.appModalIcon
              }
            >
              <img
                src={`/icons/${selectedApp.icon}`}
                alt=""
              />
            </div>


            {/*conteúdo*/}

            <div
              className={
                styles.appModalContent
              }
            >
              <span
                className={
                  styles.appModalEyebrow
                }
              >
                BENEFÍCIO INCLUSO
              </span>

              <h3
                id="streaming-app-title"
              >
                {
                  selectedApp.name
                }
              </h3>


              {selectedApp.detail && (
                <span
                  className={
                    styles.appModalDetail
                  }
                >
                  {
                    selectedApp.detail
                  }
                </span>
              )}


              <p>
                {
                  selectedApp.description
                }
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}