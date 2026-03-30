# Expo SQLite Login

Sistema de login e cadastro local feito com **React Native**, **Expo Router** e **SQLite**, utilizando banco de dados local para armazenar usuários. Possui telas de login e cadastro com validação de campos e componentes reutilizáveis.

---

## Tecnologias

- React Native
- Expo Router
- Expo SQLite
- TypeScript
- StyleSheet
- Componentes personalizados (`Button`, `Input`)

---

## Estrutura do projeto
```text
├─ .expo/               # Arquivos e configurações gerados pelo Expo
├─ .vscode/             # Configurações do workspace no VS Code
├─ assets/              # Imagens, fontes e recursos estáticos
├─ node_modules/        # Dependências instaladas do projeto
├─ src/                 # Código-fonte principal da aplicação
│  ├─ app/              # Telas da aplicação (login, signup)
│  ├─ components/       # Botões, Inputs e outros componentes reutilizáveis
│  ├─ database/         # Inicialização e hooks do SQLite
│  └─ layout/           # Layout base da aplicação
├─ .gitignore           # Arquivos e pastas ignorados pelo Git
├─ app.json             # Configurações do aplicativo (nome, ícone, splash)
├─ expo-env.d.ts        # Tipagens TypeScript para o ambiente Expo
├─ package-lock.json    # Árvore de versões exatas das dependências
├─ package.json         # Informações do projeto, dependências e scripts
├─ README.md            # Documentação principal do projeto
├─ tailwind.config.js   # Configurações de estilo e tema do Tailwind CSS
└─ tsconfig.json        # Configurações do compilador TypeScript
```

---

## Funcionalidades

- Cadastro de usuários com validação de campos
- Login com verificação de e-mail e senha
- Redirecionamento após login bem-sucedido
- Alertas de erro ou sucesso
- Componentes reutilizáveis para consistência visual

---

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seuusuario/expo-sqlite-login.git
```

2. Instale as dependências:
   
```bash
cd expo-sqlite-login
npm install
```

3. Execute com Expo:

```bash
npx expo start
```

## Uso

- Login: insira e-mail e senha cadastrados.
- Cadastro: preencha todos os campos e confirme a senha.
- Após login, você será redirecionado para a tela Home.

---

## Telas do Aplicativo

## Telas do Aplicativo

| Login | Cadastro | Home |
| :---: | :---: | :---: |
| <img src="https://github.com/user-attachments/assets/be4814cc-fd5f-43d1-b156-46276ede7afc" width="250"/> | <img src="https://github.com/user-attachments/assets/324dfc6e-6488-4a20-9bc1-48f24172c25d" width="250"/> | <img src="https://github.com/user-attachments/assets/994a6c8f-638d-4b30-8f10-29cf678a4203" width="250"/> |

---

## Observações:
- Banco local: dados persistem apenas no dispositivo.

---

## Melhorias Futuras:
- Validação com JWT.
- Integração com API externa.

