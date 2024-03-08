import React, { useContext, useEffect, useState } from 'react'
import { Context } from './CartContext'


function ShowCart() {
    const { cart, removeCart } = useContext(Context)

   
    const totalprice = cart.reduce((total, item) => total + item.price * item.quantity, 0)


    return (
        <div>


            {

                cart.map((item, ) => {
                    return <div key={item.id} style={{ display: 'flex', gap: "12px" }}>
                        <img style={{
                            width: '40px',

                        }} src={item.url} />
                        <span>{item.name} in {item.category}</span>
                        <button >-</button>
                        <span>
                            {item.quantity}
                            {/* {state.count} */}
                        </span>
                        <button >+</button>
                        <span> PRICE : {item.price}          Only/- </span>

                        <button onClick={() => removeCart(item)}>Remove to Cart</button>

                    </div>

                })}
            <h2>

                Total : {totalprice}

            </h2>

        </div>
    )
}

export default ShowCart