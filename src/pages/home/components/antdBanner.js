import React,{Component} from 'react';
import { Carousel } from 'antd';
import {connect} from 'react-redux';
import {actionCreators} from '../store';
// import '../style.css';
import './style.less';
import banner01 from '../../../static/banner01.png';
import banner02 from '../../../static/banner02.png';
import banner03 from '../../../static/banner03.png';


class AntdBanner extends Component{
    render(){
      return (
          <Carousel autoplay className='banner_wrapper' autoplaySpeed={2000} easing='ease-in' effect='fade'>
            <div>
              <img src={banner03} alt=''/>
            </div>
            <div>
              <img src={banner01} alt=''/>
            </div>
            <div>
              <img src={banner02} alt=''/>
            </div>
          </Carousel>
        );
    }
    
    componentDidMount(){
      this.props.handleGetBannerData();
    }
}
const mapDispatch=(dispatch)=>{
  return {
    handleGetBannerData(){
      dispatch(actionCreators.getBannerAction());
    }
  }
}

export default connect(null,mapDispatch)(AntdBanner);
