'use client'

import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-navy-900/90 backdrop-blur-md border-b border-[var(--border)] flex items-center px-6 md:px-16">
      <div className="flex items-center justify-between w-full">
        <Link href="/" className="flex items-center">
          <span className="inline-block w-2.5 h-2.5 rounded-sm bg-teal mr-2" />
          <span className="font-jakarta font-semibold text-lg text-white">Velraq</span>
        </Link>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/how-it-works"
              className="text-sm text-[var(--text-2)] hover:text-[var(--text-1)] transition-colors"
            >
              How it works
            </Link>
            <Link
              href="/pricing"
              className="text-sm text-[var(--text-2)] hover:text-[var(--text-1)] transition-colors"
            >
              Pricing
            </Link>
          </div>
          <Link
            href={process.env.NEXT_PUBLIC_CALENDLY_URL ?? '/book'}
            className="bg-teal text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-teal-hover transition-colors whitespace-nowrap"
          >
            Book my pilot call
          </Link>
        </div>
      </div>
    </nav>
  )
}
