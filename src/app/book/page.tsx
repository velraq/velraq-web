'use client'

import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import SectionLabel from '@/components/SectionLabel'
import { InlineWidget } from 'react-calendly'
import { CheckCircle } from 'lucide-react'

const expectations = [
  'Live demo of a PR BLOCK firing on a real dbt manifest',
  'Walk through of the consumer registry and audit trail',
  'FCA/SM&CR compliance mapping explained',
  'Your questions answered — technical and commercial',
  'If you want to pilot: we book a 2-hour setup session on the spot',
]

export default function BookPage() {
  return (
    <>
      <Nav />
      <main className="pt-32 pb-24 px-6 md:px-16">
        <div className="max-w-5xl mx-auto md:grid md:grid-cols-2 gap-16 items-start">
          {/* LEFT */}
          <div>
            <SectionLabel text="BOOK A PILOT CALL" />
            <h1 className="font-jakarta font-semibold text-4xl mb-4">
              30 minutes. We&apos;ll show you exactly what Velraq does on your pipeline.
            </h1>
            <p className="text-[var(--text-2)] text-lg mb-8 leading-relaxed">
              This is a technical call. Bring your Head of Data Engineering.
              We&apos;ll walk through a live BLOCK event, explain the consumer registry,
              and answer every question your team has before committing to a pilot.
            </p>
            <div className="space-y-4">
              {expectations.map((item) => (
                <div key={item} className="flex gap-3 items-start">
                  <CheckCircle size={16} className="text-teal mt-0.5 shrink-0" />
                  <span className="text-[var(--text-2)] text-sm">{item}</span>
                </div>
              ))}
            </div>
            <p className="font-mono text-xs text-[var(--text-3)] mt-8">
              Free pilot · No contract · UK data residency confirmed before we touch anything
            </p>
          </div>

          {/* RIGHT — Calendly */}
          <div className="mt-8 md:mt-0">
            <InlineWidget
              url={process.env.NEXT_PUBLIC_CALENDLY_URL ?? 'https://calendly.com'}
              styles={{ height: '700px', minWidth: '320px' }}
              pageSettings={{
                backgroundColor: '0a1221',
                hideEventTypeDetails: false,
                hideLandingPageDetails: false,
                primaryColor: '1D9E75',
                textColor: 'eef2f7',
              }}
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
