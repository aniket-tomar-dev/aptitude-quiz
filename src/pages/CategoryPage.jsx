import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { getCategoryBySlug } from "../data/categories";
import { getTestsByCategory, getTestsBySubcategory } from "../data/index";
import TestCard from "../components/TestCard";

function CategoryPage() {
  const { categorySlug } = useParams();
  const category = getCategoryBySlug(categorySlug);

  if (!category) return <Navigate to="/categories" replace />;

  const allTests = getTestsByCategory(categorySlug);

  return (
    <div className="page-container">
      <div className="category-hero" style={{ background: category.gradient }}>
        <div className="category-hero-icon">{category.icon}</div>
        <div>
          <h1 className="category-hero-title">{category.title}</h1>
          <p className="category-hero-desc">{category.description}</p>
        </div>
      </div>

      {category.subcategories.map((sub) => {
        const tests = getTestsBySubcategory(categorySlug, sub.slug);
        if (tests.length === 0) return null;
        return (
          <section key={sub.id} className="section">
            <div className="section-header">
              <h2 className="section-title">
                {sub.icon} {sub.title}
              </h2>
              <span className="section-count">
                {tests.length} test{tests.length !== 1 ? "s" : ""}
              </span>
            </div>
            <div className="tests-grid">
              {tests.map((test) => (
                <TestCard
                  key={test.id}
                  test={test}
                  categoryColor={category.color}
                />
              ))}
            </div>
          </section>
        );
      })}

      {allTests.length === 0 && (
        <div className="empty-state">
          <span className="empty-icon">🚧</span>
          <h3>Tests Coming Soon</h3>
          <p>
            We're preparing exciting tests for {category.title}. Check back
            soon!
          </p>
          <Link to="/dashboard" className="btn-primary">
            ← Back to Dashboard
          </Link>
        </div>
      )}

      {category.subcategories.filter(
        (sub) => getTestsBySubcategory(categorySlug, sub.slug).length === 0,
      ).length > 0 && (
        <section className="section">
          <h2 className="section-title">More Topics (Coming Soon)</h2>
          <div className="sub-chips">
            {category.subcategories
              .filter(
                (sub) =>
                  getTestsBySubcategory(categorySlug, sub.slug).length === 0,
              )
              .map((sub) => (
                <div key={sub.id} className="sub-chip">
                  {sub.icon} {sub.title}
                </div>
              ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default CategoryPage;
