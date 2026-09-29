## Passo 2: Trabalhar na Issue da Calculadora com o Copilot CLI

Com a issue criada, Joãozinho trabalha de forma interativa com a versão standalone do Copilot CLI para começar a construir a aplicação de calculadora.

### 📖 Teoria: Desenvolvimento Colaborativo com o Copilot CLI

#### Desenvolvimento Interativo com o Copilot CLI

A versão standalone do Copilot CLI (comando `copilot`) oferece uma experiência interativa robusta para o desenvolvimento:

- Inicie uma sessão simplesmente executando `copilot` no seu terminal
- Tenha conversas naturais sobre seu código e obtenha sugestões inteligentes
- Gere código inicial com base nos seus requisitos
- Use os modelos de IA mais recentes para obter respostas de ponta
- `/share [file|gist] [path]` - Compartilhe a sessão em um arquivo Markdown ou em um GitHub gist

#### Custom Agents

O Copilot CLI oferece suporte a custom agents que podem ser definidos no seu repositório:

- Crie perfis de agentes no diretório `.github/agents/`
- Defina prompts especializados, seleções de ferramentas e fluxos de trabalho
- Invoque agentes usando o comando `/agent <name>`
- Eles são úteis para documentação, infraestrutura, segurança ou tarefas específicas de domínio

#### Delegando Tarefas

Quando você tiver tarefas maiores, pode delegá-las ao Copilot coding agent:

- Use `/delegate TASK-DESCRIPTION` para atribuir trabalho
- O Copilot cria uma nova branch e um pull request em modo draft
- O coding agent trabalha de forma autônoma em background
- Revise as alterações quando estiverem concluídas

