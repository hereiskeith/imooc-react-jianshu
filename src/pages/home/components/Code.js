import React, { Component } from 'react';
import { CodeDisplay, CodeDescription,CodeZoomIn } from '../style';
import { connect } from 'react-redux';
import { actionCreators } from '../store'
import CodePic from '../../../statics/code.png';

class Code extends Component {
  render() {
    return (
      <div>
        <CodeDisplay
          onMouseEnter={this.props.handleMouseEnter}
          onMouseLeave = {this.props.handleMouseLeave}
        >
          <img alt='' className='code' src={CodePic} />
          <CodeDescription>
            <h3 className='code-title'>下载简书手机APP</h3>
            <p className='code-content'>随时随地发现和创造内容</p>
          </CodeDescription>
          <CodeZoomIn className={this.props.mouseIn?'':'fade'}>
            <img alt='' className='code-zoom-in' src={CodePic} />
          </CodeZoomIn>
        </CodeDisplay>
      </div>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['home','code']),
  mouseIn: state.getIn(['home','code','mouseIn'])
});

const mapDispatch = (dispatch) => ({
  handleMouseEnter() {
    dispatch(actionCreators.mouseEnter());
  },
  handleMouseLeave() {
    dispatch(actionCreators.mouseLeave());
  }
});

export default connect(mapState,mapDispatch)(Code);