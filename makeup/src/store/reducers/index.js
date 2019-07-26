import { FETCH_MAKEUP_START, FETCH_MAKEUP_SUCCESS, FETCH_MAKEUP_FAILURE } from '../actions/index';

export const initialState = {
  isFetching: false,
  makeupList: [],
  error: ''
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MAKEUP_START:
      return {
        ...state,
        isFetching: true,
        makeupList: [],
        error: '',
      }
    case FETCH_MAKEUP_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        makeupList: action.payload
      }
    case FETCH_MAKEUP_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    default:
      return state;
  }
}