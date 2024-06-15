export const BasketItem=({title,price,count,id,addCount,removeCount,removeFromBusket})=>{
    return <tr>
        <td>{title}</td>
        <td>{price}</td>
        <td>{count}</td>
        <td>{price*count}</td>
        <td>
            <button onClick={()=>removeFromBusket(id)}>remove</button>
            <button onClick={()=>addCount(id)}>+</button>
            <button onClick={()=>removeCount(id)}>-</button>
        </td>
    </tr>
}