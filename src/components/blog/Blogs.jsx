import React from 'react';
import './Blogs.css';

const blogPosts = [
  {
    title: 'The Power of Millets: Ancient Grains for Modern Health',
    date: 'February 2026',
    author: 'Mitahara Team',
    content: `Millets are making a comeback! These ancient grains are packed with fiber, protein, and essential minerals. At Mitahara, we use millets in our bowls and salads to provide a gluten-free, nutrient-rich alternative to regular grains. Discover how millets can help with digestion, weight management, and overall wellness.`
  },
  {
    title: 'Mindful Eating: Tips for a Healthier Lifestyle',
    date: 'January 2026',
    author: 'Mitahara Team',
    content: `Mindful eating is about being present with your food. Slow down, savor each bite, and listen to your body’s hunger cues. Our menu is designed to help you make conscious choices, whether you’re enjoying a hearty bowl or a refreshing juice. Start your mindful eating journey with Mitahara today!`
  },
  {
    title: 'Why Fresh Ingredients Matter',
    date: 'December 2025',
    author: 'Mitahara Team',
    content: `We believe that great taste starts with great ingredients. That’s why we source our produce locally and use only the freshest items in every dish. Fresh ingredients not only enhance flavor but also boost the nutritional value of your meals. Taste the difference at Mitahara!`
  }
];

const Blogs = () => {
  return (
    <div className="blogs-container">
      <div className="blogs-header">
        <h1>Our Blogs</h1>
        <p>Explore tips, stories, and insights on healthy eating, millets, and mindful living from the Mitahara team.</p>
      </div>
      <div className="blog-list">
        {blogPosts.map((blog, idx) => (
          <div className="blog-card" key={idx}>
            <div className="blog-title">{blog.title}</div>
            <div className="blog-meta">{blog.date} | {blog.author}</div>
            <div className="blog-content">{blog.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
