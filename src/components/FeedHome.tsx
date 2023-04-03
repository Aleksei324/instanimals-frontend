import { PostHome } from "./";

interface feedProps {
  profile: string
}

export const FeedHome = ({profile}: feedProps) => {

  return (
    <div>
      <PostHome/>
      <PostHome/>
      <PostHome/>
      <PostHome/>
      <PostHome/>
    </div>
  );
};
