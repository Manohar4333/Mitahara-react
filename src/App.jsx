import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Auth from './components/Auth';
import Cart from './components/Cart';
import { Route, Routes } from 'react-router-dom'
import FoodBowl from './components/FoodBowl'
import Error from './components/Error'
import Contact from './components/Contact'
import Blogs from './components/Blogs'
import AboutUs from './components/AboutUs'
import Juices from './components/Juices'
import Home from './components/Home'
import OatMeal from './components/OatMeal'
import Salads from './components/Salads'
import Millets from './components/Millets'
import Footer from './components/Footer'
import Admin from './components/Admin'
import AddProduct from './components/AddProduct'
import EditProduct from './components/EditProduct'

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token && !user) {
      setUser({}); // Optionally decode token for user info
    }
  }, [user]);

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/food-bowls' element={<FoodBowl/>}></Route>
        <Route path='/blogs' element={<Blogs/>} ></Route>
        <Route path='/oat-meal' element={<OatMeal/>} ></Route>
        <Route path='/about-us' element={<AboutUs/>}></Route>
        <Route path='/contact' element={<Contact/>} ></Route>
        <Route path='/juices' element = {<Juices/>}/>
        <Route path='/salads' element = {<Salads/>}/>
        <Route path='/millets' element = {<Millets/>}></Route>
        <Route path='/admin' element = {<Admin/>} > </Route>
        <Route path='/admin/add-product' element = {<AddProduct/>}/>
        <Route path='/admin/edit' element= {<EditProduct/>}/>
        <Route path='/cart' element={user ? <Cart/> : <Auth onLogin={setUser}/>}/>
        <Route path='/login' element={<Auth onLogin={setUser}/>}/>
        <Route path='*' element={<Error/>}></Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App
