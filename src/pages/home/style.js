import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`;
export const HomeLeft = styled.div`
  width: 625px;
  padding: 30px 0 0 15px;
  float: left;
  .banner-img {
    :hover {
      cursor: pointer;
    }
    height: 270px;
    width: 625px;
    display: block;
    margin-bottom: 25px;
    border-radius: 4px;
  }
`;
export const HomeRight = styled.div`
  width: 280px;
  padding-top: 30px;
  margin-left: 40px;
  float: right;
`;
export const BackToTop = styled.div`
  position: fixed;
  bottom: 60px;
  right: 60px;
  width: 50px;
  height: 50px;
  line-height: 50px;
  border: 1px solid #ddd;
  font-size: 12px;
  color: #333;
  text-align: center;
  :hover {
    cursor: pointer;
    background: #f5f5f5;
  }
`;
export const Article = styled.div`
  overflow: hidden;
  width: 625px;
  padding: 10px 0 20px 0;
  margin-bottom: 15px;
  border-bottom: 1px solid #f0f0f0;
  position: relative;
  .art-pic {
    :hover {
      text-decoration: underline;
      cursor: pointer;
    }
    width: 150px;
    height: 100px;
    border: 1px solid #f0f0f0;
    border-radius: 4px;
    vertical-align: middle;
  }
`;
export const ArticleInfo = styled.div`
  display: inline-block;
  width: 460px;
  vertical-align: middle;
  .art-title {
    :hover {
      text-decoration: underline;
      cursor: pointer;
    }
    font-size: 18px;
    line-height: 1.5;
    color: #333;
    font-weight: bold;
  }
  .art-content {
    font-size: 13px;
    line-height: 24px;
    color: #999;
    margin-bottom: 8px;
  }
`;
export const ArticleItem = styled.div`
  float: left;
  margin-right: 10px;
  color: #b4b4b4;
  font-size: 12px;
  line-height: 20px;
  &.red {
    color: #ea6f5a;
  }
  .iconfont {
  margin-right: 2px;
  font-size: 12px;
  }
`;

export const ReadMore = styled.div`
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 15px;
  color: #ffffff;
  background: #A5A5A5;
  border-radius: 20px;
  :hover {
    cursor: pointer;
  }
`;
export const RecommendColumn = styled.div`
  margin-top: -5px;
  margin-bottom: 10px;
  width: 280px;

`;
export const RecommendItem = styled.div`
  :hover {
    cursor: pointer;
  }
  width: 280px;
  height: 50px;
  margin-bottom: 6px;
  background: url(${(props)=>props.imgUrl});
  background-size: contain;
`;
// .rec-pic {
//   width: 280px;
//   height: 50px;
//   margin-bottom: 6px;
//   display: block;
// }
export const CodeDisplay = styled.div`
  position: relative;
  width: 100%;
  padding: 10px 22px;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  margin-bottom: 30px;
  box-sizing: border-box;
  .code {
    height: 60px;
    width: 60px;
    vertical-align: middle;
    margin-right: 4px;
  }
`;
export const CodeDescription = styled.div`
  margin-left:7px;
  vertical-align: middle;
  display: inline-block;
  :hover {
    cursor: pointer;
  }
  .code-title {
    color: #333;
    font-size: 15px;
    line-height: 18px;
  }
  .code-content {
    color: #999;
    font-size: 13px;
    margin-top: 4px;
    line-height: 16px;
  }
`;
export const CodeZoomIn = styled.div`
  position: absolute;
  top: -195px;
  left: 48px;
  height: 180px;
  padding: 1px;
  border: 1px solid rgba(0,0,0,.2);
  border-radius: 6px;
  box-shadow: 0 5px 10px rgba(0,0,0,.2);
  background-color: white;
  z-index:11;
  opacity: 1;
  .code-zoom-in {
    height: 180px;
    width: 180px;

  }
  &.fade {
    opacity: 0;
    transition: opacity .25s linear;
`;

export const WriterColumnWrapper = styled.div`
  width: 100%;
  
`;

export const WriterHeader = styled.div`
  font-size: 14px;
  color: #969696;
  margin-bottom: 15px;
`;
export const WriterSwitch = styled.div`
  float: right;
  font-size: 14px;
  color: #969696;
  :hover {
    cursor: pointer;
  }
  .iconfont {
    font-size: 13px;
    float: left;
    display: block;
    transition: all .5s ease-out;
    transform-origin: center center;
  }
`;

export const Writer = styled.div`
  overflow: hidden;
  margin-bottom: 10px;
  .writer-img {
    border-radius: 50%;
    border: 1px solid #ddd;
    height: 46px;
    width: 46px;
    float: left;
    vertical-align: middle;
  }
`;
export const WriterInfo = styled.div`
  padding-left: 60px;
  padding-top: 5px;
  font-size: 14px;
  .sub {
    float: right;
    color: #42c02e;
    font-size: 13px;
    vertical-align: middle;
    .iconfont {
      font-size: 14px;
      float: left;
      display: block;
      font-weight: bold;
    }
  }
  .writer-summary {
    font-size: 12px;
    line-height: 20px;
    color: #969696;
    margin-top: 2px;
  }
`;