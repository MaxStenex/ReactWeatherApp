import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import instance from '../../api';
import './City.scss';
import { setCityInfo } from '../../actions/cityActions';
import { setWeatherInfo } from '../../actions/weatherActions';

const City = (props) => {
  const [cityName, setCityName] = useState('');
  useEffect(() => {
    const enterHandler = (evt) => {
      if (evt.key === 'Enter') {
        findCityWeather();
      }
    };
    global.addEventListener('keydown', enterHandler);
    return () => {
      global.removeEventListener('keydown', enterHandler);
    };
  });
  const findCityWeather = () => {
    instance
      .get(`weather?q=${cityName}&appid=b2bb16e5c74f7b3d4a012f42a45b3ae4`)
      .then((response) => {
        props.setCityInfo(response.data.name, response.data.sys.country);
        props.setWeatherInfo(
          response.data.weather[0].main,
          Math.ceil(response.data.main.temp - 272)
        );
        setCityName('');
      });
  };

  return (
    <section className='city'>
      <div className='city__name'>
        {props.city && props.country
          ? props.city + ', ' + props.country
          : '...'}
      </div>
      <div className='city__name-input'>
        <input
          type='text'
          placeholder='City name...'
          value={cityName}
          onChange={(e) => setCityName(e.currentTarget.value)}
        />
        <button onClick={findCityWeather}>Find</button>
      </div>
    </section>
  );
};

const mapStateToProps = ({ city }) => {
  return {
    city: city.city,
    country: city.country,
  };
};

export default connect(mapStateToProps, { setCityInfo, setWeatherInfo })(City);
