<<<<<<< HEAD
# Sttilo Moveis

Landing page institucional da Sttilo Moveis para apresentacao de projetos em madeira, geracao de contatos via WhatsApp e exibicao de portfolio.

## Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui

## Como rodar localmente

```bash
npm install
npm run dev
```

O projeto abre por padrao em `http://localhost:8080`.

## Scripts

- `npm run dev`: ambiente local
- `npm run build`: build de producao
- `npm run preview`: visualizacao local da build
- `npm run lint`: validacao com ESLint
- `npx tsc --noEmit`: validacao de tipos

## Estrutura principal

- `src/pages/Index.tsx`: ordem das secoes da home
- `src/data/siteContent.ts`: textos, links sociais, materiais, depoimentos e portfolio
- `src/components/sections/`: secoes visuais da landing
- `public/photos_uploads/`: imagens utilizadas no site

## Publicacao no GitHub

1. Crie um repositorio novo no GitHub.
2. Inicialize o Git localmente caso necessario:

```bash
git init
git add .
git commit -m "Site inicial da Sttilo Moveis"
git branch -M main
git remote add origin <URL_DO_REPOSITORIO>
git push -u origin main
```

## Publicacao na hospedagem

O projeto gera arquivos estaticos em `dist/`, entao pode ser publicado em Vercel, Netlify, Hostinger, cPanel, Cloudflare Pages e hospedagens estaticas em geral.

Configuracao recomendada:

- Build command: `npm run build`
- Output directory: `dist`
- Node.js: 20 ou superior

Se a hospedagem aceitar deploy por Git, basta conectar o repositorio e usar os valores acima.

Se a hospedagem exigir upload manual:

1. Rode `npm run build`
2. Envie o conteudo da pasta `dist/` para a raiz publica da hospedagem

## Checklist antes de publicar

- Confirmar telefone, endereco e redes sociais em `src/data/siteContent.ts`
- Revisar imagens em `public/photos_uploads/`
- Validar a home em mobile e desktop
- Rodar `npm run lint`
- Rodar `npx tsc --noEmit`
- Rodar `npm run build`

## Observacoes

- O projeto nao depende mais de Lovable para desenvolvimento ou deploy.
- O arquivo `dist/` e gerado localmente e nao precisa ser versionado.
