# Módulo API — LionsDev

Material didático para introdução a **APIs REST** com **Node.js** e **Express**. Este repositório faz parte das aulas da **LionsDev** e serve como base prática para os alunos entenderem como criar e executar um servidor HTTP simples.

> **Aviso:** Este projeto é exclusivamente para fins educacionais dos alunos da LionsDev. Não representa um produto em produção.

---

## Sobre o repositório

Aqui você encontra uma API mínima em Express que expõe rotas HTTP básicas. O objetivo é mostrar, de forma direta:

- Como subir um servidor na porta **3000**
- Como definir rotas com `app.get()`
- Como responder requisições com `res.send()`

O código principal está em `src/index.js`.

### Rotas disponíveis

| Método | Rota     | Resposta              |
|--------|----------|------------------------|
| GET    | `/`      | `Hello World`          |
| GET    | `/users` | `new users route`      |

---

## Pré-requisitos

Antes de começar, instale no seu computador:

- [Node.js](https://nodejs.org/) (versão LTS recomendada — inclui o `npm`)
- Um editor de código (por exemplo, VS Code ou Cursor)
- Terminal (Prompt, PowerShell, iTerm, etc.)

Para conferir se o Node está instalado:

```bash
node -v
npm -v
```

---

## Passo a passo para executar

### 1. Clonar ou baixar o projeto

Se você recebeu o repositório via Git:

```bash
git clone https://github.com/FilipePaixao/modulo-api-lions-dev
cd modulo-api
```

Se baixou um `.zip`, extraia a pasta e abra o terminal dentro dela.

### 2. Instalar as dependências

Na raiz do projeto (onde está o `package.json`):

```bash
npm install
```

Isso instala o **Express** (framework web) e o **Nodemon** (reinicia o servidor automaticamente ao salvar alterações).

### 3. Iniciar o servidor

```bash
npm start
```

Você deve ver no terminal algo como:

```text
Server is running on port 3000
```

### 4. Testar no navegador ou no terminal

Abra no navegador:

- http://localhost:3000/
- http://localhost:3000/users

Ou use o `curl` no terminal:

```bash
curl http://localhost:3000/
curl http://localhost:3000/users
```

### 5. Parar o servidor

No terminal onde o servidor está rodando, pressione **Ctrl + C**.

---

## Estrutura do projeto

```text
modulo-api/
├── src/
│   └── index.js      # Servidor Express e rotas
├── package.json      # Dependências e script de start
├── package-lock.json
└── README.md
```

---

## Scripts disponíveis

| Comando      | Descrição                                      |
|--------------|------------------------------------------------|
| `npm start`  | Sobe o servidor com Nodemon em `src/index.js`  |

---

## Próximos passos (sugestão de estudo)

- Adicionar novas rotas (`POST`, `PUT`, `DELETE`)
- Retornar JSON em vez de texto simples (`res.json()`)
- Organizar rotas em arquivos separados (pastas `routes/` ou `controllers/`)
- Conectar a um banco de dados ou lista em memória

---

## LionsDev

Este material foi preparado para apoiar o aprendizado dos alunos da **LionsDev**. Use-o para experimentar, quebrar, corrigir e evoluir — é assim que a API deixa de ser abstrata e vira prática.

Dúvidas em aula? Leve o erro do terminal, o trecho de código e a rota que você estava testando. Isso acelera muito o suporte.
