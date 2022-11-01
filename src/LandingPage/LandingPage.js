import './LandingPage.css'

function LandingPage(){
return(
    <div>
        <body>
            <div>
                <img src='Group 5.png' alt='logo' className='Logo'></img>
            </div>
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
    className='flex justify-end mr-8'>
        <button class="bg-transparent hover:bg-yellow-700 text-yellow-700 font-semibold hover:text-white py-2 px-4 border border-yellow-700 hover:border-transparent rounded">
  Sign Up
</button>
<button class="bg-transparent hover:bg-yellow-700 text-yellow-700 font-semibold hover:text-white py-2 px-4 border border-yellow-700 hover:border-transparent rounded">
  Log In
</button>
    </div>
    </body>
    </div>
)
}

export default LandingPage;