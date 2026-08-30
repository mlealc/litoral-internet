## Guia de Alterações - Litoral Internet

Este documento explica onde alterar as principais informações do site sem precisar modificar os componentes visuais.

A recomendação é alterar apenas os valores necessários e evitar renomear propriedads, arquivos ou estruturas.

---

## 1. Planos de Internet

Arquivo: 

````text 
    data/plans.ts 

Neste arquivo ficam os planos principais de internet. Podem ser alteradas informações como:

Nome plano / Velocidade / Preço / Benefícios / Destaque plano / Info adicionais.

Evitar alterar: id / nome das propriedades / estrutura do objeto

exemplo: 

        {
  id: "450-mega",
  name: "450 MEGA",
  price: 99.9,
}

price:99.9, - altera somente o valor.

---

## 2. Pacotes de Streaming

Arquivo: 

    data/streaming.ts

Neste arquivo ficam: 

Pacotes streaming / Preço / App inclusos / Descrição / Ícones / Benefícios

Exemplo de APP: 

            {
  name: "Globoplay",
  icon: "globoplay.png",
  description: "Descrição do serviço",
}

Os ícones utilizados, ficam em:

    public/icons/

Exemplo:

        icon: "globoplay.png"

Precisa ser exatamente igual ao nome do arquivo existente em public/icons.

---

## 3. Planos de Telefonia

Arquivo:

    data/phonePlans.ts

Neste arquivo ficam os planos relacionados à telefonia. 

Podem ser alterados:

Nome / Preço / Benefícios / Quantidade Minutos / Descrição. 

Evitar renomear propriedades ou IDs já utilizados pelos componentes.

--

## 4. Serviços Adicionais 

Arquivo:

    data/addons.ts

Neste arquivo ficam serviços adicionais que podem ser adicionados ao pedido.

Podem ser alterados:

Nome / Preço / Descrição Benefícios.

---

## 5. Promoções do Hero

Arquivo:

    data/promotions.ts

Este arquivo controla os slides e promoções exibidos na parte principal do site.

Cada promoção possui informações como:

{
  id: "450-top",
  eyebrow: "COMBO LITORAL",
  title: "450 MEGA",
  highlight: "+ 1 APP Top Litoral",
  description: "Descrição da promoção",
  price: 119.9,
}

Também pode existir:

Imagem /Preço / Benefícios / CTA / Observações / Oferta adicionada ao carrinho.

---

## 6. Alterar imagem de promoção

As imagens do hero ficam em:

        public/hero/promotions/

        Exemplo:
           public/hero/promotions/combo-450-top.jpeg 

No arquivo:
    data/promotions.ts

O caminho deve ser:
 
     image: "/hero/promotions/combo-450-top.jpeg",

Ao trocar uma imagem, existem duas opções.

Opção 1 - manter o mesmo nome 

    Substitua o arquivo dentro de:
        public/hero/promotions/

Mantendo exatamente o mesmo nome.

Opção 2 - usar outro nome

    Adicione a nova imagem e utilize:

        image: "/hero/promotions/nova-promocao.jpeg",

---

## 7. Configurações gerais do site

Arquivo:

    config/site.ts

Este arquivo concentra informações gerais utilizadas em diferentes partes do site.

Exemplo:

    export const siteConfig = {
  company: {
    name: "Litoral Internet",
    city: "Imbituba",
    slogan: "Imbituba se conecta aqui!",
  },

  whatsapp: {
    commercial: "5548996371319",
    support: "5548996371319",
  },

  links: {
    subscriberCenter:
      "https://ixc.litoralinternet.com.br/central_assinante_web/login",
  },
};

---

## 8. Alterar WhatsApp Comercial

Arquivo:

    config/site.ts

Localize:

    whatsapp: {
  commercial: "5548996371319",
}

Troque apenas o número.

    Utilize:

        codigo do país + DDD + número

    Sem: + / espaços / parênteses / hífens.

Exemplo:

    commercial: "5548999999999",

O WhatsApp comercial é utilizado no fluxo de contratação e cobertura.

---

## 9. Alterar WhatsApp do Suporte

No mesmo arquivo: 

    config/site.ts 

Localize: 

    support: "5548996371319",

Esse número é utilizado pelo modal de suporte técnico.

---

## 10. Central do assinante

Arquivo:

    config/site.ts

Localize:

links: {
  subscriberCenter:
    "https://ixc.litoralinternet.com.br/central_assinante_web/login",
}

Troque somente a URL caso o endereço da Central do Assinante seja alterado.

---

11. Informações do Hero

Arquivo:

    config/site.ts

Alguns textos institucionais do Hero também ficam centralizados.

Exemplo:

    hero: {
     customers: "+5.000 clientes conectados",
     cityLabel: "em Imbituba",
     connectionLabel: "CONEXÃO LITORAL",
     maxSpeed: "Até 1 GIGA",
    connectionDescription:
        "Fibra óptica de verdade para conectar todos os momentos.",
    }

Esses textos podem ser alterados sem modificar o componente Hero.tsx.

---

## 12. Título das Promoções no Mobile

Arquivo:

    config/site.ts

Exemplo:

    promotions: {
        eyebrow: "PROMOÇÕES LITORAL",
        title: "Confira nossas promoções",
        description:
        "Ofertas especiais para você aproveitar ainda mais sua conexão.",
    }

Essas informações aparecem na área de promoções em dispositivos menores.

---

## 13. Ícones

Os principais ícones dos serviços ficam em:

    public/icons/

Ao adicionar um novo ícone:

    copie a imagem para public/icons/
    use exatamente o mesmo nome no arquivo de dados

Exemplo:

    public/icons/disney+ads.png

Código:

    icon: "disney+ads.png",

---

## 14. Não Alterar Diretamente

Evite modificar:

    .next/
    node_modules/
    next-env.d.ts

Esses arquivos e pastas são gerados automaticamente.

Também evite modificar componentes apenas para trocar:

    preços /nomes / promoções / imagens / WhatsApp / links

Essas informações devem ser alteradas preferencialmente dentro de:

data/
config/
public/

---

## 15. Depois de Fazer Alterações

Durante o desenvolvimento:

    npm run dev

Antes de publicar:

    npm run build

O build deve finalizar sem erros.

---

16. Estrutura Recomendada para Manutenção

data/
├── plans.ts
├── streaming.ts
├── phonePlans.ts
├── addons.ts
└── promotions.ts

config/
└── site.ts

public/
├── hero/
├── icons/
├── images/
└── logo/

Regra geral:

    data/ para informações comerciais

    config/ para configurações globais

    public/ para imagens e arquivos visuais

    components/ para interface e comportamento do site.

    ---

## 17. Regra Mais Importante

Ao atualizar o conteúdo:

    altere os valores, não a estrutura.

Por exemplo, é seguro alterar:

    price: 119.9,

        para:

    price: 129.9,

Mas evite transformar:

    price:

        em:

    valor:

porque os componentes esperam a propriedade com o nome original.


