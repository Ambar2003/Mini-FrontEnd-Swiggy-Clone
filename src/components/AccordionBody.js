import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
const AccordionBody = ({items}) =>{
    const dispatch = useDispatch();
    const addHandler = (item) =>{
        dispatch(addItem(item));
        console.log(item);
    }
    return(
        <div>
                {items.map(
                    (item) => (
                    <div className="my-4 border-pink-400 border-b-2" key = {item.card.info.id}>
                        <p className="m-2">
                        {item.card.info.name}- ₹{item.card.info.price == null?item.card.info.defaultPrice/100:item.card.info.price/100}
                        <div>
                        </div>
                        <div>
                        <button className="absolute mx-16 rounded-lg right-auto p-2 bg-black text-white" onClick = {() => {addHandler(item)}}>Add+</button>
                        <img className = "w-48 h-48 my-4"src = {CDN_URL + item.card.info.imageId}>
                            </img>
                            </div>
                        </p>
                        <p className="m-2">{item.card.info.description}</p>
                    </div>
                ))}
        </div>
    )
}
export default AccordionBody;