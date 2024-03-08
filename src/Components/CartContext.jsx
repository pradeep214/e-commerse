import React, { createContext ,useState} from 'react'

export const Context = createContext()
function CartContext({children}) {
  
    const [ cart, setCart] = useState([]) 

    function addCart(product){
      setCart([...cart,{...product , quantity :1}])
    }
    function removeCart(item){
      setCart(cart.filter((product)=> product.id != item.id))
    }

    
  return (
    <div>

        <Context.Provider value={{cart,addCart,removeCart}}>
            {children}
        </Context.Provider>
    </div>
  )
}

export default CartContext