import logo from './logo.svg';
import './App.css';
import { useState, createContext} from 'react';
import LoginPage from './LoginPage/LoginPage';
import LandingPage from './LandingPage/LandingPage';


export const AppContext = createContext(null);
function App() {
  const [pengguna, setPengguna] = useState();
  return (
    <AppContext.Provider value={{pengguna, setPengguna }}>
    <LandingPage/>
    </AppContext.Provider>
  );
}

export default App;
