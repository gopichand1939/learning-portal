import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  BookOpen,
  Target,
  FileCheck,
  CheckCircle,
  Award,
  LayoutList,
  BarChart3,
  Trophy,
  GraduationCap,
  Lock,
  Unlock,
  Sparkles,
  Calculator,
  Brain,
  MessageSquare,
  Code2,
} from 'lucide-react'
import collegelogo from './collegelogo.png'
import HomeCarousel from '@/components/HomeCarousel'

const VALUE_CARDS = [
  {
    icon: LayoutList,
    title: 'Structured Study Plan',
    description:
      'Daily organized learning modules covering Aptitude, Reasoning, Verbal Ability, and Programming Languages.',
    color: 'bg-blue-500',
  },
  {
    icon: BarChart3,
    title: 'Smart Progress Tracking',
    description:
      'Real-time tracking of completed topics, performance analytics, and readiness score.',
    color: 'bg-green-500',
  },
  {
    icon: Trophy,
    title: 'Placement Priority System',
    description:
      'Performance-based placement priority ranking to identify top placement-ready students.',
    color: 'bg-amber-500',
  },
  {
    icon: GraduationCap,
    title: 'Certification Program',
    description:
      'Official college certificate awarded after 100% course completion and high final assessment score.',
    color: 'bg-primary-600',
  },
]

const LEARNING_JOURNEY = [
  { step: 'Learn', icon: BookOpen, desc: 'Study structured material', color: 'bg-blue-500' },
  { step: 'Practice', icon: Target, desc: 'Solve guided exercises', color: 'bg-green-500' },
  { step: 'Test', icon: FileCheck, desc: 'Attempt topic assessments', color: 'bg-amber-500' },
  { step: 'Pass', icon: CheckCircle, desc: 'Validate mastery', color: 'bg-emerald-500' },
  { step: 'Unlock', icon: Unlock, desc: 'Open next modules', color: 'bg-purple-500' },
  { step: 'Placement Ready', icon: Award, desc: 'Become interview eligible', color: 'bg-primary-600' },
]

const PROGRAM_COVERAGE = [
  { title: 'Quantitative Aptitude', icon: Calculator, href: '/daily-learning/aptitude' },
  { title: 'Logical Reasoning', icon: Brain, href: '/daily-learning/reasoning' },
  { title: 'Verbal Ability', icon: MessageSquare, href: '/daily-learning/verbal' },
  { title: 'Programming Fundamentals', icon: Code2, href: '/daily-learning/python' },
]

const COVERAGE_FEATURES = [
  'Planned syllabus',
  'Topic-wise structure',
  'Practice + assignments',
  'Final assessment',
]

