import React from 'react';

function App() {
  return (
    <main>
      <div className='container'>
        <div className='wrapper'>
          <section className='city'>
            <div className='city__name'>Paris, FR</div>
            <div className='city__name-input'>
              <input type='text' placeholder='Select...' />
              <button>Find</button>
            </div>
          </section>
          <section className='weather'>
            <div
              src='img/Weather/weatherIcon.svg'
              alt=''
              className='weather__icon'
            >
              <svg
                enable-background='new 0 0 512 512'
                height='512'
                viewBox='0 0 512 512'
                width='512'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g id='Cloud_1_'>
                  <g>
                    <path d='m421 406h-330c-24.05 0-46.794-9.327-64.042-26.264-17.384-17.069-26.958-39.705-26.958-63.736s9.574-46.667 26.958-63.736c13.614-13.368 30.652-21.995 49.054-25.038-.008-.406-.012-.815-.012-1.226 0-66.168 53.832-120 120-120 24.538 0 48.119 7.387 68.194 21.363 14.132 9.838 25.865 22.443 34.587 37.043 14.079-8.733 30.318-13.406 47.219-13.406 44.886 0 82.202 33.026 88.921 76.056 18.811 2.88 36.244 11.581 50.122 25.208 17.383 17.069 26.957 39.704 26.957 63.736s-9.574 46.667-26.957 63.736c-17.249 16.937-39.993 26.264-64.043 26.264zm-330-150c-33.636 0-61 26.916-61 60s27.364 60 61 60h330c33.636 0 61-26.916 61-60s-27.364-60-61-60h-15v-15c0-33.084-26.916-60-60-60-15.766 0-30.68 6.12-41.995 17.233l-16.146 15.858-8.315-21.049c-13.689-34.651-46.482-57.042-83.544-57.042-49.626 0-90 40.374-90 90 0 3.544.556 7.349 1.144 11.378l2.687 18.622z' />
                  </g>
                </g>
              </svg>
            </div>
            <div className='weather__about'>Clouds</div>
            <div className='weather__date'>Web, Sep 12</div>
            <div className='weather__temperature'>21° / 25°</div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default App;
