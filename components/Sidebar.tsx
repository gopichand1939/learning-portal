'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  BookOpen,
  BarChart3,
  Award,
  Target,
  Lock,
  X,
  LogOut,
  List,
  ChevronDown,
  ChevronRight,
  Calculator,
  Brain,
  MessageSquare,
} from 'lucide-react'
import { cn } from '@/lib/utils'

type MenuItem = {
  href: string
  label: string
  icon: React.ComponentType<{ className?: string }>
  children?: Array<{
    href: string
    label: string
    icon: React.ComponentType<{ className?: string }>
    children?: Array<{
      href: string
      label: string
    }>
  }>
}

// Generate day menu items (Day 1 to Day 30)
const generateDayItems = (basePath: string) => {
  return Array.from({ length: 30 }, (_, i) => ({
    href: `${basePath}/day-${i + 1}`,
    label: `Day ${i + 1}`,
  }))
}

const menuItems: MenuItem[] = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  {
    href: '/daily-learning',
    label: 'Daily Learning',
    icon: BookOpen,
    children: [
      {
        href: '/daily-learning/aptitude',
        label: 'Aptitude',
        icon: Calculator,
        children: generateDayItems('/daily-learning/aptitude'),
      },
      {
        href: '/daily-learning/reasoning',
        label: 'Reasoning',
        icon: Brain,
        children: generateDayItems('/daily-learning/reasoning'),
      },
      {
        href: '/daily-learning/verbal',
        label: 'Verbal Ability',
        icon: MessageSquare,
        children: generateDayItems('/daily-learning/verbal'),
      },
    ],
  },
  { href: '/progress', label: 'Progress Tracking', icon: BarChart3 },
  { href: '/certificate', label: 'Certificate', icon: Award },
  { href: '/placement-priority', label: 'Placement', icon: Target },
  { href: '/course-locked', label: 'Course Access', icon: Lock },
  { href: '/course-details', label: 'View All Course Details', icon: List },
]

interface SidebarProps {
  isOpen?: boolean
  onClose?: () => void
}

