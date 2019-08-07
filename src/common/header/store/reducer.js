import { actionTypes } from './';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  focus: false,
  mouseIn: false,
  list: [],
  page: 0,
  totalPage: 0
});
//const defaultState = {
//   focus: false,
// };    ====> without immutable.js

const reducer = (state = defaultState, action) => {
  // if(action.type === actionTypes.INPUT_FOCUS) {
  //   //immutable对象的set方法：会结合之前immutable的值，
  //   //和新设置的值， 返回一个全新的对象
  //   return state.set('focus', true);
  //   // return {focus: true}  ====> without immutable.js
  // }
  // if(action.type === actionTypes.GET_LIST) {
  //   return state.set('list', action.data);
  // }
  // if(action.type === actionTypes.INPUT_BLUR) {
  //   return state.set('focus', false);
  // }
  // return state;
  switch(action.type) {
    case actionTypes.INPUT_FOCUS:
      return state.set('focus', true);
    case actionTypes.GET_LIST:
      return state.merge({
        list: action.data,
        totalPage: action.totalPage
      });
    case actionTypes.INPUT_BLUR:
      return state.set('focus', false);
    case actionTypes.MOUSE_ENTER:
      return state.set('mouseIn', true);
    case actionTypes.MOUSE_LEAVE:
      return state.set('mouseIn', false);
    case actionTypes.SWITCH_LIST:
      return state.set('page', action.page);
    default:
      return state;
  }
};

export default reducer;