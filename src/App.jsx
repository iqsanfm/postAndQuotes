import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home.jsx";
import Posts from "./Pages/Posts";
import Quotes from "./Pages/Quotes";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Posts" element={<Posts />} />
        <Route path="/Quotes" element={<Quotes />} />
      </Routes>
    </Router>
  );
}

export default App;
