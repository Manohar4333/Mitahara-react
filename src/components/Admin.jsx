import React from 'react'
import './Admin.css'
import AllProducts from './AllProducts';
import { Link } from 'react-router-dom';
import AdminSideMenu from './AdminSideMenu';





const Admin = () => {
  return (
    <div>
        <div className="admin-container">
          <AdminSideMenu/>
            <div className="right-container">
                <div><AllProducts/></div>
            </div>
        </div>
    </div>
  )
}

export default Admin