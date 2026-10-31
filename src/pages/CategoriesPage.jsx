import React from "react";
import { CATEGORIES } from "../data/categories";
import { getTestsByCategory } from "../data/index";
import CategoryCard from "../components/CategoryCard";

function CategoriesPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">All Categories</h1>
        <p className="page-subtitle">
          Choose a subject to explore its topics and available tests.
        </p>
      </div>

      <div className="categories-grid">
        {CATEGORIES.map((cat) => {
          const testCount = getTestsByCategory(cat.slug).length;
          return (
            <div key={cat.id} style={{ position: "relative" }}>
              <CategoryCard category={cat} />
              <span className="cat-test-count">{testCount} test{testCount !== 1 ? "s" : ""}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CategoriesPage;
