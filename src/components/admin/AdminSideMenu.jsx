import React from 'react';
import './Admin.css';
import { Link } from 'react-router-dom';

const AdminSideMenu = () => {
  return (
    <div className="left-container">
      <div className='container-item'><h4>Admin Panel</h4></div>
      <div className='container-item'>
        <Link to={'/admin'} className='sidebar-link'>
          <h6>View Products</h6>
        </Link>
      </div>
      <div className='container-item'>
        <Link to={'/admin/add-product'} className='sidebar-link'>
          <h6>Add Product</h6>
        </Link>
      </div>
      <div className='container-item'>
        <Link to={'/admin'} className='sidebar-link'>
          <h6>Manage Products</h6>
        </Link>
      </div>
    </div>
  );
};

export default AdminSideMenu;
