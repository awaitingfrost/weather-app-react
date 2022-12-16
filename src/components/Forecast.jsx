import React from "react";

function Forecast() {
  return (
    <div>
      <div className="flex items-center justify-start mt-6">
        <p className="text-white text-medium uppercase"> </p>
      </div>

      <hr className="my-2" />

      <div className="flex flex-row items-center justify-between text-white">
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">04:35 PM</p>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            className="w-12 my-1"
            alt=""
          />
          <p className="font-medium">22</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">04:35 PM</p>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            className="w-12 my-1"
            alt=""
          />
          <p className="font-medium">22</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">04:35 PM</p>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            className="w-12 my-1"
            alt=""
          />
          <p className="font-medium">22</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">04:35 PM</p>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            className="w-12 my-1"
            alt=""
          />
          <p className="font-medium">22</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">04:35 PM</p>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            className="w-12 my-1"
            alt=""
          />
          <p className="font-medium">22</p>
        </div>
      </div>
    </div>
  );
}

export default Forecast;
