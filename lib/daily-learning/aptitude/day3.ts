import type {
  AptitudeDayContent,
  AptitudePracticeQuestion,
  AptitudeTestQuestion,
  AptitudeTopic,
} from './types'

export const aptitudeDay3Topics: AptitudeTopic[] = [
  {
    id: 1,
    title: 'Averages (Day 3) - Concepts, Formulas & Tricks',
    description:
      'Learn average basics, combined/weighted averages, replacement concept, and common exam shortcuts.',
    concepts: [
      {
        name: 'Definition & Basic Formula',
        explanation:
          'Average (Arithmetic Mean) represents equal distribution of total among all items.',
        formulas: [
          'Average = (Sum of observations) / (Number of observations)',
          'Sum = Average × Number of observations',
        ],
        notes: [
          'If average is known, quickly compute total using Sum = Avg × n.',
          'To change average, track how the total changes.',
        ],
      },
      {
        name: 'Combined Average (Two or More Groups)',
        explanation:
          'When combining groups with different sizes and averages, use total sums.',
        formulas: [
          'Combined Avg = (n1×a1 + n2×a2 + ... ) / (n1 + n2 + ...)',
        ],
        notes: [
          'This is effectively a weighted average by group sizes.',
          'Always compute sums first when groups are involved.',
        ],
      },
      {
        name: 'Weighted Average (Equal Spending / Equal Quantity)',
        explanation:
          'When weights are equal (e.g., equal money spent each year), the correct average is based on total quantity, not simple mean of prices.',
        formulas: [
          'Average price (equal spending) = Total money spent / Total quantity purchased',
        ],
        notes: [
          'If spending is same each time, lower price buys more quantity, so it influences average more.',
        ],
      },
      {
        name: 'Replacement / Change in Average',
        explanation:
          'If one value is replaced, average changes based on how the total changes.',
        formulas: [
          'Change in total = n × Change in average',
          'New value = Old value + (n × change in average)',
        ],
        notes: [
          'Very common in “one person replaced” questions.',
        ],
      },
      {
        name: 'Data Sufficiency (Average type)',
        explanation:
          'For DS-style questions, identify whether the given info fixes the total sum and the count uniquely. If yes, average is determinate.',
        formulas: [
          'If total sum and count are uniquely determined ⇒ average is uniquely determined',
        ],
        notes: [
          'Often one statement gives sum, another gives count; together they become sufficient.',
        ],
      },
    ],
    materials: [
      'Formula sheet: Average, combined average, replacement',
      'Shortcuts: Max/min positives when average = 0',
      'Practice MCQs: cricket run rate, family average, replacement, combined batches',
    ],
  },
] as const

// Day 3 practice (first 5 MCQs)
export const aptitudeDay3PracticeQuestions: AptitudePracticeQuestion[] = [
  {
    id: 1,
    question:
      'In the first 10 overs of a cricket game, the run rate was only 3.2. What should be the run rate in the remaining 40 overs to reach the target of 282 runs?',
    topic: 'Average',
    type: 'mcq',
    options: ['6.25', '6.5', '6.75', '7'],
    correctOptionIndex: 0,
    correctAnswer: '6.25',
    solution: [
      'Runs scored in first 10 overs = 3.2 × 10 = 32',
      'Remaining runs = 282 − 32 = 250',
      'Required run rate in remaining 40 overs = 250 / 40 = 6.25',
    ],
  },
  {
    id: 2,
    question:
      'A family consists of two grandparents, two parents and three grandchildren. The average age of the grandparents is 67 years, that of the parents is 35 years and that of the grandchildren is 6 years. What is the average age of the family?',
    topic: 'Average',
    type: 'mcq',
    options: ['28 4/7 years', '31 5/7 years', '32 1/7 years', 'None of these'],
    correctOptionIndex: 1,
    correctAnswer: '31 5/7 years',
    solution: [
      'Sum of grandparents = 2 × 67 = 134',
      'Sum of parents = 2 × 35 = 70',
      'Sum of grandchildren = 3 × 6 = 18',
      'Total sum = 134 + 70 + 18 = 222; total members = 7',
      'Average = 222/7 = 31 5/7 years',
    ],
  },
  {
    id: 3,
    question:
      'A grocer has a sale of Rs. 6435, Rs. 6927, Rs. 6855, Rs. 7230 and Rs. 6562 for 5 consecutive months. How much sale must he have in the sixth month so that he gets an average sale of Rs. 6500?',
    topic: 'Average',
    type: 'mcq',
    options: ['Rs. 4991', 'Rs. 5991', 'Rs. 6001', 'Rs. 6991'],
    correctOptionIndex: 0,
    correctAnswer: 'Rs. 4991',
    solution: [
      'Total needed for 6 months = 6500 × 6 = 39000',
      'Sum of first 5 months = 6435 + 6927 + 6855 + 7230 + 6562 = 34009',
      'Required 6th month sale = 39000 − 34009 = 4991',
    ],
  },
  {
    id: 4,
    question:
      'The average of 20 numbers is zero. Of them, at the most, how many may be greater than zero?',
    topic: 'Average',
    type: 'mcq',
    options: ['0', '1', '10', '19'],
    correctOptionIndex: 3,
    correctAnswer: '19',
    solution: [
      'Average 0 ⇒ total sum = 0',
      'To maximize positive count, keep 19 numbers positive and 1 number negative with magnitude equal to sum of 19 positives.',
      'So maximum > 0 numbers = 19',
    ],
  },
  {
    id: 5,
    question:
      "The average weight of 8 person's increases by 2.5 kg when a new person comes in place of one of them weighing 65 kg. What might be the weight of the new person?",
    topic: 'Average',
    type: 'mcq',
    options: ['76 kg', '76.5 kg', '85 kg', 'Data inadequate', 'None of these'],
    correctOptionIndex: 2,
    correctAnswer: '85 kg',
    solution: [
      'Increase in average = 2.5 for 8 people ⇒ increase in total = 8 × 2.5 = 20',
      'New person weight = 65 + 20 = 85 kg',
    ],
  },
] as const

