# Agentes de IA - Arquitetura Multi-Persona

Personas são papéis especializados para IA. A representação de papéis é importante pois diferentes perspectivas desencadeiam diferentes padrões de raciocínio.

## Personas Disponíveis

- [**Maestro**](./maestro.md): Orquestra o fluxo de trabalho, distribuindo tarefas entre as personas a partir da demanda inicial.
- [**Architect**](./architect.md): O estrategista técnico e designer de sistemas, responsável por planejar soluções e definir a arquitetura.
- [**Coder**](./coder.md): O implementador focado em qualidade e padrões.
- [**Reviewer**](./reviewer.md): Responsável pela revisão de código, assegurando qualidade e conformidade com as convenções do projeto.
- [**Contextualizer**](./contextualizer.md): O mantenedor da documentação e histórico.

## Modelo de Execução

As personas funcionam apenas como subagentes, nunca como o agente principal. A exceção é o maestroa, que é apersona principal, que orquestra todas as outras.

## Estrutura de Metadados

Cada arquivo de agente (`.md`) deve obrigatoriamente iniciar com um bloco de metadados em YAML para facilitar o roteamento de contexto pela IA:

```yaml
---
nome: Nome único da persona
tipo: Categoria funcional (ex: Orquestrador, Arquiteto, Desenvolvedor)
descricao: Resumo técnico do propósito do agente
humor: Tom de voz e traços de personalidade
---
```
