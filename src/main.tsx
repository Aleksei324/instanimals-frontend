import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, Cart, Login, Profile, NotFound, Tyc } from "./pages";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          {/** Rutas a las diferentes paginas */}
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/tyc" element={<Tyc/>}/>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
