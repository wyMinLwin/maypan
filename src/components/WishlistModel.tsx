import React from 'react'
import { useAppDispatch, useAppSelector } from '../store'
import wishlistSlice from '../store/wishlistSlice';
import ModelOverlay from './ModelOverlay'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import dataSlice from '../store/dataSlice';

const WishlistModel = () => {
    const dispatch = useAppDispatch();
    const modelOpen = useAppSelector(state => state.data.modelOpen)
  return (
    <ModelOverlay modelOpen={modelOpen} >
        <div className='h-screen w-9/12 sm:w-6/12 md:w-5/12  lg:w-3/12 fixed right-0 top-0 bg-primary shadow-lg rounded-xl shadow-gray-500'>
            <div className='m-5'
            onClick={() => dispatch(dataSlice.actions.controlModel())}
            >
                <FontAwesomeIcon icon={faClose} fontSize={30} className='text-secondary border-2 rounded-full w-10 h-10 p-1 border-secondary ' />
            </div>
        </div>
    </ModelOverlay>
  )
}

export default WishlistModel