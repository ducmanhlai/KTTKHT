import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import jwtDecode from "jwt-decode";
import Login from "./View/Login/Login";
import SignUp from "./View/SignUp/SignUp";

import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/test.scss";

import Home from "./Layout/UserLayout/Home/Home";
import Hero from "./Layout/UserLayout/Hero/Hero";
import Profile from "./Layout/UserLayout/Profile/Profile";
import HeroDetail from "./Layout/UserLayout/HeroDetail/HeroDetail";
import Header from "./Layout/UserLayout/Header/Header";
import Footer from "./Layout/UserLayout/Footer/Footer";

import Introduce from "./View/Introduce/Introduce";
import Equip from "./View/Equip/Equip";
import Profile from "./View/Profile/Profile";
import HeroDetail from "./Component/HeroDetail/HeroDetail";
import { AuthContextProvider } from "./context/authContext";

import Skin from "./Layout/AdminLayout/Skin/Skin";
import AHome from "./Layout/AdminLayout/Home/AHome";
import Account from "./Layout/AdminLayout/Account/Account";
import HeroDetails from "./Layout/AdminLayout/Heroes/HeroesDetail";
import Heroes from "./Layout/AdminLayout/Heroes/Heroes";
import AHeader from "./Layout/AdminLayout/AHeader/AHeader";
import Rule from "./Layout/AdminLayout/Rule/Rule";
import Item from "./Layout/AdminLayout/Item/Item";

function App() {
  let role = localStorage.getItem("accessToken")
    ? jwtDecode(localStorage.getItem("accessToken")).id_role
    : 1;
  return (
    <div className="app">
      <AuthContextProvider>
        <BrowserRouter>
          {role === 2 ? (
            <>
              <AHeader />
              <Routes>
                <Route path="/" exact element={<AHome />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/account" element={<Account />} />
                <Route path="/heroes" element={<Heroes />} />
                <Route path="/heroes-detail/:id" element={<HeroDetails />} />
                <Route path="/skin" element={<Skin />} />
                <Route path="/rule" element={<Rule />} />
                <Route path="/item" element={<Item />} />
              </Routes>
            </>
          ) : (
            <>
              <Header />
              <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/news" element={<Login />} />
                <Route path="/hero" element={<Hero />} />
                <Route path="/hero/detail" element={<HeroDetail />} />
                <Route path="/academy" element={<Hero />}>
                  <Route path="introduce" element={<Introduce />} />
                  <Route path="equip" element={<Equip />} />
                  <Route path="skin" element={<Skin />} />
                </Route>
                <Route path="/skin" element={<Skin />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
              <Footer />
            </>
          )}
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}
export default App;
