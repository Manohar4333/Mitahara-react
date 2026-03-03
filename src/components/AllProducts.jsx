import React from 'react'
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { getProducts } from "./services/getProducts";
import AdminSideMenu from './AdminSideMenu';
import './Admin.css';

const BASE_URL = 'http://localhost:4300/products'



const AllProducts = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect (()=>{
        getProducts()
        .then(data => setProducts(data) )
        .catch(err => console.log(err))
    },[]
    )
  const handleEdit = (id) => {
    const product = products.find(p => p.id === id);
    if (!product) {
      console.warn('Product not found for edit:', id);
      return;
    }
    // Navigate to edit page, pass product in location state
    navigate('/admin/', { state: { product } });
  }

  const handleRemove = (id) => {
    // confirm deletion with user
    if (!window.confirm('Are you sure you want to remove this product?')) return;

    // call API to delete then update local state
    axios.delete(`${BASE_URL}/${id}`)
      .then(() => {
        setProducts(prev => prev.filter(p => p.id !== id));
      })
      .catch(err => {
        console.error('Failed to remove product', err);
        alert('Failed to remove product. See console for details.');
      })
  }

  return (

      <div className="right-container">
        <h2>All Products</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ddd' }}>
          <thead>
            <tr style={{ backgroundColor: '#f2f2f2' }}>
              <th style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'left' }}>ID</th>
              <th style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'left' }}>Name</th>
              <th style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'left' }}>Description</th>
              <th style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'left' }}>Price</th>
              <th style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'center' }}>Modify</th>
              <th style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'center' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} style={{ border: '1px solid #ddd' }}>
                <td style={{ border: '1px solid #ddd', padding: '12px' }}>{product.id}</td>
                <td style={{ border: '1px solid #ddd', padding: '12px' }}>{product.productName}</td>
                <td style={{ border: '1px solid #ddd', padding: '12px' }}>{product.description}</td>
                <td style={{ border: '1px solid #ddd', padding: '12px' }}>₹{product.price}</td>
                <td style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'center' }}>
                  <button 
                    onClick={() => handleEdit(product.id)}
                    style={{ marginRight: '8px', padding: '6px 12px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '4px' }}
                  >
                    Edit
                  </button>
                </td>
                <td><button 
                    onClick={() => handleRemove(product.id)}
                    style={{ padding: '6px 12px', backgroundColor: '#f44336', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '4px' }}
                  >
                    Remove
                  </button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  )
  
}

export default AllProducts
