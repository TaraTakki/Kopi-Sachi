import './menuPage.css'
import '../LandingPage/LandingPage.css'
import { getAllMenu, getBucket, insertAllMenu, Logout, me, UpdateAllMenu } from '../API/Api'
import { useAuthDispatch, useAuthState } from '../context/AuthContext';
import { useEffect, useState } from 'react';
import { supabase } from '../API/supabase';
import { Navbar } from '../Components/Navbar';
import { PopUpEdit } from '../Components/PopUpEdit';

function MenuPage(){
    function refreshPage() {
        window.location.reload(false);
    }

    const auth = useAuthState();
    const dispatch = useAuthDispatch();
    const [menus, setMenu] = useState(null);
    const [isPopUpEditActive, setIsPopUpEditActive] = useState(false);
    const [popUpEditData, setPopUpEditData] = useState({})

    const NambahClick = (e) => {
        e.preventDefault();
        
        insertAllMenu({
            nama: e.target.nama.value,
            harga: e.target.harga.value,
            deskripsi: e.target.deskripsi.value,
            kategori: e.target.kategori.value
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
            deskripsi: e.target.deskripsi.value,
            kategori: e.target.kategori.value
        }).then(() => {
            refreshPage()
        })
    }

    function togglePopup(){
        document.getElementById('popup-1').classList.toggle('active')
    }

    function toggleEditPopup(menu) {
        setIsPopUpEditActive(true)
        setPopUpEditData(menu)
    }

    function closeEditPopup() {
        setIsPopUpEditActive(false);
    }

    useEffect(() => {
        console.log(isPopUpEditActive);
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
                                        <img src='
                                        Rectangle 35.png'></img>
                                        <text className='productname'>{menu.nama}</text>
                                        <text className='price'>{menu.harga}</text>
                                        <p className='productdesc'>{menu.deskripsi}</p>
                                        {auth.data.session ? <>
                                            <button onClick={HandleDelete}> <img src='ant-design_delete-filled.png'></img></button>
                                            <button onClick={() => {toggleEditPopup( menu )}}><img src='editIcon.png'></img></button>
      </> : <>
        <img src='keran.png'></img>
        
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
                            if(menu.kategori === 'food'){
                            
                                return <>
                                    <li><a href='#'><div className='menubox'>
                        <img src='Rectangle 27.png' alt='Cruffle'></img>
                        <text className='productname'>{menu.nama}</text>
                        <text className='price'>{menu.harga}</text>
                                        <p className='productdesc'>{menu.deskripsi}</p>
                                        {auth.data.session ? <>
                                            <button onClick={HandleDelete}> <img src='ant-design_delete-filled.png'></img></button>
                                            <button onClick={() => {toggleEditPopup( menu )}}><img src='editIcon.png'></img></button>
      </> : <>
      <img src='keran.png'></img>
        
      </>}
                            </div></a></li>
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
                            if(menu.kategori === 'tea'){
                            
                                return <>
                                    <li><a href='#'><div className='menubox'>
                        <img src='Rectangle 78.png' alt='Tea'></img>
                        <text className='productname'>{menu.nama}</text>
                        <text className='price'>{menu.harga}</text>
                                        <p className='productdesc'>{menu.deskripsi}</p>
                                        
                                        {auth.data.session ? <>
                                            <button onClick={HandleDelete}> <img src='ant-design_delete-filled.png'></img></button>
                                            <button onClick={() => toggleEditPopup(menu)}><img src='editIcon.png'></img></button>
      </> : <>
      <img src='keran.png'></img>
        
      </>}
                            </div></a></li>
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
                    <div className='popup' id='popup-1'>
                        <div className='overlay'>
                            <div className=''>
                                <button onClick={togglePopup} className='close-btn'>X</button>
                                <h1>Add Menu</h1>
                                <text className='formtitle'>Product type</text>
                                    <form onSubmit={NambahClick}>
                                    <div>
                                    <select name='kategori'>
                                        <option  value='coffe' name="coffe" id='idCoffe'>Coffe</option>
                                        <option value='food' name="food" id='idFood'>Food</option>
                                        <option value='tea' name="tea" id='idTea'>Tea</option>
                                    </select>
                                    </div>
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
                    </> })} </> : <></>}
                    <div className='DeletePopup' id='popup-3'>
                        <div className='overlay'>
                            <div>
                            <img src='delete.png' className='deleteicon'></img>
                            <text className='deleteconfirmation'>Are you sure to delete this menu?</text>
                            <ul>
                                <li>
                                    <button className='deleteCancel'>Cancel</button>
                                    <button className='deleteOk'>OK</button>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </div>
                    {/* <button onClick='showPopup()' className='addmenu'></button> */}
                    {isPopUpEditActive ? <> 
                        <PopUpEdit isActive={isPopUpEditActive} menu={popUpEditData} closeCallback={closeEditPopup} />                    
                    </> : <></>}
                </div>
            </div>
                        )
    
}


export default MenuPage;
