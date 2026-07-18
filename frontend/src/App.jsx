import react from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home/Home'
import RestaurantDetail from './pages/RestaurantDetail/RestaurantDetail'
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import UserContextProvider from './context/UserContextProvider'
import { BasketProvider } from "./context/BasketContext";
import {AdminContextProvider}  from "./context/AdminContext";
import BrowseMenu from './pages/BrowseMenu/BrowseMenu'
import OrderingPage from './pages/OrderingPage/OrderingPage'
import AdminRegistration from './pages/PartnerWithUs/AdminRegistration'
import AdminDashboard from './pages/AdminDashboard/AdminDashboard'
import MyOrders from './pages/MyOrders/MyOrders'

function App() {
  return (
    <UserContextProvider>
      <AdminContextProvider>
        <BasketProvider>
          <ToastContainer position='top-right' />
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<SignUp />} />
              <Route path='/browseMenu' element={<BrowseMenu />} />
              <Route path='/browseMenu/:id' element={<BrowseMenu />} />
              <Route path="/restaurants/:id" element={<RestaurantDetail />} />
              <Route path='/orderingPage' element={<OrderingPage />} />
              <Route path='/admin-regis' element={<AdminRegistration />} />
              <Route path='/admin-dashboard' element={<AdminDashboard />} />
              <Route path='/my-orders' element={<MyOrders />} />
            </Routes>
          </BrowserRouter>
        </BasketProvider>
      </AdminContextProvider>
    </UserContextProvider>
  )
}

export default App;
