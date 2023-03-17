import React, { useEffect, useState } from 'react'
import {Card} from 'flowbite-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import dataSlice, { fetchProductsType } from '../store/dataSlice'
import { useAppDispatch, useAppSelector } from '../store'

type ProductCardProps  = {
    data:fetchProductsType
}

const ProductCard = (props:ProductCardProps) => {
    const [cartAdded,setCartAdded] = useState(props.data.addedToCart);
    const [favAdded,setFavAdded] = useState(props.data.addedToFav);
    const dispatch = useAppDispatch();
    const cartItems = useAppSelector(state => state.data.cart)
    useEffect(() => {
        setCartAdded(props.data.addedToCart)
        setFavAdded(props.data.addedToFav)
    },[cartItems])

  return (
    <div>
        <Card
        style={{backgroundColor:'#C7D8C6',borderWidth:0,boxShadow:' 1px 1px 5px 3px rgba(0,0,0,0.15'}}
         >
            <img src={props.data.thumbnail} className='h-60' />
            <div className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {props.data.title}
            </div>
            <div className='flex flex-row justify-between items-center text-lg'>
                <div className='flex flex-row  items-center justify-center'>
                    <FontAwesomeIcon className='text-yellow-200 mr-2' icon={faStar}  />
                    <div>{props.data.rating}/5</div>
                </div>
                <div className='font-semibold'>{props.data.price} $</div>
            </div>
            <div className='flex flex-col md:mr-auto justify-center items-center text-lg'>
                {   favAdded 
                    ?<div
                    onClick={() => {
                        setFavAdded(prev => !prev)
                        dispatch(dataSlice.actions.removeFromFav(props.data.id))
                    }}
                    className={`bg-primary  border-2 border-secondary hover:-translate-y-0.5 ease-in-out duration-75 hover:shadow-md active:shadow-lg hover:shadow-gray-500  my-1 mr-auto p-1 rounded-lg px-2`} >
                        Remove from Wishlist<FontAwesomeIcon className='ml-2' icon={faHeart}  />
                    </div>
                    :<div
                    onClick={() => {
                        setFavAdded(prev => !prev)
                        dispatch(dataSlice.actions.addToFav(props.data.id))
                    }}
                    className={`bg-secondary border-2 border-secondary hover:-translate-y-0.5 ease-in-out duration-75 hover:shadow-md active:shadow-lg hover:shadow-gray-500  my-1 mr-auto p-1 rounded-lg px-2`} >
                        Add to Wishlist<FontAwesomeIcon className='ml-2' icon={faHeart}  />
                    </div>
                }
                {   cartAdded 
                    ?<div
                    onClick={() => {
                        setCartAdded(prev => !prev)
                        dispatch(dataSlice.actions.removeFromCart(props.data.id))
                    }}
                    className={`bg-primary  border-2 border-secondary hover:-translate-y-0.5 ease-in-out duration-75 hover:shadow-md active:shadow-lg hover:shadow-gray-500  my-1 mr-auto p-1 rounded-lg px-2`} >
                        Remove from Cart<FontAwesomeIcon className='ml-2' icon={faBasketShopping}  />
                    </div>
                    :<div
                    onClick={() => {
                        setCartAdded(prev => !prev)
                        dispatch(dataSlice.actions.addToCart(props.data.id))
                    }}
                    className={`bg-secondary border-2 border-secondary hover:-translate-y-0.5 ease-in-out duration-75 hover:shadow-md active:shadow-lg hover:shadow-gray-500  my-1 mr-auto p-1 rounded-lg px-2`} >
                        Add to Cart<FontAwesomeIcon className='ml-2' icon={faBasketShopping}  />
                    </div>
                }
            </div>
        </Card>
    </div>
  )
}

export default ProductCard