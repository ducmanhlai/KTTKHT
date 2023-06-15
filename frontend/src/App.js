import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import jwtDecode from "jwt-decode";
import Login from "./View/Login/Login";

import "./scss/test.scss";
import Home from "./View/Home/Home";
import Hero from "./View/Hero/Hero";
import Introduce from "./View/Introduce/Introduce";
import Skin from "./View/Skin/Skin";
import Equip from "./View/Equip/Equip";
import Profile from "./View/Profile";
import Account from "./Layout/AdminLayout/Account/Account";
import { AuthContextProvider } from "./context/authContext";
import AHome from "./Layout/AdminLayout/Home/AHome";

function App() {
  let role = jwtDecode(localStorage.getItem('accessToken')).id_role;
  return (
    <div className="app">
      <AuthContextProvider>
        <BrowserRouter>

          {role == 2 ?
            <Routes>
              <Route path="/" exact element={<AHome />} />
              <Route path="/login" element={<Login />} />
              <Route path="/account" element={<Account />} />
            </Routes>
            :
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
              <Route path="/profile" element={<Profile />} />
            </Routes>
          }
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
