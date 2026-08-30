# Litoral Internet — Website

Website institucional e comercial da **Litoral Internet**, desenvolvido para apresentar planos, serviços, streamings, telefonia, promoções e facilitar o contato de novos e atuais clientes.

O projeto possui um fluxo integrado de seleção de ofertas, carrinho e encaminhamento da contratação para o WhatsApp.

---

## Tecnologias

O projeto foi desenvolvido com:

- Next.js
- React
- TypeScript
- CSS Modules
- App Router
- Context API
- Lenis
- Vercel

---

## Principais funcionalidades

### Planos de internet

Apresentação dos planos de fibra óptica com:

- velocidade
- preço
- benefícios
- destaques
- seleção para contratação

---

### Promoções

O Hero possui slides para:

- apresentação institucional
- campanhas promocionais
- combos de internet
- internet + streaming
- internet + TV
- promoções sazonais

Algumas promoções permitem escolher um aplicativo antes de adicionar o combo.

---

### Streaming

Pacotes de entretenimento com:

- preço
- serviços inclusos
- aplicativos disponíveis
- ícones dos serviços
- modal com informações de cada aplicativo

---

### Telefonia

Área dedicada aos planos de telefonia, integrada ao mesmo sistema de seleção de ofertas.

---

### Serviços adicionais

O cliente pode adicionar serviços extras ao pedido antes de seguir para a contratação.

---

### Carrinho de ofertas

As escolhas feitas em diferentes áreas do site são armazenadas pelo `OfferProvider`.

O carrinho pode reunir:

```text
Internet
Streaming
Telefonia
Adicionais
Promoções
```

O usuário consegue acompanhar suas escolhas antes de continuar.

---

### Consulta e contratação

A seção de cobertura coleta as informações necessárias para iniciar o atendimento.

O fluxo considera:

#### Novo cliente

Pode informar dados como:

- CEP
- endereço
- número

#### Cliente atual

Pode informar o nome do titular do cadastro.

As ofertas selecionadas são organizadas automaticamente em uma mensagem enviada para o WhatsApp comercial.

---

### Suporte

A área de suporte oferece:

- acesso à Central do Assinante
- atendimento técnico pelo WhatsApp

No atendimento técnico, um modal solicita o nome do titular antes de encaminhar o cliente.

---

## Estrutura do projeto

```text
litoral-redesign/
│
├── app/
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── Coverage/
│   ├── Extras/
│   ├── Footer/
│   ├── Header/
│   ├── Hero/
│   ├── OfferCart/
│   ├── Offers/
│   ├── PhonePlans/
│   ├── Plans/
│   ├── SmoothScroll/
│   ├── Streaming/
│   └── Support/
│
├── config/
│   └── site.ts
│
├── data/
│   ├── addons.ts
│   ├── phonePlans.ts
│   ├── plans.ts
│   ├── promotions.ts
│   └── streaming.ts
│
├── docs/
│   ├── GUIA-DE-ALTERACOES.md
│   └── ESTRUTURA-DO-PROJETO.md
│
├── public/
│   ├── hero/
│   ├── icons/
│   ├── images/
│   └── logo/
│
└── README.md
```

---

## Organização dos dados

O projeto separa conteúdo comercial da interface.

### `data/`

Contém informações que podem mudar com frequência:

```text
data/plans.ts
```

Planos de internet.

```text
data/streaming.ts
```

Pacotes e aplicativos de streaming.

```text
data/phonePlans.ts
```

Planos de telefonia.

```text
data/addons.ts
```

Serviços adicionais.

```text
data/promotions.ts
```

Promoções e slides do Hero.

---

### `config/`

Configurações globais ficam em:

```text
config/site.ts
```

Esse arquivo centraliza informações como:

- nome da empresa
- cidade
- WhatsApp comercial
- WhatsApp de suporte
- Central do Assinante
- informações institucionais
- textos globais do Hero

---

### `public/`

Arquivos visuais ficam em:

```text
public/
```

Principalmente:

```text
public/icons/
```

Ícones dos aplicativos e serviços.

```text
public/hero/promotions/
```

Imagens utilizadas nas promoções do Hero.

---

## Arquitetura das ofertas

O projeto utiliza Context API através do `OfferProvider`.

