const { default: Axios } = require('axios');

const instance = Axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
});

export default instance;
