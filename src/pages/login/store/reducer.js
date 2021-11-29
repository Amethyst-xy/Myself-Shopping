import {fromJS} from 'immutable';
import { constants } from '.';

const defaultState=fromJS({
    isLogin:true,
    username:'',
    password:'',
    loginStatus:false
});

let func=(state=defaultState,action)=>{
    switch(action.type){
        case constants.CHANGE_LOGIN_OR_REGISTER:
            return state.set('isLogin',action.data);
        case constants.CHECK_USER_INFO:
            return state.set("loginStatus",action.data);
        case constants.GET_INPUT_DATA:
            if(action.value===1)
                return state.set("username",action.data);
            if(action.value===2)
                return state.set("password",action.data);
            break;
        default:return state;
    }
}

export default func;