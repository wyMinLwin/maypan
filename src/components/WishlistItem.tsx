import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import dataSlice, { fetchProductsType } from '../store/dataSlice'
import { useAppDispatch } from '../store'

type wishlistItemProps = {
    wishlistItem: fetchProductsType
}

const WishlistItem = (props: wishlistItemProps) => {
    const dispatch = useAppDispatch();
  return (
    <>
        <div className='w-full mx-auto flex flex-row my-1 bg-primary p-1 rounded-md '
        style={{borderWidth:0,boxShadow:' 1px 1px 5px 3px rgba(0,0,0,0.15'}}
        >
            <img className='h-20 w-1/3' src={props.wishlistItem.thumbnail} />    
            <div className='w-2/3 grid grid-cols-1 grid-flow-row'>
                <div className='w-full h-full flex flex-row'>
                <div className='w-2/3 flex flex-col  px-3 items-start justify-center font-normal text-sm'>
                    <div className='break-words font-semibold'>{props.wishlistItem.title}</div>
                    <div>{props.wishlistItem.price}$</div>
                    <button 
                    onClick={() => dispatch(dataSlice.actions.removeFromFav(props.wishlistItem.id))}
                    className=' bg-primary border-secondary border-2 rounded-lg  ease-in-out duration-75 hover:shadow-md active:shadow-lg hover:shadow-gray-500 w-fit h-fit p-1'>Remove <FontAwesomeIcon icon={faTrashCan} /></button>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default WishlistItem