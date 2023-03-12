import React from 'react'
import {Link} from 'react-router-dom'

const HomePage = () => {
  return (
    <div className='flex flex-col justify-center items-center '>
      <div className='w-6/12 sm:w-4/12 my-2 md:w-3/12  text-center'>
        <header className='font-bold text-2xl my-2 sm:text-4xl'>
          Locally Producted Delivery Direct To Your Door
        </header>
        <p className=' text-base font-light'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis adipisci ducimus accusamus expedita atque iusto reprehenderit vel ex obcaecati totam?</p>
      </div>
      <Link className='p-2 rounded-lg font-semibold my-2 ' style={{background:'#ff5035'}} to={'/products'}>Get Start</Link>
    </div>
  )
}

export default HomePage