import {CDN_URL} from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
const RestaurantCard = (props) =>{
    const {resData} = props;
    const{
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
    } = resData?.info;
    const data = useContext(UserContext);
    LoggedIn = data.loggedInUser;
    const dt = resData?.info?.sla?.deliveryTime
    return(
        <div className="res-card p-4 m-4 w-[400px] bg-gray-200 hover:bg-gray-400">
            <img
            className = "res-logo"
            alt = "res-logo"
            src = {CDN_URL + cloudinaryImageId}
            />
        <h3 className="font-bold text-2xl">{name}</h3>
        <h4 className = "text-xl">{cuisines.join(", ")}</h4>
        <h4 className = "text-xl">{avgRating}</h4>
        <h4 className = "text-xl">{costForTwo}</h4>
        <h4 className = "text-xl">{dt} minutes</h4>
        <h4 className = "text-xl">{LoggedIn}</h4>
        </div>
        )
};

export const withPromotedLabel = (RestaurantCard) =>{
    return() =>{
        return(
           <div>
           <Label>Promoted</Label>
           <RestaurantCard></RestaurantCard>
           </div>     
        )
    };
};
export default RestaurantCard;