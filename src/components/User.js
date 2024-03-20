import React from "react";
import { useState } from "react";
import { useEffect } from "react";
const User = () =>{
    useEffect(
        () =>{
                const timer = setInterval(() =>{
                    console.log("Champion!");
                },1000)
    
            return () =>{
                clearInterval(timer);
            };
        },[]
        );
        const[count1,setCount1] = useState(0);
    const[count2,setCount2] = useState(200); 
     return(
        <div>
            <h1 className="px-4 font-bold text-xl">Name:Ambar Ahmad</h1>
            <h1 className="px-4 font-bold text-xl">Location:Bengaluru</h1>
            <h1 className="px-4 font-bold text-xl">Contact:gamesutra26@gmail.com</h1>
            <h1 className="px-4 font-bold text-xl">Years of Industry Experience: {count1}</h1>
            <h1 className="px-4 font-bold text-xl">No. of LeetCode Questions solved:{count2}<span className="text-2xl m-[-2]">+</span>
            </h1>
            <span className="py-1 bg-green-400 round-lg">
            <button className="px-4 font-bold text-xl my-4 hover:bg-green-500 rounded-lg" onClick={(e) =>{
                setCount1(count1 + 1);
                setCount2(count2 + 1);
                
            }}
    >Update my statistics!</button>
            </span>
        </div>
     )
}
export default User;