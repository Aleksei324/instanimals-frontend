import { useFeed } from "../helpers/";
import { PostHome } from "./";

interface feedProps {
  profileName: string
}

export const FeedHome = ({profileName}: feedProps) => {

  const postsArray = useFeed(profileName)

  return (
    <>
      {
        postsArray.map( (post, key) => {
          return (
            <PostHome key={key} idPost={post} />
          )
        })
      }
    </>
  );
};
