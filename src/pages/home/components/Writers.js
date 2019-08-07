import React, { Component } from 'react';
import { WriterColumnWrapper, WriterSwitch, WriterHeader, Writer, WriterInfo } from '../style';
import {actionCreators} from "../store";
import {connect} from "react-redux";


class Writers extends Component {
  getList() {
    const {list, getValue, page } = this.props;
    const listContent = [];
    if(getValue === true) {
      const newPage = list.toJS();
      for (let i = (page * 5); i < ((page + 1) * 5); i++) {
        listContent.push(
          <Writer key={newPage[i].id}>
            <img className='writer-img' src={newPage[i].avatar_source} alt=''/>
            <WriterInfo>
              <h3 className='writer-name'>{newPage[i].nickname}
              <span className='sub'>
                <i className="iconfont">&#xe6a9;</i>
                关注
              </span></h3>
              <p className='writer-summary'>写了{(newPage[i].total_wordage/1000).toFixed(1)}k字 · {(newPage[i].total_likes_count/1000).toFixed(1)}k喜欢</p>
            </WriterInfo>
          </Writer>
        )
      }
    }
    return listContent;
  }
  // componentDidMount() {
  //   this.props.initWritersList()
  // }
  render() {
    return (
      <div>
        <WriterColumnWrapper>
          <WriterHeader>
            推荐作者
            <WriterSwitch onClick={()=> {this.props.handleClick(this.props.page, this.props.totalPage, this.spin)}}>
              <i className="iconfont" ref={(spin)=> {this.spin=spin}}>&#xe851;</i>
              换一批
            </WriterSwitch>
          </WriterHeader>
          {this.getList()}
        </WriterColumnWrapper>
      </div>
    )
  }
}
const mapState = (state) => ({
  list: state.getIn(['home','writers','data']),
  getValue: state.getIn(['home','writers','getValue']),
  totalPage: state.getIn(['home','writers','totalPage']),
  page: state.getIn(['home','writers','page'])
});

const mapDispatch = (dispatch) => ({
  // initWritersList() {
  //   dispatch(actionCreators.initList());
  // },
  handleClick(page, totalPage, spin) {
    let spinAngle = spin.style.transform.replace(/[^0-9]/ig,"");
    if(spinAngle) {
      spinAngle = parseInt(spinAngle, 10);
    } else {
      spinAngle = 0;
    }
    spin.style.transform = 'rotate(' + (spinAngle + 360) + 'deg)';
    if(page< (totalPage-1)) {
      dispatch(actionCreators.switchPage(page + 1))
    } else {
      dispatch(actionCreators.switchPage(0))
    }
  }
});

export default connect(mapState,mapDispatch)(Writers);