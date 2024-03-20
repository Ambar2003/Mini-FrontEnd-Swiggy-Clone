import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";
class About extends React.Component{
    constructor(props){
        super(props);
        // console.log("Parent Constructor");
    }
    render(){
        // console.log("Parent Render");
        return(
            <div className="text-center border-solid border-2 m-4 border-indigo-600">
               <h1 className="my-4 text-4xl">
                <span className="bg-green-400">This is me!
                    </span>
                </h1>
                <div>
                        <span className="text-2xl">LoggedInUser:</span>
                        <UserContext.Consumer>
                            {
                            (data) =>(
                                <h1 className="text-red-700 text-4xl">{data.loggedInUser}</h1>
                            )}
                        </UserContext.Consumer>
                </div>
               <UserClass name = "Ambar Ahmad" location = "Bengaluru" contact = "gamesutra26@gmail.com"></UserClass>
            </div>   
           );
    }
    componentDidMount(){
        // console.log("Parent Mounted!");
    }
}
export default About;