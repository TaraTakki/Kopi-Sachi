import { useEffect } from 'react';
import { Logout } from '../API/Api';
import { useAuthDispatch, useAuthState } from '../context/AuthContext';
import './LandingPage.css'

function LandingPage(){

  const auth = useAuthState();
  const dispatch = useAuthDispatch();

  // useEffect(() => {
  //   console.log(auth);
  // }, [])

  const handleLogout = (e) => {
    e.preventDefault();
    Logout(dispatch)
    .then (()=> {

    })


  }

return(
    <div className='scrollpage'>
          <div className='background'>
            <section>
                <img src='Group 5.png' alt='logo' className='Logo'></img>
                {/* <img src='Group 14.png' alt='bijikopi1' className='bijikopi1'></img>
                <img src='Group 15.png' alt='bijikopi2' className='bijikopi2'></img> */}
            </section>
    <section className='flex justify-center my'><div className='navbar'>
    <ul>
    <li><a href="#">Home Page</a></li>
    <li className='MenuNav'><a href="#">Menu
    <div className='dropdowncontent'>
                <a href='#'>Food</a>
                <a href='#'>Beverage</a>
                <a href='#'>Snack</a>
    </div>
    </a></li>
    <li><a href="#">Promo</a></li>
    <li><a href="#">Location</a></li>
  </ul>
    </div>
    </section>
    <div className='flex justify-end mr-8 -my-8 mx'>
      {auth.data.session ? <>
        <h1>{auth.data.user.email}</h1>
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
      </>}
    </div>
    <div>
      <div className='flex justify-end mr-8 -my-8 mx '>
      {/* <div className='deco'>
        <p>Cappucino</p>
      </div> */}
      </div>
      <img src='Group 6.png' alt='kopibg' className='kopibg'></img>
      <img src='Ellipse 2.png' alt='kopi' className='kopi'></img>
      <div className='tagline'>
      <p>Enjoy your coffee</p>
      <p>before your activity</p>
      </div>
      <div className='desc'>
      <p>Boost your productivity and build your mood</p>
      <p>with a glass of coffee in the morning</p>
      </div>
      <div className='flex justify-start ml-20 my-5'>
      <button class="bg-yellow-900 hover:bg-yellow-600 text-orange-300 font-semibold hover:text-white py-2 px-4 border-5 border-red-900 hover:border-transparent rounded-full">
      More menu
      </button>
      </div>
      <p className='popular'>Popular</p>
      <p className='now'>now</p>
    </div>

    <div className='promobox gatau'>
    </div>
<ul className='menu'>
  <li><a href='#'>
  <div>
    <img src='Rectangle 11.png' alt='lemontea' className='lemontea'></img>
    <p className='productname'>Lemon Tea</p>
    <p className='price'>8k</p>
    </div></a></li>
  <li><a href='#'>
  <div>
  <img src='Rectangle 11 (1).png' alt='vanilla' className='vanilla'></img>
  <p className='productname'>Vanilla Late</p>
    </div></a></li>
  <li><a href='#'>
  <div>
  <img src='Rectangle 11 (2).png' alt='hazelnut' className='hazelnut'></img>
  <p className='productname'>Hazelnut Late</p>
    </div></a></li>
</ul>
<img src='Rectangle 16.png' className='aboutimg'></img>
<div className='about'>
  <p className='abouttext1'>About us</p>
  <p className='abouttext2'>We provide quality coffee that ready to be delivered</p>
  <text style={{maxWidth:200}}>.{'We are a company that makes and distributes delicious drinks\n Our main products are'} </text>
</div>
<div className='specialmenu'></div>
    </div>
    </div>
)
}

export default LandingPage;