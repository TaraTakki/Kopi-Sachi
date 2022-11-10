import React from "react";
import '../LoginPage/LoginPage.css';
import {useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../App';
import { Login, Register } from "../API/Api";
import { useAuthDispatch, useAuthState } from "../context/AuthContext";
import '../Components/components.css';

function RegisterPage(){
    const Context = useContext(AppContext);
    const dispatch = useAuthDispatch();
    const auth = useAuthState();
    let navigasi = useNavigate();
    const registerClick = (e)=> {
        e.preventDefault();
        Register(dispatch, {
            email: e.target.email.value,
            password: e.target.password.value,
        }).then((data) => {
            console.log(data);
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
    return(
        <div  className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full '>
        <div  className=' bg-[#F6EBDA] '>
            <section className="flex flex-col items-center mt-16"><img src="Group 13.png" className="responsive"/></section>
           <div className="  ">
            <form onSubmit={registerClick} className="">  
            <div className="flex flex-col items-center"><h1 className="text-[#57170D] title text-xl font-semibold ">Sign up</h1></div>
                <div className="flex flex-col items-center ">
                    <label></label>
                    <input className=' w-6/12 txtbgcolor rounded-lg bg-[#F8D8A9] mt-3 p-1 px-3 title font-semibold ' type="text" placeholder="Email" name="email" id="idEmail"  />
                </div>
                <div className="flex flex-col items-center ">
                    <label></label> 
                    <input className=' w-6/12 rounded-lg mt-5 p-1 txtbgcolor px-3  placeholder title font-semibold bg-[#F8D8A9] ' type="password" placeholder="Password" name="password" id="idPass" />
                </div>

                <div className="flex flex-col items-center mt-5 "><button class="font-semibold w-6/12 h-10 px-5 m-2 text-[#F6EBDA] transition-colors duration-150 bg-[#433416] rounded-lg focus:shadow-outline hover:bg-[#433416] title">Creat Account</button></div>
            
            </form>
            </div> 

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

    export default RegisterPage;