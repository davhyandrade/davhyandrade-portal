---
descricao: Convenções universais de qualidade de código para todas as linguagens.
---

## Diretrizes

### KISS (Keep It Simple, Stupid)

Ao escolher entre uma solução complexa e uma simples, prefira a simples. A solução mais simples que resolve completamente o problema é a correta. A complexidade é um passivo, não uma característica. Se uma solução exige que o leitor entenda um padrão de projeto, um algoritmo ou um recurso não óbvio da linguagem, provavelmente existe uma alternativa mais simples.

### DRY (Don't Repeat Yourself)

Cada peça de conhecimento ou comportamento DEVE ter uma representação única e inequívoca. Quando dois caminhos de código fazem a mesma coisa, eles devem compartilhar uma função, uma variável ou uma constante. Se uma alteração em um bloco exige uma alteração idêntica em outro, a duplicação é um bug prestes a acontecer.

### Princípio da Responsabilidade Única (Single Responsibility Principle)

Funções, módulos e arquivos DEVEM ter apenas um motivo para mudar. Uma função que realiza configuração E relatórios, ou parsing E validação, tem duas responsabilidades e DEVE ser dividida. Em caso de dúvida, pergunte: "se os requisitos mudarem, essas duas operações mudariam de forma independente?" Se sim, divida. Se não, mantenha juntas.

### Nomenclatura de Variáveis

Nomes de variáveis DEVEM transmitir intenção ou propósito, não descrever o conteúdo. Nomes de variáveis de uma única letra NÃO DEVEM ser usados.

### Nomenclatura de Funções

Nomes de funções NÃO DEVEM embutir nomes de infraestrutura ou ferramentas (ex: `resolveOpencodeConfigPath`). Use termos genéricos que descrevam a função (`resolveSupportedCliConfigPath`). A função deve sobreviver a uma troca de ferramenta sem precisar de renomeação.

### Tratamento de Erros

Erros DEVEM sempre ser logados. Um erro que passa sem uma entrada de log é uma falha silenciosa. O tratamento depende do contexto — se o erro não for crítico, ele pode ser logado e não propagado, mas nunca deve ser engolido silenciosamente.

### Fronteira de Confiança de Dados (Data Trust Boundary)

Dados vindos de fora do código — entrada do usuário, resultados de banco de dados, respostas de API, variáveis de ambiente, conteúdo de arquivos — DEVEM ser tratados como não confiáveis, independentemente da origem. Uma linha de banco de dados não é mais segura do que um parâmetro de consulta; ambos podem carregar payloads de injeção, valores malformados ou estado obsoleto.

Dados externos que fluem diretamente para consultas, templates, comandos ou operações de domínio sem validação DEVEM ser sinalizados. O padrão recomendado é converter dados externos em um objeto de valor (ou representação tipada equivalente da linguagem) antes do uso na lógica de negócio — o constructor ou factory se torna o ponto único de validação.

### Testes

Lógica complexa DEVE ter testes unitários. Mensagens de erro de teste DEVEM ser descritivas e fornecer contexto. Segredos, certificados e chaves privadas NÃO DEVEM ser codificados rigidamente (hardcoded) em testes.

Os testes DEVEM ser independentes — cada teste configura e desmonta seu próprio estado. Testes que dependem da ordem de execução ou de estado mutável compartilhado falham silenciosamente quando paralelizados ou reordenados.

Os testes DEVEM verificar o comportamento (entrada para saída), não detalhes de implementação. Um teste que quebra quando os internos são refatorados sem alterar o comportamento é um fardo de manutenção, não uma rede de segurança.

### Comentários

Comentários DEVEM ser tratados como um "code smell". Se um bloco precisa de um comentário para ser entendido, revise a lógica primeiro — o próprio código pode precisar ser mais claro. Comentários são aceitáveis apenas quando a lógica não pode falar por si mesma.

## Justificativa

Essas convenções produzem código que é lido de forma linear, nomes que comunicam intenção e testes que explicam falhas. Elas reduzem a carga cognitiva durante a revisão e tornam as bases de código navegáveis tanto por humanos quanto por agentes que chegam sem contexto prévio.
