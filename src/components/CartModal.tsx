import React from 'react'
import { useAppDispatch, useAppSelector } from '../store'
import ModelOverlay from './ModelOverlay'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import dataSlice from '../store/dataSlice';
import CartItem from './CartItem'

const CartModal = () => {
    const dispatch = useAppDispatch();
    const modelOpen = useAppSelector(state => state.data.cartModelOpen)
    const cartItems = useAppSelector(state => state.data.cart)
    
  return (
    <ModelOverlay modelOpen={modelOpen} >
        <div className='h-screen w-full overflow-scroll px-2 sm:w-6/12 md:w-5/12  lg:w-3/12 fixed right-0 top-0 bg-primary shadow-lg rounded-xl shadow-gray-500'>
            <div className='m-5'
            onClick={() => dispatch(dataSlice.actions.controlModel({type:"OFF",tab:"CART"}))}
            >
                <FontAwesomeIcon icon={faClose} fontSize={30} className='text-secondary border-2 rounded-full w-10 h-10 p-1 border-secondary ' />
            </div>
            <div className='grid grid-cols-1 grid-flow-row'>
              {
                  cartItems.map(cartItem => 
                    <CartItem cartItem={cartItem} key={cartItem.id} />
                  )
              }
            </div>
            <div className='w-full px-2 sm:w-6/12 md:w-5/12  lg:w-3/12  h-fit fixed bottom-0 right-0'>
              <div className='px-3  py-5 bg-primary rounded-lg'
              style={{boxShadow:'0px 1px 5px 2px rgba(0,0,0,0.52)'}}
              >
                <div className='flex flex-row justify-between items-center pb-3 my-2 border-gray-500 border-b-2'>
                  <div className='mx-3 font-semibold text-xl'>Total Price</div>
                  <div className='mx-3 font-semibold'>{
                    cartItems.reduce((init,item) => {
                      init += item.quantity * item.price
                      return init
                    },0)
                  }$</div>
                </div>
                <div className='flex flex-row justify-evenly items-center pt-3'>
                  <button
                  onClick={() => dispatch(dataSlice.actions.removeAllFromCart())}
                  className='bg-red-500 p-2 rounded-lg ease-in-out duration-75 hover:shadow-md active:shadow-lg hover:shadow-gray-500'>Remove All</button>
                  <button className='bg-green-500 p-2 rounded-lg ease-in-out duration-75 hover:shadow-md active:shadow-lg hover:shadow-gray-500'>Order Now</button>
                </div>
              </div>
            </div>
        </div>
    </ModelOverlay>
  )
}

export default CartModal