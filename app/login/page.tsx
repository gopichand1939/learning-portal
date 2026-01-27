'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Lock, User, Hash } from 'lucide-react'
import collegelogo from '@/app/collegelogo.png'

export default function LoginPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    rollNumber: '',
    username: '',
    password: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock login - redirect to dashboard
    router.push('/dashboard')
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-primary-50 via-white to-primary-50 px-4 py-12">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="mb-8 text-center">
          <Link href="/" className="inline-flex items-center gap-3">
            <Image
              src={collegelogo}
              alt="College Logo"
              width={56}
              height={56}
              className="h-14 w-14 object-contain"
            />
            <div className="text-left">
              <h1 className="text-xl font-bold text-gray-900 leading-tight">
                DR. Lankapalli Bullayya College
              </h1>
              <p className="text-sm text-gray-600">Placement Learning Portal</p>
            </div>
          </Link>
        </div>

        {/* Login Card */}
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-xl">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold text-gray-900">Student Login</h2>
            <p className="mt-2 text-sm text-gray-600">
              Access your placement learning dashboard
            </p>
          </div>

          {/* College Only Access Message */}
          <div className="mb-6 rounded-lg border border-primary-200 bg-primary-50 p-4">
            <div className="flex items-start gap-3">
              <Lock className="mt-0.5 h-5 w-5 text-primary-600" />
              <div>
                <p className="text-sm font-semibold text-primary-900">
                  College-Only Access
                </p>
                <p className="mt-1 text-xs text-primary-700">
                  This portal is exclusively for DR. Lankapalli Bullayya College
                  students.
                </p>
              </div>
            </div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Roll Number */}
            <div>
              <label
                htmlFor="rollNumber"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Roll Number
              </label>
              <div className="relative">
                <Hash className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  id="rollNumber"
                  type="text"
                  value={formData.rollNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, rollNumber: e.target.value })
                  }
                  placeholder="LB21CS001"
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 py-2.5 pl-10 pr-4 text-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
                  required
                />
              </div>
            </div>

            {/* Username */}
            <div>
              <label
                htmlFor="username"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  id="username"
                  type="text"
                  value={formData.username}
                  onChange={(e) =>
                    setFormData({ ...formData, username: e.target.value })
                  }
                  placeholder="Enter your username"
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 py-2.5 pl-10 pr-4 text-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  placeholder="Enter your password"
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 py-2.5 pl-10 pr-4 text-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full rounded-lg bg-primary-600 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              Sign In
            </button>
          </form>

          {/* Demo Note */}
          <p className="mt-6 text-center text-xs text-gray-500">
            Demo Mode: Any credentials will work
          </p>
        </div>

        {/* Back to Home */}
        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-sm text-primary-600 hover:text-primary-700"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

