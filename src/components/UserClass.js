import React from "react"
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userInfo:{
                name:"dummy",
                avatar_url:null,
                location:"dummy",
                bio:"dummy",
            }
        };
        // console.log(this.props.name + " Constructor");
    }
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/Ambar2003");
        const json = await data.json();
        this.setState({
            userInfo:json,
        }
        )
        // console.log(json);
    }
    componentDidUpdate(){
        // console.log("Updated!");
    }
    componentWillUnmount(){
        // console.log("Unmounted!");
    }
    render(){
        // console.log(this.props.name + " Render");
        const{name,location,bio,avatar_url} = this.state.userInfo; 
        return(
            <div>
                <h1 className="px-4 font-bold text-xl">Name: {name}</h1>
                <h2 className="px-4 font-bold text-xl">Location: {location}</h2>
                <img src = {avatar_url} className="h-36 m-auto border-solid border-2 m-4 border-indigo-600 "></img>
                <h2 className="px-4 font-bold text-xl">{bio}</h2>
                </div>
         )
       }
}
export default UserClass;
