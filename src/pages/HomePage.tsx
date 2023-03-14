import React from 'react'
import {Link} from 'react-router-dom'
import ShopImage from '../assets/images/shop1.png'

const HomePage = () => {
  return (
    <div className='grid grid-rows-1 grid-flow-row gap-y-5 min-h-screen border-2' >
      <div className='w-6/12 sm:w-7/12 md:w-5/12 xl:w-4/12 mx-auto my-auto text-center'>
        <header className='font-bold text-2xl my-5 sm:text-4xl'>
          Locally Producted Delivery Direct To Your Door
        </header>
        <p className=' text-base font-light mb-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis adipisci ducimus accusamus expedita atque iusto reprehenderit vel ex obcaecati totam?</p>
        <Link className='p-2 rounded-lg w-fit my-5 mx-auto font-semibold bg-secondary' to={'/products'}>Get Start</Link>
      </div>
      <img className='w-10/12 md:w-7/12 lg:1/2 xl:w-1/3 mt-auto mx-auto bg-slate-300 pt-10 rounded-t-full' src={ShopImage} alt='shop' />
    </div>
  )
}

export default HomePage