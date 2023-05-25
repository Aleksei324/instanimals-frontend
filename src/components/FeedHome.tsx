import { useFeed } from "../helpers/";
import { PostHome } from "./";

export interface feedProps {
  profileID: string | undefined
}

export const FeedHome = ({profileID}: feedProps) => {

  const postsArray = useFeed(profileID)

  return (
    <>
      {
        postsArray.map( (post, key) => {
          return (
            <PostHome key={key} data={post} />
          )
        })
      }
    </>
  );
};
