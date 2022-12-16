import React from "react";

import { Link } from "react-router-dom";

function TopButtons() {
  // const { cityname } = useParams();
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
        <Link key={city.id} to={`/city/${city.title}`}>
          <h2 className="text-white">{city.title}</h2>
        </Link>
      ))}
    </div>
  );
}

export default TopButtons;
