import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { reduxStore } from "./store/store";

import { Login, Tyc } from "./pages";
import { PrivateRoutes } from "./components";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/global.css";

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
