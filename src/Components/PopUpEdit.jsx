import { useEffect } from "react"
import { UpdateAllMenu } from "../API/Api"
import { refreshPage } from "../utils/utils"

export const PopUpEdit = ({ menu, closeCallback }) => {

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
    return <>
    
                    <div className={`Editpopup active`} id='popup-2'>
                        <div className='overlay'>
                            <div className=''>
                                <button onClick={closeCallback} className='close-btn'>X</button>
                                <h1>Edit Menu</h1>
                                <label className='formtitle'>Product type</label>
                                
                                    <form onSubmit={editClick}>
                                    <div>                   
                                    <select defaultValue={menu.kategori} name='kategori'>
                                        <option value='coffe'>Coffee</option>
                                        <option value='food'>Food</option>
                                        <option value='tea'>Tea</option>
                                    </select>
                                    </div>
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

}