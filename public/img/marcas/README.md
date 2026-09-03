# Logos das marcas (opcional)

Pasta reservada para logos/imagens das marcas (iPhone, Samsung, Motorola, Xiaomi), caso você queira adicionar depois.

Hoje a seção "Marcas atendidas" da Home usa só texto (sem logo), para não depender de arquivo de imagem. Se quiser adicionar os logos:

1. Coloque os arquivos aqui, ex.: `iphone.svg`, `samsung.svg`, `motorola.svg`, `xiaomi.svg`.
2. Edite `src/components/HomeBrands.astro` para exibir `<img src={brand.logo} ... />` (o campo `logo` já existe em `src/data/business.ts`).
