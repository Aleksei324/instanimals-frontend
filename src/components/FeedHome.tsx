import { useFeed } from "../helpers/";
import { PostHome } from "./";

export interface feedProps {
  profileID: string | undefined
}

export const FeedHome = ({profileID}: feedProps) => {

  const postsArray = useFeed(profileID)

  return (
    <div className="container-fluid">
      {
        postsArray.map( (post, key) => {
          return (
            <div key={key} className="row">
              <div className="col-12">
                <PostHome data={post} />
              </div>
            </div>
          )
        })
      }
    </div>
  );
};
