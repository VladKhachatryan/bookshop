import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { ProductItem } from './components/ProductItem'
import { ProductList } from './components/ProductList'
import { Basket } from './components/Basket'
import { BasketItem } from './components/BasketItem'
import './App.css'

function App() {

  const[products,setProducts]=useState([
    {id:101,title:"Psychology",price:40,photo:"https://m.media-amazon.com/images/I/91AiNeHUoNL._AC_UF1000,1000_QL80_.jpg"},
    {id:102,title:"Criminal",price:32,photo:"https://cs1.htmlacademy.ru/blog/js/books-javascript/759a9a773e9f82610bbea2e8fccc3e6e.webp"},
    {id:103,title:"History",price:20,photo:"https://img4.labirint.ru/rc/a634c9868c8e5aff0fd716fd4d5bcb16/363x561q80/books13/123468/cover.jpg?1280394613"},
    {id:104,title:"Poem",price:26,photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxujkL-2LxTGR1YVQqj1ccM5oHiSnWqPbQaQ&s"},
    {id:105,title:"Javascript",price:50,photo:"https://habrastorage.org/getpro/habr/upload_files/9ed/16f/b06/9ed16fb063f42b670e7da85452701699.png"},
  ])
  const [busket,setBusket]=useState([])
  const moveToCard=id=>{
    let found=products.find(x=>x.id==id)
    let inBusket=busket.find(x=>x.id==id)
    if(busket.includes(inBusket)){
      setBusket(busket.map(x => x.id === id ? { ...x, count: x.count + 1 } : x))    
    }
      else{
        setBusket([...busket,{...found,count:1}])

      }
  }
  const addCount=id=>{
   setBusket(busket.map(elm=>elm.id===id?{...elm,count:elm.count+1}:elm))
 }
 const removeCount=id=>{
  setBusket(busket.map(elm=>elm.id===id&& elm.count>1?{...elm,count:elm.count-1}:elm))
 }
const removeFromBusket=id=>{
  setBusket(busket.filter(x=>x.id!=id))
}


  const applySale = () => {
  };
return<>
<div className='row'>
  <ProductList  
  items={products} onMove={moveToCard}/>
  <Basket items={busket} addCount={addCount} removeCount={removeCount}removeFromBusket={removeFromBusket} />
  
  
</div>




</>
}

export default App
