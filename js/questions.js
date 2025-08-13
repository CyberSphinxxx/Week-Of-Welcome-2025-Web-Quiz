const quizData = {
  easy: [
    {
      question: "What does CPU stand for in computing?",
      type: "multiple",
      options: [
        "a) Central Processing Unit",
        "b) Computer Programming Utility",
        "c) Core Processing Unit",
        "d) Central Program Utility",
      ],
      answer: "a",
      hint: "It’s called the ‘brain’ of the computer—and it processes instructions centrally.",
    },
    {
      question: "HTML is used to style web pages. True or False?",
      type: "boolean",
      answer: false,
      hint: "HTML structures, but something else does the styling.",
    },
    {
      question: "What does 'WWW' stand for? World Wide ____",
      type: "fill",
      answer: "web",
      hint: "It’s not 'webs' or 'webbing', just the common singular term.",
    },
    {
      question: "Which company makes the iPhone?",
      type: "multiple",
      options: ["a) Apple", "b) iOS", "c) Google", "d) iPhone Inc."],
      answer: "a",
      hint: "Don’t let the product names confuse you—think company.",
    },
    {
      question: "RAM is where files are saved permanently. True or False?",
      type: "boolean",
      answer: false,
      hint: "It helps your computer *think*, but forgets everything after a reboot.",
    },
    {
      question: "Complete: USB stands for Universal Serial ____",
      type: "fill",
      answer: "bus",
      hint: "It sounds like something you ride... even though it's digital.",
    },
    {
      question: "Which of these is a web browser?",
      type: "multiple",
      options: ["a) Google", "b) Computer", "c) Android", "d) Chrome"],
      answer: "d",
      hint: "You're probably using one right now to view this quiz!",
    },
    {
      question: "WiFi requires a physical cable connection.",
      type: "boolean",
      answer: false,
      hint: "The 'wireless' in WiFi is a big clue.",
    },
    {
      question: "AI stands for ____ intelligence",
      type: "fill",
      answer: "artificial",
      hint: "It’s the kind of intelligence that isn’t naturally born—but is man-made.",
    },
    {
      question: "What is the name of Google's latest AI model?",
      type: "multiple",
      options: ["a) Bard", "b) Gemini", "c) ChatGPT", "d) Deepseek"],
      answer: "b",
      hint: "It recently replaced another AI with a poetic name.",
    },
    {
      question: "What does HTML stand for?",
      type: "multiple",
      options: [
        "a) Hyperlink and Text Markup Language",
        "b) High Tech Modern Language",
        "c) Home Tool Markup Language",
        "d) Hyper Text Markup Language"
      ],
      answer: "d",
      hint: "It's about marking up text for web pages"
    },
    {
      question: "Which company developed JavaScript?",
      type: "multiple",
      options: [
        "a) Netscape",
        "b) Microsoft",
        "c) Google",
        "d) Apple"
      ],
      answer: "a",
      hint: "They also made the first popular web browser"
    },
    {
      question: "HTML is a programming language.",
      type: "boolean",
      answer: false,
      hint: "HTML is a markup language"
    },
    {
      question: "Which HTML tag is used for the largest heading?",
      type: "multiple",
      options: [
        "a) <h1>",
        "b) <h6>",
        "c) <header>",
        "d) <heading>"
      ],
      answer: "a",
      hint: "The number 1 indicates the largest"
    },
    {
      question: "What does URL stand for?",
      type: "multiple",
      options: [
        "a) Uniform Resource Locator",
        "b) Universal Resource Locator",
        "c) Uniform Reference Locator",
        "d) Universal Reference Locator"
      ],
      answer: "a",
      hint: "It's about locating resources uniformly"
    },
    {
      question: "Which symbol is used to denote comments in JavaScript?",
      type: "multiple",
      options: [
        "a) //",
        "b) /-",
        "c) #",
        "d) <!--"
      ],
      answer: "a",
      hint: "Two forward slashes"
    },
    {
      question: "CSS can be written inside HTML documents.",
      type: "boolean",
      answer: true,
      hint: "CSS can be internal, external, or inline"
    },
    {
      question: "What is the correct HTML tag for inserting a line break?",
      type: "multiple",
      options: [
        "a) <lb>",
        "b) <break>",
        "c) <br>",
        "d) <brl>"
      ],
      answer: "c",
      hint: "Short for 'break'"
    },
    {
      question: "Which company owns GitHub?",
      type: "multiple",
      options: [
        "a) Amazon",
        "b) Google",
        "c) Facebook",
        "d) Microsoft"
      ],
      answer: "d",
      hint: "They acquired it in 2018"
    },
    {
      question: "The World Wide Web was invented by Tim Berners-Lee.",
      type: "boolean",
      answer: true,
      hint: "He invented it while working at CERN"
    },
    {
      question: "Which HTML attribute specifies an alternate text for an image?",
      type: "multiple",
      options: [
        "a) alt",
        "b) title",
        "c) src",
        "d) href"
      ],
      answer: "a",
      hint: "Short for 'alternative'"
    },
    {
      question: "Complete: HTTP stands for HyperText Transfer ____",
      type: "fill",
      answer: "protocol",
      hint: "It's a set of rules for communication"
    },
    {
      question: "Which company created the React JavaScript library?",
      type: "multiple",
      options: [
        "a) Facebook",
        "b) Google",
        "c) Microsoft",
        "d) Twitter"
      ],
      answer: "a",
      hint: "Now called Meta"
    },
    {
      question: "Git is a version control system.",
      type: "boolean",
      answer: true,
      hint: "It tracks changes in source code"
    }
  ],
  medium: [
    {
      question: "Which programming language is known as the 'language of the web'?",
      type: "multiple",
      options: ["a) Python", "b) JavaScript", "c) Java", "d) Google Script"],
      answer: "b",
      hint: "It runs in every web browser and makes websites interactive.",
    },
    {
      question: "Which language can you use to build both mobile apps and web apps?",
      type: "multiple",
      options: ["a) HTML", "b) Java", "c) JavaScript", "d) SQL"],
      answer: "c",
      hint: "It runs in browsers, but with frameworks like React Native, it goes mobile too.",
    },
    {
      question: "Complete: CSS stands for ____ Style Sheets",
      type: "fill",
      answer: "cascading",
      hint: "Think of how styles can trickle down and override each other based on priority.",
    },
    {
      question: "What does API stand for?",
      type: "multiple",
      options: [
        "a) Application Programming Interface",
        "b) Advanced Programming Integration",
        "c) Automated Program Interaction",
        "d) Application Process Integration",
      ],
      answer: "a",
      hint: "It lets apps 'talk' to each other—think: application + coding + connection point.",
    },
    {
      question: "Python is a compiled programming language.",
      type: "boolean",
      answer: false,
      hint: "Python code is interpreted, not compiled to machine code beforehand.",
    },
    {
      question: "Complete: SQL stands for Structured ____ Language",
      type: "fill",
      answer: "query",
      hint: "In SQL, you don’t give commands—you ask. That’s why it starts with a ‘Q’.",
    },
    {
      question: "Which HTTP status code indicates 'Not Found'?",
      type: "multiple",
      options: ["a) 200", "b) 301", "c) 404", "d) 500"],
      answer: "c",
      hint: "You've probably seen this error code when a webpage doesn't exist. Usually like ___ not found.",
    },
    {
      question: "What does “NaN” mean in JavaScript?",
      type: "multiple",
      options: ["a) Not a Node", "b) Null and Nil", "c) Not a Number", "d) No assigned Name"],
      answer: "c",
      hint: "It’s what you get when JavaScript tries to do math with nonsense.",
    },
    {
      question: "Complete: IDE stands for Integrated Development ____",
      type: "fill",
      answer: "environment",
      hint: "Starts with the letter 'E'. Think of it as the digital workspace where everything a developer needs is built in.",
    },
    {
      question: "Which of these is NOT a database management system?",
      type: "multiple",
      options: ["a) MySQL", "b) PostgreSQL", "c) Redis", "d) Git"],
      answer: "d",
      hint: "One of these tracks code, not data tables.",
    },
    {
      question: "What does SQL stand for?",
      type: "multiple",
      options: [
        "a) Structured Query Language",
        "b) Standard Query Language",
        "c) Simple Query Language",
        "d) System Query Language"
      ],
      answer: "a",
      hint: "It's about querying structured data"
    },
    {
      question: "In JavaScript, '==' and '===' operators behave identically.",
      type: "boolean",
      answer: false,
      hint: "One checks type, the other doesn't"
    },
    {
      question: "Which database type is MongoDB?",
      type: "multiple",
      options: [
        "a) NoSQL",
        "b) SQL",
        "c) Graph",
        "d) Key-Value"
      ],
      answer: "a",
      hint: "It stores documents, not tables"
    },
    {
      question: "What does MVC stand for?",
      type: "multiple",
      options: [
        "a) Model View Controller",
        "b) Model View Component",
        "c) Multiple View Controller",
        "d) Multiple View Component"
      ],
      answer: "a",
      hint: "An architectural pattern"
    },
    {
      question: "Which company developed the Kubernetes container orchestration platform?",
      type: "multiple",
      options: [
        "a) Google",
        "b) Docker",
        "c) Microsoft",
        "d) Amazon"
      ],
      answer: "a",
      hint: "They open-sourced it after using it internally"
    },
    {
      question: "CSS Grid and Flexbox serve the same purpose.",
      type: "boolean",
      answer: false,
      hint: "Grid is 2D, Flexbox is 1D"
    },
    {
      question: "Which HTTP method is used to update a resource?",
      type: "multiple",
      options: [
        "a) PUT",
        "b) GET",
        "c) POST",
        "d) DELETE"
      ],
      answer: "a",
      hint: "It 'puts' the updated resource"
    },
    {
      question: "What does DOM stand for?",
      type: "multiple",
      options: [
        "a) Data Object Model",
        "b) Document Object Model",
        "c) Document Oriented Model",
        "d) Data Oriented Model"
      ],
      answer: "b",
      hint: "It represents the document structure"
    },
    {
      question: "Node.js is built on Chrome's V8 JavaScript engine.",
      type: "boolean",
      answer: true,
      hint: "V8 is Google's JavaScript engine"
    }
  ],
  hard: [
    {
      question: "What is the time complexity of binary search?",
      type: "multiple",
      options: ["a) O(n)", "b) O(log n)", "c) O(n²)", "d) O(1)"],
      answer: "b",
      hint: "Binary search eliminates half the possibilities with each step.",
    },
    {
      question: "TCP/IP operates at the Network Layer of the OSI model.",
      type: "boolean",
      answer: false,
      hint: "TCP operates at the Transport layer, IP at the Network layer.",
    },
    {
      question: "Complete: The command to install packages in Node.js is 'npm ____'",
      type: "fill",
      answer: "install",
      hint: "You run this to bring dependencies into your project. Like after downloading an app you need to install it.",
    },
    {
      question: "Which design pattern ensures a class has only one instance?",
      type: "multiple",
      options: ["a) Static", "b) Observer", "c) Singleton", "d) Monostate"],
      answer: "c",
      hint: "The name suggests there can only be one.",
    },
    {
      question: "In web development, localStorage persists data even after the browser is closed.",
      type: "boolean",
      answer: true,
      hint: "It’s not like sessionStorage—it sticks around.",
    },
    {
      question: "Complete: CRUD stands for Create, Read, Update, ____",
      type: "fill",
      answer: "delete",
      hint: "After creating and updating data, sometimes you need to remove it too.",
    },
    {
      question: "What does ACID stand for in database transactions?",
      type: "multiple",
      options: [
        "a) Atomicity, Consistency, Isolation, Durability",
        "b) Authentication, Consistency, Integration, Data",
        "c) Automated, Consistent, Integrated, Distributed",
        "d) Advanced, Centralized, Isolated, Distributed",
      ],
      answer: "a",
      hint: "Think of transactions as needing to be all-or-nothing, correct, independent, and permanent.",
    },
    {
      question: "The programming language Go was developed at Google.",
      type: "boolean",
      answer: true,
      hint: "Its nickname is Golang, and it was created to improve productivity at a big tech company famous for search.",
    },
    {
      question: "Complete: JWT stands for JSON Web ____",
      type: "fill",
      answer: "token",
      hint: "Think of a small digital object you present to prove who you are—like a key in disguise.",
    },
    {
      question: "Which sorting algorithm has the best average-case time complexity?",
      type: "multiple",
      options: ["a) Bubble Sort", "b) Selection Sort", "c) Quick Sort", "d) Average Sort"],
      answer: "c",
      hint: "It uses a divide-and-conquer approach and is very 'fast' on average.",
    },
    {
      question: "What is the space complexity of merge sort?",
      type: "multiple",
      options: [
        "a) O(n)",
        "b) O(log n)",
        "c) O(n log n)",
        "d) O(1)"
      ],
      answer: "a",
      hint: "It needs extra space for merging"
    },
    {
      question: "Which JavaScript engine does Node.js use?",
      type: "multiple",
      options: [
        "a) V8",
        "b) SpiderMonkey",
        "c) Chakra",
        "d) JavaScriptCore"
      ],
      answer: "a",
      hint: "Google's JavaScript engine"
    },
    {
      question: "In Big O notation, O(1) means constant time complexity.",
      type: "boolean",
      answer: true,
      hint: "The operation takes the same time regardless of input size"
    },
    {
      question: "Which sorting algorithm has the best average-case time complexity?",
      type: "multiple",
      options: [
        "a) Quick Sort",
        "b) Bubble Sort",
        "c) Selection Sort",
        "d) Insertion Sort"
      ],
      answer: "a",
      hint: "It's often the fastest in practice"
    },
    {
      question: "Microservices architecture always improves system performance.",
      type: "boolean",
      answer: false,
      hint: "It adds network overhead and complexity"
    },
    {
      question: "What is the time complexity of inserting into a balanced binary search tree?",
      type: "multiple",
      options: [
        "a) O(log n)",
        "b) O(n)",
        "c) O(1)",
        "d) O(n²)"
      ],
      answer: "a",
      hint: "The tree height is logarithmic"
    },
    {
      question: "Which consensus algorithm is used by Bitcoin?",
      type: "multiple",
      options: [
        "a) Proof of Stake",
        "b) Proof of Work",
        "c) Raft",
        "d) PBFT"
      ],
      answer: "b",
      hint: "It requires computational work to validate blocks"
    },
    {
      question: "Which data structure is used to implement recursion?",
      type: "multiple",
      options: [
        "a) Stack",
        "b) Queue",
        "c) Heap",
        "d) Tree"
      ],
      answer: "a",
      hint: "Function calls are stored in this structure"
    },
    {
      question: "GraphQL was developed by Facebook.",
      type: "boolean",
      answer: true,
      hint: "They open-sourced it in 2015"
    },
    {
      question: "Which design pattern is used to create objects without specifying their exact class?",
      type: "multiple",
      options: [
        "a) Factory",
        "b) Singleton",
        "c) Observer",
        "d) Strategy"
      ],
      answer: "a",
      hint: "It manufactures objects"
    },
    {
      question: "What is the purpose of Docker containers?",
      type: "multiple",
      options: [
        "a) Application isolation",
        "b) Data storage",
        "c) Network routing",
        "d) User authentication"
      ],
      answer: "a",
      hint: "They package applications with their dependencies"
    },
    {
      question: "Event-driven architecture is always better than request-response architecture.",
      type: "boolean",
      answer: "false",
      hint: "Each has its own use cases and trade-offs"
    }
  ],
};