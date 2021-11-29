import {constants} from './index';
import axios from 'axios';
import { fromJS } from 'immutable';

const getSearchData=(data)=>({
    type:constants.GET_SEARCH_DATA,
    data:fromJS(data)
});

export const getSearchAction=(value)=>{
    return (dispatch)=>{
        axios.get('/api/searchResult.json').then((res)=>{
            const data=res.data;
            dispatch(getSearchData(data['searchResult'+value]));
        }).catch(()=>alert('error!'));
    }
};

export const getLoadAction=(data)=>({
    type:constants.SET_LOAD_STATUS,
    data
});
