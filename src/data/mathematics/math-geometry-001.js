const mathGeometry001 = {
  id: "math-geometry-001",
  title: "Geometry Essentials",
  category: "mathematics",
  subcategory: "geometry",
  description:
    "Test your understanding of shapes, angles, triangles, circles, and coordinate geometry.",
  duration: 25,
  totalQuestions: 20,
  totalMarks: 20,
  marksPerQuestion: 1,
  negativeMarking: 0,
  difficulty: "Intermediate",
  questions: [
    {
      id: 1,
      question: "What is the sum of interior angles of a triangle?",
      options: ["90°", "180°", "270°", "360°"],
      correctAnswer: "180°",
      explanation:
        "The sum of the three interior angles of any triangle is always 180°.",
    },
    {
      id: 2,
      question: "What is the area of a circle with radius 7 cm? (π = 22/7)",
      options: ["44 sq cm", "154 sq cm", "176 sq cm", "308 sq cm"],
      correctAnswer: "154 sq cm",
      explanation:
        "Area = πr² = (22/7) × 7² = (22/7) × 49 = 22 × 7 = 154 sq cm.",
    },
    {
      id: 3,
      question: "A right triangle has legs of 3 and 4. What is the hypotenuse?",
      options: ["5", "6", "7", "8"],
      correctAnswer: "5",
      explanation: "By Pythagoras theorem: √(3² + 4²) = √(9 + 16) = √25 = 5.",
    },
    {
      id: 4,
      question:
        "What is the perimeter of a rectangle with length 12 cm and width 5 cm?",
      options: ["30 cm", "34 cm", "60 cm", "17 cm"],
      correctAnswer: "34 cm",
      explanation: "Perimeter = 2(l + w) = 2(12 + 5) = 2 × 17 = 34 cm.",
    },
    {
      id: 5,
      question: "How many sides does a hexagon have?",
      options: ["5", "6", "7", "8"],
      correctAnswer: "6",
      explanation: "A hexagon is a polygon with exactly 6 sides.",
    },
    {
      id: 6,
      question: "What is the volume of a cube with side 4 cm?",
      options: ["16 cm³", "32 cm³", "48 cm³", "64 cm³"],
      correctAnswer: "64 cm³",
      explanation: "Volume of cube = side³ = 4³ = 64 cm³.",
    },
    {
      id: 7,
      question:
        "The diagonals of a rhombus are 10 cm and 8 cm. What is its area?",
      options: ["20 sq cm", "40 sq cm", "60 sq cm", "80 sq cm"],
      correctAnswer: "40 sq cm",
      explanation: "Area of rhombus = (d₁ × d₂) / 2 = (10 × 8) / 2 = 40 sq cm.",
    },
    {
      id: 8,
      question:
        "What is the circumference of a circle with diameter 14 cm? (π = 22/7)",
      options: ["22 cm", "44 cm", "88 cm", "154 cm"],
      correctAnswer: "44 cm",
      explanation: "Circumference = πd = (22/7) × 14 = 44 cm.",
    },
    {
      id: 9,
      question:
        "An equilateral triangle has a side of 6 cm. What is its perimeter?",
      options: ["12 cm", "18 cm", "24 cm", "36 cm"],
      correctAnswer: "18 cm",
      explanation:
        "Perimeter of equilateral triangle = 3 × side = 3 × 6 = 18 cm.",
    },
    {
      id: 10,
      question:
        "What is the name of the point where all medians of a triangle meet?",
      options: ["Circumcenter", "Incenter", "Centroid", "Orthocenter"],
      correctAnswer: "Centroid",
      explanation:
        "The point of intersection of all three medians of a triangle is called the centroid.",
    },
    {
      id: 11,
      question: "Two angles are supplementary. One is 70°. What is the other?",
      options: ["20°", "110°", "70°", "120°"],
      correctAnswer: "110°",
      explanation:
        "Supplementary angles add up to 180°. Other angle = 180° − 70° = 110°.",
    },
    {
      id: 12,
      question:
        "What is the lateral surface area of a cylinder with radius 7 cm and height 10 cm? (π = 22/7)",
      options: ["220 sq cm", "440 sq cm", "660 sq cm", "880 sq cm"],
      correctAnswer: "440 sq cm",
      explanation: "LSA = 2πrh = 2 × (22/7) × 7 × 10 = 440 sq cm.",
    },
    {
      id: 13,
      question:
        "Which theorem states that the square on the hypotenuse equals the sum of squares on the other two sides?",
      options: [
        "Thales' Theorem",
        "Pythagoras' Theorem",
        "Euclid's Theorem",
        "Apollonius Theorem",
      ],
      correctAnswer: "Pythagoras' Theorem",
      explanation:
        "Pythagoras' Theorem: In a right triangle, c² = a² + b², where c is the hypotenuse.",
    },
    {
      id: 14,
      question:
        "A quadrilateral with all sides equal and all angles equal is called a?",
      options: ["Rhombus", "Rectangle", "Square", "Parallelogram"],
      correctAnswer: "Square",
      explanation:
        "A square has all four sides equal AND all four angles equal (90° each).",
    },
    {
      id: 15,
      question:
        "What is the area of a parallelogram with base 8 cm and height 5 cm?",
      options: ["20 sq cm", "30 sq cm", "40 sq cm", "50 sq cm"],
      correctAnswer: "40 sq cm",
      explanation: "Area of parallelogram = base × height = 8 × 5 = 40 sq cm.",
    },
    {
      id: 16,
      question:
        "If two triangles are congruent by SSS, what does SSS stand for?",
      options: [
        "Same-Shape-Similar",
        "Side-Side-Side",
        "Segment-Segment-Segment",
        "Sum-Side-Square",
      ],
      correctAnswer: "Side-Side-Side",
      explanation:
        "SSS stands for Side-Side-Side: all three corresponding sides of two triangles are equal.",
    },
    {
      id: 17,
      question: "How many degrees is a complete rotation?",
      options: ["90°", "180°", "270°", "360°"],
      correctAnswer: "360°",
      explanation: "A complete rotation around a point is 360°.",
    },
    {
      id: 18,
      question:
        "The distance from the center of a circle to any point on the circle is called the?",
      options: ["Diameter", "Chord", "Radius", "Arc"],
      correctAnswer: "Radius",
      explanation:
        "The radius is the distance from the center to any point on the circumference of the circle.",
    },
    {
      id: 19,
      question: "Find the distance between points A(1, 2) and B(4, 6).",
      options: ["3", "4", "5", "6"],
      correctAnswer: "5",
      explanation: "Distance = √((4−1)² + (6−2)²) = √(9 + 16) = √25 = 5.",
    },
    {
      id: 20,
      question: "What is the interior angle of a regular hexagon?",
      options: ["90°", "108°", "120°", "135°"],
      correctAnswer: "120°",
      explanation:
        "Interior angle = (n−2) × 180° / n = (6−2) × 180° / 6 = 720° / 6 = 120°.",
    },
  ],
};

export default mathGeometry001;
