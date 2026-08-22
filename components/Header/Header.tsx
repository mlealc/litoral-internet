"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./Header.module.css";

const CENTRAL_ASSINANTE_URL =
  "https://ixc.litoralinternet.com.br/central_assinante_web/login";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 15);
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${styles.header} ${
        scrolled ? styles.scrolled : ""
      }`}
    >
      <div className={styles.container}>
        {/* LOGO */}
        <a
          href="#"
          className={styles.logo}
          aria-label="Litoral Internet - início"
        >
          <Image
            src="/logo/litoral-logo.png"
            alt="Litoral Internet"
            width={220}
            height={80}
            priority
          />
        </a>

        {/* NAVEGAÇÃO DESKTOP */}
        <nav
          className={styles.nav}
          aria-label="Navegação principal"
        >
          <a href="#planos">Planos</a>
          <a href="#streaming">Streaming</a>
          <a href="#extras">Benefícios</a>
          <a href="#cobertura">Cobertura</a>
          <a href="#suporte">Suporte</a>
        </nav>

        {/* BOTÕES DESKTOP */}
        <div className={styles.actions}>
          <a
            href={CENTRAL_ASSINANTE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.clientButton}
          >
            Central do Assinante
          </a>

          <a
            href="#cobertura"
            className={styles.primaryButton}
          >
            Assine agora
          </a>
        </div>

        {/* MENU MOBILE NATIVO */}
        <details className={styles.mobileDetails}>
          <summary
            className={styles.menuButton}
            aria-label="Abrir menu de navegação"
          >
            <span />
            <span />
            <span />
          </summary>

          <div className={styles.mobileMenu}>
            <nav
              className={styles.mobileNav}
              aria-label="Navegação mobile"
            >
              <a href="#planos">
                Planos
                <span>→</span>
              </a>

              <a href="#streaming">
                Streaming
                <span>→</span>
              </a>

              <a href="#extras">
                Benefícios
                <span>→</span>
              </a>

              <a href="#cobertura">
                Cobertura
                <span>→</span>
              </a>

              <a href="#suporte">
                Suporte
                <span>→</span>
              </a>
            </nav>

            <div className={styles.mobileActions}>
              <a
                href={CENTRAL_ASSINANTE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mobileSecondary}
              >
                Central do Assinante
              </a>

              <a
                href="#cobertura"
                className={styles.mobilePrimary}
              >
                Assine agora
              </a>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}