import { useEffect, useState } from "react";
import { getProductsByCategory } from "../services/productService";
import ProductCard from "../product/ProductCard";
import '../../App.css';

const CategoryProducts = ({ category }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductsByCategory(category)
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, [category]);

  return (
    <div className="app-container">
      <h2>{category}</h2>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard
            key={product._id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
