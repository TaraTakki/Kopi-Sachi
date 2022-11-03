import React from "react";
import './LoginPage.css'

function LandingPage(){
    return(
        <div  className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
           
            
        <div  className=' bg-[#F6EBDA] '>
            <section className="flex flex-col items-center mt-16"><img src="Group 13.png" className="responsive"/></section>
     
            <form>
          <section className="flex flex-col items-center mt-20"><img src="Login.png" className="login"/></section>
          
                <div className="flex flex-col items-center ">
                    <label></label>
                    <input className='w-6/12 txtbgcolor rounded-lg bg-[#F8D8A9] mt-3 p-1 px-3' type="email" placeholder="Email"  />
                </div>

                <div className="flex flex-col items-center ">
                    <label></label> 
                    <input className=' w-6/12 rounded-lg mt-5 p-1 txtbgcolor px-3  bg-[#F8D8A9] placeholder ' type="password" placeholder="Password" />
                </div>

                <div className="flex flex-col items-center mt-5 "><button class="font-bold w-6/12 h-10 px-5 m-2 text-[#F6EBDA] transition-colors duration-150 bg-[#433416] rounded-lg focus:shadow-outline hover:bg-[#433416]">Submit</button></div>
                <div className="flex flex-col items-center mt-5 "><button class="w-6/12 text-[#433416] font-bold">Sign up</button></div>
            </form>

        </div>
        <div className='hidden sm:block'>
                <img className='w-full h-full object-cover' src="background.png" alt=""/>
            </div>
        
        
        </div>
    )
    }

    export default LandingPage;