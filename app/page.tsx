import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, BookOpen, Users, Award, Target, CheckCircle } from 'lucide-react'
import collegelogo from './collegelogo.png'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Image
              src={collegelogo}
              alt="College Logo"
              width={300}
              height={80}
              className="h-20 w-auto object-contain"
            />
          </div>
          <div className="px-4 sm:px-6 lg:px-8">
            <Link
              href="/login"
              className="rounded-lg bg-primary-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
            >
              Student Login
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Building Placement Success &{' '}
            <span className="text-primary-600">College Excellence</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Empowering students with comprehensive placement preparation through
            structured learning, practice, and assessment.
          </p>
          <div className="mt-10">
            <Link
              href="/login"
              className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-8 py-3 text-base font-semibold text-white shadow-lg transition-all hover:bg-primary-700 hover:shadow-xl"
            >
              Get Started
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Learning Cycle Visualization */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900">Your Learning Journey</h3>
          <p className="mt-2 text-gray-600">
            A structured path from learning to placement success
          </p>
        </div>
        <div className="mt-12">
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-2 lg:gap-8">
            {[
              { step: 'Learn', icon: BookOpen, color: 'bg-blue-500' },
              { step: 'Practice', icon: Target, color: 'bg-green-500' },
              { step: 'Test', icon: CheckCircle, color: 'bg-yellow-500' },
              { step: 'Pass', icon: Award, color: 'bg-purple-500' },
              { step: 'Unlock', icon: Users, color: 'bg-primary-600' },
            ].map((item, index) => (
              <div key={item.step} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-full ${item.color} text-white shadow-lg transition-transform hover:scale-110`}
                  >
                    <item.icon className="h-8 w-8" />
                  </div>
                  <p className="mt-3 text-sm font-semibold text-gray-700">
                    {item.step}
                  </p>
                </div>
                {index < 4 && (
                  <div className="mx-2 hidden h-0.5 w-12 bg-gradient-to-r from-primary-400 to-primary-600 md:block lg:mx-4 lg:w-16">
                    <ArrowRight className="hidden h-4 w-4 translate-x-full -translate-y-2.5 text-primary-600 lg:block" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Student Benefits */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900">For Students</h3>
            <ul className="mt-6 space-y-4">
              {[
                'Structured daily learning modules',
                'Practice questions with instant feedback',
                'Performance tracking and analytics',
                'Placement priority assessment',
                'Certificate upon completion',
                'Access to premium placement resources',
              ].map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* College Benefits */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900">For College</h3>
            <ul className="mt-6 space-y-4">
              {[
                'Enhanced placement statistics',
                'Improved student readiness',
                'Centralized learning management',
                'Real-time progress monitoring',
                'Data-driven placement insights',
                'Professional certification system',
              ].map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-r from-primary-600 to-primary-800 px-8 py-12 text-center text-white">
          <h3 className="text-3xl font-bold">Ready to Start Your Journey?</h3>
          <p className="mx-auto mt-4 max-w-2xl text-primary-100">
            Join thousands of students preparing for their dream placements
          </p>
          <Link
            href="/login"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 text-base font-semibold text-primary-600 transition-all hover:bg-gray-100"
          >
            Student Login
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-600">
            © 2024 DR. Lankapalli Bullayya College of Engineering. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

