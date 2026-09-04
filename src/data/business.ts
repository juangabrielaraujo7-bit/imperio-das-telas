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
  reviewsLink: 'https://www.google.com/search?q=Imp%C3%A9rio+das+Telas+Freguesia+do+%C3%93+avalia%C3%A7%C3%B5es',
};

export interface Testimonial {
  name: string;
  reviewCount: string;
  timeAgo: string;
  rating: number;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Adriana Silva Freitas',
    reviewCount: '3 avaliações',
    timeAgo: 'um mês atrás',
    rating: 5,
    text: 'Recomendo de olhos fechados, foi uma indicação de uma amiga e amei, troquei o meu celular por um novo e o atendimento é nota 1000. Pessoal super atenciosos, profissionais e são sempre um suporte. Estão de parabéns pelo atendimento.',
  },
  {
    name: 'Tata Moreira',
    reviewCount: '4 avaliações',
    timeAgo: 'um mês atrás',
    rating: 5,
    text: 'Atendimento impecável! Cada detalhe foi surreal. O carinho, os brindes personalizados, a atenção, a agilidade. Comprem sem medo algum. Eu amei e indico de olhos fechados!',
  },
  {
    name: 'Samara Oliveira',
    reviewCount: '3 avaliações',
    timeAgo: '3 meses atrás',
    rating: 5,
    text: 'O atendimento é muito bom e o serviço é excelente!! Entreguei um tablet inutilizável e recebi outro novinho em apenas 1 dia de manutenção 💗✨',
  },
];

export function whatsappLink(message: string): string {
  return `${business.whatsappBase}?text=${encodeURIComponent(message)}`;
}

export type ServiceKey =
  | 'troca-de-tela'
  | 'troca-de-bateria'
  | 'troca-de-conector-de-carga'
  | 'troca-de-tampa-traseira'
  | 'reparo-em-placa';

export interface FaqItem {
  q: string;
  a: string;
}

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
  faqs: FaqItem[];
  image: string;
  imageAlt: string;
  imageType: 'cutout' | 'photo';
}

