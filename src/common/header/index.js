import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import {
  HeaderWrapper,
  Logo,
  DiamondBeta,
  Nav,
  NavItem,
  NavSearchWrapper,
  NavSearch,
  SearchInfo,
  SearchTitle,
  SearchSwitch,
  SearchItem,
  Addition,
  Button} from './style';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { Link } from 'react-router-dom';

class Header extends Component {
  getSearchInfo() {
    const { focus, list, handleMouseEnter, handleSwitch, handleMouseLeave, mouseIn, page, totalPage } = this.props;
    const pageList = list.toJS();
    const listContent = [];
    if(pageList.length) {
      for( let i = page * 10; i < (page + 1) * 10; i++ ) {
        listContent.push(
          <SearchItem key={pageList[i]}>{pageList[i]}</SearchItem>
        )
    }
      if(focus || mouseIn) {
        return(
          <SearchInfo
            onMouseEnter = {handleMouseEnter}
            onMouseLeave = {handleMouseLeave}
          >
            <SearchTitle>热门搜索
              <SearchSwitch
                onClick={() => handleSwitch(page, totalPage, this.iconFont)}>
                <i className="iconfont" ref={(icon) => {this.iconFont = icon} }>&#xe851;</i>
                换一批</SearchSwitch>
            </SearchTitle>
            <div>
              {listContent}
            </div>
          </SearchInfo>
        )
      } else {
        return null;
      }
    }
};
  render() {
    const { focus, handleFocus, handleBlur, list } = this.props;
    return (
      <HeaderWrapper>
        <Link to='/'>
          <Logo />
        </Link>
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
              in={focus}
              timeout={500}
              classNames="slide"
            >
              <NavSearch
                className={focus ? 'focus' : ''}
                onFocus={() => {handleFocus(list)}}
                onBlur={handleBlur}
              />
            </CSSTransition>
            <i className={focus ? 'focus iconfont zoom' : 'iconfont zoom'}>&#xe637;</i>
            {this.getSearchInfo()}
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
  }
}

const mapStateToProps = (state) => ({
  focus: state.getIn(['header','focus']),
  mouseIn: state.getIn(['header', 'mouseIn']),
  list: state.getIn(['header', 'list']),
  page: state.getIn(['header', 'page']),
  totalPage: state.getIn(['header', 'totalPage']),
  //focus: state.get('header).get('focus'); ====> use get() method
  // focus: state.header.focus  =====> without immutable.js
});

const mapDispatchToProps = (dispatch) => ({
  handleFocus(list) {
    // if(list.size === 0) {
    //   dispatch(actionCreators.showList());
    // }
    list.size ===0 && dispatch(actionCreators.showList());
      dispatch(actionCreators.inputFocus());
  },
  handleBlur() {
    dispatch(actionCreators.inputBlur());
  },
  handleMouseEnter() {
    dispatch(actionCreators.mouseEnter());
  },
  handleMouseLeave() {
    dispatch(actionCreators.mouseLeave());
  },
  handleSwitch(page, totalPage, icon) {
    console.log(icon);
    let originalDeg = icon.style.transform.replace(/[^0-9]/ig, "");
    if(originalDeg) {
      originalDeg = parseInt(originalDeg,10);
    } else {
      originalDeg = 0;
    }
    icon.style.transform = 'rotate(' + (originalDeg + 360) + 'deg)';
    if(page<(totalPage-1)) {
      dispatch(actionCreators.switchList(page+1))
    } else {
      dispatch(actionCreators.switchList(0))
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);