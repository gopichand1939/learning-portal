export const studentData = {
  name: 'John Doe',
  rollNumber: 'LB21CS001',
  username: 'johndoe',
  overallProgress: 68,
  studyStreak: 12,
  completedDays: 45,
  remainingDays: 20,
  performanceScore: 85,
  placementPriority: 'High' as 'High' | 'Medium' | 'Low',
  certificateStatus: 'Locked' as 'Locked' | 'Unlocked',
}

export const courseProgress = {
  totalCourses: 10,
  completedCourses: 6,
  inProgress: 2,
  locked: 2,
}

export const dailyProgress = {
  learn: { completed: true, progress: 100 },
  practice: { completed: true, progress: 80 },
  test: { completed: false, progress: 0 },
}

export const performanceData = [
  { month: 'Jan', score: 65 },
  { month: 'Feb', score: 72 },
  { month: 'Mar', score: 78 },
  { month: 'Apr', score: 82 },
  { month: 'May', score: 85 },
  { month: 'Jun', score: 88 },
]

export const studyConsistency = [
  { day: 'Mon', hours: 3 },
  { day: 'Tue', hours: 4 },
  { day: 'Wed', hours: 2 },
  { day: 'Thu', hours: 5 },
  { day: 'Fri', hours: 3 },
  { day: 'Sat', hours: 4 },
  { day: 'Sun', hours: 2 },
]

export const placementRankings = [
  { rank: 1, name: 'John Doe', score: 95, priority: 'High' },
  { rank: 2, name: 'Jane Smith', score: 92, priority: 'High' },
  { rank: 3, name: 'Mike Johnson', score: 88, priority: 'High' },
  { rank: 4, name: 'Sarah Williams', score: 85, priority: 'Medium' },
  { rank: 5, name: 'David Brown', score: 82, priority: 'Medium' },
  { rank: 6, name: 'Emily Davis', score: 78, priority: 'Medium' },
  { rank: 7, name: 'Chris Wilson', score: 75, priority: 'Low' },
  { rank: 8, name: 'Anna Martinez', score: 72, priority: 'Low' },
]

