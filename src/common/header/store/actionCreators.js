import { actionTypes } from './';
import axios from 'axios';
import { fromJS } from 'immutable';

export const inputFocus = () => ({type: actionTypes.INPUT_FOCUS});
export const inputBlur  = () => ({type: actionTypes.INPUT_BLUR});
export const mouseEnter  = () => ({type: actionTypes.MOUSE_ENTER});
export const mouseLeave  = () => ({type: actionTypes.MOUSE_LEAVE});
export const switchList = (page) => ({
      type: actionTypes.SWITCH_LIST,
      page
    });

export const showList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then((res) => {
      const data = res.data;
      dispatch(getList(data.data))
    }).catch(() => {
      console.log('error')
    })
  }
};
const getList = (data) => ({
  type: actionTypes.GET_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10 )
});
