# Portfolio Xand

## Contexto

Portfolio autoral de **Xand (Gabriel Bravo)** - criador de sistemas digitais e fisicos.

## Identidade Visual

- **Fundo**: Areia quente `#F4EDE4`
- **Texto**: Quase preto quente `#1E1B16`
- **Tipografia**: Inter (sans-serif minimalista)
- **Principios**: Minimalismo contemplativo, muito espaco em branco, calma que observa

## O que NAO fazer

- Nada de visual de template SaaS
- Nada de grid de logos de tecnologias
- Nada de carrossel
- Nada de excesso de animacoes
- Nada de bordas, sombras ou efeitos desnecessarios

## Estrutura

```
src/
  app/
    globals.css          # Variaveis CSS e tema
    layout.tsx           # Layout raiz com fonte Inter
    page.tsx             # Pagina principal
    not-found.tsx        # Pagina 404
    projetos/
      [slug]/
        page.tsx         # Pagina individual de projeto
  components/
    Container.tsx        # Wrapper de largura maxima
    Section.tsx          # Wrapper de secao com padding
    Hero.tsx             # Cabecalho com nome e subtitulo
    Manifesto.tsx        # Texto de apresentacao pessoal
    ProjectCard.tsx      # Card de preview de projeto
    ProjectList.tsx      # Lista de projetos por categoria
    ProjectHeader.tsx    # Cabecalho de pagina de projeto
    ProjectImages.tsx    # Galeria de imagens (placeholder)
    ProjectContent.tsx   # Secoes de conteudo do projeto
    ProjectTools.tsx     # Lista de ferramentas utilizadas
    Contact.tsx          # Secao de contato
    Footer.tsx           # Rodape simples
  data/
    projects.ts          # Dados dos projetos
  types/
    index.ts             # Tipos TypeScript
```

## Cores (CSS Variables)

```css
--color-sand: #f4ede4 /* Fundo principal */ --color-sand-dark: #e8dfd3
  /* Fundo secundario/placeholders */ --color-ink: #1e1b16 /* Texto principal */
  --color-ink-soft: #3d3830 /* Texto secundario */ --color-ink-muted: #6b6459
  /* Texto terciario/labels */;
```

## Tailwind Classes Customizadas

- `text-ink`, `text-ink-soft`, `text-ink-muted`
- `bg-sand`, `bg-sand-dark`

## Comandos

```bash
npm run dev    # Desenvolvimento
npm run build  # Build de producao
npm run start  # Servidor de producao
npm run lint   # Verificar codigo
```

## Proximos Passos

1. Substituir imagens placeholder por imagens reais em `public/projects/`
2. Atualizar dados dos projetos em `src/data/projects.ts`
3. Atualizar email de contato em `src/components/Contact.tsx`
4. Preparar modo escuro (variaveis ja estruturadas para isso)

## Notas Tecnicas

- Next.js 16 com App Router
- Tailwind CSS v4
- TypeScript strict mode
- Paginas de projeto sao geradas estaticamente (SSG)
