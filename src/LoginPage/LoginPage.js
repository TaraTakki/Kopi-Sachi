import React from "react";

function LandingPage(){
    return(
        <div  className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
           
            
        <div  className=' bg-[#F6EBDA] '>
            <section className="flex flex-col items-center mt-16"><img src="Group 13.png"/></section>
            <form>
          <section className="flex flex-col items-center mt-20"><img src="Login.png"/></section>
                <div className="flex flex-col items-center">
                    <label></label>
                    <input className='rounded-lg bg-[#F8D8A9] mt-3 p-1' type="text" />
                </div>
                <div className="flex flex-col items-center">
                    <label></label>
                    <input className='rounded-lg bg-[#F8D8A9] mt-5 p-1' type="password" />
                </div>
                <div className="flex flex-col items-center mt-5"><button >Submit</button></div>
                
            </form>

        </div>
        <div className='hidden sm:block'>
                <img className='w-full h-full object-cover' src="background.png" alt=""/>
            </div>
        
        
        </div>
    )
    }

    export default LandingPage;