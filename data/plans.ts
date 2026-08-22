export type Plan = {
  id: string;
  speed: string;
  unit: "MEGA" | "GIGA";
  price: number;
  featured?: boolean;
  premium?: boolean;
  badge?: string;
  description: string;
  benefits: string[];
};

export const plans: Plan[] = [
  {
    id: "200",
    speed: "200",
    unit: "MEGA",
    price: 89.9,
    description: "Uma conexão essencial para o dia a dia.",
    benefits: [
      "Instalação gratuita",
      "Roteador em comodato",
    ],
  },

  {
    id: "450",
    speed: "450",
    unit: "MEGA",
    price: 99.9,
    featured: true,
    badge: "MAIS ESCOLHIDO",
    description: "Mais velocidade para streaming, trabalho e vários dispositivos.",
    benefits: [
      "Instalação gratuita",
      "Roteador em comodato",
    ],
  },

  {
    id: "550",
    speed: "550",
    unit: "MEGA",
    price: 109.9,
    description: "Mais desempenho e entretenimento para toda a família.",
    benefits: [
      "Instalação gratuita",
      "Roteador em comodato",
      "TV Digital com mais de 100 canais",
    ],
  },

  {
    id: "650",
    speed: "650",
    unit: "MEGA",
    price: 119.9,
    description: "Velocidade para casas com muitos dispositivos conectados.",
    benefits: [
      "Instalação gratuita",
      "Roteador em comodato",
      "TV Digital com mais de 100 canais",
    ],
  },

  {
    id: "800",
    speed: "800",
    unit: "MEGA",
    price: 149.9,
    description: "Alta performance para quem exige muito da conexão.",
    benefits: [
      "Instalação gratuita",
      "Roteador em comodato",
      "TV Digital com mais de 100 canais",
    ],
  },

  {
    id: "1000",
    speed: "1",
    unit: "GIGA",
    price: 189.9,
    premium: true,
    badge: "MÁXIMA VELOCIDADE",
    description: "A experiência mais rápida da Litoral Internet.",
    benefits: [
      "Instalação gratuita",
      "Roteador em comodato",
      "TV Digital com mais de 100 canais",
    ],
  },
];