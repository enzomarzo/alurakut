
# Summary
 - creating an react app with next.js
 - using a Figma layout to create our front-end
 - Why and How to use **useState** and **useEffect** from React
 - Using DatoCMS (a back-end as a service) and GraphQL to create and use our database
 - Using datocms-client to send information to the database
 - Training to use .fetch and async/await to consume our API


 

# Aula 1 
- yarn dev => cria o localhost. No angular é igual o npm start
- Recebi um desenho no figma. O que fazer? Primeiro verificar o que se repete em termos mais amplos e aplicar o fundo. Por exemplo se a tela é dividida em várias 'box', primeiro vamos criar essas boxs ou separações.

# Aula 2
- Focada em useState 
- Usando o Dato (que seria um back-end as a service)

# Aula 4
- Como funciona o GraphQL
- Datocms-client (yarn add datocms-client)

# Aula 5
- O Next JS já trabalha internamente com rotas (não precisa importar o modulo de rotas)
- Criação/validação do login

## Aprendizados
- **useState()** => Muito utilizado no react mais atual. Ele foi implementado na versão 16.8. Antes para fazer a mesma coisa era um pouco mais verboso.
  - **Como usar:** `const: [variavel, setvariavel] = useState('')`
  - **Quais argumentos?** Apenas um que é o seu estado inicial (que seria a variável[0]). Pode ser qualquer coisa - uma string, um objeto ou um array.
  - **Qual retorno?**  2 coisas - o estado atual e uma função que atualiza o state. Por isso as variável [variavel, setvariavel]. O set é convenção.
    - Exemplo prático: utilizamos o useState no projeto para quando a pessoa clicar em criar comunidade atualizar a foto nas comunidades. Numa SPA o site não é carregado
  - Dato CMS => Gerenciador de conteúdo.
  - Github API => api.github.com 
    - api.github.com/myuser => Acesso um Json com várias informações da minha conta


Dentro do componente/função 'ProfileRelationsBox'  eu tentei tirar o comentário da <ul> pra poder reutilizar essa <ul> nas 3 boxes. 

Eu coloquei o `<img src={props.url}/>` . O problema é que na hora de passar esse parâmetro no  `<ProfileRelationsBox image=` ele não me deixa utilizar o 


## a fazer 
- arrumar a chamada de comunidades na home
- colocar os seguidores com as fotos
- fazer o logout do usuario
- /users => pegar a informação dos usuários
- 