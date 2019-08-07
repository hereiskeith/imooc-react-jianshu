import React, { Component } from 'react';
import { Article, ArticleInfo,ArticleItem, ReadMore } from '../style';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';

class Articles extends Component {
  render() {
    return (
      <div>
        {
          this.props.list.map((item,index) => {
            return (
              <Article key={index}>
                <ArticleInfo>
                  <Link to='/detail'>
                    <h3 className='art-title'>{item.get('title')}</h3>
                  </Link>
                  <p className='art-content'>{item.get('content')}</p>
                  <ArticleItem className='red'>
                    <i className='iconfont'>&#xe63d;</i>
                    {item.get('diamond')}
                  </ArticleItem>
                  <ArticleItem>
                    {item.get('author')}
                  </ArticleItem>
                  <ArticleItem>
                    <i className='iconfont'>&#xe684;</i>
                    {item.get('comment')}
                  </ArticleItem>
                  <ArticleItem>
                    <i className='iconfont'>&#xe7a9;</i>
                    {item.get('like')}
                  </ArticleItem>
                </ArticleInfo>
                <Link to='/detail'>
                  <img alt='' className='art-pic' src={item.get('imgUrl')} />
                </Link>
              </Article>
            )
          })
        }
        <ReadMore onClick={() => {this.props.handleReadMore(this.props.page)}}>阅读更多</ReadMore>
      </div>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['home','articleList']),
  page: state.getIn(['home','page'])
});
const mapDispatch = (dispatch) => ({
  handleReadMore(page) {
    dispatch(actionCreators.showMoreArticle(page));
  }
});

export default connect(mapState,mapDispatch)(Articles);