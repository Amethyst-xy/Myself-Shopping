import React,{Component} from 'react';
import Header from './common/header';
import Home from './pages/home';
import Login from './pages/login';
import ShoppingCart from './pages/shoppingCart';
import SearchGoods from './pages/SearchResult';
import MySpace from './pages/mySpace';
import WriteMoudle from './pages/write';
import GoodsDetail from './pages/detail';
import store from './store';
import { Provider } from 'react-redux';
import {BrowserRouter,Route} from 'react-router-dom';

class App extends Component{
  render(){
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Route path='/' exact component={Header}/>
          <Route path='/' exact component={Home}/>
          <Route path='/login:id' exact component={Login}/>
          <Route path='/searchResult:id' exact component={SearchGoods}/>
          <Route path='/shoppingCart:id' exact component={ShoppingCart}/>
          <Route path='/mySpace:id' exact component={MySpace}/>
          <Route path='/write:id' exact component={WriteMoudle}/>
          <Route path='/detail:id' exact component={GoodsDetail}/>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
