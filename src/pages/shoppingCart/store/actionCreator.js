import {constants} from './index';
import axios from 'axios';
import { fromJS } from 'immutable';

const getCartData=(data)=>({
    type:constants.GET_CART_INFO,
    data:fromJS(data)
});

export const getCartAction=()=>{
    return (dispatch)=>{
        axios.get('/api/goodsItem.json').then((res)=>{
            dispatch(getCartData(res.data.goodsInfo));
        }).catch(()=>alert('error!'));
    }
}

export const getAddToCartAction=(data)=>({
    type:constants.ADD_GOODS_TO_CART,
    data
});

export const getInputChecked=(value,data,checked_num)=>({
    type:constants.INPUT_ON_CHECKED,
    data,
    value,
    checked_num
});

export const getShowPayAction=(data)=>({
    type:constants.SHOW_PAY_PAGE,
    data
});

export const getShowLink=(data)=>({
    type:constants.SHOW_LINK,
    data
});

export const getChangeShowItemAction=(id,data)=>({
    type:constants.CHANGE_SHOW_ITEM,
    id,
    data
});

export const getChangeTotalAction=(data)=>({
    type:constants.CHANGE_TOTAL_GOODS,
    data
});

export const getClearCartAction=()=>({
    type:constants.CLEAR_SHOPPING_CART
});