import React, { useState } from 'react'
import {Card, Button} from 'flowbite-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import { fetchProductsType } from '../store/dataSlice'

type ProductCardProps  = {
    data:fetchProductsType
}

const ProductCard = (props:ProductCardProps) => {
    const [cartAdded,setCartAdded] = useState(false);
    const [favAdded,setFavAdded] = useState(false);

  return (
    <div>
        <Card>
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
            <div
            // onMouseEnter={() => setFavAdded(prev => !prev)}
            // onMouseLeave={() => setFavAdded(prev => !prev)}
            onClick={() => setFavAdded(prev => !prev)}
            className={`${favAdded ?'bg-white ' :'bg-secondary '} border-2 border-secondary hover:-translate-y-0.5 ease-in-out duration-75 hover:shadow-lg my-1 mr-auto p-1 rounded-lg px-2`} >
                Add To Wishlist<FontAwesomeIcon className='ml-2' icon={faHeart}  />
            </div>
            <div
            // onMouseEnter={() => setCartAdded(prev => !prev)}
            // onMouseLeave={() => setCartAdded(prev => !prev)}
            onClick={() => setCartAdded(prev => !prev)}
            className={`${cartAdded ?'bg-white ' :'bg-secondary '} border-2 border-secondary hover:-translate-y-0.5 ease-in-out duration-75 hover:shadow-lg my-1 mr-auto p-1 rounded-lg px-2`} >
                Add To Cart<FontAwesomeIcon className='ml-2' icon={faBasketShopping}  />
            </div>
            {/* <Button 
            className='my-1 mr-auto'
            outline={favAdded}
            onClick={() => {
                setFavAdded(prev => !prev)
            }}
            gradientDuoTone="pinkToOrange"
            >Add To Wishlist<FontAwesomeIcon className='ml-2' icon={faHeart}  /></Button>
            <Button 
            className='my-1 mr-auto'
            outline={true}
            gradientDuoTone="pinkToOrange"
            >Add To Cart<FontAwesomeIcon className='ml-2' icon={faBasketShopping}  /></Button> */}
            </div>
        </Card>
    </div>
  )
}

export default ProductCard