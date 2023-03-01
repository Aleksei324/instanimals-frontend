import { Link } from "react-router-dom";
import '../styles/Header.css'

export const Header = () => {
  return (
    <header className="header">
      - Header test - <br />
      <Link to="/"> INSTANIMALS </Link> -
      <Link to="/cart"> cart </Link> -
      <Link to="/login"> login </Link> -
      <Link to="/profile"> profile </Link>
    </header>
  );
};
