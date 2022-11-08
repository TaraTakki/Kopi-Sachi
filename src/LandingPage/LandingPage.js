import './LandingPage.css'

function LandingPage(){
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
    <li><a href="#">Menu</a></li>
    <li><a href="#">Promo</a></li>
    <li><a href="#">Location</a></li>
  </ul>
    </div>
    </section>
    <div 
    className='flex justify-end mr-8 -my-8 mx'>
        <a href='#' class="bg-transparent hover:bg-yellow-700 text-yellow-700 font-semibold hover:text-white py-2 px-4 border-2 border-yellow-700 hover:border-transparent rounded-full ">
          Sign Up
        </a>
<a href='/login' class="bg-transparent hover:bg-yellow-700 text-yellow-700 font-semibold hover:text-white py-2 px-4 border-2 border-yellow-700 hover:border-transparent rounded-full">
  Log In
</a>
    </div>
    <div>
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

    <div className='promobox flex justify-center ml-14 mt-48'>
    </div>
<ul className='menu'>
  <li><a href='#'>
  <div>
    <img src='Rectangle 11.png' alt='lemontea' className='lemontea'></img>
    </div></a></li>
  <li><a href='#'>
  <div>
  <img src='Rectangle 11 (1).png' alt='vanilla' className='vanilla'></img>
    </div></a></li>
  <li><a href='#'>
  <div>
  <img src='Rectangle 11 (2).png' alt='hazelnut' className='hazelnut'></img>
    </div></a></li>
</ul>
    </div>
    </div>
)
}

export default LandingPage;