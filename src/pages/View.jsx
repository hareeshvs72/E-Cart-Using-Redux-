import React from 'react'
import Header from '../components/Header'

function View() {
  return (
    <>
    <Header/>
      <div>

        <div className="grid grid-cols-2 gap-4 p-16">

          
           <div className='flex justify-center items-center flex-col'>
              <div >
                <img height={'250px'} width={'350px'} src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp" alt="product" />
              </div>
              <div className='flex  my-4 '>
                <button className='py-1 px-2 bg-blue-500 text-white font-medium rounded me-20'>ADD To Wishlist</button>
                <button className='py-1 px-2 bg-green-500 text-white font-medium  rounded'>ADD TO Cart</button>
              </div>
           </div>
           <div>
            <h1 className='text-3xl font-bold'>Title</h1>
            <h2 className='text-2xl text-red-500 font-bold' >$300</h2>
            <h3 className='text-xl  mt-3'><span className='font-bold'>Brand</span> : Essence</h3>
             <h3 className='text-xl  mt-3'><span className='font-bold'>Categorey</span> : Essence</h3>
             <h3 className='text-xl  mt-3'><span className='font-bold'>Description</span> : The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula</h3>
             <h3 className='text-xl font-bold my-5'>Client Review</h3>
             {/* review tobe duplicate */}
             <div className='rounded shadow my-3 p-2'>
              <p><span className='font-Bold'>Client-Name</span> : Message</p>
              <p>Rating : 3 <i className="fa-solid fa-star text-yellow-400"></i></p>

             </div>
           </div>
        </div>
        <div>

        </div>

      </div>

    </>
  )
}

export default View