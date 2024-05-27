import React from "react";
import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";


const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.182902447926146&lng=74.9267229437828&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    // console.log( json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setAllRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  
    );
    
  }

  return (
    <div className="restaurant-list">
      {/* <RestaurantCard /> */}
      {allRestaurants.map((restaurant) => {
          return (
                    <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
          )
      })}
    </div>
  );
};

export default Body;