// Aptitude Topics for Learn Section
export const aptitudeTopics = [
  {
    id: 1,
    title: 'Quantitative Aptitude - Number System',
    description: 'Understanding number systems, divisibility rules, and number properties',
    concepts: [
      {
        name: 'Prime and composite numbers',
        explanation: 'Prime numbers are natural numbers greater than 1 that have no positive divisors other than 1 and itself. Composite numbers are natural numbers greater than 1 that are not prime.',
        formulas: [
          'Prime Number: Has exactly 2 divisors (1 and itself)',
          'Composite Number: Has more than 2 divisors',
          '1 is neither prime nor composite',
          'Smallest prime number: 2 (only even prime)',
        ],
        notes: [
          'First 10 prime numbers: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29',
          'All even numbers except 2 are composite',
          'To check if a number is prime, test divisibility up to √n',
          'Twin primes: Pairs of primes differing by 2 (e.g., 3,5 or 11,13)',
        ],
      },
      {
        name: 'LCM and HCF',
        explanation: 'LCM (Least Common Multiple) is the smallest number that is a multiple of two or more numbers. HCF (Highest Common Factor) is the largest number that divides two or more numbers exactly.',
        formulas: [
          'LCM × HCF = Product of two numbers (for two numbers)',
          'HCF (a, b) = HCF (b, a mod b) - Euclidean Algorithm',
          'LCM (a, b) = (a × b) / HCF (a, b)',
          'For multiple numbers: Find HCF/LCM of first two, then with next number',
        ],
        notes: [
          'HCF is also called GCD (Greatest Common Divisor)',
          'LCM is always greater than or equal to the largest number',
          'HCF is always less than or equal to the smallest number',
          'Prime factorization method: HCF = product of common prime factors with lowest power',
          'Prime factorization method: LCM = product of all prime factors with highest power',
        ],
      },
      {
        name: 'Divisibility rules',
        explanation: 'Quick methods to determine if a number is divisible by another number without performing division.',
        formulas: [
          'Divisible by 2: Last digit is even (0, 2, 4, 6, 8)',
          'Divisible by 3: Sum of digits is divisible by 3',
          'Divisible by 4: Last two digits form a number divisible by 4',
          'Divisible by 5: Last digit is 0 or 5',
          'Divisible by 6: Divisible by both 2 and 3',
          'Divisible by 8: Last three digits form a number divisible by 8',
          'Divisible by 9: Sum of digits is divisible by 9',
          'Divisible by 11: Difference between sum of digits at odd and even positions is 0 or divisible by 11',
        ],
        notes: [
          'For divisibility by 7: Double the last digit, subtract from rest, check if result is divisible by 7',
          'For divisibility by 13: Multiply last digit by 4, add to rest, check divisibility',
          'These rules save time in competitive exams',
          'Practice with examples to master these rules',
        ],
      },
      {
        name: 'Remainder theorem',
        explanation: 'When a number is divided by another number, the remainder can be calculated using various methods and properties.',
        formulas: [
          'If a ≡ r (mod n) and b ≡ s (mod n), then:',
          '  (a + b) ≡ (r + s) (mod n)',
          '  (a - b) ≡ (r - s) (mod n)',
          '  (a × b) ≡ (r × s) (mod n)',
          '  a^k ≡ r^k (mod n)',
          'Negative remainder: If remainder is negative, add divisor to get positive remainder',
        ],
        notes: [
          'Remainder when divided by 10 = Last digit of the number',
          'Remainder when divided by 100 = Last two digits',
          'For large powers: Use Fermat\'s little theorem or Euler\'s theorem',
          'Cyclicity method: Find pattern of remainders for powers',
          'Example: 2^4 = 16, remainder when divided by 5 is 1',
        ],
      },
      {
        name: 'Number base conversions',
        explanation: 'Converting numbers from one number system (base) to another, such as binary, decimal, octal, and hexadecimal.',
        formulas: [
          'Decimal to Binary: Divide by 2, collect remainders in reverse',
          'Binary to Decimal: Multiply each digit by 2^position and sum',
          'Decimal to Octal: Divide by 8, collect remainders in reverse',
          'Octal to Decimal: Multiply each digit by 8^position and sum',
          'Decimal to Hexadecimal: Divide by 16, collect remainders (A=10, B=11, C=12, D=13, E=14, F=15)',
        ],
        notes: [
          'Binary uses base 2 (0, 1)',
          'Octal uses base 8 (0-7)',
          'Decimal uses base 10 (0-9)',
          'Hexadecimal uses base 16 (0-9, A-F)',
          'Quick conversion: Binary to Hex - group 4 bits, Hex to Binary - expand each digit to 4 bits',
        ],
      },
      {
        name: 'Factors and multiples',
        explanation: 'Factors are numbers that divide a given number exactly. Multiples are numbers obtained by multiplying a number by integers.',
        formulas: [
          'Number of factors of N = (a+1)(b+1)(c+1)... where N = p^a × q^b × r^c...',
          'Sum of factors = [(p^(a+1)-1)/(p-1)] × [(q^(b+1)-1)/(q-1)] × ...',
          'Product of factors = N^(number of factors/2)',
          'Sum of first n natural numbers = n(n+1)/2',
          'Sum of squares of first n natural numbers = n(n+1)(2n+1)/6',
        ],
        notes: [
          'Every number has at least 2 factors: 1 and itself',
          'Perfect numbers: Sum of factors (except itself) equals the number (e.g., 6 = 1+2+3)',
          'Abundant numbers: Sum of factors > number',
          'Deficient numbers: Sum of factors < number',
          'Co-prime numbers: Two numbers with HCF = 1',
        ],
      },
      {
        name: 'Prime factorization',
        explanation: 'Expressing a number as a product of its prime factors. This is unique for every number (Fundamental Theorem of Arithmetic).',
        formulas: [
          'Any number can be written as: N = p₁^a₁ × p₂^a₂ × p₃^a₃ × ...',
          'where p₁, p₂, p₃ are prime numbers and a₁, a₂, a₃ are their powers',
          'HCF = Product of common primes with lowest power',
          'LCM = Product of all primes with highest power',
        ],
        notes: [
          'Every composite number has a unique prime factorization',
          'To find prime factors: Divide by smallest prime repeatedly',
          'Use factor tree method for visualization',
          'Prime factorization helps in finding HCF, LCM, and number of factors',
          'Example: 60 = 2² × 3¹ × 5¹',
        ],
      },
      {
        name: 'Number properties',
        explanation: 'Important properties and relationships between numbers that help in problem solving.',
        formulas: [
          'Even + Even = Even',
          'Odd + Odd = Even',
          'Even + Odd = Odd',
          'Even × Even = Even',
          'Odd × Odd = Odd',
          'Even × Odd = Even',
          'Sum of n consecutive numbers = n × middle number',
          'Product of n consecutive numbers is always divisible by n!',
        ],
        notes: [
          'Square of even number is even, square of odd number is odd',
          'Any prime number > 3 can be written as 6k ± 1',
          'Sum of digits of a number divisible by 9 is also divisible by 9',
          'Perfect square always ends with 0, 1, 4, 5, 6, or 9',
          'Unit digit of a number depends only on unit digit of base',
        ],
      },
    ],
    materials: [
      'PDF: Number System Cheat Sheet',
      'Practice Problems: 20 questions',
      'Solved Examples: 15 problems',
      'Formula Reference Guide',
      'Quick Revision Notes',
    ],
  },
]

