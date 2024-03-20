import Cart from "./components/Cart";
import React,{lazy, Suspense,useContext} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestarurantMenu";
import Shimmer from "./components/Shimmer";
import { useEffect } from "react";
import UserContext from "./utils/UserContext";
import { useState } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Order from "./components/Order";
const AppLayout = () =>{
    const [userName,setUserName] = useState();
    useEffect(()=>{
            const data = {
            name:"Ambar Ahmad",
        }
        setUserName(data.name);
    },[]);
    return(
        <Provider store = {appStore}>
        <UserContext.Provider value = {{loggedInUser:userName,setUserName}}>
    <div className = "app">
        <Header/>
        <Outlet/>
    </div>
    </UserContext.Provider>
    </Provider>
    );
};
const Grocery = lazy(()=>import("./components/Grocery"));
const About = lazy(()=>import("./components/About"));
    const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
       children:[
        {
            path:"/",
            element:<Body/>,
        },
        {
            path:"/about",
            element:(<Suspense fallback = {<Shimmer></Shimmer>}><About/></Suspense>),
        },
        {
            path:"/contact",
            element:<Contact/>,  
        },
        {
            path:"/grocery",
            element:(<Suspense fallback = {<Shimmer></Shimmer>}><Grocery/></Suspense>),  
        },
        {
            path:"/resm/:resId",
            element:<RestaurantMenu/>
        },
        {
            path:"/shimmer",
            element:<Shimmer></Shimmer>
        },
        {
            path:"/cart",
            element:<Cart></Cart>
        },
        {
            path:"/order",
            element:<Order></Order>,
        },
       ],
        errorElement:<Error/>
    },
]);
const Title = () =>(
    <h1 className = "head" tabIndex = "5">
        Namaste React using JSX🚀
    </h1>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter}/>);
