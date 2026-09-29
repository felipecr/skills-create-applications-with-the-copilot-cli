## Passo 3: Expandir a Funcionalidade da Calculadora

Joãozinho quer expandir a calculadora com operações adicionais, criando uma nova issue e trabalhando com o Copilot CLI para implementar essas melhorias.

### 📖 Teoria: Desenvolvimento Iterativo com o Copilot CLI

#### Mantendo o Ritmo com o Copilot CLI

A versão standalone do Copilot CLI ajuda a manter o ritmo de desenvolvimento ao:

- Gerar código rapidamente para novos recursos usando os modelos de IA mais recentes
- Sugerir melhores práticas e padrões
- Ajudar a depurar e testar novas funcionalidades
- Reduzir a troca de contexto, mantendo você no terminal
- Lidar com comandos shell de longa duração de forma mais eficiente
- Suportar automação aprimorada com o modo headless `-p`

#### Delegando Tarefas Maiores

Para tarefas mais complexas, você pode usar o comando `/delegate`, como no exemplo abaixo, para delegar o trabalho ao Copilot coding agent:

> ```bash
> copilot
> ```
>
> ```text
> /delegate Adicione funções de modulo, exponentiation e square root ao calculator.js com o tratamento de erro adequado
> ```

O Copilot coding agent irá:

1. Criar uma nova branch automaticamente
2. Abrir um pull request em modo draft
3. Trabalhar na tarefa de forma autônoma
4. Exibir a saída no seu terminal
5. Solicitar sua revisão quando concluir a tarefa

> [!NOTE]
> Usar o comando `/delegate` com o Copilot Coding Agent (CCA) consumirá requisições premium da sua assinatura do GitHub Copilot. O Copilot CLI também pode ser usado com modelos regulares, que não consomem requisições premium.

#### Fluxos de Trabalho de Teste e Melhoria

À medida que você adiciona recursos, o Copilot CLI pode ajudar você a:

- Gerar casos de teste para novas operações
- Sugerir casos extremos a considerar
- Criar documentação
- Refatorar o código para melhorar a manutenção
- Salvar e compartilhar suas sessões de desenvolvimento usando `/share`

> [!IMPORTANT]
> Se você reiniciou seu codespace, pode ser necessário executar `copilot --allow-all --enable-all-github-mcp-tools` e, em seguida, autenticar-se novamente com o GitHub executando `!gh auth login` de dentro da sessão do Copilot CLI.

> [!NOTE]
> A opção `--allow-all` no Copilot CLI habilita todas as permissões de uma vez:
> é equivalente a `--allow-all-tools`, `--allow-all-paths` e `--allow-all-urls`.
> Isso permite que o CLI acesse qualquer caminho de arquivo, use qualquer ferramenta e acesse qualquer URL sem solicitar confirmação.
> Use com cautela, pois concede ao CLI acesso total e capacidades de automação.

### ⌨️ Atividade: Adicionar Mais Operações à Calculadora

1. Inicie uma sessão interativa do Copilot CLI, caso ainda não esteja em uma:

   > ![Static Badge](https://img.shields.io/badge/Terminal-text?logo=gnometerminal&labelColor=0969da&color=ddf4ff)
   >
   > ```bash
   > copilot --allow-all --enable-all-github-mcp-tools
   > ```

1. Peça ao Copilot CLI para ajudar você a criar outra issue para expandir a calculadora:

   > ![Static Badge](https://img.shields.io/badge/CLI-Prompt-text?style=flat-square&logo=github-copilot&labelColor=8250df&color=fbefff)
   >
   > ```prompt
   > Crie uma GitHub issue para uma aplicação de calculadora CLI em Node.js usando o template feature_request.md
   > em formato Markdown.
   > Eu quero solicitar um recurso para adicionar mais operações, incluindo
   > - modulo
   > - exponentiation (power)
   > - square root
   > Crie a issue diretamente para o owner e o repositório atuais nesta sessão no github.com usando os comandos da `gh` CLI.
   > Liste o link da issue quando ela estiver pronta
   > ```

1. Trabalhe com o Copilot CLI para implementar as novas operações:

   > ![Static Badge](https://img.shields.io/badge/CLI-Prompt-text?style=flat-square&logo=github-copilot&labelColor=8250df&color=fbefff)
   >
   > ```prompt
   > Adicione estas funções ao meu calculator.js existente com base na última issue criada:
   > 1. modulo(a, b) - retorna o resto da divisão de a por b
   > 2. power(base, exponent) - retorna a base elevada a exponent
   > 3. squareRoot(n) - retorna a raiz quadrada de n com tratamento de erro para números negativos
   > ```

   1. Opcionalmente, use o modo headless:

      > ![Static Badge](https://img.shields.io/badge/CLI-Prompt-text?style=flat-square&logo=github-copilot&labelColor=8250df&color=fbefff)
      >
      > ```prompt
      > copilot -p "Adicione estas funções ao meu calculator.js existente com base na última issue criada:
      > 1. modulo(a, b) - retorna o resto da divisão de a por b
      > 2. power(base, exponent) - retorna a base elevada a exponent
      > 3. squareRoot(n) - retorna a raiz quadrada de n com tratamento de erro para números negativos"
      > ```

1. Teste as novas funções e adicione testes:

   > ![Static Badge](https://img.shields.io/badge/CLI-Prompt-text?style=flat-square&logo=github-copilot&labelColor=8250df&color=fbefff)
   >
   > ```prompt
   > Adicione testes para as novas operações da calculadora:
   > - Expanda os testes com base no seguinte exemplo:
   >   - @images/calc-extended-operations.png
   > - Adicione novos testes para as novas operações no arquivo existente src/tests/calculator.test.js
   > - Use um framework de testes Node.js popular se nenhum estiver instalado
   > - Certifique-se de incluir testes para casos extremos, como square root de números negativos
   > - Certifique-se de que todos os testes executem e passem
   > ```

1. Faça commit das alterações:

   > ![Static Badge](https://img.shields.io/badge/CLI-Prompt-text?style=flat-square&logo=github-copilot&labelColor=8250df&color=fbefff)
   >
   > ```prompt
   > Adicione todos os arquivos da calculadora e de testes ao git.
   > Faça commit com a mensagem "Implemented additional calculator operations and tests: 
   > modulo, power, square root" 
   > Faça push das alterações
   > ```

1. Aguarde um momento para a Mona verificar seu trabalho, fornecer feedback e compartilhar a próxima lição.

> [!TIP]
> Use `/share gist` na sua sessão do Copilot CLI para salvar sua sessão do exercício GitHub Skills como um GitHub gist para referência futura!

<details>
<summary>Está com problemas? 🤷</summary><br/>

- Certifique-se de que o título da sua issue inclua "Calculator" ou "Operations"
- O arquivo calculator.js deve exportar funções que possam ser importadas
- Você pode testar operações manualmente usando o Node.js REPL: `node` e depois digite seu código
- Para raiz quadrada de números negativos, considere retornar `NaN` ou lançar um erro
- Lembre-se de fazer commit e push de qualquer alteração de código que você fizer
- Use `copilot --help` para ver todas as opções de comando disponíveis

</details>
