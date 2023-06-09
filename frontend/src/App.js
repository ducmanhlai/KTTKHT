import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./View/Login/Login";

import "./scss/test.scss";
import Home from "./View/Home/Home";
import Hero from "./View/Hero/Hero";
import Introduce from "./View/Introduce/Introduce";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/news" element={<Login />} />
          <Route path="/academy" element={<Hero />}>
            {/* <Route path="/skin" element={<Introduce />} /> */}
          </Route>
        </Routes>
        {/* <Hero /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
