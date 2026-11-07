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
    {
      id: 16,
      question: "What is 25% of 240?",
      options: ["50", "60", "70", "80"],
      correctAnswer: "60",
      explanation: "25% of 240 = 25/100 × 240 = 60.",
    },
    {
      id: 17,
      question:
        "What is the simple interest on ₹1000 at 5% per annum for 2 years?",
      options: ["₹50", "₹150", "₹100", "₹200"],
      correctAnswer: "₹100",
      explanation: "SI = (P × R × T)/100 = (1000 × 5 × 2)/100 = ₹100.",
    },
    {
      id: 18,
      question: "What is the LCM of 12 and 18?",
      options: ["24", "36", "48", "72"],
      correctAnswer: "36",
      explanation: "12 = 2² × 3 and 18 = 2 × 3². LCM = 2² × 3² = 36.",
    },
    {
      id: 19,
      question: "What is the HCF of 24 and 36?",
      options: ["6", "8", "24", "12"],
      correctAnswer: "12",
      explanation: "24 = 2³ × 3 and 36 = 2² × 3². HCF = 2² × 3 = 12.",
    },
    {
      id: 20,
      question: "What is the average of 10, 20, 30, 40 and 50?",
      options: ["25", "30", "35", "40"],
      correctAnswer: "30",
      explanation: "Sum = 150, and 150 ÷ 5 = 30.",
    },
    {
      id: 21,
      question: "A car travels at 60 km/h for 3 hours. How far does it go?",
      options: ["120 km", "150 km", "210 km", "180 km"],
      correctAnswer: "180 km",
      explanation: "Distance = speed × time = 60 × 3 = 180 km.",
    },
    {
      id: 22,
      question: "The ratio 12 : 18 in its simplest form is?",
      options: ["1 : 2", "3 : 4", "2 : 3", "4 : 5"],
      correctAnswer: "2 : 3",
      explanation:
        "Divide both terms by their HCF, 6: 12 ÷ 6 = 2 and 18 ÷ 6 = 3.",
    },
    {
      id: 23,
      question: "What is 3/4 expressed as a percentage?",
      options: ["65%", "70%", "75%", "80%"],
      correctAnswer: "75%",
      explanation: "3/4 × 100 = 75%.",
    },
    {
      id: 24,
      question:
        "An article bought for ₹200 is sold for ₹250. What is the profit percentage?",
      options: ["20%", "25%", "30%", "50%"],
      correctAnswer: "25%",
      explanation: "Profit = 50. Profit % = (50/200) × 100 = 25%.",
    },
    {
      id: 25,
      question:
        "An item costing ₹500 is sold at a 10% loss. What is the selling price?",
      options: ["₹400", "₹490", "₹450", "₹550"],
      correctAnswer: "₹450",
      explanation: "Loss = 10% of 500 = 50. SP = 500 − 50 = ₹450.",
    },
    {
      id: 26,
      question: "What is the square root of 144?",
      options: ["10", "11", "12", "14"],
      correctAnswer: "12",
      explanation: "12 × 12 = 144, so √144 = 12.",
    },
    {
      id: 27,
      question: "What is the cube of 5?",
      options: ["25", "125", "75", "625"],
      correctAnswer: "125",
      explanation: "5³ = 5 × 5 × 5 = 125.",
    },
    {
      id: 28,
      question: "Simplify: 15 + 6 × 2",
      options: ["42", "36", "27", "21"],
      correctAnswer: "27",
      explanation:
        "By BODMAS, multiply first: 6 × 2 = 12. Then add: 15 + 12 = 27.",
    },
    {
      id: 29,
      question: "What is 2/3 + 1/6?",
      options: ["3/9", "3/6", "1/2", "5/6"],
      correctAnswer: "5/6",
      explanation: "2/3 = 4/6, so 4/6 + 1/6 = 5/6.",
    },
    {
      id: 30,
      question:
        "What is the compound interest on ₹1000 at 10% per annum for 2 years?",
      options: ["₹200", "₹210", "₹220", "₹121"],
      correctAnswer: "₹210",
      explanation: "Amount = 1000 × (1.1)² = 1210. CI = 1210 − 1000 = ₹210.",
    },
    {
      id: 31,
      question:
        "A can finish a job in 10 days and B in 15 days. Working together, how many days will they take?",
      options: ["5 days", "6 days", "8 days", "12.5 days"],
      correctAnswer: "6 days",
      explanation:
        "Together in one day: 1/10 + 1/15 = 5/30 = 1/6 of the work. So they take 6 days.",
    },
    {
      id: 32,
      question: "Which of these numbers is divisible by 9?",
      options: ["731", "742", "729", "755"],
      correctAnswer: "729",
      explanation:
        "A number is divisible by 9 if its digit sum is divisible by 9. For 729: 7 + 2 + 9 = 18, which is divisible by 9.",
    },
    {
      id: 33,
      question:
        "The marked price of a shirt is ₹800. After a 20% discount, what is the price?",
      options: ["₹600", "₹620", "₹640", "₹660"],
      correctAnswer: "₹640",
      explanation: "Discount = 20% of 800 = 160. Price = 800 − 160 = ₹640.",
    },
    {
      id: 34,
      question: "If 5 pens cost ₹60, what is the cost of 8 pens?",
      options: ["₹88", "₹96", "₹100", "₹108"],
      correctAnswer: "₹96",
      explanation: "Cost of 1 pen = 60/5 = ₹12. Cost of 8 pens = 12 × 8 = ₹96.",
    },
    {
      id: 35,
      question: "80 is 40% of which number?",
      options: ["160", "180", "320", "200"],
      correctAnswer: "200",
      explanation: "40/100 × N = 80, so N = 80 × 100/40 = 200.",
    },
    {
      id: 36,
      question:
        "A number increases from 50 to 60. What is the percentage increase?",
      options: ["10%", "15%", "20%", "25%"],
      correctAnswer: "20%",
      explanation: "Increase = 10. Percentage increase = (10/50) × 100 = 20%.",
    },
    {
      id: 37,
      question: "What is the sum of the first 10 natural numbers?",
      options: ["45", "50", "55", "60"],
      correctAnswer: "55",
      explanation: "Sum = n(n + 1)/2 = 10 × 11/2 = 55.",
    },
    {
      id: 38,
      question: "Which of the following is a prime number?",
      options: ["21", "25", "27", "23"],
      correctAnswer: "23",
      explanation:
        "23 has no divisors other than 1 and itself. 21 = 3 × 7, 25 = 5 × 5, and 27 = 3 × 9.",
    },
    {
      id: 39,
      question: "How many metres are there in 2.5 km?",
      options: ["250 m", "25 m", "2500 m", "25000 m"],
      correctAnswer: "2500 m",
      explanation: "1 km = 1000 m, so 2.5 km = 2.5 × 1000 = 2500 m.",
    },
    {
      id: 40,
      question:
        "If ₹100 is divided in the ratio 3 : 2, what is the larger share?",
      options: ["₹40", "₹50", "₹70", "₹60"],
      correctAnswer: "₹60",
      explanation:
        "Total parts = 5. Larger share = 3/5 × 100 = ₹60 (the smaller share is ₹40).",
    },
    {
      id: 41,
      question: "The average of 5 numbers is 20. What is their sum?",
      options: ["25", "80", "120", "100"],
      correctAnswer: "100",
      explanation: "Sum = average × number of values = 20 × 5 = 100.",
    },
    {
      id: 42,
      question: "What is the remainder when 47 is divided by 5?",
      options: ["1", "2", "3", "4"],
      correctAnswer: "2",
      explanation: "47 = 5 × 9 + 2, so the remainder is 2.",
    },
    {
      id: 43,
      question:
        "A 100 m long train crosses a pole in 10 seconds. What is its speed?",
      options: ["5 m/s", "10 m/s", "15 m/s", "20 m/s"],
      correctAnswer: "10 m/s",
      explanation: "Speed = distance/time = 100/10 = 10 m/s.",
    },
    {
      id: 44,
      question:
        "A sum of ₹2000 earns ₹400 as simple interest in 2 years. What is the rate per annum?",
      options: ["5%", "8%", "12%", "10%"],
      correctAnswer: "10%",
      explanation: "R = (SI × 100)/(P × T) = (400 × 100)/(2000 × 2) = 10%.",
    },
    {
      id: 45,
      question: "What is the value of 2³ + 3²?",
      options: ["13", "15", "19", "17"],
      correctAnswer: "17",
      explanation: "2³ = 8 and 3² = 9, so 8 + 9 = 17.",
    },
    {
      id: 46,
      question: "What is 12.5% of 80?",
      options: ["8", "10", "12", "15"],
      correctAnswer: "10",
      explanation: "12.5% = 1/8, and 80 ÷ 8 = 10.",
    },
    {
      id: 47,
      question: "If 3x + 5 = 20, what is x?",
      options: ["3", "4", "6", "5"],
      correctAnswer: "5",
      explanation: "3x = 20 − 5 = 15, so x = 15/3 = 5.",
    },
    {
      id: 48,
      question:
        "A father is 3 times as old as his son. The sum of their ages is 48. How old is the son?",
      options: ["10", "14", "12", "16"],
      correctAnswer: "12",
      explanation:
        "Let the son's age be x. Then x + 3x = 48, so 4x = 48 and x = 12.",
    },
    {
      id: 49,
      question:
        "A town's population of 10,000 increases by 10%. What is the new population?",
      options: ["10,100", "11,000", "11,100", "12,000"],
      correctAnswer: "11,000",
      explanation: "Increase = 10% of 10,000 = 1,000. New population = 11,000.",
    },
    {
      id: 50,
      question: "Find the next number in the series: 2, 6, 12, 20, ?",
      options: ["28", "32", "30", "36"],
      correctAnswer: "30",
      explanation:
        "The differences are 4, 6, 8, so the next difference is 10. 20 + 10 = 30. (The terms are n × (n + 1).)",
    },
  ],
};

export default mathArithmetic001;
