import { BasketItem } from "./BasketItem"

export const Basket=({items,addCount,removeCount,removeFromBusket})=>{
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
        {
            items.map(elm=><BasketItem key={elm.id} {...elm} addCount={addCount} removeCount={removeCount}  removeFromBusket={removeFromBusket}/>)
           
            
        }
       
    </tbody>
    </table>    
    </div>
}