import React, { useState } from 'react'
import axios from 'axios'
import AdminSideMenu from './AdminSideMenu'
import './Admin.css'
import './AddProduct.css'

const AddProduct = () => {
    const [form, setForm] = useState({
        id: '',
        productName: '',
        category: '',
        price: '',
        description: '',
        imageURL: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const payload = {
            id: Number(form.id),
            productName: form.productName,
            category: form.category,
            price: Number(form.price),
            description: form.description,
            imageURL: form.imageURL
        }

        try {
            const res = await axios.post('http://localhost:4300/add', payload)
            console.log('Add product response:', res.data)
            alert('Product added successfully')
            setForm({ id: '', productName: '', category: '', price: '', description: '', imageURL: '' })
        } catch (err) {
            console.error(err)
            alert('Failed to add product')
        }
    }

    return (
        <div className='admin-container'>
            <AdminSideMenu/>
            <div className='right-container'  style={{height:"100vh"}}>
                    <form onSubmit={handleSubmit}>
                        <h3>Add Product</h3>
                        <hr />
                    <div className='form-group' >
                        <label className='form-label'>Product id </label>
                        <input className='form-input' name="id" value={form.id} onChange={handleChange} type="number" />
                    </div>
                    <div className='form-group'>
                        <label className='form-label'>Product Name </label>
                        <input className='form-input' name="productName" value={form.productName} onChange={handleChange} type="text" />
                    </div>
                    <div className='form-group'>
                        <label className='form-label'>Category</label>
                        <select name="category" id="category" value={form.category} onChange={handleChange}>
                            <option value="">-- Select category --</option>
                            <option value="Millets">Millets</option>
                            <option value="fruit-bowls">food-bowls</option>
                            <option value="Salads">Salads</option>
                            <option value="oatmeal">OatMeal</option>
                        </select>
                    </div>
                    <div className='form-group'>
                        <label className='form-label'>Price</label>
                        <input className='form-input' name="price" value={form.price} onChange={handleChange} type="number" step="0.01" />
                    </div>
                    <div className='form-group'>
                        <label className='form-label'>Description </label>
                        <input className='form-input' name="description" value={form.description} onChange={handleChange} type="text" />
                    </div>
                    <div className='form-group'>
                        <label className='form-label'>Image URL</label>
                        <input className='form-input' name="imageURL" value={form.imageURL} onChange={handleChange} type="text" />
                    </div>

                    <button className='form-button' type='submit'>Submit</button>
                </form>
            
        </div>

        </div>
    )
}

export default AddProduct