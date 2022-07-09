import React, { useState } from "react";
import { useEffect } from "react";

const Tempapp = () => {
  const [curValue, setValue] = useState(null);
  const [search, setSearch] = useState("Mumbai");
  useEffect(() => {
    const fetchApi = async () => {
      const URL = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=252add44d518e7402c824b9747b655ea`;
      const response = await fetch(URL); //fetch is a funciton in which a promise is written
      const resjson = await response.json();
      setValue(resjson.main);
    };
    fetchApi();
  }, [search]);
  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            className="inputField"
            value={search}
            placeholder="Search"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>

        {curValue ? (
          <div>
            <div className="info">
              <h2 className="location">
                <i className="fas fa-street-view"></i>
                {search}
              </h2>
              <h1 className="temp">{curValue.temp} Cel</h1>
              <h3 className="tempmin_max">
                Min:{curValue.temp_min} Cel | Max :{curValue.temp_min} Cel
              </h3>

              <h3 className="tempmin_max">
                Humidity:{curValue.humidity} g.m-3
              </h3>
              <h3 className="tempmin_max">Pressure:{curValue.pressure} Pa</h3>
            </div>
            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
          </div>
        ) : (
          <div className="error">
            <p>No Data found</p>
          </div>
        )}
      </div>
    </>
  );
};
export default Tempapp;

//
