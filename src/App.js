import TopButtons from "./components/TopButtons";
import Input from "./components/Input";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import Forecast from "./components/Forecast";

function App() {
  return (
    <div className=" mx-auto max-w-screen-md mt-5 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 shadow-xl shadow-gray-400 ">
      <TopButtons />
      <Input />

      <TimeAndLocation />
      <TemperatureAndDetails />
      <Forecast />
    </div>
  );
}

export default App;
