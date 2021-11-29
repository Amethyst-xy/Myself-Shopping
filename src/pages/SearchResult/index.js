import React,{Component,Fragment} from 'react';
import Header from '../../common/header';
import Search from '../home/components/searchBox';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Carousel} from 'antd';
import '../home/components/contentLeftStyle.less';
import '../home/components/contentRightStyle.less';
import './style.less';

import { actionCreator } from './store';
import {actionCreator as cartActionCreator} from '../shoppingCart/store';

class SearchGoods extends Component{
    render(){
        const {total_goods,searchResult,loadOver,handleAddGoods,loginStatus}=this.props;
        return (
            <Fragment>
                <Header/>
                <div className='header_box_s'>
                    <span className='logo_s'>Myself</span>
                    <div className='list_sort options_s'>
                        <li>排序方式</li>
                        <li>价格</li>
                        <li>销量</li>
                        <li>评价</li>
                    </div>
                    <Search/>
                </div>
                {
                    loadOver ? 
                    <div className='content_wrapper_s'>
                    <div className='content_title_s'>搜索结果如下~</div>
                    <div className='goods_wrapper_s'>
                    <div className='newsWrapper newswrapper'>
                            {
                                searchResult.map((item)=>{
                                    return (
                                        <div className='newsitem' key={item.get('id')}>
                                            <div className='newsitemleft'>
                                                <Carousel autoplay dots={false} className='carousel_small' autoplaySpeed={2500} easing='ease-in' effect='fade'>
                                                    {
                                                        item.get('showimgs').map((i)=>{
                                                            return <img src={i} alt='' key={i}/>
                                                        })
                                                    }
                                                </Carousel>
                                            </div>
                                            <div className='newsitemright'>
                                                <p className='comment'>{item.get('comment')}</p>
                                                {
                                                    item.get('images').map((initem)=>{
                                                        return  <div key={initem} className='gaussian_blur' style={{
                                                            "background":"url('"+initem+"') no-repeat",
                                                            "backgroundSize":"100% 100%",
                                                            }}>
                                                            <p style={{"backdropFilter":"blur(10px)","width":"100%","height":"100%"}}></p>
                                                        </div>
                                                    })
                                                }
                                                <p className='desc'>{item.get('type')}<span>￥{item.get('nowprice')}</span></p>
                                                
                                                {
                                                    loginStatus ? <span onClick={()=>{handleAddGoods(item,total_goods)}}>+购物车</span> :
                                                    <span><Link to='./login:1' style={{"color":"#fff"}}>+购物车</Link></span>
                                                }
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div> : <div className='div_s'>Loading...</div>
                }
            </Fragment>
        );
    }

    componentDidMount(){
        this.props.handleGetContentData(1);
        let liObjs=document.querySelector('.list_sort').querySelectorAll('li');
        let that=this;
        for(let i=1;i<liObjs.length;i++){
            liObjs[i].onclick=()=>{
                that.props.handleGetContentData(i);
            }
        }
    }
}

const mapState=(state)=>{
    return {
        searchResult:state.getIn(['search','searchResult']),
        loadOver:state.getIn(['search','loadOver']),
        loginStatus:state.getIn(['login','loginStatus']),
        total_goods:state.getIn(['cart','total_goods'])
    }
}

const mapDispatch=(dispatch)=>{
    return {
        handleGetContentData(value){
            dispatch(actionCreator.getLoadAction(false));
            setTimeout(()=>{
                dispatch(actionCreator.getSearchAction(value));
            },340);
        },
        handleAddGoods(item,value){
            alert('添加成功！请在购物车查看~');
            dispatch(cartActionCreator.getChangeTotalAction(value+1));
            dispatch(cartActionCreator.getAddToCartAction(item));
        }
    }
}

export default connect(mapState,mapDispatch)(SearchGoods);