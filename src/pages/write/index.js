import React,{Component,Fragment} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {actionCreator} from './store';
import $ from 'jquery';
import {Carousel} from 'antd';
import '../mySpace/style.less';
import './style.less';

class WriteMoudle extends Component{
    render(){
        const {dynamics,bgimgs,zan,comment,buy,price,handleAddLink,handlePut,handlUpdatePrice}=this.props;
        return (
            <Fragment>
                <div className='header_wrapper_d'>
                    <Carousel autoplay className='carousel' dots={false} effect='fade'>
                        {
                            bgimgs.map((item)=>{
                                return <img src={item} alt='' key={item}/>
                            })
                        }
                    </Carousel>
                    <div className='header_con'>
                        <Link to='./'><div className='home'>&lt;&lt;首页</div></Link>
                        <h1>Amethyst紫宣的创作空间</h1>
                        <div className='header'>
                            <img src='https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2026729911,4250545773&fm=26&gp=0.jpg' alt=''/>
                            <p>Amethyst紫宣</p>
                        </div>
                    </div>
                </div>
                <div className='content_wrapper_d'>
                    <div className='animate__lightSpeedInLeft animate__animated content_nav_d'>
                        <li>发布动态</li>
                        <li><a href='#past'>以往动态</a></li>
                        <li>我的点赞</li>
                        <li>我的评论</li>
                        <li>我的积分</li>
                    </div>
                    <div className='content_d'>
                        <div className='animate__lightSpeedInLeft animate__animated input_area_d'>
                            <div className='link_area'></div>
                            <textarea placeholder='#请在此输入...' cols='72' rows='8' className='write_area'></textarea>
                            <div className='input_right'>
                                <div className='addition'>
                                    <i className='iconfont'>&#xe60d;</i>
                                    <i className='iconfont icon_2' onClick={handlUpdatePrice}>&#xe747;</i>
                                    <i className='iconfont icon_2' onClick={()=>{handleAddLink(1)}}>&#xe672;</i>
                                    <i className='iconfont icon_1' onClick={()=>{handleAddLink(2)}}>&#xe6c8;</i>
                                </div>
                                <div className='put_out'>
                                    +添加更多
                                    <button onClick={()=>{handlePut(price)}}>发布</button>
                                </div>
                            </div>
                        </div>
                        <div className='animate__lightSpeedInLeft animate__animated more_info_d'>
                            <div>
                                <p>赞</p>
                                <p>{zan}</p>
                            </div>
                            <div>
                                <p>评论</p>
                                <p>{comment}</p>
                            </div>
                            <div>
                                <p>积分</p>
                                <p>{buy}</p>
                            </div>
                        </div>
                    </div>
                    <div className='animate__zoomIn animate__animated dynamic_wrapper'>
                        <a href='#' name='past'>.</a>
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
                                        <div className='link_box'>
                                            <span>￥{item.get('price')}</span>
                                            <a href={item.get('buy_link')} rel="noreferrer" target='_blank'><i className='iconfont'>&#xe6c8;</i>商品链接</a>
                                        </div>

                                    </div>
            
                                    <p className='more'>
                                        <span>浏览{item.get('scan')}次</span>
                                        <span className='right'><i className='iconfont'>&#xe747;</i>购买{item.get('buy')}</span>
                                        <span className='right'><i className='iconfont'>&#xe601;</i>评论{item.get('comment')}</span>
                                        <span className='right'><i className='iconfont'>&#xe64b;</i>点赞{item.get('good')}</span>
                                    </p>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
            </Fragment>
        )
    }

    componentDidMount(){
        this.props.handleGetDynamics();
    }
}

const mapState=(state)=>{
    return {
        dynamics:state.getIn(['write','dynamics']),
        zan:state.getIn(['write','zan']),
        comment:state.getIn(['write','comment']),
        buy:state.getIn(['write','buy']),
        bgimgs:state.getIn(['write','bgimgs']),
        price:state.getIn(['write','price'])
    }
}

const mapDispatch=(dispatch)=>{
    return {
        handleGetDynamics(){
            dispatch(actionCreator.getDynamicAction());
        },

        handlUpdatePrice(){
            let price=prompt('请输入价格');
            dispatch(actionCreator.updatePrice(price));
        },

        handleAddLink(value){
            let link=null;
            
            if(value===1){
                link=prompt('请放入图片链接：');
            }else{
                link=prompt('请放入商品链接：');
            }
            
            if(link){
                let pchild=$('<p></p>');
                pchild.text(link);
    
                var ichild=document.createElement('i');
                ichild.classList.add('iconfont');
                ichild.innerHTML='  &#xe62f;';
                pchild.append(ichild);
    
                $(ichild).on('click',()=>{
                    pchild.remove();
                })
    
                $('.link_area').append(pchild);
            }
        },
        handlePut(price){
            let comment=$('.write_area').val();//------评论
            let imgs=$('.link_area p').text();//-----p标签的文本

            let array=imgs.match(/(http)[\S]+(jpg|png|webp)/g);//-----图片链接
            if(array===null){
                alert('请至少放入一张图片~');
            }else{
                let buy_link=imgs.match(/(https:\/\/item).()+/g);//-------购买链接
            
                let nowDate=new Date();
                let detail_time=nowDate.toLocaleTimeString();
                let time=nowDate.getFullYear()+'年'+nowDate.getMonth()+'月'+nowDate.getDate()+'日 '+detail_time;//----时间
                
                console.log(buy_link);

                dispatch(actionCreator.getCreateDynamicsAction(comment,array,buy_link[0],time,price));
                dispatch(actionCreator.getChangeIntegrateAction());
            }

            $('.write_area').val('');
            $('.link_area')[0].innerHTML=null;
        }
    }
}

export default connect(mapState,mapDispatch)(WriteMoudle);