Estrutura do Projeto - Litoral Internet

Documentação técnica da arquitetura, componentes, dados e fluxo de contratação

---

## 1. Visão Geral

O projeto foi desenvolvido com Next.js, React, TypeScript, CSS Modules, App Router, Lenis para rolagem suave e Context API para gerenciamento das ofertas selecionadas.

A estrutura foi organizada para separar interface, dados comerciais, configurações globais, imagens e lógica de seleção de ofertas.

---

## 2. Estrutura Principal

app/
components/
config/
data/
docs/
public/

Cada pasta possui uma responsabilidade específica.

---

## 3. Pasta app/

A pasta app/ é responsável pela estrutura principal da aplicação Next.js.

app/
├── layout.tsx
└── page.tsx

---

## 4. app/layout.tsx

Define a estrutura global do site e reúne elementos que precisam existir em toda a aplicação.

Header

OfferProvider

OfferCart

SmoothScroll

conteúdo das páginas

<OfferProvider>
  <Header />
  <SmoothScroll />
  {children}
  <OfferCart />
</OfferProvider>

O OfferProvider envolve a aplicação porque diversos componentes precisam acessar o mesmo carrinho de ofertas.

---

## 5. app/page.tsx

Monta a página inicial, importa os componentes principais e define a ordem das seções.

<>
  <Hero />
  <Plans />
  <Streaming />
  <PhonePlans />
  <Extras />
  <Coverage />
  <Support />
  <Footer />
</>

O page.tsx deve permanecer simples. Dados comerciais não devem ser colocados diretamente nele.

---

## 6. Pasta components/

components/
├── Coverage/
├── Extras/
├── Footer/
├── Header/
├── Hero/
├── OfferCart/
├── Offers/
├── PhonePlans/
├── Plans/
├── SmoothScroll/
├── Streaming/
└── Support/

Cada componente possui normalmente um arquivo .tsx para estrutura/comportamento/lógica e um .module.css para aparência, responsividade e efeitos.

Streaming/
├── Streaming.tsx
└── Streaming.module.css

---

## 7. Hero

A seção Hero representa a área principal do site e reúne apresentação institucional, promoções, combos, imagens promocionais, CTAs, navegação entre slides e versões desktop/mobile.

Os dados comerciais vêm de data/promotions.ts.

---

## 8. Promoções do Hero

data/promotions.ts exporta heroSlides e comboApps. heroSlides contém os slides exibidos pelo Hero.

{ id: "450-top", title: "450 MEGA", highlight: "+ 1 APP Top Litoral", price: 119.9 }

---

## 9. Combos com escolha de aplicativo

Algumas promoções permitem escolher um aplicativo. Os aplicativos disponíveis ficam em comboApps.

addOffer({
  id: slide.cartOffer.id,
  type: "promotion",
  name: slide.cartOffer.name,
  price: slide.cartOffer.price,
  subtitle: `${selectedApp.name} incluso`,
});

O subtitle identifica o aplicativo escolhido e também é usado posteriormente na mensagem enviada pelo WhatsApp.

---

## 10. Plans

components/Plans/Plans.tsx exibe os planos principais de internet. Os dados vêm de data/plans.ts.

A fonte principal dos preços e informações comerciais deve continuar sendo plans.ts.

---

## 11. Seleção de plano

addOffer({
  id: plan.id,
  type: "internet",
  name: plan.name,
  price: plan.price,
});

O carrinho consegue mostrar o plano selecionado em outras partes da página.

---

## 12. Streaming

components/Streaming/Streaming.tsx exibe os pacotes de entretenimento. Os dados vêm de data/streaming.ts.

nome

preço

serviços

aplicativos

destaque

---

## 13. Aplicativos de streaming

Os ícones ficam em public/icons/. O nome configurado no dado deve corresponder exatamente ao arquivo.

<img src={`/icons/${app.icon}`} />

icon: "globoplay.png"
→ public/icons/globoplay.png

---

## 14. Modal dos aplicativos

Ao clicar em um aplicativo, o componente abre um modal com ícone, nome, detalhes e descrição. O estado utilizado é selectedApp.

O modal pode ser fechado pelo botão ×, clicando fora ou pressionando Escape.

---

## 15. Telefonia

components/PhonePlans/ utiliza data/phonePlans.ts. O fluxo de seleção segue a mesma arquitetura das outras ofertas.

type: "phone"

---

## 16. Adicionais

components/Extras/ utiliza data/addons.ts. As ofertas adicionais entram no carrinho com:

type: "extra"

---

## 17. Sistema de Ofertas

components/Offers/ contém o gerenciamento compartilhado das ofertas selecionadas. O componente central é o OfferProvider.

---

## 18. OfferProvider

O OfferProvider utiliza Context API do React para compartilhar informações entre componentes.

offers
customerStatus

addOffer()
removeOffer()
clearOffers()
hasOffer()
setCustomerStatus()

---

## 19. Tipos de oferta

"internet"
"streaming"
"extra"
"phone"
"promotion"

Esses tipos diferenciam os produtos dentro do carrinho.

---

## 20. OfferCart

components/OfferCart/ mostra ao usuário tudo o que foi selecionado e lê diretamente os dados do OfferProvider.

Componente
    ↓
addOffer()
    ↓
OfferProvider
    ↓
OfferCart

---

## 21. Remoção de ofertas

removeOffer(type, id);

removeOffer("streaming", plan.id);

---

## 22. Verificar se uma oferta está selecionada

hasOffer(type, id);

{selected ? "Streaming selecionado" : "Quero adicionar"}

---

## 23. Coverage e WhatsApp

components/Coverage/ é responsável pela etapa final da contratação. Utiliza ofertas selecionadas, tipo de cliente, endereço, nome e WhatsApp comercial.

