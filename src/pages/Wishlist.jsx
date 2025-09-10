import React from 'react'
import Header from '../components/Header'

function Wishlist() {
  return (
    <>
      <Header />
     <div className='pt-17 pb-5 mx-5 '>
      <h1 className='text-3xl font-bold text-center text-red-500'>My Wishlist</h1>
      <div className="grid grid-cols-4 gap-4">

         <div className="rounded p-2 shadow">
          {/* image */}
          <img  height={'200px'} src='https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp'/>
            
            <div className='text-center'>
            {/* title */}
            <h3 className='font-bold text-xl'>Title</h3>
             {/* icons */}
             <div className='flex justify-evenly my-2'>
              <button><i className="fa-solid fa-heart-circle-xmark text-red-500"></i></button>
              <button><i className="fa-solid fa-cart-plus text-green-500"></i></button>
             </div>
             
            </div>
           </div>
      </div>
    
     </div>
    
    </>
  )
}

export default Wishlist