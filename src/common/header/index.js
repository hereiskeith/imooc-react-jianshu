import React from 'react';
import { CSSTransition } from 'react-transition-group';
import {
  HeaderWrapper,
  Logo,
  DiamondBeta,
  Nav,
  NavItem,
  NavSearchWrapper,
  NavSearch,
  Addition,
  Button} from './style';
import { connect } from 'react-redux';
import { actionCreators } from './store';

const Header = (props) => {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          <NavItem className='right'>登录</NavItem>
          <DiamondBeta />
          <NavItem className='right'>
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <NavSearchWrapper>
            <CSSTransition
              in={props.focus}
              timeout={500}
              classNames="slide"
            >
            <NavSearch
              className={props.focus ? 'focus' : ''}
              onFocus={props.handleFocus}
              onBlur={props.handleBlur}
            />
            </CSSTransition>
            <i className={props.focus ? 'focus iconfont' : 'iconfont'}>&#xe637;</i>
          </NavSearchWrapper>
        </Nav>
        <Addition>
          <Button className='writing'>
            <i className="iconfont">&#xe780;</i>
            写文章</Button>
          <Button className='reg'>注册</Button>
        </Addition>
      </HeaderWrapper>
    )
};

const mapStateToProps = (state) => ({
  focus: state.getIn(['header','focus']),
  //focus: state.get('header).get('focus'); ====> use get() method
  // focus: state.header.focus  =====> without immutable.js
});

const mapDispatchToProps = (dispatch) => ({
  handleFocus() {
      dispatch(actionCreators.inputFocus());
  },
  handleBlur() {
    dispatch(actionCreators.inputBlur());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);