import logo from './logo.svg';
import './App.css';
import { useState, createContext} from 'react';
import { BrowserRouter as Router, 
Routes,
Route } from 'react-router-dom';
import LoginPage from './LoginPage/LoginPage';
import LandingPage from './LandingPage/LandingPage';


export const AppContext = createContext(null);
function App() {
  const [pengguna, setPengguna] = useState();
  return (
    <AppContext.Provider value={{pengguna, setPengguna }}>
      <Router>
        <Routes>
          <Route exact path='/login' element = {<LoginPage/>}></Route>
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
