import React from 'react'
import User from './User'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom'
import '../Header/Header.css'
import Footer from '../Footer/Footer'
import '../User/user.css'
import logoutImg from '../../img/turn-off.png'
import { toast,ToastContainer } from 'react-toastify'

function MainUsers() {
  const userId = localStorage.getItem('userid')
  const profileName = localStorage.getItem('username')
  const [userCars, setUserCars] = useState([])
  const [searchValue,setSearchValue] = useState("")
  

  let flag = false
  let navigate = useNavigate()

  useEffect(() => {
    axios.get("http://localhost:3000/cars")
      .then(resp => setUserCars(resp.data))
      .catch(err => console.log(err))
  }, [])


  function logoutHandler() {
    localStorage.clear()
    navigate('/')
  }

  function searchHandler(e)
    {
      setSearchValue(e.target.value)
    }

    const filterCar = userCars.filter((product)=>{
      return product.company.toLowerCase().includes(searchValue.toLowerCase())
    })
    function openPurchaseHandler()
    {
      toast("LogIn to Purchase")
      console.log("err")
    }
  return (
    <>

      <div className="main_store_container">
        <div className="header">
          <div className="logo">
            <h2><NavLink to="/">DreamDrives</NavLink></h2>
          </div>
          <div className="nav" style={{ paddingLeft: "28rem" }}>
            <ul>
              <li><NavLink to="/cart">MyCart</NavLink></li>
              <li><NavLink to="/profile">MyProfile</NavLink></li>
              <li><NavLink to="/services">Services</NavLink></li>
              <li><NavLink to="/aboutus">AboutUs</NavLink></li>
            </ul>
          </div>
          <div className="profile">
          <p>welcome</p><h3>{profileName}</h3>
          </div>
          <img onClick={logoutHandler} src={logoutImg} alt="logout" />
        </div>


        <div className='searchDiv'><input type="search" placeholder='Search here' className='search' onChange={searchHandler}/></div>

        {
          filterCar?(
            filterCar.map((item)=>{
              return <User 
              id={item.id}
              company={item.company}
              carName={item.carName}
              fuel={item.fuel}
              model={item.model}
              price={item.price}
              emi={item.emi}
              img={item.img}
              />
            })
          ):(
            userCars.map((val) => {
              return <User
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
      <Footer />
    </>
  )
}

export default MainUsers