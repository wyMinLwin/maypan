import React from 'react'
import { NavLink} from 'react-router-dom'
import {Navbar, Button} from 'flowbite-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
const NavBar = () => {
  return (
    // <div className='flex flex-row items-center drop-shadow-sm shadow-sm py-3 px-5 justify-between'>
    //     <Link to={'/'} className='text-lg font-semibold' style={{color:'#ff5035'}} >MayPan</Link>
    //     <div className='sm:block hidden'>
    //         <NavLink
    //          style={{color:'#ff5035',}}  
    //         className={({ isActive}) =>
    //        `${isActive ? 'text-lg opacity-100' : 'text-base opacity-80'} ease-in-out duration-100 hover:opacity-90 mx-2 font-semibold `
    //         }
    //         to={'/home'}>Home</NavLink>
    //         <NavLink
    //          style={{color:'#ff5035',}} 
    //         className={({ isActive}) =>
    //        `${isActive ? 'text-lg opacity-100' : 'text-base opacity-80'} ease-in-out duration-100 hover:opacity-90 mx-2 font-semibold `
    //         }
    //         to={'/products'}>Products</NavLink>
    //         <NavLink
    //          style={{color:'#ff5035',}}  
    //         className={({ isActive}) =>
    //        `${isActive ? 'text-lg opacity-100' : 'text-base opacity-80'} ease-in-out duration-100 hover:opacity-90 mx-2 font-semibold `
    //         }
    //         to={'/about'}>About</NavLink>
    //     </div>
    // </div>
    <>
    <Navbar 
      className='bg-primary drop-shadow-md'
      fluid={true}
      rounded={false}
    >
      <Navbar.Brand href='/'>
      <span className="self-center whitespace-nowrap text-xl font-semibold text-secondary">
        MayPan
      </span>
      </Navbar.Brand>
      <div className="flex md:order-2 my-auto text-secondary">
        <button className='relative '>
          <FontAwesomeIcon className='mx-3 ' icon={faHeart} />
          <div className='absolute top-1 md:-top-1 right-1  text-xs font-semibold'>1</div>
        </button>
        <button className='relative '>
          <FontAwesomeIcon className='mx-3 ' icon={faBasketShopping} />
          <div className='absolute top-1 md:-top-1 right-1  text-xs font-semibold'>1</div>
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