// Practice Questions (5 questions without multiple choice - based on topics)
export const practiceQuestions = [
  {
    id: 1,
    question:
      'Find the LCM and HCF of 24 and 36.',
    topic: 'Number System',
    type: 'text',
    answer: '',
    correctAnswer: 'LCM = 72, HCF = 12',
    solution: [
      'Step 1: Prime factorization of 24 = 2³ × 3¹',
      'Step 2: Prime factorization of 36 = 2² × 3²',
      'Step 3: HCF = Product of common primes with lowest power = 2² × 3¹ = 4 × 3 = 12',
      'Step 4: LCM = Product of all primes with highest power = 2³ × 3² = 8 × 9 = 72',
      'Answer: LCM = 72, HCF = 12',
    ],
  },
  {
    id: 2,
    question:
      'A shopkeeper buys an article for Rs. 800 and sells it at a profit of 25%. Find the selling price and profit amount.',
    topic: 'Percentage & Profit Loss',
    type: 'text',
    answer: '',
    correctAnswer: 'Selling Price = Rs. 1000, Profit = Rs. 200',
    solution: [
      'Step 1: Cost Price (CP) = Rs. 800',
      'Step 2: Profit Percentage = 25%',
      'Step 3: Profit Amount = 25% of 800 = (25/100) × 800 = Rs. 200',
      'Step 4: Selling Price (SP) = CP + Profit = 800 + 200 = Rs. 1000',
      'Answer: Selling Price = Rs. 1000, Profit = Rs. 200',
    ],
  },
  {
    id: 3,
    question:
      'A train 200 meters long crosses a platform 300 meters long in 25 seconds. Calculate the speed of the train in km/hr.',
    topic: 'Time, Speed & Distance',
    type: 'text',
    answer: '',
    correctAnswer: '72 km/hr',
    solution: [
      'Step 1: Total distance = Length of train + Length of platform = 200 + 300 = 500 meters',
      'Step 2: Time taken = 25 seconds',
      'Step 3: Speed = Distance / Time = 500 / 25 = 20 m/s',
      'Step 4: Convert m/s to km/hr: 20 × (18/5) = 20 × 3.6 = 72 km/hr',
      'Answer: 72 km/hr',
    ],
  },
  {
    id: 4,
    question:
      'In a family, P is the father of Q, R is the mother of P, S is the brother of Q. How is S related to R?',
    topic: 'Blood Relations',
    type: 'text',
    answer: '',
    correctAnswer: 'Grandson',
    solution: [
      'Step 1: P is the father of Q, so P → Q (father-son relationship)',
      'Step 2: R is the mother of P, so R → P (mother-son relationship)',
      'Step 3: S is the brother of Q, so S and Q are siblings',
      'Step 4: Since R is mother of P, and P is father of Q, therefore R is grandmother of Q',
      'Step 5: Since S is brother of Q, S is also grandson of R',
      'Answer: S is the grandson of R',
    ],
  },
  {
    id: 5,
    question:
      'If CAT is coded as 3-1-20, how would DOG be coded using the same pattern?',
    topic: 'Coding & Decoding',
    type: 'text',
    answer: '',
    correctAnswer: '4-15-7',
    solution: [
      'Step 1: Pattern: Each letter is coded as its position in the alphabet',
      'Step 2: C = 3rd letter, A = 1st letter, T = 20th letter',
      'Step 3: D = 4th letter, O = 15th letter, G = 7th letter',
      'Step 4: Therefore, DOG is coded as 4-15-7',
      'Answer: 4-15-7',
    ],
  },
]

