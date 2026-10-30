export const CATEGORIES = [
  {
    id: "aptitude",
    slug: "aptitude",
    title: "Aptitude",
    description:
      "Sharpen your analytical and reasoning skills with quantitative, logical, and verbal challenges.",
    icon: "🧠",
    color: "#6C63FF",
    gradient: "linear-gradient(135deg, #6C63FF, #4834D4)",
    subcategories: [
      {
        id: "quantitative-aptitude",
        slug: "quantitative-aptitude",
        title: "Quantitative Aptitude",
        icon: "🔢",
      },
      {
        id: "logical-reasoning",
        slug: "logical-reasoning",
        title: "Logical Reasoning",
        icon: "🔗",
      },
      {
        id: "verbal-ability",
        slug: "verbal-ability",
        title: "Verbal Ability",
        icon: "📖",
      },
      {
        id: "data-interpretation",
        slug: "data-interpretation",
        title: "Data Interpretation",
        icon: "📊",
      },
    ],
  },
  {
    id: "mathematics",
    slug: "mathematics",
    title: "Mathematics",
    description:
      "Master core mathematical concepts from arithmetic to advanced statistics and probability.",
    icon: "📐",
    color: "#F7971E",
    gradient: "linear-gradient(135deg, #F7971E, #FFD200)",
    subcategories: [
      { id: "arithmetic", slug: "arithmetic", title: "Arithmetic", icon: "➕" },
      { id: "algebra", slug: "algebra", title: "Algebra", icon: "✖️" },
      { id: "geometry", slug: "geometry", title: "Geometry", icon: "📐" },
      {
        id: "trigonometry",
        slug: "trigonometry",
        title: "Trigonometry",
        icon: "📏",
      },
      {
        id: "number-system",
        slug: "number-system",
        title: "Number System",
        icon: "🔢",
      },
      {
        id: "probability",
        slug: "probability",
        title: "Probability",
        icon: "🎲",
      },
      { id: "statistics", slug: "statistics", title: "Statistics", icon: "📈" },
    ],
  },
  {
    id: "programming",
    slug: "programming",
    title: "Programming",
    description:
      "Test your coding knowledge across JavaScript, React, Python, SQL and more.",
    icon: "💻",
    color: "#11998E",
    gradient: "linear-gradient(135deg, #11998E, #38EF7D)",
    subcategories: [
      { id: "javascript", slug: "javascript", title: "JavaScript", icon: "🟨" },
      { id: "react", slug: "react", title: "React", icon: "⚛️" },
      { id: "nodejs", slug: "nodejs", title: "Node.js", icon: "🟩" },
      { id: "python", slug: "python", title: "Python", icon: "🐍" },
      { id: "sql", slug: "sql", title: "SQL", icon: "🗄️" },
      {
        id: "dsa",
        slug: "dsa",
        title: "Data Structures & Algorithms",
        icon: "🌲",
      },
    ],
  },
  {
    id: "general-knowledge",
    slug: "general-knowledge",
    title: "General Knowledge",
    description:
      "Broaden your horizons with history, geography, science and current affairs.",
    icon: "🌍",
    color: "#E96C4C",
    gradient: "linear-gradient(135deg, #E96C4C, #FFD166)",
    subcategories: [
      { id: "history", slug: "history", title: "History", icon: "🏛️" },
      { id: "geography", slug: "geography", title: "Geography", icon: "🗺️" },
      { id: "science", slug: "science", title: "Science", icon: "🔬" },
      {
        id: "current-affairs",
        slug: "current-affairs",
        title: "Current Affairs",
        icon: "📰",
      },
    ],
  },
  {
    id: "english",
    slug: "english",
    title: "English",
    description:
      "Strengthen your English grammar, vocabulary, and reading comprehension skills.",
    icon: "📝",
    color: "#A855F7",
    gradient: "linear-gradient(135deg, #A855F7, #6366F1)",
    subcategories: [
      { id: "grammar", slug: "grammar", title: "Grammar", icon: "📋" },
      { id: "vocabulary", slug: "vocabulary", title: "Vocabulary", icon: "📚" },
      {
        id: "reading-comprehension",
        slug: "reading-comprehension",
        title: "Reading Comprehension",
        icon: "📖",
      },
    ],
  },
];

export function getCategoryBySlug(slug) {
  return CATEGORIES.find((c) => c.slug === slug) || null;
}

export function getSubcategoryBySlug(catSlug, subSlug) {
  const cat = getCategoryBySlug(catSlug);
  if (!cat) return null;
  return cat.subcategories.find((s) => s.slug === subSlug) || null;
}
