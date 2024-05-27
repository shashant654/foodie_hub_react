import { img_cdn_url } from "../Contants";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  // const {name, cuisines, cloudinaryImageId, lastMileTravelString} = restaurant.info;
  return (
    <div className="card">
      <img className="image" src={img_cdn_url + cloudinaryImageId} alt="" />
      
      <p>{name}</p>
      <p>{cuisines.join(", ")}</p>
      {/* <p>{lastMileTravelString} minutes</p> */}
    </div>
  );
};

export default RestaurantCard;