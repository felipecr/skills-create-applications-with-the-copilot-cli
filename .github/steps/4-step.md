## Passo 4: Criar, Revisar e Fazer Merge do Seu Pull Request

Joãozinho está pronto para finalizar o trabalho de desenvolvimento criando um pull request, vinculando-o às duas issues, obtendo uma revisão do Copilot e fazendo o merge das alterações, tudo pela linha de comando com o Copilot CLI.

### 📖 Teoria: Pull Requests e Code Review com o Copilot CLI

#### Entendendo Pull Requests (PRs)

Pull requests são a forma padrão de propor alterações no desenvolvimento colaborativo:

- Permitem que os membros da equipe revisem o código antes do merge
- Mantêm um histórico de alterações e decisões
- Podem ser vinculados a issues para melhor acompanhamento do projeto
- Habilitam testes automatizados e validação por meio de CI/CD

#### Conectando PRs a Issues

Vincular pull requests a issues ajuda no gerenciamento do projeto:

- Fecham issues automaticamente quando o PR recebe merge
- Fornece rastreabilidade entre itens de trabalho e alterações de código
- Ajuda a acompanhar o progresso ao longo do ciclo de desenvolvimento
- Melhora a comunicação da equipe sobre o que está sendo construído

#### Code Review com Assistência de IA

O GitHub Copilot pode atuar como revisor para:

- Sugerir melhorias na qualidade do código
- Identificar bugs potenciais ou casos extremos
- Recomendar melhores práticas e padrões de design
- Fornecer feedback construtivo sobre a implementação

O Copilot CLI permite que você:

- Criar pull requests diretamente do terminal
- Solicite revisões do Copilot ou de membros da equipe
- Faça merge de alterações sem sair do CLI
- Automatize todo o fluxo de trabalho para iteração mais rápida

#### Referências

- [Creating Pull Requests with GitHub CLI](https://cli.github.com/manual/gh_pr_create)
- [Linking Issues and PRs](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue)
- [GitHub Copilot as a Code Reviewer](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/request-a-code-review/use-code-review)

> [!IMPORTANT]
> Se você reiniciou seu codespace, pode ser necessário executar `copilot --allow-all` e, em seguida, autenticar-se novamente com o GitHub executando `!gh auth login` no seu terminal ou de dentro da sessão do Copilot CLI.

### ⌨️ Atividade: Completar Seu Fluxo de Trabalho de Pull Request

1. Inicie uma sessão interativa do Copilot CLI, caso ainda não esteja em uma sessão:

   > ![Static Badge](https://img.shields.io/badge/Terminal-text?logo=gnometerminal&labelColor=0969da&color=ddf4ff)
   >
   > ```bash
   > copilot --allow-all --enable-all-github-mcp-tools
   > ```

2. Crie um pull request para suas alterações e adicione o Copilot como revisor:

   > ![Static Badge](https://img.shields.io/badge/CLI-Prompt-text?style=flat-square&logo=github-copilot&labelColor=8250df&color=fbefff)
   >
   > ```prompt
   > Crie um pull request a partir da branch atual com o título "Add calculator enhancements"
   > e uma descrição que inclua as principais alterações: operações básicas da calculadora e funcionalidade
   > expandida com modulo, power e square root. Certifique-se de adicionar @copilot como reviewer
   > e solicitar uma review no PR.
   > Liste o link do PR quando ele estiver pronto
   > ```

3. Vincule o pull request às duas issues que você criou anteriormente:

   > ![Static Badge](https://img.shields.io/badge/CLI-Prompt-text?style=flat-square&logo=github-copilot&labelColor=8250df&color=fbefff)
   >
   > ```prompt
   > Vincule o pull request que acabei de criar às duas issues "Create a calculator" e
   > "Add more operations" para que sejam fechadas automaticamente quando o merge for feito.
   > ```

1. Faça merge do pull request após a revisão do Copilot ser concluída:

   > ![Static Badge](https://img.shields.io/badge/CLI-Prompt-text?style=flat-square&logo=github-copilot&labelColor=8250df&color=fbefff)
   >
   > ```prompt
   > Faça merge do pull request e feche as issues vinculadas
   > ```

> [!NOTE]
> Quando você faz merge de um PR que está vinculado a issues usando "Closes #<issue-number>",
> o GitHub fecha automaticamente essas issues. A opção squash merge mantém o histórico
> da branch main limpo.

4. Verifique se as duas issues agora estão fechadas:

   > ![Static Badge](https://img.shields.io/badge/CLI-Prompt-text?style=flat-square&logo=github-copilot&labelColor=8250df&color=fbefff)
   >
   > ```prompt
   > Liste as issues fechadas no repositório para confirmar que as duas issues "Create a calculator"
   > e "Add more operations" estão agora fechadas.
   > ```

5. Aguarde um momento para a Mona verificar seu trabalho, fornecer feedback e compartilhar a próxima lição.

> [!TIP]
> Use `/share gist` na sua sessão do Copilot CLI para salvar a sessão do exercício GitHub Skills
> como um GitHub gist para documentação e referência futura.

<details>
<summary>Está com problemas? 🤷</summary><br/>

- Certifique-se de ter feito commit e push de todas as alterações antes de criar o PR
- Verifique sua autenticação do GitHub com `gh auth status` ou `!gh auth status` no Copilot CLI
- Se a criação do PR falhar, verifique se você está em uma branch diferente de main/master
- Para vincular manualmente uma issue, edite a descrição do PR para incluir "Closes #<issue-number>"
- Você pode ver os detalhes do PR com `!gh pr view` ou `!gh pr list` para ver seus PRs
- Para issues que não forem fechadas automaticamente, vincule-as manualmente na interface web do GitHub
- Lembre-se de verificar se a revisão do Copilot foi enviada antes de fazer o merge
- Use `!gh pr merge --squash` para fazer o merge com um histórico limpo

</details>
