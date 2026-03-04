import React from 'react';
import Banner from '../../assets/Banner.png';
import FruitBowl from '../../assets/fruit_bowl.jpg';
import OatMeal from '../../assets/oatmeal.jpg';
import Millets from '../../assets/millets.png';
import Salads from "../../assets/salad.jpg";
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className="banner">
        <hr/>
        <img src={Banner} alt=""/>
        <hr/>
      </div>
      <div className='home-container'>
        <h1>Categories</h1>
        <div className='container-grid'>
          <Link className='cat-item' to='/food-bowls'>
            <div className="grid-item">
              <img src={FruitBowl} alt="" />
              <h3>Fruit Bowls</h3>
            </div>
          </Link>
          <Link className='cat-item'  to ='/oat-meal'>
            <div className="grid-item">
              <img src={OatMeal} alt="" />
              <h3>Oat Meal</h3>
            </div>
          </Link>
          <Link className='cat-item'  to='/salads'>
            <div className="grid-item">
                  <img src={Salads
                  } alt="" />
              <h3>Salads</h3>
            </div>
          </Link>
          <Link className='cat-item'  to='/millets'>
            <div className="grid-item">
              <img src={Millets} alt="" />
              <h3>Millet Based Meal</h3>
            </div>
          </Link>
        </div>
      </div>
      <div className="why-choose">
        <h1>Why Choose Us</h1>
        <div className='container'>
          <div className="row">
            <div className="col-12 col-lg-6">
              <h4>🌿 Ancient Nutrition</h4>
              <p>Recipes inspired by traditional Indian food practices using millets and whole grains.</p>
            </div>
            <div className="col-12 col-lg-6">
              <h4>🚫 No Refined Oils</h4>
              <p>Zero trans fats, zero deep frying, and no artificial additives.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-6">
              <h4>🥗 Balanced Meals</h4>
              <p>Each bowl is designed for fiber, protein, and sustained energy.</p>
            </div>
            <div className="col-12 col-lg-6">
              <h4>🌍 Sustainably Sourced</h4>
              <p>Locally sourced ingredients supporting farmers and the environment.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
