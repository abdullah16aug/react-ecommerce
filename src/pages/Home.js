import React from 'react'
import Navbar
 from '../features/navbar/Navbar'
import ProductList from '../features/product/components/ProducList'
const Home = () => {
  return (
   <>
   <Navbar>
    <ProductList></ProductList>
   </Navbar>
   </>
  )
}

export default Home