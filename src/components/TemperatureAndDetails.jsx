import React, { useEffect } from "react";
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";

function TemperatureAndDetails(props) {
  useEffect(() => {
    console.log(props.passedValue);
  });
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>Cloudy or whatever</p>
      </div>

      <div className="flex flex-row items-center justify-between text-white py-3">
        <img
          src="http://openweathermap.org/img/wn/01d@2x.png"
          alt="0"
          className="w-20"
        />
        <p className="text-5xl">{props.passedValue.temp}</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm justify-start">
            <UilTemperature size={18} className="mr-1" />
            Real fell:
            <span className="font-medium ml-1">
              {props.passedValue.feels_like}
            </span>
          </div>
          <div className="flex font-light text-sm justify-start">
            <UilTear size={18} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">
              {props.passedValue.humidity}
            </span>
          </div>
          <div className="flex font-light text-sm justify-start">
            <UilWind size={18} className="mr-1" />
            Wind:
            <span className="font-medium ml-1">45 km/hr</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <UilSun />
        <p className="font-light">
          Rise: <span className="font-medium ml-1">06:45 AM</span>
        </p>
        <p className="font-light">|</p>
        <UilSunset />
        <p className="font-light">
          Set: <span className="font-medium ml-1">07:45 PM</span>
        </p>
        <p className="font-light">|</p>
        <UilSun />
        <p className="font-light">
          High: <span className="font-medium ml-1">40</span>
        </p>
        <p className="font-light">|</p>
        <UilSun />
        <p className="font-light">
          Low: <span className="font-medium ml-1">1</span>
        </p>
        <p className="font-light">|</p>
      </div>
    </div>
  );
}

export default TemperatureAndDetails;
