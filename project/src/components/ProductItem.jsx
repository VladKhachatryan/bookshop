import { useContext } from "react"
import { UserContext } from "../context"

export const ProductItem=({title,id,price,photo})=>{
    const {dispatch}=useContext(UserContext)
    return <div>
        <img className="img" src={photo} />
        <p>{title}</p> 
        <p><strong>{price}USD</strong></p>
        
<button onClick={() => dispatch({ type: "move", payload: id })}>Move</button>
 </div>
}