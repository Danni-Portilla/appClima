import React, { useState } from 'react';
import axios from 'axios';
import WeatherInfo from './assets/components/WeatherInfo';
import WeatherForm from './assets/components/WeatherForm';

const App = () => {
  const [cityInfo, setCityInfo] = useState({});

  const getWeather = async (e) => {
    e.preventDefault();
    const { city } = e.target.elements;
    const cityValue = city.value;
    const Api_url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${'faa68879b3346165c3d7c3956c2bf33d'}`;
    try {
      const res = await axios.get(Api_url);
      setCityInfo(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const dat = cityInfo;
  return (
    <div>
      <header className="bg-blue-300 place-content-center h-16 m-3 text-3xl rounded-xl text-left p-3">
        <h1>App Clima 🌤⛈🌥🌦🌧🌨🌩🌪🌞 </h1>
      </header>
      <section className="text-center text-2xl">
        <WeatherForm getWeather={getWeather} />
        <div className="flex justify-center">
          <WeatherInfo city={dat} />
        </div>
      </section>
    </div>
  );
};

export default App;
