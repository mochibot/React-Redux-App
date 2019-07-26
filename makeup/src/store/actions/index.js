import axios from 'axios';

export const FETCH_MAKEUP_START = 'FETCH_MAKEUP_START';
export const FETCH_MAKEUP_SUCCESS = 'FETCH_MAKEUP_SUCCESS';
export const FETCH_MAKEUP_FAILURE = 'FETCH_MAKEUP_FAILURE';

export const fetchMakeup = (input) => (dispatch) => {
  dispatch({
    type: FETCH_MAKEUP_START
  })
  axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${input.brand}&product_type=${input.type}`)
    .then(response => {
      console.log('fetch data success: ', response);
      dispatch({
        type: FETCH_MAKEUP_SUCCESS,
        payload: response.data
      })
    })
    .catch(error => {
      console.log('fetch data error: ', error);
      dispatch({
        type: FETCH_MAKEUP_FAILURE,
        payload: 'Error fetching data'
      })
    })
}