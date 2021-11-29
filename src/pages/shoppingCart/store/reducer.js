import {fromJS} from 'immutable';
import { constants } from './index';

const defaultState=fromJS({
    goodsInfo:[],
    totalMoney:'0.00',
    isShowPay:false,
    checked_num:0,
    total_goods:0
});

const reducer=(state=defaultState,action)=>{
    switch(action.type){
        case constants.GET_CART_INFO:
            var newState=JSON.parse(JSON.stringify(state));
            newState.total_goods=action.data.size;
            action.data.map((item)=>{
                return newState.goodsInfo.unshift(item);
            });
            return fromJS(newState);
        case constants.ADD_GOODS_TO_CART:
            var newState1=JSON.parse(JSON.stringify(state));
            newState1.goodsInfo.unshift(action.data);
            return fromJS(newState1);
        case constants.INPUT_ON_CHECKED:
            switch(action.value){
                case 1:
                    return state.merge({
                        "totalMoney":(Number(state.get('totalMoney'))+Number(action.data)).toFixed(2),
                        checked_num:action.checked_num
                    });
                case 2:
                    return state.merge({
                        "totalMoney":(Number(state.get('totalMoney'))-Number(action.data)).toFixed(2),
                        checked_num:action.checked_num
                    });
                default:
                    return state.merge({
                        "totalMoney":action.data,
                        checked_num:action.checked_num
                    });
            }
        case constants.SHOW_PAY_PAGE:
            return state.set("isShowPay",action.data);
        case constants.CHANGE_SHOW_ITEM:
            let newArr=JSON.parse(JSON.stringify(state));
            let arr=newArr.goodsInfo.splice(action.id,1);
            arr[0].choosed=action.data;
            newArr.goodsInfo.splice(action.id,0,...arr);
            return fromJS(newArr);

        case constants.CHANGE_TOTAL_GOODS:
            return state.set("total_goods",action.data);
        case constants.CLEAR_SHOPPING_CART:
            return state.set("goodsInfo",fromJS([]));
            
        default:return state;
    }
}

export default reducer;