Fluxo simplificado:

```text
Planos / Streaming / Telefonia / Extras / Promoções
                         ↓
                    addOffer()
                         ↓
                  OfferProvider
                         ↓
                    OfferCart
                         ↓
                     Coverage
                         ↓
                     WhatsApp
```

Isso permite que diferentes componentes compartilhem o mesmo estado de contratação.

---

## Tipos de oferta

O sistema trabalha com categorias como:

```ts
"internet"
"streaming"
"extra"
"phone"
"promotion"
```

Cada oferta possui informações utilizadas pelo carrinho e pelo fluxo comercial.

---

## Instalação

### 1. Clone o projeto

```bash
git clone <URL-DO-REPOSITORIO>
```

### 2. Entre na pasta

```bash
cd litoral-redesign
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Inicie o ambiente de desenvolvimento

```bash
npm run dev
```

Depois, abra no navegador:

```text
http://localhost:3000
```

---

## Build de produção

Antes de publicar uma nova versão:

```bash
npm run build
```

O build deve finalizar sem erros.

---

## Executar versão de produção localmente

Depois do build:

```bash
npm start
```

---

## Atualização de conteúdo

Para alterações comerciais, evite modificar diretamente os componentes.

Priorize:

```text
data/
config/
public/
```

Exemplos:

| Alteração | Arquivo |
|---|---|
| Planos de internet | `data/plans.ts` |
| Streaming | `data/streaming.ts` |
| Telefonia | `data/phonePlans.ts` |
| Serviços adicionais | `data/addons.ts` |
| Promoções | `data/promotions.ts` |
| WhatsApp | `config/site.ts` |
| Central do Assinante | `config/site.ts` |
| Configurações globais | `config/site.ts` |
| Ícones | `public/icons/` |
| Imagens promocionais | `public/hero/promotions/` |

---

## Documentação

O projeto possui documentação adicional na pasta:

```text
docs/
```

### Guia de alterações

```text
docs/GUIA-DE-ALTERACOES.md
```

Manual para atualização de:

- preços
- planos
- streamings
- promoções
- imagens
- WhatsApp
- links
- configurações gerais

### Estrutura do projeto

```text
docs/ESTRUTURA-DO-PROJETO.md
```

Documentação técnica sobre:

- arquitetura
- componentes
- OfferProvider
- OfferCart
- Hero
- Coverage
- WhatsApp
- Support
- Lenis
- dados
- configurações

---

## Rolagem suave

O projeto utiliza Lenis para rolagem suave.

Links internos podem apontar para seções como:

```text
#planos
#streaming
#cobertura
#suporte
```

Modais e elementos com comportamento próprio podem utilizar:

```tsx
data-lenis-prevent
```

para evitar conflitos com a rolagem da página.

---

## Boas práticas de manutenção

Antes de alterar o projeto:

1. identifique se a alteração é conteúdo, aparência ou comportamento;
2. para conteúdo, verifique primeiro `data/` e `config/`;
3. para imagens, utilize `public/`;
4. para aparência, altere os arquivos `.module.css`;
5. altere componentes `.tsx` apenas quando houver mudança de estrutura ou comportamento;
6. execute o projeto localmente;
7. teste desktop e mobile;
8. execute `npm run build` antes da publicação.

---

## Não editar manualmente

Evite alterações diretas em:

```text
.next/
node_modules/
next-env.d.ts
```

Esses arquivos ou diretórios são gerados automaticamente.

---

## Deploy

O projeto pode ser publicado na Vercel.

Antes de realizar um novo deploy, execute:

```bash
npm run build
```

e confirme que não existem erros de compilação.

---

## Fluxo de manutenção

A arquitetura foi organizada seguindo esta divisão:

```text
CONTEÚDO
│
├── data/
├── config/
└── public/

INTERFACE E COMPORTAMENTO
│
└── components/

ESTRUTURA DA APLICAÇÃO
│
└── app/
```

Essa separação facilita a manutenção do site e reduz a necessidade de modificar componentes para alterações comerciais simples.

---

## Litoral Internet

Site desenvolvido para oferecer uma experiência moderna de apresentação dos serviços da Litoral Internet, centralizando informações comerciais e facilitando o caminho entre a escolha do plano e o atendimento.