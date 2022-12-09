import { useEffect } from 'react';
import { Logout } from '../API/Api';
import { Navbar } from '../Components/Navbar';
import { useAuthDispatch, useAuthState } from '../context/AuthContext';
import './LandingPage.css'

function LandingPage(){

  

  // useEffect(() => {
  //   console.log(auth);
  // }, [])


return(
    <div className='scrollpage'>
          <div className='background'>
            <section>
                <img src='Group 5.png' alt='logo' className='Logo'></img>
                {/* <img src='Group 14.png' alt='bijikopi1' className='bijikopi1'></img>
                <img src='Group 15.png' alt='bijikopi2' className='bijikopi2'></img> */}
            </section>
      <Navbar />
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
      </div>
      <p className='popular'>Popular</p>
      <p className='now'>now</p>
    </div>
    <div className='promobox gatau'>
    </div>
<ul className='menu'>
  <li><a href='#'>
  <div className='menubox'>
    <img src='Rectangle 78.png' alt='lemontea' className='lemontea'></img>
    <text className='productname'>Lemon Tea</text>
    <text className='price'>8K</text>
    </div></a></li>
  {/* <li><a href='#'>
  <div className='menubox'>
  <img src='Rectangle 11 (1).png' alt='vanilla' className='vanilla'></img>
  <text className='productname'>Vanilla Late</text>
  <text className='price'>21K</text>
    </div></a></li>
  <li><a href='#'>
  <div className='menubox'>
  <img src='Rectangle 11 (2).png' alt='hazelnut' className='hazelnut'></img>
  <text className='productname'>Hazelnut Late</text>
  <text className='price'>23K</text>
    </div></a></li> */}
</ul>
<img src='Rectangle 16.png' className='aboutimg'></img>
<div className='about'>
  <text className='abouttext1'>About us</text>
  <p className='abouttext2'>We provide quality coffee that ready to be delivered</p>
  {/* <text style={{maxWidth:200}}>.{'We are a company that makes and distributes delicious drinks\n Our main products are'} </text> */}
</div>
<text className='specialmenutitle'>Special Menu For You</text>
<div className='specialmenu'>
  <ul className='menu'>
    <li>
      <a href='#'>
        <div className='menubox'> 
          <img src='Rectangle 27.png' alt='Cruffle'></img>
          <text className='productname'>Cruffle</text>
          <text className='price'>15K</text>
        </div>
      </a>
    </li>
    <li>
      <a href='#'>
        <div className='menubox'>
        <img src='Rectangle 29.png' alt='Cappucino'></img>
        <text className='productname'>Cappucino</text>
        <text className='price'>20K</text>
        </div>
      </a>
    </li>
    <li>
      <a href='#'>
        <div className='menubox'>
        <img src='Rectangle 31.png' alt='Moccacino'></img>
        <text className='productname'>Moccacino</text>
        <text className='price'>20K</text>
        </div>
      </a>
    </li>
    <li>
      <a href='#'>
        <div className='menubox'>
          <img src='Rectangle 35.png' alt='BlackCoffee'></img>
          <text className='productname'>Black Coffee</text>
          <text className='price'>12K</text>
        </div>
      </a>
    </li>
    <li>
      <a href='#'>
        <div className='menubox'>
        <img src='Rectangle 36.png' alt='DalgonaCoffee'></img>
        <text className='productname'>Dalgona Coffee</text>
        <text className='price'>15K</text>
        </div>
      </a>
    </li>
    <li>
      <a href='#'>
        <div className='menubox'>
        <img src='Rectangle 37.png' alt='ThaiTea'></img>
        <text className='productname'>Thai Tea</text>
        <text className='price'>15K</text>
        </div>
      </a>
    </li>
  </ul>
</div>
<div className='aboutsection'>
<img src='Group 5.png' alt='logo' className='AboutLogo'></img>
<p className='aboutdesc'>SACHI is cafe that serve many 
variant coffee and other dishes with
comfort</p>
<a href='https://goo.gl/maps/yVy3Km7qhukdKyju8' className='location'>
  <img src='Group 50.png'></img>
  <text className='address'>Jl. Madukismo, Yogyakarta, Bantul </text></a>
  <ul className='aboutlist1'>
    <li>
      <text>Explore</text>
    </li>
    <li>
      <text>Menu</text>
    </li>
    <li>
      <text>Contact Us</text>
    </li>
  </ul>
</div>
    </div>
    </div>
)}


export default LandingPage;