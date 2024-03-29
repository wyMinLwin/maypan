import React from 'react'
import { Route, useLocation,Routes } from 'react-router-dom'
import CartModal from './components/CartModal'
import Navbar from './components/Navbar'
import WishlistModel from './components/WishlistModel'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import PreloaderPage from './pages/PreloaderPage'
import ProductDetailPage from './pages/ProductDetailPage'
import ProductsPage from './pages/ProductsPage'

const App = () => {
  const location = useLocation()
 
  return (
    <>
      <div className='max-w-screen min-h-screen bg-primary' >
        <CartModal />
        <WishlistModel />
        {location.pathname !== '/' && <Navbar />}
        <Routes>
          <Route path='/' element={<PreloaderPage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/products' >
            <Route path=''  element={<ProductsPage />} />
            <Route path=':id' element={<ProductDetailPage/>} />
          </Route>
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App