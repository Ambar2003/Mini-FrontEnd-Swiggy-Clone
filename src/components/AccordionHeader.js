import AccordionBody from "./AccordionBody";
import { useState } from "react";
const AccordionHeader = ({data,showItems,setShowIndex})=>{
    const handleClick = () =>{
        setShowIndex();
    }
    return(
    <div className="m-auto">
        <div className= "w-6/12 mx-auto my-3  bg-pink-300 p-4">
            <div className="flex justify-between cursor-pointer" onClick = {handleClick}>
            <span className="font-bold text-lg">{data.title}({data.itemCards.length})</span>
            <span>🔽</span>
            </div>
            {showItems && <AccordionBody items = {data.itemCards}></AccordionBody>}
        </div>
    </div>
    )
}
export default AccordionHeader;