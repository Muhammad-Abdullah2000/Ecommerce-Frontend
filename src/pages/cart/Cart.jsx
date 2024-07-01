import React, { useContext } from 'react'
import { PRODUCTS } from '../../products'
import Product from '../shop/Product'
import { ShopContext } from '../../context/ShopContextProvider';
import CartItem from './CartItem';
import "./cart.css"

const Cart = () => {
  const {cartItems} = useContext(ShopContext);
  return (
    <>
     <h1>Cart Items</h1>
    <div className='cart'>
     
      <div>
        
      </div>
      <div className='cartItems' >
         {PRODUCTS.map((Product)=>{
          if (cartItems[Product.id] !== 0 ) {
            return <CartItem data={Product}/>
          }
         })}
      </div>
      
    </div>
    </>
  )
}

export default Cart
