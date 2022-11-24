import './menuPage.css'
import '../LandingPage/LandingPage.css'
import { getAllMenu, getBucket, insertAllMenu, Logout, me, UpdateAllMenu } from '../API/Api'
import { useAuthDispatch, useAuthState } from '../context/AuthContext';
import { useEffect, useState } from 'react';
import { supabase } from '../API/supabase';
import { Coffee, UpdateDisabled } from '@mui/icons-material';
import { Navbar } from '../Components/Navbar';

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

    const editClick = (e) => {
        e.preventDefault()
        UpdateAllMenu(e.target.id.value, {
            nama: e.target.nama.value,
            harga: e.target.harga.value,
            deskripsi: e.target.deskripsi.value
        }).then(() => {
            refreshPage()
        }).catch(() => {

        })
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
        // console.log(menus);
    }, [menus])


    
    return(
        <div>
            <div className='menubackground'>
        <Navbar />
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
                            if(menu.kategori === 'coffe'){
                            
                                return <>
                                    <li>
                                        <a href='#'><div className='menubox'>
                                        <img src={menu.gambar}></img>
                                        <text className='productname'>{menu.nama}</text>
                                        <text className='price'>{menu.harga}K</text>
                                        <p className='productdesc'>{menu.deskripsi}</p>
                                        {auth.data.session && <>
                                            <button onClick={HandleDelete}> <img src='ant-design_delete-filled.png'></img></button>
                                            <button onClick={toggleEditPopup}><img src='editIcon.png'></img></button>

                                        </>}
                                        </div></a>
                                    </li>
                                </>


                            }
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
                    {menus !== null ? <>
                        {menus.map((menu) => {
                            return <>
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
                                    <form onSubmit={editClick}>
                                        <div>
                                <label className='formtitle'>Name</label>
                                <input defaultValue={menu.id} name="id" hidden></input>
                                <input defaultValue={menu.nama} className='w-[90%] txtbgcolor rounded-lg bg-[#F8D8A9] mt-3 p-1 px-3 title font-semibold ml-[5%] ' type="text" placeholder="Nama" name="nama" id="idNama"></input>
                                </div>
                                <div>
                                <label className='formtitle'>Description</label>
                                <input defaultValue={menu.deskripsi} className=' w-[90%] txtbgcolor rounded-lg bg-[#F8D8A9] mt-3 p-1 px-3 title font-semibold ml-[5%]' type="text" placeholder="Deskripsi" name="deskripsi" id="idDeskripsi"></input>
                                </div>
                                <div>
                                <label className='formtitle'>Price</label>     
                                <input defaultValue={menu.harga} className=' w-[90%] txtbgcolor rounded-lg bg-[#F8D8A9] mt-3 p-1 px-3 title font-semibold ml-[5%] ' type="text" placeholder="Harga" name="harga" id="idHarga"  ></input></div>
                                <text className='formtitle'>Image</text>
                                <div className='uploadimg'>
                                    <img src='Group 34.png'></img>
                                </div>
                                <button type='submit' className='submitbutton'>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                                
                            </>
                        })}
                    </> : <>
                        
                    </>}
                    
                    {/* <button onClick='showPopup()' className='addmenu'></button> */}
                </div>
            </div>
        </div>
    )
}


export default MenuPage;
