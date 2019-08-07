import { actionTypes } from './';
import axios from 'axios';
import { fromJS } from 'immutable';

export const mouseEnter = () => ({
  type: actionTypes.MOUSE_ENTER
});
export const mouseLeave = () => ({
  type: actionTypes.MOUSE_LEAVE
});
// export const initList = () => {
//   return (dispatch) => {
//     axios.get('/api/writerlist.json').then((res) => {
//       const data = res.data;
//       dispatch(getList(data));
//     }).catch((e) => {
//       console.log('error')
//     })
//   }
// };
export const switchPage = (page) => ({
  type: actionTypes.SWITCH_PAGE,
  page: page,
});
export const toggleShow = (value) => ({
  type: actionTypes.TOGGLE_SHOW,
  show: value
});
export const showHomeData = () => {
  return (dispatch) => {
    axios.get('/api/homelist.json').then((res) => {
      const result = res.data.data;
      dispatch(getHomeData(result));
    }).catch((e) => {
      console.log('error')
    })
  }
};
export const showMoreArticle = (page) => {
  return (dispatch) => {
    axios.get('/api/morearticles.json?page=' + page).then((res) => {
      const data = res.data;
      dispatch(getMoreArticle(data,page+1));
    }).catch((e) => {
      console.log('error')
    })
  }
};

// const getList = (data) => ({
//   type: actionTypes.GET_LIST,
//   data: fromJS(data),
//   totalPage: fromJS(Math.ceil(data.data.length / 5))
// });

const getHomeData = (result) => ({
  type: actionTypes.GET_HOME_DATA,
  result: fromJS(result),
  totalPage: fromJS(Math.ceil(result.writers.data.length / 5))
});
const getMoreArticle = (data, page) => ({
  type: actionTypes.GET_MORE_ARTICLE,
  data: fromJS(data),
  page: page
});

