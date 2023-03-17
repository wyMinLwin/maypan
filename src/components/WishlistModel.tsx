import React from 'react'
import { useAppDispatch, useAppSelector } from '../store'
import ModelOverlay from './ModelOverlay'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import dataSlice from '../store/dataSlice';
import WishlistItem from './WishlistItem'

const WishlistModel = () => {
    const dispatch = useAppDispatch();
    const modelOpen = useAppSelector(state => state.data.wishlistModelOpen);
    const wishlistItems = useAppSelector(state => state.data.wishlist);

  return (
    <ModelOverlay modelOpen={modelOpen} >
        <div className='h-screen w-full overflow-scroll px-2 sm:w-6/12 md:w-5/12  lg:w-3/12 fixed right-0 top-0 bg-primary shadow-lg rounded-xl shadow-gray-500'>
            <div className='m-5'
            onClick={() => dispatch(dataSlice.actions.controlModel({type:"OFF",tab:"WISHLIST"}))}
            >
                <FontAwesomeIcon icon={faClose} fontSize={30} className='text-secondary border-2 rounded-full w-10 h-10 p-1 border-secondary ' />
            </div>
            <div className='grid grid-cols-1 grid-flow-row'>
              {
                  wishlistItems.map(wishlistItem => 
                    <WishlistItem wishlistItem={wishlistItem} key={wishlistItem.id} />
                  )
              }
            </div>
        </div>
    </ModelOverlay>
  )
}

export default WishlistModel