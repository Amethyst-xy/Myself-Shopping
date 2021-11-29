import React,{Component} from 'react';
import Search from './searchBox';
import './style.less';

class SearchBar extends Component{
    render(){
        return (
            <div className='search_wrapper'>
                <div className='search_content'>
                    <div className='logo'/>
                    <Search/>
                    <div className='download_app'>
                        <img src='https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=326662611,1926795193&fm=26&gp=0.jpg' alt='div'/>
                        <div>
                            <p className='title'>扫码下载App</p>
                            <p className='desc'>随时随地发现新天地</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchBar;