import {fromJS} from 'immutable';
import { constants } from '.';

const defaultState=fromJS({
    searchResult:[],
    loadOver:false
});

const func=(state=defaultState,action)=>{
    switch(action.type){
        case constants.GET_SEARCH_DATA:
            return state.merge({
                "searchResult":action.data,
                "loadOver":true
            });
        case constants.SET_LOAD_STATUS:
            return state.set("loadOver",action.data);

        default:return state;
    }
}

export default func;