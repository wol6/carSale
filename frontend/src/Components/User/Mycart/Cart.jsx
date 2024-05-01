import React from 'react'
import '../Mycart/cart.css'
import { useDispatch } from 'react-redux'
function Cart({id,company,carName,fuel,model,price,emi,img,cartDelete}) {

  const dispatch = useDispatch()

  function handleCartDelete()
  {
   cartDelete(id)
  }
  return (
   
    <>
    <div className="cart_container">
    <button className='removeCart' onClick={handleCartDelete}>&#x2716;</button>
          <img src={img} alt="" />

          <div className="cart_details">
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
          <button>Purchase</button>
        
        </div>
    </>
  )
}

export default Cart