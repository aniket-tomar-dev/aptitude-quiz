const javascript001 = {
  id: "javascript-001",
  title: "JavaScript Fundamentals",
  category: "programming",
  subcategory: "javascript",
  description:
    "Test your JavaScript knowledge covering variables, functions, closures, prototypes, async/await, and ES6+ features.",
  duration: 30,
  totalQuestions: 20,
  totalMarks: 20,
  marksPerQuestion: 1,
  negativeMarking: 0,
  difficulty: "Intermediate",
  questions: [
    {
      id: 1,
      question:
        "Which keyword is used to declare a block-scoped variable in JavaScript?",
      options: ["var", "let", "const", "Both let and const"],
      correctAnswer: "Both let and const",
      explanation:
        "Both 'let' and 'const' are block-scoped. 'var' is function-scoped. 'const' additionally cannot be reassigned.",
    },
    {
      id: 2,
      question: "What does '===' (strict equality) check?",
      options: [
        "Only value",
        "Only type",
        "Both value and type",
        "Neither value nor type",
      ],
      correctAnswer: "Both value and type",
      explanation:
        "=== checks for both value AND type equality without type coercion. == only checks value after type coercion.",
    },
    {
      id: 3,
      question: "What is the output of: console.log(typeof null)?",
      options: ["null", "undefined", "object", "string"],
      correctAnswer: "object",
      explanation:
        "typeof null returns 'object' — this is a well-known JavaScript bug that exists for historical reasons.",
    },
    {
      id: 4,
      question:
        "Which method is used to add an element to the end of an array?",
      options: ["push()", "pop()", "shift()", "unshift()"],
      correctAnswer: "push()",
      explanation:
        "array.push() adds one or more elements to the end of an array and returns the new length.",
    },
    {
      id: 5,
      question: "What is a closure in JavaScript?",
      options: [
        "A way to close the browser",
        "A function with access to its outer scope's variables",
        "A method to end a loop",
        "An ES6 class feature",
      ],
      correctAnswer: "A function with access to its outer scope's variables",
      explanation:
        "A closure is a function that retains access to its lexical scope (outer function's variables) even when executed outside that scope.",
    },
    {
      id: 6,
      question: "What is the result of: 0.1 + 0.2 === 0.3 in JavaScript?",
      options: ["true", "false", "undefined", "NaN"],
      correctAnswer: "false",
      explanation:
        "Due to floating-point precision issues, 0.1 + 0.2 = 0.30000000000000004, not exactly 0.3. So the comparison is false.",
    },
    {
      id: 7,
      question: "Which of the following is NOT a falsy value in JavaScript?",
      options: ["0", "''", "[]", "null"],
      correctAnswer: "[]",
      explanation:
        "An empty array [] is truthy in JavaScript. Falsy values are: false, 0, '', null, undefined, NaN.",
    },
    {
      id: 8,
      question: "What does the 'async' keyword do when used before a function?",
      options: [
        "Makes it synchronous",
        "Makes it return a Promise",
        "Adds a delay",
        "Throws an error",
      ],
      correctAnswer: "Makes it return a Promise",
      explanation:
        "An async function always returns a Promise. If the return value is not a Promise, it's automatically wrapped in one.",
    },
    {
      id: 9,
      question: "What is the purpose of the 'this' keyword in JavaScript?",
      options: [
        "Refers to the global object always",
        "Refers to the current executing context",
        "Refers to the parent function",
        "Refers to the DOM element",
      ],
      correctAnswer: "Refers to the current executing context",
      explanation:
        "'this' refers to the object that is currently executing the code. Its value depends on how the function is called.",
    },
    {
      id: 10,
      question: "What is the spread operator in JavaScript?",
      options: [">>", "...", "**", "::"],
      correctAnswer: "...",
      explanation:
        "The spread operator (...) expands an iterable (like an array) into individual elements.",
    },
    {
      id: 11,
      question:
        "Which method creates a new array with all elements that pass a test?",
      options: ["map()", "filter()", "reduce()", "forEach()"],
      correctAnswer: "filter()",
      explanation:
        "Array.filter() creates a new array with all elements for which the provided callback returns true.",
    },
    {
      id: 12,
      question: "What is 'hoisting' in JavaScript?",
      options: [
        "Moving code to the server",
        "Declarations being moved to the top of their scope",
        "Optimizing loops",
        "Caching functions",
      ],
      correctAnswer: "Declarations being moved to the top of their scope",
      explanation:
        "Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their containing scope before code execution.",
    },
    {
      id: 13,
      question:
        "Which ES6 feature allows you to extract values from arrays/objects into variables?",
      options: ["Spread", "Rest", "Destructuring", "Template literals"],
      correctAnswer: "Destructuring",
      explanation:
        "Destructuring assignment syntax allows unpacking values from arrays or properties from objects into distinct variables.",
    },
    {
      id: 14,
      question: "What does 'NaN' stand for?",
      options: [
        "Not a Number",
        "Null and None",
        "New and Null",
        "None and Negative",
      ],
      correctAnswer: "Not a Number",
      explanation:
        "NaN stands for 'Not a Number'. It is a special value representing an undefined or unrepresentable numerical result.",
    },
    {
      id: 15,
      question: "How do you check if a variable is an array in JavaScript?",
      options: [
        "typeof arr === 'array'",
        "arr instanceof Array",
        "Array.isArray(arr)",
        "arr.isArray()",
      ],
      correctAnswer: "Array.isArray(arr)",
      explanation:
        "Array.isArray() is the most reliable way to check if a value is an array. typeof returns 'object' for arrays.",
    },
    {
      id: 16,
      question: "What is a Promise in JavaScript?",
      options: [
        "A guarantee that code runs in order",
        "An object representing eventual completion or failure of an async operation",
        "A type of callback",
        "A way to declare variables",
      ],
      correctAnswer:
        "An object representing eventual completion or failure of an async operation",
      explanation:
        "A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.",
    },
    {
      id: 17,
      question: "What is the difference between 'null' and 'undefined'?",
      options: [
        "They are identical",
        "null is assigned, undefined means no value assigned",
        "undefined is assigned, null means no value",
        "Both mean a variable is empty",
      ],
      correctAnswer: "null is assigned, undefined means no value assigned",
      explanation:
        "undefined means a variable has been declared but not assigned. null is an intentional assignment indicating 'no value'.",
    },
    {
      id: 18,
      question:
        "Which method transforms each element of an array using a callback and returns a new array?",
      options: ["forEach()", "filter()", "map()", "find()"],
      correctAnswer: "map()",
      explanation:
        "Array.map() creates a new array populated with the results of calling a provided function on every element.",
    },
    {
      id: 19,
      question: "What is event bubbling in JavaScript?",
      options: [
        "Creating new events",
        "Event propagates from child to parent element",
        "Event propagates from parent to child element",
        "Preventing default behavior",
      ],
      correctAnswer: "Event propagates from child to parent element",
      explanation:
        "Event bubbling means that when an event fires on an element, it propagates upward through its parent elements in the DOM tree.",
    },
    {
      id: 20,
      question: "What does the 'use strict' directive do?",
      options: [
        "Enables ES6 features",
        "Disables JavaScript entirely",
        "Enables strict mode to catch common errors",
        "Makes all variables const",
      ],
      correctAnswer: "Enables strict mode to catch common errors",
      explanation:
        "'use strict' enables strict mode, which catches common coding mistakes, prevents unsafe actions, and disables certain JavaScript features.",
    },
  ],
};

export default javascript001;
