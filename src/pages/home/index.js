import React,{Component,Fragment} from 'react';
import SearchBar from './components/SearchBar';
import Content from './components/Content';
import Footer from './components/Footer';
import AntdBanner from './components/antdBanner';

class Home extends  Component{
    render(){
        return (
            <Fragment>
                <SearchBar/>
                <AntdBanner/>
                <Content/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Home;