const englishGrammar001 = {
  id: "english-grammar-001",
  title: "English Grammar Essentials",
  category: "english",
  subcategory: "grammar",
  description:
    "Test your command of English grammar: tenses, parts of speech, sentence correction, and usage.",
  duration: 20,
  totalQuestions: 15,
  totalMarks: 15,
  marksPerQuestion: 1,
  negativeMarking: 0,
  difficulty: "Beginner",
  questions: [
    {
      id: 1,
      question: "Which of the following is a proper noun?",
      options: ["city", "river", "London", "mountain"],
      correctAnswer: "London",
      explanation:
        "Proper nouns name specific people, places, or things and are always capitalized. 'London' is a specific city.",
    },
    {
      id: 2,
      question: "Choose the correct verb form: She _____ to school every day.",
      options: ["go", "goes", "going", "gone"],
      correctAnswer: "goes",
      explanation:
        "With third-person singular (she/he/it) in present simple tense, the verb takes an -s or -es ending. So 'goes' is correct.",
    },
    {
      id: 3,
      question: "What is the past tense of 'write'?",
      options: ["writed", "written", "wrote", "writes"],
      correctAnswer: "wrote",
      explanation:
        "'Write' is an irregular verb. Its past tense is 'wrote' and its past participle is 'written'.",
    },
    {
      id: 4,
      question: "Which sentence is grammatically correct?",
      options: [
        "He don't know the answer.",
        "He doesn't know the answer.",
        "He not know the answer.",
        "He do not knows the answer.",
      ],
      correctAnswer: "He doesn't know the answer.",
      explanation:
        "With third-person singular subjects (he/she/it), we use 'doesn't' (does not) for negatives in present simple.",
    },
    {
      id: 5,
      question: "What is an adverb?",
      options: [
        "A word that names a person or thing",
        "A word that describes a noun",
        "A word that modifies a verb, adjective, or another adverb",
        "A word that shows a relationship between words",
      ],
      correctAnswer:
        "A word that modifies a verb, adjective, or another adverb",
      explanation:
        "An adverb modifies verbs (run quickly), adjectives (very tall), or other adverbs (extremely fast).",
    },
    {
      id: 6,
      question: "Choose the correct preposition: The book is _____ the table.",
      options: ["in", "on", "at", "by"],
      correctAnswer: "on",
      explanation:
        "'On' is used for surfaces. A book resting on the surface of a table uses 'on'.",
    },
    {
      id: 7,
      question: "Identify the subject in: 'The tall man ran quickly.'",
      options: ["tall", "man", "The tall man", "ran"],
      correctAnswer: "The tall man",
      explanation:
        "The subject is who or what the sentence is about. 'The tall man' is the complete subject.",
    },
    {
      id: 8,
      question: "Which is the correct plural of 'child'?",
      options: ["childs", "childes", "children", "childer"],
      correctAnswer: "children",
      explanation:
        "'Child' is an irregular noun. Its plural is 'children', not formed by simply adding -s.",
    },
    {
      id: 9,
      question: "What type of sentence is: 'Close the door.'",
      options: ["Declarative", "Interrogative", "Imperative", "Exclamatory"],
      correctAnswer: "Imperative",
      explanation:
        "An imperative sentence gives a command or instruction. 'Close the door' is a command, so it's imperative.",
    },
    {
      id: 10,
      question: "Choose the correct form: I have _____ my homework.",
      options: ["did", "do", "done", "does"],
      correctAnswer: "done",
      explanation:
        "'Have' + past participle forms the present perfect tense. The past participle of 'do' is 'done'.",
    },
    {
      id: 11,
      question: "Which sentence is in the passive voice?",
      options: [
        "The dog chased the cat.",
        "The cat was chased by the dog.",
        "She ate the apple.",
        "He runs every morning.",
      ],
      correctAnswer: "The cat was chased by the dog.",
      explanation:
        "In passive voice, the subject receives the action. 'The cat was chased by the dog' — the cat receives the action.",
    },
    {
      id: 12,
      question: "What is a conjunction?",
      options: [
        "A word that names something",
        "A word that joins words or clauses",
        "A word that shows action",
        "A word that expresses emotion",
      ],
      correctAnswer: "A word that joins words or clauses",
      explanation:
        "Conjunctions connect words, phrases, or clauses. Examples: and, but, or, because, although.",
    },
    {
      id: 13,
      question: "Choose the antonym of 'brave':",
      options: ["Courageous", "Bold", "Fearless", "Cowardly"],
      correctAnswer: "Cowardly",
      explanation:
        "An antonym is a word with the opposite meaning. The antonym of 'brave' (courageous) is 'cowardly' (lacking courage).",
    },
    {
      id: 14,
      question:
        "Identify the tense: 'She will have finished her work by 5 PM.'",
      options: [
        "Future simple",
        "Future perfect",
        "Future continuous",
        "Present perfect",
      ],
      correctAnswer: "Future perfect",
      explanation:
        "Future perfect tense uses 'will have + past participle'. It describes an action that will be completed before a specific future time.",
    },
    {
      id: 15,
      question: "Which word is a synonym of 'happy'?",
      options: ["Sad", "Joyful", "Angry", "Confused"],
      correctAnswer: "Joyful",
      explanation:
        "A synonym is a word with a similar meaning. 'Joyful' is a synonym of 'happy'.",
    },
  ],
};

export default englishGrammar001;
