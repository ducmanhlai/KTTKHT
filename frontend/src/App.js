import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./View/Login/Login";
import "./scss/test.scss";

import Home from "./View/Home/Home";
import Hero from "./View/Hero/Hero";
import Introduce from "./View/Introduce/Introduce";
import Skin from "./Layout/AdminLayout/Skin/Skin";
import Equip from "./View/Equip/Equip";
import Profile from "./View/Profile";
import Account from "./Layout/AdminLayout/Account/Account";
import { AuthContextProvider } from "./context/authContext";
import AHome from "./Layout/AdminLayout/Home/AHome";
// import Header from "./Component/Header/Header";

function App() {
<<<<<<< HEAD
  // let role = jwtDecode(localStorage.getItem('accessToken')).id_role;
  let role = 1;
=======
  let role = jwtDecode(localStorage.getItem('accessToken')).id_role;
>>>>>>> 0a9a928d083d51801e0a704dc636df0b05c4f78c
  return (
    <div className="app">
      <AuthContextProvider>
        <BrowserRouter>
<<<<<<< HEAD
          {/* <Header/> */}
          {role == 2 ? (
=======

          {role == 2 ?
>>>>>>> 0a9a928d083d51801e0a704dc636df0b05c4f78c
            <Routes>
              <Route path="/" exact element={<AHome />} />
              <Route path="/login" element={<Login />} />
              <Route path="/account" element={<Account />} />
              <Route path="/skin" element={<Skin />} />
            </Routes>
          ) : (
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/news" element={<Login />} />
              <Route path="/academy" element={<Hero />}>
                <Route path="introduce" element={<Introduce />} />
                
                <Route path="equip" element={<Equip />} />
                <Route path="skin" element={<Skin />} />
              </Route>
              <Route path="/profile" element={<Profile />} />
            </Routes>
          )}
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}
export default App