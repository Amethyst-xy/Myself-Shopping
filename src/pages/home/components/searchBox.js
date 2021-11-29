import React,{Component} from 'react';
import SelectList from '../components/SelectList';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import './style.less';

import { actionCreators } from '../store';
import {actionCreator as searchActionCreactor} from '../../SearchResult/store';

class Search extends Component{
    render(){
        const {isFocus,isMouseIn,handleFocus,handleBlur,handleMouseIn,handleMouseLeave,handleGetContentData}=this.props;
        return (
            <div className='search_box'>
            <i className='iconfont zoom'>&#xe729;</i>
            <input placeholder="请在此输入" className='search_input' onFocus={handleFocus} onBlur={handleBlur}/>
            <Link to='/searchResult:1' className='search_btn' onClick={handleGetContentData}>搜索</Link>
            <i className='iconfont photo'>&#xe672;</i>
            {
                (isFocus||isMouseIn) ? 
                    <div onMouseOver={handleMouseIn} onMouseLeave={handleMouseLeave}>
                        <SelectList/>
                    </div> : null
            }
            </div>
        );
    }
}

const mapState=(state)=>{
    return {
        isFocus:state.getIn(['home','isFocus']),
        isMouseIn:state.getIn(['home','isMouseIn'])
    }
}

const mapDispatch=(dispatch)=>{
    return {
        handleFocus(){
            dispatch(actionCreators.getFocusAction(3,true));
        },
        handleBlur(){
            dispatch(actionCreators.getFocusAction(3,false));
        },
        handleMouseIn(){
            dispatch(actionCreators.getMouseinAction(3,true));
        },
        handleMouseLeave(){
            dispatch(actionCreators.getMouseinAction(3,false));
        },
        handleGetContentData(){
            document.querySelector('.search_input').value='';
            dispatch(searchActionCreactor.getLoadAction(false));
            setTimeout(()=>{
                dispatch(searchActionCreactor.getSearchAction(0));
            },340);
        }
    }
}

export default connect(mapState,mapDispatch)(Search);