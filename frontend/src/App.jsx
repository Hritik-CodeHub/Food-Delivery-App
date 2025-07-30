import react from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home/Home'
import RestaurantDetail from './pages/RestaurantDetail/RestaurantDetail'
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import UserContextProvider  from './context/UserContextProvider'
import Navbar from './components/Navbar/Navbar'
import BrowseMenu from './pages/BrowseMenu/BrowseMenu'
import OrderingPage from './pages/OrderingPage/OrderingPage'

function App() {
  return (<UserContextProvider>
    <ToastContainer position='top-right'/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/browseMenu' element={<BrowseMenu/>} />
        <Route path="/restaurants/:id" element={<RestaurantDetail />}/>
        <Route path='/orderingPage' element={<OrderingPage/>} />
      </Routes>
    </BrowserRouter>
  </UserContextProvider>)
}

export default App
