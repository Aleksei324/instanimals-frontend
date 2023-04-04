import { FeedHome, Layout } from "../components";
import "../styles/Home.css";

export const Home = () => {
  return (
    <Layout>
      <div className="container">
        <FeedHome profile=''/>
      </div>
    </Layout>
  );
};
