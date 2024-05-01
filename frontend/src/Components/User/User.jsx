import React from 'react'
import '../Inventory/StoreStyle.css'
import { useDispatch } from 'react-redux'
import { addToCart } from '../Slices/CarSlices'
import { toast,ToastContainer } from 'react-toastify'


function User({company,carName,fuel,model,price,emi,img}) {

  const dispatch =useDispatch()
  function cartHandler()
  {
    dispatch(addToCart({
      company,
      carName,
      fuel,
      model,
      price,emi,
      img
    }))
    toast("added successfully")
  }
  return (
    <>
     <div className="car_container">
          <img src={img} alt="" />

          <div className="car_details">
            <div>
              <p>{company}</p>

              <p>{fuel}</p>
              <p>{price}</p>
            </div>

            <div>
              <p>{carName}</p>
              <p>{model}</p>

              {emi?<p>emi:✓</p>:<p>emi:✕</p>}
            </div>
          </div>
          <button onClick={cartHandler}>Add To Cart</button>
          <ToastContainer/>
        </div>

    </>
  )
}

export default User