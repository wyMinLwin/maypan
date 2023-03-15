import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../store'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import ProductCard from '../components/ProductCard'
import dataSlice from '../store/dataSlice'


const ProductsPage = () => {
  const [searchQuery,setSearchQuery] = useState('')
  const data = useAppSelector(state => state.data.products);
  const searchData = useAppSelector(state => state.data.searchResult);
  const dispatch = useAppDispatch();
 
  return (
    <div className='w-full mx-auto'>
      <div className='p-1 border-2 border-green-700 mx-auto my-3 rounded-l-full rounded-r-full w-10/12 sm:w-6/12 md:w-4/12 lg:w-4/12'>
        <div className='p-1 bg-white rounded-l-full mx-auto rounded-r-full w-full'>
          <FontAwesomeIcon className='my-auto ml-auto text-green-700 w-1/12' icon={faMagnifyingGlass} />
          <input className='bg-white focus:outline-none mx-1 w-10/12' value={searchQuery}
            onChange={(e) => {
              setSearchQuery(prev => prev = e.target.value)
              dispatch(dataSlice.actions.searchByName(e.target.value))
            }}
          />
        </div>
      </div>
      { searchQuery.length < 1 || searchData.length >0
        ?<div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-flow-cols gap-5 px-3 auto-cols-auto'>
        {/* {
        searchQuery.length < 1 
        ?data.map(item => <ProductCard key={item.id} data={item}/>)
        : searchData.length !== 0
          ? searchData.map(item => <ProductCard key={item.id} data={item}/>)
          : 
        } */}
        {
          searchData.length < 1 
          ?data.map(item => <ProductCard key={item.id} data={item}/>)
          :searchData.map(item => <ProductCard key={item.id} data={item}/>)
        }
        </div>
        :<div className='font-semibold text-xl flex text-green-700'>
          <p className='mx-auto my-5'>No item is match with your search</p>
        </div>
      }
    </div>
  )
}

export default ProductsPage