import React, { useState } from 'react'
import { MdPersonAdd, MdAttachEmail, } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaKey } from "react-icons/fa6";
import '../Credential/credential.css'
import Header from '../Header/Header';
import user from "../../img/user.png"
import lock from "../../img/padlock.png"
import key from "../../img/key.png"
import mail from "../../img/mail.png"
import Footer from '../Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isStrongPassword } from 'validator';
import axios from 'axios';

function Register() {

  const [registerUser,setRegisterUser]=useState({
    fullname:"",
    email:"",
    password:"",
    cnfPassword:""
  })

  function registerHandler(e)
  {
      e.preventDefault()
      const checkValidators={
        minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1, returnScore: false, pointsPerUnique: 1, pointsPerRepeat: 0.5, pointsForContainingLower: 10, pointsForContainingUpper: 10,
            pointsForContainingNumber: 10, pointsForContainingSymbol: 10
      }

      if(registerUser.fullname==""||registerUser.email==""
      || registerUser.password==""||registerUser.cnfPassword=="")
      {
        toast("all column must fill")
      }
      else if(!isStrongPassword(registerUser.password,checkValidators)){
        toast("enter strong password")
      }
      else if(registerUser.password!=registerUser.cnfPassword){
        toast("password is not matching")
      }
      else{
        axios.post("http://localhost:8080/signup",registerUser)
        .then(resp=>{
          setRegisterUser(resp.data)
          if(resp.data.msg=="user already exists")
          {
            toast("user already exists")
            setRegisterUser({
              fullname:"",
              email:"",
              password:"",
              cnfPassword:""
            })
          }
         else{
          toast("successfully registered")
          setRegisterUser({
            fullname:"",
            email:"",
            password:"",
            cnfPassword:""
          })
         }
        })
        .catch(err=>{console.log(err)})
      }
  }

  function regChangeHandler(e)
  {
    setRegisterUser((prev)=>{
      return {...prev,[e.target.name]:e.target.value}
    })
    console.log(registerUser)
  }

  return (
    <>
      <div className="register_body">
        <Header />
        <div className="register_container">
         <form onSubmit={registerHandler}>
         <h1>Sign Up</h1>
          <div className="register_details">
            <div className='register_row'>
              <img src={user} alt="" />
              <input type="text" value={registerUser.fullname} placeholder='Full Name' name='fullname' onChange={regChangeHandler} />
            </div>
            <div className='register_row'>
              <img src={mail} alt="" />
              <input type="email" value={registerUser.email} placeholder='Email' name='email' onChange={regChangeHandler} />
            </div>
            <div className='register_row'>
              <img src={lock} alt="" />
              <input type="password" value={registerUser.password} placeholder='Password' name='password' onChange={regChangeHandler} />
            </div>
            <div className='register_row'>
              <img src={key} alt="" />
              <input type="password" value={registerUser.cnfPassword} placeholder='Re-type password' name='cnfPassword' onChange={regChangeHandler} />
            </div>
            <button type='submit'>Register</button>
          </div>
          <ToastContainer/>
         </form>
        </div>
        <div className="register_quote">
        <h3>"Rev up your journey with us!</h3> <h3>Sign up today and steer towards exclusive deals,</h3>
          <h3>expert advice, and a road of endless possibilities."</h3>
        </div>
      </div>
        <Footer/>

    </>
  )
}

export default Register