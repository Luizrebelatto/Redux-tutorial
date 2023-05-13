# Redux Tutorial

## Actions
- A única maneira do aplicativo interagir com a store
- Carregam algumas informações do aplicativo para a redux store
- Simples object javascript
- Deve ter uma prop `type` que indica a ação que será executada
- Esses `types` são determinados como constantes string<br/>
    `const BUY_CAKE = 'BUY_CAKE';`
- precisamos criar uma função para executar essa ação
    chamamos de criador de ação
    `function buyCake() {
        return {
            type: BUY_CAKE,
            info: 'First redux action',
        }
    }`