import React from 'react'
import Cart from './Cart'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import '../Mycart/cart.css'
import '../Mycart/cartnav.css'
import { removeFromCart } from '../../Slices/CarSlices'

function MyCarts() {
    const shopCar=useSelector(store=>store.carCart)
    const dispatch = useDispatch()

    function handleDelete(id)
    {
        dispatch(removeFromCart(id))
    }
  return (
   <>
       
        <div className="headerCart">
                <div className="logoCart">
                    <h2><NavLink to="/">DreamDrives</NavLink></h2>
                </div>
                <div className="nav">
                    <ul>
                        <li><NavLink to="/user">MyHome</NavLink></li>
                        <li><NavLink to="/profile">MyProfile</NavLink></li>
                        <li><NavLink to="/services">Services</NavLink></li>
                        <li><NavLink to="/aboutus">AboutUs</NavLink></li>
                    </ul>
                </div>
            </div>
            <div className="cart_store_container">
            <h1 className='cartTitle'>MyCart</h1>
  {
    shopCar.map((val)=>{
        return <Cart
        id={val.id}
        company={val.company}
        carName={val.carName}
        fuel={val.fuel}
        model={val.model}
        price={val.price}
        emi={val.emi}
        img={val.img}
        cartDelete ={handleDelete}
        />
        
    })
  }
  </div>
   </>
  )
}

export default MyCarts