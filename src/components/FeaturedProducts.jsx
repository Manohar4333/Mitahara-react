import React from 'react'
import { Link } from 'react-router-dom'

const FeaturedProducts = () => {
  const featuredItems = [
    {
      id: 1,
      name: 'Mixed Fruit Bowl',
      price: '$8.99',
      image: 'https://images.unsplash.com/photo-1553530666-ba2a58d1b9a1?w=400&h=400&fit=crop',
      category: 'food-bowls'
    },
    {
      id: 2,
      name: 'Honey Oatmeal',
      price: '$6.99',
      image: 'https://images.unsplash.com/photo-1585152914547-a86dd3d204e6?w=400&h=400&fit=crop',
      category: 'oat-meal'
    },
    {
      id: 3,
      name: 'Garden Fresh Salad',
      price: '$7.49',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop',
      category: 'salads'
    },
    {
      id: 4,
      name: 'Millet Power Bowl',
      price: '$9.99',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop',
      category: 'millets'
    }
  ]

  return (
    <div className='featured-section'>
      <div className='home-container'>
        <h1>Featured Products</h1>
        <div className='featured-grid'>
          {featuredItems.map(item => (
            <div key={item.id} className='featured-card'>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p className='featured-price'>{item.price}</p>
              <Link to={`/${item.category}`}>
                <button className='add-btn'>View More</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FeaturedProducts
