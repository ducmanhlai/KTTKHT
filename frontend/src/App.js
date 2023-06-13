import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./View/Login/Login";

import "./scss/test.scss";
import Home from "./View/Home/Home";
import Hero from "./View/Hero/Hero";
import Introduce from "./View/Introduce/Introduce";
import Skin from "./View/Skin/Skin";
import Equip from "./View/Equip/Equip";
import AHome from "./Layout/AdminLayout/Home/AHome";
import Account from "./Layout/AdminLayout/Account/Account";
// import AHeader from "./Layout/AdminLayout/AHeader/AHeader";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/news" element={<Login />} />
          <Route path="/academy" element={<Hero />}>
            <Route path="introduce" element={<Introduce />} />
            <Route path="skin" element={<Skin />} />
            <Route path="equip" element={<Equip />} />
            <Route path="skin" element={<Skin />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<AHome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<Account />} />
          <Route path="/rule" element={<Account />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
