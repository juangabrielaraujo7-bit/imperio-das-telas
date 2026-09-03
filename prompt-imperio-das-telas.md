# Prompt — Site "Império das Telas" (Assistência Técnica de Celulares)

> Cole este prompt no Claude Code, na raiz de um projeto vazio. Os arquivos de **vídeo e foto** eu adiciono manualmente nas pastas indicadas — deixe placeholders e a estrutura pronta pra eu só soltar os arquivos.

---

## Contexto e objetivo

Crie o site institucional/de conversão da **Império das Telas**, uma assistência técnica de celulares na Freguesia do Ó (Zona Norte de SP). O objetivo principal do site é **gerar orçamentos pelo WhatsApp**. Cada CTA leva ao WhatsApp com mensagem pré-preenchida. Visual premium, clean e tecnológico (referência Apple/Samsung), em **Light Mode**.

Prioridades, nesta ordem: (1) carregamento e funcionamento leves, (2) SEO local, (3) conversão via WhatsApp, (4) estética de hardware premium.

## Stack

Use **Astro** (site estático, zero JS por padrão, ótimo para SEO e performance, e permite reusar componentes entre as várias páginas de bairro/serviço). JavaScript só onde for necessário (menu mobile, formulário do WhatsApp, animações de scroll leves). Sem frameworks pesados, sem jQuery. CSS puro com variáveis (ou Tailwind, se preferir — mas mantenha o bundle enxuto).

> Se por algum motivo Astro não for viável, faça em **HTML + CSS + JS vanilla** com um arquivo por página, mantendo o mesmo resultado.

---

## Design System

### Paleta (Light Mode Tech)
```css
:root {
  --bg:            #F8F9FA; /* Fundo principal (branco gelo) */
  --surface:       #FFFFFF; /* Cards / blocos */
  --ink:           #121214; /* Texto e títulos (preto carbono) */
  --ink-2:         #52525B; /* Texto secundário (cinza médio) */
  --line:          #E4E4E7; /* Bordas / divisores (prata claro) */
  --silver:        #A1A1AA; /* Ícones / detalhes (prata fosco) */
}
```

