import React, { useEffect, useState } from "react";
import './LoginPage.css';
import {useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../App';
import { Login } from "../API/Api";
import { useAuthDispatch, useAuthState } from "../context/AuthContext";
import '../Components/components.css';


function LoginPage(){
    const Context = useContext(AppContext);
    const dispatch = useAuthDispatch();
    const auth = useAuthState();
    let navigasi = useNavigate();
    const loginClick = (e)=> {
        e.preventDefault();
        Login(dispatch, {
            email: e.target.email.value,
            password: e.target.password.value,
        })
        .then(() => {}).catch((err) => {
            console.log(err.message);
        })

        // e.preventDefault();
        // let u = e.target.email.value;
        // let p = e.target.password.value;
        // let cek_login = fetch('https://dummyjson.com/auth/login', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({
            
        //     username: u,
        //     password: p,
        //     // expiresInMins: 60, // optional
        //     })
        // })
        // .then(res => res.json())
        // .then(hasil =>{return hasil});
        // // alert('Email: '+u+ '\nPassword: '+p)

        // if(cek_login.username === undefined)
        // alert('Login Gagal. username atau password salah!');
        // else
        // {
        //     Context.setPengguna(cek_login);
        //     navigasi('/');
        // }

        
    }
    // useEffect(() => {
    //     if (auth.errorMessage) {
    //         alert(auth.errorMessage)
    //     }
    //     else{
    //         navigasi('/')
    //     }
    // }, [])
    return(
        <div  className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full '>
            {/* Background bagian kiri */}
            <div  className=' bg-[#F6EBDA] '>
                {/* Logo sachi kecil */}
                <section className="flex flex-col items-center mt-16"><img src="Group 13.png" className="responsive"/></section>
                    {/* Login text */}
                    <div className="flex flex-col items-center "><h1 className="text-[#57170D] title text-xl font-semibold mt-11 ">Login</h1></div>
                    {/* Formnya */}
                    <div className="  ">
                        <form onSubmit={loginClick} className="">
                                {/* Emailnya */}
                                <div className="flex flex-col items-center mt-5 ">
                                    <label></label>
                                    <input className=' w-6/12 txtbgcolor rounded-lg bg-[#F8D8A9] mt-3 p-1 px-3 title font-semibold ' type="text" placeholder="Email" name="email" id="idEmail"  />
                                </div>
                                {/* Passwordnya */}
                                <div className="flex flex-col items-center ">
                                    <label></label> 
                                    <input className=' w-6/12 rounded-lg mt-5 p-1 txtbgcolor px-3  placeholder title font-semibold bg-[#F8D8A9] ' type="password" placeholder="Password" name="password" id="idPass" />
                                </div>
                                
                                <div className="flex flex-row justify-end">
                <div><a href="/forgot" className="font-semibold title flex flex-col items-end text-[#433416] text-[16px] ">forgot password  ?</a></div>
                <div className="w-3/12"></div>
            </div>
                                <div className="flex flex-col items-center mt-5 "><button class="font-semibold w-6/12 h-10 px-5 m-2 text-[#F6EBDA] transition-colors duration-150 bg-[#433416] rounded-lg focus:shadow-outline hover:bg-[#433416] title text-[16px]">Submit</button></div>
            <div className="flex flex-row justify-center "> 
                <div className=''>
                <p class='font-semibold title flex flex-col items-center pd text-[#FF902A] text-[16px]'> 
            Don’t have an account yet? 
                </p>
                </div>
            <a href='/register' class='font-semibold title flex flex-col items-center text-[#433416] text-[16px] '> 
            Register here
            </a> </div>
            
                        {/* {auth.errorMessage ? <>
                            <span className="text-red-500">{auth.errorMessage}</span>    
                                                
                        </> : <></>} */}
                        </form>
                    </div> 
                {/* Tombol Submit */}
                   
            {/* Forgot Passwordnya */}
            
            </div>
            
            {/* background bagian kanan  */}
            <div className='hidden sm:block'>
                <img className=' object-cover logosachi2 ' src="bg.png" alt=""/>
                {/* <section className="flex justify-center"><img className="logosachi w-6/12 h-6/12 " src="Group 5.png" alt=""/></section> */}
                {/* Copyright */}
                <div className="grid justify-items-center"><p className='title font-semibold logosachi absolute bottom-0 center pb-5 text-[#2F2105] text-[16px]'>Copyright @ 2022</p> </div>
            </div>
        </div>
    )
    }

    export default LoginPage;