import type {
  AptitudeDayContent,
  AptitudePracticeQuestion,
  AptitudeTestQuestion,
  AptitudeTopic,
} from './types'

export const aptitudeDay4Topics: AptitudeTopic[] = [
  {
    id: 1,
    title: 'Problems on Trains (Day 4) - Concepts & Formulas',
    description:
      'Learn train length/time/speed relations, crossing pole/platform, relative speed (same/opposite direction), and common shortcuts.',
    concepts: [
      {
        name: 'Unit Conversion (km/hr ↔ m/s)',
        explanation:
          'Most train questions use meters and seconds, so convert speeds to m/s.',
        formulas: [
          '1 km/hr = 5/18 m/s',
          '1 m/s = 18/5 km/hr',
          'Speed (m/s) = Speed (km/hr) × 5/18',
        ],
        notes: [
          'Convert first, then use distance = speed × time.',
          'Keep units consistent (meters & seconds).',
        ],
      },
      {
        name: 'Crossing a Pole / Man / Signal',
        explanation:
          'When a train crosses a point object, it covers only its own length.',
        formulas: [
          'Time = Train length / Speed',
          'Train length = Speed × Time',
        ],
        notes: [
          'Pole/man (standing) is treated as a point object.',
        ],
      },
      {
        name: 'Crossing a Platform / Bridge / Tunnel',
        explanation:
          'To clear a platform/bridge, the train covers (train length + platform length).',
        formulas: [
          'Time = (Train length + Platform length) / Speed',
          'Platform length = (Speed × Time) − Train length',
        ],
        notes: [
          'Same logic for bridge/tunnel/platform.',
        ],
      },
      {
        name: 'Relative Speed (Same vs Opposite Direction)',
        explanation:
          'Relative speed is the effective speed used when two objects move.',
        formulas: [
          'Opposite direction: v_rel = v1 + v2',
          'Same direction: v_rel = |v1 − v2|',
          'Crossing each other: Time = (L1 + L2) / v_rel',
        ],
        notes: [
          'Overtaking (same direction) uses sum of lengths and speed difference.',
        ],
      },
      {
        name: 'Man/Jogger moving on track',
        explanation:
          'Treat man/jogger as another moving body and use relative speed and relative distance.',
        formulas: [
          'Same direction: v_rel = v_train − v_man',
          'Opposite direction: v_rel = v_train + v_man',
          'Distance to be covered = initial gap + train length (for “train passes jogger”)',
        ],
        notes: [
          '“Train passes jogger” ⇒ last coach clears jogger.',
        ],
      },
    ],
    materials: [
      'Formula sheet: km/hr ↔ m/s conversion',
      'Concepts: pole vs platform distance',
      'Relative speed: same vs opposite direction',
      'Practice set: 15 MCQs (5 practice + 10 test)',
    ],
  },
] as const

// Day 4 practice (first 5 MCQs)
export const aptitudeDay4PracticeQuestions: AptitudePracticeQuestion[] = [
  {
    id: 1,
    question:
      'A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?',
    topic: 'Trains',
    type: 'mcq',
    options: ['120 metres', '180 metres', '324 metres', '150 metres'],
    correctOptionIndex: 3,
    correctAnswer: '150 metres',
    solution: [
      'Speed = 60 km/hr = 60 × 5/18 = 16.67 m/s',
      'Length = speed × time = 16.67 × 9 ≈ 150 m',
    ],
  },
  {
    id: 2,
    question:
      'A train 125 m long passes a man, running at 5 km/hr in the same direction in which the train is going, in 10 seconds. The speed of the train is:',
    topic: 'Trains',
    type: 'mcq',
    options: ['45 km/hr', '50 km/hr', '54 km/hr', '55 km/hr'],
    correctOptionIndex: 1,
    correctAnswer: '50 km/hr',
    solution: [
      'Relative distance = train length = 125 m',
      'Relative speed = 125/10 = 12.5 m/s = 45 km/hr',
      'Train speed = relative + man speed = 45 + 5 = 50 km/hr',
    ],
  },
  {
    id: 3,
    question:
      'The length of the bridge, which a train 130 metres long and travelling at 45 km/hr can cross in 30 seconds, is:',
    topic: 'Trains',
    type: 'mcq',
    options: ['200 m', '225 m', '245 m', '250 m'],
    correctOptionIndex: 2,
    correctAnswer: '245 m',
    solution: [
      'Speed = 45 km/hr = 45 × 5/18 = 12.5 m/s',
      'Total distance in 30 s = 12.5 × 30 = 375 m',
      'Bridge length = 375 − 130 = 245 m',
    ],
  },
  {
    id: 4,
    question:
      'Two trains running in opposite directions cross a man standing on the platform in 27 seconds and 17 seconds respectively and they cross each other in 23 seconds. The ratio of their speeds is:',
    topic: 'Trains',
    type: 'mcq',
    options: ['1 : 3', '3 : 2', '3 : 4', 'None of these'],
    correctOptionIndex: 1,
    correctAnswer: '3 : 2',
    solution: [
      'Let speeds be v1, v2 and lengths be L1, L2',
      'Crossing man: L1 = 27v1 and L2 = 17v2',
      'Crossing each other in 23 s: (L1 + L2)/(v1 + v2) = 23',
      '(27v1 + 17v2) = 23(v1 + v2) ⇒ 4v1 = 6v2 ⇒ v1:v2 = 3:2',
    ],
  },
  {
    id: 5,
    question:
      'A train passes a station platform in 36 seconds and a man standing on the platform in 20 seconds. If the speed of the train is 54 km/hr, what is the length of the platform?',
    topic: 'Trains',
    type: 'mcq',
    options: ['120 m', '240 m', '300 m', 'None of these'],
    correctOptionIndex: 1,
    correctAnswer: '240 m',
    solution: [
      'Speed = 54 km/hr = 54 × 5/18 = 15 m/s',
      'Train length (cross man) = 15 × 20 = 300 m',
      'Total distance (cross platform) = 15 × 36 = 540 m',
      'Platform length = 540 − 300 = 240 m',
    ],
  },
] as const

