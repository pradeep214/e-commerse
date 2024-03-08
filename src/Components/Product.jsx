import React, { useContext } from 'react'
import { Context } from './CartContext'
import Allroutes from './Allroutes'
function Product() {
    const { addCart } = useContext(Context)
    const list = [
        {id:1,
            url: 'https://rukminim1.flixcart.com/image/300/300/l51d30w0/shoe/z/w/c/10-mrj1914-10-aadi-white-black-red-original-imagft9k9hydnfjp.jpeg?q=70',
            name: 'TRQ White Shoes',
            category: 'Shoes',

            price: 1999
        },
        {id:2,
            url: 'https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch-500x500.jpg',
            name: 'LOREM Watch Black',
            category: 'Watches',

            price: 2599
        },
        {id:3,
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq39iB_cO6uhZ59vubrqVuYTJQH-4Qa0hU9g&usqp=CAU',
            name: 'AMZ Laptop 8GB RAM',
            category: 'Laptops',

            price: 50000
        },
        {id:4,
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfvoDzLqrT7GwU3z7Ccp0Cl9rV0ZnU9DcmEg&usqp=CAU',
            name: 'Security Camera',
            category: 'CCTV',

            price: 4000
        },
        {
            id:5,
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG9e8Axt-h9q8EIybKfjGzbkIWJAr50_BX7Q&usqp=CAU',
            name: 'Watch Pink',
            category: 'Watches',

            price: 2000
        },
        {
            id:6,
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9xzgtOpMxdpfgBOg3OKsEqYRkNBbuprJj4w&usqp=CAU',
            name: 'Cup red Color',
            category: 'Cup',

            price: 100
        },]


  return (
    <div>
       
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>


                {list.map((item) => {
                    return <div key={item.id} style={{
                        margin: '50px 30px',
                        background: '#eee',
                        width: '27%'
                    }}>
                        <img style={{
                            width: '100%',
                            height: '300px'
                        }} src={item.url} />
                        <p>{item.name} in {item.category}</p>

                        <p> PRICE : {item.price} Only/- </p>

                        <button onClick={() => addCart(item)}>Add to Cart</button>
                    </div>
                })}
            </div>

    </div>
  )
}


export default Product