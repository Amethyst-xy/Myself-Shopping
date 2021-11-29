import {fromJS} from 'immutable';
import {constants} from './index';

const defaultState=fromJS({
    imgs:[],
    title:'',
    headerImg:'',
    header_name:'',
    time:'',
    desc:'',
    buy_link:''
});

let func=(state=defaultState,action)=>{
    switch(action.type){
        case constants.GET_DETAIL_DATA:
            let arr=[];
            arr.push(action.data.imgUrl);
            arr.push(action.data.img2);
            arr.push(action.data.img3);
            return state.merge({
                "imgs":fromJS(arr),
                "title":action.data.desc,
                "headerImg":action.data.headUrl,
                "header_name":action.data.saler,
                "time":action.data.time,
                "desc":action.data.description,
                "buy_link":action.data.buy_link
            });
        default: return state;
    }
}

export default func;