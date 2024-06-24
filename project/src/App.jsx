import { useReducer } from 'react'
import { ProductItem } from './components/ProductItem'
import { ProductList } from './components/ProductList'
import { Basket } from './components/Basket'
import { BasketItem } from './components/BasketItem'
import './App.css'
import { UserContext, initialState, reducer } from './context'

function App() {
  const [state,dispatch]=useReducer(reducer,initialState)
return<>
<UserContext.Provider value={{state,dispatch}}>
  <ProductList />
  <Basket/>
  </UserContext.Provider>
</>
}

export default App
