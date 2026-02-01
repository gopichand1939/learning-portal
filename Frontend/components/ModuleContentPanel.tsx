'use client'

import { BookOpen, FileQuestion, ClipboardList, Code2, CheckCircle } from 'lucide-react'
import type { ModuleNode } from '@/lib/learningModules'
import { useLearningProgress } from '@/contexts/LearningProgressContext'
import CodingPracticePanel from '@/components/CodingPracticePanel'

interface ModuleContentPanelProps {
  selectedNode: ModuleNode | null
  path: string[]
  moduleTitle: string
}

export default function ModuleContentPanel({
  selectedNode,
  path,
  moduleTitle,
}: ModuleContentPanelProps) {
  const { isCompleted, markComplete } = useLearningProgress()

  if (!selectedNode) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-200 bg-gray-50/50 p-12 text-center">
        <BookOpen className="mb-4 h-16 w-16 text-gray-300" />
        <h3 className="text-lg font-semibold text-gray-600">Select a topic</h3>
        <p className="mt-2 max-w-sm text-sm text-gray-500">
          Choose Study Material, Basic Exercise, or Assignment from the module tree to view content here.
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

  if (isCoding) {
    return (
      <div className="flex flex-1 flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <CodingPracticePanel
          nodeId={selectedNode.id}
          path={path.length ? path : [moduleTitle, selectedNode.label].filter(Boolean)}
          onMarkComplete={() => {}}
        />
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-gray-200 px-4 py-3">
          <button
            type="button"
            onClick={() => !completed && markComplete(selectedNode.id)}
            disabled={completed}
            className={completed
              ? 'flex cursor-default items-center gap-2 rounded-lg bg-primary-100 px-4 py-2.5 text-sm font-semibold text-primary-700'
              : 'flex items-center gap-2 rounded-lg bg-primary-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-700'
            }
          >
            <CheckCircle className="h-5 w-5 shrink-0" />
            {completed ? 'Marked as complete' : 'Mark as complete'}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-1 flex-col overflow-auto rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-4 border-b border-gray-200 pb-4">
        <p className="text-sm text-gray-500">{pathStr}</p>
        <h2 className="mt-1 text-xl font-bold text-gray-900">{selectedNode.label}</h2>
      </div>
      <div className="flex-1">
        {isStudy && (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <BookOpen className="mb-4 h-14 w-14 text-primary-500" />
            <h3 className="text-lg font-semibold text-gray-900">Study Material</h3>
            <p className="mt-2 text-sm text-gray-600">
              Content for this topic will load here. Notes, concepts, and examples.
            </p>
          </div>
        )}
        {isExercise && (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <FileQuestion className="mb-4 h-14 w-14 text-green-600" />
            <h3 className="text-lg font-semibold text-gray-900">Basic Exercise (10 Questions)</h3>
            <p className="mt-2 text-sm text-gray-600">
              Practice interface with 10 questions. Start when ready.
            </p>
          </div>
        )}
        {isAssignment && (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <ClipboardList className="mb-4 h-14 w-14 text-amber-600" />
            <h3 className="text-lg font-semibold text-gray-900">{selectedNode.label}</h3>
            <p className="mt-2 text-sm text-gray-600">
              MCQ interface. Submit to complete the assignment.
            </p>
          </div>
        )}
      </div>

      {isLeaf && (
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-gray-200 pt-4">
          <button
            type="button"
            onClick={() => !completed && markComplete(selectedNode.id)}
            disabled={completed}
            className={completed
              ? 'flex cursor-default items-center gap-2 rounded-lg bg-primary-100 px-4 py-2.5 text-sm font-semibold text-primary-700'
              : 'flex items-center gap-2 rounded-lg bg-primary-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-700'
            }
          >
            <CheckCircle className="h-5 w-5 shrink-0" />
            {completed ? 'Marked as complete' : 'Mark as complete'}
          </button>
        </div>
      )}
    </div>
  )
}
