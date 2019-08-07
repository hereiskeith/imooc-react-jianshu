import React, { Component } from 'react';
import Articles from './components/Articles';
import Recommend from './components/Recommend';
import Code from './components/Code';
import Writers from './components/Writers';
import {
  HomeWrapper,
  HomeRight,
  HomeLeft,
  BackToTop
} from './style';
import { connect } from 'react-redux';
import { actionCreators } from './store'

class Home extends Component {
  componentDidMount() {
    this.props.handleHomeData();
    this.bindEvents();
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.props.handleScroll);
  }

  bindEvents() {
    window.addEventListener("scroll", this.props.handleScroll);
  }
  scrollTop() {
    window.scrollTo(0,0);
  }
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4685/15af36f728068dfa8860f2a6259c19a5a84f0921.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt='' />
          <Articles></Articles>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <Code></Code>
          <Writers></Writers>
        </HomeRight>
        {this.props.show? <BackToTop onClick={this.scrollTop}>回到顶部</BackToTop>: null}
      </HomeWrapper>
    )
  }
}
const mapState = (state) => ({
  show: state.getIn(['home','show'])
});
const mapDispatch = (dispatch) => ({
  handleHomeData() {
    dispatch(actionCreators.showHomeData());
  },
  handleScroll() {
    if(document.documentElement.scrollTop > 100) {
      dispatch(actionCreators.toggleShow(true))
    } else{
      dispatch(actionCreators.toggleShow(false))
    }
  }
});

export default connect(mapState,mapDispatch)(Home);