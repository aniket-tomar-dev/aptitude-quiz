import React from "react";
import { Link } from "react-router-dom";

function CategoryCard({ category }) {
  return (
    <Link to={`/category/${category.slug}`} className="category-card" style={{ "--cat-gradient": category.gradient, "--cat-color": category.color }}>
      <div className="cat-card-icon">{category.icon}</div>
      <div className="cat-card-body">
        <h3 className="cat-card-title">{category.title}</h3>
        <p className="cat-card-desc">{category.description}</p>
        <div className="cat-card-footer">
          <span className="cat-badge">{category.subcategories.length} topics</span>
          <span className="cat-arrow">→</span>
        </div>
      </div>
    </Link>
  );
}

export default CategoryCard;