export default function Sidebar({ isOpen = false, onClose }: SidebarProps) {
  const pathname = usePathname()
  const [expandedMenus, setExpandedMenus] = useState<string[]>(() => {
    // Auto-expand Daily Learning if on any of its child routes
    const expanded: string[] = []
    if (
      pathname?.startsWith('/daily-learning/aptitude') ||
      pathname?.startsWith('/daily-learning/reasoning') ||
      pathname?.startsWith('/daily-learning/verbal')
    ) {
      expanded.push('/daily-learning')
      // Auto-expand the specific section if on a day route
      if (pathname?.startsWith('/daily-learning/aptitude')) {
        expanded.push('/daily-learning/aptitude')
      } else if (pathname?.startsWith('/daily-learning/reasoning')) {
        expanded.push('/daily-learning/reasoning')
      } else if (pathname?.startsWith('/daily-learning/verbal')) {
        expanded.push('/daily-learning/verbal')
      }
    }
    return expanded
  })

  const handleLogout = () => {
    // In a real app, this would clear session/tokens
    // For demo, just redirect to login page
    window.location.href = '/login'
  }

  const toggleMenu = (href: string) => {
    setExpandedMenus((prev) =>
      prev.includes(href) ? prev.filter((h) => h !== href) : [...prev, href]
    )
  }

  const isMenuExpanded = (href: string) => expandedMenus.includes(href)
  const hasActiveChild = (children?: MenuItem['children']) => {
    if (!children) return false
    return children.some((child) => {
      if (pathname === child.href) return true
      // Check nested children (days)
      if (child.children) {
        return child.children.some((day) => pathname === day.href)
      }
      return false
    })
  }

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed left-0 top-0 z-40 h-screen w-64 border-r border-gray-200 bg-white transition-transform lg:translate-x-0',
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        )}
      >
        <div className="flex h-full flex-col overflow-y-auto px-3 py-4">
          <div className="mb-8 flex items-center justify-between px-3">
            <div>
              <h2 className="text-sm font-bold text-gray-900 leading-tight">
                DR. Lankapalli Bullayya College
              </h2>
              <p className="text-xs text-gray-500">Placement Portal</p>
            </div>
            <button
              onClick={onClose}
              className="lg:hidden"
              aria-label="Close menu"
            >
              <X className="h-6 w-6 text-gray-600" />
            </button>
          </div>
          <nav className="flex-1 space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href || hasActiveChild(item.children)
              const isExpanded = isMenuExpanded(item.href)
              const hasChildren = item.children && item.children.length > 0

              return (
                <div key={item.href}>
                  {hasChildren ? (
                    <>
                      <button
                        onClick={() => toggleMenu(item.href)}
                        className={cn(
                          'flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                          isActive
                            ? 'bg-primary-50 text-primary-700'
                            : 'text-gray-700 hover:bg-gray-100'
                        )}
                      >
                        <div className="flex items-center gap-3">
                          <Icon className="h-5 w-5" />
                          <span>{item.label}</span>
                        </div>
                        {isExpanded ? (
                          <ChevronDown className="h-4 w-4" />
                        ) : (
                          <ChevronRight className="h-4 w-4" />
                        )}
                      </button>
                      {isExpanded && (
                        <div className="ml-4 mt-1 space-y-1 border-l-2 border-gray-200 pl-2">
                          {item.children?.map((child) => {
                            const ChildIcon = child.icon
                            const isChildActive = pathname === child.href || (child.children?.some(day => pathname === day.href))
                            const isChildExpanded = isMenuExpanded(child.href)
                            const hasChildChildren = child.children && child.children.length > 0

                            return (
                              <div key={child.href}>
                                {hasChildChildren ? (
                                  <>
                                    <button
                                      onClick={() => toggleMenu(child.href)}
                                      className={cn(
                                        'flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                                        isChildActive
                                          ? 'bg-primary-50 text-primary-700'
                                          : 'text-gray-600 hover:bg-gray-100'
                                      )}
                                    >
                                      <div className="flex items-center gap-3">
                                        <ChildIcon className="h-4 w-4" />
                                        <span>{child.label}</span>
                                      </div>
                                      {isChildExpanded ? (
                                        <ChevronDown className="h-3 w-3" />
                                      ) : (
                                        <ChevronRight className="h-3 w-3" />
                                      )}
                                    </button>
                                    {isChildExpanded && (
                                      <div className="ml-4 mt-1 space-y-1 border-l-2 border-gray-200 pl-2">
                                        {child.children?.map((day) => {
                                          const isDayActive = pathname === day.href
                                          return (
                                            <Link
                                              key={day.href}
                                              href={day.href}
                                              onClick={onClose}
                                              className={cn(
                                                'flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors',
                                                isDayActive
                                                  ? 'bg-primary-50 text-primary-700'
                                                  : 'text-gray-600 hover:bg-gray-100'
                                              )}
                                            >
                                              <span>{day.label}</span>
                                            </Link>
                                          )
                                        })}
                                      </div>
                                    )}
                                  </>
                                ) : (
                                  <Link
                                    href={child.href}
                                    onClick={onClose}
                                    className={cn(
                                      'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                                      isChildActive
                                        ? 'bg-primary-50 text-primary-700'
                                        : 'text-gray-600 hover:bg-gray-100'
                                    )}
                                  >
                                    <ChildIcon className="h-4 w-4" />
                                    <span>{child.label}</span>
                                  </Link>
                                )}
                              </div>
                            )
                          })}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={cn(
                        'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                        isActive
                          ? 'bg-primary-50 text-primary-700'
                          : 'text-gray-700 hover:bg-gray-100'
                      )}
                    >
                      <Icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </Link>
                  )}
                </div>
              )
            })}
          </nav>
          
          {/* Logout Button */}
          <div className="mt-auto border-t border-gray-200 pt-4">
            <button
              onClick={handleLogout}
              className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-red-600 transition-colors hover:bg-red-50"
            >
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  )
}

