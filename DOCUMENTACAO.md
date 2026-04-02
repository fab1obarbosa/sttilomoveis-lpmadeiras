# Documentacao Tecnica

## Visao geral

Este repositorio contem a landing page oficial da Sttilo Moveis. O foco da aplicacao e apresentar a marca, exibir portfolio, reforcar prova social e converter acessos em contatos pelo WhatsApp.

## Stack

- `React 18`
- `TypeScript`
- `Vite`
- `Tailwind CSS`
- `shadcn/ui`
- `React Router`

## Estrutura do projeto

### Entrada da aplicacao

- `src/main.tsx`: inicializacao do app
- `src/App.tsx`: providers globais e roteamento

### Paginas

- `src/pages/Index.tsx`: home principal
- `src/pages/NotFound.tsx`: pagina 404 personalizada

### Conteudo centralizado

- `src/data/siteContent.ts`

Esse arquivo concentra:

- telefone do WhatsApp
- links sociais
- cards de servicos
- categorias do portfolio
- tipos de madeira
- depoimentos
- diferenciais
- tons de verniz

### Secoes da home

A home esta organizada nesta ordem em `src/pages/Index.tsx`:

1. `Hero`
2. `Services`
3. `Portfolio`
4. `AboutBrand`
5. `WoodTypes`
6. `VarnishOptions`
7. `Benefits`
8. `Testimonials`
9. `ServiceArea`
10. `FinalCTA`
11. `Footer`

## Arquivos importantes

- `index.html`: metadados SEO principais
- `src/index.css`: tokens visuais, gradientes e animacoes globais
- `tailwind.config.ts`: extensoes do Tailwind
- `vite.config.ts`: configuracao do Vite
- `public/robots.txt`: liberacao de rastreamento

## Publicacao

### Build local

```bash
npm install
npx tsc --noEmit
npm run lint
npm run build
```

### Saida de producao

O build gera os arquivos finais em:

- `dist/`

Essa pasta deve ser enviada para a hospedagem quando o deploy for manual.

### Configuracao de hospedagem

Use os seguintes valores em plataformas de deploy por Git:

- Install command: `npm install`
- Build command: `npm run build`
- Output directory: `dist`

## Boas praticas de manutencao

### Para alterar textos

Edite primeiro:

- `src/data/siteContent.ts`

### Para reorganizar secoes

Edite:

- `src/pages/Index.tsx`

### Para ajustar identidade visual

Edite:

- `src/index.css`
- `tailwind.config.ts`

### Para trocar imagens

Substitua arquivos em:

- `public/photos_uploads/`

Mantendo os mesmos nomes, o site continua funcionando sem precisar trocar importacoes.

## Revisao tecnica desta entrega

Nesta rodada foram verificados e ajustados os seguintes pontos:

- remocao de referencias e dependencias do Lovable
- correcao de lint em `tailwind.config.ts`
- revisao da pagina 404 para manter o branding da Sttilo
- revisao de links externos com `noopener noreferrer`
- validacao de tipos TypeScript
- validacao de build de producao
- revisao de mobile nas secoes principais

## Pendencias recomendadas

- trocar o favicon padrao por um favicon oficial da Sttilo
- definir a URL final do dominio para complementar SEO com `og:url` e `canonical`
- revisar se o link curto das avaliacoes do Google deve ser substituido por um link definitivo do perfil
- avaliar compressao adicional das imagens em `public/photos_uploads/` para melhorar carregamento em conexoes moveis
