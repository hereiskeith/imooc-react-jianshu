import React, { Component } from 'react';
import { RecommendColumn,RecommendItem } from '../style';
import { connect } from 'react-redux';

class Recommend extends Component {
  render() {
    return (
      <div>
        <RecommendColumn>
          {
            this.props.list.map((item) => {
              return (
                <RecommendItem imgUrl={item.get('recommendUrl')} key={item.get('id')} />
                  /*<img className='rec-pic' src={item.get('recommendUrl')} alt='' />*/
              )
            })
          }
        </RecommendColumn>
      </div>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['home','recommendList'])
});

export default connect(mapState,null)(Recommend);