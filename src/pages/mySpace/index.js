import React,{Component,Fragment} from 'react';
import Header from '../../common/header';
import ContentRight from './contentRight';
import '../home/components/contentRightStyle.less';
import './style.less';

class MySpace extends Component{
    render(){
        return (
            <Fragment>
                <Header/>
                <div className='header_nav1'>
                    <p className='logo1'>Myself</p>
                    <li>首页</li>
                    <li style={{"position":"relative"}}><i className='iconfont' 
                        style={{"fontSize":"30px","color":"#f5f5f5","position":"absolute","bottom":"-34px","left":"40px"}}
                    >&#xe60f;</i>个人空间</li>

                    <p className='searchBar'>
                        <input placeholder='请输入...'/>
                        <i className='iconfont'>&#xe729;</i>
                    </p>
                </div>
                <div className='content_wrapper1'>
                    <div className='content_area1'>
                        <p className='home'><span>首页</span> &gt; <span>我的空间</span></p>
                        <div className='content_left1'>
                            <div className='animate__fadeInLeft animate__animated content_left1'>
                                <p className='title'>我的空间</p>
                                <li>
                                    <p className='mtitle'>我的消息</p>
                                    <p>消息中心(2)</p>
                                    <p>活动推送</p>
                                </li>
                                <li>
                                    <p className='mtitle'>订单中心</p>
                                    <p>我的订单</p>
                                    <p>我的动态</p>
                                    <p>商品评价/追评</p>
                                    <p>我评价过</p>
                                </li>
                                <li>
                                    <p className='mtitle'>我的资产</p>
                                    <p>我的积分</p>
                                    <p>我的优惠券</p>
                                    <p>我的代金券</p>
                                    <p>等级与特权</p>
                                </li>
                                <li>
                                    <p className='mtitle'>设置</p>
                                    <p>个人设置</p>
                                    <p>安全设置</p>
                                </li>
                                <li>
                                    <p className='mtitle'>帮助中心</p>
                                </li>
                            </div>
                            <div className='animate__fadeInLeft animate__animated tools_wrapper1'>
                            <div className='toolsbox'>
                                <a href='./'>
                                    <i className='iconfont smaller'>&#xe85a;</i><br/>
                                    联系客服    
                                </a>
                                <a href='./'>
                                    <i className='iconfont'>&#xe600;</i><br/>
                                    购物车    
                                </a>
                                <a href='./'>
                                    <i className='iconfont smaller'>&#xe66e;</i><br/>
                                    返回顶部    
                                </a>
                            </div>
                            </div>
                        </div>
                        <ContentRight/>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default MySpace;