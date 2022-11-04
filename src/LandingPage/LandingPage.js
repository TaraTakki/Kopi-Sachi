import './LandingPage.css'

function LandingPage(){
return(
    <div>
        <body>
            <section>
                <img src='Group 5.png' alt='logo' className='Logo'></img>
            </section>
    <section className='flex justify-center'><div className='navbar'>
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
        <button class="bg-transparent hover:bg-yellow-700 text-yellow-700 font-semibold hover:text-white py-2 px-4 border border-yellow-700 hover:border-transparent rounded">
  Sign Up
</button>
<button class="bg-transparent hover:bg-yellow-700 text-yellow-700 font-semibold hover:text-white py-2 px-4 border border-yellow-700 hover:border-transparent rounded">
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
    </div>
    </body>
    </div>
)
}

export default LandingPage;