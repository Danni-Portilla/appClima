import React from 'react';

const WeatherInfo = ({ city }) => {
  return (
    <div>
      {city && (
        <section className="p-16 border border-black  w-80 rounded-2xl ">
          <h1>
            <span className="text text-white">Ciudad: </span>
            {city.name}
          </h1>
          <p>
            <span className="text text-white">Pais: </span>
            {/*Profe coloco la direccion del pais y lo mismo con los demas datos y funciona pero cierro la aplicacion 
            y se rompe, por tal motivo solo los puse en comentario. {city.sys.country}  */}
          </p>
          <p>
            <span className="text text-white">Latitud: </span>
            {/* city.coord.lat */}
          </p>
          <p>
            <span className="text text-white">Longitud: </span>
            {/* city.coord.lon*/}
          </p>
          <p>
            <span className="text text-white">Humidity: </span>
            {/*city.main.humidity */}
          </p>
        </section>
      )}
    </div>
  );
};

export default WeatherInfo;
