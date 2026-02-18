'use client'

import {
  BookOpen,
  CheckCircle,
} from 'lucide-react'
import type { ModuleNode } from '@/lib/learningModules'
import { useLearningProgress } from '@/contexts/LearningProgressContext'
import CodingPracticePanel from '@/components/CodingPracticePanel'
import ExercisePanel from '@/components/ExercisePanel'
import AssignmentPanel from '@/components/AssignmentPanel'

// CONTENT IMPORTS
import { numbersStudyMaterial } from '@/lib/aptitude/numbers/study'
import { numbersBasicExercise } from '@/lib/aptitude/numbers/exercise'
import { numbersAssignment } from '@/lib/aptitude/numbers/assignment'

interface ModuleContentPanelProps {
  selectedNode: ModuleNode | null
  path: string[]
  moduleTitle: string
}

/* ================= CONTENT MAPS ================= */

const studyContentMap: Record<string, any> = {
  'numbers-study': numbersStudyMaterial,
}

const exerciseContentMap: Record<string, any> = {
  'numbers-exercise': numbersBasicExercise,
}

const assignmentContentMap: Record<string, any> = {
  'numbers-assignment': numbersAssignment,
}

/* ================= COMPONENT ================= */

export default function ModuleContentPanel({
  selectedNode,
  path,
}: ModuleContentPanelProps) {
  const { isCompleted, markComplete } = useLearningProgress()

  if (!selectedNode) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-200 bg-gray-50/50 p-12 text-center">
        <BookOpen className="mb-4 h-16 w-16 text-gray-300" />
        <h3 className="text-lg font-semibold text-gray-600">Select a topic</h3>
        <p className="mt-2 text-sm text-gray-500">
          Choose Study Material, Exercise, or Assignment from the sidebar.
        </p>
      </div>
    )
  }

  const pathStr = path.length ? path.join(' → ') : selectedNode.label
  const isStudy = selectedNode.type === 'study'
  const isExercise = selectedNode.type === 'exercise'
  const isAssignment = selectedNode.type === 'assignment'
  const isCoding = selectedNode.type === 'coding'
  const isLeaf = !!selectedNode.type
  const completed = isLeaf && isCompleted(selectedNode.id)

  /* ================= CODING ================= */
  if (isCoding) {
    return (
      <div className="flex flex-1 flex-col rounded-xl border bg-white">
        <CodingPracticePanel
          nodeId={selectedNode.id}
          path={path}
          onMarkComplete={() => {}}
        />
      </div>
    )
  }

  return (
    <div className="flex flex-1 flex-col rounded-xl border bg-white p-6 shadow-sm">
      {/* HEADER */}
      <div className="mb-4 border-b pb-4">
        <p className="text-sm text-gray-500">{pathStr}</p>
        <h2 className="text-xl font-bold text-gray-900">
          {selectedNode.label}
        </h2>
      </div>

      {/* CONTENT */}
      <div className="flex-1 space-y-6">

        {/* STUDY */}
        {isStudy && (() => {
          const content = studyContentMap[selectedNode.id]
          if (!content) return <div>Content coming soon…</div>

          return (
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold">{content.title}</h3>
                <p className="mt-2 text-gray-600">{content.description}</p>
              </div>

              {content.sections.map((section: any, i: number) => (
                <div key={i}>
                  <h4 className="font-semibold text-lg">{section.heading}</h4>
                  <ul className="list-disc pl-6 text-gray-700">
                    {section.points.map((p: string, j: number) => (
                      <li key={j}>{p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )
        })()}

        {/* EXERCISE */}
        {isExercise && (() => {
          const exercise = exerciseContentMap[selectedNode.id]
          if (!exercise) return <div>Exercise coming soon…</div>
          return <ExercisePanel exercise={exercise} />
        })()}

        {/* ASSIGNMENT */}
        {isAssignment && (() => {
          const assignment = assignmentContentMap[selectedNode.id]
          if (!assignment) return <div>Assignment coming soon…</div>
          return <AssignmentPanel assignment={assignment} />
        })()}
      </div>

      {/* FOOTER */}
      {isLeaf && (
        <div className="mt-6 border-t pt-4 flex justify-end">
          <button
            onClick={() => !completed && markComplete(selectedNode.id)}
            disabled={completed}
            className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold ${
              completed
                ? 'bg-primary-100 text-primary-700'
                : 'bg-primary-600 text-white hover:bg-primary-700'
            }`}
          >
            <CheckCircle className="h-5 w-5" />
            {completed ? 'Completed' : 'Mark as complete'}
          </button>
        </div>
      )}
    </div>
  )
}
