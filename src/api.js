const { default: Axios } = require('axios');

const instance = Axios.create({
  baseURL: 'http://api.openweathermap.org/data/2.5/',
});

export default instance;
