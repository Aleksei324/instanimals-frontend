import { useState } from "react";
import { Layout } from "../components";
import "../styles/Home.css";

export const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <div className="home">
        <br/>
        <br/>
        <br/>
        <h1>Probando aaaaaaaaaaaaaaaaaa</h1>
        <button className="yellow_button" onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </button>
      </div>
    </Layout>
  );
};
