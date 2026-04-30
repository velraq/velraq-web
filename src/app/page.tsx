import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CtaButton from '@/components/CtaButton'
import TerminalBlock from '@/components/TerminalBlock'
import SectionLabel from '@/components/SectionLabel'
import { AlertTriangle, Users, FileWarning, CheckCircle } from 'lucide-react'

const terminalLines = [
  '→ Scanning dbt manifest diff...',
  '→ Checking consumer registry...',
  '→ orders.order_total — 3 teams registered',
  '⚠  COLUMN_RENAMED · criticality: critical',
  '✗  VERDICT: BLOCK',
  '→  Notifying: analytics, finance, ml-team',
  '✓  Audit event written · hash: a3f9e2c1...',
  '✓  SMF16 holder: Sarah Mitchell · notified',
]

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        {/* SECTION A — HERO */}
        <section className="bg-hero-glow pt-32 pb-24 px-6 md:px-16">
          <div className="md:grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div>
              <span className="inline-flex items-center bg-teal-dim border border-teal/20 text-teal-text font-mono text-xs px-3 py-1 rounded-full mb-6">
                Private beta · 3 pilot slots open
              </span>
              <h1 className="font-jakarta font-semibold leading-tight mb-4 text-4xl md:text-5xl lg:text-6xl max-w-xl">
                <span className="text-[var(--text-1)]">Schema changes that break your pipeline </span>
                <span className="text-teal-text">blocked before they merge.</span>
              </h1>
              <p className="text-lg md:text-xl text-[var(--text-2)] max-w-lg mb-8 leading-relaxed">
                Velraq sits at the GitHub PR gate. Before a breaking schema change merges —
                it fires. Blocks the PR. Notifies every consumer team. Writes a tamper-proof
                audit event for your FCA SYSC 9.1 review.
              </p>
              <div className="flex items-center flex-wrap gap-4">
                <CtaButton label="Book my pilot call" size="lg" variant="primary" href="/book" />
                <a
                  href="/how-it-works"
                  className="text-teal-text text-sm hover:underline"
                >
                  See how it works →
                </a>
              </div>
              <p className="font-mono text-xs text-[var(--text-3)] mt-4">
                Free 30-day pilot · No contract · UK data residency · eu-west-2
              </p>
            </div>
            <div className="hidden md:block">
              <TerminalBlock
                title="velraq · PR #847 · orders.sql"
                lines={terminalLines}
              />
            </div>
          </div>
        </section>

        {/* SECTION B — PROBLEM */}
        <section className="pt-24 pb-20 px-6 md:px-16 border-t border-[var(--border)]">
          <div className="max-w-7xl mx-auto">
            <SectionLabel text="THE PROBLEM" />
            <h2 className="font-jakarta font-semibold text-3xl md:text-4xl mb-4 max-w-2xl">
              A column renamed on Friday. Three dashboards broken by Monday.
            </h2>
            <p className="text-[var(--text-2)] text-lg max-w-2xl mb-12 leading-relaxed">
              It happens every week in data-mature fintechs. An engineer renames a field.
              dbt contracts catch it at build time — if you&apos;re lucky. But the PR already
              merged. The consumer teams are in incident mode. Your CDO is fielding calls.
            </p>
            <div className="grid md:grid-cols-3 gap-5">
              <div className="bg-navy-700 border border-[var(--border)] rounded-xl p-6 hover:border-[var(--border-md)] transition-colors">
                <AlertTriangle size={20} className="text-amber-400 mb-4" />
                <h3 className="font-jakarta font-semibold text-base mb-2">Detection is too late</h3>
                <p className="text-[var(--text-2)] text-sm leading-relaxed">
                  dbt, Monte Carlo, and Datafold all operate downstream. They detect after
                  the merge. By then you are already in incident mode.
                </p>
              </div>
              <div className="bg-navy-700 border border-[var(--border)] rounded-xl p-6 hover:border-[var(--border-md)] transition-colors">
                <Users size={20} className="text-teal-text mb-4" />
                <h3 className="font-jakarta font-semibold text-base mb-2">No consumer registry</h3>
                <p className="text-[var(--text-2)] text-sm leading-relaxed">
                  Nobody knows which teams depend on which columns. Notifications go to
                  everyone or nobody. Consumer teams find out when their dashboards break.
                </p>
              </div>
              <div className="bg-navy-700 border border-[var(--border)] rounded-xl p-6 hover:border-[var(--border-md)] transition-colors">
                <FileWarning size={20} className="text-amber-400 mb-4" />
                <h3 className="font-jakarta font-semibold text-base mb-2">No audit trail for FCA</h3>
                <p className="text-[var(--text-2)] text-sm leading-relaxed">
                  When your regulator asks what changed and when, you have GitHub commit
                  logs. Under SM&amp;CR, your CDO carries personal liability. That is not enough.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION C — HOW IT WORKS */}
        <section className="pt-24 pb-20 px-6 md:px-16 border-t border-[var(--border)] bg-navy-800">
          <div className="max-w-7xl mx-auto">
            <SectionLabel text="HOW IT WORKS" />
            <h2 className="font-jakarta font-semibold text-3xl md:text-4xl mb-4">
              Prevention at the merge gate. Not detection after the fact.
            </h2>
            <p className="text-[var(--text-2)] mb-14 max-w-xl">
              Velraq intercepts every PR before it merges. No workflow changes for your
              engineers. One GitHub Action. Under 200ms per check.
            </p>
            <div className="max-w-2xl space-y-8">
              {[
                {
                  n: 1,
                  title: 'PR opened',
                  detail: 'An engineer opens a pull request. The Velraq GitHub Action triggers automatically on every PR — no manual steps.',
                },
                {
                  n: 2,
                  title: 'Manifest scanned',
                  detail: 'Velraq reads the dbt manifest diff. It identifies every column change and cross-references the consumer registry in O(1) time.',
                },
                {
                  n: 3,
                  title: 'Verdict fired',
                  detail: 'If a registered consumer depends on the changed column, Velraq blocks the PR and notifies every affected team immediately via Slack or Teams.',
                },
                {
                  n: 4,
                  title: 'Audit written',
                  detail: 'Every enforcement event is written to a SHA-256 hash chain. Tamper-proof. Mapped to FCA SYSC 9.1. Exportable as CSV for your compliance team.',
                },
              ].map((step) => (
                <div key={step.n} className="flex gap-5 items-start">
                  <div className="w-8 h-8 rounded-full bg-teal-dim border border-teal/30 flex items-center justify-center font-mono text-sm text-teal-text shrink-0">
                    {step.n}
                  </div>
                  <div>
                    <h3 className="font-jakarta font-semibold text-base mb-1">{step.title}</h3>
                    <p className="text-[var(--text-2)] text-sm leading-relaxed">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION D — COMPLIANCE */}
        <section className="pt-24 pb-20 px-6 md:px-16 border-t border-[var(--border)]">
          <div className="max-w-7xl mx-auto">
            <SectionLabel text="FCA · SM&CR COMPLIANCE" />
            <div className="md:grid md:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="font-jakarta font-semibold text-3xl md:text-4xl mb-4 max-w-lg">
                  Your CDO carries personal liability. Velraq closes the evidence gap.
                </h2>
                <p className="text-[var(--text-2)] mb-8 leading-relaxed">
                  Under SM&amp;CR, the Senior Manager named on your FCA form is personally
                  accountable for data governance failures. Velraq&apos;s audit trail gives them
                  the evidence chain they need — before the regulator asks for it.
                </p>
                <div className="space-y-4">
                  {[
                    'SHA-256 hash chain — tamper-evident, court-admissible format',
                    'Mapped to FCA SYSC 9.1 record-keeping obligation',
                    'SM&CR Senior Manager field on every audit event',
                    '5-year retention · EU DORA ICT incident log compatible',
                  ].map((point) => (
                    <div key={point} className="flex gap-3 items-start">
                      <CheckCircle size={16} className="text-teal mt-0.5 shrink-0" />
                      <span className="text-[var(--text-2)] text-sm">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-navy-700 border border-[var(--border)] rounded-xl p-6 mt-8 md:mt-0">
                <p className="font-mono text-xs text-[var(--text-3)] mb-4 uppercase tracking-widest">AUDIT EVENT SAMPLE</p>
                <div className="bg-[#050c17] rounded-lg p-4 font-mono text-xs text-[var(--text-2)] space-y-1">
                  <div>event:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; PR_BLOCKED</div>
                  <div>contract:&nbsp;&nbsp; orders v1.0.0</div>
                  <div>column:&nbsp;&nbsp;&nbsp;&nbsp; order_total → RENAMED</div>
                  <div>actor:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; github-action</div>
                  <div>smf16:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sarah Mitchell</div>
                  <div>notified:&nbsp;&nbsp; analytics, finance, ml-team</div>
                  <div>hash:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; a3f9e2c1d8b4...</div>
                  <div>prev_hash:&nbsp; 7e2a1f09c3d5...</div>
                  <div>timestamp:&nbsp; 2026-04-30T14:32:01Z</div>
                </div>
                <div className="flex gap-2 mt-4 flex-wrap">
                  <span className="font-mono text-xs px-2 py-1 rounded bg-teal-dim border border-teal/20 text-teal-text">FCA SYSC 9.1</span>
                  <span className="font-mono text-xs px-2 py-1 rounded bg-teal-dim border border-teal/20 text-teal-text">SM&amp;CR</span>
                  <span className="font-mono text-xs px-2 py-1 rounded bg-navy-600 border border-[var(--border)] text-[var(--text-2)]">DORA ICT</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION E — CTA BANNER */}
        <section className="pt-20 pb-24 px-6 md:px-16 border-t border-[var(--border)]">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-jakarta font-semibold text-3xl md:text-4xl mb-4">
              Ready to stop schema incidents before they happen?
            </h2>
            <p className="text-[var(--text-2)] mb-8 text-lg">
              Free 30-day pilot. We set it up with you. No procurement required for the evaluation.
            </p>
            <CtaButton label="Book my pilot call" size="lg" variant="primary" href="/book" />
            <p className="font-mono text-xs text-[var(--text-3)] mt-4">
              3 pilot slots currently open · UK fintechs only · eu-west-2 data residency
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
