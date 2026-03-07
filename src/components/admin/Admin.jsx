import React from 'react';
import './Admin.css';
import AllProducts from './AllProducts';
import { Link } from 'react-router-dom';
import AdminSideMenu from './AdminSideMenu';

const Admin = () => {
  // Restrict access to admin only
  const isAdmin = localStorage.getItem('isAdmin') === 'true';
  if (!isAdmin) {
    return <div style={{textAlign:'center',marginTop:'40px',color:'red',fontWeight:'bold'}}>Admin access required.</div>;
  }
  return (
    <div>
      <div className="admin-container">
        <AdminSideMenu/>
        <div className="right-container">
          <div><AllProducts/></div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
