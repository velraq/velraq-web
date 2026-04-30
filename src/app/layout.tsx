import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, DM_Sans, DM_Mono } from 'next/font/google'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'], variable: '--font-jakarta', weight: ['400', '500', '600'],
})
const dmSans = DM_Sans({
  subsets: ['latin'], variable: '--font-dm-sans', weight: ['300', '400', '500'],
})
const dmMono = DM_Mono({
  subsets: ['latin'], variable: '--font-dm-mono', weight: ['400', '500'],
})

export const metadata: Metadata = {
  title: 'Velraq — Schema Change Enforcement for FCA-Regulated Fintechs',
  description: 'Block breaking schema changes before they merge. Protect consumer teams. Generate a tamper-proof FCA/SM&CR audit trail. Built for UK fintechs on dbt.',
  metadataBase: new URL('https://velraq.com'),
  openGraph: {
    title: 'Velraq — Schema Change Enforcement',
    description: 'Block breaking schema changes at the PR gate. FCA/SM&CR audit trail included.',
    url: 'https://velraq.com', siteName: 'Velraq', type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${dmSans.variable} ${dmMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