// Opções do seletor "Qual a marca do seu aparelho?" nas páginas de serviço.
export const brandOptions = ['iPhone', 'Samsung', 'Motorola', 'Xiaomi / Redmi / POCO', 'Outra marca'];

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
      'Tela trincada, com manchas, listras ou sem toque? Na Império das Telas fazemos a troca com peças de qualidade e garantia, na maioria dos casos no mesmo dia. Fazemos troca só do vidro ou do conjunto completo, dependendo do modelo e do dano, e você recebe o orçamento exato antes de aprovar qualquer coisa.',
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
    faqs: [
      { q: 'Quanto tempo leva a troca da tela?', a: 'Na maioria dos modelos, o serviço é feito no mesmo dia. Assim que você chega ou envia o aparelho, avaliamos e já te passamos o prazo exato.' },
      { q: 'A tela nova tem garantia?', a: 'Sim, toda peça instalada tem garantia. Qualquer problema relacionado ao serviço dentro do prazo é resolvido sem custo.' },
      { q: 'Trocam tela de qualquer marca e modelo?', a: 'Atendemos iPhone, Samsung, Motorola, Xiaomi e outras marcas. Se tiver dúvida sobre o seu modelo, é só chamar no WhatsApp.' },
      { q: 'Vou perder meus dados trocando a tela?', a: 'Não. A troca de tela não mexe na memória do aparelho, mas por segurança sempre recomendamos ter um backup atualizado.' },
      { q: 'Quanto custa?', a: 'O valor varia por modelo e tipo de dano (só vidro ou conjunto completo). Manda o modelo no WhatsApp e te passamos o orçamento na hora.' },
    ],
    image: '/img/servicos/troca-de-tela.png',
    imageAlt: 'Tela de celular trincada antes da troca',
    imageType: 'cutout',
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
      'Se o celular descarrega rápido, desliga sozinho com carga ainda disponível ou está estufado, é hora de trocar a bateria. Usamos peças de qualidade e devolvemos a autonomia do seu aparelho com garantia, geralmente no mesmo dia.',
    signsLabel: 'Sinais de que você precisa trocar a bateria',
    signs: [
      'Dura muito menos que antes',
      'Desliga com 20–30% de carga',
      'Esquenta ao carregar',
      'Traseira estufada',
    ],
    whatsappMessage: 'Olá! Vim pelo site e gostaria de um orçamento para troca de bateria.',
    icon: 'battery',
    faqs: [
      { q: 'Quanto tempo leva a troca de bateria?', a: 'Geralmente o serviço é feito no mesmo dia, muitas vezes na hora, enquanto você aguarda.' },
      { q: 'Bateria estufada é perigosa?', a: 'Sim, pode danificar a tela e outros componentes. Se notar a traseira ou a tela estufando, recomendamos trazer o quanto antes.' },
      { q: 'A bateria nova tem garantia?', a: 'Sim, toda bateria instalada tem garantia contra defeitos.' },
      { q: 'Trocam bateria de qualquer marca?', a: 'Sim, atendemos iPhone, Samsung, Motorola, Xiaomi e outras marcas.' },
      { q: 'Quanto custa trocar a bateria?', a: 'O valor varia por modelo. Manda a marca e o modelo no WhatsApp e já te passamos o orçamento.' },
    ],
    image: '/img/servicos/troca-de-bateria.jpg',
    imageAlt: 'Bateria de celular sendo trocada na bancada da Império das Telas',
    imageType: 'photo',
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
    faqs: [
      { q: 'Quanto tempo leva o reparo?', a: 'Na maioria dos casos, o mesmo dia. Fazemos o diagnóstico na hora para confirmar se é o conector mesmo.' },
      { q: 'O conector novo tem garantia?', a: 'Sim, a peça e o serviço têm garantia.' },
      { q: 'Isso resolve um celular que não carrega de jeito nenhum?', a: 'Na maior parte dos casos sim. Se não for o conector, fazemos o diagnóstico e te avisamos antes de qualquer custo.' },
      { q: 'Quanto custa a troca do conector?', a: 'O valor varia por modelo. Manda a marca e o modelo no WhatsApp para receber o orçamento.' },
    ],
    image: '/img/servicos/conector-de-carga.png',
    imageAlt: 'Conector de carga sendo conectado ao celular',
    imageType: 'cutout',
  },
  {
    slug: 'troca-de-tampa-traseira',
    title: 'Troca de tampa traseira',
    shortTitle: 'Tampa traseira',
    description: 'Troca da tampa traseira trincada ou quebrada, com peça de qualidade.',
    metaTitle: 'Troca de Tampa Traseira de Celular na Freguesia do Ó | Império das Telas',
    metaDescription:
      'Tampa traseira trincada ou quebrada? Trocamos com peça de qualidade e garantia, na maioria dos casos no mesmo dia. Orçamento grátis pelo WhatsApp.',
    h1: 'Troca de tampa traseira de celular na Freguesia do Ó',
    intro:
      'Caiu e trincou ou quebrou a parte de trás do aparelho? Trocamos a tampa traseira com peça de qualidade e garantia, sem mexer no restante do celular.',
    signsLabel: 'Sinais de que você precisa trocar a tampa traseira',
    signs: [
      'Vidro traseiro trincado ou estilhaçado',
      'Peça solta ou destacando da lateral',
      'Corte ou arranhão profundo na tampa',
      'Perda de proteção contra poeira e umidade',
    ],
    whatsappMessage: 'Olá! Vim pelo site e gostaria de um orçamento para troca de tampa traseira.',
    icon: 'backcover',
    faqs: [
      { q: 'Quanto tempo leva a troca da tampa traseira?', a: 'Na maioria dos modelos, o mesmo dia.' },
      { q: 'A tampa nova tem garantia?', a: 'Sim, toda peça instalada tem garantia.' },
      { q: 'Preciso trocar a tampa mesmo se o celular ainda funciona normalmente?', a: 'Não é obrigatório, mas o vidro trincado perde a proteção contra poeira e umidade e pode continuar rachando.' },
      { q: 'Quanto custa?', a: 'Varia por modelo. Manda o modelo no WhatsApp para receber o orçamento.' },
    ],
    image: '/img/servicos/troca-de-tampa-traseira.png',
    imageAlt: 'Tampa traseira de celular trincada ao lado da peça nova',
    imageType: 'cutout',
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
      'Aparelho que não liga, não carrega, esquenta demais ou molhou? Esses casos pedem análise a nível de placa. Fazemos o diagnóstico técnico para identificar a causa real e só então informamos prazo e orçamento, sem compromisso.',
    signsLabel: 'Sinais de que seu aparelho precisa de reparo em placa',
    signs: [
      'Não liga nem carregando',
      'Reinicia sozinho',
      'Esquenta sem uso',
      'Sofreu queda ou contato com água',
    ],
    whatsappMessage: 'Olá! Vim pelo site e gostaria de um orçamento para reparo em placa.',
    icon: 'chip',
    faqs: [
      { q: 'Quanto tempo leva o diagnóstico?', a: 'O diagnóstico costuma ficar pronto em 1 a 2 dias úteis. Casos mais complexos podem levar um pouco mais. Sempre te avisamos o prazo.' },
      { q: 'Todo reparo em placa tem conserto?', a: 'Nem sempre, depende do dano. Por isso fazemos o diagnóstico técnico antes: só falamos em prazo e valor depois de confirmar que dá para reparar.' },
      { q: 'O orçamento tem algum custo?', a: 'Não, o diagnóstico e o orçamento são gratuitos e sem compromisso.' },
      { q: 'Aparelho que caiu na água tem conserto?', a: 'Em muitos casos sim, principalmente se for trazido rápido. Fazemos a avaliação técnica para confirmar.' },
    ],
    image: '/img/servicos/reparo-em-placa.jpg',
    imageAlt: 'Técnico fazendo reparo em placa de celular na bancada',
    imageType: 'photo',
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
  commonRepairsLabel: string;
  commonRepairs: string[];
  whatsappMessage: string;
  logo: string;
  faqs: FaqItem[];
}

