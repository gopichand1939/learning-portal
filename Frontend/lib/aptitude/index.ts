// ================= NUMBERS =================
import { numbersStudyMaterial } from './numbers/study'
import { numbersBasicExercise } from './numbers/exercise'
import { numbersAssignment } from './numbers/assignment'

// ================= POWER CYCLES =================
import { powerCyclesStudyMaterial } from './powercycles/study'
import { powerCyclesBasicExercise } from './powercycles/exercise'
import { powerCyclesAssignment } from './powercycles/assignment'

// ================= REMAINDER CYCLES =================
import { remainderCyclesStudyMaterial } from './remainder-cycles/study'
import { remainderCyclesBasicExercise } from './remainder-cycles/exercise'
import { remainderCyclesAssignment } from './remainder-cycles/assignment'

// ================= COMPANY MCQ – NUMBER SYSTEMS =================
import { companyMcqNsStudyMaterial } from './company-mcq-ns/study'
import { companyMcqNsBasicExercise } from './company-mcq-ns/exercise'
import { companyMcqNsAssignment } from './company-mcq-ns/assignment'

// ================================================================
// SINGLE SOURCE OF TRUTH (NO MUTATION, NO SIDE EFFECTS)
// ================================================================

export const studyContentMap: Record<string, any> = {
  'numbers-study': numbersStudyMaterial,
  'power-cycles-study': powerCyclesStudyMaterial,
  'remainder-cycles-study': remainderCyclesStudyMaterial,
  'company-mcq-ns-study': companyMcqNsStudyMaterial,
}

export const exerciseContentMap: Record<string, any> = {
  'numbers-exercise': numbersBasicExercise,
  'power-cycles-exercise': powerCyclesBasicExercise,
  'remainder-cycles-exercise': remainderCyclesBasicExercise,
  'company-mcq-ns-exercise': companyMcqNsBasicExercise,
}

export const assignmentContentMap: Record<string, any> = {
  'numbers-assignment': numbersAssignment,
  'power-cycles-assignment': powerCyclesAssignment,
  'remainder-cycles-assignment': remainderCyclesAssignment,
  'company-mcq-ns-assignment': companyMcqNsAssignment,
}
