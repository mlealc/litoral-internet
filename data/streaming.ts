export type StreamingApp = {
  name: string;
  icon: string;
  description: string;
  detail?: string;
};

export type StreamingPlan = {
  id: string;
  name: string;
  price: number;
  highlighted?: boolean;
  services: string[];
  apps: StreamingApp[];
};

export const streamingPlans: StreamingPlan[] = [
  {
    id: "standard",

    name: "Standard Litoral",

    price: 7.99,

    services: [
      "Serviços selecionados",
      "Conteúdo para toda a família",
    ],

    apps: [
      {
        name: "Sky+",
        icon: "sky+.png",

        detail: "+ de 100 canais de TV aberta",

        description:
          "Tenha acesso a canais ao vivo e conteúdos para acompanhar entretenimento, notícias, esportes e muito mais.",
      },

      {
        name: "Looke",
        icon: "looke.png",

        description:
          "Plataforma de filmes e séries com opções de entretenimento para diferentes estilos e momentos.",
      },

      {
        name: "Kindle Pass",
        icon: "kindlepass.png",

        description:
          "Conteúdo digital para quem gosta de leitura, histórias e conhecimento no dia a dia.",
      },

      {
        name: "PlayKids+",
        icon: "playkids+.png",

        description:
          "Conteúdos educativos e de entretenimento desenvolvidos especialmente para crianças.",
      },

      {
        name: "ExitLag",
        icon: "exitlag.png",

        description:
          "Tecnologia para otimizar a rota da conexão em jogos online e ajudar a reduzir instabilidades durante as partidas.",
      },

      {
        name: "Kaspersky",
        icon: "kapersky1.png",

        detail: "1 licença",

        description:
          "Proteção digital para ajudar a manter dispositivos, dados pessoais e navegação mais seguros.",
      },

      {
        name: "Hub Vantagens",
        icon: "hubvantagens.png",

        description:
          "Clube de benefícios com ofertas, descontos e vantagens em produtos e serviços parceiros.",
      },

      {
        name: "Ubook Plus",
        icon: "ubookplus.png",

        description:
          "Audiobooks, podcasts e conteúdos em áudio para ouvir quando e onde quiser.",
      },

      {
        name: "Social Comics",
        icon: "socialcomics.png",

        description:
          "Biblioteca digital de quadrinhos para acompanhar histórias e descobrir novos títulos.",
      },

      {
        name: "Estuda+",
        icon: "estuda+.png",

        description:
          "Conteúdos e ferramentas de apoio para complementar os estudos e o aprendizado.",
      },

      {
        name: "Pequenos Leitores",
        icon: "pequenosleitores.png",

        description:
          "Conteúdo de leitura pensado para incentivar o interesse por livros desde a infância.",
      },

      {
        name: "Playlist",
        icon: "playlist.png",

        description:
          "Conteúdo de música e entretenimento para acompanhar diferentes momentos do seu dia.",
      },

      {
        name: "+Q Nutri",
        icon: "+qnutri.png",

        description:
          "Conteúdos relacionados a alimentação, bem-estar e hábitos para uma rotina mais equilibrada.",
      },

      {
        name: "Revistaria",
        icon: "revistaria.png",

        description:
          "Revistas digitais de diferentes categorias disponíveis para leitura online.",
      },

      {
        name: "Fluid",
        icon: "fluid.png",

        description:
          "Conteúdos digitais voltados para informação, entretenimento e estilo de vida.",
      },
    ],
  },

  {
    id: "advanced",

    name: "Advanced Litoral",

    price: 14.99,

    services: [
      "Mais opções de entretenimento",
      "Conteúdo sob demanda",
    ],

    apps: [
      {
        name: "Sky+",
        icon: "sky+.png",

        detail: "+ de 100 canais de TV aberta",

        description:
          "Tenha acesso a canais ao vivo e conteúdos para acompanhar entretenimento, notícias, esportes e muito mais.",
      },

      {
        name: "Kindle Pass",
        icon: "kindlepass.png",

        description:
          "Conteúdo digital para quem gosta de leitura, histórias e conhecimento no dia a dia.",
      },

      {
        name: "Kaspersky",
        icon: "kapersky3.png",

        detail: "3 licenças",

        description:
          "Proteção digital para ajudar a manter seus dispositivos, dados pessoais e navegação mais seguros.",
      },

      {
        name: "Deezer",
        icon: "deezer.png",

        description:
          "Música, playlists, artistas e podcasts para ouvir quando quiser.",
      },

      {
        name: "HotGo",
        icon: "hotgo.png",

        description:
          "Plataforma de entretenimento adulto com conteúdos disponíveis sob demanda.",
      },

      {
        name: "Curta!On",
        icon: "curta!on.png",

        description:
          "Filmes, documentários, séries e produções culturais para assistir sob demanda.",
      },

      {
        name: "O Jornalista",
        icon: "ojornalista.png",

        description:
          "Conteúdo informativo e jornalístico para acompanhar notícias e assuntos relevantes.",
      },

      {
        name: "Docway",
        icon: "docway.png",

        description:
          "Serviço digital voltado ao acesso a orientações e atendimentos relacionados à saúde.",
      },
    ],
  },

  {
    id: "top",

    name: "Top Litoral",

    price: 21.99,

    services: [
      "Mais variedade de plataformas",
      "Experiência completa de streaming",
    ],

    apps: [
      {
        name: "Sky+ + Amazon Prime",
        icon: "sky+amazonprime.png",

        description:
          "Uma combinação de entretenimento com canais e conteúdos disponíveis para assistir quando quiser.",
      },

      {
        name: "Apple TV",
        icon: "appletv.png",

        detail: "Com anúncios",

        description:
          "Filmes, séries e produções de entretenimento disponíveis para assistir sob demanda.",
      },

      {
        name: "Disney+",
        icon: "disney+ads.png",

        detail: "Com anúncios",

        description:
          "Filmes, séries e produções de grandes franquias para toda a família.",
      },

      {
        name: "Globoplay",
        icon: "globoplay.png",

        description:
          "Novelas, séries, programas, jornalismo e produções brasileiras disponíveis em streaming.",
      },

      {
        name: "HBO Max",
        icon: "hbomaxads.png",

        detail: "Com anúncios",

        description:
          "Filmes, séries, produções originais e grandes títulos de entretenimento.",
      },

      {
        name: "C indie",
        icon: "C indie.png",

        description:
          "Catálogo de filmes e conteúdos selecionados para quem gosta de descobrir novas produções.",
      },

      {
        name: "Leitura 360",
        icon: "leitura360.png",

        description:
          "Conteúdo digital voltado para leitura, informação e conhecimento.",
      },
    ],
  },

  {
    id: "premium",

    name: "Premium Litoral",

    price: 33.99,

    highlighted: true,

    services: [
      "Pacote mais completo",
      "Mais entretenimento em um só lugar",
    ],

    apps: [
      {
        name: "HBO Max",
        icon: "hbomax.png",

        description:
          "Filmes, séries, produções originais e grandes títulos para aproveitar quando quiser.",
      },

      {
        name: "Disney+",
        icon: "disney+.png",

        description:
          "Filmes, séries e grandes franquias de entretenimento para toda a família.",
      },

      {
        name: "Globoplay",
        icon: "globoplay.png",

        description:
          "Novelas, séries, programas, jornalismo e produções brasileiras em uma única plataforma.",
      },

      {
        name: "SmartContent",
        icon: "smartcontent.png",

        description:
          "Serviço digital com recursos e facilidades para complementar sua experiência conectada.",
      },

      {
        name: "Kaspersky",
        icon: "kapersky5.png",

        detail: "5 licenças",

        description:
          "Proteção digital para ajudar a manter seus dispositivos, dados pessoais e navegação mais seguros.",
      },

      {
        name: "Queima Diária",
        icon: "queimadiaria.png",

        description:
          "Treinos, aulas e conteúdos voltados para atividade física, saúde e bem-estar.",
      },

      {
        name: "Zen",
        icon: "zen.png",

        description:
          "Conteúdos voltados para bem-estar, relaxamento e equilíbrio para sua rotina.",
      },
    ],
  },
];