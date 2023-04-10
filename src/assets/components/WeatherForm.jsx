import React from 'react';

const WeatherForm = ({ getWeather }) => {
  return (
    <div className="p-12">
      <form className="flex flex-row justify-center items-center" onSubmit={getWeather}>
        <input
          className="mx-3 border border-black text-center rounded-2xl"
          type="text"
          name="city"
          placeholder="Your city name"
        />
        <button className="px-3 mx-3 rounded bg-sky-500 hover:bg-sky-700 ...">
          Get Weather
        </button>
      </form>
    </div>
  );
};

export default WeatherForm;
