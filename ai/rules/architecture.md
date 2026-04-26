---
usado_por: [maestro, architect]
descricao: Define a arquitetura do projeto, stack tecnológica e organização de pastas.
---

# Visão Geral do Projeto

**Davhy Andrade - Portal** é um site pessoal e portfólio construído com **Next.js 16** e **React 19**. Ele exibe projetos, trabalhos de design digital e fotografia. O projeto utiliza **TypeScript** para segurança de tipos e **Material UI (MUI) v7** para a biblioteca de componentes e estilização.

## Arquitetura

- **Framework:** Next.js App Router.
- **Diretório Raiz:** `src/app` gerencia rotas, layouts e provedores globais.
- **Grupos de Rotas:** `(portal)` contém a estrutura principal do site voltada ao público.
- **Recursos Compartilhados:** `src/shared` contém lógica centralizada, constantes e configurações de tema.
- **Estilização:** MUI `ThemeProvider` com variáveis CSS habilitadas. Componentes customizados são estilizados usando Emotion ou a prop `sx`/API `styled` do MUI.
- **Gerenciamento de Estado:** Principalmente estado e props do React; o `AppRouterCacheProvider` do MUI gerencia a estilização SSR.

## Stack Tecnológica

- **Framework:** Next.js 16.1.6
- **Biblioteca:** React 19.2.3 (com React Compiler habilitado em `next.config.ts`)
- **Estilização:** MUI 7.3.8, Emotion 11.14
- **Linguagem:** TypeScript 5
- **Ferramentas:** ESLint 9, Prettier 3.8, Jest 30
