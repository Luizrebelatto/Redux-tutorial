# Redux Tutorial

## Actions
- A única maneira do aplicativo interagir com a store
- Carregam algumas informações do aplicativo para a redux store
- Simples object javascript
- Deve ter uma prop `type` que indica a ação que será executada
- Esses `types` são determinados como constantes string<br/>
    ```
    const BUY_CAKE = "BUY_CAKE";
    ```
- precisamos criar uma função para executar essa ação
    chamamos de criador de ação
    
    ```
    function buyCake() {
        return {
            type: BUY_CAKE,
            info: "First redux action",
        }
    }
    ```s

## Reducers
- Especificam como o estado dos aplicativos muda em resposta as ações enviadas para store
- É uma função que aceita `state` e `action` como argumento e retorna o próximo state da aplicação 
- Representação simples 
````
(previousState, action) => new state
```
- Representãção reducer
```
const reducer = (state = initialState, action: IAction) => {
    switch(action.type) {
        case EnumAction.BUY_CAKE: return {
            // esse spread operator esta aqui para criar uma copia dos dados
            ...state, 
            numOfCakes: state.numOfCakes - 1 
        }
         
        default: return state;
    }
}
```