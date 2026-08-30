"use client";

import Image from "next/image";

import {
  useEffect,
  useState,
} from "react";

import {
  useOffers,
} from "@/components/Offers/OfferProvider";

import {
  comboApps,
  heroSlides,
  type ComboApp,
  type HeroSlide,
} from "@/data/promotions";

import {
  siteConfig,
} from "@/config/site";

import styles from "./Hero.module.css";


/*tempo do carrossel*/

const SLIDE_DURATION =
  6500;


/*formatar preço*/

function formatPrice(
  price: number
) {
  const [
    reais,
    centavos,
  ] =
    price
      .toFixed(2)
      .split(".");

  return {
    reais,
    centavos,
  };
}


/*hero*/

export default function Hero() {
  const {
    addOffer,
    removeOffer,
    hasOffer,
  } =
    useOffers();


  /*carrossel*/

  const [
    currentSlide,
    setCurrentSlide,
  ] =
    useState(0);

  const [
    paused,
    setPaused,
  ] =
    useState(false);


  /*modal*/

  const [
    selectedCombo,
    setSelectedCombo,
  ] =
    useState<HeroSlide | null>(
      null
    );

  const [
    selectedApp,
    setSelectedApp,
  ] =
    useState<ComboApp | null>(
      null
    );


  /* autoplay*/

  useEffect(() => {
    if (
      paused ||
      selectedCombo
    ) {
      return;
    }

    const interval =
      window.setInterval(
        () => {
          setCurrentSlide(
            (
              current
            ) =>
              (
                current +
                1
              ) %
              heroSlides.length
          );
        },
        SLIDE_DURATION
      );

    return () => {
      window.clearInterval(
        interval
      );
    };
  }, [
    paused,
    selectedCombo,
  ]);


  /*bloquear scroll do mouse*/

  useEffect(() => {
    if (
      !selectedCombo
    ) {
      document.body.style.overflow =
        "";

      return;
    }

    document.body.style.overflow =
      "hidden";

    function handleKeyDown(
      event: KeyboardEvent
    ) {
      if (
        event.key ===
        "Escape"
      ) {
        closeComboModal();
      }
    }

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.body.style.overflow =
        "";

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [
    selectedCombo,
  ]);


  /*slide atual*/

  const slide =
    heroSlides[
      currentSlide
    ];

  const formattedPrice =
    slide.price
      ? formatPrice(
          slide.price
        )
      : null;

  const promotionAdded =
    slide.cartOffer
      ? hasOffer(
          "promotion",
          slide.cartOffer.id
        )
      : false;


  /*navegações*/

  function nextSlide() {
    setCurrentSlide(
      (
        current
      ) =>
        (
          current +
          1
        ) %
        heroSlides.length
    );
  }


  function previousSlide() {
    setCurrentSlide(
      (
        current
      ) =>
        current === 0
          ? heroSlides.length -
            1
          : current -
            1
    );
  }


  /*combo*/

  function openComboModal() {
    if (
      !slide.cartOffer
    ) {
      return;
    }

    setSelectedCombo(
      slide
    );

    setSelectedApp(
      null
    );
  }


  function closeComboModal() {
    setSelectedCombo(
      null
    );

    setSelectedApp(
      null
    );
  }


  function confirmCombo() {
    if (
      !selectedCombo
        ?.cartOffer ||
      !selectedApp
    ) {
      return;
    }

    const baseOffer =
      selectedCombo
        .cartOffer;

    if (
      hasOffer(
        "promotion",
        baseOffer.id
      )
    ) {
      removeOffer(
        "promotion",
        baseOffer.id
      );
    }

    const detailsWithoutGenericApp =
      baseOffer
        .details
        .filter(
          (
            detail
          ) =>
            !detail
              .toLowerCase()
              .includes(
                "app top litoral"
              )
        );

    addOffer({
      ...baseOffer,

      subtitle:
        `${selectedApp.name} incluso`,

      details: [
        ...detailsWithoutGenericApp,

        `${selectedApp.name} incluso no combo`,
      ],
    });

    closeComboModal();
  }


  /*CTA mobile promoções*/

  function renderMobilePromotionCTA() {
    if (
      slide.cartOffer
    ) {
      return (
        <button
          type="button"
          className={
            styles.mobilePromotionButton
          }
          onClick={
            openComboModal
          }
        >
          <span>
            {promotionAdded
              ? "Alterar app do combo"
              : slide.primaryLabel}
          </span>

          <strong>
            →
          </strong>
        </button>
      );
    }

    return (
      <a
        href={
          slide.primaryHref
        }
        className={
          styles.mobilePromotionButton
        }
      >
        <span>
          {
            slide.primaryLabel
          }
        </span>

        <strong>
          →
        </strong>
      </a>
    );
  }


  return (
    <>
      <section
        className={`${styles.hero} ${
          slide.institutional
            ? styles.institutionalHero
            : styles.promotionHero
        }`}
        onMouseEnter={() =>
          setPaused(
            true
          )
        }
        onMouseLeave={() =>
          setPaused(
            false
          )
        }
      >
        {/*fundo*/}

        <div
          className={`${styles.background} ${
            slide.institutional
              ? styles.backgroundCity
              : styles.backgroundPromo
          }`}
        />

        <div
          className={
            styles.overlayGlow
          }
        />


        {/*desktop*/}

        <div
          key={
            slide.id
          }
          className={`${styles.slide} ${styles.desktopSlide}`}
        >
          <div
            className={
              styles.container
            }
          >
            <div
              className={
                styles.content
              }
            >
              <div
                className={
                  styles.eyebrow
                }
              >
                <span
                  className={
                    styles.eyebrowDot
                  }
                />

                {
                  slide.eyebrow
                }
              </div>


              {slide.promoLabel && (
                <span
                  className={
                    styles.promoLabel
                  }
                >
                  {
                    slide.promoLabel
                  }
                </span>
              )}


              <h1>
                {
                  slide.title
                }

                <strong>
                  {
                    slide.highlight
                  }
                </strong>
              </h1>


              <p
                className={
                  styles.description
                }
              >
                {
                  slide.description
                }
              </p>


              {/*preço*/}

              {formattedPrice && (
                <div
                  className={
                    styles.heroPrice
                  }
                >
                  {slide.pricePrefix && (
                    <span
                      className={
                        styles.pricePrefix
                      }
                    >
                      {
                        slide.pricePrefix
                      }
                    </span>
                  )}

                  <div
                    className={
                      styles.priceValue
                    }
                  >
                    <span>
                      R$
                    </span>

                    <strong>
                      {
                        formattedPrice.reais
                      }
                    </strong>

                    <div>
                      <span>
                        ,
                        {
                          formattedPrice.centavos
                        }
                      </span>

                      <small>
                        /mês
                      </small>
                    </div>
                  </div>
                </div>
              )}


              {/*features*/}

              {!slide.institutional &&
                slide.features && (
                  <div
                    className={
                      styles.promoFeatures
                    }
                  >
                    {slide.features.map(
                      (
                        feature
                      ) => (
                        <span
                          key={
                            feature
                          }
                        >
                          <strong>
                            ✓
                          </strong>

                          {
                            feature
                          }
                        </span>
                      )
                    )}
                  </div>
                )}


              {slide.footnote && (
                <div
                  className={
                    styles.footnote
                  }
                >
                  ✦{" "}
                  {
                    slide.footnote
                  }
                </div>
              )}


              {/*botões*/}

              <div
                className={
                  styles.buttons
                }
              >
                {slide.cartOffer ? (
                  <button
                    type="button"
                    className={
                      styles.primaryButton
                    }
                    onClick={
                      openComboModal
                    }
                  >
                    {promotionAdded
                      ? "Alterar app do combo"
                      : slide.primaryLabel}

                    <span>
                      {promotionAdded
                        ? "↻"
                        : "→"}
                    </span>
                  </button>
                ) : (
                  <a
                    href={
                      slide.primaryHref
                    }
                    className={
                      styles.primaryButton
                    }
                  >
                    {
                      slide.primaryLabel
                    }

                    <span>
                      →
                    </span>
                  </a>
                )}


                {slide.secondaryLabel &&
                  slide.secondaryHref && (
                    <a
                      href={
                        slide.secondaryHref
                      }
                      className={
                        styles.secondaryButton
                      }
                    >
                      <span
                        className={
                          styles.locationIcon
                        }
                      >
                        {slide.institutional
                          ? "⌖"
                          : "✦"}
                      </span>

                      {
                        slide.secondaryLabel
                      }
                    </a>
                  )}
              </div>


              {/*social*/}

              {slide.institutional && (
                <div
                  className={
                    styles.socialProof
                  }
                >
                  <div
                    className={
                      styles.avatars
                    }
                  >
                    <span />
                  </div>

                  <div
                    className={
                      styles.proofText
                    }
                  >
                    <strong>
                      {
                        siteConfig
                          .hero
                          .customers
                      }
                    </strong>

                    <small>
                      {
                        siteConfig
                          .hero
                          .cityLabel
                      }
                    </small>
                  </div>
                </div>
              )}
            </div>


            {/*visual*/}

            <div
              className={
                styles.visual
              }
            >
              {slide.institutional && (
                <>
                  <div
                    className={`${styles.floatingCard} ${styles.speedCard}`}
                  >
                    <div
                      className={
                        styles.speedIcon
                      }
                    >
                      ◴
                    </div>

                    <div>
                      <small>
                        VELOCIDADE DE ATÉ
                      </small>

                      <div
                        className={
                          styles.speed
                        }
                      >
                        <strong>
                          1
                        </strong>

                        <span>
                          GIGA
                        </span>
                      </div>
                    </div>
                  </div>


                  <div
                    className={`${styles.floatingCard} ${styles.wifiCard}`}
                  >
                    <div
                      className={
                        styles.cardIcon
                      }
                    >
                      ⌁
                    </div>

                    <div>
                      <small>
                        ROTEADOR EM
                      </small>

                      <strong>
                        COMODATO
                      </strong>
                    </div>
                  </div>


                  <div
                    className={`${styles.floatingCard} ${styles.installCard}`}
                  >
                    <div
                      className={
                        styles.cardIcon
                      }
                    >
                      ✦
                    </div>

                    <div>
                      <small>
                        INSTALAÇÃO
                      </small>

                      <strong>
                        GRÁTIS
                      </strong>
                    </div>
                  </div>
                </>
              )}


              {!slide.institutional &&
                slide.image && (
                  <div
                    className={
                      styles.promotionVisual
                    }
                  >
                    <div
                      className={
                        styles.promotionGlow
                      }
                    />

                    <div
                      className={
                        styles.promotionPoster
                      }
                    >
                      <Image
                        src={
                          slide.image
                        }
                        alt={
                          slide.imageAlt ??
                          ""
                        }
                        fill
                        sizes="265px"
                        className={
                          styles.promotionImage
                        }
                        priority={
                          currentSlide ===
                          1
                        }
                      />
                    </div>
                  </div>
                )}
            </div>
          </div>
        </div>

        {/* MOBILE / TABLET */}

<div
  key={`mobile-${slide.id}`}
  className={styles.mobileSlide}
>
  {/*institucional mobile*/}

  {slide.institutional && (
    <div className={styles.mobileInstitutional}>
      <div className={styles.mobileInstitutionalContent}>
        <div className={styles.mobileEyebrow}>
          <span />

          {slide.eyebrow}
        </div>

        <h1>
          {slide.title}

          <strong>
            {slide.highlight}
          </strong>
        </h1>

        <p>
          {slide.description}
        </p>

        <div className={styles.mobileInstitutionalButtons}>
          <a
            href={slide.primaryHref}
            className={styles.mobilePrimaryButton}
          >
            <span>
              {slide.primaryLabel}
            </span>

            <strong>
              →
            </strong>
          </a>

          {slide.secondaryLabel &&
            slide.secondaryHref && (
              <a
                href={slide.secondaryHref}
                className={styles.mobileSecondaryButton}
              >
                <span>
                  ⌖
                </span>

                {slide.secondaryLabel}
              </a>
            )}
        </div>

        <div className={styles.mobileSocialProof}>
          <span className={styles.mobileSocialDot} />

          <div>
            <strong>
              {siteConfig.hero.customers}
            </strong>

            <small>
              {siteConfig.hero.cityLabel}
            </small>
          </div>
        </div>
      </div>

      <div className={styles.mobileConnectionCard}>
        <span>
          {siteConfig.hero.connectionLabel}
        </span>

        <strong>
          {siteConfig.hero.maxSpeed}
        </strong>

        <p>
          {siteConfig.hero.connectionDescription}
        </p>

        <div>
          <span>
            ✓ Roteador em comodato
          </span>

          <span>
            ✓ Instalação grátis
          </span>
        </div>
      </div>
    </div>
  )}


  {/*promoções mobile*/}

  {!slide.institutional &&
    slide.image && (
      <div className={styles.mobilePromotion}>
        <div className={styles.mobilePromotionGlow} />

        <div className={styles.mobilePromotionHeading}>
          <span className={styles.mobilePromotionEyebrow}>
            {siteConfig.promotions.eyebrow}
          </span>

          <h2>
            {siteConfig.promotions.title}
          </h2>

          <div className={styles.mobilePromotionAccent} />

          <p>
            {siteConfig.promotions.description}
          </p>
        </div>

        <div className={styles.mobilePromotionPoster}>
          <Image
            src={slide.image}
            alt={slide.imageAlt ?? ""}
            fill
            sizes="(max-width: 780px) calc(100vw - 34px), 430px"
            className={styles.mobilePromotionImage}
            priority={currentSlide === 1}
          />
        </div>

        {renderMobilePromotionCTA()}
      </div>
    )}
</div>

        {/*controles*/}

        <div
          className={
            styles.carouselControls
          }
        >
          <button
            type="button"
            className={
              styles.arrowButton
            }
            onClick={
              previousSlide
            }
            aria-label="Promoção anterior"
          >
            ←
          </button>


          <div
            className={
              styles.dots
            }
          >
            {heroSlides.map(
              (
                item,
                index
              ) => (
                <button
                  key={
                    item.id
                  }
                  type="button"
                  className={`${styles.dot} ${
                    index ===
                    currentSlide
                      ? styles.activeDot
                      : ""
                  }`}
                  onClick={() =>
                    setCurrentSlide(
                      index
                    )
                  }
                  aria-label={`Ir para slide ${
                    index +
                    1
                  }`}
                />
              )
            )}
          </div>


          <button
            type="button"
            className={
              styles.arrowButton
            }
            onClick={
              nextSlide
            }
            aria-label="Próxima promoção"
          >
            →
          </button>
        </div>


        {/*beneficios desktop*/}

        <div
          className={
            styles.benefits
          }
        >
          <article
            className={
              styles.benefit
            }
          >
            <div
              className={
                styles.benefitIcon
              }
            >
              ✦
            </div>

            <div>
              <strong>
                Fibra óptica
              </strong>

              <p>
                Mais velocidade e estabilidade para o seu dia a dia.
              </p>
            </div>
          </article>


          <article
            className={
              styles.benefit
            }
          >
            <div
              className={
                styles.benefitIcon
              }
            >
              ⌁
            </div>

            <div>
              <strong>
                Roteador em comodato
              </strong>

              <p>
                Roteador de alta performance sem custo adicional.
              </p>
            </div>
          </article>


          <article
            className={
              styles.benefit
            }
          >
            <div
              className={
                styles.benefitIcon
              }
            >
              ✓
            </div>

            <div>
              <strong>
                Instalação grátis
              </strong>

              <p>
                Instalação rápida e sem custo para você.
              </p>
            </div>
          </article>


          <article
            className={
              styles.benefit
            }
          >
            <div
              className={
                styles.benefitIcon
              }
            >
              ◉
            </div>

            <div>
              <strong>
                Suporte local
              </strong>

              <p>
                Atendimento humanizado e perto de você.
              </p>
            </div>
          </article>
        </div>
      </section>


      {/*modal*/}

      {selectedCombo &&
        selectedCombo.cartOffer && (
          <div
            className={
              styles.comboOverlay
            }
            onClick={
              closeComboModal
            }
          >
            <div
              className={
                styles.comboModal
              }
              role="dialog"
              aria-modal="true"
              aria-labelledby="combo-modal-title"
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
                  styles.comboClose
                }
                onClick={
                  closeComboModal
                }
                aria-label="Fechar seleção de aplicativo"
              >
                ×
              </button>


              {/*cabeçalho*/}

              <div
                className={
                  styles.comboHeader
                }
              >
                <span
                  className={
                    styles.comboEyebrow
                  }
                >
                  COMPLETE SEU COMBO
                </span>

                <h3
                  id="combo-modal-title"
                >
                  Escolha seu app
                </h3>

                <p>
                  Seu combo permite escolher um dos aplicativos abaixo.
                </p>
              </div>


              {/*resumo*/}

              <div
                className={
                  styles.comboSummary
                }
              >
                <div>
                  <span>
                    COMBO SELECIONADO
                  </span>

                  <strong>
                    {
                      selectedCombo
                        .cartOffer
                        .name
                    }
                  </strong>
                </div>


                <strong
                  className={
                    styles.comboSummaryPrice
                  }
                >
                  R${" "}
                  {selectedCombo
                    .cartOffer
                    .price
                    .toLocaleString(
                      "pt-BR",
                      {
                        minimumFractionDigits:
                          2,

                        maximumFractionDigits:
                          2,
                      }
                    )}

                  <small>
                    /mês
                  </small>
                </strong>
              </div>


              {/* APPS */}

              <div
                className={
                  styles.comboApps
                }
              >
                {comboApps.map(
                  (
                    app
                  ) => {
                    const active =
                      selectedApp?.id ===
                      app.id;

                    return (
                      <button
                        key={
                          app.id
                        }
                        type="button"
                        className={`${styles.comboApp} ${
                          active
                            ? styles.comboAppActive
                            : ""
                        }`}
                        onClick={() =>
                          setSelectedApp(
                            app
                          )
                        }
                      >
                        <div
                          className={
                            styles.comboAppIcon
                          }
                        >
                          <Image
                            src={`/icons/${app.icon}`}
                            alt={
                              app.name
                            }
                            width={
                              70
                            }
                            height={
                              70
                            }
                          />
                        </div>


                        <div
                          className={
                            styles.comboAppContent
                          }
                        >
                          <strong>
                            {
                              app.name
                            }
                          </strong>

                          <p>
                            {
                              app.description
                            }
                          </p>
                        </div>


                        <div
                          className={
                            styles.comboRadio
                          }
                        >
                          {active &&
                            "✓"}
                        </div>
                      </button>
                    );
                  }
                )}
              </div>


              {/* APP SELECIONADO */}

              {selectedApp && (
                <div
                  className={
                    styles.selectedAppNotice
                  }
                >
                  <span>
                    ✓
                  </span>

                  <p>
                    Você escolheu{" "}
                    <strong>
                      {
                        selectedApp.name
                      }
                    </strong>{" "}
                    para este combo.
                  </p>
                </div>
              )}


              {/* CONFIRMAR */}

              <button
                type="button"
                className={
                  styles.comboConfirm
                }
                disabled={
                  !selectedApp
                }
                onClick={
                  confirmCombo
                }
              >
                {hasOffer(
                  "promotion",
                  selectedCombo
                    .cartOffer
                    .id
                )
                  ? "Salvar alteração"
                  : "Adicionar ao pacote"}

                <span>
                  →
                </span>
              </button>


              <p
                className={
                  styles.comboNote
                }
              >
                Você poderá alterar sua escolha antes de continuar o atendimento.
              </p>
            </div>
          </div>
        )}
    </>
  );
}