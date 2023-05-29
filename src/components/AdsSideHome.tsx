import { useAds } from "../helpers";
import { AdHome, feedProps } from ".";

export const AdsSideHome = ({profileID}: feedProps) => {

  const adsArray = useAds(profileID)

  return (
    <div className="container-fluid" role="feed">
      {
        adsArray.map( (post, key) => {
          return (
            <div key={key} className="row">
              <div className="col-12">
                <AdHome data={post} />
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