const WHY_UNIQUE = [
  {
    title: 'College Integrated System',
    description: 'Built directly for college placement preparation with academic alignment.',
  },
  {
    title: 'Discipline-Driven Learning',
    description: 'Structured progression ensures students complete every core topic.',
  },
  {
    title: 'Placement Outcome Focused',
    description: 'Performance tracking directly maps to placement readiness.',
  },
]

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-200/80 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <Image
              src={collegelogo}
              alt="Dr. Lankapalli Bullayya College of Engineering"
              width={280}
              height={76}
              className="h-16 w-auto object-contain sm:h-20"
            />
          </div>
          <Link
            href="/login"
            className="rounded-xl bg-primary-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-primary-700 hover:shadow-lg"
          >
            Student Login
          </Link>
        </div>
      </header>

      {/* Carousel */}
      <HomeCarousel />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-blue-50/80 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-100/40 via-transparent to-transparent" />
        <div className="absolute right-0 top-1/4 h-72 w-72 rounded-full bg-primary-200/30 blur-3xl" />
        <div className="absolute bottom-1/4 left-0 h-48 w-48 rounded-full bg-blue-100/50 blur-2xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-1.5 text-sm font-medium text-primary-700">
            <Sparkles className="h-4 w-4" />
            Placement Readiness Program · Golden Jubilee Initiative
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Building Placement-Ready{' '}
            <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
              Engineers
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
            Structured aptitude, reasoning, verbal ability, and programming preparation designed to maximize placement success at Dr. Lankapalli Bullayya College of Engineering.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Link
              href="/login"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-primary-700 hover:shadow-xl sm:w-auto"
            >
              Start Placement Preparation
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/daily-learning"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-primary-600 bg-white px-8 py-3.5 text-base font-semibold text-primary-600 transition-all hover:bg-primary-50 sm:w-auto"
            >
              View Learning Plan
            </Link>
          </div>
        </div>
      </section>

      {/* Key Value Highlights */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Why Choose This Platform
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-600">
            Everything you need to become placement-ready, in one place.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUE_CARDS.map((card, i) => (
            <div
              key={card.title}
              className="group rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:border-primary-200"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div
                className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${card.color} text-white shadow-md transition-transform group-hover:scale-110`}
              >
                <card.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-gray-900">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Learning Journey Flow */}
      <section className="border-y border-gray-200/80 bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Your Learning Journey
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-gray-600">
              A clear path from learning to placement readiness.
            </p>
          </div>
          <div className="mt-12 flex flex-wrap items-stretch justify-center gap-4 md:gap-2 lg:gap-6">
            {LEARNING_JOURNEY.map((item, index) => (
              <div key={item.step} className="flex flex-col items-center">
                <div className="flex flex-col items-center rounded-2xl border border-gray-200/80 bg-gray-50/50 px-5 py-6 shadow-sm transition-all hover:shadow-md md:min-w-[140px]">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-xl ${item.color} text-white shadow-md`}
                  >
                    <item.icon className="h-7 w-7" />
                  </div>
                  <p className="mt-3 font-semibold text-gray-900">{item.step}</p>
                  <p className="mt-1 text-center text-xs text-gray-600">{item.desc}</p>
                </div>
                {index < LEARNING_JOURNEY.length - 1 && (
                  <div className="hidden h-0.5 w-6 self-center bg-gradient-to-r from-primary-300 to-primary-500 md:block lg:w-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Coverage */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Program Coverage
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-600">
            Four core streams with planned syllabus and assessments.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROGRAM_COVERAGE.map((prog) => (
            <Link
              key={prog.title}
              href={prog.href}
              className="group rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm transition-all hover:border-primary-300 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-600 transition-colors group-hover:bg-primary-200">
                <prog.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-gray-900">{prog.title}</h3>
              <ul className="mt-4 space-y-2">
                {COVERAGE_FEATURES.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 flex-shrink-0 text-green-500" />
                    {f}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </section>

      {/* Progress Preview (Sample Dashboard) */}
      <section className="border-t border-gray-200/80 bg-gradient-to-b from-primary-50/50 to-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              See Your Progress
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-gray-600">
              Track completion, current module, and unlock the final assessment.
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-md">
            <div className="rounded-2xl border border-white/80 bg-white/70 p-6 shadow-xl backdrop-blur-md">
              <p className="text-sm font-medium text-gray-500">Sample dashboard preview</p>
              <div className="mt-4">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-gray-700">Overall progress</span>
                  <span className="font-bold text-primary-600">62%</span>
                </div>
                <div className="mt-2 h-3 overflow-hidden rounded-full bg-gray-200">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary-500 to-primary-600"
                    style={{ width: '62%' }}
                  />
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-gray-50/80 p-3">
                  <p className="text-xs text-gray-500">Completed Topics</p>
                  <p className="text-xl font-bold text-gray-900">24</p>
                </div>
                <div className="rounded-xl bg-gray-50/80 p-3">
                  <p className="text-xs text-gray-500">Current Module</p>
                  <p className="text-sm font-semibold text-gray-900">Quantitative Aptitude</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 rounded-xl border border-amber-200 bg-amber-50/80 px-4 py-3">
                <Lock className="h-5 w-5 text-amber-600" />
                <span className="text-sm font-medium text-amber-800">Final Assessment Locked</span>
                <span className="ml-auto rounded-full bg-amber-200 px-2 py-0.5 text-xs font-semibold text-amber-900">
                  Complete modules to unlock
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Platform Is Unique */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Why This Platform Is Unique
          </h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {WHY_UNIQUE.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary-600 to-primary-800 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />
        <div className="relative mx-auto max-w-3xl text-center text-white">
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Start Your Placement Preparation Journey Today
          </h2>
          <p className="mt-4 text-lg text-primary-100">
            Dr. Lankapalli Bullayya College of Engineering · Placement Readiness Program
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Link
              href="/login"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-8 py-3.5 text-base font-semibold text-primary-600 shadow-lg transition-all hover:bg-gray-100 sm:w-auto"
            >
              Student Login
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/daily-learning"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-white/80 bg-transparent px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-white/10 sm:w-auto"
            >
              View Learning Modules
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-600">
            © {new Date().getFullYear()} Dr. Lankapalli Bullayya College of Engineering. All rights reserved.
          </p>
          <p className="mt-2 text-center text-xs text-gray-500">
            Placement Readiness Program · Golden Jubilee Initiative
          </p>
        </div>
      </footer>
    </div>
  )
}