### Regras de aplicação
- **Proporção 60-30-10:** 60% fundos claros (`--bg`/`--surface`), 30% estruturas/textos escuros (`--ink`), 10% detalhes em prata (`--line`/`--silver`).
- **Estética hardware:** bordas finas de **1px em `--line`** em cards, seções e divisores, simulando o acabamento de um smartphone. Cantos com raio médio-suave (≈14–18px).
- **CTA principal (Orçamento):** fundo `--ink` (#121214) + texto `#FFFFFF`, para contraste máximo. Hover sutil (leve elevação + escurecer).
- **Efeito vidro no cabeçalho:** header fixo com fundo semi-transparente + `backdrop-filter: blur(12px)` e borda inferior de 1px em `--line`. Deve lembrar a tela de um celular.
- Tipografia escura (`--ink`) sobre fundos claros para legibilidade alta. Fonte sans-serif moderna (ex.: Inter ou similar via `font-display: swap`).
- Ícones em linha fina (stroke), na cor `--silver`.

---

## Estrutura de páginas

**Home** (`/`) — direta, com todas as seções abaixo em rolagem única.

**Páginas específicas** (uma por arquivo, para SEO local e por serviço):
- Serviços: `troca-de-tela`, `troca-de-bateria`, `troca-de-conector-de-carga`, `troca-de-camera`, `reparo-em-placa`
- Marcas: `assistencia-tecnica-iphone`, `assistencia-tecnica-samsung`, `assistencia-tecnica-motorola`, `assistencia-tecnica-xiaomi`
- Bairros (SEO local, região da Freguesia do Ó): `freguesia-do-o`, `vila-palmeiras`, `limao`, `casa-verde`, `brasilandia`, `cachoeirinha`

Cada página específica reaproveita o layout base (header, footer, CTA de WhatsApp, mesma paleta) e tem título/meta/H1 e texto próprios focados na palavra-chave. Use os **textos base** da seção "Conteúdo das páginas específicas" mais abaixo — são um ponto de partida que vou refinando depois. Toda página deve terminar com CTA de WhatsApp.

---

## Seções da Home (nesta ordem)

1. **Header (vidro)** — logo "Império das Telas", navegação âncora (Serviços, Antes e Depois, Marcas, Como Funciona, Depoimentos, Localização, FAQ) e botão CTA "Orçamento no WhatsApp". Menu hambúrguer no mobile.

2. **Hero** — H1 forte ("Conserto de celular com técnicos especializados e garantia real" — pode ajustar), subtítulo citando os bairros atendidos, CTA preto para WhatsApp, e um selo de prova social (ex.: "+X aparelhos reparados na região" — deixe o número como placeholder).

3. **Serviços** — grid de cards (branco, borda 1px prata) com ícone, título e link "Ver detalhes →" para a página específica + botão WhatsApp. Serviços: Troca de tela, Troca de bateria, Conector de carga, Troca de câmera, Reparo em placa, Outros.

4. **Antes e Depois (VÍDEOS)** — seção de destaque. Grid de cards de vídeo comparando o aparelho quebrado x recuperado. **Eu vou adicionar os arquivos em `/public/videos/`.** Para cada vídeo use a tag `<video>` com: `muted`, `loop`, `playsinline`, `preload="metadata"`, atributo `poster` apontando para uma imagem de capa, e **autoplay só quando entrar na tela** (IntersectionObserver) para não pesar. Deixe 3 a 6 slots com nomes previsíveis, ex.:
   ```
   /public/videos/antes-depois-1.mp4  (poster: /public/img/videos/antes-depois-1.jpg)
   /public/videos/antes-depois-2.mp4
   /public/videos/antes-depois-3.mp4
   ```
   Se o arquivo não existir, o card deve degradar de forma elegante (mostrar só o poster/placeholder), sem quebrar o layout.

5. **Marcas atendidas** — grid: iPhone, Samsung, Motorola, Xiaomi/Redmi/POCO, e "Outras marcas". Cada uma com link para a página de marca + WhatsApp.

6. **Formulário rápido → WhatsApp** — campos Nome, Tipo de aparelho (select), Marca/Modelo, Descrição do defeito. Ao enviar, **não** usa backend: monta uma mensagem e abre `https://wa.me/5511988293537?text=...` com os dados preenchidos (encodeURIComponent). Sem `<form>` que recarregue a página.

7. **Como Funciona** — 4 passos: (1) Fale com a gente, (2) Diagnóstico gratuito, (3) Orçamento sem compromisso, (4) Reparo com garantia. Numerados, com linha/divisor em prata.

8. **Depoimentos** — cards com 5 estrelas e avaliações do Google (deixe placeholders para eu colar as reais).

9. **Sobre / Fotos do local** — texto curto + galeria de **fotos reais da loja e da bancada**. **Eu adiciono as fotos em `/public/img/loja/`** (ex.: `loja-1.jpg`, `loja-2.jpg`, `bancada-1.jpg`...). Deixe 4 a 8 slots com `loading="lazy"` e `alt` descritivo com palavra-chave local.

10. **Localização** — endereço, telefone/WhatsApp, horários, botão "Chamar no WhatsApp" e **Google Maps embutido** (iframe com `loading="lazy"`) apontando para o endereço abaixo.

11. **FAQ** — acordeão leve (detalhes/summary nativo, sem JS pesado) com perguntas: tempo de conserto, orçamento é gratuito?, quais marcas, garantia das peças, onde fica a loja.

12. **Footer** — logo, navegação, contato (endereço/telefone/horário), Instagram, e CTA WhatsApp. Copyright.

13. **Botão flutuante de WhatsApp** — fixo no canto inferior, visível em todas as páginas.

---

## Conteúdo das páginas específicas (textos base)

> Ponto de partida — vou ajustando conforme o site for saindo. Mantenha 1 `<h1>` por página, use o `title`/`meta description` exatos abaixo e feche cada página com CTA de WhatsApp. Onde houver `[…]`, deixe placeholder.

### Serviços

**Troca de tela** (`/troca-de-tela`)
- **title:** Troca de Tela de Celular na Freguesia do Ó | Império das Telas
- **meta:** Trocamos a tela do seu celular no mesmo dia, com peças de qualidade e garantia. iPhone, Samsung, Motorola, Xiaomi e mais. Orçamento grátis pelo WhatsApp.
- **H1:** Troca de tela de celular com garantia na Freguesia do Ó
- **Intro:** Tela trincada, com manchas, listras ou sem toque? Na Império das Telas fazemos a troca com peças de qualidade e garantia, na maioria dos casos no mesmo dia. Fazemos troca só do vidro ou do conjunto completo, dependendo do modelo e do dano — e você recebe o orçamento exato antes de aprovar qualquer coisa.
- **Sinais de que você precisa:** vidro trincado, tela apagada ou piscando, manchas/roxo na imagem, toque que não responde, linhas coloridas na tela.

**Troca de bateria** (`/troca-de-bateria`)
- **title:** Troca de Bateria de Celular na Freguesia do Ó | Império das Telas
- **meta:** Bateria viciada ou descarregando rápido? Trocamos a bateria do seu celular com peça de qualidade e garantia. Orçamento grátis pelo WhatsApp.
- **H1:** Troca de bateria de celular na Freguesia do Ó
- **Intro:** Se o celular descarrega rápido, desliga sozinho com carga ainda disponível ou está estufado, é hora de trocar a bateria. Usamos peças de qualidade e devolvemos a autonomia do seu aparelho com garantia — geralmente no mesmo dia.
- **Sinais de que você precisa:** dura muito menos que antes, desliga com 20–30% de carga, esquenta ao carregar, traseira estufada.

**Troca de conector de carga** (`/troca-de-conector-de-carga`)
- **title:** Conserto de Conector de Carga na Freguesia do Ó | Império das Telas
- **meta:** Celular não carrega ou o cabo fica solto? Trocamos o conector de carga com garantia. Diagnóstico e orçamento grátis pelo WhatsApp.
- **H1:** Troca de conector de carga na Freguesia do Ó
- **Intro:** Quando o celular só carrega em certa posição, o cabo fica frouxo ou não carrega de jeito nenhum, muitas vezes o problema é o conector de carga. Fazemos a avaliação e a troca com peça de qualidade e garantia.
- **Sinais de que você precisa:** só carrega mexendo no cabo, não reconhece o carregador, carrega muito devagar, entrada suja ou danificada.

**Troca de câmera** (`/troca-de-camera`)
- **title:** Troca de Câmera de Celular na Freguesia do Ó | Império das Telas
- **meta:** Câmera embaçada, trincada ou que não abre? Trocamos a câmera do seu celular com garantia. Orçamento grátis pelo WhatsApp.
- **H1:** Troca de câmera de celular na Freguesia do Ó
- **Intro:** Foto embaçada, câmera que não abre, mancha na imagem ou lente quebrada? Trocamos a câmera frontal ou traseira do seu aparelho com peça de qualidade e garantia.
- **Sinais de que você precisa:** imagem embaçada ou com manchas, app da câmera trava, foco não funciona, lente trincada.

**Reparo em placa** (`/reparo-em-placa`)
- **title:** Reparo em Placa de Celular na Freguesia do Ó | Império das Telas
- **meta:** Celular que não liga, molhou ou tem defeito complexo? Fazemos reparo em placa com diagnóstico técnico. Fale conosco pelo WhatsApp.
- **H1:** Reparo em placa de celular na Freguesia do Ó
- **Intro:** Aparelho que não liga, não carrega, esquenta demais ou molhou? Esses casos pedem análise a nível de placa. Fazemos o diagnóstico técnico para identificar a causa real e só então informamos prazo e orçamento — sem compromisso.
- **Sinais de que você precisa:** não liga nem carregando, reinicia sozinho, esquenta sem uso, sofreu queda ou contato com água.

### Marcas

**iPhone** (`/assistencia-tecnica-iphone`)
- **title:** Assistência Técnica de iPhone na Freguesia do Ó | Império das Telas
- **meta:** Conserto de iPhone na Freguesia do Ó: troca de tela, bateria, conector e mais, com peças de qualidade e garantia. Orçamento grátis pelo WhatsApp.
- **H1:** Assistência técnica de iPhone na Freguesia do Ó
- **Intro:** Consertamos iPhone dos modelos mais antigos aos mais recentes: troca de tela, bateria, conector de carga, câmera e reparos em placa. Peças de qualidade, diagnóstico honesto e garantia no serviço.

**Samsung** (`/assistencia-tecnica-samsung`)
- **title:** Assistência Técnica Samsung na Freguesia do Ó | Império das Telas
- **meta:** Conserto de Samsung Galaxy na Freguesia do Ó: tela, bateria, conector e mais, com garantia. Orçamento grátis pelo WhatsApp.
- **H1:** Assistência técnica Samsung na Freguesia do Ó
- **Intro:** Atendemos toda a linha Galaxy — da série A aos top de linha S e Note/Ultra. Troca de tela (incluindo AMOLED), bateria, conector, câmera e reparos mais complexos, com peças de qualidade e garantia.

**Motorola** (`/assistencia-tecnica-motorola`)
- **title:** Assistência Técnica Motorola na Freguesia do Ó | Império das Telas
- **meta:** Conserto de Motorola na Freguesia do Ó: troca de tela, bateria, conector e mais, com garantia. Orçamento grátis pelo WhatsApp.
- **H1:** Assistência técnica Motorola na Freguesia do Ó
- **Intro:** Consertamos Motorola das linhas Moto G, Moto E, Edge e outras. Troca de tela, bateria, conector de carga, câmera e reparos em placa, com peças de qualidade e garantia no serviço.

**Xiaomi** (`/assistencia-tecnica-xiaomi`)
- **title:** Assistência Técnica Xiaomi na Freguesia do Ó | Império das Telas
- **meta:** Conserto de Xiaomi, Redmi e POCO na Freguesia do Ó, com peças de qualidade e garantia. Orçamento grátis pelo WhatsApp.
- **H1:** Assistência técnica Xiaomi na Freguesia do Ó
- **Intro:** Atendemos Xiaomi, Redmi e POCO em troca de tela, bateria, conector, câmera e reparos em placa. Diagnóstico honesto, peças de qualidade e garantia.

### Bairros (SEO local)

> Mesma estrutura para todos: destacar que a loja fica na Freguesia do Ó e é fácil chegar do bairro em questão. Variar levemente o texto para não duplicar conteúdo.

**Freguesia do Ó** (`/freguesia-do-o`)
- **title:** Assistência Técnica de Celular na Freguesia do Ó | Império das Telas
- **meta:** Assistência técnica de celular na Freguesia do Ó: troca de tela, bateria e mais, com garantia. Orçamento rápido pelo WhatsApp.
- **H1:** Assistência técnica de celular na Freguesia do Ó
- **Intro:** A Império das Telas fica no coração da Freguesia do Ó, na R. Antônio de Couros, 461. Atendemos todo tipo de reparo — tela, bateria, conector, câmera e placa — com peças de qualidade e garantia. Chame no WhatsApp e receba seu orçamento na hora.

**Vila Palmeiras** (`/vila-palmeiras`)
- **title:** Assistência Técnica de Celular na Vila Palmeiras | Império das Telas
- **meta:** Conserto de celular perto da Vila Palmeiras: tela, bateria e mais, com garantia. A poucos minutos, na Freguesia do Ó. Orçamento pelo WhatsApp.
- **H1:** Assistência técnica de celular perto da Vila Palmeiras
- **Intro:** Quem é da Vila Palmeiras chega rápido na nossa loja na Freguesia do Ó. Fazemos troca de tela, bateria, conector, câmera e reparos em placa, com peças de qualidade e garantia. Fale conosco pelo WhatsApp.

**Limão** (`/limao`)
- **title:** Assistência Técnica de Celular no Limão | Império das Telas
- **meta:** Conserto de celular perto do Limão: tela, bateria e mais, com garantia. Fácil acesso pela Freguesia do Ó. Orçamento grátis pelo WhatsApp.
- **H1:** Assistência técnica de celular perto do Limão
- **Intro:** Atendemos moradores do Limão na nossa loja na Freguesia do Ó, com fácil acesso. Troca de tela, bateria, conector, câmera e reparo em placa, sempre com peças de qualidade e garantia.

**Casa Verde** (`/casa-verde`)
- **title:** Assistência Técnica de Celular na Casa Verde | Império das Telas
- **meta:** Conserto de celular perto da Casa Verde: tela, bateria e mais, com garantia. A poucos minutos, na Freguesia do Ó. Orçamento pelo WhatsApp.
- **H1:** Assistência técnica de celular perto da Casa Verde
- **Intro:** Se você é da Casa Verde, a Império das Telas está bem pertinho, na Freguesia do Ó. Cuidamos do seu aparelho com diagnóstico honesto, peças de qualidade e garantia. Chame no WhatsApp.

**Brasilândia** (`/brasilandia`)
- **title:** Assistência Técnica de Celular na Brasilândia | Império das Telas
- **meta:** Conserto de celular perto da Brasilândia: tela, bateria e mais, com garantia. Fácil acesso pela Freguesia do Ó. Orçamento pelo WhatsApp.
- **H1:** Assistência técnica de celular perto da Brasilândia
- **Intro:** Atendemos a Brasilândia e região na nossa loja na Freguesia do Ó. Troca de tela, bateria, conector, câmera e reparos em placa, com peças de qualidade e garantia no serviço.

**Cachoeirinha** (`/cachoeirinha`)
- **title:** Assistência Técnica de Celular na Cachoeirinha | Império das Telas
- **meta:** Conserto de celular perto da Cachoeirinha: tela, bateria e mais, com garantia. A poucos minutos, na Freguesia do Ó. Orçamento pelo WhatsApp.
- **H1:** Assistência técnica de celular perto da Cachoeirinha
- **Intro:** Moradores da Cachoeirinha contam com a Império das Telas na Freguesia do Ó para consertar o celular com segurança. Peças de qualidade, orçamento sem compromisso e garantia. Fale pelo WhatsApp.

---

## Dados do negócio (NAP — use exatamente assim)

- **Nome:** Império das Telas
- **Endereço:** R. Antônio de Couros, 461 — Freguesia do Ó, São Paulo - SP, 02726-000
- **Horário:** Segunda a Sexta 9:00–19:00 · Sábado 9:00–15:00 (fechado domingo)
- **WhatsApp / Telefone:** (11) 98829-3537 → link `https://wa.me/5511988293537`
- **Instagram:** https://www.instagram.com/imperiodastelas_/
- **Mapa:** iframe do Google Maps para o endereço acima.

**Padrão de link de WhatsApp** (mensagem pré-preenchida por contexto), ex.:
```
https://wa.me/5511988293537?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento.
```
Varie a mensagem por seção (troca de tela, bateria, marca X, visitar a loja etc.).

---

## SEO (aplicar em todas as páginas)

- `<title>`, `meta description`, canonical, `meta robots: index, follow`.
- Open Graph + Twitter Card (título, descrição, imagem, locale `pt_BR`, `theme-color: #121214`).
- **JSON-LD `LocalBusiness`** (na verdade `MobilePhoneRepairShop`/`ProfessionalService`) com nome, endereço completo, geo, telefone, horários (`openingHoursSpecification`), URL, sameAs (Instagram). Isso é essencial para SEO local.
- HTML semântico (`<header> <main> <section> <article> <footer>`, um único `<h1>` por página).
- `alt` descritivo com palavra-chave local em todas as imagens.
- `sitemap.xml` e `robots.txt` gerados automaticamente (o Astro tem integração de sitemap).
- URLs limpas e amigáveis.

## Performance ("leve")

- Imagens em formato moderno (WebP/AVIF) com `loading="lazy"` e `width/height` definidos para evitar layout shift.
- Vídeos com `preload="metadata"` e autoplay só no viewport (nunca carregar todos de uma vez).
- JS mínimo, sem bibliotecas pesadas. Fontes com `font-display: swap` e subset.
- Meta de Lighthouse: 90+ em Performance, SEO e Acessibilidade no mobile.

## Efeitos (sutis, sem pesar)

- Reveal on scroll (fade/translate leve) via IntersectionObserver, respeitando `prefers-reduced-motion`.
- Hover nos cards: leve elevação + borda que acende do prata para o carbono.
- Header vidro com blur (já descrito).
- Transições suaves (150–250ms) em botões e links.

## Acessibilidade

- Contraste AA (o carbono sobre branco já garante), foco visível, navegação por teclado, labels nos campos, `aria-label` no botão flutuante e no menu.

---

## Estrutura de pastas esperada

```
/public
  /videos            → EU adiciono os vídeos antes/depois (.mp4)
  /img
    /loja            → EU adiciono as fotos do local
    /videos          → posters/capas dos vídeos
    /marcas          → logos/imagens das marcas
/src
  /components        → Header, Footer, CtaWhatsapp, ServiceCard, BeforeAfter, etc.
  /layouts           → Layout base (header/footer/SEO)
  /pages             → index + páginas de serviço/marca/bairro
  /styles            → variáveis + base
```

## Entrega

1. Monte primeiro a **estrutura + Home** completa e funcional.
2. Depois gere as **páginas específicas** reaproveitando o layout, com SEO pronto e texto em placeholder.
3. Ao final, me diga exatamente **em quais pastas soltar os vídeos e fotos** e com quais nomes de arquivo, e como rodar/buildar o projeto localmente.
