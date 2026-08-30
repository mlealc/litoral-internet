"use client";

import {
  FormEvent,
  useState,
} from "react";

import {
  type OfferType,
  useOffers,
} from "@/components/Offers/OfferProvider";

import styles from "./Coverage.module.css";

/*wpp*/

import {
  siteConfig,
} from "@/config/site";

const WHATSAPP_NUMBER =
  siteConfig.whatsapp.commercial;


/*formatar preço*/

function formatPrice(
  price?: number
) {
  if (
    price === undefined
  ) {
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


/*label do tipo de serviço*/

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


/*ícone*/

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


/*componente*/

export default function Coverage() {
  const {
    offers,
    customerStatus,
    setCustomerStatus,
    removeOffer,
    clearOffers,
  } = useOffers();


  /*campos*/

  const [
    cep,
    setCep,
  ] = useState("");

  const [
    endereco,
    setEndereco,
  ] = useState("");

  const [
    numero,
    setNumero,
  ] = useState("");

  const [
    customerName,
    setCustomerName,
  ] = useState("");


  /*status do cliente*/

  const isExistingCustomer =
    customerStatus ===
    "cliente";

  const isNewCustomer =
    customerStatus ===
    "novo";


  /*total mensal*/

  const totalMonthly =
    offers.reduce(
      (
        total,
        offer
      ) =>
        total +
        (
          offer.price ??
          0
        ),
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


  /*formatar cep*/

  function formatCep(
    value: string
  ) {
    const numbers =
      value
        .replace(
          /\D/g,
          ""
        )
        .slice(
          0,
          8
        );

    if (
      numbers.length >
      5
    ) {
      return `${numbers.slice(
        0,
        5
      )}-${numbers.slice(
        5
      )}`;
    }

    return numbers;
  }


  /*montar lista de serviços*/

  function buildOffersMessage() {
    if (
      offers.length === 0
    ) {
      return "• Nenhum serviço específico selecionado";
    }

    return offers
      .map(
        (
          offer
        ) => {
          const price =
            formatPrice(
              offer.price
            );

          const priceText =
            price
              ? ` — R$ ${price}/mês`
              : "";

          const subtitleText =
            offer.subtitle
              ? `\n  ↳ ${offer.subtitle}`
              : "";

          return `• ${offer.name}${priceText}${subtitleText}`;
        }
      )
      .join(
        "\n"
      );
  }


  /*enviar para wpp*/

  function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();


    /*precisa informar status*/

    if (
      !customerStatus
    ) {
      return;
    }


    /*cliente existente precisa informar o nome*/

    if (
      isExistingCustomer &&
      !customerName.trim()
    ) {
      return;
    }


    const offersMessage =
      buildOffersMessage();

    let message = "";


    /*cliente já existente*/

    if (
      isExistingCustomer
    ) {
      message = `Olá! Vim pelo novo site da Litoral Internet e gostaria de adicionar/alterar serviços:

MEU PACOTE
${offersMessage}

JÁ SOU CLIENTE
Titular: ${customerName.trim()}

Gostaria de continuar o atendimento com o setor comercial.`;
    }


    /*novo cliente*/

    if (
      isNewCustomer
    ) {
      message = `Olá! Vim pelo novo site da Litoral Internet e gostaria de contratar:

MEU PACOTE
${offersMessage}

ENDEREÇO
CEP: ${cep}
${endereco}, ${numero}

Ainda não sou cliente Litoral.

Gostaria de verificar a cobertura e continuar a contratação.`;
    }


    /*abrir wpp*/

    const mensagem =
      encodeURIComponent(
        message
      );

    const url =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${mensagem}`;

    window.open(
      url,
      "_blank",
      "noopener,noreferrer"
    );


    /*limpar carrinho*/

    clearOffers();


    /*limpar formulário*/

    setCep("");

    setEndereco("");

    setNumero("");

    setCustomerName("");

    setCustomerStatus(
      null
    );
  }


  /*JSX*/

  return (
    <section
      className={
        styles.coverage
      }
      id="cobertura"
    >
      <div
        className={
          styles.glowOne
        }
      />

      <div
        className={
          styles.glowTwo
        }
      />


      <div
        className={
          styles.container
        }
      >
        {/*conteúdo*/}

        <div
          className={
            styles.content
          }
        >
          <span
            className={
              styles.eyebrow
            }
          >
            IMBITUBA SE CONECTA AQUI
          </span>


          <h2>
            Vamos encontrar
            <br />

            <strong>
              a opção ideal?
            </strong>
          </h2>


          <p
            className={
              styles.description
            }
          >
            Escolha seus serviços,
            informe se você já é
            cliente Litoral e continue
            o atendimento diretamente
            com nossa equipe pelo
            WhatsApp.
          </p>


          <div
            className={
              styles.features
            }
          >
            <div
              className={
                styles.feature
              }
            >
              <span
                className={
                  styles.featureIcon
                }
              >
                ✓
              </span>

              <div>
                <strong>
                  Atendimento mais rápido
                </strong>

                <p>
                  Suas escolhas já
                  chegam organizadas
                  para nossa equipe.
                </p>
              </div>
            </div>


            <div
              className={
                styles.feature
              }
            >
              <span
                className={
                  styles.featureIcon
                }
              >
                ✓
              </span>

              <div>
                <strong>
                  Tudo em uma única conversa
                </strong>

                <p>
                  Internet, streaming,
                  benefícios e telefonia
                  podem seguir juntos
                  para o atendimento.
                </p>
              </div>
            </div>
          </div>


          <div
            className={
              styles.local
            }
          >
            <span
              className={
                styles.pin
              }
            >
              ⌖
            </span>

            <div>
              <strong>
                Internet feita para Imbituba.
              </strong>

              <p>
                Litoral Internet,
                Imbituba se conecta aqui!
              </p>
            </div>
          </div>
        </div>


        {/*card*/}

        <div
          className={
            styles.formCard
          }
        >
          <div
            className={
              styles.formHeader
            }
          >
            <span>
              ATENDIMENTO LITORAL
            </span>

            <h3>
              Continue sua contratação
            </h3>

            <p>
              Confira suas escolhas e
              envie tudo diretamente
              para nosso atendimento.
            </p>
          </div>


          {/*ofertas*/}

          <div
            className={
              styles.offersArea
            }
          >
            {offers.length >
              0 && (
              <div
                className={
                  styles.coverageTotal
                }
              >
                <div>
                  <span>
                    TOTAL MENSAL ESTIMADO
                  </span>

                  <small>
                    Soma dos serviços selecionados
                  </small>
                </div>

                <strong>
                  R${" "}
                  {
                    formattedTotal
                  }

                  <span>
                    /mês
                  </span>
                </strong>
              </div>
            )}


            <div
              className={
                styles.offersHeader
              }
            >
              <div>
                <span>
                  SEU INTERESSE
                </span>

                <strong>
                  {offers.length ===
                  0
                    ? "Nenhum serviço selecionado"
                    : offers.length ===
                      1
                    ? "1 serviço selecionado"
                    : `${offers.length} serviços selecionados`}
                </strong>
              </div>


              {offers.length >
                1 && (
                <button
                  type="button"
                  className={
                    styles.clearOffers
                  }
                  onClick={
                    clearOffers
                  }
                >
                  Limpar
                </button>
              )}
            </div>


            {offers.length >
            0 ? (
              <div
                className={
                  styles.offerList
                }
              >
                {offers.map(
                  (
                    offer
                  ) => {
                    const price =
                      formatPrice(
                        offer.price
                      );

                    return (
                      <article
                        key={`${offer.type}-${offer.id}`}
                        className={
                          styles.offerCard
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
                            styles.offerContent
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
                            <p>
                              {
                                offer.subtitle
                              }
                            </p>
                          )}
                        </div>


                        <div
                          className={
                            styles.offerRight
                          }
                        >
                          {price && (
                            <div
                              className={
                                styles.offerPrice
                              }
                            >
                              <strong>
                                R${" "}
                                {
                                  price
                                }
                              </strong>

                              <span>
                                /mês
                              </span>
                            </div>
                          )}

                          <button
                            type="button"
                            className={
                              styles.removeOffer
                            }
                            onClick={() =>
                              removeOffer(
                                offer.type,
                                offer.id
                              )
                            }
                            aria-label={`Remover ${offer.name}`}
                          >
                            ×
                          </button>
                        </div>
                      </article>
                    );
                  }
                )}
              </div>
            ) : (
              <div
                className={
                  styles.noOffers
                }
              >
                <div
                  className={
                    styles.noOffersIcon
                  }
                >
                  +
                </div>

                <div>
                  <strong>
                    Você ainda não escolheu nenhum serviço
                  </strong>

                  <p>
                    Você pode continuar
                    mesmo assim ou
                    escolher um plano
                    antes.
                  </p>
                </div>

                <a
                  href="#planos"
                >
                  Ver planos
                </a>
              </div>
            )}
          </div>


          {/*já é cliente*/}

          <div
            className={
              styles.customerQuestion
            }
          >
            <div
              className={
                styles.questionHeader
              }
            >
              <span>
                UMA INFORMAÇÃO RÁPIDA
              </span>

              <strong>
                Você já é cliente Litoral?
              </strong>

              <p>
                Isso ajuda a direcionar
                seu atendimento para o
                fluxo correto.
              </p>
            </div>


            <div
              className={
                styles.customerOptions
              }
            >
              <button
                type="button"
                className={`${styles.customerOption} ${
                  isExistingCustomer
                    ? styles.customerOptionActive
                    : ""
                }`}
                onClick={() =>
                  setCustomerStatus(
                    "cliente"
                  )
                }
              >
                <span
                  className={
                    styles.optionIcon
                  }
                >
                  ✓
                </span>

                <span
                  className={
                    styles.optionText
                  }
                >
                  <strong>
                    Sim
                  </strong>

                  <small>
                    Já sou cliente
                  </small>
                </span>
              </button>


              <button
                type="button"
                className={`${styles.customerOption} ${
                  isNewCustomer
                    ? styles.customerOptionActive
                    : ""
                }`}
                onClick={() =>
                  setCustomerStatus(
                    "novo"
                  )
                }
              >
                <span
                  className={
                    styles.optionIcon
                  }
                >
                  +
                </span>

                <span
                  className={
                    styles.optionText
                  }
                >
                  <strong>
                    Ainda não
                  </strong>

                  <small>
                    Quero contratar
                  </small>
                </span>
              </button>
            </div>
          </div>


          {/*formulário*/}

          <form
            className={
              styles.form
            }
            onSubmit={
              handleSubmit
            }
          >
            {/*novo cliente*/}

            {isNewCustomer && (
              <div
                className={
                  styles.addressFields
                }
              >
                <div
                  className={
                    styles.addressHeader
                  }
                >
                  <span>
                    ENDEREÇO DE INSTALAÇÃO
                  </span>

                  <p>
                    Precisamos desses
                    dados para consultar
                    a cobertura.
                  </p>
                </div>


                <div
                  className={
                    styles.field
                  }
                >
                  <label
                    htmlFor="cep"
                  >
                    CEP
                  </label>

                  <input
                    id="cep"
                    type="text"
                    inputMode="numeric"
                    autoComplete="postal-code"
                    placeholder="00000-000"
                    value={
                      cep
                    }
                    onChange={(
                      event
                    ) =>
                      setCep(
                        formatCep(
                          event
                            .target
                            .value
                        )
                      )
                    }
                    maxLength={
                      9
                    }
                    required
                  />
                </div>


                <div
                  className={
                    styles.field
                  }
                >
                  <label
                    htmlFor="endereco"
                  >
                    Endereço
                  </label>

                  <input
                    id="endereco"
                    type="text"
                    autoComplete="street-address"
                    placeholder="Rua, avenida..."
                    value={
                      endereco
                    }
                    onChange={(
                      event
                    ) =>
                      setEndereco(
                        event
                          .target
                          .value
                      )
                    }
                    required
                  />
                </div>


                <div
                  className={
                    styles.field
                  }
                >
                  <label
                    htmlFor="numero"
                  >
                    Número
                  </label>

                  <input
                    id="numero"
                    type="text"
                    inputMode="numeric"
                    placeholder="Ex: 123"
                    value={
                      numero
                    }
                    onChange={(
                      event
                    ) =>
                      setNumero(
                        event
                          .target
                          .value
                      )
                    }
                    required
                  />
                </div>
              </div>
            )}


            {/*cliente existente*/}

            {isExistingCustomer && (
              <div
                className={
                  styles.existingCustomerArea
                }
              >
                <div
                  className={
                    styles.existingCustomerInfo
                  }
                >
                  <div
                    className={
                      styles.existingIcon
                    }
                  >
                    ✓
                  </div>

                  <div>
                    <strong>
                      Perfeito, você já é cliente.
                    </strong>

                    <p>
                      Informe o nome
                      completo do titular
                      do cadastro para
                      agilizar a
                      localização do seu
                      contrato pelo
                      atendimento.
                    </p>
                  </div>
                </div>


                <div
                  className={
                    styles.field
                  }
                >
                  <label
                    htmlFor="customerName"
                  >
                    Nome completo do titular
                  </label>

                  <input
                    id="customerName"
                    type="text"
                    autoComplete="name"
                    placeholder="Digite o nome completo"
                    value={
                      customerName
                    }
                    onChange={(
                      event
                    ) =>
                      setCustomerName(
                        event
                          .target
                          .value
                      )
                    }
                    required
                  />
                </div>
              </div>
            )}


            {/*sem status*/}

            {!customerStatus && (
              <div
                className={
                  styles.statusWarning
                }
              >
                <span>
                  !
                </span>

                <p>
                  Informe acima se você
                  já é cliente Litoral
                  para continuar.
                </p>
              </div>
            )}


            {/*botão enviar*/}

            <button
              type="submit"
              className={
                styles.button
              }
              disabled={
                !customerStatus
              }
            >
              <span
                className={
                  styles.whatsappIcon
                }
              >
                ◉
              </span>

              {isExistingCustomer
                ? "Solicitar pelo WhatsApp"
                : isNewCustomer
                ? "Consultar cobertura no WhatsApp"
                : "Continuar pelo WhatsApp"}

              <span
                className={
                  styles.arrow
                }
              >
                →
              </span>
            </button>


            <p
              className={
                styles.formNote
              }
            >
              Uma mensagem resumida
              com seus dados e serviços
              selecionados será
              preparada automaticamente
              no WhatsApp.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}