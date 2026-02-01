import type {
  AptitudeDayContent,
  AptitudePracticeQuestion,
  AptitudeTestQuestion,
  AptitudeTopic,
} from './types'

export const aptitudeDay2Topics: AptitudeTopic[] = [
  {
    id: 1,
    title: 'Numbers (Day 2) - Basics & Properties',
    description:
      'Introduction to numbers, types of numbers, divisibility basics, remainders, and unit digit (cyclicity) tricks.',
    concepts: [
      {
        name: 'Types of Numbers (Number System Basics)',
        explanation:
          'Numbers are classified into Natural (1,2,3...), Whole (0,1,2...), Integers (...,-2,-1,0,1,2...), Rational (p/q), Irrational (non-terminating non-repeating), and Real numbers (Rational ∪ Irrational).',
        formulas: [
          'Natural: 1,2,3,...',
          'Whole: 0,1,2,3,...',
          'Integers: ..., -2, -1, 0, 1, 2, ...',
          'Rational: p/q where p, q are integers and q ≠ 0',
          'Real: Rational ∪ Irrational',
        ],
        notes: [
          'Every integer is a rational number (e.g., 5 = 5/1).',
          'Decimals: terminating or repeating ⇒ rational; non-terminating non-repeating ⇒ irrational.',
        ],
      },
      {
        name: 'Prime vs Composite (and 1)',
        explanation:
          'Prime numbers have exactly 2 positive divisors: 1 and itself. Composite numbers have more than 2 divisors. The number 1 is neither prime nor composite.',
        formulas: [
          'Prime: exactly 2 divisors',
          'Composite: more than 2 divisors',
          'Check primality: test divisibility up to √n',
        ],
        notes: [
          '2 is the only even prime.',
          'If a number n has a divisor > √n, it must also have a divisor < √n.',
        ],
      },
      {
        name: 'Divisibility & Remainders (Mod)',
        explanation:
          'Divisibility rules help you avoid long division. Remainders can be handled using modular arithmetic to simplify large calculations.',
        formulas: [
          'a ≡ r (mod m) ⇒ a and r give same remainder on division by m',
          '(a + b) mod m = ((a mod m) + (b mod m)) mod m',
          '(a × b) mod m = ((a mod m) × (b mod m)) mod m',
        ],
        notes: [
          'If n mod d = r, to make n divisible by d, add (d − r) (if r ≠ 0).',
          'For powers: look for patterns (cyclicity) in remainders.',
        ],
      },
      {
        name: 'Unit Digit / Cyclicity',
        explanation:
          'The unit digit of a product depends only on the unit digits of the factors. Powers repeat unit digits in cycles (usually length 2 or 4).',
        formulas: [
          'Unit digit of (a × b) depends on unit digits of a and b',
          'Cycle examples: 2 → (2,4,8,6), 3 → (3,9,7,1), 4 → (4,6), 5 → (5), 6 → (6)',
        ],
        notes: [
          'If a number ends with 0 and is multiplied by anything, unit digit stays 0.',
          'If any factor ends with 0, product’s unit digit is 0.',
        ],
      },
    ],
    materials: [
      'Notes: Number System (basics) - classification & properties',
      'Cheat Sheet: Divisibility rules (2,3,4,5,6,8,9,11)',
      'Quick Trick: Unit digit / cyclicity table (0-9)',
      'Practice Set: Numbers - mixed MCQs',
    ],
  },
] as const

