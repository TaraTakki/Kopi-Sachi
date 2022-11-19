import './menuPage.css'
import '../LandingPage/LandingPage.css'
import { getAllMenu, Logout } from '../API/Api'
import { useAuthDispatch, useAuthState } from '../context/AuthContext';
import { useEffect, useState } from 'react';



function MenuPage(){
    const auth = useAuthState();
    const dispatch = useAuthDispatch();
    const [menus, setMenu] = useState(null);

    const handleLogout = (e) => {
        e.preventDefault();
        Logout(dispatch)
        .then (()=> {

        })
    }

    useEffect(() => {
        getAllMenu().then((data) => {
            setMenu(data)
        }).catch((err) => {
            console.log(err);
        })
        if(menus !== null){
        }
    }, [])

    useEffect(() => {
        console.log(menus);
    }, [menus])

    
    
    return(
        <div>
            <div className='menubackground'>
            <section>
                <img src='Group 5.png' alt='logo' className='Logo'></img>
                {/* <img src='Group 14.png' alt='bijikopi1' className='bijikopi1'></img>
                <img src='Group 15.png' alt='bijikopi2' className='bijikopi2'></img> */}
            </section>
    <section className='flex justify-center my'><div className='navbar'>
    <ul>
    <li><a href="/">Home Page</a></li>
    <li className='MenuNav'><a href="/menu">Menu
    {/* <div className='dropdowncontent'>
                <a href='#'>Food</a>
                <a href='#'>Beverage</a>
                <a href='#'>Snack</a>
    </div> */}
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
    
    <div className='Coffee'>
            <div className='part1'>
                <text className='menutitle'>Coffee</text>
                <ul className='menu'>
                    {menus !== null ? <>
                        {menus.map((menu) => {
                            return <>
                                {/* <li>
                                    <a href='#'><div className='menubox'>
                                    <img src='Rectangle 54.png'></img>
                                    <div><text className='title font-semibold text-[24px] text-[#2F2105] pl-6'>{menu.nama}</text>
                                    <text className='title font-semibold text-[23px] text-[#2F2105] pl-28'>{menu.harga}K</text></div>
                                    <text className='font-medium text-[#878581] font text-[15px] pl-6'>{menu.deskripsi}</text>
                                    
                                    </div></a>
                                    
                                    
                                </li> */}
                                <li>
                                <div class="overflow-hidden shadow-lg mx-3 bg-white pr-10 menuboxz ">
  <img class="w-full" src={menu.gambar} alt=""/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{menu.nama}</div>
    <p class="text-gray-700 text-base">
      {menu.deskripsi}
    </p>
    <a href='/edit'>edit</a>
  </div>
  
</div></li>
                                
                               
                            </>
                        })}
                    </> : <>
                        No Product
                    </>}
                    {/* <li>
                        <a href='#'><div className='menubox'>
                        <img src='Rectangle 29.png' alt='Cappucino'></img>
                        <text className='productname'>Cappucino</text></div></a>
                    </li>
                    <li>
                        <a href='#'><div className='menubox'>
                        <img src='Rectangle 31.png' alt='Moccacino'></img>
                        <text className='productname'>Moccacino</text></div></a>
                    </li> */}
                </ul>
            </div>
            <div className='part2'>
                <ul className='menu'>
                    
                    <li>
                        <a href='/nambah' type='submit' className='btn' onClick='openPopup()'><div className='addmenu'>
                            <div className='addproduct'>
                            <img src='Vector.png'></img>
                            </div>
                            </div></a>
                            <div className='popup' id='popup'>
                                <div className='addform'></div>
                            </div>
                            <script>
                            </script>
                    </li>
                </ul>
            </div>
    </div>
                <div className='food'>
                    <text className='menutitle'>Food</text>
                    <div className='part1'>
                    <ul className='menu'>
                        <li><a href='#'><div className='menubox'>
                        <img src='Rectangle 27.png' alt='Cruffle'></img>
                        <text className='productname'>Cruffle</text>
                            </div></a></li>
                        <li><a href='#'><div className='menubox'>
                        <img src='Rectangle 68.png' alt='Cheese Cake'></img>
                        <text className='productname'>Cheese Cake</text></div></a></li>
                        <li><a href='#'><div className='menubox'>
                        <img src='Rectangle 70.png' alt='Macarons'></img>
                        <text className='productname'>Macarons</text></div></a></li>
                    </ul>
                    </div>
                    <div className='part2'>
                    <ul className='menu'>
                        <li><a href='#'><div className='menubox'>
                        <img src='Rectangle 67.png' alt='Sugar Donuts'></img>
                        <text className='productname'>Sugar Donuts</text></div></a></li>
                        <li><a href='#'><div className='menubox'>
                        <img src='Rectangle 69.png' alt='Lava Cake'></img>
                        <text className='productname'>Lava Cake</text></div></a></li>
                        <li>
                        <a href='/nambah'><section className='addmenu'>
                            <section className='mt-20 ml-24 add'>
                            <img src='Vector.png' className='add'></img>
                            <text className='addproduct'>Add Product</text>
                            </section>
                            </section></a>
                    </li>
                    </ul>
                    </div>
                </div>
                <div className='Tea'>
                    <text className='menutitle'>Tea</text>
                    <div className='part1'>
                        <ul className='menu'>
                            <li><a href='#'><div className='menubox'>
                            <img src='Rectangle 78.png' alt='lemontea'></img>
                            <text className='productname'>Lemon Tea</text></div></a></li>
                            <li><a href='#'><div className='menubox'>
                            <img src='Rectangle 80.png' alt='matchatea'></img>
                            <text className='productname'>Matcha Tea</text></div></a></li>
                            <li><a href='#'><div className='menubox'>
                            <img src='Rectangle 82.png' alt='lycheetea'></img>
                            <text className='productname'>Lychee Tea</text></div></a></li>
                        </ul>
                    </div>
                    <div className='part2'>
                        <ul className='menu'>
                            <li><a href='#'><div className='menubox'>
                            <img src='Rectangle 79.png' alt='bobatea'></img>
                            <text className='productname'>Boba Tea</text></div></a></li>
                            <li><a href='#'><div className='menubox'>
                            <img src='Rectangle 81.png' alt='milktea'></img>
                            <text className='productname'>Milk Tea</text></div></a></li>
                            <li>
                        <a href='#'><section className='addmenu'>
                            <section className='mt-20 ml-24 add'>
                            <img src='Vector.png' className='add'></img>
                            <text className='addproduct'>Add Product</text>
                            </section>
                            </section></a>
                    </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MenuPage;
