 'use client'

import Link from 'next/link'
import { useState } from 'react'
import { navigationConfig, socialConfig } from '@/lib/config'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-gray-900">
            我的博客
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigationConfig.main.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Admin Link */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/admin"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              管理后台
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigationConfig.main.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-gray-600 hover:text-gray-900"
                >
                  {item.title}
                </Link>
              ))}
              <Link
                href="/admin"
                className="block px-3 py-2 text-gray-500 hover:text-gray-700"
              >
                管理后台
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}