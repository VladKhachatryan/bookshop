import { ProductItem } from "./ProductItem"
import { UserContext } from "../context"
import React,{ useContext } from "react"
export const ProductList=()=>{
    const{state:{products}}=useContext(UserContext)
    return<>
    
    <div className="products">
        <h1 >Products</h1>
    {
        products.map(elm=><ProductItem key={elm.id}{...elm}/>)
    }
    </div>
    </>
}