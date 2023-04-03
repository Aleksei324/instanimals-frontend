import { Navigate, Route, Routes } from "react-router-dom";
import { Cart, Chat, Home, NotFound, Profile, Unauthorized } from "../pages/";

export const PrivateRoutes = () => {
  const loggedUser = true // TODO
  const loggedVet = false // TODO

  return (
    <Routes>
      <Route path="/chat" element={ loggedUser ? <Chat /> : <Unauthorized /> } />
      <Route path="/cart" element={ loggedUser ? <Cart /> : <Unauthorized /> } />

      <Route path="/" element={ loggedUser || loggedVet ? <Navigate to='/home' /> : <Unauthorized /> } />
      <Route path="/home" element={ loggedUser || loggedVet ? <Home /> : <Unauthorized /> } />
      <Route path="/profile" element={ loggedUser || loggedVet ? <Profile /> : <Unauthorized /> } />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
