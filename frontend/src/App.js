import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./View/Login/Login";
import SignUp from "./View/SignUp/SignUp";

import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/test.scss";
// import Home from "./View/Home/Home";
// import Hero from "./View/Hero/Hero";
// import Introduce from "./View/Introduce/Introduce";
// import Skin from "./View/Skin/Skin";
// import Equip from "./View/Equip/Equip";
import AHome from "./Layout/AdminLayout/Home/AHome";
import Account from "./Layout/AdminLayout/Account/Account";
import Heroes from "./Layout/AdminLayout/Heroes/Heroes";
import HeroesDetail from "./Layout/AdminLayout/Heroes/HeroesDetail";
import Skin from "./Layout/AdminLayout/Skin/Skin";
import AHeader from "./Layout/AdminLayout/AHeader/AHeader";
import Rule from "./Layout/AdminLayout/Rule/Rule";

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <AHeader />
        <Routes>
          <Route path="/" exact element={<AHome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/account" element={<Account />} />
          <Route path="/heroes" element={<Heroes />} />
          <Route path="/heroes-detail" element={<HeroesDetail />} />
          <Route path="/skin" element={<Skin />} />
          <Route path="/rule" element={<Rule />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
