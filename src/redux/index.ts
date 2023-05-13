import { IAction, EnumAction } from "./types";


function buyCake(){
    return {
        type: EnumAction.BUY_CAKE,
        info: 'First redux action',
    }
};

const initialState = {
    numOfCakes: 10
};

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