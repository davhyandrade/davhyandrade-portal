# Formatação de código

Este projeto utiliza o **EditorConfig**, **ESLint** para análise de código e o **Prettier** para formatação automática. Juntos, eles garantem que o código siga as configurações recomendadas para prezar por um código consistente.

## Prettier (Formatação)

O Prettier é responsável pela formatação automática do código. Além das regras padrões, as principais customizadas (ou provenientes do plugin) incluídas na configuração do ESLint e `.prettierrc` são:

- **Single Quote:** Utiliza aspas simples (`'`) em vez de aspas duplas, e não permite template literals vazios ou desnecessários.
- **Semicolons:** O uso de ponto e vírgula no final das declarações é obrigatório.
- **Trailing Comma:** Adiciona vírgulas no final de listas e objetos sempre que possível (`all`).
- **Arrow Parens:** Omite parênteses em funções de seta com apenas um argumento (`avoid`).

## ESLint (Análise Estática)

Abaixo estão as regras personalizadas específicas de análise de código configuradas no `eslint.config.mjs`:

### 1. Camel Case

- **Regra:** `camelcase: ["error", { ignoreImports: true }]`
- **Descrição:** Nomes de variáveis e funções devem ser escritos no formato `camelCase` (ou `PascalCase` para componentes React/classes). O uso de `snake_case` (ex: `user_name`) resultará em erro. Importações são ignoradas por essa regra.

### 2. Extensão de Arquivos JSX/TSX

- **Regra:** `"react/jsx-filename-extension": ["error", { extensions: [".tsx"] }]`
- **Descrição:** Arquivos que contêm código JSX/React devem obrigatoriamente possuir a extensão `.tsx`.

### 3. Importação Consistente de Tipos

- **Regra:** `"@typescript-eslint/consistent-type-imports": ["error", { prefer: "type-imports" }]`
- **Descrição:** Força a utilização de `import type` para importar apenas tipos, melhorando a clareza e separação entre código e tipagem.

### 4. Importações Restritas

- **Regra:** `"no-restricted-imports": ["error", { patterns: ["../*"] }]`
- **Descrição:** Proíbe importações relativas subindo diretórios (`../*`), incentivando o uso de importações absolutas.

### 5. Definição de Componentes React

- **Regra:** `"react/function-component-definition": ["error", { namedComponents: "function-declaration", unnamedComponents: "arrow-function" }]`
- **Descrição:** Componentes React nomeados devem ser definidos utilizando declaração de função (`function ComponentName() {}`), enquanto componentes não nomeados devem utilizar `arrow functions`.

### 6. Sintaxe Restrita (Export Default)

- **Regra:** `"no-restricted-syntax": ["error", { selector: "ExportDefaultDeclaration > FunctionDeclaration" }]`
- **Descrição:** Proíbe a exportação padrão direta de funções (ex: `export default function...`). A declaração da função e sua exportação (`export default`) devem ser feitas de forma separada.

### 7. Variáveis Não Utilizadas

- **Regra:** `"@typescript-eslint/no-unused-vars": ["error", { args: "all", argsIgnorePattern: "^_" }]`
- **Descrição:** Gera erro para variáveis, importações e argumentos declarados, mas não utilizados no código, com exceção dos argumentos que o nome começa com underline (`_`).

### 8. Estilo de Função

- **Regra:** `"func-style": ["error", "declaration", { allowArrowFunctions: true }]`
- **Descrição:** Permite a utilização de declaração de funções padrão (`function name() {}`) ou `arrow functions`.

### 9. Uso de Aspas

- **Regra:** `"quotes": ["error", "single", { allowTemplateLiterals: false }]`
- **Descrição:** Obriga o uso de aspas simples (`'`) em todo o projeto. A configuração `{ allowTemplateLiterals: false }` desativa o uso de _template literals_ (crases) a menos que contenham interpolação de variáveis ou quebras de linha explícitas.

## EditorConfig (Configurações do Editor)

O projeto inclui um arquivo `.editorconfig` para manter estilos de codificação consistentes entre diferentes editores e IDEs. As principais configurações globais são:

- **Charset:** `utf-8` (codificação de caracteres).
- **End of Line:** `lf` (estilo Unix de quebra de linha).
- **Indentação:** Espaços (`space`) com tamanho de 2 (`indent_size = 2`).
- **Insert Final Newline:** `true` (Adiciona uma linha em branco no final de cada arquivo).
- **Trim Trailing Whitespace:** `true` (Remove espaços em branco no final das linhas).

## Comandos Úteis

#### Verificar erros de Lint

```bash
npm run lint
# ou
yarn lint
# ou
pnpm lint
```

#### Formatar o código automaticamente

```bash
npm run format
# ou
yarn format
# ou
pnpm format
```

## Ignorados pelo Lint e Formatação

Os seguintes diretórios são ignorados por padrão:

- `.next/**`
- `out/**`
- `build/**`
- `node_modules/**`
