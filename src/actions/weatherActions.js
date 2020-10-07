export const SET_WEATHER_INFO = 'SET_WEATHER_INFO';

export const setWeatherInfo = (sky, temperature) => {
  return {
    type: SET_WEATHER_INFO,
    payload: {
      sky,
      temperature,
    },
  };
};