// Test Questions (20 MCQ questions - covering all 10 topics)
export const testQuestions = [
  {
    id: 1,
    question: 'What is the LCM of 24 and 36?',
    topic: 'Number System',
    options: ['48', '60', '72', '84'],
    correct: 2,
  },
  {
    id: 2,
    question: 'If 20% of a number is 50, what is the number?',
    topic: 'Percentage & Profit Loss',
    options: ['200', '250', '300', '350'],
    correct: 1,
  },
  {
    id: 3,
    question: 'A train travels 360 km in 6 hours. What is its speed?',
    topic: 'Time, Speed & Distance',
    options: ['50 km/hr', '60 km/hr', '70 km/hr', '80 km/hr'],
    correct: 1,
  },
  {
    id: 4,
    question: 'If A is the brother of B, and B is the son of C, how is A related to C?',
    topic: 'Blood Relations',
    options: ['Son', 'Brother', 'Nephew', 'Cousin'],
    correct: 0,
  },
  {
    id: 5,
    question: 'If CAT is coded as 3120, how is DOG coded?',
    topic: 'Coding & Decoding',
    options: ['4157', '4158', '4159', '4160'],
    correct: 0,
  },
  {
    id: 6,
    question: 'What is the HCF of 48 and 72?',
    topic: 'Number System',
    options: ['12', '18', '24', '36'],
    correct: 2,
  },
  {
    id: 7,
    question: 'A shopkeeper sells an item for Rs. 1200 at a profit of 20%. What is the cost price?',
    topic: 'Percentage & Profit Loss',
    options: ['Rs. 900', 'Rs. 1000', 'Rs. 1100', 'Rs. 1150'],
    correct: 1,
  },
  {
    id: 8,
    question: 'A boat goes 30 km upstream in 3 hours and 30 km downstream in 2 hours. What is the speed of the boat in still water?',
    topic: 'Time, Speed & Distance',
    options: ['10 km/hr', '12.5 km/hr', '15 km/hr', '17.5 km/hr'],
    correct: 1,
  },
  {
    id: 9,
    question: 'What is the next number in the series: 2, 6, 12, 20, 30, ?',
    topic: 'Series & Sequences',
    options: ['40', '42', '44', '46'],
    correct: 1,
  },
  {
    id: 10,
    question: 'If the ratio of A:B is 2:3 and B:C is 4:5, what is A:C?',
    topic: 'Ratio & Proportion',
    options: ['8:15', '2:5', '4:5', '6:7'],
    correct: 0,
  },
  {
    id: 11,
    question: 'In how many ways can 5 people be arranged in a line?',
    topic: 'Permutation & Combination',
    options: ['60', '120', '240', '720'],
    correct: 1,
  },
  {
    id: 12,
    question: 'If 3x + 7 = 22, what is the value of x?',
    topic: 'Algebra & Equations',
    options: ['3', '4', '5', '6'],
    correct: 2,
  },
  {
    id: 13,
    question: 'What is 25% of 240?',
    topic: 'Percentage & Profit Loss',
    options: ['50', '60', '70', '80'],
    correct: 1,
  },
  {
    id: 14,
    question: 'A car travels 180 km in 3 hours. What is its average speed?',
    topic: 'Time, Speed & Distance',
    options: ['50 km/hr', '60 km/hr', '70 km/hr', '80 km/hr'],
    correct: 1,
  },
  {
    id: 15,
    question: 'What is the next term in the series: A, D, G, J, ?',
    topic: 'Series & Sequences',
    options: ['K', 'L', 'M', 'N'],
    correct: 2,
  },
  {
    id: 16,
    question: 'If 2:3 = x:12, what is the value of x?',
    topic: 'Ratio & Proportion',
    options: ['6', '8', '10', '12'],
    correct: 1,
  },
  {
    id: 17,
    question: 'How many ways can 3 books be selected from 7 books?',
    topic: 'Permutation & Combination',
    options: ['21', '35', '42', '56'],
    correct: 1,
  },
  {
    id: 18,
    question: 'Solve for x: 2x² - 8x + 6 = 0',
    topic: 'Algebra & Equations',
    options: ['x = 1, 3', 'x = 2, 3', 'x = 1, 4', 'x = 2, 4'],
    correct: 0,
  },
  {
    id: 19,
    question: 'If P is the mother of Q, and Q is the father of R, how is P related to R?',
    topic: 'Blood Relations',
    options: ['Mother', 'Grandmother', 'Aunt', 'Sister'],
    correct: 1,
  },
  {
    id: 20,
    question: 'If APPLE is coded as 1-16-16-12-5, how is ORANGE coded?',
    topic: 'Coding & Decoding',
    options: ['15-18-1-14-7-5', '15-17-1-14-7-5', '15-18-1-13-7-5', '15-18-1-14-6-5'],
    correct: 0,
  },
]

// Daily Schedule
export const dailySchedule = [
  { activity: 'Learn Section', status: 'completed' },
  { activity: 'Practice Section', status: 'completed' },
  { activity: 'Test Section', status: 'in-progress' },
  { activity: 'Review & Analysis', status: 'pending' },
]

