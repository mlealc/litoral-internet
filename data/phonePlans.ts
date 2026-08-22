export type PhonePlan = {
  id: string;
  name: string;
  price: number;
  minutes: number;
  unlimitedDDD48?: boolean;
  featured?: boolean;
  badge?: string;
};

export const phonePlans: PhonePlan[] = [
  {
    id: "economico",
    name: "Econômico",
    price: 15.9,
    minutes: 100,
  },
  {
    id: "smart",
    name: "Smart",
    price: 29.9,
    minutes: 100,
    unlimitedDDD48: true,
    featured: true,
    badge: "MAIS VANTAJOSO",
  },
  {
    id: "prime",
    name: "Prime",
    price: 49.9,
    minutes: 200,
    unlimitedDDD48: true,
    badge: "MAIS COMPLETO",
  },
];