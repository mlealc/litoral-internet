"use client";

import {
  FormEvent,
  useEffect,
  useState,
} from "react";

import {
  siteConfig,
} from "@/config/site";

import styles from "./Support.module.css";


const CENTRAL_ASSINANTE_URL =
  siteConfig.links.subscriberCenter;

const SUPPORT_WHATSAPP =
  siteConfig.whatsapp.support;


/*suporte*/

export default function Support() {
  const [
    supportOpen,
    setSupportOpen,
  ] =
    useState(false);

  const [
    customerName,
    setCustomerName,
  ] =
    useState("");


  /*bloquear scroll e fechar com ESC*/

  useEffect(() => {
    if (!supportOpen) {
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
        setSupportOpen(
          false
        );
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
    supportOpen,
  ]);


  /*abrir suporte*/

  function openSupport() {
    setSupportOpen(
      true
    );
  }


  /*fechar suporte*/

  function closeSupport() {
    setSupportOpen(
      false
    );
  }


  /*enviar para wpp*/

  function handleSupportSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();


    const name =
      customerName.trim();


    if (!name) {
      return;
    }


    const message =
      encodeURIComponent(
        `Olá! Vim pelo novo site da Litoral Internet e preciso de suporte técnico.

Titular do cadastro: ${name}

Gostaria de falar com a equipe de suporte.`
      );


    const url =
      `https://wa.me/${SUPPORT_WHATSAPP}?text=${message}`;


    window.open(
      url,
      "_blank",
      "noopener,noreferrer"
    );


    /* limpa o formulário */

    setCustomerName(
      ""
    );

    setSupportOpen(
      false
    );
  }


  return (
    <>
      <section
        className={
          styles.support
        }
        id="suporte"
      >
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
              JÁ É CLIENTE?
            </span>

            <h2>
              A Litoral está

              <strong>
                {" "}
                perto de você.
              </strong>
            </h2>

            <p>
              Acesse os serviços da
              sua conta ou fale com
              nossa equipe sempre que
              precisar.
            </p>
          </div>


          {/*cards*/}

          <div
            className={
              styles.grid
            }
          >
            {/*central do assinante*/}

            <a
              href={
                CENTRAL_ASSINANTE_URL
              }
              target="_blank"
              rel="noopener noreferrer"
              className={
                styles.mainCard
              }
            >
              <div>
                <span
                  className={
                    styles.cardLabel
                  }
                >
                  ÁREA DO CLIENTE
                </span>

                <h3>
                  Central do Assinante
                </h3>

                <p>
                  Consulte faturas,
                  segunda via,
                  pagamentos e
                  informações sobre
                  seu plano.
                </p>
              </div>

              <div
                className={
                  styles.cardBottom
                }
              >
                <span>
                  Acessar minha conta
                </span>

                <strong>
                  →
                </strong>
              </div>
            </a>


            {/*suporte técnico*/}

            <button
              type="button"
              className={
                styles.card
              }
              onClick={
                openSupport
              }
            >
              <div
                className={
                  styles.icon
                }
              >
                ?
              </div>

              <div>
                <span
                  className={
                    styles.cardLabel
                  }
                >
                  PRECISA DE AJUDA?
                </span>

                <h3>
                  Suporte técnico
                </h3>

                <p>
                  Nossa equipe está
                  pronta para ajudar
                  você com sua
                  conexão.
                </p>
              </div>

              <span
                className={
                  styles.cardLink
                }
              >
                Falar com o suporte

                <strong>
                  →
                </strong>
              </span>
            </button>


            {/*comercial*/}

            <a
              href="#cobertura"
              className={
                styles.card
              }
            >
              <div
                className={
                  styles.icon
                }
              >
                +
              </div>

              <div>
                <span
                  className={
                    styles.cardLabel
                  }
                >
                  QUERO SER CLIENTE
                </span>

                <h3>
                  Atendimento comercial
                </h3>

                <p>
                  Consulte a cobertura
                  e encontre o plano
                  ideal para você.
                </p>
              </div>

              <span
                className={
                  styles.cardLink
                }
              >
                Consultar cobertura

                <strong>
                  →
                </strong>
              </span>
            </a>
          </div>
        </div>
      </section>


      {/*modal de suporte*/}

      {supportOpen && (
        <div
          className={
            styles.supportOverlay
          }
          onClick={
            closeSupport
          }
        >
          <div
            className={
              styles.supportModal
            }
            role="dialog"
            aria-modal="true"
            aria-labelledby="support-modal-title"
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
                styles.modalClose
              }
              onClick={
                closeSupport
              }
              aria-label="Fechar"
            >
              ×
            </button>


            {/* ÍCONE */}

            <div
              className={
                styles.modalIcon
              }
            >
              ?
            </div>


            {/*cabeçalho*/}

            <span
              className={
                styles.modalEyebrow
              }
            >
              SUPORTE LITORAL
            </span>

            <h3
              id="support-modal-title"
            >
              Vamos localizar seu
              cadastro
            </h3>

            <p
              className={
                styles.modalDescription
              }
            >
              Informe o nome completo
              do titular para agilizar
              o atendimento com nossa
              equipe de suporte.
            </p>


            {/*formulário*/}

            <form
              className={
                styles.supportForm
              }
              onSubmit={
                handleSupportSubmit
              }
            >
              <div
                className={
                  styles.supportField
                }
              >
                <label
                  htmlFor="supportCustomerName"
                >
                  Nome completo do titular
                </label>

                <input
                  id="supportCustomerName"
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
                      event.target.value
                    )
                  }
                  required
                  autoFocus
                />
              </div>


              <button
                type="submit"
                className={
                  styles.supportButton
                }
              >
                Continuar no WhatsApp

                <span>
                  →
                </span>
              </button>


              <small
                className={
                  styles.supportNote
                }
              >
                O nome será usado
                apenas para facilitar
                a localização do
                cadastro durante o
                atendimento.
              </small>
            </form>
          </div>
        </div>
      )}
    </>
  );
}