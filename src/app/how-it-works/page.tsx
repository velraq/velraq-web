import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CtaButton from '@/components/CtaButton'
import TerminalBlock from '@/components/TerminalBlock'
import SectionLabel from '@/components/SectionLabel'

const registryRows = [
  { contract: 'orders v1', team: 'analytics', contact: 'analytics@mub.co', channel: '#analytics-alerts' },
  { contract: 'orders v1', team: 'finance', contact: 'finance@mub.co', channel: '#finance-alerts' },
  { contract: 'payments v2', team: 'ml-team', contact: 'ml@mub.co', channel: '#ml-alerts' },
]

export default function HowItWorksPage() {
  return (
    <>
      <Nav />
      <main>
        {/* HERO */}
        <section className="pt-32 pb-16 px-6 md:px-16">
          <div className="max-w-7xl mx-auto">
            <SectionLabel text="HOW VELRAQ WORKS" />
            <h1 className="font-jakarta font-semibold text-4xl md:text-5xl mb-4 max-w-3xl">
              From PR opened to audit written. Under 200 milliseconds.
            </h1>
            <p className="text-[var(--text-2)] text-lg max-w-2xl">
              Velraq is a single GitHub Action. No agents. No sidecars. No warehouse
              connections required at check time. One YAML block in your CI pipeline.
            </p>
          </div>
        </section>

        {/* INSTALLATION */}
        <section className="pt-12 pb-16 px-6 md:px-16 border-t border-[var(--border)]">
          <div className="max-w-7xl mx-auto">
            <SectionLabel text="INSTALLATION" />
            <h2 className="font-jakarta font-semibold text-2xl mb-6">
              Add to any GitHub workflow in 3 lines
            </h2>
            <div className="bg-[#050c17] rounded-xl border border-[var(--border)] p-6 font-mono text-sm text-[var(--text-2)] max-w-2xl">
              <div className="text-[var(--text-3)]">- name: Velraq schema check</div>
              <div className="pl-4">uses: velraq/velraq-action@v1</div>
              <div className="pl-4">with:</div>
              <div className="pl-8">api_key: {'${{ secrets.VELRAQ_API_KEY }}'}</div>
            </div>
          </div>
        </section>

        {/* FOUR VERDICTS */}
        <section className="pt-16 pb-16 px-6 md:px-16 border-t border-[var(--border)]">
          <div className="max-w-7xl mx-auto">
            <SectionLabel text="THE FOUR VERDICTS" />
            <h2 className="font-jakarta font-semibold text-2xl mb-8">
              Every PR gets one of four outcomes
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="bg-navy-700 border border-red-900/40 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="font-mono text-xs text-red-400 uppercase tracking-wider">BLOCK</span>
                </div>
                <p className="text-[var(--text-2)] text-sm">
                  A registered consumer depends on the changed column. PR is blocked.
                  All consumer teams notified. Audit event written.
                </p>
              </div>
              <div className="bg-navy-700 border border-amber-900/40 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-3 h-3 rounded-full bg-amber-400" />
                  <span className="font-mono text-xs text-amber-400 uppercase tracking-wider">REVIEW</span>
                </div>
                <p className="text-[var(--text-2)] text-sm">
                  Change affects a critical column but consumers have 24 hours to approve
                  or reject. PR stays open pending decisions.
                </p>
              </div>
              <div className="bg-navy-700 border border-teal/20 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-3 h-3 rounded-full bg-teal" />
                  <span className="font-mono text-xs text-teal-text uppercase tracking-wider">PASS</span>
                </div>
                <p className="text-[var(--text-2)] text-sm">
                  No registered consumers affected. PR passes. An informational audit
                  event is written for completeness.
                </p>
              </div>
              <div className="bg-navy-700 border border-[var(--border)] rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-3 h-3 rounded-full bg-[var(--text-3)]" />
                  <span className="font-mono text-xs text-[var(--text-3)] uppercase tracking-wider">INFO</span>
                </div>
                <p className="text-[var(--text-2)] text-sm">
                  Non-governed files changed. Velraq records the event and passes.
                  No consumers notified.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONSUMER REGISTRY */}
        <section className="pt-16 pb-16 px-6 md:px-16 border-t border-[var(--border)]">
          <div className="max-w-7xl mx-auto">
            <SectionLabel text="CONSUMER REGISTRY" />
            <div className="md:grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="font-jakarta font-semibold text-2xl mb-4">
                  The registry is the moat. It gets more valuable over time.
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-4">
                  Every team that depends on a governed column registers once. From that
                  point, Velraq knows exactly who to notify — and who to block for — on
                  every PR.
                </p>
                <p className="text-[var(--text-2)] text-sm">
                  As your registry grows, your protection grows. More consumers registered
                  means more incidents prevented.
                </p>
              </div>
              <div className="bg-[#050c17] rounded-xl border border-[var(--border)] overflow-hidden mt-8 md:mt-0">
                <div className="bg-navy-600 px-4 py-2 grid grid-cols-4 gap-2 font-mono text-xs text-[var(--text-3)]">
                  <span>CONTRACT</span>
                  <span>CONSUMER</span>
                  <span>CONTACT</span>
                  <span>CHANNEL</span>
                </div>
                {registryRows.map((row, i) => (
                  <div
                    key={i}
                    className="px-4 py-3 border-t border-[var(--border)] grid grid-cols-4 gap-2 font-mono text-xs text-[var(--text-2)]"
                  >
                    <span>{row.contract}</span>
                    <span>{row.team}</span>
                    <span className="truncate">{row.contact}</span>
                    <span>{row.channel}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* END CTA */}
        <section className="pt-16 pb-24 px-6 md:px-16 border-t border-[var(--border)]">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-jakarta font-semibold text-3xl mb-4">
              See it in action on your pipeline.
            </h2>
            <p className="text-[var(--text-2)] mb-8">
              Free 30-day pilot. We set it up with you in 2 hours.
            </p>
            <CtaButton label="Book my pilot call" size="lg" variant="primary" href="/book" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
