import React from "react";
import './LoginPage.css'

function LandingPage(){
    return(
        <div  className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full '>
           
            
        <div  className=' bg-[#F6EBDA] '>
            <section className="flex flex-col items-center mt-16"><img src="Group 13.png" className="responsive"/></section>
            
           <div className="  "><form className="">
          
            <div className="flex flex-col items-center"><h1 className="text-[#57170D] title text-xl font-semibold ">Login</h1></div>
                <div className="flex flex-col items-center ">
                    <label></label>
                    <input className='w-6/12 txtbgcolor rounded-lg bg-[#F8D8A9] mt-3 p-1 px-3 title font-semibold ' type="email" placeholder="Email"  />
                </div>

                <div className="flex flex-col items-center ">
                    <label></label> 
                    <input className=' w-6/12 rounded-lg mt-5 p-1 txtbgcolor px-3  placeholder title font-semibold bg-[#F8D8A9] ' type="password" placeholder="Password" />
                </div>

                <div className="flex flex-col items-center mt-5 "><button class="font-semibold w-6/12 h-10 px-5 m-2 text-[#F6EBDA] transition-colors duration-150 bg-[#433416] rounded-lg focus:shadow-outline hover:bg-[#433416] title">Submit</button></div>
            
            </form>
            </div> 

        </div>
        <div className='hidden sm:block'>
            
                <img className='w-full h-full object-cover logosachi2' src="background.png" alt=""/>
                <img className="logosachi w-6/12 h-6/12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  " src="Group 5.png" alt=""/>
            </div>

            
        
        
        </div>
    )
    }

    export default LandingPage;