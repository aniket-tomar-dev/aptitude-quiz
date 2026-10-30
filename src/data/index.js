import aptitude001 from "./aptitude/aptitude-001.js";
import mathAlgebra001 from "./mathematics/math-algebra-001.js";
import mathGeometry001 from "./mathematics/math-geometry-001.js";
import mathArithmetic001 from "./mathematics/math-arithmetic-001.js";
import javascript001 from "./programming/javascript-001.js";
import gkHistory001 from "./general-knowledge/gk-history-001.js";
import englishGrammar001 from "./english/english-grammar-001.js";

export const ALL_TESTS = [
  aptitude001,
  mathAlgebra001,
  mathGeometry001,
  mathArithmetic001,
  javascript001,
  gkHistory001,
  englishGrammar001,
];
export function getTestById(id) {
  return ALL_TESTS.find((t) => t.id === id) || null;
}

export function getTestsByCategory(categorySlug) {
  return ALL_TESTS.filter((t) => t.category === categorySlug);
}

export function getTestsBySubcategory(categorySlug, subcategorySlug) {
  return ALL_TESTS.filter(
    (t) => t.category === categorySlug && t.subcategory === subcategorySlug,
  );
}

export function getTotalTestCount() {
  return ALL_TESTS.length;
}

export function getFeaturedTests(limit = 4) {
  return ALL_TESTS.slice(0, limit);
}
