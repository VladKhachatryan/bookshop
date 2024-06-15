import { ProductItem } from "./ProductItem"

export const ProductList=({items,onMove})=>{
    return <div>
        <h1>Product List</h1>
        <div className="list">
            {
                items.map(elm=><ProductItem key={elm.id} {...elm} onMove={onMove}/>)
            }
        </div>
    </div>
}