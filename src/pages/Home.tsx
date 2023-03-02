import { FeedHome, Layout, UploadImageHome } from "../components";
import "../styles/Home.css";

export const Home = () => {

  return (
    <Layout>
      <div className="home">
        <UploadImageHome/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <FeedHome/>
      </div>
    </Layout>
  );
};
