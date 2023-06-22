import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import jwtDecode from "jwt-decode";
import Login from "./View/Login/Login";
import SignUp from "./View/SignUp/SignUp";

import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/test.scss";
// import Home from "./View/Home/Home";

// import Introduce from "./View/Introduce/Introduce";
// import Skin from "./View/Skin/Skin";
// import Equip from "./View/Equip/Equip";

import Home from "./View/Home/Home";
import Hero from "./View/Hero/Hero";
import Introduce from "./View/Introduce/Introduce";
import Skin from "./Layout/AdminLayout/Skin/Skin";
import Equip from "./View/Equip/Equip";
import Profile from "./View/Profile";
import HeroDetail from "./Component/HeroDetail/HeroDetail";
import { AuthContextProvider } from "./context/authContext";

import AHome from "./Layout/AdminLayout/Home/AHome";
import Account from "./Layout/AdminLayout/Account/Account";
import HeroDetails from "./Layout/AdminLayout/Heroes/HeroesDetail";
import Heroes from "./Layout/AdminLayout/Heroes/Heroes";
import Header from "./Component/Header/Header";
import AHeader from "./Layout/AdminLayout/AHeader/AHeader";
import Footer from "./Component/Footer/Footer";
import Rule from "./Layout/AdminLayout/Rule/Rule";

function App() {
  let role = localStorage.getItem("accessToken")
    ? jwtDecode(localStorage.getItem("accessToken")).id_role
    : 1;
  // let role = 2;
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
