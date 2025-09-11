import React, { useEffect } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts } from '../redux/slice/productSlice'


function Home() {
  const dispatch = useDispatch()
  const {loading,error,allProducts} =  useSelector(state => state.productsReducer)
  console.log(loading,error,allProducts);
  
  useEffect(()=>{
    dispatch(fetchAllProducts())
  },[])
  return (
      
    <>
     <Header />
     <div className='pt-17 pb-5 mx-5 '>
      <div className="grid grid-cols-4 gap-4">

         <div className="rounded p-2 shadow">
          {/* image */}
          <img  height={'200px'} src='https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp'/>
            
            <div className='text-center'>
            {/* title */}
            <h3 className='font-bold text-xl'>Title</h3>
             {/* link */}
             <Link to={`/id/view`} className='bg-violet-800 text-white p-1 rounded inline-block mt-3' > View More... </Link>
            </div>
           </div>
      </div>
    
     </div>
    </>
  )
}

export default Home