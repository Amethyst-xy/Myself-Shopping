import {constants} from './index';
import axios from 'axios';
import { fromJS } from 'immutable';

const getSelectData=(data)=>({
    type:constants.SELECT_LIST_DATA,
    data
});

const getBannerData=(data)=>({
    type:constants.GET_BANNER_DATA,
    data:fromJS(data)
});

const getContentData=(goods,advertisement,selling_list,buyer_news,liveInfo)=>({
    type:constants.GET_CONTENT_DATA,
    goods:fromJS(goods),
    advertisement,
    selling_list:fromJS(selling_list),
    buyer_news:fromJS(buyer_news),
    liveInfo:fromJS(liveInfo)
});

export const getSelectAction=()=>{
    return (dispatch)=>{
        axios.get('/api/selectlist.json').then((res)=>{
            dispatch(getSelectData(res.data.list));
        }).catch(()=>alert('err!'));
    }
};

export const getFocusAction=(num,data)=>({
    type:constants.HANDLE_FOCUS,
    data,
    num
});

export const getMouseinAction=(num,data)=>({
    type:constants.HANDLE_MOUSE_IN,
    num,
    data
});

export const getIndexAction=(data)=>({
    type:constants.CHANGE_INDEX,
    data
});

export const getTimerAction=(data)=>({
    type:constants.SET_TIMER,
    data
});

export const getBannerAction=()=>{
    return (dispatch)=>{
        axios.get('/api/banners.json').then((res)=>{
            const data=res.data.banners;
            dispatch(getBannerData(data));
        }).catch(()=>alert('error!'));
    }
};

export const getContentAction=()=>{
    return (dispatch)=>{
        axios.get('/api/content.json').then((res)=>{
            const data=res.data;
            dispatch(getContentData(data.goods,data.advertisement,data.selling_list,data.buyer_news,data.liveInfo));
        }).catch(()=>alert('error!'));
    }
};

export const changeBrandAction=(value,data)=>({
    type:constants.GET_BRAND,
    value,
    data
});

export const postSelectInfoAction=(v1,v2,v3,v4,v5)=>({
    type:constants.POST_SELECT_INFO,
    v1,
    v2,
    v3,
    v4,
    v5
});


