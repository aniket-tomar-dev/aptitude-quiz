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
  ],
};

export default mathAlgebra001;
