import React from 'react'
import Topbar from './Topbar'
import Sidebar from './Sidebar'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-secondary-50">
      <Topbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-8">
          <div className="container">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
} 