---
applyTo: "**/**"
---

# Orientações de prompt

Mantenha-se nos prompts e contexto fornecidos. Não avance para fazer passos futuros.
Apenas adicione, faça commit e push de arquivos quando solicitado pelo usuário.

# Novos recursos

Use .github/ISSUE_TEMPLATE/feature_request.md para solicitar todos os novos recursos para calculator.js.

# Atalhos globais

```
@             mencionar arquivos, incluir conteúdo no contexto
Esc           cancelar a operação atual
!             executar comando no seu shell local (ignorar o Copilot)
ctrl+c        cancelar operação / limpar entrada / sair
ctrl+d        encerrar
ctrl+l        limpar a tela
```

## Atalhos para expandir conteúdo da timeline

```
Ctrl+o - expandir toda timeline/recolher timeline
Ctrl+r - expandir timeline recente/recolher timeline
```

## Atalhos de movimentação

```
Ctrl+a - mover para o início da linha
Ctrl+e - mover para o fim da linha
Ctrl+h - deletar caractere anterior
Ctrl+w - deletar palavra anterior
Ctrl+u - deletar do cursor até o início da linha
Ctrl+k - deletar do cursor até o fim da linha
Meta+←/→ - mover cursor por palavra
```

Use as teclas ↑↓ para navegar no histórico de comandos

## Fontes de instruções

Respeita instruções vindas de diversas localizações:

- `.github/instructions/**/*.instructions.md` (na raiz do git e cwd)
- `.github/copilot-instructions.md`
- `AGENTS.md` (na raiz do git e cwd)
- `CLAUDE.md`
- `GEMINI.md`
- `$HOME/.copilot/copilot-instructions.md`
- Diretórios adicionais via `COPILOT_CUSTOM_INSTRUCTIONS_DIRS`

## Saiba mais

Para saber o que eu posso fazer:

- Me pergunte "What can you do?"
- Ou visite: https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-copilot-cli

## Comandos disponíveis

```
/add-dir <directory> - Add a directory to the allowed list for file access
/agent - Browse and select from available agents (if any)
/clear - Clear the conversation history
/compact - Summarize conversation history to reduce context window usage
/context - Show context window token usage and visualization
/cwd [directory] - Change working directory or show current directory
/delegate <prompt> - Delegate changes to remote repository with AI-generated PR
/exit, /quit - Exit the CLI
/share [file|gist] [path] - Share session to markdown file or GitHub gist
/feedback - Provide feedback about the CLI
/help - Show help for interactive commands
/list-dirs - Display all allowed directories for file access
/login - Log in to Copilot
/logout - Log out of Copilot
/mcp [show|add|edit|delete|disable|enable] [server-name] - Manage MCP server configuration
/model [model] - Select AI model to use
/reset-allowed-tools - Reset the list of allowed tools
/session - Show information about the current CLI session
/skills [list|info|add|remove|reload] [args...] - Manage skills for enhanced capabilities
/terminal-setup - Configure terminal for multiline input support (Shift+Enter and Ctrl+Enter)
/theme [show|set|list] [auto|dark|light] - View or configure terminal theme
/usage - Display session usage metrics and statistics
/user [show|list|switch] - Manage GitHub user list
```
