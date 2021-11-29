import React,{Component,Fragment} from 'react';
import Header from '../../common/header';
import '../../static/animate.css';
import {connect} from 'react-redux';
import { actionCreator } from './store';
import url from'../../static/settleAccount.png';
import {Link} from 'react-router-dom';
import $ from 'jquery';
import {actionCreator as detaiActionCreator} from '../../pages/detail/store';
import {Carousel} from 'antd';
import './style.less';

class ShoppingCart extends Component{
    constructor(props){
        super(props);
        this.handleChangeStyle=this.handleChangeStyle.bind(this);
        this.handleSettleAccounts=this.handleSettleAccounts.bind(this);
        this.handleSearch=this.handleSearch.bind(this);
    }
    render(){
        const {total_goods,checked_num,isShowPay,goodsInfo,totalMoney,handleChangeShowPay,handleGetDetail}=this.props;
        
        return (
            <Fragment>
                {
                    isShowPay ? 
                    <div className='settle_accounts_c'>
                        <div className='animate__animated animate__zoomIn account_wrapper_c'>
                            <img src={url} alt=''/>
                            <div className='right'>
                                <p className='pay'>向卖家付款<span>￥{totalMoney}</span></p>
                                <p>付款方式</p>
                                <p>
                                    <i className='iconfont wx'>&#xe68a;</i>
                                    <i className='iconfont zfb'>&#xe68b;</i>
                                </p>
                                <p>支付后即可查看动态详情~</p>
                                <div className='btn'>
                                    <button onClick={()=>{handleChangeShowPay(false); this.handleSettleAccounts(true)}}>已支付</button>
                                    <button onClick={()=>{handleChangeShowPay(false); this.handleSettleAccounts(false)}}>取消</button>
                                </div>
                            </div>
                        </div>
                    </div> : null
                }
                <Header/>
                <div className='search_wrapper'>
                    <div className='logo_cart_c'><span>Myself</span>购物车</div>
                    <div className='search_box'>
                    <i className='iconfont zoom'>&#xe729;</i>
                    <input placeholder="请在此输入" className='search_input'/>
                    <span className='search_btn' onClick={this.handleSearch}>搜索</span>
                    <i className='iconfont photo'>&#xe672;</i>
                    </div>
                </div>
                <div className='content_wrapper_c'>
                    <div className="whole_goods_c">
                        <div className='goods_header_c'>
                            <p className='whole'>全部商品 <span className='count'>{total_goods}</span></p>
                            <p className='choose'>已选商品 <span>{totalMoney}</span> <span className='pay' onClick={()=>{handleChangeShowPay(true,totalMoney)}}>结算</span></p>
                        </div>
                        <div className='goods_info_c'>
                            <li className='left'><input type='checkbox' className='selectAll'/>全选</li>
                            <li className='left'>商品信息</li>
                            <li className='right'>操作</li>
                            <li className='right'>金额</li>
                            <li className='right'>单价</li>
                            <li className='right'>身材信息</li>
                        </div>
                        {
                            goodsInfo.map((item)=>{
                                return (
                                    <div key={item.get('id')} className='checkbox_list goods_item_c'>
                                        <p>卖家: {item.get('saler')}</p>
                                        <div className='detail_info_c'>
                                            <div className='dis_count_c'>
                                                <i className='iconfont'>&#xe60f;</i>
                                                <span className='discount'>卖家优惠</span>
                                                <span>{item.get('discount')}</span>
                                            </div>
                                            <div className='info_c'>
                                                <input type='checkbox' id={item.get('id')} price={item.get('nowprice')} 
                                                onClick={this.handleChangeStyle}
                                                />
                                                <Carousel autoplay dots={false} className='carousel_small' autoplaySpeed={2500} easing='ease-in' effect='fade'>
                                                {
                                                    item.get('showimgs').map((i)=>{
                                                        return <img src={i} alt='' key={i}/>
                                                    })
                                                }
                                                </Carousel>
                                                <p className='goods_info_c'><span>{item.get('desc')}</span><br/>颜色分类：{item.get('color')}<br/>尺码：{item.get('size')}</p>
                                            </div>
                                            <div className='stature_c'>
                                                <p>身高：{item.get('height')}cm</p>
                                                <p>体重：{item.get('weight')}kg</p>
                                                <p>三围：{item.get('one')}cm {item.get('two')}cm {item.get('three')}cm</p>
                                            </div>
                                            <div className='price_c'>
                                                <li className='pre'>￥{item.get('preprice')}</li>
                                                <li className='now'>￥{item.get('nowprice')}</li>
                                                <li className='add'>{item.get('up_down')}</li>
                                            </div>
                                            <div className='money_c'>
                                            {
                                                item.get('choosed') ? <Link to='/detail:1' 
                                                    onClick={()=>{handleGetDetail(goodsInfo.toJS()[goodsInfo.toJS().length-1-item.get('id')])}}>
                                                <p className='to_detail'>动态详情</p></Link> :
                                                <p>￥{item.get('nowprice')}</p>
                                            }
                                            </div>
                                            <div className='operation_c'>
                                                <li>删除</li>
                                                <li>更多动态</li>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                        
                    </div>
                </div> 
                <div className='footer_c'>
                    <li className='left'><input type='checkbox' className='selectAll'/>全选</li>
                    <li className='left'>删除</li>
                    <li className='left'>清空</li>
                    <li className='left'>分享</li>
                    <li className='right banlance' onClick={()=>{handleChangeShowPay(true,totalMoney)}}>结算</li>
                    <li className='right'>合计：<span>{totalMoney}</span></li>
                    <li className='right'>已选择商品<span>{checked_num}</span>件</li>
                </div>
            </Fragment>
        );
    }

    componentDidMount(){
        if(this.props.goodsInfo.size===0){
            this.props.handleGetCartData();
        }
        this.handleChangeCheck();
    }

    handleChangeCheck(){
        var that=this;

        setTimeout(()=>{
            $(".selectAll").on('click',function(){
                $(".checkbox_list input").prop("checked",$(this).prop("checked"));
                $(".selectAll").prop("checked",$(this).prop("checked"));
    
                const len=$(".checkbox_list input").length;
                let total=0;
                for(let i=0;i<len;i++){
                    total+=Number($(".checkbox_list input").get(i).getAttribute('price'));
                }
                if($(this).prop('checked')){
                    that.props.handleChecked(3,total,len);
                }
                else{
                    that.props.handleChecked(3,0,0);
                }
            });

            $(".checkbox_list input").on('click',function(){
                if($(".checkbox_list input:checked").length===$(".checkbox_list input").length){
                    $(".selectAll").prop("checked",true);
                }else{
                    $(".selectAll").prop("checked",false);
                }
    
                let price=$(this).get(0).getAttribute('price');
                if($(this).prop("checked")){
                    that.props.handleChecked(1,price,that.props.checked_num+1);
                }else{
                    that.props.handleChecked(2,price,that.props.checked_num-1);
                }
            });
        },10);
    }

    handleChangeStyle(e){
        this.changeBackground(e.target.parentNode.parentNode);
    }

    changeBackground(obj){
        if(obj.style.background){
            obj.style.background=null;
        }else{
            obj.style.background='rgba(100,59,255,0.1)';
        }
    }

    handleSettleAccounts(value){
        $(".checkbox_list input:checked").each((index,elem)=>{
            this.props.handleShowLink(this.props.goodsInfo.toJS().length-1-elem.getAttribute('id'),value);
        });

        this.props.handleChecked(3,0,0);
        $('.selectAll,.checkbox_list input').prop("checked",false);
    }

    handleSearch(){
        let value=$('.search_input').val();
        let num=$('.checkbox_list').hide().filter(":contains('"+value+"')").show().length;
        this.props.handleChangeTotal(num);
    }
}

const mapState=(state)=>{
    return {
        goodsInfo:state.getIn(['cart','goodsInfo']),
        totalMoney:state.getIn(['cart','totalMoney']),
        isShowPay:state.getIn(['cart','isShowPay']),
        showLink:state.getIn(['cart','showLink']),
        checked_num:state.getIn(['cart','checked_num']),
        total_goods:state.getIn(['cart','total_goods'])
    }
}

const mapDispatch=(dispatch)=>{
    return {
        handleGetCartData(){
            dispatch(actionCreator.getCartAction());
        },
        handleChecked(choice,value,num){
            dispatch(actionCreator.getInputChecked(choice,value,num));
        },
        handleChangeShowPay(value,money){
            if(parseInt(money)===0){
                alert('请选择商品~');
            }else{
                dispatch(actionCreator.getShowPayAction(value));
            }
        },
        handleShowLink(id,value){
            dispatch(actionCreator.getChangeShowItemAction(id,value));
        },
        handleGetDetail(value){
            dispatch(detaiActionCreator.getDetailAction(value));
        },
        handleChangeTotal(value){
            dispatch(actionCreator.getChangeTotalAction(value));
        }
    }
}

export default connect(mapState,mapDispatch)(ShoppingCart); 