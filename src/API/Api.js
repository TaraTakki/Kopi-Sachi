import { supabase } from "./supabase"

/**
 * 
 * @param {*} dispatch 
 * @param {
 *      email: *
 *      password: *
 * } formData 
 */
export const Login = async (dispatch, formData) => {
    dispatch({type: 'REQ_LOGIN'})
    const {data, error} = await supabase.auth.signInWithPassword(formData)

    if (error) {
        dispatch({type:'LOGIN_ERROR', error: error.message})
        throw error
    }

    localStorage.setItem('_user', JSON.stringify(data))
    dispatch({type: 'LOGIN_SUCCESS', payload: data})

    return data
}

export const Register = async (dispatch, formData) => {
    dispatch({type: 'REQ_REGISTER'})
    const {data, error} = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password
    })
    if (error){
        dispatch({type:'REGISTER_ERROR', error: error.message})
        throw error
    }

    dispatch({type: 'REGISTER_SUCCESS'})
    
    return data
}

export const Logout = async (dispatch) => {
    const {error} = await supabase.auth.signOut();
    if(error){
        throw error
    }
    
    localStorage.clear()
    dispatch({type: 'LOGOUT'})
    
}

export const SendPasswordRecovery = async (email) => {
    const { data, error } =  await supabase.auth.resetPasswordForEmail(email,{redirectTo:`${window.location.origin}/reset-password`})
    

    if(error){
        throw error;
    }
    return data;
}

export const ResetPassword = async(formData) => {
    
    


   const { data, error } = await supabase.auth.updateUser({
  email: formData.email,
        password: formData.password
 })
  
   
  if(error){
    throw error;
}
return data;
  
}

export const getAllMenu = async() => {
    
    const { data, error } = await supabase
        .from('menu')
        .select()

    if(error){
        throw error;
    }
    return data;

}


export const getBucket = async() => {
    const { data, error } = await supabase
  .storage
  .getBucket('gambar')
  if(error){
    throw error;
}
return data;
}


export const insertAllMenu = async(formData) => {
   
const { data, error } = await supabase
.from('menu')
.insert([
  formData,
])
if(error) {
    throw error;
}
return data;

}   

export const UpdateAllMenu = async(id, formData) => {
    
const { data, error } = await supabase
.from('menu')
.update(formData)
.eq('id', id )
if(error){
    throw error
}

return data

}

export const me = async (id) => {
    let { data: menu, error } = await supabase
    .from('menu')
    .select('*').eq('id', id)
    
    if(error){
        throw error
    }
    
    return menu[0] ? menu[0] : null
}

export const DeleteAllMenu = async() => {
    
const { data, error } = await supabase
.from('menu')
.delete()
.eq('id', '')

}

export const CreateBucket = async() => {
    const { data, error } = await supabase
  .storage
  .createBucket('avatars', { public: false })
}

export const GetBucket = async() => {
    const { data, error } = await supabase
  .storage
  .getBucket('gambar')
  if(error) {
    throw error;
}
return data;
}