// Day 4 test (remaining 10 MCQs)
export const aptitudeDay4TestQuestions: AptitudeTestQuestion[] = [
  {
    id: 1,
    question:
      'A train 240 m long passes a pole in 24 seconds. How long will it take to pass a platform 650 m long?',
    topic: 'Trains',
    options: ['65 sec', '89 sec', '100 sec', '150 sec'],
    correct: 1,
  },
  {
    id: 2,
    question:
      'Two trains of equal length are running on parallel lines in the same direction at 46 km/hr and 36 km/hr. The faster train passes the slower train in 36 seconds. The length of each train is:',
    topic: 'Trains',
    options: ['50 m', '72 m', '80 m', '82 m'],
    correct: 0,
  },
  {
    id: 3,
    question:
      'A train 360 m long is running at a speed of 45 km/hr. In what time will it pass a bridge 140 m long?',
    topic: 'Trains',
    options: ['40 sec', '42 sec', '45 sec', '48 sec'],
    correct: 0,
  },
  {
    id: 4,
    question:
      'Two trains are moving in opposite directions @ 60 km/hr and 90 km/hr. Their lengths are 1.10 km and 0.9 km respectively. The time taken by the slower train to cross the faster train in seconds is:',
    topic: 'Trains',
    options: ['36', '45', '48', '49'],
    correct: 2,
  },
  {
    id: 5,
    question:
      'A jogger running at 9 kmph alongside a railway track is 240 metres ahead of the engine of a 120 metres long train running at 45 kmph in the same direction. In how much time will the train pass the jogger?',
    topic: 'Trains',
    options: ['3.6 sec', '18 sec', '36 sec', '72 sec'],
    correct: 2,
  },
  {
    id: 6,
    question:
      'A 270 metres long train running at the speed of 120 kmph crosses another train running in opposite direction at the speed of 80 kmph in 9 seconds. What is the length of the other train?',
    topic: 'Trains',
    options: ['230 m', '240 m', '260 m', '320 m', 'None of these'],
    correct: 0,
  },
  {
    id: 7,
    question:
      'A goods train runs at the speed of 72 kmph and crosses a 250 m long platform in 26 seconds. What is the length of the goods train?',
    topic: 'Trains',
    options: ['230 m', '240 m', '260 m', '270 m'],
    correct: 3,
  },
  {
    id: 8,
    question:
      'Two trains, each 100 m long, moving in opposite directions, cross each other in 8 seconds. If one is moving twice as fast the other, then the speed of the faster train is:',
    topic: 'Trains',
    options: ['30 km/hr', '45 km/hr', '60 km/hr', '75 km/hr'],
    correct: 2,
  },
  {
    id: 9,
    question:
      'Two trains 140 m and 160 m long run at the speed of 60 km/hr and 40 km/hr respectively in opposite directions on parallel tracks. The time (in seconds) which they take to cross each other, is:',
    topic: 'Trains',
    options: ['9', '9.6', '10', '10.8'],
    correct: 3,
  },
  {
    id: 10,
    question:
      'A train 110 metres long is running with a speed of 60 kmph. In what time will it pass a man who is running at 6 kmph in the direction opposite to that in which the train is going?',
    topic: 'Trains',
    options: ['5 sec', '6 sec', '7 sec', '10 sec'],
    correct: 1,
  },
] as const

export const aptitudeDay4Content: AptitudeDayContent = {
  topics: aptitudeDay4Topics,
  practiceQuestions: aptitudeDay4PracticeQuestions,
  testQuestions: aptitudeDay4TestQuestions,
} as const

