import React, {useState} from 'react'

const Basic1 = () => {

    const [product, setProducts] = useState({name: '', price: ''});

    return (
        <>
          <form>
              <input 
                type="text" 
                valud={product.name}
                onChange={evt => setProducts({...product, name: evt.target.value})}/>

              <input 
                type="text" 
                valud={product.price}
                onChange={evt => setProducts({...product, price: evt.target.value})}/>
               
          </form>
          <h1>Product name is {product.name}</h1>  
          <h1>Product price is {product.price}</h1>
        </>
    )
}

export default Basic1
