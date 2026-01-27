'use client'

import { useState } from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <Navbar onMenuClick={() => setSidebarOpen(true)} />
      <main className="pt-16 lg:pl-64">
        <div className="p-4 lg:p-6">{children}</div>
      </main>
    </div>
  )
}

