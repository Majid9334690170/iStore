import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import Shop from './Components/Shop'
import ShopDetail from './Components/ShopDetail'
import ShoppingCart from './Components/ShoppingCart'
import CheakOut from './Components/CheakOut'
import BlogDetails from './Components/BlogDetails'
import Blog from './Components/Blog'
import Contact from './Components/Contact'
import Vegetable from './Components/Vegetable'
import Fruits from './Components/Fruits'
import Cake from './Components/Cake'
import SoftDrink from './Components/SoftDrink'
import Dryfruits from './Components/Dryfruits'


function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element ={<Home/>} />
      <Route path='/shop' element ={<Shop/>}/>
      <Route path='/shopdetails' element ={<ShopDetail/>}/>
      <Route path='/shoppingcart' element={<ShoppingCart/>}/>
      <Route path='/cheakOut' element={<CheakOut/>}/>
      <Route path='/blogdetails' element={<BlogDetails/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/vegetable' element={<Vegetable/>}/>
      <Route path='/fruits' element={<Fruits/>}/>
      <Route path='/cake' element={<Cake/>}/>
      <Route path='/drink' element={<SoftDrink/>}/>
      <Route path='/dryfruits' element={<Dryfruits/>}/>
      
      
      
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App