export type Addon = {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  description: string;
  badge?: string;
};

export const addons: Addon[] = [
  {
    id: "camera",
    name: "Câmera de segurança",
    subtitle: "Equipamento em comodato",
    price: 39.9,
    description:
      "Mais proteção para sua casa com uma solução prática e integrada ao seu plano.",
    badge: "SEGURANÇA",
  },
  {
    id: "mesh",
    name: "Rede Mesh",
    subtitle: "Sinal ampliado",
    price: 30,
    description:
      "Amplie o alcance do Wi-Fi e tenha melhor cobertura nos ambientes da sua casa.",
    badge: "MAIS COBERTURA",
  },
];