# Vídeos "Antes e Depois"

Coloque aqui os vídeos comparando o aparelho quebrado x recuperado, em formato `.mp4`, com estes nomes exatos:

```
antes-depois-1.mp4
antes-depois-2.mp4
antes-depois-3.mp4
```

- A seção da Home já está pronta para até 3 vídeos (dá para adicionar mais editando `src/components/HomeBeforeAfter.astro`, array `videos`, e criando `antes-depois-4.mp4`, `antes-depois-5.mp4`, `antes-depois-6.mp4`).
- Cada vídeo precisa de uma imagem de capa (poster) com o mesmo número, em `/public/img/videos/` (veja o README daquela pasta).
- Se um arquivo não existir, o card mostra "Em breve" automaticamente — não quebra o layout.
- Recomendado: vídeos curtos (5–15s), leves (poucos MB), proporção vertical/quadrada (4:5 fica ótimo no grid).
