import React from 'react';
import { connect } from 'react-redux';
import City from './components/City/City';
import Weather from './components/Weather/Weather';

const App = (props) => {
  return (
    <main className={!props.sky ? 'default' : props.sky}>
      <div className='container'>
        <div className='wrapper'>
          <City />
          <Weather />
        </div>
      </div>
    </main>
  );
};

const mapStateToProps = ({ weather }) => {
  return {
    sky: weather.sky,
  };
};

export default connect(mapStateToProps, {})(App);
