import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Welcome from "./Welcome";
import About from "./AboutUs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
