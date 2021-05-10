<h1 align="center">
  <Text>The Movie</Text>
</h1>

Aplicativo em desenvolvimento, utilizando MACOS e simulador Iphone 8.


## :low_brightness: Tecnologias

 

Este projeto foi construindo usando o comando "npx react-native init TheMovie" e está sendo desenvolvido com as seguintes tecnologias:

 

-  [React Native][reactnative]: biblioteca Javascript criada pelo Facebook e usada para desenvolver aplicativos para os sistemas Android e iOS de forma nativa.
-  [redux][redux]: biblioteca Javascript que implementa arquitetura Flux, usada para controlar estados globais da aplicação.
-  [redux-saga][saga]: middleware que intercepta Ações.
-  [axios][axios]: usado para ler arquivos json de uma api mockada. 
-  [styled-components][styled]: biblioteca Javascript usada para criação de estilos.
-  [json-server][jsonServer]: servidor local para a api mockada.
-  [VS Code][vc] com [EditorConfig][vceditconfig], [ESLint][vceslint] e [Prettier][prettier]

 

## :information_source: Como usar - MAC

 

Para clonar e rodar esta aplicação, você irá precisar do [Yarn][yarn], versão 1.22.10 ou maior, e do [json-server][jsonServer], versão 0.16.3 ou maior, instalados em seu computador.

 

```
# Clonar este repositório
$ git clone https://github.com/CristianeUliana/TheMovie.git

 

# Entre no repositório
$ cd TheMovie

 

# Instale as dependências
$ yarn install

 

# Rode o app
$ yarn start



# Rode as bases de dados mockadas. Você precisará rodar cada uma em um terminal distinto
$ json-server server.json -p 3000
$ json-server servertv.json -p 8080



# Rode o simulador no terminar do VSCode
$ yarn ios --simulator="iPhone 8"
```

 


 

[reactnative]: https://reactnative.dev/docs/getting-started
[yarn]: https://yarnpkg.com/
[vc]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[prettier]: https://prettier.io/
[redux]: https://redux.js.org/
[axios]: https://www.npmjs.com/package/axios
[styled]: https://styled-components.com/docs
[saga]: https://redux-saga.js.org/
[jsonServer]: https://github.com/typicode/json-server
 
