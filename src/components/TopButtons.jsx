import React from "react";

function TopButtons() {
  const cities = [
    {
      id: "1",
      title: "london",
    },
    {
      id: "2",
      title: "nepal",
    },

    {
      id: "3",
      title: "tokyo",
    },
  ];

  return (
    <div className="flex justify-around items-center">
      {cities.map((city) => (
        <button key={city.id} className="text-white text-lg font-medium">
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
