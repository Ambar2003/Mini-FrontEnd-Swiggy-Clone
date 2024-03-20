import { useRouteError } from "react-router-dom";
import { ERR_URL } from "../utils/constants";
const Error = () =>{
    const err = useRouteError();
    console.log(err);
    return(
        <div>
            <h1 className="text-center text-[4rem] text-red-600">Oops!!!</h1>
            <h2 className="text-center text-[4rem] text-red-600" >Something went wrong!!!!!!</h2>
            <h3 className="text-center text-[4rem]">
                <span className="bg-red-700">
                {err.status } { err.statusText}
                    </span>
                    </h3>
            <img className="mx-96 h-96" src = {ERR_URL}></img>
        </div>
    )
};
export default Error;