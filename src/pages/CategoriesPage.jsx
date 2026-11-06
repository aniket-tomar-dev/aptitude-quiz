import { useMemo, useState } from "react";
import { CATEGORIES } from "../data/categories";
import { getTestsByCategory } from "../data/index";
import CategoryCard from "../components/CategoryCard";
import "./CategoriesPage.css";

const SORT_OPTIONS = [
  { value: "default", label: "Default order" },
  { value: "most", label: "Most tests" },
  { value: "az", label: "A to Z" },
];

// Adjust if your category objects use a different field for the display name.
const getName = (cat) => cat.name ?? cat.title ?? cat.slug ?? "";

function CategoriesPage() {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("default");

  // Count tests once instead of on every render.
  const items = useMemo(
    () =>
      CATEGORIES.map((cat) => ({
        cat,
        testCount: getTestsByCategory(cat.slug).length,
      })),
    [],
  );

  const totalTests = useMemo(
    () => items.reduce((sum, item) => sum + item.testCount, 0),
    [items],
  );

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = q
      ? items.filter(({ cat }) => getName(cat).toLowerCase().includes(q))
      : items;

    if (sort === "most") {
      list = [...list].sort((a, b) => b.testCount - a.testCount);
    } else if (sort === "az") {
      list = [...list].sort((a, b) =>
        getName(a.cat).localeCompare(getName(b.cat)),
      );
    }
    return list;
  }, [items, query, sort]);

  const isFiltering = query.trim() !== "";

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">All Categories</h1>
        <p className="page-subtitle">
          Choose a subject to explore its topics and available tests.
        </p>
        <p className="cp-summary">
          {CATEGORIES.length} categories with {totalTests} test
          {totalTests !== 1 ? "s" : ""} in total
        </p>
      </div>

      <div className="cp-toolbar">
        <div className="cp-search">
          <label htmlFor="cp-search-input" className="cp-visually-hidden">
            Search categories
          </label>
          <input
            id="cp-search-input"
            type="search"
            className="cp-search-input"
            placeholder="Search categories"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoComplete="off"
          />
        </div>

        <div className="cp-sort">
          <label htmlFor="cp-sort-select" className="cp-sort-label">
            Sort by
          </label>
          <select
            id="cp-sort-select"
            className="cp-sort-select"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <p className="cp-result-count" aria-live="polite">
        {isFiltering
          ? `${visible.length} of ${items.length} categories match “${query.trim()}”`
          : `Showing ${visible.length} categories`}
      </p>

      {visible.length > 0 ? (
        <div className="categories-grid">
          {visible.map(({ cat, testCount }) => (
            <div key={cat.id} className="cp-card-wrap">
              <CategoryCard category={cat} />
              <span
                className={`cat-test-count${testCount === 0 ? " is-empty" : ""}`}
              >
                {testCount === 0
                  ? "Coming soon"
                  : `${testCount} test${testCount !== 1 ? "s" : ""}`}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <div className="cp-empty">
          <h2 className="cp-empty-title">No categories found</h2>
          <p className="cp-empty-text">
            Nothing matches “{query.trim()}”. Check the spelling or try a
            shorter word.
          </p>
          <button
            type="button"
            className="cp-empty-btn"
            onClick={() => setQuery("")}
          >
            Clear search
          </button>
        </div>
      )}
    </div>
  );
}

export default CategoriesPage;
