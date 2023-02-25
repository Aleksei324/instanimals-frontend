import { useState } from "react";
import "../styles/Home.css";

export const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Probando aaaaaaaaaaaaaaaaaa</h1>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
  );
};
