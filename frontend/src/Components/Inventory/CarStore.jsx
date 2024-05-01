import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Inventory/StoreStyle.css'

import bmw from '../../img/themeImg.jpg'
import { toast,ToastContainer } from 'react-toastify'


function CarStore({company,carName,fuel,model,price,emi,img}) {

  function openPurchaseHandler()
{
  toast("LogIn to Purchase")
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
          <button onClick={openPurchaseHandler}>Purchase Now</button>
          <ToastContainer/>
        </div>


    </>
  )
}

export default CarStore