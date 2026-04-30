import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CtaButton from '@/components/CtaButton'

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
        <h1 className="font-mono text-6xl text-teal mb-4">404</h1>
        <p className="font-jakarta text-2xl mb-2">Page not found</p>
        <p className="text-[var(--text-2)] mb-8">This page doesn&apos;t exist.</p>
        <CtaButton label="Back to home" size="md" variant="ghost" href="/" />
      </main>
      <Footer />
    </>
  )
}
