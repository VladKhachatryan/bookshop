import { UserContext } from "../context"
import { useContext } from "react"

export const BasketItem=({title,price,count=1,id})=>{
    const {dispatch}=useContext(UserContext)
    return <tr>
        <td>{title}</td>
        <td>{price}</td>
        <td>{count}</td>
        <td>{price*count}</td>
        <td>
            <button  onClick={()=>dispatch({type:"remove",payload:id})}>remove</button>
            <button  onClick={()=>dispatch({type:"addCount",payload:id})}>+</button>
            <button onClick={()=>dispatch({type:"disCount",payload:id})}>-</button>
            
        </td>
    </tr>
}