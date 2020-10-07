import { SET_WEATHER_INFO } from '../actions/weatherActions';

const initialState = {
  sky: null,
  temperature: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_WEATHER_INFO:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return { ...state };
  }
};
