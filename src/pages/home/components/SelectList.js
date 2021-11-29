import React,{Component} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from '../store';
import './style.less';

class SelectList extends Component{
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
        this.handleCancel=this.handleCancel.bind(this);
    }
    render(){
        const {list,handleSubmit}=this.props;
        return (
            <div className='select_wrapper'>
                <p className='title'>添加筛选条件</p>
                <p>品牌</p>
                <ul>
                    {
                        list.map((item,index)=>{
                            return <li key={index}  onClick={this.handleClick} style={{"background":"#fff"}}>{item}</li>
                        })
                    }
                </ul>

                <p><i className='iconfont'>&#xe60a;</i>身高：<input ref={(height)=>{this.height=height}}/>cm</p>
                <p><i className='iconfont'>&#xe651;</i>体重：<input ref={(weight)=>{this.weight=weight}}/>kg</p>
                <p><i className='iconfont'>&#xe60c;</i>
                    三围：
                    <input ref={(v1)=>{this.v1=v1}}/>
                    <input ref={(v2)=>{this.v2=v2}}/>
                    <input ref={(v3)=>{this.v3=v3}}/>cm
                </p>
                <button onClick={()=>{handleSubmit(this.height,this.weight,this.v1,this.v2,this.v3)}}>确定</button>
                <button onClick={()=>{this.handleCancel(this.height,this.weight,this.v1,this.v2,this.v3)}}>取消</button>
            </div>
        );
    }

    componentDidMount(){
        this.props.handleGetData();
    }

    handleClick(e){
        if(e.target.style.background==='rgb(255, 255, 255)'){
            e.target.style.background='blueviolet';
            e.target.style.color='#fff';
            this.props.handleChangeBrand(1,e.target.innerText);
        }else{
            e.target.style.background='#fff';
            e.target.style.color='lightskyblue';
            this.props.handleChangeBrand(2,e.target.innerText);
        }                                                                                                                                               
    }
    handleCancel(height,weight,v1,v2,v3){
        height.value='';
        weight.value='';
        v1.value='';
        v2.value='';
        v3.value=''
    }
}

const mapState=(state)=>{
    return {
        list:state.getIn(['home','selectList'])
    }
}

const mapDispatch=(dispatch)=>{
    return {
        handleGetData(){
            dispatch(actionCreators.getSelectAction());
        },
        handleChangeBrand(value,data){
            dispatch(actionCreators.changeBrandAction(value,data));
        },
        handleSubmit(height,weight,v1,v2,v3){
            dispatch(actionCreators.postSelectInfoAction(height.value,weight.value,v1.value,v2.value,v3.value));
            height.value='';
            weight.value='';
            v1.value='';
            v2.value='';
            v3.value=''
        }
    }
}


export default connect(mapState,mapDispatch)(SelectList);