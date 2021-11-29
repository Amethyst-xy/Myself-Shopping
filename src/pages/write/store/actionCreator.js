import {constants} from './index';
import axios from 'axios';
import { fromJS } from 'immutable';

const getDynamicData=(data,bgimgs)=>({
    type:constants.GET_DYNAMICS,
    data:fromJS(data),
    bgimgs:fromJS(bgimgs)
});

export const getDynamicAction=()=>{
    return (dispatch)=>{
        axios.get('/api/write.json').then((res)=>{
            dispatch(getDynamicData(res.data.dynamics,res.data.bgimgs));
        }).catch(()=>alert('error!'));
    }
}

export const getCreateDynamicsAction=(comment,imgs,buy_link,time,price)=>({
    type:constants.CREATE_DYNAMICS,
    comment,
    imgs,
    buy_link,
    time,
    price
});

export const getChangeIntegrateAction=()=>({
    type:constants.CHANGE_INTEGRATE
});

export const updatePrice=(data)=>({
    type:constants.UPDATE_PRICE,
    data
});