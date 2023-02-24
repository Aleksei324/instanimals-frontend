import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      - Header test - <br />
      <Link to="/"> Instanimals </Link> <br />
      <Link to="/login"> login </Link>
    </header>
  );
};
