export const business = {
  name: 'Império das Telas',
  legalName: 'Império das Telas Assistência Técnica',
  addressStreet: 'R. Antônio de Couros, 461',
  neighborhood: 'Freguesia do Ó',
  city: 'São Paulo',
  state: 'SP',
  zip: '02726-000',
  phoneDisplay: '(11) 98829-3537',
  phoneE164: '5511988293537',
  whatsappBase: 'https://wa.me/5511988293537',
  instagram: 'https://www.instagram.com/imperiodastelas_/',
  hours: 'Segunda a Sexta 9:00–19:00 · Sábado 9:00–15:00 (fechado domingo)',
  mapsEmbedSrc:
    'https://www.google.com/maps?q=R.+Ant%C3%B4nio+de+Couros,+461+-+Freguesia+do+%C3%93,+S%C3%A3o+Paulo+-+SP,+02726-000&output=embed',
  mapsLinkSrc:
    'https://www.google.com/maps/search/?api=1&query=R.+Ant%C3%B4nio+de+Couros%2C+461+-+Freguesia+do+%C3%93%2C+S%C3%A3o+Paulo+-+SP%2C+02726-000',
  geo: {
    latitude: -23.4936,
    longitude: -46.6836,
  },
};

export function whatsappLink(message: string): string {
  return `${business.whatsappBase}?text=${encodeURIComponent(message)}`;
}

export type ServiceKey =
  | 'troca-de-tela'
  | 'troca-de-bateria'
  | 'troca-de-conector-de-carga'
  | 'troca-de-camera'
  | 'reparo-em-placa';

export interface ServiceItem {
  slug: ServiceKey;
  title: string;
  shortTitle: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  signsLabel: string;
  signs: string[];
  whatsappMessage: string;
  icon: string;
}

