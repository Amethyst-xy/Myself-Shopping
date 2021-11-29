import React,{Component} from 'react';
import {connect} from 'react-redux';
import {actionCreator} from './store';
import './style.less';
import './rightStyle.less';

import {
    GoodsItem,
    DetailInfo,
    DisCount,
    Info,
    Money,
    Operation,
} from '../shoppingCart/style';

class RightArea extends Component{
    render(){
        const {order,attention,scanned,dynamics} =this.props;
        return (
            <div className='right_wrapper1'>
                <div className='animate__animated animate__fadeInDown right_header1'>
                    <li className='user'>
                        <img src='https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2026729911,4250545773&fm=26&gp=0.jpg' alt=''/>
                        <div>
                            <p className='title'>Amethyst紫宣</p>
                            <p><i className='iconfont'>&#xe621;</i><span className='process'/><span>0/100</span></p>
                            <p className='degree'><span className='vip'>会员权益</span><span className='account'>账号中心</span></p>
                        </div>
                    </li>
                    <li>
                        <p className='title'>0</p>
                        <p>积分</p>
                        <p className='scan'>去查看</p>
                    </li>
                    <li>
                        <p className='title'>0</p>
                        <p>优惠券</p>
                        <p className='scan'>去查看</p>
                    </li>
                    <li>
                        <p className='title'>0.00</p>
                        <p>代金券</p>
                        <p className='scan'>去查看</p>
                    </li>
                    <li>
                        <p className='title'>0</p>
                        <p>特权</p>
                        <p className='scan'>去查看</p>
                    </li>
                </div>
                <div className='right_middle1'>
                    <div className='animate__animated animate__fadeInDown order_wrapper1'>
                        <div className='part_title1'>我的订单</div>
                        {
                            order.map((item)=>{
                                return (
                                    <GoodsItem key={item.get('id')}>
                                        <DetailInfo>
                                            <DisCount>
                                                <i className='iconfont' style={{"color":"#fff"}}>&#xe60f;</i>
                                                <span className='discount'>卖家优惠</span>
                                                <span>{item.get('discount')}</span>
                                            </DisCount>
                                            <Info>
                                                <img src={item.get('imgUrl')} alt=''></img>
                                                <p className='goods_info'><span>{item.get('desc')}</span><br/>颜色分类：{item.get('color')}<br/>尺码：{item.get('size')}</p>
                                            </Info>
                                            <Money>
                                                <p>￥{item.get('nowprice')}</p>
                                            </Money>
                                            <Operation>
                                                <li>删除</li>
                                                <li>更多动态</li>
                                            </Operation>
                                        </DetailInfo>
                                    </GoodsItem>
                                );
                            })
                        }
                    </div>
                    <div className='fright animate__fadeInRight animate__animated'>
                        <div className='attention_saler1'>
                            <div className='part_title1'>我的关注</div>
                            {
                                attention.map((item)=>{
                                    return (
                                        <div key={item.get('id')} className='attention_item1'>
                                            <img src={item.get('imgUrl')} alt=''/>
                                            <p>{item.get('name')}</p>
                                        </div>
                                    )
                                })
                            }          
                        </div>
                        <div className='animate__fadeInRight animate__animated my_scanned1'>
                            <div className='part_title1'>我浏览过</div>
                            {
                                scanned.map((item)=>{
                                    return (
                                        <div key={item.get('id')} className='attention_item1'>
                                            <img src={item.get('imgUrl')} alt=''/>
                                            <p>{item.get('name')}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                </div>
                <div className='animate__animated animate__fadeInDown my_dynamics'>
                    <div className='part_title1'>最新动态</div>
                    {
                        dynamics.map((item)=>{
                            return (
                                <div key={item.get('id')} className='dynamic_item'>
                                    <div className='header'>
                                        <img src={item.get('headerImg')} alt=''/>
                                        <p>Amethyst紫宣<br/><span>{item.get('time')}</span></p>
                                    </div>
                                    <p className='comment'>{item.get('content')}</p>
                                    <div className='imgBox'>
                                        {
                                            item.get('imgs').map((initem,index)=>{
                                                return <img src={initem} alt='' key={index}/>
                                            })
                                        }
                                    </div>
            
                                    <p className='more'>
                                        <span>浏览{item.get('scan')}次</span>
                                        <span className='right'><i className='iconfont'>&#xe747;</i>购买 {item.get('buy')}</span>
                                        <span className='right'><i className='iconfont'>&#xe601;</i>评论 {item.get('comment')}</span>
                                        <span className='right'><i className='iconfont'>&#xe64b;</i>点赞 {item.get('good')}</span>
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }

    componentDidMount(){
        this.props.handleMySpaceData();
    }
}

const mapState=(state)=>{
    return {
        order:state.getIn(['mySpace','order']),
        attention:state.getIn(['mySpace','attention']),
        dynamics:state.getIn(['mySpace','dynamics']),
        scanned:state.getIn(['mySpace','scanned'])
    }
}

const mapDispatch=(dispatch)=>{
    return {
        handleMySpaceData(){
            dispatch(actionCreator.getOrderAction());
        }
    }
}

export default connect(mapState,mapDispatch)(RightArea);