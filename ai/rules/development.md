---
usado_por: [coder, reviewer]
descricao: Estabelece convenções de desenvolvimento, nomenclatura e padrões de código.
---

# Convenções de Desenvolvimento

## Nomenclatura e Estrutura de Arquivos

- Componentes são geralmente agrupados em suas próprias pastas: `nome-do-componente/NomeDoComponente.component.tsx`.
- Arquivos de suporte seguem o padrão de sufixo: `.styles.ts`, `.types.ts`, `.config.ts`, `.constants.ts`.
- Use `.tsx` apenas quando o arquivo contiver JSX.
- Convenções de nomenclatura de arquivos:
  - Arquivos de componentes devem usar PascalCase (ex: `UserProfile.component.tsx`).
  - Arquivos adjacentes também devem usar PascalCase (ex: `UserProfile.styles.ts`, `UserProfile.types.ts`).
  - Exceção: hooks singulares e utilitários devem usar camelCase (ex: `useUserProfile.ts`).
- Use aliases de caminho (`@/*`) para importar do diretório `src` (ex: `@/shared/...`).
- Todos os nomes de pastas devem usar kebab-case (ex: `user-profile`, `auth-service`, `checkout-form`).

## Padrões de Código (ESLint, Prettier & EditorConfig)

- Siga sempre as configurações de ESLint, Prettier e EditorConfig do projeto.
- Essas ferramentas definem a **fonte da verdade** para o estilo e formatação do código.
- Prefira formatação automática via Prettier em vez de ajustes manuais.
- Respeite o estilo de código existente ao modificar ou estender o código.

## Regras de ESLint e Práticas de Programação

- **Funções:** Componentes nomeados devem usar declarações de função:
  `function MeuComponente() {}`.
  Arrow functions são permitidas para componentes não nomeados (ex: dentro de `forwardRef`).
- **Exports Padrão (Default):** Evite exportar funções diretamente.
  Sempre declare primeiro, depois exporte:
  ```ts
  function MeuComponente() {}
  export default MeuComponente;
  ```
- **Importações:** Você DEVE sempre usar aliases de caminho (`@/*`) para importações absolutas do diretório `src` (ex: `@/shared/...`). Nunca use caminhos relativos como `../../` para acessar arquivos fora do escopo do diretório atual.