export const services: ServiceItem[] = [
  {
    slug: 'troca-de-tela',
    title: 'Troca de tela',
    shortTitle: 'Tela',
    description: 'Troca de vidro ou conjunto completo, com peças de qualidade.',
    metaTitle: 'Troca de Tela de Celular na Freguesia do Ó | Império das Telas',
    metaDescription:
      'Trocamos a tela do seu celular no mesmo dia, com peças de qualidade e garantia. iPhone, Samsung, Motorola, Xiaomi e mais. Orçamento grátis pelo WhatsApp.',
    h1: 'Troca de tela de celular com garantia na Freguesia do Ó',
    intro:
      'Tela trincada, com manchas, listras ou sem toque? Na Império das Telas fazemos a troca com peças de qualidade e garantia, na maioria dos casos no mesmo dia. Fazemos troca só do vidro ou do conjunto completo, dependendo do modelo e do dano — e você recebe o orçamento exato antes de aprovar qualquer coisa.',
    signsLabel: 'Sinais de que você precisa trocar a tela',
    signs: [
      'Vidro trincado',
      'Tela apagada ou piscando',
      'Manchas ou roxo na imagem',
      'Toque que não responde',
      'Linhas coloridas na tela',
    ],
    whatsappMessage: 'Olá! Vim pelo site e gostaria de um orçamento para troca de tela.',
    icon: 'screen',
  },
  {
    slug: 'troca-de-bateria',
    title: 'Troca de bateria',
    shortTitle: 'Bateria',
    description: 'Recupere a autonomia do seu aparelho com peça de qualidade.',
    metaTitle: 'Troca de Bateria de Celular na Freguesia do Ó | Império das Telas',
    metaDescription:
      'Bateria viciada ou descarregando rápido? Trocamos a bateria do seu celular com peça de qualidade e garantia. Orçamento grátis pelo WhatsApp.',
    h1: 'Troca de bateria de celular na Freguesia do Ó',
    intro:
      'Se o celular descarrega rápido, desliga sozinho com carga ainda disponível ou está estufado, é hora de trocar a bateria. Usamos peças de qualidade e devolvemos a autonomia do seu aparelho com garantia — geralmente no mesmo dia.',
    signsLabel: 'Sinais de que você precisa trocar a bateria',
    signs: [
      'Dura muito menos que antes',
      'Desliga com 20–30% de carga',
      'Esquenta ao carregar',
      'Traseira estufada',
    ],
    whatsappMessage: 'Olá! Vim pelo site e gostaria de um orçamento para troca de bateria.',
    icon: 'battery',
  },
  {
    slug: 'troca-de-conector-de-carga',
    title: 'Conector de carga',
    shortTitle: 'Conector de carga',
    description: 'Diagnóstico e troca do conector com garantia.',
    metaTitle: 'Conserto de Conector de Carga na Freguesia do Ó | Império das Telas',
    metaDescription:
      'Celular não carrega ou o cabo fica solto? Trocamos o conector de carga com garantia. Diagnóstico e orçamento grátis pelo WhatsApp.',
    h1: 'Troca de conector de carga na Freguesia do Ó',
    intro:
      'Quando o celular só carrega em certa posição, o cabo fica frouxo ou não carrega de jeito nenhum, muitas vezes o problema é o conector de carga. Fazemos a avaliação e a troca com peça de qualidade e garantia.',
    signsLabel: 'Sinais de que você precisa trocar o conector',
    signs: [
      'Só carrega mexendo no cabo',
      'Não reconhece o carregador',
      'Carrega muito devagar',
      'Entrada suja ou danificada',
    ],
    whatsappMessage: 'Olá! Vim pelo site e gostaria de um orçamento para troca de conector de carga.',
    icon: 'charging',
  },
  {
    slug: 'troca-de-camera',
    title: 'Troca de câmera',
    shortTitle: 'Câmera',
    description: 'Câmera frontal ou traseira, com peça de qualidade.',
    metaTitle: 'Troca de Câmera de Celular na Freguesia do Ó | Império das Telas',
    metaDescription:
      'Câmera embaçada, trincada ou que não abre? Trocamos a câmera do seu celular com garantia. Orçamento grátis pelo WhatsApp.',
    h1: 'Troca de câmera de celular na Freguesia do Ó',
    intro:
      'Foto embaçada, câmera que não abre, mancha na imagem ou lente quebrada? Trocamos a câmera frontal ou traseira do seu aparelho com peça de qualidade e garantia.',
    signsLabel: 'Sinais de que você precisa trocar a câmera',
    signs: [
      'Imagem embaçada ou com manchas',
      'App da câmera trava',
      'Foco não funciona',
      'Lente trincada',
    ],
    whatsappMessage: 'Olá! Vim pelo site e gostaria de um orçamento para troca de câmera.',
    icon: 'camera',
  },
  {
    slug: 'reparo-em-placa',
    title: 'Reparo em placa',
    shortTitle: 'Placa',
    description: 'Diagnóstico técnico para defeitos complexos.',
    metaTitle: 'Reparo em Placa de Celular na Freguesia do Ó | Império das Telas',
    metaDescription:
      'Celular que não liga, molhou ou tem defeito complexo? Fazemos reparo em placa com diagnóstico técnico. Fale conosco pelo WhatsApp.',
    h1: 'Reparo em placa de celular na Freguesia do Ó',
    intro:
      'Aparelho que não liga, não carrega, esquenta demais ou molhou? Esses casos pedem análise a nível de placa. Fazemos o diagnóstico técnico para identificar a causa real e só então informamos prazo e orçamento — sem compromisso.',
    signsLabel: 'Sinais de que seu aparelho precisa de reparo em placa',
    signs: [
      'Não liga nem carregando',
      'Reinicia sozinho',
      'Esquenta sem uso',
      'Sofreu queda ou contato com água',
    ],
    whatsappMessage: 'Olá! Vim pelo site e gostaria de um orçamento para reparo em placa.',
    icon: 'chip',
  },
];

export type BrandKey =
  | 'assistencia-tecnica-iphone'
  | 'assistencia-tecnica-samsung'
  | 'assistencia-tecnica-motorola'
  | 'assistencia-tecnica-xiaomi';

export interface BrandItem {
  slug: BrandKey;
  name: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  whatsappMessage: string;
  logo: string;
}