> [!NOTE]
> Referências:
>
> - [Using GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-copilot-cli)
> - [Custom agents in Copilot CLI](https://github.blog/changelog/2025-10-28-github-copilot-cli-use-custom-agents-and-delegate-to-copilot-coding-agent/)
> - [About custom agents](https://docs.github.com/en/copilot/concepts/agents/coding-agent/about-custom-agents)

> [!IMPORTANT]
> Se você reiniciou seu codespace, pode ser necessário executar `copilot --allow-all --enable-all-github-mcp-tools` e, em seguida, autenticar-se novamente com o GitHub executando `!gh auth login` no Copilot CLI.

### ⌨️ Atividade: Criar uma Nova Branch para a Aplicação Calculadora

1. Inicie uma nova sessão interativa do Copilot CLI, fechando a sessão anterior com `/exit`:

   > ![Static Badge](https://img.shields.io/badge/Terminal-text?logo=gnometerminal&labelColor=0969da&color=ddf4ff)
   >
   > ```bash
   > copilot --allow-all --enable-all-github-mcp-tools
   > ```

> [!NOTE]
> A opção `--allow-all` no Copilot CLI habilita todas as permissões de uma vez:
> é equivalente a `--allow-all-tools`, `--allow-all-paths` e `--allow-all-urls`.
> Isso permite que o CLI acesse qualquer caminho de arquivo, use qualquer ferramenta e acesse qualquer URL sem solicitar confirmação.
> Use com cautela, pois concede ao CLI acesso total e capacidades de automação.

2. Crie e faça push de uma nova branch chamada `create-calc-app`:

   > ![Static Badge](https://img.shields.io/badge/CLI-Prompt-text?style=flat-square&logo=github-copilot&labelColor=8250df&color=fbefff)
   >
   > ```prompt
   > Crie e faça push de uma nova branch chamada 'create-calc-app'
   > ```

<details>
<summary>Está com problemas? 🤷</summary><br/>

Use o comando `!` no Copilot CLI para executar comandos shell diretamente da sua sessão de chat. Por exemplo, para criar a branch e fazer push sem sair do chat:

 ```prompt
 !git checkout -b create-calc-app && git push -u origin create-calc-app
 ```

 Verifique a branch atual depois:

 ```prompt
 !git branch --show-current
 ```
</details>

### ⌨️ Atividade: Gerar Código da Calculadora com o Copilot CLI Baseado em uma Imagem

1. Peça ao Copilot CLI para ajudar você a criar as funções da calculadora com base na imagem e na issue do GitHub criada anteriormente:

   > ![Static Badge](https://img.shields.io/badge/CLI-Prompt-text?style=flat-square&logo=github-copilot&labelColor=8250df&color=fbefff)
   >
   > ```prompt
   > @images/js-calculator.png me ajude a criar uma aplicação de calculadora CLI em Node.js 
   > baseada apenas nas quatro operações matemáticas básicas nesta imagem e descritas
   > na issue mais recente deste owner/repository.
   > Crie o código e coloque-o no diretório 'src'.
   > Certifique-se de que a calculadora esteja comentada com as operações que ela suporta.
   > ```

   1. Opcionalmente, use o modo headless com um prompt:

      > ![Static Badge](https://img.shields.io/badge/Terminal-text?logo=gnometerminal&labelColor=0969da&color=ddf4ff)
      >
      > ```bash
      > copilot -p "@images/js-calculator.png me ajude a criar uma aplicação de calculadora CLI em Node.js 
      > baseada apenas nas quatro operações matemáticas básicas nesta imagem e descritas
      > na issue mais recente deste owner/repository.
      > Crie o código e coloque-o no diretório 'src'.
      > Certifique-se de que a calculadora esteja comentada com as operações que ela suporta."
      > ```

> [!NOTE]
   > Embora este exemplo use a imagem de uma calculadora web em JavaScript, ele demonstra como você pode usar arquivos, incluindo imagens, com o Copilot CLI para fornecer contexto às suas solicitações.

2. Execute e teste as funções da calculadora pedindo ao Copilot CLI:

   > ![Static Badge](https://img.shields.io/badge/CLI-Prompt-text?style=flat-square&logo=github-copilot&labelColor=8250df&color=fbefff)
   >
   > ```prompt
   > Execute e teste as funções da calculadora com alguns exemplos de operações 
   > mostrados na imagem @images/calc-basic-operations.png.
   > ```

3. Peça ao Copilot CLI para criar testes abrangentes para as funções da calculadora:

   > ![Static Badge](https://img.shields.io/badge/CLI-Prompt-text?style=flat-square&logo=github-copilot&labelColor=8250df&color=fbefff)
   >
   > ```prompt
   > Crie testes unitários abrangentes para todas as funções da calculadora:
   > - Expanda os testes com base no seguinte exemplo:
   >   - @images/calc-basic-operations.png
   > - Adicione esses testes em um arquivo src/tests/calculator.test.js
   > - Use um framework de testes Node.js popular se nenhum estiver instalado
   > - Inclua addition, subtraction, multiplication e division
   > - Teste casos extremos, como division by zero
   > - Certifique-se de que todos os testes executem e passem
   > ```

> [!NOTE]
> Pressione `ctrl+o` para ver a saída dos testes executados pelo Copilot CLI e que foram aprovados.
  
4. Quando estiver satisfeito com o código, faça commit das alterações pelo Copilot CLI:

   > ![Static Badge](https://img.shields.io/badge/CLI-Prompt-text?style=flat-square&logo=github-copilot&labelColor=8250df&color=fbefff)
   >
   > ```prompt
   > Adicione todos os arquivos da calculadora e de testes ao git.
   > Faça commit com a mensagem "Implement basic calculator operations and tests:
   > addition, subtraction, multiplication, division"
   > Faça push das alterações
   > ```

5. Aguarde um momento para Mona verificar seu trabalho, fornecer feedback e compartilhar a próxima lição.

> [!TIP]
> Você pode colar ou arrastar e soltar imagens no Copilot CLI para fornecer contexto visual para suas perguntas!

> [!NOTE]
> Fazer push das suas alterações acionará o workflow para verificar seu trabalho e preparar o próximo passo.

<details>
<summary>Está com problemas? 🤷</summary><br/>

- Certifique-se de estar no diretório do repositório ao executar comandos
- O comando `copilot` requer que o Node.js 22+ esteja instalado
- Se a autenticação falhar, execute `copilot` e siga os prompts de login
- Você também pode editar o arquivo calculator.js manualmente com base nas sugestões do Copilot
- Lembre-se de exportar suas funções usando `module.exports`

</details>
