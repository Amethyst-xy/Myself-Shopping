import React,{Fragment} from 'react';
import ReactDOM from 'react-dom';
import {GlobalStyle} from './style';
import App from './App';
import {GlobalFont} from '../src/static/iconFont/iconfont';
// import 'lib-flexible';

ReactDOM.render(
  <Fragment>
    <GlobalStyle/>
    <GlobalFont/>
    <App />
  </Fragment>,
  document.getElementById('root')
);
