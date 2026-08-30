"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  type OfferType,
  useOffers,
} from "@/components/Offers/OfferProvider";

import styles from "./OfferCart.module.css";

function formatPrice(price?: number) {
  if (price === undefined) {
    return null;
  }

  return price.toLocaleString(
    "pt-BR",
    {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }
  );
}

function getOfferLabel(
  type: OfferType
) {
  switch (type) {
    case "internet":
      return "Internet";

    case "streaming":
      return "Streaming";

    case "extra":
      return "Benefício";

    case "phone":
      return "Telefonia";

    case "promotion":
      return "Promoção";

    default:
      return "Serviço";
  }
}

function getOfferIcon(
  type: OfferType
) {
  switch (type) {
    case "internet":
      return "⌁";

    case "streaming":
      return "▶";

    case "extra":
      return "+";

    case "phone":
      return "☎";

    case "promotion":
      return "✦";

    default:
      return "✓";
  }
}

export default function OfferCart() {
  const {
    offers,
    removeOffer,
    clearOffers,
  } = useOffers();

  const [open, setOpen] =
    useState(false);

  const [
    expandedOffer,
    setExpandedOffer,
  ] = useState<string | null>(
    null
  );

  /*total mensal estimado*/

  const totalMonthly =
    offers.reduce(
      (total, offer) =>
        total +
        (offer.price ?? 0),
      0
    );

  const formattedTotal =
    totalMonthly.toLocaleString(
      "pt-BR",
      {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }
    );

  /*controle do scroll e fechamento com ESC*/

  useEffect(() => {
    if (!open) {
      document.body.style.overflow =
        "";

      return;
    }

    document.body.style.overflow =
      "hidden";

    function handleKeyDown(
      event: KeyboardEvent
    ) {
      if (event.key === "Escape") {
        setOpen(false);
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
  }, [open]);

  /*Se não houver itens o carrinho não aparece.*/

  if (offers.length === 0) {
    return null;
  }

  function toggleOffer(
    key: string
  ) {
    setExpandedOffer(
      expandedOffer === key
        ? null
        : key
    );
  }

  /*limpar pacote*/

  function handleClearOffers() {
    clearOffers();

    setExpandedOffer(null);

    setOpen(false);
  }

  /*resumo item*/

  function handleRemoveOffer(
    type: OfferType,
    id: string
  ) {
    removeOffer(
      type,
      id
    );

    setExpandedOffer(null);
  }

  return (
    <>
      {/*carrinho flutuante*/}

      <button
        type="button"
        className={
          styles.floatingCart
        }
        onClick={() =>
          setOpen(true)
        }
        aria-label="Abrir seu pacote"
      >
        <div
          className={
            styles.floatingCartIcon
          }
        >
          ✦
        </div>

        <div
          className={
            styles.floatingCartText
          }
        >
          <span>
            SEU PACOTE
          </span>

          <strong>
            {offers.length === 1
              ? "1 item selecionado"
              : `${offers.length} itens selecionados`}
          </strong>
        </div>

        <div
          className={
            styles.floatingCartCount
          }
        >
          {offers.length}
        </div>

        <span
          className={
            styles.floatingCartArrow
          }
        >
          →
        </span>
      </button>

      {/*painel*/}

      {open && (
        <div
          className={
            styles.overlay
          }
          onClick={() =>
            setOpen(false)
          }
        >
          <aside
            className={
              styles.drawer
            }
            data-lenis-prevent
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            {/*header*/}

            <div
              className={
                styles.drawerHeader
              }
            >
              <div>
                <span>
                  SEU PACOTE
                </span>

                <h2>
                  Suas escolhas
                </h2>

                <p>
                  Confira o que você
                  selecionou antes de
                  continuar.
                </p>
              </div>

              <button
                type="button"
                className={
                  styles.closeButton
                }
                onClick={() =>
                  setOpen(false)
                }
                aria-label="Fechar carrinho"
              >
                ×
              </button>
            </div>

            {/*resumo*/}

            <div
              className={
                styles.cartSummary
              }
            >
              <div>
                <strong>
                  {offers.length}
                </strong>

                <span>
                  {offers.length === 1
                    ? "item"
                    : "itens"}
                </span>
              </div>

              <button
                type="button"
                onClick={
                  handleClearOffers
                }
              >
                Limpar pacote
              </button>
            </div>

            {/*lista*/}

            <div
              className={
                styles.offerList
              }
              data-lenis-prevent
            >
              {offers.map(
                (offer) => {
                  const key =
                    `${offer.type}-${offer.id}`;

                  const expanded =
                    expandedOffer ===
                    key;

                  const price =
                    formatPrice(
                      offer.price
                    );

                  return (
                    <article
                      key={key}
                      className={`${styles.offerCard} ${
                        expanded
                          ? styles.offerCardExpanded
                          : ""
                      }`}
                    >
                      <button
                        type="button"
                        className={
                          styles.offerMain
                        }
                        onClick={() =>
                          toggleOffer(
                            key
                          )
                        }
                        aria-expanded={
                          expanded
                        }
                      >
                        <div
                          className={
                            styles.offerIcon
                          }
                        >
                          {getOfferIcon(
                            offer.type
                          )}
                        </div>

                        <div
                          className={
                            styles.offerText
                          }
                        >
                          <span
                            className={
                              styles.offerType
                            }
                          >
                            {getOfferLabel(
                              offer.type
                            )}
                          </span>

                          <strong>
                            {
                              offer.name
                            }
                          </strong>

                          {offer.subtitle && (
                            <small>
                              {
                                offer.subtitle
                              }
                            </small>
                          )}
                        </div>

                        {price && (
                          <div
                            className={
                              styles.offerPrice
                            }
                          >
                            <strong>
                              R${" "}
                              {price}
                            </strong>

                            <span>
                              /mês
                            </span>
                          </div>
                        )}

                        <span
                          className={`${styles.expandIcon} ${
                            expanded
                              ? styles.expandIconOpen
                              : ""
                          }`}
                        >
                          ↓
                        </span>
                      </button>

                      {/*detalhes*/}

                      {expanded && (
                        <div
                          className={
                            styles.offerDetails
                          }
                        >
                          {offer.details &&
                            offer
                              .details
                              .length >
                              0 && (
                              <div
                                className={
                                  styles.detailList
                                }
                              >
                                {offer.details.map(
                                  (
                                    detail
                                  ) => (
                                    <div
                                      key={
                                        detail
                                      }
                                    >
                                      <span>
                                        ✓
                                      </span>

                                      <p>
                                        {
                                          detail
                                        }
                                      </p>
                                    </div>
                                  )
                                )}
                              </div>
                            )}

                          {!offer.details
                            ?.length &&
                            offer.subtitle && (
                              <p
                                className={
                                  styles.simpleDescription
                                }
                              >
                                {
                                  offer.subtitle
                                }
                              </p>
                            )}

                          <button
                            type="button"
                            className={
                              styles.removeButton
                            }
                            onClick={() =>
                              handleRemoveOffer(
                                offer.type,
                                offer.id
                              )
                            }
                          >
                            Remover do pacote
                          </button>
                        </div>
                      )}
                    </article>
                  );
                }
              )}
            </div>

            {/*footer*/}

            <div
              className={
                styles.drawerFooter
              }
            >
              {/*total*/}

              <div
                className={
                  styles.totalArea
                }
              >
                <div>
                  <span>
                    TOTAL MENSAL ESTIMADO
                  </span>

                  <small>
                    Soma dos serviços
                    selecionados
                  </small>
                </div>

                <strong>
                  R$ {formattedTotal}

                  <span>
                    /mês
                  </span>
                </strong>
              </div>

              {/*continuar escolhendo*/}

              <button
                type="button"
                className={
                  styles.continueBrowsing
                }
                onClick={() =>
                  setOpen(false)
                }
              >
                Continuar escolhendo
              </button>

              {/* ATENDIMENTO */}

              <a
                href="#cobertura"
                className={
                  styles.checkoutButton
                }
                onClick={() =>
                  setOpen(false)
                }
              >
                Continuar atendimento

                <span>
                  →
                </span>
              </a>

              <p>
                O valor apresentado é
                uma estimativa da soma
                dos serviços
                selecionados. Condições
                comerciais podem variar.
              </p>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}