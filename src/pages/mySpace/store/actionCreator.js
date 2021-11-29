import {constants} from './index';
import axios from 'axios';
import { fromJS } from 'immutable';

const getMySpace=(order,attention,dynamics,scanned)=>({
    type:constants.GET_ORDER_INFO, 
    order:fromJS(order),
    attention:fromJS(attention),
    dynamics:fromJS(dynamics),
    scanned:fromJS(scanned)
});

export const getOrderAction=()=>{
    return (dispatch)=>{
        axios.get('/api/mySpace.json').then((res)=>{
            dispatch(getMySpace(res.data.order,res.data.attention,res.data.dynamics,res.data.scanned));
        }).catch(()=>alert('error!'));
    }
}
