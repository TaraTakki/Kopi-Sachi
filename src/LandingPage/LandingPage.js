import './LandingPage.css'

function LandingPage(){
return(
    <div className="topnav">
        <a className="active" href="#HomePage">Home Page</a>
        <a href="#Menu">Menu</a>
        <a href="#Promo">Promo</a>
        <a href="#Location">Location</a>
        <a href="javascript:void(0);" class="icon" onclick="myFunction()"></a>
        <i class="fa fa-bars"></i>
    </div>
)
}
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

export default LandingPage;