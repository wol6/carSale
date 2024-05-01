import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CarStore from './CarStore'
import { cars } from '../cardb'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { toast,ToastContainer } from 'react-toastify'

function MainStore() {

    const [saleCars,setSaleCars]=useState([])
    const [searchValue,setSearchValue] = useState("")

    useEffect(()=>{
        axios.get("http://localhost:3000/cars")
        .then(resp=> setSaleCars(resp.data))
        .catch(err=>console.log(err))
    },[])

    function searchHandler(e)
    {
      setSearchValue(e.target.value)
    }
    const filterCar = saleCars.filter((product)=>{
      return product.company.toLowerCase().includes(searchValue.toLowerCase())
    })

    function openPurchaseHandler()
    {
      toast("LogIn to Purchase")
      console.log("err")
    }
  return (
  <>
   <Header />
    <div className='searchDiv'><input type="search" placeholder='Search here' className='search' onChange={searchHandler}/></div>
  <div className="main_store_container">
    <div>
      {
        
        filterCar?(
          filterCar.map((item)=>{
            return <>
                 <div className="car_container">
            <img src={item.img} alt="" />
  
            <div className="car_details">
              <div>
                <p>{item.company}</p>
  
                <p>{item.fuel}</p>
                <p>{item.price}</p>
              </div>
  
              <div>
                <p>{item.carName}</p>
                <p>{item.model}</p>
  
                {item.emi?<p>emi:✓</p>:<p>emi:✕</p>}
              </div>
            </div>
            <button onClick={openPurchaseHandler}>Purchase Now</button>
         <ToastContainer/>
            </div>
            </>
          })
        ):(
          saleCars.map((val)=>{
            return <CarStore 
            id={val.id}
            company={val.company}
            carName={val.carName}
            fuel={val.fuel}
            model={val.model}
            price={val.price}
            emi={val.emi}
            img={val.img}
            />
            
        }) 
        )
      }
    </div>
  {

   
  }
  </div>

  <Footer/>

  </>
  )
}

export default MainStore