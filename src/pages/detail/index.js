import React,{Component,Fragment} from 'react';
import Header from '../../common/header';
import {connect} from 'react-redux';
import './style.less';

class GoodsDetail extends Component{
    constructor(props){
        super(props);
        this.handleChange=this.handleChange.bind(this);
    }
    render(){
        const {imgs,headerImg,header_name,time,title,desc,buy_link}=this.props;
        return (
            <Fragment>
                <Header/>
                <div className='detail_wrapper'>
                    <div className='animate__animated animate__fadeInDown content_wrapper'>
                        <div className='left' ref={(bigImgs)=>{this.bigImgs=bigImgs}}>

                            <div className='show'><img src={imgs.get(0)} alt=''/></div>
                            <div className=''><img src={imgs.get(1)} alt=''/></div>
                            <div className=''><img src={imgs.get(2)} alt=''/></div>

                            <ul className='smallImg' ref={(smallImgs)=>{this.smallImgs=smallImgs}}>
                                <li className='choose'><img src={imgs.get(0)}  alt=''/></li>
                                <li><img src={imgs.get(1)}  alt=''/></li>
                                <li><img src={imgs.get(2)}  alt=''/></li>
                            </ul>
                        </div>
                        <div className='right'>
                            <p className='title'>{title}</p>
                            <div className='writer'>
                                <img src={headerImg} alt=''/>
                                <div className='info'>
                                    <p>{header_name}</p>
                                    <p>{time}</p>
                                </div>
                            </div>
                            <p className='comment'>{desc}</p>
                            <a href={buy_link} className='goods_link'><i className='iconfont'>&#xe6c8;</i>购买链接</a>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }

    componentDidMount(){
        this.handleChange();
    }

    handleChange(){
        let bigObjs=this.bigImgs.querySelectorAll('div');
        let smallObjs=this.smallImgs.querySelectorAll('li');

        function removeStyle(obj){
            for(var i=0;i<obj.length;i++){
                obj[i].classList='';
            }
        }

        for(let i=0;i<smallObjs.length;i++){
            let obj=smallObjs[i];
            obj.onmouseover=function(){
                removeStyle(smallObjs);
                obj.classList.add('choose');
                
                removeStyle(bigObjs);
                bigObjs[i].classList.add('show');
            }
        }
    }
}

const mapState=(state)=>{
    return {
        imgs:state.getIn(['detail','imgs']),
        title:state.getIn(['detail','title']),
        header_name:state.getIn(['detail','header_name']),
        headerImg:state.getIn(['detail','headerImg']),
        time:state.getIn(['detail','time']),
        desc:state.getIn(['detail','desc']),
        buy_link:state.getIn(['detail','buy_link'])
    }
}


export default connect(mapState)(GoodsDetail);