import { SET_CITY_INFO } from '../actions/cityActions';

const initialState = {
  city: '',
  country: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CITY_INFO:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return { ...state };
  }
};
