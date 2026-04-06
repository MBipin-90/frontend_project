import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './component/Header'
import Footer from './component/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Admin_login from '../admin/pages/Admin_login'
import Dashboard from '../admin/pages/Dashboard'
import Shop from './pages/Shop'
import Fruit from './pages/Fruit'
import Juice from './pages/Juice'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Add_categories from '../admin/pages/Add_categories'
import Add_product from '../admin/pages/Add_product'
import Customer from '../admin/pages/Customer'
import Feedback from '../admin/pages/Feedback'
import Manage_categories from '../admin/pages/Manage_categories'
import Manage_contact from '../admin/pages/Manage_contact'
import Manage_product from '../admin/pages/Manage_product'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Userprofile from './pages/Userprofile'
import Order_page from './Order_page'
import Before_user from './component/Before_user'
import After_user from './component/After_user'
import Before_admin from '../admin/component/Before_admin'
import After_admin from '../admin/component/After_admin'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Edit_profile from './pages/Edit_profile'
import Shop_singel from './pages/Shop_singel'

function Approuter() {
  return (
    <div>
        <BrowserRouter>
        <ToastContainer></ToastContainer>
        <Routes>
            <Route path='/' element={<><Header/><Home /><Footer/></>} ></Route>
            <Route path='/about' element={<><Header/><About /><Footer/></>}></Route>
            <Route path='/shop' element={<><Header/><Shop /><Footer/></>}></Route>
            <Route path='/shop_singel/:id' element={<><Header/><Shop_singel /><Footer/></>}></Route>
            <Route path='/fruit' element={<><Header/><Fruit /><Footer/></>}></Route>
            <Route path='juice' element={<><Header/><Juice /><Footer/></>}></Route>
            <Route path='gallery' element={<><Header/><Gallery /><Footer/></>}></Route>
            <Route path='contact' element={<><Header/><Contact /><Footer/></>}></Route>
            <Route path='blog' element={<><Header/><Blog /><Footer/></>}></Route>
            

            <Route element={<Before_user/>}>
            <Route path='login' element={<><Header/><Login/><Footer/></>}></Route>
            <Route path='signup' element={<><Header/><Signup/><Footer/></>}></Route>
          </Route>
             
             <Route element={<After_user/>}>
            <Route path='/userprofile/:id' element={<><Header/><Userprofile /><Footer/></>}></Route>
            <Route path='/edit_profile/:id' element={<><Header/><Edit_profile/><Footer/></>}></Route>
            </Route>

            <Route path='order' element={<><Header/><Order_page /><Footer/></>}></Route>

            <Route element={<Before_admin/>}>
            <Route path='/admin_login' element={<><Admin_login /></>}></Route>
            </Route>

            <Route element={<After_admin/>}>
            <Route path='/dashboard' element={<><Dashboard /></>}></Route>
            <Route path='/add_categories' element={<><Add_categories /></>}></Route>
            <Route path='/add_product' element={<><Add_product/></>}></Route>
            <Route path='/manage_customer' element={<><Customer/></>}></Route>
            <Route path='/feedback' element={<><Feedback/></>}></Route>
            <Route path='/manage_categories' element={<><Manage_categories/></>}></Route>
            <Route path='/manage_contact' element={<><Manage_contact/></>}></Route>
            <Route path='/manage_product' element={<><Manage_product/></>}></Route>
            </Route>

        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Approuter