// Opções do seletor "Qual o problema do seu aparelho?" nas páginas de marca.
export const problemOptions = [
  'Tela quebrada',
  'Bateria fraca',
  'Conector de carga solto',
  'Câmera com problema',
  'Aparelho não liga',
  'Outro problema',
];

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
    commonRepairsLabel: 'Reparos mais comuns em iPhone',
    commonRepairs: [
      'Troca de tela trincada, com manchas ou sem toque',
      'Troca de bateria que descarrega rápido ou está estufada',
      'Troca de conector de carga que não segura o cabo',
      'Troca de câmera com foto embaçada ou fora de foco',
      'Diagnóstico para iPhone que não liga ou reinicia sozinho',
    ],
    whatsappMessage: 'Olá! Vim pelo site e gostaria de um orçamento para meu iPhone.',
    logo: '/img/marcas/iphone.png',
    faqs: [
      { q: 'Vocês trocam tela de qualquer iPhone?', a: 'Sim, atendemos desde os modelos mais antigos até os mais recentes.' },
      { q: 'Quanto tempo leva o conserto?', a: 'A maioria dos reparos é feita no mesmo dia. Casos mais complexos, como reparo em placa, podem levar mais tempo.' },
      { q: 'O reparo tem garantia?', a: 'Sim, todo serviço e peça utilizada têm garantia.' },
      { q: 'O orçamento tem algum custo?', a: 'Não, o diagnóstico e o orçamento são gratuitos e sem compromisso.' },
      { q: 'Fazem reparo em placa de iPhone?', a: 'Sim, fazemos diagnóstico técnico para identificar a causa e avaliar se há reparo.' },
    ],
  },
  {
    slug: 'assistencia-tecnica-samsung',
    name: 'Samsung',
    metaTitle: 'Assistência Técnica Samsung na Freguesia do Ó | Império das Telas',
    metaDescription:
      'Conserto de Samsung Galaxy na Freguesia do Ó: tela, bateria, conector e mais, com garantia. Orçamento grátis pelo WhatsApp.',
    h1: 'Assistência técnica Samsung na Freguesia do Ó',
    intro:
      'Atendemos toda a linha Galaxy, da série A aos top de linha S e Note/Ultra. Troca de tela (incluindo AMOLED), bateria, conector, câmera e reparos mais complexos, com peças de qualidade e garantia.',
    commonRepairsLabel: 'Reparos mais comuns em Samsung',
    commonRepairs: [
      'Troca de tela trincada ou com queima de imagem (AMOLED)',
      'Troca de bateria que descarrega rápido ou está estufada',
      'Troca de conector de carga que não segura o cabo',
      'Troca de câmera com foto embaçada ou fora de foco',
      'Diagnóstico para Galaxy que não liga ou reinicia sozinho',
    ],
    whatsappMessage: 'Olá! Vim pelo site e gostaria de um orçamento para meu Samsung.',
    logo: '/img/marcas/samsung.png',
    faqs: [
      { q: 'Vocês trocam tela de qualquer Galaxy?', a: 'Sim, incluindo modelos com tela AMOLED.' },
      { q: 'Quanto tempo leva o conserto?', a: 'A maioria dos reparos é feita no mesmo dia. Casos mais complexos podem levar mais tempo.' },
      { q: 'O reparo tem garantia?', a: 'Sim, todo serviço e peça utilizada têm garantia.' },
      { q: 'O orçamento tem algum custo?', a: 'Não, o diagnóstico e o orçamento são gratuitos e sem compromisso.' },
      { q: 'Fazem reparo em placa de Samsung?', a: 'Sim, fazemos diagnóstico técnico para identificar a causa e avaliar se há reparo.' },
    ],
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
    commonRepairsLabel: 'Reparos mais comuns em Motorola',
    commonRepairs: [
      'Troca de tela trincada, com manchas ou sem toque',
      'Troca de bateria que descarrega rápido ou está estufada',
      'Troca de conector de carga que não segura o cabo',
      'Troca de câmera com foto embaçada ou fora de foco',
      'Diagnóstico para aparelho que não liga ou reinicia sozinho',
    ],
    whatsappMessage: 'Olá! Vim pelo site e gostaria de um orçamento para meu Motorola.',
    logo: '/img/marcas/motorola.png',
    faqs: [
      { q: 'Vocês trocam tela de qualquer Motorola?', a: 'Sim, atendemos as linhas Moto G, Moto E, Edge e outras.' },
      { q: 'Quanto tempo leva o conserto?', a: 'A maioria dos reparos é feita no mesmo dia. Casos mais complexos podem levar mais tempo.' },
      { q: 'O reparo tem garantia?', a: 'Sim, todo serviço e peça utilizada têm garantia.' },
      { q: 'O orçamento tem algum custo?', a: 'Não, o diagnóstico e o orçamento são gratuitos e sem compromisso.' },
      { q: 'Fazem reparo em placa de Motorola?', a: 'Sim, fazemos diagnóstico técnico para identificar a causa e avaliar se há reparo.' },
    ],
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
    commonRepairsLabel: 'Reparos mais comuns em Xiaomi, Redmi e POCO',
    commonRepairs: [
      'Troca de tela trincada, com manchas ou sem toque',
      'Troca de bateria que descarrega rápido ou está estufada',
      'Troca de conector de carga que não segura o cabo',
      'Troca de câmera com foto embaçada ou fora de foco',
      'Diagnóstico para aparelho que não liga ou reinicia sozinho',
    ],
    whatsappMessage: 'Olá! Vim pelo site e gostaria de um orçamento para meu Xiaomi/Redmi/POCO.',
    logo: '/img/marcas/xiaomi.png',
    faqs: [
      { q: 'Vocês trocam tela de qualquer Xiaomi, Redmi ou POCO?', a: 'Sim, atendemos as principais linhas dessas marcas.' },
      { q: 'Quanto tempo leva o conserto?', a: 'A maioria dos reparos é feita no mesmo dia. Casos mais complexos podem levar mais tempo.' },
      { q: 'O reparo tem garantia?', a: 'Sim, todo serviço e peça utilizada têm garantia.' },
      { q: 'O orçamento tem algum custo?', a: 'Não, o diagnóstico e o orçamento são gratuitos e sem compromisso.' },
      { q: 'Fazem reparo em placa de Xiaomi?', a: 'Sim, fazemos diagnóstico técnico para identificar a causa e avaliar se há reparo.' },
    ],
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
      'A Império das Telas fica no coração da Freguesia do Ó, na R. Antônio de Couros, 461. Atendemos todo tipo de reparo, como tela, bateria, conector, câmera e placa, com peças de qualidade e garantia. Chame no WhatsApp e receba seu orçamento na hora.',
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
