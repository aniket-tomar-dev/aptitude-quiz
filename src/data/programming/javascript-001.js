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
      question: "What does `typeof null` return in JavaScript?",
      options: ["null", "undefined", "object", "number"],
      correctAnswer: "object",
      explanation:
        "`typeof null` returns 'object'. This is a long-standing bug in JavaScript that has been kept for backward compatibility.",
    },
    {
      id: 14,
      question: "What is the difference between `==` and `===`?",
      options: [
        "`==` compares type and value, `===` compares only value",
        "`===` compares type and value, `==` allows type coercion",
        "There is no difference",
        "`===` is used only for strings",
      ],
      correctAnswer: "`===` compares type and value, `==` allows type coercion",
      explanation:
        "`===` is strict equality (no type conversion), while `==` converts types before comparing, e.g. `5 == '5'` is true but `5 === '5'` is false.",
    },
    {
      id: 15,
      question: "What is a closure in JavaScript?",
      options: [
        "A function that has access to its outer scope's variables even after the outer function has returned",
        "A way to close the browser window",
        "A function with no parameters",
        "A method to end a loop",
      ],
      correctAnswer:
        "A function that has access to its outer scope's variables even after the outer function has returned",
      explanation:
        "A closure is created when a function remembers the variables from the scope in which it was defined, even when executed outside that scope.",
    },
    {
      id: 16,
      question:
        "Which keyword declares a block-scoped variable that can be reassigned?",
      options: ["var", "let", "const", "static"],
      correctAnswer: "let",
      explanation:
        "`let` is block-scoped and can be reassigned. `const` is block-scoped but cannot be reassigned, and `var` is function-scoped.",
    },
    {
      id: 17,
      question: "What does `NaN === NaN` return?",
      options: ["true", "false", "undefined", "TypeError"],
      correctAnswer: "false",
      explanation:
        "NaN is the only value in JavaScript that is not equal to itself. Use `Number.isNaN()` to check for NaN.",
    },
    {
      id: 18,
      question:
        "Which array method creates a new array by transforming every element?",
      options: ["forEach()", "filter()", "map()", "reduce()"],
      correctAnswer: "map()",
      explanation:
        "`map()` returns a new array containing the results of calling a function on every element of the original array.",
    },
    {
      id: 19,
      question: "What is a Promise in JavaScript?",
      options: [
        "A guaranteed function return value",
        "An object representing the eventual completion or failure of an asynchronous operation",
        "A type of loop",
        "A built-in database",
      ],
      correctAnswer:
        "An object representing the eventual completion or failure of an asynchronous operation",
      explanation:
        "A Promise can be in one of three states: pending, fulfilled, or rejected, and is used to handle asynchronous code.",
    },
    {
      id: 20,
      question: "What does the `await` keyword do?",
      options: [
        "Blocks the entire program",
        "Pauses execution of an async function until the Promise settles",
        "Creates a new thread",
        "Cancels a Promise",
      ],
      correctAnswer:
        "Pauses execution of an async function until the Promise settles",
      explanation:
        "`await` can only be used inside async functions. It pauses that function (not the whole program) until the Promise resolves or rejects.",
    },
    {
      id: 21,
      question: "How does `this` behave in an arrow function?",
      options: [
        "It always refers to the global object",
        "It refers to the arrow function itself",
        "It is inherited from the surrounding (lexical) scope",
        "It is always undefined",
      ],
      correctAnswer: "It is inherited from the surrounding (lexical) scope",
      explanation:
        "Arrow functions do not have their own `this`; they use the `this` value of the enclosing scope where they were defined.",
    },
    {
      id: 22,
      question: "What is event bubbling?",
      options: [
        "An event moving from the target element up to its ancestors",
        "An event moving from the root down to the target",
        "Creating custom events",
        "Preventing default browser behavior",
      ],
      correctAnswer:
        "An event moving from the target element up to its ancestors",
      explanation:
        "In bubbling, an event fires on the target element first and then propagates upward through its parent elements.",
    },
    {
      id: 23,
      question: "What does `JSON.stringify()` do?",
      options: [
        "Converts a JSON string into an object",
        "Converts a JavaScript value into a JSON string",
        "Validates JSON syntax",
        "Sends JSON to a server",
      ],
      correctAnswer: "Converts a JavaScript value into a JSON string",
      explanation:
        "`JSON.stringify()` serializes an object or value into a JSON string, while `JSON.parse()` does the reverse.",
    },
    {
      id: 24,
      question: "What does the spread operator (`...`) do?",
      options: [
        "Expands an iterable into individual elements",
        "Deletes elements from an array",
        "Multiplies array values",
        "Declares a constant",
      ],
      correctAnswer: "Expands an iterable into individual elements",
      explanation:
        "The spread operator expands arrays, strings, or objects, e.g. `[...arr1, ...arr2]` merges two arrays.",
    },
    {
      id: 25,
      question:
        "Can you modify the properties of an object declared with `const`?",
      options: [
        "No, const objects are completely immutable",
        "Yes, only the variable binding cannot be reassigned",
        "Only if the object is empty",
        "Only inside functions",
      ],
      correctAnswer: "Yes, only the variable binding cannot be reassigned",
      explanation:
        "`const` prevents reassigning the variable, but the contents of an object or array it references can still be changed.",
    },
    {
      id: 26,
      question: "What does `setTimeout()` do?",
      options: [
        "Runs a function repeatedly at intervals",
        "Runs a function once after a specified delay",
        "Pauses the whole program",
        "Measures execution time",
      ],
      correctAnswer: "Runs a function once after a specified delay",
      explanation:
        "`setTimeout()` schedules a callback to run once after the given delay in milliseconds. `setInterval()` repeats it.",
    },
    {
      id: 27,
      question: "Which method checks whether a value is an array?",
      options: ["typeof", "Array.isArray()", "instanceof Object", "isArray()"],
      correctAnswer: "Array.isArray()",
      explanation:
        "`typeof []` returns 'object', so `Array.isArray()` is the reliable way to check for arrays.",
    },
    {
      id: 28,
      question:
        "Which method removes the last element of an array and returns it?",
      options: ["shift()", "pop()", "splice()", "slice()"],
      correctAnswer: "pop()",
      explanation:
        "`pop()` removes and returns the last element. `shift()` does the same for the first element.",
    },
    {
      id: 29,
      question: "What are default parameters?",
      options: [
        "Parameters that cannot be changed",
        "Parameters that get a fallback value if no argument (or undefined) is passed",
        "Parameters passed by reference",
        "Parameters that are always required",
      ],
      correctAnswer:
        "Parameters that get a fallback value if no argument (or undefined) is passed",
      explanation:
        "Example: `function greet(name = 'Guest') {}` uses 'Guest' when `name` is not provided.",
    },
    {
      id: 30,
      question: "What is destructuring in JavaScript?",
      options: [
        "Deleting an object from memory",
        "Extracting values from arrays or properties from objects into variables",
        "Breaking a function into smaller functions",
        "Removing duplicate values",
      ],
      correctAnswer:
        "Extracting values from arrays or properties from objects into variables",
      explanation:
        "Example: `const { name, age } = user;` or `const [a, b] = arr;`.",
    },
    {
      id: 31,
      question: "What is a callback function?",
      options: [
        "A function that calls itself",
        "A function passed as an argument to another function to be executed later",
        "A function that returns another function",
        "A function that has no name",
      ],
      correctAnswer:
        "A function passed as an argument to another function to be executed later",
      explanation:
        "Callbacks are commonly used in asynchronous operations such as event handlers and timers.",
    },
    {
      id: 32,
      question: "What does the event loop do in JavaScript?",
      options: [
        "Repeats a for loop",
        "Handles asynchronous callbacks by moving them from the queue to the call stack when it is empty",
        "Compiles JavaScript to machine code",
        "Listens only for click events",
      ],
      correctAnswer:
        "Handles asynchronous callbacks by moving them from the queue to the call stack when it is empty",
      explanation:
        "The event loop lets single-threaded JavaScript handle async operations without blocking.",
    },
    {
      id: 33,
      question: "Which syntax is used for template literals?",
      options: [
        "Single quotes ''",
        'Double quotes ""',
        "Backticks ``",
        "Parentheses ()",
      ],
      correctAnswer: "Backticks ``",
      explanation:
        "Template literals use backticks and support interpolation like `Hello ${name}` and multi-line strings.",
    },
    {
      id: 34,
      question: "What is the difference between `null` and `undefined`?",
      options: [
        "They are exactly the same",
        "`undefined` means a variable has no value assigned; `null` is an intentional empty value",
        "`null` means a variable is not declared",
        "`undefined` is used only for objects",
      ],
      correctAnswer:
        "`undefined` means a variable has no value assigned; `null` is an intentional empty value",
      explanation:
        "A declared but unassigned variable is `undefined`, while `null` is explicitly assigned to represent 'no value'.",
    },
    {
      id: 35,
      question: "What is true about `localStorage`?",
      options: [
        "Data is cleared when the tab is closed",
        "Data persists even after the browser is closed",
        "Data is sent to the server automatically",
        "It can store objects directly without conversion",
      ],
      correctAnswer: "Data persists even after the browser is closed",
      explanation:
        "`localStorage` stores string key-value pairs with no expiry. `sessionStorage` clears when the tab is closed.",
    },
    {
      id: 36,
      question: "What does `Array.prototype.reduce()` do?",
      options: [
        "Removes elements from an array",
        "Reduces the array size by half",
        "Applies a function to accumulate array elements into a single value",
        "Sorts the array",
      ],
      correctAnswer:
        "Applies a function to accumulate array elements into a single value",
      explanation:
        "Example: `[1,2,3].reduce((sum, n) => sum + n, 0)` returns 6.",
    },
    {
      id: 37,
      question: "What is an IIFE?",
      options: [
        "A function that runs immediately after it is defined",
        "A function that is imported from another file",
        "An inherited function",
        "An infinite loop function",
      ],
      correctAnswer: "A function that runs immediately after it is defined",
      explanation:
        "IIFE stands for Immediately Invoked Function Expression, e.g. `(function() { ... })();`.",
    },
    {
      id: 38,
      question: "What is the prototype in JavaScript?",
      options: [
        "A template for creating HTML elements",
        "A mechanism by which objects inherit properties and methods from other objects",
        "A type of function",
        "A debugging tool",
      ],
      correctAnswer:
        "A mechanism by which objects inherit properties and methods from other objects",
      explanation:
        "Every object has an internal link to a prototype object, forming the prototype chain used for inheritance.",
    },
    {
      id: 39,
      question: "What does the `bind()` method do?",
      options: [
        "Joins two arrays",
        "Creates a new function with a fixed `this` value",
        "Attaches an event listener",
        "Merges two objects",
      ],
      correctAnswer: "Creates a new function with a fixed `this` value",
      explanation:
        "`bind()` returns a new function whose `this` is permanently set to the provided value (and optionally preset arguments).",
    },
    {
      id: 40,
      question: "Which of the following values is falsy in JavaScript?",
      options: ["'0'", "[]", "{}", "0"],
      correctAnswer: "0",
      explanation:
        "Falsy values are false, 0, '', null, undefined, and NaN. The string '0', empty array, and empty object are truthy.",
    },
    {
      id: 41,
      question: "What does 'use strict' do?",
      options: [
        "Makes code run faster",
        "Enables a stricter parsing and error-handling mode",
        "Disables all warnings",
        "Forces use of semicolons",
      ],
      correctAnswer: "Enables a stricter parsing and error-handling mode",
      explanation:
        "Strict mode catches common mistakes, such as using undeclared variables, by throwing errors.",
    },
    {
      id: 42,
      question: "What does `Object.freeze()` do?",
      options: [
        "Deletes an object",
        "Prevents adding, removing, or changing properties of an object",
        "Makes an object private",
        "Copies an object",
      ],
      correctAnswer:
        "Prevents adding, removing, or changing properties of an object",
      explanation:
        "A frozen object cannot be modified. Note that it is shallow, so nested objects can still be changed.",
    },
    {
      id: 43,
      question:
        "Which ES6 feature allows you to extract values from arrays/objects into variables?",
      options: ["Spread", "Rest", "Destructuring", "Template literals"],
      correctAnswer: "Destructuring",
      explanation:
        "Destructuring assignment syntax allows unpacking values from arrays or properties from objects into distinct variables.",
    },
    {
      id: 44,
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
      id: 45,
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
      id: 46,
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
      id: 47,
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
      id: 48,
      question:
        "Which method transforms each element of an array using a callback and returns a new array?",
      options: ["forEach()", "filter()", "map()", "find()"],
      correctAnswer: "map()",
      explanation:
        "Array.map() creates a new array populated with the results of calling a provided function on every element.",
    },
    {
      id: 49,
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
      id: 50,
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
