import { useAds } from "../helpers";
import { AdHome, feedProps } from ".";

export const AdsSideHome = ({profileID}: feedProps) => {

  const adsArray = useAds(profileID)

  return (
    <div role="feed">
      {
        adsArray.map( (post, key) => {
          return (
            <AdHome key={key} data={post} />
          )
        })
      }
    </div>
  )
}
