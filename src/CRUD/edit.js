import '../LoginPage/LoginPage.css';
import '../Components/components.css';


function EditPage(){
    


    return(
        <div  className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full '>
            {/* Background bagian kiri */}
            <div  className=' bg-[#F6EBDA] '>
                {/* Logo sachi kecil */}
                <section className="flex flex-col items-center mt-16"><img src="Group 13.png" className="responsive"/></section>
                    {/* Login text */}
                    <div className="flex flex-col items-center "><h1 className="text-[#57170D] title text-xl font-semibold mt-11 ">Login</h1></div>
                    {/* Formnya */}
                    <div className="  ">
                        <form  className="" >
                                {/* Emailnya */}
                                <div className="flex flex-col items-center mt-5 ">
                                    <label></label>
                                    <input className=' w-6/12 txtbgcolor rounded-lg bg-[#F8D8A9] mt-3 p-1 px-3 title font-semibold ' type="text" placeholder="Nama" name="nama" id="idNama"  />
                                </div>
                                <div className="flex flex-col items-center mt-5 ">
                                    <label></label>
                                    <input className=' w-6/12 txtbgcolor rounded-lg bg-[#F8D8A9] mt-3 p-1 px-3 title font-semibold ' type="text" placeholder="Harga" name="harga" id="idHarga"  />
                                </div>
                                <div className="flex flex-col items-center mt-5 ">
                                    <label></label>
                                    <input className=' w-6/12 txtbgcolor rounded-lg bg-[#F8D8A9] mt-3 p-1 px-3 title font-semibold ' type="text" placeholder="Deskripsi" name="deskripsi" id="idDeskripsi"  />
                                </div>
                                
                                
                                
                                <div className="flex flex-col items-center mt-5 "><button class="font-semibold w-6/12 h-10 px-5 m-2 text-[#F6EBDA] transition-colors duration-150 bg-[#433416] rounded-lg focus:shadow-outline hover:bg-[#433416] title text-[16px]">Submit</button></div>
           
            
                        {/* {auth.errorMessage ? <>
                            <span className="text-red-500">{auth.errorMessage}</span>    
                                                
                        </> : <></>} */}
                        </form>
                    </div> 
                {/* Tombol Submit */}
                   
            {/* Forgot Passwordnya */}
            
            </div>
            
            {/* background bagian kanan  */}
            <div className='hidden sm:block'>
                <img className=' object-cover logosachi2 ' src="bg.png" alt=""/>
                {/* <section className="flex justify-center"><img className="logosachi w-6/12 h-6/12 " src="Group 5.png" alt=""/></section> */}
                {/* Copyright */}
                <div className="grid justify-items-center"><p className='title font-semibold logosachi absolute bottom-0 center pb-5 text-[#2F2105] text-[16px]'>Copyright @ 2022</p> </div>
            </div>
        </div>
    )
    }

    export default EditPage;
