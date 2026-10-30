const mathArithmetic001 = {
  id: "math-arithmetic-001",
  title: "Arithmetic Basics",
  category: "mathematics",
  subcategory: "arithmetic",
  description:
    "Test your skills in basic arithmetic: percentages, ratios, averages, profit/loss, and number operations.",
  duration: 20,
  totalQuestions: 15,
  totalMarks: 15,
  marksPerQuestion: 1,
  negativeMarking: 0,
  difficulty: "Beginner",
  questions: [
    {
      id: 1,
      question: "What is 25% of 200?",
      options: ["40", "45", "50", "55"],
      correctAnswer: "50",
      explanation: "25% of 200 = (25/100) × 200 = 50.",
    },
    {
      id: 2,
      question:
        "The ratio of boys to girls in a class is 3:2. If there are 30 students, how many are boys?",
      options: ["12", "15", "18", "20"],
      correctAnswer: "18",
      explanation: "Boys = 3/(3+2) × 30 = 3/5 × 30 = 18.",
    },
    {
      id: 3,
      question: "The average of 4, 8, 12, 16 is?",
      options: ["9", "10", "11", "12"],
      correctAnswer: "10",
      explanation: "Average = (4+8+12+16)/4 = 40/4 = 10.",
    },
    {
      id: 4,
      question:
        "A book costs ₹80 and is sold for ₹100. What is the profit percentage?",
      options: ["20%", "25%", "30%", "15%"],
      correctAnswer: "25%",
      explanation: "Profit = 20. Profit% = (20/80)×100 = 25%.",
    },
    {
      id: 5,
      question: "What is 1000 ÷ 25?",
      options: ["20", "25", "40", "50"],
      correctAnswer: "40",
      explanation: "1000 ÷ 25 = 40.",
    },
    {
      id: 6,
      question: "Find the missing number: 6, 11, 16, 21, ?",
      options: ["24", "25", "26", "27"],
      correctAnswer: "26",
      explanation:
        "Each term increases by 5: 6+5=11, 11+5=16, 16+5=21, 21+5=26.",
    },
    {
      id: 7,
      question: "What is 5! (5 factorial)?",
      options: ["60", "100", "120", "150"],
      correctAnswer: "120",
      explanation: "5! = 5 × 4 × 3 × 2 × 1 = 120.",
    },
    {
      id: 8,
      question:
        "A man earns ₹5000 per month. He saves 20%. How much does he save annually?",
      options: ["₹10,000", "₹12,000", "₹14,000", "₹15,000"],
      correctAnswer: "₹12,000",
      explanation:
        "Monthly savings = 5000 × 20% = ₹1000. Annual = 1000 × 12 = ₹12,000.",
    },
    {
      id: 9,
      question: "What is the square of 13?",
      options: ["156", "169", "176", "184"],
      correctAnswer: "169",
      explanation: "13² = 13 × 13 = 169.",
    },
    {
      id: 10,
      question: "If 3/4 of a number is 27, what is the number?",
      options: ["32", "34", "36", "40"],
      correctAnswer: "36",
      explanation: "Number = 27 × (4/3) = 36.",
    },
    {
      id: 11,
      question: "What is the GCD of 24 and 36?",
      options: ["6", "9", "12", "18"],
      correctAnswer: "12",
      explanation: "24 = 2³×3, 36 = 2²×3². GCD = 2²×3 = 12.",
    },
    {
      id: 12,
      question:
        "A watch is sold at ₹450 at a loss of 10%. What was the cost price?",
      options: ["₹480", "₹490", "₹500", "₹510"],
      correctAnswer: "₹500",
      explanation: "SP = CP × (1 − 0.10). 450 = CP × 0.90. CP = 500.",
    },
    {
      id: 13,
      question: "How many prime numbers are there between 1 and 20?",
      options: ["6", "7", "8", "9"],
      correctAnswer: "8",
      explanation: "Prime numbers: 2, 3, 5, 7, 11, 13, 17, 19 — that's 8.",
    },
    {
      id: 14,
      question: "What is 12 × 15?",
      options: ["160", "170", "180", "190"],
      correctAnswer: "180",
      explanation: "12 × 15 = 180.",
    },
    {
      id: 15,
      question: "If x% of 50 = 10, then x = ?",
      options: ["10", "15", "20", "25"],
      correctAnswer: "20",
      explanation: "x/100 × 50 = 10 → x = 1000/50 = 20.",
    },
  ],
};

export default mathArithmetic001;
