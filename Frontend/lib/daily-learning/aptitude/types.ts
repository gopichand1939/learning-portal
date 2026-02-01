export type AptitudeConcept =
  | string
  | {
      name: string
      explanation: string
      formulas: string[]
      notes: string[]
    }

export type AptitudeTopic = {
  id: number
  title: string
  description: string
  concepts: AptitudeConcept[]
  materials: string[]
}

export type AptitudePracticeQuestion = {
  id: number
  question: string
  topic: string
  type: 'text' | 'mcq'
  correctAnswer: string
  solution: string[]
  // Optional MCQ fields (used by Day 2)
  options?: string[]
  correctOptionIndex?: number
  // Optional legacy field (some existing mock questions include this)
  answer?: string
}

export type AptitudeTestQuestion = {
  id: number
  question: string
  topic: string
  options: string[]
  correct: number
}

export type AptitudeDayContent = {
  topics: AptitudeTopic[]
  practiceQuestions: AptitudePracticeQuestion[]
  testQuestions: AptitudeTestQuestion[]
}

