# Aula 1 
- yarn dev => cria o localhost. No angular é igual o npm start
- Recebi um desenho no figma. O que fazer? Primeiro verificar o que se repete em termos mais amplos e aplicar o fundo. Por exemplo se a tela é dividida em várias 'box', primeiro vamos criar essas boxs ou separações.


## Aprendizados
- **useState()** => Muito utilizado no react mais atual. Ele foi implementado na versão 16.8. Antes para fazer a mesma coisa era um pouco mais verboso.
  - **Como usar:** `const: [variavel, setvariavel] = useState('')`
  - **Quais argumentos?** Apenas um que é o seu estado inicial (que seria a variável[0]). Pode ser qualquer coisa - uma string, um objeto ou um array.
  - **Qual retorno?**  2 coisas - o estado atual e uma função que atualiza o state. Por isso as variável [variavel, setvariavel]. O set é convenção.
  - Exemplo prático: utilizamos o useState no projeto para quando a pessoa clicar em criar comunidade atualizar a foto nas comunidades. Numa SPA o site não é carregado