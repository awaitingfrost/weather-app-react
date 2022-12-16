import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavDetails from "./components/NavDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/city/:cityName" element={<NavDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
