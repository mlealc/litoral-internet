/*tipos*/

export type ComboApp = {
  id: string;
  name: string;
  icon: string;
  description: string;
};

export type CartOffer = {
  id: string;
  type: "promotion";
  name: string;
  price: number;
  subtitle: string;
  details: string[];
};

export type HeroSlide = {
  id: string;

  eyebrow: string;

  title: string;

  highlight: string;

  description: string;

  primaryLabel: string;

  primaryHref: string;

  secondaryLabel?: string;

  secondaryHref?: string;

  image?: string;

  imageAlt?: string;

  promoLabel?: string;

  price?: number;

  pricePrefix?: string;

  features?: string[];

  footnote?: string;

  institutional?: boolean;

  cartOffer?: CartOffer;
};


/*apps disponíveis nos combos*/

export const comboApps: ComboApp[] = [
  {
    id: "disney-plus",

    name: "Disney+",

    icon: "disney+ads.png",

    description:
      "Filmes, séries e conteúdos Disney, Pixar, Marvel, Star Wars e muito mais.",
  },

  {
    id: "hbo-max",

    name: "HBO Max",

    icon: "hbomaxads.png",

    description:
      "Séries, filmes, produções HBO e grandes sucessos para assistir quando quiser.",
  },

  {
    id: "globoplay",

    name: "Globoplay",

    icon: "globoplay.png",

    description:
      "Novelas, séries, programas, filmes e conteúdos nacionais para toda a família.",
  },
];


/*slide do hero*/

export const heroSlides: HeroSlide[] = [
  /*institucional*/

  {
    id: "imbituba",

    eyebrow:
      "FIBRA ÓPTICA DE VERDADE",

    title:
      "Litoral Internet,",

    highlight:
      "Imbituba se conecta aqui!",

    description:
      "Internet rápida, estável e confiável para conectar você ao que realmente importa.",

    primaryLabel:
      "Ver planos",

    primaryHref:
      "#planos",

    secondaryLabel:
      "Consultar cobertura",

    secondaryHref:
      "#cobertura",

    institutional:
      true,
  },


  /*sorteio dia dos pais*/

  {
    id:
      "dia-dos-pais",

    eyebrow:
      "SORTEIO ESPECIAL",

    promoLabel:
      "MÊS DOS PAIS",

    title:
      "Contrate e",

    highlight:
      "concorra a prêmios.",

    description:
      "Contrate a Litoral Internet e participe do sorteio de um Cortador de Cabelo Mondial Super Groom + voucher da Barbearia Yuri do Corte.",

    primaryLabel:
      "Quero participar",

    primaryHref:
      "#planos",

    secondaryLabel:
      "Consultar cobertura",

    secondaryHref:
      "#cobertura",

    image:
      "/hero/promotions/dia-dos-pais.jpeg",

    imageAlt:
      "Promoção Sorteio Dia dos Pais Litoral Internet",

    features: [
      "Contrate a Litoral Internet",
      "Cortador Mondial Super Groom",
      "Voucher Barbearia Yuri do Corte",
    ],

    footnote:
      "Sorteio em 01/09",
  },


  /*combo 450 mb*/

  {
    id:
      "450-top",

    eyebrow:
      "COMBO LITORAL",

    promoLabel:
      "INTERNET + STREAMING",

    title:
      "450 MEGA",

    highlight:
      "+ 1 APP Top Litoral",

    description:
      "Internet rápida para sua casa e um app do pacote Top Litoral à sua escolha.",

    primaryLabel:
      "Escolher meu app",

    primaryHref:
      "#cobertura",

    secondaryLabel:
      "Ver streamings",

    secondaryHref:
      "#streaming",

    image:
      "/hero/promotions/combo-450-top.jpeg",

    imageAlt:
      "Combo 450 Mega mais Top Litoral",

    price:
      119.9,

    pricePrefix:
      "por",

    features: [
      "450 MEGA",
      "Disney+, HBO Max ou Globoplay",
      "Instalação gratuita",
      "Roteador em comodato",
    ],

    cartOffer: {
      id:
        "combo-450-top",

      type:
        "promotion",

      name:
        "450 MEGA + Top Litoral",

      price:
        119.9,

      subtitle:
        "Internet + streaming",

      details: [
        "450 MEGA de internet",
        "1 app Top Litoral à sua escolha",
        "Instalação gratuita",
        "Roteador em comodato",
      ],
    },
  },


  /*combo 550 mb*/

  {
    id:
      "550-tv-top",

    eyebrow:
      "COMBO COMPLETO",

    promoLabel:
      "INTERNET + TV + STREAMING",

    title:
      "550 MEGA",

    highlight:
      "+ TV Digital + Top Litoral",

    description:
      "Mais velocidade, TV Digital com mais de 100 canais e um app do pacote Top Litoral à sua escolha.",

    primaryLabel:
      "Escolher meu app",

    primaryHref:
      "#cobertura",

    secondaryLabel:
      "Ver planos",

    secondaryHref:
      "#planos",

    image:
      "/hero/promotions/combo-550-tv-top.jpeg",

    imageAlt:
      "Combo 550 Mega com TV Digital e Top Litoral",

    price:
      129.9,

    pricePrefix:
      "por",

    features: [
      "550 MEGA",
      "TV Digital com +100 canais",
      "Disney+, HBO Max ou Globoplay",
      "Instalação gratuita",
      "Roteador em comodato",
    ],

    cartOffer: {
      id:
        "combo-550-tv-top",

      type:
        "promotion",

      name:
        "550 MEGA + TV Digital + Top Litoral",

      price:
        129.9,

      subtitle:
        "Internet + TV Digital + streaming",

      details: [
        "550 MEGA de internet",
        "TV Digital com mais de 100 canais",
        "1 app Top Litoral à sua escolha",
        "Instalação gratuita",
        "Roteador em comodato",
      ],
    },
  },
];