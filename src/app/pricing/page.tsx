import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CtaButton from '@/components/CtaButton'
import SectionLabel from '@/components/SectionLabel'
import { CheckCircle } from 'lucide-react'

const starterFeatures = [
  'Up to 25 governed contracts',
  'Up to 5 consumer teams',
  'PR BLOCK enforcement',
  'FCA SYSC 9.1 audit trail',
  'Slack alerts',
  'UK data residency',
]

const growthFeatures = [
  'Unlimited contracts',
  'Unlimited consumer teams',
  'REVIEW workflow with 24hr approval',
  'Teams + Slack alerts',
  'CSV export · FCA S166 ready',
  'DORA ICT incident log',
  'SM&CR Senior Manager field',
  'Priority support',
]

const enterpriseFeatures = [
  'Multi-team dashboard',
  'Custom data retention policy',
  'SSO / SAML',
  'Dedicated onboarding',
  'SLA guarantee',
  'Pen test report on request',
]

const faqs = [
  {
    q: 'What happens during the free pilot?',
    a: 'We install the GitHub Action together on a real repository. You pick 10–20 tables to govern. We help you register your first consumer teams. The pilot ends when you decide to pay — or don\'t. No pressure.',
  },
  {
    q: 'Does Velraq slow down our CI pipeline?',
    a: 'No. The PR check runs in under 200ms. The O(1) index lookup means check time does not grow as your registry scales.',
  },
  {
    q: 'What if Velraq goes down during a production hotfix?',
    a: 'Velraq is fail-open by design. If the API is unreachable, the GitHub Action issues a warning in the PR and lets the merge proceed. We never block a deploy because of a Velraq outage.',
  },
  {
    q: 'Do we need to change our dbt setup?',
    a: 'No. Velraq reads your existing dbt manifest.json. One YAML block added to your existing GitHub Actions workflow. Nothing else changes.',
  },
  {
    q: 'Is our data stored outside the UK?',
    a: 'No. All data is stored in AWS eu-west-2 (London). We can provide a Data Processing Agreement before your pilot starts.',
  },
]

function FeatureItem({ text }: { text: string }) {
  return (
    <div className="flex gap-2 text-sm text-[var(--text-2)] items-start">
      <CheckCircle size={14} className="text-teal mt-0.5 shrink-0" />
      <span>{text}</span>
    </div>
  )
}

export default function PricingPage() {
  return (
    <>
      <Nav />
      <main>
        {/* HERO */}
        <section className="pt-32 pb-16 px-6 md:px-16 text-center">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-center">
              <SectionLabel text="PRICING" />
            </div>
            <h1 className="font-jakarta font-semibold text-4xl md:text-5xl mb-4">
              Simple pricing. No setup fees. Cancel anytime.
            </h1>
            <p className="text-[var(--text-2)] text-lg max-w-xl mx-auto">
              Start with a free 30-day pilot. Pay only when you see value.
              All plans include UK data residency and FCA audit trail.
            </p>
          </div>
        </section>

        {/* PRICING CARDS */}
        <section className="px-6 md:px-16 pb-12">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {/* STARTER */}
              <div className="bg-navy-700 border border-[var(--border)] rounded-2xl p-8 flex flex-col">
                <h3 className="font-jakarta font-semibold text-xl mb-1">Starter</h3>
                <p className="text-[var(--text-3)] text-sm mb-6">For teams getting started</p>
                <div className="mb-1">
                  <span className="font-jakarta font-semibold text-4xl">£1,200</span>
                  <span className="text-[var(--text-3)] text-sm"> / month</span>
                </div>
                <p className="text-[var(--text-3)] font-mono text-xs mb-8">Billed annually · £14,400/yr</p>
                <div className="space-y-3 mb-8 flex-1">
                  {starterFeatures.map((f) => <FeatureItem key={f} text={f} />)}
                </div>
                <CtaButton label="Start free pilot" size="md" variant="ghost" href="/book" className="w-full" />
              </div>

              {/* GROWTH — featured */}
              <div className="flex flex-col">
                <div className="flex justify-center mb-3">
                  <span className="inline-block bg-teal text-white font-mono text-xs px-3 py-1 rounded-full">
                    Most popular
                  </span>
                </div>
                <div className="bg-navy-700 border-2 border-teal rounded-2xl p-8 flex flex-col flex-1">
                  <h3 className="font-jakarta font-semibold text-xl mb-1">Growth</h3>
                  <p className="text-[var(--text-3)] text-sm mb-6">For data-mature fintechs</p>
                  <div className="mb-1">
                    <span className="font-jakarta font-semibold text-4xl">£5,000</span>
                    <span className="text-[var(--text-3)] text-sm"> / month</span>
                  </div>
                  <p className="text-[var(--text-3)] font-mono text-xs mb-8">Billed annually · £60,000/yr</p>
                  <div className="space-y-3 mb-8 flex-1">
                    {[...starterFeatures, ...growthFeatures].map((f) => (
                      <FeatureItem key={f} text={f} />
                    ))}
                  </div>
                  <CtaButton label="Start free pilot" size="md" variant="primary" href="/book" className="w-full" />
                </div>
              </div>

              {/* ENTERPRISE */}
              <div className="bg-navy-700 border border-[var(--border)] rounded-2xl p-8 flex flex-col">
                <h3 className="font-jakarta font-semibold text-xl mb-1">Enterprise</h3>
                <p className="text-[var(--text-3)] text-sm mb-6">For large regulated institutions</p>
                <div className="mb-1">
                  <span className="font-jakarta font-semibold text-4xl">£13,000</span>
                  <span className="text-[var(--text-3)] text-sm"> / month</span>
                </div>
                <p className="text-[var(--text-3)] font-mono text-xs mb-8">Custom contract</p>
                <div className="space-y-3 mb-8 flex-1">
                  {[...starterFeatures, ...growthFeatures, ...enterpriseFeatures].map((f) => (
                    <FeatureItem key={f} text={f} />
                  ))}
                </div>
                <CtaButton label="Contact us" size="md" variant="ghost" href="/book" className="w-full" />
              </div>
            </div>
            <p className="text-center font-mono text-xs text-[var(--text-3)] mt-8">
              All plans: free 30-day pilot · no credit card · no procurement required for evaluation
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="pt-16 pb-24 px-6 md:px-16">
          <div className="max-w-3xl mx-auto">
            <SectionLabel text="COMMON QUESTIONS" />
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-[var(--border)] py-5">
                <h3 className="font-jakarta font-semibold text-base mb-2">{faq.q}</h3>
                <p className="text-[var(--text-2)] text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