export const brands: BrandItem[] = [
  {
    slug: 'assistencia-tecnica-iphone',
    name: 'iPhone',
    metaTitle: 'Assistência Técnica de iPhone na Freguesia do Ó | Império das Telas',
    metaDescription:
      'Conserto de iPhone na Freguesia do Ó: troca de tela, bateria, conector e mais, com peças de qualidade e garantia. Orçamento grátis pelo WhatsApp.',
    h1: 'Assistência técnica de iPhone na Freguesia do Ó',
    intro:
      'Consertamos iPhone dos modelos mais antigos aos mais recentes: troca de tela, bateria, conector de carga, câmera e reparos em placa. Peças de qualidade, diagnóstico honesto e garantia no serviço.',
    whatsappMessage: 'Olá! Vim pelo site e gostaria de um orçamento para meu iPhone.',
    logo: '/img/marcas/iphone.svg',
  },
  {
    slug: 'assistencia-tecnica-samsung',
    name: 'Samsung',
    metaTitle: 'Assistência Técnica Samsung na Freguesia do Ó | Império das Telas',
    metaDescription:
      'Conserto de Samsung Galaxy na Freguesia do Ó: tela, bateria, conector e mais, com garantia. Orçamento grátis pelo WhatsApp.',
    h1: 'Assistência técnica Samsung na Freguesia do Ó',
    intro:
      'Atendemos toda a linha Galaxy — da série A aos top de linha S e Note/Ultra. Troca de tela (incluindo AMOLED), bateria, conector, câmera e reparos mais complexos, com peças de qualidade e garantia.',
    whatsappMessage: 'Olá! Vim pelo site e gostaria de um orçamento para meu Samsung.',
    logo: '/img/marcas/samsung.svg',
  },
  {
    slug: 'assistencia-tecnica-motorola',
    name: 'Motorola',
    metaTitle: 'Assistência Técnica Motorola na Freguesia do Ó | Império das Telas',
    metaDescription:
      'Conserto de Motorola na Freguesia do Ó: troca de tela, bateria, conector e mais, com garantia. Orçamento grátis pelo WhatsApp.',
    h1: 'Assistência técnica Motorola na Freguesia do Ó',
    intro:
      'Consertamos Motorola das linhas Moto G, Moto E, Edge e outras. Troca de tela, bateria, conector de carga, câmera e reparos em placa, com peças de qualidade e garantia no serviço.',
    whatsappMessage: 'Olá! Vim pelo site e gostaria de um orçamento para meu Motorola.',
    logo: '/img/marcas/motorola.svg',
  },
  {
    slug: 'assistencia-tecnica-xiaomi',
    name: 'Xiaomi',
    metaTitle: 'Assistência Técnica Xiaomi na Freguesia do Ó | Império das Telas',
    metaDescription:
      'Conserto de Xiaomi, Redmi e POCO na Freguesia do Ó, com peças de qualidade e garantia. Orçamento grátis pelo WhatsApp.',
    h1: 'Assistência técnica Xiaomi na Freguesia do Ó',
    intro:
      'Atendemos Xiaomi, Redmi e POCO em troca de tela, bateria, conector, câmera e reparos em placa. Diagnóstico honesto, peças de qualidade e garantia.',
    whatsappMessage: 'Olá! Vim pelo site e gostaria de um orçamento para meu Xiaomi/Redmi/POCO.',
    logo: '/img/marcas/xiaomi.svg',
  },
];

export type NeighborhoodKey =
  | 'freguesia-do-o'
  | 'vila-palmeiras'
  | 'limao'
  | 'casa-verde'
  | 'brasilandia'
  | 'cachoeirinha';

export interface NeighborhoodItem {
  slug: NeighborhoodKey;
  name: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  whatsappMessage: string;
}