// Day 3 test (remaining 10 MCQs)
export const aptitudeDay3TestQuestions: AptitudeTestQuestion[] = [
  {
    id: 1,
    question:
      'The captain of a cricket team of 11 members is 26 years old and the wicket keeper is 3 years older. If the ages of these two are excluded, the average age of the remaining players is one year less than the average age of the whole team. What is the average age of the team?',
    topic: 'Average',
    options: ['23 years', '24 years', '25 years', 'None of these'],
    correct: 0,
  },
  {
    id: 2,
    question:
      'The average monthly income of P and Q is Rs. 5050. The average monthly income of Q and R is Rs. 6250 and the average monthly income of P and R is Rs. 5200. The monthly income of P is:',
    topic: 'Average',
    options: ['3500', '4000', '4050', '5000'],
    correct: 1,
  },
  {
    id: 3,
    question:
      'The average age of husband, wife and their child 3 years ago was 27 years and that of wife and the child 5 years ago was 20 years. The present age of the husband is:',
    topic: 'Average',
    options: ['35 years', '40 years', '50 years', 'None of these'],
    correct: 1,
  },
  {
    id: 4,
    question:
      'A car owner buys petrol at Rs.7.50, Rs. 8 and Rs. 8.50 per litre for three successive years. What approximately is the average cost per litre of petrol if he spends Rs. 4000 each year?',
    topic: 'Average',
    options: ['Rs. 7.98', 'Rs. 8', 'Rs. 8.50', 'Rs. 9'],
    correct: 0,
  },
  {
    id: 5,
    question:
      "In Arun's opinion, his weight is greater than 65 kg but less than 72 kg. His brother thinks that Arun's weight is greater than 60 kg but less than 70 kg. His mother says his weight cannot be greater than 68 kg. If all are correct, what is the average of different probable weights of Arun?",
    topic: 'Average',
    options: ['67 kg', '68 kg', '69 kg', 'Data inadequate', 'None of these'],
    correct: 0,
  },
  {
    id: 6,
    question:
      'The average weight of A, B and C is 45 kg. If the average weight of A and B be 40 kg and that of B and C be 43 kg, then the weight of B is:',
    topic: 'Average',
    options: ['17 kg', '20 kg', '26 kg', '31 kg'],
    correct: 3,
  },
  {
    id: 7,
    question:
      'The average weight of 16 boys in a class is 50.25 kg and that of the remaining 8 boys is 45.15 kg. Find the average weights of all the boys in the class.',
    topic: 'Average',
    options: ['47.55 kg', '48 kg', '48.55 kg', '49.25 kg'],
    correct: 2,
  },
  {
    id: 8,
    question:
      'A library has an average of 510 visitors on Sundays and 240 on other days. The average number of visitors per day in a month of 30 days beginning with a Sunday is:',
    topic: 'Average',
    options: ['250', '276', '280', '285'],
    correct: 3,
  },
  {
    id: 9,
    question:
      'If the average marks of three batches of 55, 60 and 45 students respectively is 50, 55, 60, then the average marks of all the students is:',
    topic: 'Average',
    options: ['53.33', '54.68', '55', 'None of these'],
    correct: 1,
  },
  {
    id: 10,
    question:
      "A pupil's marks were wrongly entered as 83 instead of 63. Due to that the average marks for the class got increased by half (1/2). The number of pupils in the class is:",
    topic: 'Average',
    options: ['10', '20', '40', '73'],
    correct: 2,
  },
] as const

export const aptitudeDay3Content: AptitudeDayContent = {
  topics: aptitudeDay3Topics,
  practiceQuestions: aptitudeDay3PracticeQuestions,
  testQuestions: aptitudeDay3TestQuestions,
} as const

