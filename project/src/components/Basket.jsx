import { useContext } from "react"
import { BasketItem } from "./BasketItem"
import { UserContext } from "../context"

export const Basket=()=>{
    const {state:{busket}}=useContext(UserContext)
    return <div>
        <h1>Basket</h1>
    <button>Sell</button>
<table>
    
    <thead>
    <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Count</th>
            <th>Subtotal</th>
            <th>Actions</th>
        </tr>

    </thead>
    <tbody>
                {busket.map(elm => ( <BasketItem key={elm.id} {...elm} />
      ))}
       
    </tbody>
    </table>    
    </div>
}
