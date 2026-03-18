import { useState, useEffect } from 'react'
import Navbar from './components/layout/Navbar'
import './App.css'
import Auth from './components/Auth';
import Cart from './components/cart/Cart';
import { Route, Routes } from 'react-router-dom'
import FoodBowl from './components/food/FoodBowl'
import Error from './components/pages/Error'
import Contact from './components/Contact'
import Blogs from './components/blog/Blogs'
import AboutUs from './components/pages/AboutUs'
import Juices from './components/juice/Juices'
import Home from './components/pages/Home'
import OatMeal from './components/oatmeal/OatMeal'
import Salads from './components/salad/Salads'
import Millets from './components/millet/Millets'
import Footer from './components/layout/Footer'
import Admin from './components/admin/Admin'
import AddProduct from './components/admin/AddProduct'
import EditProduct from './components/admin/EditProduct'
import Rotis from './components/rotis/Rotis';
import MilletBreakfast from './components/milletBreakfast/MilletBreakfast';
import Curries from './components/curries/Curries';

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
        <Route path='/rotis' element={<Rotis/>}></Route>
        <Route path='/millet-breakfast' element={<MilletBreakfast/>}></Route>
        <Route path='/blogs' element={<Blogs/>} ></Route>
        <Route path='/oat-meal' element={<OatMeal/>} ></Route>
        <Route path='/about-us' element={<AboutUs/>}></Route>
        <Route path='/contact' element={<Contact/>} ></Route>
        <Route path='/juices' element = {<Juices/>}/>
        <Route path='/curries' element = {<Curries/>}/>
        <Route path='/salads' element = {<Salads/>}/>
        <Route path='/millets' element = {<Millets/>}></Route>
        <Route path='/admin' element = {<Admin/>} > </Route>
        <Route path='/admin/login' element = {<Auth onLogin={setUser}/>} />
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
