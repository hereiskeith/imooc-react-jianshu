import { actionTypes } from './';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  focus: false,
});
//const defaultState = {
//   focus: false,
// };    ====> without immutable.js

const reducer = (state = defaultState, action) => {
  if(action.type === actionTypes.INPUT_FOCUS) {
    //immutable对象的set方法：会结合之前immutable的值，
    //和新设置的值， 返回一个全新的对象
    return state.set('focus', true);
    // return {focus: true}  ====> without immutable.js
  }
  if(action.type === actionTypes.INPUT_BLUR) {
    return state.set('focus', false);
  }
  return state;
};

export default reducer;