// Day 2 practice (5 MCQs)
export const aptitudeDay2PracticeQuestions: AptitudePracticeQuestion[] = [
  {
    id: 1,
    question: 'Which one of the following is not a prime number?',
    topic: 'Numbers',
    type: 'mcq',
    options: ['31', '61', '71', '91'],
    correctOptionIndex: 3,
    correctAnswer: '91',
    solution: ['91 = 7 × 13, so it is composite (not prime).'],
  },
  {
    id: 2,
    question: '(112 × 5^4) = ?',
    topic: 'Numbers',
    type: 'mcq',
    options: ['67000', '70000', '76500', '77200'],
    correctOptionIndex: 1,
    correctAnswer: '70000',
    solution: ['5^4 = 625', '112 × 625 = 112 × (10000/16) = 70000'],
  },
  {
    id: 3,
    question:
      'It is being given that (2^32 + 1) is completely divisible by a whole number. Which of the following numbers is completely divisible by this number?',
    topic: 'Numbers',
    type: 'mcq',
    options: ['(2^16 + 1)', '(2^16 − 1)', '(7 × 2^23)', '(2^96 + 1)'],
    correctOptionIndex: 3,
    correctAnswer: '(2^96 + 1)',
    solution: [
      '2^32 + 1 is divisible by 641.',
      'If 2^32 ≡ −1 (mod 641), then (2^32)^3 = 2^96 ≡ (−1)^3 = −1 (mod 641).',
      'So 2^96 + 1 ≡ 0 (mod 641), hence divisible by the same number.',
    ],
  },
  {
    id: 4,
    question:
      'What least number must be added to 1056, so that the sum is completely divisible by 23?',
    topic: 'Numbers',
    type: 'mcq',
    options: ['2', '3', '18', '21', 'None of these'],
    correctOptionIndex: 0,
    correctAnswer: '2',
    solution: [
      '1056 ÷ 23 leaves remainder 21 (since 23×45 = 1035).',
      'To reach next multiple, add 23 − 21 = 2.',
    ],
  },
  {
    id: 5,
    question: '1397 × 1397 = ?',
    topic: 'Numbers',
    type: 'mcq',
    options: ['1951609', '1981709', '18362619', '2031719', 'None of these'],
    correctOptionIndex: 0,
    correctAnswer: '1951609',
    solution: [
      '(1400 − 3)^2 = 1400^2 − 2×1400×3 + 3^2 = 1960000 − 8400 + 9 = 1951609.',
    ],
  },
] as const

// Day 2 test (10 MCQs)
export const aptitudeDay2TestQuestions: AptitudeTestQuestion[] = [
  {
    id: 1,
    question:
      'How many of the following numbers are divisible by 132? 264, 396, 462, 792, 968, 2178, 5184, 6336',
    topic: 'Numbers',
    options: ['4', '5', '6', '7'],
    correct: 0,
  },
  {
    id: 2,
    question: '(935421 × 625) = ?',
    topic: 'Numbers',
    options: ['575648125', '584638125', '584649125', '585628125'],
    correct: 1,
  },
  {
    id: 3,
    question: 'The largest 4 digit number exactly divisible by 88 is:',
    topic: 'Numbers',
    options: ['9944', '9768', '9988', '8888', 'None of these'],
    correct: 0,
  },
  {
    id: 4,
    question: 'Which of the following is a prime number ?',
    topic: 'Numbers',
    options: ['33', '81', '93', '97'],
    correct: 3,
  },
  {
    id: 5,
    question:
      'What is the unit digit in {(6374)^1793 × (625)^317 × (341491)}?',
    topic: 'Numbers',
    options: ['0', '2', '3', '5'],
    correct: 0,
  },
  {
    id: 6,
    question: '5358 × 51 = ?',
    topic: 'Numbers',
    options: ['273258', '273268', '273348', '273358'],
    correct: 0,
  },
  {
    id: 7,
    question: 'The sum of first five prime numbers is:',
    topic: 'Numbers',
    options: ['11', '18', '26', '28'],
    correct: 3,
  },
  {
    id: 8,
    question:
      'The difference of two numbers is 1365. On dividing the larger number by the smaller, we get 6 as quotient and 15 as remainder. What is the smaller number?',
    topic: 'Numbers',
    options: ['240', '270', '295', '360'],
    correct: 1,
  },
  {
    id: 9,
    question: '(12)^3 × 64 ÷ 432 = ?',
    topic: 'Numbers',
    options: ['5184', '5060', '5148', '5084', 'None of these'],
    correct: 4,
  },
  {
    id: 10,
    question: '72519 × 9999 = ?',
    topic: 'Numbers',
    options: [
      '725117481',
      '674217481',
      '685126481',
      '696217481',
      'None of these',
    ],
    correct: 0,
  },
] as const

export const aptitudeDay2Content: AptitudeDayContent = {
  topics: aptitudeDay2Topics,
  practiceQuestions: aptitudeDay2PracticeQuestions,
  testQuestions: aptitudeDay2TestQuestions,
} as const
