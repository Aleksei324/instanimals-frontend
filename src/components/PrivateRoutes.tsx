import { Navigate, Route, Routes } from "react-router-dom";
import { Cart, Chat, Home, NotFound, Profile, Unauthorized } from "../pages/";
import { useSelector } from "react-redux";

export const PrivateRoutes = () => {

  const {tipo, auth, name} = useSelector( (state: any) => state.userSlice)
  return (
    <Routes>
      <Route path="/chat" element={ auth && tipo === 'USER' ? <Chat /> : <Unauthorized /> } />
      <Route path="/cart" element={ auth && tipo === 'USER' ? <Cart /> : <Unauthorized /> } />

      <Route path="/" element={ auth ? <Navigate to='/home' /> : <Navigate to='/login' /> } />
      <Route path="/home" element={ auth ? <Home /> : <Unauthorized /> } />
      <Route path="/profile" element={ auth ? <Navigate to={`/profile/${name}`} /> : <Unauthorized /> } />
      <Route path="/profile/:profileID" element={ auth ? <Profile /> : <Unauthorized /> } />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
