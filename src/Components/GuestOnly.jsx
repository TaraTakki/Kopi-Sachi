import { useNavigate } from "react-router-dom"
import { useAuthState } from "../context/AuthContext"

export const GuestOnly = ({ redirectTo='/', children }) => {
    const auth = useAuthState()
    return !auth.data.session ? children : window.location.pathname = redirectTo;
}