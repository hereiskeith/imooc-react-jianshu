import { fromJS } from 'immutable';
import { actionTypes } from './';

const defaultState = fromJS({
  articleList: [],
  recommendList: [],
  code: {},
  writers:{
    data: [],
    totalPage: 0,
    page: 0,
    getValue: false
  },
  page: 0,
  show: false
});
const getHomeData = (state, action) => {
  return state.merge({
    articleList: action.result.get('articleList'),
    recommendList: action.result.get('recommendList'),
    code: action.result.get('code')}).setIn(['writers','data'], action.result.getIn(['writers','data'])).setIn(['writers','totalPage'], action.totalPage).setIn(['writers','getValue'], true);
};
const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.GET_HOME_DATA:
      return getHomeData(state, action);
    case actionTypes.MOUSE_ENTER:
      return state.setIn(['code','mouseIn'], true);
    case actionTypes.MOUSE_LEAVE:
      return state.setIn(['code','mouseIn'], false);
    case actionTypes.SWITCH_PAGE:
      return state.setIn(['writers','page'], action.page);
    case actionTypes.GET_MORE_ARTICLE:
      return state.merge({
        articleList: state.get('articleList').concat(action.data),
        page: action.page
      });
    case actionTypes.TOGGLE_SHOW:
      return state.set('show', action.show);
    // case actionTypes.GET_LIST:
    //   return state.setIn(['writers','data'], action.data.get('data')).setIn(['writers','totalPage'], action.totalPage).setIn(['writers','getValue'], true);
    default:
      return state;
  }
};

export default reducer;