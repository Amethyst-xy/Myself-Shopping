import {fromJS} from 'immutable';
import { constants } from '.';

const defaultState=fromJS({
    order:[],
    attention:[],
    dynamics:[],
    scanned:[],
});

let reducer=(state=defaultState,action)=>{
    switch(action.type){
        case constants.GET_ORDER_INFO:
            return state.merge({
                "order":action.order,
                "attention":action.attention,
                "dynamics":action.dynamics,
                "scanned":action.scanned
            });
            
        default:return state;
    }
}

export default reducer;