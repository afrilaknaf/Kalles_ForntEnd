import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Compoents/Navbar'
import Footer from './Compoents/Footer'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import MobileMenu from './Compoents/MobileMenu'

function App() {


  return (
    <>
      <Navbar/>
      <Routes>
        <Route index  element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      <MobileMenu/>
      <Footer/>
    </>
  )
}

export default App
