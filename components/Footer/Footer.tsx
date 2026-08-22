import Image from "next/image";
import styles from "./Footer.module.css";

const CENTRAL_ASSINANTE_URL =
  "https://ixc.litoralinternet.com.br/central_assinante_web/login";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Image
              src="/logo/litoral-logo.png"
              alt="Litoral Internet"
              width={240}
              height={90}
              className={styles.logo}
            />

            <p>
              Internet de verdade, atendimento próximo e conexão
              para todos os momentos.
            </p>

            <strong>
              Imbituba se conecta aqui!
            </strong>
          </div>

          <div className={styles.links}>
            <div>
              <span>NAVEGAÇÃO</span>

              <a href="#planos">
                Planos
              </a>

              <a href="#streaming">
                Streaming
              </a>

              <a href="#extras">
                Benefícios
              </a>

              <a href="#cobertura">
                Cobertura
              </a>

              <a href="#suporte">
                Suporte
              </a>
            </div>

            <div>
              <span>CLIENTE</span>

              <a
                href={CENTRAL_ASSINANTE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Central do Assinante
              </a>

              <a
                href={CENTRAL_ASSINANTE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Segunda via
              </a>

              <a href="#suporte">
                Suporte técnico
              </a>
            </div>

            <div>
              <span>CONTATO</span>

              <a href="#cobertura">
                Quero ser cliente
              </a>

              <a href="#cobertura">
                WhatsApp
              </a>

              <a href="#">
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            © {new Date().getFullYear()} Litoral Internet.
            Todos os direitos reservados.
          </p>

          <p className={styles.location}>
            Imbituba • Santa Catarina
          </p>
        </div>
      </div>
    </footer>
  );
}