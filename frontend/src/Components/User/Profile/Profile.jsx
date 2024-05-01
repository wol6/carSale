import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../Profile/profile.css'


function Profile() {
    const [myprofile,setMyprofile]=useState([])
    const userId = localStorage.getItem('userid')


    useEffect(() => {
      axios.get("http://localhost:8080/profile/"+userId)
        .then(resp =>{
          setMyprofile(resp.data.profile[0])
    })
        .catch(err => console.log(err))
  
    }, [])
  console.log(myprofile.fullname)
  return (
   <>
      <div className="headerCart">
                <div className="logoCart">
                    <h2><NavLink to="/">DreamDrives</NavLink></h2>
                </div>
                <div className="nav">
                    <ul>
                        <li><NavLink to="/user">MyHome</NavLink></li>
                        <li><NavLink to="/cart">MyCart</NavLink></li>
                        <li><NavLink to="/services">Services</NavLink></li>
                        <li><NavLink to="/aboutus">AboutUs</NavLink></li>
                    </ul>
                </div>
            </div>

            <div className="profile_store_container">
            <h1 className='profileTitle'>MyProfile</h1>
         
                               <div className="profile_container">

          <div className="profile_details">
            <div>
            <p>Id:{myprofile._id} </p>

              <p>Name:{myprofile.fullname} </p>

              <p>emai:{myprofile.email} </p>
             
            </div>
             


          </div>
        
        </div>
                              
            
  
  </div>
   </>
  )
}

export default Profile