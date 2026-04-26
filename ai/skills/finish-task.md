---
nome: Finish Task
descricao: Procedimento obrigatório para finalização de tarefas (linting e formatação).
usado_por: [coder, reviewer]
---

# Skill: Finalização de Tarefa (Finish Task)

Este skill define o procedimento obrigatório que todos os agentes devem seguir antes de marcar uma tarefa como concluída. O objetivo é garantir que o código entregue esteja limpo, formatado e livre de erros básicos.

## Fluxo de Trabalho

1.  **Validar Formatação:**
    Execute o comando de formatação para garantir que o código segue as regras do Prettier.

    ```bash
    npm run format
    ```

2.  **Validar Linting:**
    Execute o comando de lint para verificar se há violações de regras de estilo ou erros em potencial.

    ```bash
    npm run lint
    ```

3.  **Tratamento de Erros:**
    - Se qualquer um dos comandos acima falhar, você **DEVE** analisar a saída do erro.
    - Corrija os problemas no código de forma cirúrgica.
    - Execute os comandos novamente até que ambos passem sem erros.

4.  **Conclusão:**
    A tarefa só pode ser considerada finalizada após a execução bem-sucedida de ambos os comandos (ou se o projeto não possuir esses scripts definidos no `package.json`).
