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