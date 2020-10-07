export const SET_CITY_INFO = 'SET_CITY_INFO';

export const setCityInfo = (city, country) => {
  return {
    type: SET_CITY_INFO,
    payload: {
      city,
      country,
    },
  };
};
