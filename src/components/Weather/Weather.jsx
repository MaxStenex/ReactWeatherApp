import React from 'react';
import { connect } from 'react-redux';
import './Weather.scss';
import defaultIcon from '../../assets/weatherIcons/default.svg';
import atmosphereIcon from '../../assets/weatherIcons/atmosphere.svg';
import clearIcon from '../../assets/weatherIcons/clear.svg';
import cloudsIcon from '../../assets/weatherIcons/cloud.svg';
import drizzleIcon from '../../assets/weatherIcons/drizzle.svg';
import rainIcon from '../../assets/weatherIcons/rain.svg';
import snowIcon from '../../assets/weatherIcons/snow.svg';
import thunderstormIcon from '../../assets/weatherIcons/thunderstorm.svg';

const weatherIcons = {
  defaultIcon,
  Atmosphere: atmosphereIcon,
  Clear: clearIcon,
  Clouds: cloudsIcon,
  Drizzle: drizzleIcon,
  Rain: rainIcon,
  Snow: snowIcon,
  Thunderstorm: thunderstormIcon,
};

const daysInWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const Weather = (props) => {
  const dayOfWeek = daysInWeek[new Date().getDay()];
  const date = new Date().getDate() + ' ' + months[new Date().getMonth()];
  return (
    <section className='weather'>
      <div className='weather__icon'>
        <img
          src={!props.sky ? defaultIcon : weatherIcons[props.sky]}
          alt='weather'
        />
      </div>
      <div className='weather__about'>{props.sky}</div>
      <div className='weather__date'>
        {dayOfWeek}, {date}
      </div>
      <div className='weather__temperature'>
        {props.temperature
          ? props.temperature +
            '°C' +
            ' / ' +
            Math.floor((props.temperature * 9) / 5 + 32) +
            '°F'
          : '...°C   ...°F'}
      </div>
    </section>
  );
};

const mapStateToProps = ({ weather }) => {
  return {
    sky: weather.sky,
    temperature: weather.temperature,
  };
};

export default connect(mapStateToProps, {})(Weather);
