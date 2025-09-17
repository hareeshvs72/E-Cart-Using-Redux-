import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeCartItem ,incremnetQuantity,decremnetQuantity,emptyCart} from '../redux/slice/cartSlice'



{/* <Header /> */ }

function Cart() {
  const dispatch = useDispatch()
  const navigate  = useNavigate()
  const userCArt = useSelector(state => state.cartReducer)

  const [totaCart, setTotalCart] = useState(0)
  useEffect(() => {
    if (userCArt?.length > 0) {
      setTotalCart(Math.ceil(userCArt?.map((item) => item.totalprice)?.reduce((prev, curr) => prev + curr)))
    }
  }, [userCArt])

  const handileDecremnetQuantity = (item)=>{
        if(item.quantity>1){
             dispatch(decremnetQuantity(item?.id))
        }
        else{
          dispatch(removeCartItem(item?.id))

        }
  }

  const checkOut = ()=>{
    dispatch(emptyCart())
    alert("Your Order Has Been Placed Successfully... Thank You For Shopping With Us !!!!")
    navigate('/')
  }

  return (
    <>
      <Header />
      <div className='pt-17 pb-5 mx-5  '>
        <h1 className='text-3xl font-bold text-center text-red-500 my-10'> Cart Summary</h1>
        {
          userCArt?.length > 0 ?
            <div className="grid grid-cols-3 gap-4 my-5">
              <div className="col-span-2 rounded shadow p-5">
                <table className='table-auto p-2 w-full' >
                  <thead>
                    <tr>
                      <td className='font-semibold'>#</td>
                      <td className='font-semibold'>Name</td>
                      <td className='font-semibold'>Image</td>
                      <td className='font-semibold'>Quantity</td>
                      <td className='font-semibold'>Price</td>
                      <td className='font-semibold'>...</td>


                    </tr>
                  </thead>
                  <tbody>
                    {/* duplicate according to cart array */}
                    {
                      userCArt?.map((item, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td><Link to={`/${item?.id}/view`} className='text-blue-500 underline' >{item?.title.slice(0, 20)}...</Link></td>
                          <td><img width={'70px'} height={'70px'} src={item?.thumbnail} alt="produt" /></td>
                          <td>
                            <div className="flex">
                              <button className="font-bold" onClick={()=>handileDecremnetQuantity(item)} > - </button>
                              <input type="text" value={item?.quantity} className='rounded p-1 mx-1' style={{ width: '40px' }} readOnly />
                              <button className="font-bold" onClick={()=>dispatch(incremnetQuantity(item?.id))} > + </button>
                            </div>
                          </td>
                          <td>${item?.totalprice}</td>
                          <td><button onClick={()=>dispatch(removeCartItem(item?.id))} ><i className="fa-solid fa-trash text-red-500"></i></button></td>
                        </tr>
                      ))

                    }
                  </tbody>

                </table>
                <div className='float-right'>
                  <button className=' bg-red-600 p-2 rounded mt-4 font-bold text-white mx-2' onClick={()=>dispatch(emptyCart())} >Empty CArt</button>
                  <Link to={'/'} className=' bg-blue-600 p-2 rounded mt-4 font-bold text-white mx-2 inline-block'>Shop More</Link>
                </div>

              </div>
              <div className="col-span-1 rounded shadow p-5">
                <h1 className='font-bold text-2xl'>Total Amount : <span className='text-red-500'>$ {totaCart}</span></h1>
                <div className='w-full h-1 rounded  bg-black  mb-5 mt-2 '></div>
                <button className='w-full bg-green-500 p-1 rounded mt-5 font-bold text-white'onClick={checkOut} >CHECK OUT</button>
              </div>

            </div>
            :
            <p className='font-bold my-10 text-xl' >Your Cart IS Empty...</p>
        }

      </div>

    </>
  )
}

export default Cart