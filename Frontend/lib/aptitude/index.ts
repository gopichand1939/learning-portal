// Numbers
import { numbersStudyMaterial } from './numbers/study'
import { numbersBasicExercise } from './numbers/exercise'
import { numbersAssignment } from './numbers/assignment'

// Power Cycles
import { powerCyclesStudyMaterial } from './powercycles/study'
import { powerCyclesBasicExercise } from './powercycles/exercise'
import { powerCyclesAssignment } from './powercycles/assignment'

// Remainder Cycles
import { remainderCyclesStudyMaterial } from './remainder-cycles/study'
import { remainderCyclesBasicExercise } from './remainder-cycles/exercise'
import { remainderCyclesAssignment } from './remainder-cycles/assignment'

// Company MCQ – Number Systems
import { companyMcqNsStudyMaterial } from './company-mcq-ns/study'
import { companyMcqNsBasicExercise } from './company-mcq-ns/exercise'
import { companyMcqNsAssignment } from './company-mcq-ns/assignment'

// Study content map
export const studyContentMap: Record<string, any> = {
  'numbers-study': numbersStudyMaterial,
  'power-cycles-study': powerCyclesStudyMaterial,
  'remainder-cycles-study': remainderCyclesStudyMaterial,
  'company-mcq-ns-study': companyMcqNsStudyMaterial,
}

// Exercise content map
export const exerciseContentMap: Record<string, any> = {
  'numbers-exercise': numbersBasicExercise,
  'power-cycles-exercise': powerCyclesBasicExercise,
  'remainder-cycles-exercise': remainderCyclesBasicExercise,
  'company-mcq-ns-exercise': companyMcqNsBasicExercise,
}

// Assignment content map
export const assignmentContentMap: Record<string, any> = {
  'numbers-assignment': numbersAssignment,
  'power-cycles-assignment': powerCyclesAssignment,
  'remainder-cycles-assignment': remainderCyclesAssignment,
  'company-mcq-ns-assignment': companyMcqNsAssignment,
}

// Daily learning type
export type AptitudeDayContent = {
  topics: {
    id: string
    title: string
    description: string
    concepts: any[]
    materials: string[]
  }[]
  practiceQuestions: any[]
  testQuestions: any[]
}

// Daily learning data
export const aptitudeDailyContent: Record<number, AptitudeDayContent> = {
  1: {
    topics: [
      {
        id: 'numbers',
        title: 'Number System Basics',
        description: 'Core number system concepts',
        concepts: studyContentMap['numbers-study'],
        materials: ['NCERT Notes', 'Solved Examples'],
      },
    ],
    practiceQuestions: exerciseContentMap['numbers-exercise'],
    testQuestions: assignmentContentMap['numbers-assignment'],
  },

  2: {
    topics: [
      {
        id: 'power-cycles',
        title: 'Power Cycles',
        description: 'Patterns in powers and cyclicity',
        concepts: studyContentMap['power-cycles-study'],
        materials: ['Short Tricks', 'Practice Sets'],
      },
    ],
    practiceQuestions: exerciseContentMap['power-cycles-exercise'],
    testQuestions: assignmentContentMap['power-cycles-assignment'],
  },

  3: {
    topics: [
      {
        id: 'remainder-cycles',
        title: 'Remainder Cycles',
        description: 'Remainder pattern analysis',
        concepts: studyContentMap['remainder-cycles-study'],
        materials: ['Concept Notes', 'Worked Problems'],
      },
    ],
    practiceQuestions: exerciseContentMap['remainder-cycles-exercise'],
    testQuestions: assignmentContentMap['remainder-cycles-assignment'],
  },

  4: {
    topics: [
      {
        id: 'company-mcq-ns',
        title: 'Company MCQs – Number Systems',
        description: 'Previous company questions',
        concepts: studyContentMap['company-mcq-ns-study'],
        materials: ['Company MCQs', 'Solutions'],
      },
    ],
    practiceQuestions: exerciseContentMap['company-mcq-ns-exercise'],
    testQuestions: assignmentContentMap['company-mcq-ns-assignment'],
  },
}