---

## 24. Cliente novo

Quando o usuário ainda não é cliente, o fluxo pode solicitar CEP, endereço e número para ajudar a equipe comercial a verificar disponibilidade.

---

## 25. Cliente existente

Para clientes existentes, o fluxo utiliza o nome do titular para facilitar a identificação.

---

## 26. Construção da mensagem

As ofertas selecionadas são transformadas em uma mensagem para o WhatsApp. O offer.subtitle é importante para identificar escolhas dentro de combos.

450 MEGA + Top Litoral — R$ 119,90/mês
↳ Disney+ incluso

---

## 27. Fluxo completo da contratação

Usuário acessa o site
        ↓
Escolhe um plano
        ↓
Pode adicionar streaming
        ↓
Pode adicionar telefonia
        ↓
Pode adicionar extras
        ↓
Pode escolher promoções
        ↓
OfferProvider salva as escolhas
        ↓
OfferCart exibe o resumo
        ↓
Coverage coleta os dados
        ↓
Mensagem é montada
        ↓
WhatsApp é aberto

Depois que o WhatsApp é aberto, o carrinho é limpo para evitar que uma contratação anterior permaneça selecionada.

---

## 28. Support

components/Support/ possui dois fluxos principais: Central do Assinante e suporte técnico.

siteConfig.links.subscriberCenter
siteConfig.whatsapp.support

O suporte técnico abre um modal, solicita o nome completo do titular e gera uma mensagem para o WhatsApp.

---

## 29. Modal de suporte

Pode ser fechado pelo botão ×, clicando fora ou pressionando Escape. Enquanto estiver aberto, o scroll da página é bloqueado.

data-lenis-prevent

---

## 30. Pasta config/

config/
└── site.ts

Contém configurações gerais utilizadas em várias partes do projeto.

---

## 31. config/site.ts

siteConfig.company
siteConfig.whatsapp
siteConfig.links
siteConfig.hero
siteConfig.promotions

siteConfig.whatsapp.commercial é utilizado no fluxo comercial; siteConfig.whatsapp.support no suporte técnico; siteConfig.links.subscriberCenter na Central do Assinante.

---

## 32. Pasta data/

data/
├── addons.ts
├── phonePlans.ts
├── plans.ts
├── promotions.ts
└── streaming.ts

Os dados comerciais ficam separados da interface, permitindo modificar preços e produtos sem alterar diretamente os componentes.

---

## 33. Regra de responsabilidade

data/       → informações comerciais
config/     → configurações gerais
components/ → interface e comportamento
public/     → arquivos visuais
app/        → estrutura da aplicação

---

## 34. Pasta public/

public/
├── hero/
├── icons/
├── images/
└── logo/

Contém arquivos que podem ser acessados diretamente pelo navegador.

---

## 35. Ícones

public/icons/disney+ads.png

icon: "disney+ads.png"

---

## 36. Imagens promocionais

public/hero/promotions/combo-450-top.jpeg

image: "/hero/promotions/combo-450-top.jpeg"

---

## 37. SmoothScroll

components/SmoothScroll/ inicializa o Lenis para melhorar a experiência de rolagem.

---

## 38. Links internos

#planos
#streaming
#cobertura
#suporte

<a href="#planos">Ver planos</a>

---

## 39. Modais e Lenis

Elementos com rolagem própria ou modais podem usar data-lenis-prevent para evitar que a rolagem interna seja capturada pelo Lenis.

data-lenis-prevent

---

## 40. CSS Modules

Cada componente possui seu próprio arquivo CSS, reduzindo conflitos entre estilos.

import styles from "./Hero.module.css";

<div className={styles.container} />

---

## 41. Responsividade

Algumas seções possuem estruturas específicas para desktop, tablet e mobile. O Hero é um exemplo. Evite remover blocos responsivos sem verificar o comportamento em todas as telas.

---
## 42. Onde alterar conteúdo

Para alterações comerciais, priorize:

data/
config/
public/

Evite modificar componentes quando a mudança for apenas preço, nome de plano, aplicativo, promoção, telefone, URL ou imagem.

---

## 43. Onde alterar comportamento

components/ deve ser modificado quando houver necessidade de mudar interação, fluxo, modal, carrinho, lógica, animação ou estrutura visual.

---

## 44. Onde alterar aparência

Arquivos *.module.css devem ser utilizados para cores, tamanhos, espaçamento, responsividade, efeitos, transições e posicionamento.

---

## 45. Desenvolvimento

npm run dev

---

## 46. Build de produção

npm run build

O build deve finalizar sem erros antes da publicação.

---

## 47. Pastas que não devem ser editadas

.next/
node_modules/
next-env.d.ts

Esses arquivos e pastas são gerados automaticamente.

---

## 48. Fluxo resumido do sistema

data/
  ↓
componentes
  ↓
usuário seleciona produtos
  ↓
OfferProvider
  ↓
OfferCart
  ↓
Coverage
  ↓
mensagem de contratação
  ↓
WhatsApp

config/site.ts fornece informações globais como WhatsApp, Central do Assinante, informações do Hero e textos institucionais.

---

## 49. Princípio da Arquitetura

O projeto foi organizado para manter três responsabilidades separadas:

Conteúdo
→ data/
→ config/
→ public/

Interface
→ components/

Estrutura da aplicação
→ app/

manutenção

atualização de preços

troca de promoções

inclusão de serviços

correção de componentes

evolução futura do projeto

---

## 50. Documentação relacionada

Para alterações de conteúdo, consulte:

docs/GUIA-DE-ALTERACOES.md

Esse arquivo explica onde modificar planos, preços, streamings, promoções, WhatsApp, imagens e links.

