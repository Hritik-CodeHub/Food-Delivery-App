import react from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home/Home'
import RestaurantDetail from './pages/RestaurantDetail/RestaurantDetail'
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'

function App() {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path="/restaurants" element={<RestaurantDetail />} />
      </Routes>
    </BrowserRouter>
  </>)
}

export default App
