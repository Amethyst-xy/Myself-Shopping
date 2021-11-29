import React,{Component} from 'react';
import {connect} from 'react-redux';
import { actionCreators } from '../../pages/home/store';
import {actionCreator} from '../../pages/login/store';
import {Link} from 'react-router-dom';
import {actionCreator as cartActionCreator} from '../../pages/shoppingCart/store';
import "./style.less";

class Header extends Component{
    render(){
        const {loginStatus,inMyself,leaveMyself,isinMyself,handleLogin,logOut}=this.props;
        return (
            <div className='header_wrapper'>
                <div className='header_nav'>
                    <li className='left header_item'><Link to='./'><i className='iconfont'>&#xe69c;</i>欢迎来到Myself~</Link></li>
                    <li className='left header_item' onMouseOver={()=>{handleLogin(true)}}>
                        {
                            loginStatus ? <Link to='/' onClick={logOut}><i className='iconfont'>&#xe61d;</i>退出</Link>:
                            <Link to='/login:1'><i className='iconfont'>&#xe604;</i>登录</Link>
                        }
                    </li>
                    <li className='left header_item' onMouseOver={()=>{handleLogin(false)}}>
                        <Link to='/login:1'><i className='iconfont'>&#xe71c;</i>注册</Link>
                    </li>
                    <li className='right header_item'><a href='./' onClick={(e)=>{e.preventDefault();alert('暂时还没有app哦~');}}>
                        <i className='iconfont'>&#xe61a;</i>
                        下载App</a>
                    </li>
                    <li className='right header_item'>
                        {
                            loginStatus ?
                            <Link to='./write:1'>
                                <i className='iconfont'>&#xe624;</i>
                                发布动态
                            </Link> :
                            <Link to='./login:1'>
                                <i className='iconfont'>&#xe624;</i>
                                发布动态
                            </Link>
                        }
                    </li>
                    <li className='right header_item'>
                        {
                            loginStatus ?
                                <Link to='./shoppingCart:1'>
                                <i className='iconfont'>&#xe600;</i>
                                购物车
                            </Link> :
                            <Link to='./login:1'>
                                <i className='iconfont'>&#xe600;</i>
                                购物车
                            </Link>
                        }
                    </li>
                    {
                        isinMyself ?
                        <li className='right header_item' onMouseOver={inMyself} onMouseLeave={leaveMyself}>
                            <a className="myself" href='./'><i className='iconfont'>&#xe643;</i>Myself<i className='iconfont'>&#xe60f;</i></a>
                            {
                                loginStatus ? 
                                <div className='more_info'>
                                    <Link to='./mySpace:1'>
                                        <p className='headImg'><img src='https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2026729911,4250545773&fm=26&gp=0.jpg' alt=''/>Amethyst紫宣</p>
                                    </Link>
                                    <p>我的订单</p>
                                    <p>关注卖家</p>
                                    <div><span className='left'><Link to='/mySpace:1'>mySpace</Link></span><span className='right' onClick={logOut}>退出&gt;&gt;</span></div>
                                </div>:
                                <div className='more_info'>
                                    <p>未登录</p>
                                    <p><Link to='/login:1'>点击登录</Link></p>
                                </div>
                            }
                        </li> :

                        <li className='right header_item' onMouseOver={inMyself} onMouseLeave={leaveMyself}>
                            <a href='./'><i className='iconfont'>&#xe643;</i>Myself<i className='iconfont'>&#xe60e;</i></a>
                        </li>
                    }
                </div>
            </div>
        );
    }
}

const mapState=(state)=>{
    return {
        isinMyself:state.getIn(['home','isinMyself']),
        loginStatus:state.getIn(['login','loginStatus']),
    }
}

const mapDispatch=(dispatch)=>{
    return {
        handleLogin(value){
            dispatch(actionCreator.getLoginRegisterAction(value));
        },
        inMyself(){
            dispatch(actionCreators.getFocusAction(1,true));
        },
        leaveMyself(){
            dispatch(actionCreators.getFocusAction(1,false));
        },
        logOut(){
            var value=window.confirm('确定要退出吗？');
            if(value){
                dispatch(actionCreator.changeLoginStatus(false));
                dispatch(cartActionCreator.getClearCartAction());
            dispatch(cartActionCreator.getChangeTotalAction(0));
            }
        }
    }
}

export default connect(mapState,mapDispatch)(Header);