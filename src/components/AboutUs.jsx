import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="aboutus-container">
      <section className="aboutus-hero">
        <h1>About Mitahara</h1>
        <p>
          Welcome to <span className="brand">Mitahara</span> – your destination for healthy, delicious, and mindful eating! Our mission is to make nutritious food accessible and enjoyable for everyone. We believe in the power of wholesome ingredients, traditional recipes, and a modern approach to wellness.
        </p>
      </section>
      <section className="aboutus-content">
        <h2>Our Story</h2>
        <p>
          Founded by passionate food lovers, Mitahara was born out of a desire to bring back the goodness of ancient grains, fresh produce, and balanced meals. Our curated menu features a variety of bowls, salads, juices, and millet-based dishes, all crafted to nourish your body and delight your taste buds.
        </p>
        <h2>What Makes Us Special?</h2>
        <ul>
          <li><strong>Wholesome Ingredients:</strong> We use only the freshest, locally sourced ingredients.</li>
          <li><strong>Millet Magic:</strong> Discover the benefits of millets in our innovative recipes.</li>
          <li><strong>Balanced Nutrition:</strong> Every meal is designed for optimal health and taste.</li>
          <li><strong>Community Focus:</strong> We support local farmers and promote sustainable practices.</li>
        </ul>
        <h2>Join Our Journey</h2>
        <p>
          Whether you’re looking to eat healthier, try something new, or simply enjoy a delicious meal, Mitahara is here for you. Explore our menu, read our blogs, and become part of our growing community!
        </p>
      </section>
    </div>
  );
};

export default AboutUs;