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
    {
      id: 16,
      question: "Which word is a synonym of 'big'?",
      options: ["Tiny", "Narrow", "Large", "Weak"],
      correctAnswer: "Large",
      explanation: "'Large' means the same as 'big'. 'Tiny' is its opposite.",
    },
    {
      id: 17,
      question: "Which word is an antonym of 'hot'?",
      options: ["Warm", "Cold", "Spicy", "Boiling"],
      correctAnswer: "Cold",
      explanation:
        "An antonym is a word with the opposite meaning. 'Cold' is the opposite of 'hot'.",
    },
    {
      id: 18,
      question: "Which word is a synonym of 'quick'?",
      options: ["Rapid", "Slow", "Lazy", "Late"],
      correctAnswer: "Rapid",
      explanation:
        "'Rapid' and 'quick' both describe something that happens or moves fast.",
    },
    {
      id: 19,
      question: "Which word is an antonym of 'brave'?",
      options: ["Bold", "Fearless", "Strong", "Cowardly"],
      correctAnswer: "Cowardly",
      explanation:
        "'Brave' means showing courage, while 'cowardly' means lacking courage.",
    },
    {
      id: 20,
      question: "Which word is a synonym of 'begin'?",
      options: ["Finish", "Stop", "Start", "Delay"],
      correctAnswer: "Start",
      explanation:
        "'Begin' and 'start' both mean to take the first step of an action.",
    },
    {
      id: 21,
      question: "Which word is an antonym of 'ancient'?",
      options: ["Old", "Historic", "Antique", "Modern"],
      correctAnswer: "Modern",
      explanation:
        "'Ancient' means very old, while 'modern' means belonging to the present time.",
    },
    {
      id: 22,
      question: "Which word is a synonym of 'smart'?",
      options: ["Dull", "Rude", "Clever", "Quiet"],
      correctAnswer: "Clever",
      explanation:
        "'Clever' means intelligent and quick to understand, like 'smart'.",
    },
    {
      id: 23,
      question: "Which word is an antonym of 'generous'?",
      options: ["Kind", "Friendly", "Wealthy", "Selfish"],
      correctAnswer: "Selfish",
      explanation:
        "A generous person gives freely, while a selfish person thinks only of themselves.",
    },
    {
      id: 24,
      question: "Which word is a synonym of 'tired'?",
      options: ["Energetic", "Cheerful", "Awake", "Exhausted"],
      correctAnswer: "Exhausted",
      explanation:
        "'Exhausted' means extremely tired, so it is a stronger synonym of 'tired'.",
    },
    {
      id: 25,
      question: "Which word is an antonym of 'victory'?",
      options: ["Triumph", "Defeat", "Success", "Win"],
      correctAnswer: "Defeat",
      explanation: "'Victory' means winning, while 'defeat' means losing.",
    },
    {
      id: 26,
      question: "Which word is a synonym of 'beautiful'?",
      options: ["Ugly", "Plain", "Gorgeous", "Messy"],
      correctAnswer: "Gorgeous",
      explanation: "'Gorgeous' means very attractive or beautiful.",
    },
    {
      id: 27,
      question: "Which word is an antonym of 'increase'?",
      options: ["Expand", "Grow", "Rise", "Decrease"],
      correctAnswer: "Decrease",
      explanation:
        "'Increase' means to become greater, while 'decrease' means to become smaller.",
    },
    {
      id: 28,
      question: "Which word is a synonym of 'difficult'?",
      options: ["Easy", "Hard", "Simple", "Clear"],
      correctAnswer: "Hard",
      explanation:
        "'Hard' and 'difficult' both describe something that takes a lot of effort.",
    },
    {
      id: 29,
      question: "Which word is an antonym of 'transparent'?",
      options: ["Clear", "Thin", "Bright", "Opaque"],
      correctAnswer: "Opaque",
      explanation:
        "'Transparent' means you can see through it, while 'opaque' means you cannot.",
    },
    {
      id: 30,
      question: "Which word is a synonym of 'huge'?",
      options: ["Enormous", "Tiny", "Short", "Average"],
      correctAnswer: "Enormous",
      explanation: "'Enormous' means extremely large, just like 'huge'.",
    },
    {
      id: 31,
      question: "Which word is an antonym of 'arrive'?",
      options: ["Reach", "Enter", "Depart", "Stay"],
      correctAnswer: "Depart",
      explanation:
        "'Arrive' means to reach a place, while 'depart' means to leave it.",
    },
    {
      id: 32,
      question: "Which word is a synonym of 'angry'?",
      options: ["Calm", "Furious", "Pleased", "Sleepy"],
      correctAnswer: "Furious",
      explanation: "'Furious' means extremely angry.",
    },
    {
      id: 33,
      question: "Which word is an antonym of 'rough'?",
      options: ["Coarse", "Bumpy", "Hard", "Smooth"],
      correctAnswer: "Smooth",
      explanation:
        "'Rough' describes an uneven surface, while 'smooth' describes a surface that is even and flat.",
    },
    {
      id: 34,
      question: "Which word is a synonym of 'silent'?",
      options: ["Noisy", "Loud", "Quiet", "Busy"],
      correctAnswer: "Quiet",
      explanation: "'Silent' and 'quiet' both describe an absence of noise.",
    },
    {
      id: 35,
      question: "Which word is an antonym of 'expensive'?",
      options: ["Costly", "Valuable", "Cheap", "Rich"],
      correctAnswer: "Cheap",
      explanation:
        "'Expensive' means high in price, while 'cheap' means low in price.",
    },
    {
      id: 36,
      question: "Which word is a synonym of 'rich'?",
      options: ["Wealthy", "Poor", "Humble", "Needy"],
      correctAnswer: "Wealthy",
      explanation:
        "'Wealthy' means having a lot of money or possessions, like 'rich'.",
    },
    {
      id: 37,
      question: "Which word is an antonym of 'knowledge'?",
      options: ["Wisdom", "Learning", "Truth", "Ignorance"],
      correctAnswer: "Ignorance",
      explanation:
        "'Knowledge' is awareness and understanding, while 'ignorance' is a lack of it.",
    },
    {
      id: 38,
      question: "Which word is a synonym of 'honest'?",
      options: ["Deceitful", "Truthful", "Sly", "Greedy"],
      correctAnswer: "Truthful",
      explanation:
        "'Truthful' means telling the truth, which is what an honest person does.",
    },
    {
      id: 39,
      question: "Which word is an antonym of 'early'?",
      options: ["Soon", "Quick", "Late", "Fast"],
      correctAnswer: "Late",
      explanation:
        "'Early' means before the expected time, while 'late' means after it.",
    },
    {
      id: 40,
      question: "Which word is a synonym of 'danger'?",
      options: ["Safety", "Comfort", "Peace", "Risk"],
      correctAnswer: "Risk",
      explanation:
        "'Risk' refers to the possibility of harm or loss, similar to 'danger'.",
    },
    {
      id: 41,
      question: "Which word is an antonym of 'strong'?",
      options: ["Powerful", "Tough", "Weak", "Sturdy"],
      correctAnswer: "Weak",
      explanation:
        "'Strong' means having power or strength, while 'weak' means lacking it.",
    },
    {
      id: 42,
      question: "Which word is a synonym of 'choose'?",
      options: ["Select", "Reject", "Ignore", "Forget"],
      correctAnswer: "Select",
      explanation:
        "'Choose' and 'select' both mean to pick something from several options.",
    },
    {
      id: 43,
      question: "Which word is an antonym of 'permanent'?",
      options: ["Lasting", "Fixed", "Stable", "Temporary"],
      correctAnswer: "Temporary",
      explanation:
        "'Permanent' means lasting forever, while 'temporary' means lasting only a short time.",
    },
    {
      id: 44,
      question: "Which word is a synonym of 'ask'?",
      options: ["Answer", "Reply", "Inquire", "Tell"],
      correctAnswer: "Inquire",
      explanation: "'Inquire' means to ask for information, just like 'ask'.",
    },
    {
      id: 45,
      question: "Which word is an antonym of 'accept'?",
      options: ["Agree", "Refuse", "Receive", "Allow"],
      correctAnswer: "Refuse",
      explanation:
        "'Accept' means to agree to receive something, while 'refuse' means to say no to it.",
    },
  ],
};

export default englishGrammar001;
