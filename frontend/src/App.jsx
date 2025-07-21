import react from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home/Home'
import RestaurantDetail from './pages/RestaurantDetail/RestaurantDetail'

function App() {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/restaurants" element={<RestaurantDetail />} />
        <Route />
      </Routes>
    </BrowserRouter>
  </>)
}

export default App
