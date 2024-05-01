import React, { useEffect, useId, useState } from 'react'
import '../Credential/credential.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { isStrongPassword, isEmail } from 'validator'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Login() {

    // const [login,setLogin]=useState([])
    const navigate=useNavigate()

    const [user, setuser] = useState({
        email: "",
        password: ""
    })
    
    // useEffect(()=>{
    //     axios.get("http://localhost:3000/user")
    //     .then(resp=>{
    //         setLogin(resp.data)
    //     })
    //     .catch(err=>{console.log(err)})
    // })

    function onSubmitHandler(e) {
        e.preventDefault()
        const checkValidator = {
            minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1, returnScore: false, pointsPerUnique: 1, pointsPerRepeat: 0.5, pointsForContainingLower: 10, pointsForContainingUpper: 10,
            pointsForContainingNumber: 10, pointsForContainingSymbol: 10
        }

        if (!isEmail(user.email)) {
            toast("enter  email")
        }
        else if (user.password==""){
            toast("enter password")
        }
        else {
        //     let flag = false; 
        //     let myid 
        //    login.map((val)=>{
        //     if(user.email==val.email && user.password==val.password)
        //     {
        //         flag = true;
        //         myid=val.id 
               
        //     }
        //    })

        //    if(flag==true){
        //      toast("loggedin successful")
        //      navigate('/user')
        //      console.log(flag)
        //     localStorage.setItem('userId',myid)
        //    }else{
        //     toast("Invalid Credentials");
        //    }

        axios.post("http://localhost:8080/signin",user)
        .then(resp=>{
            // console.log(resp.data.existingUser[0]._id)
            if(resp.data.success==true)
            {
                let userId = resp.data.existingUser[0]._id
                let userName = resp.data.existingUser[0].fullname

                localStorage.setItem('userid',userId)
                localStorage.setItem('username',userName)
                
                toast("loggedin successful")
                navigate('/user')
            }else if(resp.data.msg=="user not found")
            {
                toast("user not found")
            }else{
                toast("Invalid Credentials");
            }
        })
        .catch(err=>console.log(err))

        }
    }
    function changeHandler(e) {
        setuser((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        })

    }
    return (
        <>
            <div className="login_body">
                <Header />
                <div className="login_container">
                    <form onSubmit={onSubmitHandler}>
                        <h1>Sign In</h1>
                        <div className="input_box">
                            <label htmlFor="">Email</label>
                            <div>
                                <input type="email" name='email' onChange={changeHandler} />
                            </div>
                            <label htmlFor="">Password</label>
                            <div>
                                <input type="password" name='password' onChange={changeHandler} />
                            </div>
                            <button type='submit'>SignIn</button>
                        </div>
                    <NavLink to="/register">Register Here</NavLink>
                    </form>
                        <ToastContainer />
                </div>
                <Footer />
            </div>
        </>
    )
}
