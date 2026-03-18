import React, { useState } from 'react';
import axios from 'axios';
import AdminSideMenu from './AdminSideMenu';
import './Admin.css';
import './AddProduct.css';

const AddProduct = () => {
        // Restrict access to admin only
        const isAdmin = localStorage.getItem('isAdmin') === 'true';
        if (!isAdmin) {
            return <div style={{textAlign:'center',marginTop:'40px',color:'red',fontWeight:'bold'}}>Admin access required to add products.</div>;
        }
    const [form, setForm] = useState({
        id: '',
        productName: '',
        category: '',
        price: '',
        description: '',
        imageURL: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            id: Number(form.id),
            productName: form.productName,
            category: form.category,
            price: Number(form.price),
            description: form.description,
            imageURL: form.imageURL
        };

        try {
            const res = await axios.post('http://localhost:4300/add', payload);
            console.log('Add product response:', res.data);
            alert('Product added successfully');
            setForm({ id: '', productName: '', category: '', price: '', description: '', imageURL: '' });
        } catch (err) {
            console.error(err);
            alert('Failed to add product');
        }
    };

    return (
        <form className="add-product-form" onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '40px auto', background: '#fff', borderRadius: '12px', boxShadow: '0 2px 16px rgba(0,0,0,0.08)', padding: '32px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '24px', color: '#4a7c59', fontWeight: 700 }}>Add New Product</h2>
            <div className="form-group">
                <label className='form-label' htmlFor="id">Product ID</label>
                <input className='form-input' type="number" id="id" name="id" value={form.id} onChange={handleChange} required placeholder="Enter product ID" />
            </div>
            <div className="form-group">
                <label className='form-label' htmlFor="productName">Product Name</label>
                <input className='form-input' type="text" id="productName" name="productName" value={form.productName} onChange={handleChange} required placeholder="Enter product name" />
            </div>
            <div className='form-group'>
                    <label className='form-label'>Category</label>
                    <select name="category" id="category" value={form.category} onChange={handleChange}>
                        <option value="">-- Select category --</option>
                        <option value="Millets">Millets</option>
                        <option value="millet-breakfast">Millet Breakfast</option>
                        <option value="rotis">Rotis</option>
                        <option value="Curries">Curries</option>
                        <option value="oatmeal">OatMeal</option>
                    </select>
                    </div>
            <div className="form-group">
                <label className='form-label' htmlFor="price">Price (₹)</label>
                <input className='form-input' type="number" id="price" name="price" value={form.price} onChange={handleChange} required placeholder="Enter price" />
            </div>
            <div className="form-group">
                <label className='form-label' htmlFor="description">Description</label>
                <textarea id="description" name="description" value={form.description} onChange={handleChange} required placeholder="Enter product description" rows={3} />
            </div>
            <div className="form-group">
                <label className='form-label' htmlFor="imageURL">Image URL</label>
                <input className='form-input' type="text" id="imageURL" name="imageURL" value={form.imageURL} onChange={handleChange} required placeholder="Enter image URL" />
            </div>
            <button type="submit" className="add-btn" style={{ width: '100%', background: '#4a7c59', color: '#fff', border: 'none', borderRadius: '6px', padding: '12px', fontWeight: 600, fontSize: '17px', cursor: 'pointer', marginTop: '18px' }}>Add Product</button>
        </form>
    );
};

export default AddProduct;