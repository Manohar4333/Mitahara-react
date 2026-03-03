import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

const BASE_URL = 'http://localhost:4300/update'

const EditProduct = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const product = location.state && location.state.product

  const [form, setForm] = useState({
    id: '',
    productName: '',
    category: '',
    price: '',
    description: '',
    imageURL: ''
  })

  useEffect(() => {
    if (product) {
      setForm({
        id: product.id ?? '',
        productName: product.productName ?? '',
        category: product.category ?? '',
        price: product.price ?? '',
        description: product.description ?? '',
        imageURL: product.imageURL ?? ''
      })
    }
  }, [product])

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
      await axios.put(`${BASE_URL}/${payload.id}`, payload)
      alert('Product updated successfully')
      navigate('/admin')
    } catch (err) {
      console.error('Failed to update product', err)
      alert('Failed to update product')
    }
  }

  if (!product) {
    return (
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <p>No product selected for editing.</p>
        <button onClick={() => navigate('/admin')}>Back to Admin</button>
      </div>
    )
  }

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit} style={{ display: 'inline-block', textAlign: 'left' }}>
        <div style={{ margin: '8px' }}>
          <label>ID </label>
          <input name="id" value={form.id} onChange={handleChange} type="number" readOnly />
        </div>
        <div style={{ margin: '8px' }}>
          <label>Product Name </label>
          <input name="productName" value={form.productName} onChange={handleChange} type="text" />
        </div>
        <div style={{ margin: '8px' }}>
          <label>Category</label>
          <input name="category" value={form.category} onChange={handleChange} type="text" />
        </div>
        <div style={{ margin: '8px' }}>
          <label>Price</label>
          <input name="price" value={form.price} onChange={handleChange} type="number" step="0.01" />
        </div>
        <div style={{ margin: '8px' }}>
          <label>Description </label>
          <input name="description" value={form.description} onChange={handleChange} type="text" />
        </div>
        <div style={{ margin: '8px' }}>
          <label>Image URL</label>
          <input name="imageURL" value={form.imageURL} onChange={handleChange} type="text" />
        </div>

        <div style={{ marginTop: '12px', textAlign: 'center' }}>
          <button type='submit' style={{ padding: '8px 16px' }}>Update</button>
        </div>
      </form>
    </div>
  )
}

export default EditProduct