import React from "react";
import { Outlet } from "react-router-dom";
import TopButtons from "./TopButtons";
// import Input from "./components/Input";
// import TimeAndLocation from "./components/TimeAndLocation";
// import { TemperatureAndDetails } from "./components/TemperatureAndDetails";
// import Forecast from "./components/Forecast";

function Home() {
  return (
    <div className=" mx-auto max-w-screen-md mt-5 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 shadow-xl shadow-gray-400 ">
      <TopButtons />
      {/* <TopButtons />
      <Input />
      <TimeAndLocation />
      <TemperatureAndDetails />
      <Forecast title="hourly forecast" />
        <Forecast title="daily forecast" /> */}
      <Outlet></Outlet>
    </div>
  );
}

export default Home;
