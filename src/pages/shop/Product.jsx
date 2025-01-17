 import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContextProvider';

const Product = (props) => {
    const {id, productName, price, productImage} = props.data;
        const {addToCart,cartItems} = useContext(ShopContext);

         const cardItemAmount = cartItems[id]
  return (
    <div className='product'>
      <img src={productImage} />
      <div className='description'>
           <p><b>{productName}</b></p>
           <p>Rs {price}</p>
      </div>
      <button className='addToCartBttn' onClick={()=> addToCart(id)} >Add To Cart
      {cardItemAmount > 0 && <> ({cardItemAmount})  </>}
      </button>
    </div>
  )
}

export default Product
