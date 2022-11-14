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
        {/* <h1>{auth.data.user.email}</h1> */}
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
      <a href='#' class="bg-yellow-900 hover:bg-yellow-600 text-orange-300 font-semibold hover:text-white py-2 px-4 border-5 border-red-900 hover:border-transparent rounded-full">
      More menu
      </a>
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
    <text className='productname'>Lemon Tea</text>
    <text className='price'>8K</text>
    </div></a></li>
  <li><a href='#'>
  <div>
  <img src='Rectangle 11 (1).png' alt='vanilla' className='vanilla'></img>
  <text className='productname'>Vanilla Late</text>
  <text className='price'>21K</text>
    </div></a></li>
  <li><a href='#'>
  <div>
  <img src='Rectangle 11 (2).png' alt='hazelnut' className='hazelnut'></img>
  <text className='productname'>Hazelnut Late</text>
  <text className='price'>23K</text>
    </div></a></li>
</ul>
<img src='Rectangle 16.png' className='aboutimg'></img>
<div className='about'>
  <text className='abouttext1'>About us</text>
  <p className='abouttext2'>We provide quality coffee that ready to be delivered</p>
  {/* <text style={{maxWidth:200}}>.{'We are a company that makes and distributes delicious drinks\n Our main products are'} </text> */}
  <a href='#' class="menubutton bg-yellow-900 hover:bg-yellow-600 text-orange-300 font-semibold hover:text-white py-2 px-4 border-5 border-red-900 hover:border-transparent rounded-full">
      Get your coffee
      </a>
</div>
<text className='specialmenutitle'>Special Menu For You</text>
<div className='specialmenu'>
  <ul className='menu'>
    <li>
      <a href='#'>
        <div>
          <img src='Rectangle 27.png' alt='Cruffle'></img>
          <text className='productname'>Cruffle</text>
          <text className='price'>15K</text>
        </div>
      </a>
    </li>
    <li>
      <a href='#'>
        <div>
        <img src='Rectangle 29.png' alt='Cappucino'></img>
        <text className='productname'>Cappucino</text>
        <text className='price'>20K</text>
        </div>
      </a>
    </li>
    <li>
      <a href='#'>
        <div>
        <img src='Rectangle 31.png' alt='Moccacino'></img>
        <text className='productname'>Moccacino</text>
        <text className='price'>20K</text>
        </div>
      </a>
    </li>
  </ul>
</div>
<div className='specialmenu2'>
  <ul className='menu'>
    <li>
      <a href='#'>
        <div>
          <img src='Rectangle 35.png' alt='BlackCoffee'></img>
          <text className='productname'>Black Coffee</text>
          <text className='price'>12K</text>
        </div>
      </a>
    </li>
    <li>
      <a href='#'>
        <div>
        <img src='Rectangle 36.png' alt='DalgonaCoffee'></img>
        <text className='productname'>Dalgona Coffee</text>
        <text className='price'>15K</text>
        </div>
      </a>
    </li>
    <li>
      <a href='#'>
        <div>
        <img src='Rectangle 37.png' alt='ThaiTea'></img>
        <text className='productname'>Thai Tea</text>
        <text className='price'>15K</text>
        </div>
      </a>
    </li>
  </ul>
</div>
<div className='reviewbox'>
<ul>
  <li>
      <img src='Rectangle 45.png' alt='Cobuz'></img>
      <div className='review'>
        
      </div>
  </li>
  <li>
      <img src='Rectangle 39.png' alt='Cobuz'></img>
  </li>
  <li>
      <img src='Rectangle 43.png' alt='Cobuz'></img>
  </li>
</ul>
</div>
    </div>
    </div>
)
}

export default LandingPage;