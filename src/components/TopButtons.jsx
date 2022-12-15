import React from "react";
import { useEffect, useState } from "react";
import TemperatureAndDetails from "./TemperatureAndDetails";

const API_KEY = "f83a84ae91963bad61cc4256bd387cd7";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?q="; // ${city.title}&appid=${API_KEY}`;

function GetData(prop) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(BASE_URL + `${prop.title}&appid=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  console.log(data);
  return (
    <div>
      <TemperatureAndDetails data={data} />;
    </div>
  );
}

function TopButtons() {
  const cities = [
    {
      id: "1",
      title: "london",
    },
    {
      id: "2",
      title: "butwal",
    },

    {
      id: "3",
      title: "tokyo",
    },
    {
      id: "4",
      title: "kathmandu",
    },
  ];

  return (
    <div className="flex justify-around items-center">
      {cities.map((city) => (
        <button
          key={city.id}
          onClick={GetData(city)}
          className="text-white text-lg font-medium"
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
