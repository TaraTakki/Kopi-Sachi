import logo from './logo.svg';
import './App.css';
import { useState, createContext} from 'react';
import { BrowserRouter as Router, 
Routes,
Route } from 'react-router-dom';
import LoginPage from './LoginPage/LoginPage';
import LandingPage from './LandingPage/LandingPage';
import { AuthProvider } from './context/AuthContext';
import RegisterPage from './Register/Register';
import { GuestOnly } from './Components/GuestOnly';
import MenuPage from './MenuPage/menuPage';
import ForgotPage from './ForgotPage/forgot';






export const AppContext = createContext(null);
function App() {
  const [pengguna, setPengguna] = useState();
  return (
    <AuthProvider>
      <AppContext.Provider value={{pengguna, setPengguna }}>
        <Router>
          <Routes>
            <Route exact path='/login' element = {<GuestOnly><LoginPage /></GuestOnly>}></Route>
            <Route path='/' element = {<LandingPage/>}></Route>
            <Route path='/register' element= {<GuestOnly><RegisterPage></RegisterPage></GuestOnly>}></Route>

            <Route path='/menu' element= {<GuestOnly><MenuPage></MenuPage></GuestOnly>}></Route>
            
            <Route path='/register' element= {<GuestOnly><MenuPage></MenuPage></GuestOnly>}></Route>
            <Route path='/forgot' element= {<GuestOnly><ForgotPage></ForgotPage></GuestOnly>}></Route>
          </Routes>
        </Router>
      </AppContext.Provider>
    </AuthProvider>
  );
}

export default App;
