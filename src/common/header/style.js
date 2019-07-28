import styled from 'styled-components';
import logoPic from '../../statics/logo.png';
import diamondPic from '../../statics/diamond-beta.png';

export const HeaderWrapper = styled.div`
  position: relative;
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
  `;

export const Logo = styled.a.attrs({
  href: '/'
})`
  position: absolute;
  top:0;
  left:0;
  display: block;
  height: 56px;
  width: 100px;
  background: url(${logoPic});
  background-size: contain;
`;

export const Nav = styled.div`
  width: 945px;
  height: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  padding-right: 130px;
`;

export const DiamondBeta = styled.a`
  height: 25px;
  width: 56px;
  padding: 0px 10px;
  margin-top: 15.75px;
  margin-left: 15px;
  float: right;
  display: block;
  background: url(${diamondPic});
  background-size: contain;
  background-repeat: no-repeat;
`;

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0px 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
    font-size: 15px;
  }
  &.active {
  color: #ea6f5a;
  padding-left: 0px;
  }
`;
export const NavSearchWrapper = styled.div`
  float: left;
  position: relative;
  .iconfont {
    position: absolute;
    right: 2px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    color: #999;
    text-align: center;
    &.focus {
      color: #eee;
      background: #999;
    }
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder:'搜索'
})`
  width: 160px;
  height: 38px;
  padding: 0 35px 0 20px;
  margin-top: 9px;
  margin-left: 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  color: #666;
  &.focus {
    width: 260px;
  }
  &.slide-enter {
    transition: all .5s ease-out;
  }
  &.slide-enter-active {
    width: 260px;
  }
  &.slide-exit {
   transition: all .5s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }


  &::placeholder {
    color: #999;
    font-family:  -apple-system,SF UI Text,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
  }
`;
export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;

export const Button = styled.div`
  float: right;
  margin-top: 9px;
  line-height:38px;
  border-radius: 19px;
  border: 1px solid #ea6f5a;
  margin-right: 20px;
  padding: 0 20px;
  font-size: 15px
  &.reg {
    color: #ea6f5a;
  }
  &.writing {
    color: #fff;
    background: #ea6f5a
  }  
`;