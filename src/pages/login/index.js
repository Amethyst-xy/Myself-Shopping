import React,{Component} from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';
import 'antd/dist/antd.css'; 
import './style.less';
import { actionCreator } from './store';

const onFinish = (values) => {
    console.log('Received values of form: ', values);
};


class Login extends Component{
    render(){
        const {isLogin,loginStatus,handleClick,handleChangeLoginStatus,handleClick1}=this.props;
        if(!loginStatus){
            return (<div className='login_wrapper'>
                {
                    isLogin ?
                    <div>
                        <div className='welcome_title'><span>Myself</span>用户登录</div>
                        <div className='login_box'>
                            <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                            >
                                <Form.Item
                                    name="username"
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Username!',
                                    },
                                    ]}
                                >
                                    <Input autocomplete="off" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" className='input_username'/>
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Password!',
                                    },
                                    ]}
                                >
                                    <Input autocomplete="off"
                                    prefix={<LockOutlined className="site-form-item-icon"/>}
                                    type="password"
                                    placeholder="Password"
                                    className='input_password'
                                    />
                                </Form.Item>
                                <Form.Item>
                                    <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox>Remember me</Checkbox>
                                    </Form.Item>
    
                                    <a href='./' className="login-form-forgot">
                                    Forgot password
                                    </a>
                                </Form.Item>
    
                                <Form.Item>
                                    <Button type="primary" htmlType="submit" className="login-form-button"
                                        onClick={handleClick} 
                                    >
                                    Log in
                                    </Button>
                                    &nbsp;Or <Link to='/login:1' onClick={handleChangeLoginStatus}>register now!</Link>
                                </Form.Item>
                            </Form>
                        </div>
                    </div> :
                    <div>
                        <div className='welcome_title'><span>Myself</span>用户注册</div>
                        <div style={{"paddingTop":"55px"}} className='login_box'>
                            <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                            >
                                <Form.Item
                                    name="username"
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Username!',
                                    },
                                    ]}
                                >
                                    <Input autocomplete="off" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" className='input_username'/>
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Password!',
                                    },
                                    ]}
                                >
                                    <Input autocomplete="off"
                                    prefix={<LockOutlined className="site-form-item-icon"/>}
                                    type="password"
                                    placeholder="Password"
                                    className='input_password'
                                    />
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit" className="login-form-button" onClick={handleClick1}>
                                    Register
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                }
            </div>)
        }else{
            return <Redirect to='/'/>
        } 
    }
}


const mapState=(state)=>{
    return {
        loginStatus:state.getIn(['login','loginStatus']),
        isLogin:state.getIn(['login','isLogin'])
    }
}

const mapDispatch=(dispatch)=>{
    return {
        handleClick(){
            let username=document.querySelector('.input_username input').value;
            let password=document.querySelector('.input_password input').value;

            if(username&&password){
                dispatch(actionCreator.getCheckAction(username,password));
            }else{
                alert('请先输入用户名和密码！');
            }
        },
        handleClick1(){
            let username=document.querySelector('.input_username input').value;
            let password=document.querySelector('.input_password input').value;
            if(username&&password){
                dispatch(actionCreator.getCheckRegisterAction(username,password));
                dispatch(actionCreator.getInputAction(1,null));
                dispatch(actionCreator.getInputAction(2,null));
            }else{
                alert('请先输入用户名和密码！');
            }
        },
        handleChangeLoginStatus(){
            dispatch(actionCreator.getLoginRegisterAction(false));
        }
    }
}

export default connect(mapState,mapDispatch)(Login);