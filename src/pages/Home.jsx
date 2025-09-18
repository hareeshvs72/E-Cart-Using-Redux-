import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts } from '../redux/slice/productSlice'


function Home() {
  const dispatch = useDispatch()
  const {loading,error,allProducts} =  useSelector(state => state.productsReducer)
  console.log(loading,error,allProducts);
    const productPerPage = 8
  const totalPage = Math.ceil(allProducts?.length / productPerPage)
  const [curentPage , setCurentPage] = useState(1)
  const productLastIndex = curentPage * productPerPage
  const ProductFirstIndex = productLastIndex - productPerPage
  const VisibleProductCards = allProducts?.slice(ProductFirstIndex,productLastIndex)
 
  const navigatePrevePage = ()=>{
    if(curentPage !=1){
      setCurentPage(curentPage-1)
    }
  }
  
  const  naviagteNextPage = ()=>{
    if(curentPage != totalPage){
       setCurentPage(curentPage+1)
    }
    
  }

  useEffect(()=>{
    dispatch(fetchAllProducts())
  },[])


  return (
      
    <>
     <Header insideHeader={true} />
     <div className='pt-17 pb-5 mx-5 '>
      <div className="grid grid-cols-4 gap-4">
       
        { 
        loading? 

         <p>loading</p>
        :
         allProducts?.length>0?
         VisibleProductCards?.map((product)=>(
           <div key={product.id} className="rounded p-2 shadow">
          {/* image */}
          <img  height={'200px'} src={product.thumbnail}/>
            
            <div className='text-center'>
            {/* title */}
            <h3 className='font-bold text-xl'>{product.title}</h3>
             {/* link */}
             <Link to={`/${product.id}/view`} className='bg-violet-800 text-white p-1 rounded inline-block mt-3' > View More... </Link>
            </div>
           </div> 
         ))
         : 
         <p>Products Are Not Avilable</p>
         
          }
      </div>
    
     </div>
     {/* pagination */}
     <div className='text-center  my-5 font-bold' >
        <button> <i className="fa-solid fa-backward" onClick={navigatePrevePage} ></i> </button>
        <span> {curentPage} of {totalPage} </span>
          <button> <i className="fa-solid fa-forward"onClick={naviagteNextPage} ></i> </button>
     </div>
    </>
  )
}

export default Home