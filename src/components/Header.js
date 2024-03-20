import {LOGO_URL} from "../utils/constants";
import React from "react";
import {useState,useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () =>{
    const [btnNameReact,setBtnNameReact] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const data = useContext(UserContext);
    const LoggedInData = data.loggedInUser;
    const userItem = useSelector((store)=>store.cart.items);
    return(
    <div className="flex justify-between  sm: bg-green-500 sm:bg-pink-300">
        <div className = "logo-container">
            <img className = "w-56" src = {LOGO_URL}></img>
        </div>
        <div className="flex items-center">
            <ul className="flex">
                <li className="px-2  text-xl">
                    Online Status:{onlineStatus === false?"🔴":"✅"}
                </li>
                    
                <li className="px-2 hover:bg-pink-500 text-xl">
                    <Link to = "/">
                        Home
                    </Link>
                    </li>
                <li className="px-2 hover:bg-pink-500 text-xl">
                    <Link to="/About">About Us
                    </Link>
                    </li>
                    <li className="px-2 hover:bg-pink-500 text-xl">
                    <Link to = "/Contact">
                    Contact Us
                    </Link>
                    </li>
                    <li className="px-2 hover:bg-pink-500 text-xl">
                        <Link to = "/grocery">
                            Grocery
                        </Link>
                    </li>
                <li className="px-2 hover:bg-pink-500 text-2xl"><Link to = "/cart">🛒({userItem.length})</Link></li>
                 <button
                 className="Login flex items-center flex-wrap  text-xl  hover:bg-pink-500 px-2"
                 onClick={() =>{
                    btnNameReact ==="Login"?
                    setBtnNameReact("Logout"):setBtnNameReact("Login");
                 }}>
                    {btnNameReact}
                  </button>
                  <li className="px-2  text-xl">{LoggedInData}</li>
                 </ul>
        </div>
    </div>
    );
};
export default Header;