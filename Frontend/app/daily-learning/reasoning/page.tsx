'use client'

import DashboardLayout from '@/components/DashboardLayout'
import Link from 'next/link'
import { ArrowLeft, Calendar } from 'lucide-react'

export default function ReasoningPage() {
  const days = Array.from({ length: 30 }, (_, i) => i + 1)

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center gap-4">
          <Link
            href="/daily-learning"
            className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Reasoning - 30 Days Program
            </h1>
            <p className="mt-2 text-gray-600">
              Select a day to start your reasoning learning
            </p>
          </div>
        </div>

        {/* Days Grid */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
          {days.map((day) => (
            <Link
              key={day}
              href={`/daily-learning/reasoning/day-${day}`}
              className="group flex flex-col items-center justify-center rounded-xl border-2 border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-primary-500 hover:shadow-lg"
            >
              <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 group-hover:bg-green-200">
                <Calendar className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Day {day}</h3>
              <p className="mt-1 text-xs text-gray-500">Click to start</p>
            </Link>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}
