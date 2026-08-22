"use client";

import { FormEvent, useState } from "react";
import styles from "./Coverage.module.css";

const WHATSAPP_NUMBER = "5548996371319";

export default function Coverage() {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");

  function formatCep(value: string) {
    const numbers = value.replace(/\D/g, "").slice(0, 8);

    if (numbers.length > 5) {
      return `${numbers.slice(0, 5)}-${numbers.slice(5)}`;
    }

    return numbers;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const mensagem = encodeURIComponent(
      `Olá! Vim pelo novo site da Litoral Internet e gostaria de consultar a cobertura de fibra no meu endereço.

CEP: ${cep}
Endereço: ${endereco}
Número: ${numero}

Gostaria de falar com o setor comercial para verificar a disponibilidade.`
    );

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${mensagem}`;

    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section className={styles.coverage} id="cobertura">
      <div className={styles.glowOne} />
      <div className={styles.glowTwo} />

      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>
            IMBITUBA SE CONECTA AQUI
          </span>

          <h2>
            A Litoral chega
            <br />
            <strong>até você?</strong>
          </h2>

          <p className={styles.description}>
            Informe seu endereço e fale com nosso atendimento comercial
            para consultar a disponibilidade da fibra Litoral na sua região.
          </p>

          <div className={styles.features}>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>✓</span>

              <div>
                <strong>Consulta rápida</strong>
                <p>Envie seu endereço diretamente pelo WhatsApp.</p>
              </div>
            </div>

            <div className={styles.feature}>
              <span className={styles.featureIcon}>✓</span>

              <div>
                <strong>Atendimento comercial</strong>
                <p>
                  Continue o atendimento com a equipe da Litoral.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.local}>
            <span className={styles.pin}>⌖</span>

            <div>
              <strong>Internet feita para Imbituba.</strong>
              <p>Litoral Internet, Imbituba se conecta aqui!</p>
            </div>
          </div>
        </div>

        <div className={styles.formCard}>
          <div className={styles.formHeader}>
            <span>CONSULTE SUA REGIÃO</span>

            <h3>Verifique a cobertura</h3>

            <p>
              Preencha seu endereço para iniciar o atendimento.
            </p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.field}>
              <label htmlFor="cep">CEP</label>

              <input
                id="cep"
                type="text"
                inputMode="numeric"
                autoComplete="postal-code"
                placeholder="00000-000"
                value={cep}
                onChange={(event) =>
                  setCep(formatCep(event.target.value))
                }
                maxLength={9}
                required
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="endereco">Endereço</label>

              <input
                id="endereco"
                type="text"
                autoComplete="street-address"
                placeholder="Rua, avenida..."
                value={endereco}
                onChange={(event) =>
                  setEndereco(event.target.value)
                }
                required
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="numero">Número</label>

              <input
                id="numero"
                type="text"
                inputMode="numeric"
                placeholder="Ex: 123"
                value={numero}
                onChange={(event) =>
                  setNumero(event.target.value)
                }
                required
              />
            </div>

            <button type="submit" className={styles.button}>
              <span className={styles.whatsappIcon}>◉</span>

              Consultar cobertura no WhatsApp

              <span className={styles.arrow}>→</span>
            </button>

            <p className={styles.formNote}>
              Ao continuar, uma mensagem com os dados acima será
              preparada automaticamente no WhatsApp.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}