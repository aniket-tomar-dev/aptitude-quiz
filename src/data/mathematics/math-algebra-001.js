const mathAlgebra001 = {
  id: "math-algebra-001",
  title: "Algebra Fundamentals",
  category: "mathematics",
  subcategory: "algebra",
  description:
    "Test your knowledge of algebraic expressions, equations, factorization, and basic algebraic identities.",
  duration: 30,
  totalQuestions: 20,
  totalMarks: 20,
  marksPerQuestion: 1,
  negativeMarking: 0,
  difficulty: "Beginner",
  questions: [
    {
      id: 1,
      question: "What is the value of x if 2x + 4 = 10?",
      options: ["2", "3", "4", "5"],
      correctAnswer: "3",
      explanation: "2x + 4 = 10 → 2x = 6 → x = 3.",
    },
    {
      id: 2,
      question: "Simplify: (x + 3)(x − 3)",
      options: ["x² − 6", "x² − 9", "x² + 9", "x² + 6"],
      correctAnswer: "x² − 9",
      explanation:
        "Using identity (a+b)(a−b) = a² − b². So (x+3)(x−3) = x² − 9.",
    },
    {
      id: 3,
      question: "If 3x − 7 = 14, find x.",
      options: ["5", "6", "7", "8"],
      correctAnswer: "7",
      explanation: "3x = 14 + 7 = 21 → x = 7.",
    },
    {
      id: 4,
      question:
        "What is the value of the expression 4a − 3b when a = 2 and b = 1?",
      options: ["3", "4", "5", "6"],
      correctAnswer: "5",
      explanation: "4(2) − 3(1) = 8 − 3 = 5.",
    },
    {
      id: 5,
      question: "Factor the expression: x² − 5x + 6",
      options: ["(x−2)(x−3)", "(x+2)(x+3)", "(x−1)(x−6)", "(x−6)(x+1)"],
      correctAnswer: "(x−2)(x−3)",
      explanation:
        "We need two numbers that multiply to 6 and add to −5: −2 and −3. So x²−5x+6 = (x−2)(x−3).",
    },
    {
      id: 6,
      question: "Solve for y: 5y + 10 = 35",
      options: ["3", "4", "5", "6"],
      correctAnswer: "5",
      explanation: "5y = 35 − 10 = 25 → y = 5.",
    },
    {
      id: 7,
      question: "What is (a + b)² expanded?",
      options: ["a² + b²", "a² + 2ab + b²", "a² − 2ab + b²", "2a + 2b"],
      correctAnswer: "a² + 2ab + b²",
      explanation: "(a + b)² = a² + 2ab + b² is a standard algebraic identity.",
    },
    {
      id: 8,
      question: "If x/4 = 7, what is x?",
      options: ["21", "24", "28", "32"],
      correctAnswer: "28",
      explanation: "x = 7 × 4 = 28.",
    },
    {
      id: 9,
      question: "Find the value of x: 3(x − 2) = 2(x + 1)",
      options: ["6", "7", "8", "9"],
      correctAnswer: "8",
      explanation: "3x − 6 = 2x + 2 → x = 8.",
    },
    {
      id: 10,
      question: "Which of the following is a linear equation?",
      options: ["x² + 2 = 0", "2x + 3 = 0", "x³ − 1 = 0", "x² − x = 0"],
      correctAnswer: "2x + 3 = 0",
      explanation:
        "A linear equation has degree 1. Only 2x + 3 = 0 has x to the power of 1.",
    },
    {
      id: 11,
      question: "What is the sum of the roots of x² − 5x + 6 = 0?",
      options: ["3", "5", "6", "−5"],
      correctAnswer: "5",
      explanation: "For ax² + bx + c = 0, sum of roots = −b/a = −(−5)/1 = 5.",
    },
    {
      id: 12,
      question: "Simplify: (2x³)(3x²)",
      options: ["5x⁵", "6x⁵", "6x⁶", "5x⁶"],
      correctAnswer: "6x⁵",
      explanation:
        "Multiply coefficients (2×3=6) and add exponents (3+2=5). Result: 6x⁵.",
    },
    {
      id: 13,
      question:
        "If the product of two numbers is 36 and their sum is 13, what are the numbers?",
      options: ["4 and 9", "6 and 6", "3 and 12", "4 and 9"],
      correctAnswer: "4 and 9",
      explanation: "4 × 9 = 36 and 4 + 9 = 13. Both conditions are satisfied.",
    },
    {
      id: 14,
      question: "What is the value of x² + y² when x = 3 and y = 4?",
      options: ["14", "25", "49", "50"],
      correctAnswer: "25",
      explanation: "x² + y² = 9 + 16 = 25.",
    },
    {
      id: 15,
      question: "Solve: 2x + y = 10, x + y = 7. Find x.",
      options: ["1", "2", "3", "4"],
      correctAnswer: "3",
      explanation:
        "Subtracting second from first: (2x+y) − (x+y) = 10 − 7 → x = 3.",
    },
    {
      id: 16,
      question: "Which expression is equal to (a − b)²?",
      options: ["a² − b²", "a² + 2ab − b²", "a² − 2ab + b²", "a² + b²"],
      correctAnswer: "a² − 2ab + b²",
      explanation: "(a−b)² = a² − 2ab + b² is the standard identity.",
    },
    {
      id: 17,
      question: "If f(x) = 3x + 2, what is f(4)?",
      options: ["10", "12", "14", "16"],
      correctAnswer: "14",
      explanation: "f(4) = 3(4) + 2 = 12 + 2 = 14.",
    },
    {
      id: 18,
      question: "Find the roots of x² − 4 = 0.",
      options: ["±1", "±2", "±3", "±4"],
      correctAnswer: "±2",
      explanation: "x² = 4 → x = ±2.",
    },
    {
      id: 19,
      question: "What is 3x² when x = 2?",
      options: ["10", "12", "14", "16"],
      correctAnswer: "12",
      explanation: "3(2)² = 3 × 4 = 12.",
    },
    {
      id: 20,
      question: "The product of roots of 2x² − 8x + 6 = 0 is?",
      options: ["2", "3", "4", "6"],
      correctAnswer: "3",
      explanation: "For ax² + bx + c = 0, product of roots = c/a = 6/2 = 3.",
    },
    {
      id: 21,
      question: "The sum of roots of 2x² − 8x + 6 = 0 is?",
      options: ["2", "3", "4", "6"],
      correctAnswer: "4",
      explanation: "For ax² + bx + c = 0, sum of roots = −b/a = −(−8)/2 = 4.",
    },
    {
      id: 22,
      question: "The roots of x² − 5x + 6 = 0 are?",
      options: ["1 and 6", "−2 and −3", "−1 and −6", "2 and 3"],
      correctAnswer: "2 and 3",
      explanation:
        "Factorise: x² − 5x + 6 = (x − 2)(x − 3) = 0, so x = 2 or x = 3.",
    },
    {
      id: 23,
      question: "The discriminant of x² + 4x + 4 = 0 is?",
      options: ["0", "4", "8", "16"],
      correctAnswer: "0",
      explanation:
        "D = b² − 4ac = 16 − 4(1)(4) = 0, so the roots are real and equal.",
    },
    {
      id: 24,
      question:
        "If the discriminant of a quadratic equation is negative, the roots are?",
      options: [
        "Real and equal",
        "Real and distinct",
        "Complex (non-real)",
        "Always rational",
      ],
      correctAnswer: "Complex (non-real)",
      explanation:
        "When D < 0, the square root of D is imaginary, so the roots are a pair of complex conjugates.",
    },
    {
      id: 25,
      question: "Which of the following is a quadratic equation?",
      options: ["x + 5 = 0", "x³ − x = 0", "2x − 7 = 0", "x² + 3x + 2 = 0"],
      correctAnswer: "x² + 3x + 2 = 0",
      explanation:
        "A quadratic equation has degree 2, meaning the highest power of x is 2.",
    },
    {
      id: 26,
      question: "The discriminant of 2x² − 4x + 3 = 0 is?",
      options: ["8", "−8", "−16", "40"],
      correctAnswer: "−8",
      explanation: "D = b² − 4ac = (−4)² − 4(2)(3) = 16 − 24 = −8.",
    },
    {
      id: 27,
      question: "The solutions of x² − 9 = 0 are?",
      options: ["3 only", "−3 only", "9 and −9", "3 and −3"],
      correctAnswer: "3 and −3",
      explanation: "x² = 9, so x = ±3. Also, x² − 9 = (x − 3)(x + 3).",
    },
    {
      id: 28,
      question: "If 3 is a root of x² − 7x + k = 0, then k = ?",
      options: ["10", "12", "14", "21"],
      correctAnswer: "12",
      explanation: "Substitute x = 3: 9 − 21 + k = 0, so k = 12.",
    },
    {
      id: 29,
      question: "The sum of roots of x² + 6x + 8 = 0 is?",
      options: ["6", "8", "−8", "−6"],
      correctAnswer: "−6",
      explanation: "Sum of roots = −b/a = −6/1 = −6.",
    },
    {
      id: 30,
      question: "The product of roots of 3x² + 5x − 12 = 0 is?",
      options: ["4", "−12", "−4", "12"],
      correctAnswer: "−4",
      explanation: "Product of roots = c/a = −12/3 = −4.",
    },
    {
      id: 31,
      question: "The quadratic formula for ax² + bx + c = 0 is?",
      options: [
        "x = (−b ± √(b² + 4ac)) / 2a",
        "x = (−b ± √(b² − 4ac)) / 2a",
        "x = (b ± √(b² − 4ac)) / a",
        "x = (−b ± √(b² − 4ac)) / a",
      ],
      correctAnswer: "x = (−b ± √(b² − 4ac)) / 2a",
      explanation:
        "The quadratic formula is x = (−b ± √(b² − 4ac)) / 2a, where b² − 4ac is the discriminant.",
    },
    {
      id: 32,
      question:
        "For which positive value of k does x² + kx + 9 = 0 have equal roots?",
      options: ["3", "6", "9", "12"],
      correctAnswer: "6",
      explanation:
        "Equal roots need D = 0: k² − 4(1)(9) = 0, so k² = 36 and k = 6.",
    },
    {
      id: 33,
      question: "The roots of x² + x − 12 = 0 are?",
      options: ["3 and 4", "−3 and 4", "−4 and 3", "−3 and −4"],
      correctAnswer: "−4 and 3",
      explanation: "x² + x − 12 = (x + 4)(x − 3) = 0, so x = −4 or x = 3.",
    },
    {
      id: 34,
      question: "If α and β are the roots of x² − 5x + 6 = 0, then α² + β² = ?",
      options: ["11", "25", "13", "37"],
      correctAnswer: "13",
      explanation:
        "α + β = 5 and αβ = 6. So α² + β² = (α + β)² − 2αβ = 25 − 12 = 13.",
    },
    {
      id: 35,
      question: "The quadratic equation whose roots are 2 and 3 is?",
      options: [
        "x² + 5x + 6 = 0",
        "x² − 5x + 6 = 0",
        "x² − 6x + 5 = 0",
        "x² + 6x + 5 = 0",
      ],
      correctAnswer: "x² − 5x + 6 = 0",
      explanation:
        "Equation: x² − (sum of roots)x + (product of roots) = x² − 5x + 6 = 0.",
    },
    {
      id: 36,
      question: "The x-coordinate of the vertex of y = x² − 6x + 5 is?",
      options: ["−3", "3", "5", "6"],
      correctAnswer: "3",
      explanation: "The vertex lies at x = −b/2a = 6/2 = 3.",
    },
    {
      id: 37,
      question:
        "What is the maximum number of real roots a quadratic equation can have?",
      options: ["1", "3", "2", "4"],
      correctAnswer: "2",
      explanation:
        "A polynomial of degree n has at most n roots, so a quadratic has at most 2 real roots.",
    },
    {
      id: 38,
      question: "The solutions of 2x² = 18 are?",
      options: ["±9", "±6", "±√18", "±3"],
      correctAnswer: "±3",
      explanation: "Divide by 2: x² = 9, so x = ±3.",
    },
    {
      id: 39,
      question: "The discriminant of x² − 5x + 6 = 0 is?",
      options: ["1", "5", "6", "49"],
      correctAnswer: "1",
      explanation: "D = (−5)² − 4(1)(6) = 25 − 24 = 1.",
    },
    {
      id: 40,
      question: "If the roots of x² − px + q = 0 are 2 and 5, then q = ?",
      options: ["7", "3", "10", "25"],
      correctAnswer: "10",
      explanation: "Product of roots = q = 2 × 5 = 10 (and p = 2 + 5 = 7).",
    },
    {
      id: 41,
      question: "The sum of roots of 5x² − 15x + 2 = 0 is?",
      options: ["−3", "3", "15", "2/5"],
      correctAnswer: "3",
      explanation: "Sum of roots = −b/a = 15/5 = 3.",
    },
    {
      id: 42,
      question: "The roots of x² − 4x + 4 = 0 are?",
      options: ["−2 and −2", "2 and −2", "2 and 2", "4 and 1"],
      correctAnswer: "2 and 2",
      explanation: "x² − 4x + 4 = (x − 2)² = 0, so x = 2 (a repeated root).",
    },
    {
      id: 43,
      question: "The roots of x² − 6x + 5 = 0 are?",
      options: ["−1 and −5", "2 and 3", "1 and 5", "−1 and 5"],
      correctAnswer: "1 and 5",
      explanation: "x² − 6x + 5 = (x − 1)(x − 5) = 0, so x = 1 or x = 5.",
    },
    {
      id: 44,
      question: "The discriminant of 3x² − 2x − 1 = 0 is?",
      options: ["8", "12", "−8", "16"],
      correctAnswer: "16",
      explanation: "D = (−2)² − 4(3)(−1) = 4 + 12 = 16.",
    },
    {
      id: 45,
      question: "In x² − 6x + k = 0, one root is double the other. Find k.",
      options: ["6", "9", "8", "12"],
      correctAnswer: "8",
      explanation:
        "Let the roots be α and 2α. Sum: 3α = 6, so α = 2. Roots are 2 and 4, so k = 2 × 4 = 8.",
    },
    {
      id: 46,
      question: "The solutions of 4x² − 1 = 0 are?",
      options: ["±1/4", "±1/2", "±2", "±4"],
      correctAnswer: "±1/2",
      explanation: "4x² = 1, so x² = 1/4 and x = ±1/2.",
    },
    {
      id: 47,
      question: "The roots of x² − 2x − 15 = 0 are?",
      options: ["5 and −3", "−5 and 3", "3 and 5", "−3 and −5"],
      correctAnswer: "5 and −3",
      explanation: "x² − 2x − 15 = (x − 5)(x + 3) = 0, so x = 5 or x = −3.",
    },
    {
      id: 48,
      question: "The sum of roots of 4x² + 12x + 9 = 0 is?",
      options: ["3", "12", "−12", "−3"],
      correctAnswer: "−3",
      explanation: "Sum of roots = −b/a = −12/4 = −3.",
    },
    {
      id: 49,
      question:
        "To complete the square, x² + 6x + ___ = (x + 3)². What fills the blank?",
      options: ["3", "6", "9", "36"],
      correctAnswer: "9",
      explanation: "Add (b/2)² = (6/2)² = 9, since (x + 3)² = x² + 6x + 9.",
    },
    {
      id: 50,
      question: "How many real roots does x² + 4 = 0 have?",
      options: ["0", "1", "2", "4"],
      correctAnswer: "0",
      explanation:
        "x² = −4 has no real solution, since D = 0 − 16 = −16 < 0. The roots are complex (±2i).",
    },
  ],
};

export default mathAlgebra001;