export const neighborhoods: NeighborhoodItem[] = [
  {
    slug: 'freguesia-do-o',
    name: 'Freguesia do Ó',
    metaTitle: 'Assistência Técnica de Celular na Freguesia do Ó | Império das Telas',
    metaDescription:
      'Assistência técnica de celular na Freguesia do Ó: troca de tela, bateria e mais, com garantia. Orçamento rápido pelo WhatsApp.',
    h1: 'Assistência técnica de celular na Freguesia do Ó',
    intro:
      'A Império das Telas fica no coração da Freguesia do Ó, na R. Antônio de Couros, 461. Atendemos todo tipo de reparo — tela, bateria, conector, câmera e placa — com peças de qualidade e garantia. Chame no WhatsApp e receba seu orçamento na hora.',
    whatsappMessage: 'Olá! Sou da Freguesia do Ó e gostaria de um orçamento.',
  },
  {
    slug: 'vila-palmeiras',
    name: 'Vila Palmeiras',
    metaTitle: 'Assistência Técnica de Celular na Vila Palmeiras | Império das Telas',
    metaDescription:
      'Conserto de celular perto da Vila Palmeiras: tela, bateria e mais, com garantia. A poucos minutos, na Freguesia do Ó. Orçamento pelo WhatsApp.',
    h1: 'Assistência técnica de celular perto da Vila Palmeiras',
    intro:
      'Quem é da Vila Palmeiras chega rápido na nossa loja na Freguesia do Ó. Fazemos troca de tela, bateria, conector, câmera e reparos em placa, com peças de qualidade e garantia. Fale conosco pelo WhatsApp.',
    whatsappMessage: 'Olá! Sou da Vila Palmeiras e gostaria de um orçamento.',
  },
  {
    slug: 'limao',
    name: 'Limão',
    metaTitle: 'Assistência Técnica de Celular no Limão | Império das Telas',
    metaDescription:
      'Conserto de celular perto do Limão: tela, bateria e mais, com garantia. Fácil acesso pela Freguesia do Ó. Orçamento grátis pelo WhatsApp.',
    h1: 'Assistência técnica de celular perto do Limão',
    intro:
      'Atendemos moradores do Limão na nossa loja na Freguesia do Ó, com fácil acesso. Troca de tela, bateria, conector, câmera e reparo em placa, sempre com peças de qualidade e garantia.',
    whatsappMessage: 'Olá! Sou do Limão e gostaria de um orçamento.',
  },
  {
    slug: 'casa-verde',
    name: 'Casa Verde',
    metaTitle: 'Assistência Técnica de Celular na Casa Verde | Império das Telas',
    metaDescription:
      'Conserto de celular perto da Casa Verde: tela, bateria e mais, com garantia. A poucos minutos, na Freguesia do Ó. Orçamento pelo WhatsApp.',
    h1: 'Assistência técnica de celular perto da Casa Verde',
    intro:
      'Se você é da Casa Verde, a Império das Telas está bem pertinho, na Freguesia do Ó. Cuidamos do seu aparelho com diagnóstico honesto, peças de qualidade e garantia. Chame no WhatsApp.',
    whatsappMessage: 'Olá! Sou da Casa Verde e gostaria de um orçamento.',
  },
  {
    slug: 'brasilandia',
    name: 'Brasilândia',
    metaTitle: 'Assistência Técnica de Celular na Brasilândia | Império das Telas',
    metaDescription:
      'Conserto de celular perto da Brasilândia: tela, bateria e mais, com garantia. Fácil acesso pela Freguesia do Ó. Orçamento pelo WhatsApp.',
    h1: 'Assistência técnica de celular perto da Brasilândia',
    intro:
      'Atendemos a Brasilândia e região na nossa loja na Freguesia do Ó. Troca de tela, bateria, conector, câmera e reparos em placa, com peças de qualidade e garantia no serviço.',
    whatsappMessage: 'Olá! Sou da Brasilândia e gostaria de um orçamento.',
  },
  {
    slug: 'cachoeirinha',
    name: 'Cachoeirinha',
    metaTitle: 'Assistência Técnica de Celular na Cachoeirinha | Império das Telas',
    metaDescription:
      'Conserto de celular perto da Cachoeirinha: tela, bateria e mais, com garantia. A poucos minutos, na Freguesia do Ó. Orçamento pelo WhatsApp.',
    h1: 'Assistência técnica de celular perto da Cachoeirinha',
    intro:
      'Moradores da Cachoeirinha contam com a Império das Telas na Freguesia do Ó para consertar o celular com segurança. Peças de qualidade, orçamento sem compromisso e garantia. Fale pelo WhatsApp.',
    whatsappMessage: 'Olá! Sou da Cachoeirinha e gostaria de um orçamento.',
  },
];

export const nav = [
  { label: 'Serviços', href: '/#servicos' },
  { label: 'Antes e Depois', href: '/#antes-e-depois' },
  { label: 'Marcas', href: '/#marcas' },
  { label: 'Como Funciona', href: '/#como-funciona' },
  { label: 'Depoimentos', href: '/#depoimentos' },
  { label: 'Localização', href: '/#localizacao' },
  { label: 'FAQ', href: '/#faq' },
];
