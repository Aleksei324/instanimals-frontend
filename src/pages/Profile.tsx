import { FeedHome, Layout } from "../components";

export const Profile = () => {
  const getNombre = 'Matru' //TODO

  return (
    <Layout>
      <div className="profile">
        <br/>
        <FeedHome profile={getNombre} />
      </div>
    </Layout>
  );
};
