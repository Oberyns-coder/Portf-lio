# Portfólio Profissional — Bruno

Portfólio multidisciplinar (**Design Gráfico, Branding, UX/UI, 3D, Ilustração e Motion**) desenvolvido em **React + TypeScript + Vite + Tailwind CSS + Framer Motion**.

## Como rodar no seu computador

No terminal, dentro da pasta `Portfólio`:

```powershell
npm run dev
```

Depois acesse o link local exibido no terminal (normalmente `http://localhost:5173`).

---

## Como editar seus textos, experiências, faculdades e projetos

Todo o conteúdo do site está centralizado em um único arquivo fácil de editar:

- **`src/data/portfolioData.ts`**
  - `profile`: seu nome, cidade, disponibilidade, bio, links de redes sociais, e-mail e link do currículo em PDF.
  - `experiences`: locais onde trabalhou, cargos, períodos e destaques.
  - `education`: suas **duas faculdades**, cursos, anos e resumo.
  - `skills`: disciplinas criativas e softwares que domina.
  - `projects`: lista dos projetos da vitrine (título, subtítulo, tags `DESIGN GRÁFICO`, `UX/UI`, `3D`, `ILUSTRAÇÃO`, `MOTION`, cor de destaque e textos do estudo de caso).

## Onde colocar suas imagens, ilustrações e renders 3D

Basta salvar os arquivos na pasta **`public/media/`**:

- `public/media/hero-character-cutout.png` → sua ilustração/personagem 3D com fundo transparente que vaza para fora do card na Home.
- `public/media/proj-*.png` → capas e pranchas dos projetos referenciadas em `src/data/portfolioData.ts`.
