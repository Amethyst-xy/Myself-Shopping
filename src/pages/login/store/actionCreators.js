import {constants} from './index';
import axios from 'axios';

const getCheckData=(data)=>({
    type:constants.CHECK_USER_INFO,
    data
});



export const getCheckAction=(username,password)=>{
    return (dispatch)=>{
        axios.get('/api/login.json?username='+username+'&password='+password).then((res)=>{
            if(res.data.login.status){
                dispatch(getCheckData(res.data.login.status));
            }else{
                alert('登录失败，请检查用户名和密码是否有误！');
            }
            
        }).catch(()=>alert('error!'));
    }
}

export const getCheckRegisterAction=(username,password)=>{
    return (dispatch)=>{
        axios.get('/api/login.json?username='+username+'&password='+password).then((res)=>{
            if(res.data.register.status){
                console.log(res.data.register.status);
                dispatch(getLoginRegisterAction(res.data.register.status));
                alert('注册成功，请登录！');
            }else{
                alert('用户名已存在，请重新输入！');
            }
            
        }).catch(()=>alert('error!'));
    }
}

export const changeLoginStatus=(value)=>getCheckData(value);

export const getInputAction=(value,data)=>({
    type:constants.GET_INPUT_DATA,
    value,
    data
});

export const getLoginRegisterAction=(data)=>({
    type:constants.CHANGE_LOGIN_OR_REGISTER,
    data
});

