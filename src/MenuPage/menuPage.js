import './menuPage.css'
import '../LandingPage/LandingPage.css'
import { getAllMenu, insertAllMenu, Logout } from '../API/Api'
import { useAuthDispatch, useAuthState } from '../context/AuthContext';
import { useEffect, useState } from 'react';
import { supabase } from '../API/supabase';

function MenuPage(){
    function refreshPage() {
        window.location.reload(false);
      }

    const auth = useAuthState();
    const dispatch = useAuthDispatch();
    const [menus, setMenu] = useState(null);
    const handleLogout = (e) => {
      e.preventDefault();
      Logout(dispatch)
      .then (()=> {
  
      })
    }
    const NambahClick = (e) => {
        e.preventDefault();
        insertAllMenu({
            nama: e.target.nama.value,
            harga: e.target.harga.value,
            deskripsi: e.target.deskripsi.value

        })
        
        .catch ((err) => {
            console.log('gagal');
            console.log(err);
        })
        .then (()=>{refreshPage()})
    }
    function togglePopup(){
        document.getElementById('popup-1').classList.toggle('active')
    }
    function toggleEditPopup(){
        document.getElementById('popup-2').classList.toggle('active')
    }
    useEffect(() => {
        getAllMenu().then((data) => {
            setMenu(data)
        }).catch((err) => {
            console.log(err);
        })
        if(menus !== null){
        }
    },[])

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
                            const HandleDelete = async() => {
                                const { data, error } = await supabase
                                .from('menu')
                                .delete()
                                .eq('id', menu.id)
                                if(error) {
                                    throw error;
                                }
                                return refreshPage();
                                
                            }
                            return <>
                                <li>
                                    <a href='#'><div className='menubox'>
                                    <img src={menu.gambar}></img>
                                    <text className='productname'>{menu.nama}</text>
                                    <text className='price'>{menu.harga}K</text>
                                    <p className='productdesc'>{menu.deskripsi}</p>
                                    <button onClick={HandleDelete}> <img src='ant-design_delete-filled.png'></img></button>
                                    <button onClick={toggleEditPopup}><img src='editIcon.png'></img></button>
                                    </div></a>
                                </li>
                                
                            </>
                        })}
                    </> : <>
                        No Product
                    </>}
                    <li>
                        <button  onClick={togglePopup}><div className='addmenu'>
                            <div className='addproduct'>
                            <img src='Vector.png'></img>
                            </div>
                            </div></button>
                            <script>
                        
                    </script>
                    </li>
                    
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
            
    </div>
    <div className='Food'>
            <div className='part1'>
                <text className='menutitle'>Food</text>
                <ul className='menu'>
                    {menus !== null ? <>
                        {menus.map((menu) => {
                            const HandleDelete = async() => {
                                const { data, error } = await supabase
                                .from('menu')
                                .delete()
                                .eq('id', menu.id)
                                if(error) {
                                    throw error;
                                }
                                return refreshPage();
                                
                            }
                            return <>
                                <li>
                                    <a href='#'><div className='menubox'>
                                    <img src={menu.gambar}></img>
                                    <text className='productname'>{menu.nama}</text>
                                    <text className='price'>{menu.harga}K</text>
                                    <p className='productdesc'>{menu.deskripsi}</p>
                                    <button onClick={HandleDelete}> <img src='ant-design_delete-filled.png'></img></button>
                                    <button onClick={toggleEditPopup}><img src='editIcon.png'></img></button>
                                    </div></a>
                                </li>
                                
                            </>
                        })}
                    </> : <>
                        No Product
                    </>}
                    <li>
                        <button  onClick={togglePopup}><div className='addmenu'>
                            <div className='addproduct'>
                            <img src='Vector.png'></img>
                            </div>
                            </div></button>
                            <script>
                        
                    </script>
                    </li>

                </ul>
            </div>
            
    </div>
    <div className='Tea'>
            <div className='part1'>
                <text className='menutitle'>Tea</text>
                <ul className='menu'>
                    {menus !== null ? <>
                        {menus.map((menu) => {
                            const HandleDelete = async() => {
                                const { data, error } = await supabase
                                .from('menu')
                                .delete()
                                .eq('id', menu.id)
                                if(error) {
                                    throw error;
                                }
                                return refreshPage();
                                
                            }
                            return <>
                                <li>
                                    <a href='#'><div className='menubox'>
                                    <img src={menu.gambar}></img>
                                    <text className='productname'>{menu.nama}</text>
                                    <text className='price'>{menu.harga}K</text>
                                    <p className='productdesc'>{menu.deskripsi}</p>
                                    <button onClick={HandleDelete}> <img src='ant-design_delete-filled.png'></img></button>
                                    <button onClick={toggleEditPopup}><img src='editIcon.png'></img></button>
                                    </div></a>
                                </li>
                                
                            </>
                        })}
                    </> : <>
                        No Product
                    </>}
                    <li>
                        <button  onClick={togglePopup}><div className='addmenu'>
                            <div className='addproduct'>
                            <img src='Vector.png'></img>
                            </div>
                            </div></button>
                            <script>
                        
                    </script>
                    </li>
                    
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
            
    </div>
                    <div className='popup' id='popup-1'>
                        <div className='overlay'>
                            <div className=''>
                                <button onClick={togglePopup} className='close-btn'>X</button>
                                <h1>Add Coffee</h1>
                                {/* <text className='formtitle'>Product type</text>
                                <div>
                                    <select name='producttype'>
                                        <option value='Coffee'>Coffee</option>
                                        <option value='Food'>Food</option>
                                        <option value='Tea'>Tea</option>
                                    </select>
                                    </div> */}
                                    <form onSubmit={NambahClick}>
                                        <div>
                                <label className='formtitle'>Name</label>
                                <input className='w-[90%] txtbgcolor rounded-lg bg-[#F8D8A9] mt-3 p-1 px-3 title font-semibold ml-[5%] ' type="text" placeholder="Nama" name="nama" id="idNama"></input>
                                </div>
                                <div>
                                <label className='formtitle'>Description</label>
                                <input className=' w-[90%] txtbgcolor rounded-lg bg-[#F8D8A9] mt-3 p-1 px-3 title font-semibold ml-[5%]' type="text" placeholder="Deskripsi" name="deskripsi" id="idDeskripsi"></input>
                                </div>
                                <div>
                                <label className='formtitle'>Price</label>     
                                <input className=' w-[90%] txtbgcolor rounded-lg bg-[#F8D8A9] mt-3 p-1 px-3 title font-semibold ml-[5%] ' type="text" placeholder="Harga" name="harga" id="idHarga"  ></input></div>
                                <text className='formtitle'>Image</text>
                                <div className='uploadimg'>
                                    <img src='Group 34.png'></img>
                                </div>
                                <button type='submit' className='submitbutton'>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className='Editpopup' id='popup-2'>
                        <div className='overlay'>
                            <div className=''>
                                <button onClick={toggleEditPopup} className='close-btn'>X</button>
                                <h1>Edit Menu</h1>
                                {/* <text className='formtitle'>Product type</text>
                                <div>
                                    <select name='producttype'>
                                        <option value='Coffee'>Coffee</option>
                                        <option value='Food'>Food</option>
                                        <option value='Tea'>Tea</option>
                                    </select>
                                    </div> */}
                                    <form onSubmit={NambahClick}>
                                        <div>
                                <label className='formtitle'>Name</label>
                                <input className='w-[90%] txtbgcolor rounded-lg bg-[#F8D8A9] mt-3 p-1 px-3 title font-semibold ml-[5%] ' type="text" placeholder="Nama" name="nama" id="idNama"></input>
                                </div>
                                <div>
                                <label className='formtitle'>Description</label>
                                <input className=' w-[90%] txtbgcolor rounded-lg bg-[#F8D8A9] mt-3 p-1 px-3 title font-semibold ml-[5%]' type="text" placeholder="Deskripsi" name="deskripsi" id="idDeskripsi"></input>
                                </div>
                                <div>
                                <label className='formtitle'>Price</label>     
                                <input className=' w-[90%] txtbgcolor rounded-lg bg-[#F8D8A9] mt-3 p-1 px-3 title font-semibold ml-[5%] ' type="text" placeholder="Harga" name="harga" id="idHarga"  ></input></div>
                                <text className='formtitle'>Image</text>
                                <div className='uploadimg'>
                                    <img src='Group 34.png'></img>
                                </div>
                                <button type='submit' className='submitbutton'>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className='DeletePopup' id='popup-3'>
                        <div className='overlay'>
                            <div>
                            <text className='deleteconfirmation'>Are you sure to delete this menu?</text>
                            <ul>
                                <li>
                                    <button></button>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </div>
                    {/* <button onClick='showPopup()' className='addmenu'></button> */}
                </div>
            </div>
    
    )
}


export default MenuPage;
