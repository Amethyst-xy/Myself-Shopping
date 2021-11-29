import {fromJS} from 'immutable';
import {constants} from './index';

const defaultState=fromJS({
    isinMyself:false,
    isFocus:false,
    isMouseIn:false,
    selectList:[],
    timer:null,
    index:1,
    banners:[],
    goods:[],
    advertisement:'',
    selling_list:[],
    buyer_news:[],
    liveInfo:[],
    brand:[],
    height:0,
    weight:0,
    v1:0,
    v2:0,
    v3:0
});

let func=(state=defaultState,action)=>{
    switch(action.type){
        case constants.SELECT_LIST_DATA:
            return state.set('selectList',action.data);
        case constants.HANDLE_FOCUS:
            if(action.num===1){
                return state.set('isinMyself',action.data);
            }
            else if(action.num===3){
                return state.set('isFocus',action.data);
            }
            break;
        case constants.HANDLE_MOUSE_IN:
            if(action.num===1){
                return state.set('ismousein1',action.data);
            }
            else if(action.num===2){
                return state.set('ismousein2',action.data);
            }
            else if(action.num===3){
                return state.set('isMouseIn',action.data);
            }
            break;
        case constants.CHANGE_INDEX:
            return state.set('index',action.data);
        case constants.SET_TIMER:
            return state.set('timer',action.data);
        case constants.GET_BANNER_DATA:
            return state.set('banners',action.data);
        case constants.GET_CONTENT_DATA:
            return state.merge({
                "goods":action.goods,
                "selling_list":action.selling_list,
                "advertisement":action.advertisement,
                "buyer_news":action.buyer_news,
                "liveInfo":action.liveInfo
            });
        case constants.GET_BRAND:
            let newState=JSON.parse(JSON.stringify(state));
            if(action.value===1){
                newState.brand.push(action.data);
            }else if(action.value===2){
                newState.brand.pop();
            }
            return fromJS(newState);
        case constants.POST_SELECT_INFO:
            return state.merge({
                "height":action.v1,
                "weight":action.v2,
                "v1":action.v3,
                "v2":action.v4,
                "v3":action.v5
            });
        default:return state;
    }
}

export default func;