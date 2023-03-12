import React from 'react'
import {Link, NavLink} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex flex-row items-center drop-shadow-sm shadow-sm py-3 px-5 justify-between'>
        <Link to={'/'} className='text-lg font-semibold' style={{color:'#ff5035'}} >MayPan</Link>
        <div className='sm:block hidden'>
            <NavLink
             style={{color:'#ff5035',}}  
            className={({ isActive}) =>
           `${isActive ? 'text-lg opacity-100' : 'text-base opacity-80'} ease-in-out duration-100 hover:opacity-90 mx-2 font-semibold `
            }
            to={'/home'}>Home</NavLink>
            <NavLink
             style={{color:'#ff5035',}} 
            className={({ isActive}) =>
           `${isActive ? 'text-lg opacity-100' : 'text-base opacity-80'} ease-in-out duration-100 hover:opacity-90 mx-2 font-semibold `
            }
            to={'/products'}>Products</NavLink>
            <NavLink
             style={{color:'#ff5035',}}  
            className={({ isActive}) =>
           `${isActive ? 'text-lg opacity-100' : 'text-base opacity-80'} ease-in-out duration-100 hover:opacity-90 mx-2 font-semibold `
            }
            to={'/about'}>About</NavLink>
        </div>
    </div>
  )
}

export default Navbar