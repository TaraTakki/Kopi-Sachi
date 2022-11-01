import React from "react";

function LandingPage(){
    return(
        <div  className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
           
            
        <div  className=' bg-[#F6EBDA] flex flex-col justify-center items-center'>
            <section className="flex justify-center"><img src="Group 13.png"/></section>
            <form>
          <img src="Login.png"/>
                <div>
                    <label>Email</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" />
                </div>
                <button>Login</button>
                
            </form>

        </div>
        <div className='hidden sm:block'>
                <img className='w-full h-full object-cover' src="background.png" alt=""/>
            </div>
        
        
        </div>
    )
    }

    export default LandingPage;