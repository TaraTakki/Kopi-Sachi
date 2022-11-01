import './LandingPage.css'

function LandingPage(){
return(
    <div className="topnav">
        <img src='Group 5.png' alt='logo' className='logo'></img> 
        <div class="object-none object-center">
        <a className="active" href="#HomePage">Home Page</a>
        <a href="#Menu">Menu</a>
        <a href="#Promo">Promo</a>
        <a href="#Location">Location</a>
          </div>
    </div>
)
}

export default LandingPage;