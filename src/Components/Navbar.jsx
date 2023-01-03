import { Logout } from "../API/Api";
import { useAuthDispatch, useAuthState } from "../context/AuthContext";

export const Navbar = () => {
    const auth = useAuthState();
    const dispatch = useAuthDispatch();
    const handleLogout = (e) => {
        e.preventDefault();
        Logout(dispatch)
        .then (()=> {})
    }

    return <>
    
    <section>
        <img src='Group 5.png' alt='logo' className='Logo'></img>
        {/* <img src='Group 14.png' alt='bijikopi1' className='bijikopi1'></img>
        <img src='Group 15.png' alt='bijikopi2' className='bijikopi2'></img> */}
    </section>
    <section className='flex justify-center my'>
    <div className='navbar'>
        <ul>
            <li><a href="/">Home Page</a></li>
            <li className='MenuNav'><a href="/menu">Menu
            {/* <div className='dropdowncontent'>
                        <a href='#'>Food</a>
                        <a href='#'>Beverage</a>
                        <a href='#'>Snack</a>
            </div> */}
            </a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Location</a></li>
        </ul>
    </div>
    </section>
    <div className='flex justify-end mr-8 -my-8 mx'>
        {auth.data.session && <>
            <button onClick={handleLogout}  class="bg-transparent mr-3 hover:bg-yellow-700 text-yellow-700 font-semibold hover:text-white py-2 px-4 border-2 border-yellow-700 hover:border-transparent rounded-full ">
                Logout
            </button>
        </>}
      {/* {auth.data.session ? <>
        <button onClick={handleLogout}  class="bg-transparent mr-3 hover:bg-yellow-700 text-yellow-700 font-semibold hover:text-white py-2 px-4 border-2 border-yellow-700 hover:border-transparent rounded-full ">
            Logout
        </button>
      </> : <>
        <a href='/register' class="bg-transparent mr-3 hover:bg-yellow-700 text-yellow-700 font-semibold hover:text-white py-2 px-4 border-2 border-yellow-700 hover:border-transparent rounded-full ">
            Sign Up
        </a>
        <a href='/login' class="bg-transparent hover:bg-yellow-700 text-yellow-700 font-semibold hover:text-white py-2 px-4 border-2 border-yellow-700 hover:border-transparent rounded-full">
          Log In
        </a>
      </>} */}
    </div>
    
    </>

}