import './LandingPage.css'

function LandingPage(){
return(
    <div>
        <body>
            <section>
                <img src='Group 5.png' alt='logo' className='Logo'></img>
            </section>
    <section className='flex justify-center my-3'><div className='navbar'>
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
        <button class="bg-transparent hover:bg-yellow-700 text-yellow-700 font-semibold hover:text-white py-2 px-4 border-2 border-yellow-700 hover:border-transparent rounded-full ">
  Sign Up
</button>
<button class="bg-transparent hover:bg-yellow-700 text-yellow-700 font-semibold hover:text-white py-2 px-4 border-2 border-yellow-700 hover:border-transparent rounded-full">
  Log In
</button>
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
    </div>
    </body>
    </div>
)
}

export default LandingPage;