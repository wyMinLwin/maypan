import React from 'react'
import { NavLink} from 'react-router-dom'
import {Navbar, Button} from 'flowbite-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import { useAppDispatch, useAppSelector } from '../store'
import dataSlice from '../store/dataSlice'
const NavBar = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(state => state.data.cart)
  const wishlistItems = useAppSelector(state => state.data.wishlist)
  return (
    <>
    <Navbar 
    style={{background:'#C7D8C6'}}
      className='bg-primary drop-shadow-md sticky top-0 left-0 right-0 '
      
      fluid={true}
      rounded={true}
    >
      <Navbar.Brand href='/'>
      <span className="self-center whitespace-nowrap text-xl font-semibold text-secondary">
        MayPan
      </span>
      </Navbar.Brand>
      <div className="flex md:order-2 my-3 text-secondary">
        <button
        onClick={() => dispatch(dataSlice.actions.controlModel({type:"ON",tab:"WISHLIST"}))}
        className='relative '>
          <FontAwesomeIcon className='mx-3 ' fontSize={16} icon={faHeart} />
          <div className='absolute top-1 md:-top-2 right-1  text-xs font-semibold'>{wishlistItems.length < 1 ? '' :wishlistItems.length}</div>
        </button>

        <button className='relative '
        onClick={() => dispatch(dataSlice.actions.controlModel({type:"ON",tab:"CART"}))}
        >
          <FontAwesomeIcon className='mx-3 ' fontSize={16} icon={faBasketShopping} />
          <div className='absolute top-1 md:-top-2 right-1  text-xs font-semibold'>{cartItems.length < 1 ? '' :cartItems.length}</div>
        </button>
        <Navbar.Toggle className='bg-transparent border-0 ml-2 text-secondary' />
      </div>
      <Navbar.Collapse>
        <NavLink  
          className={({ isActive}) =>
          `${isActive ? 'text-lg opacity-100' : 'text-base opacity-80'} text-right my-1 md-my-0 md-text-center text-secondary ease-in-out duration-100 hover:opacity-90 mx-2 font-semibold `
          }
          to={'/home'}>Home
        </NavLink>
        <NavLink 
          className={({ isActive}) =>
          `${isActive ? 'text-lg opacity-100' : 'text-base opacity-80'} text-right my-1 md-my-0 md-text-center text-secondary ease-in-out duration-100 hover:opacity-90 mx-2 font-semibold `
          }
          to={'/products'}>Products
        </NavLink>
          <NavLink  
          className={({ isActive}) =>
          `${isActive ? 'text-lg opacity-100' : 'text-base opacity-80'} text-right my-1 md-my-0 md-text-center text-secondary ease-in-out duration-100 hover:opacity-90 mx-2 font-semibold `
          }
          to={'/about'}>About
        </NavLink>  
      </Navbar.Collapse>
    </Navbar>
    </>
  )
}

export default NavBar