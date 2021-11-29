import {fromJS} from 'immutable';
import { constants } from './index';

const defaultState=fromJS({
    dynamics:[],
    zan:0,
    comment:0,
    buy:0,
    bgimgs:[],
    price:0
});

let func=(state=defaultState,action)=>{
    switch(action.type){
        case constants.GET_DYNAMICS:
            let zan=0,comment=0,buy=0;
            action.data.toJS().forEach(element => {
                zan+=element.good;
                comment+=element.comment;
                buy+=element.buy;
            });
            return state.merge({
                "dynamics":action.data,
                "zan":zan,
                "comment":comment,
                "buy":buy,
                "bgimgs":action.bgimgs
            });
        case constants.CHANGE_MORE_DATA:
            return state.merge({
                zan:action.zan,
                comment:action.comment,
                buy:action.buy
            });
        case constants.CREATE_DYNAMICS:
            const obj={
                id:state.get('dynamics').size,
                headerImg:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2026729911,4250545773&fm=26&gp=0.jpg',
                content:action.comment,
                imgs:action.imgs,
                scan:0,
                good:0,
                comment:0,
                buy:0,
                buy_link:action.buy_link,
                time:action.time,
                price:action.price
            };

            console.log(action.buy_link);
            let newArr=JSON.parse(JSON.stringify(state));
            newArr.dynamics.unshift(obj);
            return fromJS(newArr);
        case constants.CHANGE_INTEGRATE:
            return state.set("buy",state.get('buy')+20);
        case constants.UPDATE_PRICE:
            return state.set("price",action.data);

        default:return state;
    }
}

export default func;