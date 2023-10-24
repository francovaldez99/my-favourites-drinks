
import { Route, Routes } from 'react-router-dom'
import HomePage from './Components/HomePage/HomePage'
import { DrinksProvider } from './context/DrinkContext'
import DrinkDetail from './Components/DrinkDetail/DrinkDetail'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Nav from './Components/Nav/Nav'
import { AuthProvider } from './context/AuthContext'
import Notification from './Components/Notification/Notificaction'
import Profile from './Components/Profile/Profile'
import ProtectedRoute from './Components/protectedRoute/ProtectedRoute'


function App() {

  
  return (
  <AuthProvider>
      <DrinksProvider>

        <Nav/>
        <Notification/>
  <Routes >
    
    <Route path="/" element={<HomePage/>}/>
    <Route path="/detail/:idDrink" element={<DrinkDetail/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route element={<ProtectedRoute/>}>
    <Route path='/profile'  element={<Profile/>}/>

    </Route>
  </Routes>

      </DrinksProvider>
  </AuthProvider>
  )
}

export default App
