import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TemperatureAndDetails from "./TemperatureAndDetails";

function NavDetails() {
  const [data, setData] = useState({});
  const { cityName } = useParams();
  const API_KEY = "f83a84ae91963bad61cc4256bd387cd7";
  const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?q=";

  useEffect(() => {
    console.log(cityName);
    fetch(BASE_URL + `${cityName}&appid=${API_KEY}`)
      .then((res) => {
        return res.json();
      })
      .then((responseValue) => {
        console.log(typeof responseValue);
        let { main: value } = responseValue;
        // setData([...responseValue.main]);
        setData(value);
        console.log(value);
      });
  }, {});

  return (
    <div>
      <TemperatureAndDetails passedValue={data} />;
    </div>
  );
}

export default NavDetails;
