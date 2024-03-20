import {useState,useEffect} from "react";
import { CDN_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { API_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import AccordionHeader from "./AccordionHeader";
import AccordionBody from "./AccordionBody";
import { useState } from "react";
const RestaurantMenu = () =>{
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [showIndex,setShowIndex] = useState(null);
    if(resInfo === null)return <Shimmer></Shimmer>
    const {name,cuisines,costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) =>
        c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    const Close = () =>{
        setShowIndex(null);
            
    }
    return(
        <div className="m-4 p-4 w-{200px}">
            <h1 className="text-center text-3xl m-4 font-bold">{name}</h1>
            <h2 className="text-center text-2xl m-3">{(cuisines).join(",")}</h2>
            <h2 className="text-center text-2xl m-1 ">{costForTwoMessage}</h2>
            <h2 className="text-center text-6xl font-bold mb-8">Menu</h2>
            <button className="mx-[36rem] hover:bg-pink-500 text-3xl" onClick={Close}>Close all Accordions</button>
            {categories.map((category,index)=>(
        <AccordionHeader key = {category?.card?.card?.title} data = {category?.card?.card} showItems = {index == showIndex?true:false} setShowIndex = {() => setShowIndex(index)}/>
            ))}
        </div>
    )
}
export default RestaurantMenu;