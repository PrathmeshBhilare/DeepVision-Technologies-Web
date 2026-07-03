const fs = require('fs');

const baseQuestions = [
  { c: "Python", d: "Easy", q: "What is the output of print(2 ** 3)?", o: ["6", "8", "9", "12"], a: 1 },
  { c: "Python", d: "Easy", q: "Which keyword is used for function in Python?", o: ["Fun", "Define", "def", "function"], a: 2 },
  { c: "JavaScript", d: "Easy", q: "Which symbol is used for comments in JavaScript?", o: ["//", "/* */", "<!-- -->", "Both // and /* */"], a: 3 },
  { c: "JavaScript", d: "Medium", q: "What is the output of typeof null?", o: ["null", "undefined", "object", "string"], a: 2 },
  { c: "HTML", d: "Easy", q: "What does HTML stand for?", o: ["HyperText Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyper Tool Markup Language"], a: 0 },
  { c: "CSS", d: "Easy", q: "What does CSS stand for?", o: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"], a: 0 },
  { c: "SQL", d: "Easy", q: "What does SQL stand for?", o: ["Structured Query Language", "Strong Question Language", "Structured Question Language", "Simple Query Language"], a: 0 },
  { c: "SQL", d: "Medium", q: "Which statement is used to update data in a database?", o: ["SAVE", "UPDATE", "MODIFY", "CHANGE"], a: 1 },
  { c: "Web", d: "Hard", q: "What is the default port for HTTP?", o: ["443", "80", "8080", "21"], a: 1 },
  { c: "Git", d: "Medium", q: "Which command is used to commit changes in Git?", o: ["git commit -m", "git push", "git save", "git add"], a: 0 }
];

const questions = [];

for (let i = 0; i < 50; i++) {
  const base = baseQuestions[i % baseQuestions.length];
  questions.push({
    id: i + 1,
    type: "mcq",
    category: base.c,
    difficulty: base.d,
    question: base.q,
    options: base.o,
    answer: base.a
  });
}

// Add 2 coding questions
questions.push({
  id: 51,
  type: "coding",
  category: "Python",
  difficulty: "Hard",
  question: "Write a Python function named `reverse_string(s)` that takes a string `s` and returns the reversed string."
});

questions.push({
  id: 52,
  type: "coding",
  category: "SQL",
  difficulty: "Hard",
  question: "Write a SQL query to find the second highest salary from an Employee table. The table has columns: Id, Salary."
});

fs.writeFileSync('public/assessment/data/questions.json', JSON.stringify(questions, null, 2));
console.log("Generated 52 questions.");
