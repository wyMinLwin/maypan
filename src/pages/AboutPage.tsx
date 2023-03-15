import React from 'react'
import SuperMarket from '../assets/images/spm.jpg'

const AboutPage = () => {
  return (
    <div className='grid grid-row-1 grid-flow-row gap-y-5 w-10/12 mx-auto'>
      <div className='grid md:grid-cols-2 py-3'>
        <header className='m-auto md:mr-auto text-center font-bold text-2xl text-green-700'>We Always Provide You The Best Time</header>
        <p className='m-auto md:ml-auto text-center text-sm font-light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim quod tempore iste adipisci. Officiis inventore aspernatur nulla voluptatem excepturi suscipit sit accusantium iure magnam sunt!</p>
      </div>
      <img className=' mx-auto' src={SuperMarket} alt='supermarket'/>
      <div className='grid md:grid-cols-2 py-3'>
        <button className='w-fit h-fit p-2 rounded-r-full rounded-l-full bg-secondary m-auto my-auto  md:mr-auto text-white font-semibold'>Partner With Us</button>
        <div className='my-auto grid grid-cols-3 grid-flow-row border-black' style={{borderWidth:1,borderLeft:'none',borderRight:'none'}}>
          <div className='flex-col justify-center items-center mx-auto font-semibold py-2'>
            <div><span className='text-green-700'>6+</span> Years</div>
            <div>Experience</div>
          </div>
          <div className='flex-col justify-center items-center mx-auto font-semibold py-2'>
            <div><span className='text-green-700'>690+</span> Young</div>
            <div>Riders</div>
          </div>
          <div className='flex-col justify-center items-center mx-auto font-semibold py-2'>
            <div><span className='text-green-700'>9+</span> Regular</div>
            <div>Customers</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage