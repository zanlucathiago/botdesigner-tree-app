# Documentação do App

Este é um aplicativo desenvolvido utilizando Yarn, Vite, React, Eslint, Tailwind, Typescript, etc. Ele permite criar nós encadeados clicando nos botões de "+", assim como mover os nós para os sinais de "+".

## Scripts

### `dev`

Executa o aplicativo no modo de desenvolvimento utilizando o Vite.

```shell
yarn dev
```

### `build`

Compila o aplicativo utilizando o TypeScript e o Vite.

```shell
yarn build
```

### `lint`

Executa a análise estática do código utilizando o Eslint, verificando a conformidade com as regras definidas.

```shell
yarn lint
```

### `preview`

Executa o aplicativo no modo de visualização utilizando o Vite.

```shell
yarn preview
```

### `build-css`

Compila o arquivo CSS do Tailwind a partir do arquivo de entrada `src/index.css`, gerando o arquivo de saída `css/main.css`.

```shell
yarn build-css
```

### `watch-css`

Compila o arquivo CSS do Tailwind em modo de observação (watch mode), atualizando automaticamente o arquivo de saída `css/main.css` sempre que houver alterações no arquivo de entrada `src/index.css`.

```shell
yarn watch-css
```

## Como Usar

1. Instale as dependências do projeto:

```shell
yarn
```

2. Execute o aplicativo no modo de desenvolvimento:

```shell
yarn dev
```

Isso iniciará o aplicativo e você poderá acessá-lo em `http://localhost:5173`.

## Funcionalidades

- Criação de nós encadeados.
- Movimentação dos nós de um nó pai para outro.

## Licença

Este projeto está licenciado sob a licença [MIT](LICENSE).
# botdesigner-tree-app

Observação: Ficou faltando muitas funcionalidades. Faltou adicionar o jest e escrever testes unitários, faltou publicar no Netlify (ficaria beeem legal), faltou permitir excluir, movimentar para outro node, exibir tracejado ao soltar o item após arrastar, etc. Porém foi o que consegui fazer com o tempo, obrigado pela oportunidade de participar do teste!

```code
   /\_/\
  ( o.o )
   > ^ <
```

Feito com <3 por Thiago Zanluca
