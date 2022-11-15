import React from "react";
import '../LoginPage/LoginPage.css';
import {useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../App';
import { useAuthDispatch, useAuthState } from "../context/AuthContext";
import '../Components/components.css';

function ForgotPage(){
    const Context = useContext(AppContext);
    const dispatch = useAuthDispatch();
    const auth = useAuthState();
    let navigasi = useNavigate();
    
    return(
        <div  className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full '>
        <div  className=' bg-[#F6EBDA] '>
            <section className="flex flex-col items-center mt-16"><img src="Group 13.png" className="responsive"/></section>
           <div className="  ">
           
            <form className="">
                 
            <div className="flex flex-col items-center mt-11"><h1 className="text-[#57170D] title text-xl font-semibold">Forgot Password</h1></div>
                <div className="flex flex-col items-center mt-5 ">
                    <label></label>
                    <input className=' w-6/12 txtbgcolor rounded-lg bg-[#F8D8A9] mt-3 p-1 px-3 title font-semibold ' type="text" placeholder="Email" name="email" id="idEmail"  />
                </div>
                

                <div className="flex flex-col items-center mt-5 "><button class="font-semibold w-6/12 h-10 px-5 m-2 text-[#F6EBDA] transition-colors duration-150 bg-[#433416] rounded-lg focus:shadow-outline hover:bg-[#433416] title">Submit</button></div>
            
            </form>
            <div className="flex flex-row justify-center "> 
                <div className=''>
                <p class='font-semibold title flex flex-col items-center pd text-[#FF902A] text-[16px]'> 
                Back To
                </p>
                </div>
            <a href='/login' class='font-semibold title flex flex-col items-center text-[#433416] text-[16px] '> 
            Sign In Here
            </a> </div>
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

    export default ForgotPage;