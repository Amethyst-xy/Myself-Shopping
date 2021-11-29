import React,{Component,Fragment} from 'react';
import {connect} from 'react-redux';
import { actionCreators } from '../store';
import {Link} from 'react-router-dom';
import {actionCreator as cartActionCreator} from '../../shoppingCart/store';
import {Carousel} from 'antd';
import './contentLeftStyle.less';
import './contentRightStyle.less';

const style={
    backdropFilter:"blur(10px)",
    width:"100%",
    height:"100%",
}

class Content extends Component{
    render(){
        const {goods,advertisement,buyer_news,total_goods,liveInfo,loginStatus,handleAddGoods}=this.props;
        return <Fragment>
            <div name='top' className='contentwrapper'>
                <div className='contentarea'>
                    <div className='contentleft'>
                        <div className='titleitem'>热卖商品 HOTGOODS</div>
                        <div className='hotwrapper'>
                            {
                                goods.map((item)=>{
                                    return (
                                        <div key={item.get('id')} className='hotitem'>
                                        <img src={item.get('src')} alt='goods'/>
                                        <p className='title'>{item.get('title')}</p>
                                        <p className='price'>{item.get('price')}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className='titleitem'>卖家动态 BUYER NEWS</div>
                        <div className='newsw'>
                            {
                                buyer_news.map((item)=>{
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
                                                <p className='comment'>{item.get('description')}</p>
                                                {
                                                    item.get('images').map((initem)=>{
                                                        return  <div key={initem} className='gaussian_blur' style={{
                                                            "background":"url('"+initem+"') no-repeat",
                                                            "backgroundSize":"100% 100%",
                                                            }}>
                                                            <p style={style}></p>
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
                    <div className='contentright'>
                        <a href='./' className='adver'><img src={advertisement} alt='adver'/></a>
                        <div className='titleitem'>热销榜 TOP SELLING LIST</div>
                        <div className='sellinglist'>
                            <li>
                                <a href='./' className='first'><i className='iconfont'>&#xe66d;</i>回头率超高连衣裙<i className='iconfont right_icon'>&#xe689;</i></a>
                            </li>
                            <li>
                                <a href='./' className='second'><i className='iconfont'>&#xe66b;</i>小心机印花卫衣<i className='iconfont right_icon'>&#xe834;</i></a>
                            </li>
                            <li>
                                <a href='./' className='third'><i className='iconfont'>&#xe66c;</i>温柔风显瘦针织衫<i className='iconfont right_icon'>&#xe834;</i></a>
                            </li>
                            <li>
                                <a href='./'><i className='listitem'>4</i>日系简约风衣</a>
                            </li>
                            <li>
                                <a href='./'><i className='listitem'>5</i>春游C位连衣裙</a>
                            </li>
                            <li>
                                <a href='./'><i className='listitem'>6</i>早春探店卫衣系列</a>
                            </li>
                            <li>
                                <a href='./'><i className='listitem'>7</i>无性别卫衣穿搭</a>
                            </li>
                            <li>
                                <a href='./'><i className='listitem'>8</i>春夏温柔风卫衣</a>
                            </li>
                        </div>
                        <div className='titleitem'>热门直播 HOT LIVE</div>
                        {
                            liveInfo.map((item)=>{
                                return (
                                    <div className={item.get('className')} id='hotlive' key={item.get('id')}>
                                        <div className='livecontent'>
                                            <p>{item.get('title')}</p>
                                            <p className='desc'><i className='now'>正在直播</i>{item.get('num')}观看</p>
                                            <p className='info'><img src={item.get('src')} alt='headpic'/>{item.get('name')}
                                                <i className='iconfont star'>&#xe617;</i>
                                            </p>
                                        </div>
                                    </div> 
                                )
                            })
                        }
                        <div className='toolsbox'>
                            <a href='./' onClick={()=>{alert('客服暂时在放假哦~')}}>
                                <i className='iconfont smaller'>&#xe85a;</i><br/>
                                联系客服    
                            </a>
                            {
                                loginStatus ?
                                <Link to='/shoppingCart:1'>
                                    <i className='iconfont'>&#xe600;</i><br/>
                                    购物车   
                                </Link> :
                                <Link to='/login:1'>
                                    <i className='iconfont'>&#xe600;</i><br/>
                                    购物车   
                                </Link>
                            }
                            <a href='#top'>
                                <i className='iconfont smaller'>&#xe66e;</i><br/>
                                返回顶部    
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    }

    componentDidMount(){
        this.props.handleGetContentData();
    }
}

const mapState=(state)=>{
    return {
        goods:state.getIn(['home','goods']),
        advertisement:state.getIn(['home','advertisement']),
        selling_list:state.getIn(['home','selling_list']),
        buyer_news:state.getIn(['home','buyer_news']),
        liveInfo:state.getIn(['home','liveInfo']),
        loginStatus:state.getIn(['login','loginStatus']),
        total_goods:state.getIn(['cart','total_goods'])
    }
}

const mapDispatch=(dispatch)=>{
    return {
        handleGetContentData(){
            dispatch(actionCreators.getContentAction());
        },
        handleAddGoods(item,value){
            alert('添加成功！请在购物车查看~');
            dispatch(cartActionCreator.getChangeTotalAction(value+1));
            dispatch(cartActionCreator.getAddToCartAction(item));
        }
    }
}

export default connect(mapState,mapDispatch)(Content);