---
usado_por: [coder, reviewer]
descricao: Define as convenções e a estrutura para a criação e organização de testes.
---

# Convenções de Teste

- Sempre use `it` em vez de `test`.
- **Estrutura:** Você DEVE usar uma estrutura de teste completamente plana. NÃO use blocos `describe` sob nenhuma circunstância.
- Cada teste deve ser isolado e autoexplicativo.
- Não agrupe testes, a menos que seja explicitamente solicitado.

## Nomenclatura de Testes

- Os nomes dos testes devem sempre começar com um verbo na terceira pessoa do singular (em inglês).
- Padrões permitidos:
  - `renders`
  - `returns`
  - `calls`
- Não use `should` nos nomes dos testes.

### Exemplos

- `it('renders the Footer correctly', () => {})`
- `it('calls the submit handler when button is clicked', () => {})`
- `it('returns the expected value when input is valid', () => {})`

## Estrutura de Arquivos

- Os arquivos de teste devem ser colocados dentro de uma pasta `__tests__`.
- O nome do arquivo de teste deve corresponder exatamente ao nome do componente com o sufixo `.test`.

### Exemplos

- Componente: `Footer.component.tsx`  
  Teste: `__tests__/Footer.component.test.tsx`

- Componente: `UserProfile.component.tsx`  
  Teste: `__tests__/UserProfile.component.test.tsx`

- Componente: `auth-service.ts`  
  Teste: `__tests__/auth-service.test.ts`

- Os arquivos de teste devem seguir o padrão:
  - `*.test.tsx` para componentes React
  - `*.test.ts` para lógica não-React
