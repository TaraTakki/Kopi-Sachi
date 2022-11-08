const data = localStorage.getItem('_user') ? JSON.parse(localStorage.getItem('_user')) : ""
export const initialValue = {
    data: data,
    isLoading: false,
    errorMessage: null
}

export const AuthReducer = (initialState, action) => {
    switch (action.type) {
        case "REQ_LOGIN":
            return {
                ...initialState,
                isLoading: true
            }
        case "REQ_REGISTER":
            return {
                ...initialState,
                isLoading: true
            }
        case "LOGIN_SUCCESS":
            return {
                ...initialState,
                data: action.payload,
                isLoading: false,
                errorMessage: null
            }
        case "REGISTER_SUCCESS":
            return {
                ...initialState,
                isLoading: false,
                errorMessage: null
            }
        case "LOGOUT":
            return {
                ...initialState,
                data:""
            }
        case "LOGIN_ERROR":
            return  {
                ...initialState,
                errorMessage: action.error,
                isLoading: false
            }
        case "REGISTER_ERROR":
            return  {
                ...initialState,
                errorMessage: action.error,
                isLoading: false
            }
        default:
            throw new Error('type not defined')
    }
}