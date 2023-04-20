import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Login, Tyc } from "./pages";
import { PrivateRoutes } from "./components";
import "./styles/global.css";
import { Provider } from "react-redux";
import { reduxStore } from "./store/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Provider store={reduxStore}>
      <Routes>
        {/** Rutas a las diferentes paginas */}
        <Route path="/login" element={<Login />} />
        <Route path="/tyc" element={ <Tyc /> } /> 

        <Route path="/*" element={
          <PrivateRoutes />
        } />
      </Routes>
    </Provider>
  </BrowserRouter>
);
