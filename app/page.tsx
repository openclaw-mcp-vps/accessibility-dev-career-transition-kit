export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#';

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 py-24 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-sm font-medium px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          For Developers With Vision Impairments
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
          Keep Coding After{' '}
          <span className="text-[#58a6ff]">Vision Loss</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-10 max-w-xl mx-auto">
          A complete career transition toolkit for software engineers going blind. Screen reader mastery, accessible tooling guides, and a community that gets it.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors duration-200"
          aria-label="Subscribe for $49 per month"
        >
          Start for $49/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. Instant access.</p>
      </section>

      {/* Features strip */}
      <section className="border-y border-[#30363d] bg-[#161b22] py-10">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { title: 'Screen Reader Mastery', desc: 'NVDA, JAWS, VoiceOver — step-by-step for devs' },
            { title: 'IDE & Tooling Setup', desc: 'VS Code, terminal, Git — fully accessible configs' },
            { title: 'Career Guidance', desc: 'Resume tips, interview prep, ADA rights explained' }
          ].map((f) => (
            <div key={f.title}>
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-[#8b949e] text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 py-20 text-center" aria-labelledby="pricing-heading">
        <h2 id="pricing-heading" className="text-2xl font-bold text-white mb-10">Simple Pricing</h2>
        <div className="border border-[#58a6ff]/40 rounded-xl p-8 bg-[#161b22]">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro Access</p>
          <p className="text-5xl font-bold text-white mb-1">$49</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8" aria-label="Plan features">
            {[
              'Full screen reader tutorial library',
              'Accessible IDE configuration guides',
              'Career transition roadmap & templates',
              'Private community forum access',
              'Monthly live Q&A sessions',
              'New content added weekly'
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm">
                <span className="text-[#58a6ff] mt-0.5" aria-hidden="true">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors duration-200"
            aria-label="Get full access for $49 per month"
          >
            Get Full Access
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24" aria-labelledby="faq-heading">
        <h2 id="faq-heading" className="text-2xl font-bold text-white mb-8 text-center">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: 'Do I need to already be losing vision to join?',
              a: 'No. Developers at any stage — newly diagnosed, partially sighted, or fully blind — benefit from the toolkit. Accessibility consultants and HR teams also use it to better support their teams.'
            },
            {
              q: 'Which screen readers and operating systems are covered?',
              a: 'We cover NVDA and JAWS on Windows, VoiceOver on macOS and iOS, and TalkBack on Android — with developer-specific workflows for each.'
            },
            {
              q: 'Can I cancel my subscription at any time?',
              a: 'Yes. Cancel anytime from your Lemon Squeezy customer portal with no fees or penalties. You keep access until the end of your billing period.'
            }
          ].map(({ q, a }) => (
            <div key={q} className="border border-[#30363d] rounded-lg p-6 bg-[#161b22]">
              <h3 className="text-white font-semibold mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] py-8 text-center text-[#8b949e] text-sm">
        <p>&copy; {new Date().getFullYear()} Accessibility Dev Career Transition Kit. All rights reserved.</p>
      </footer>
    </main>
  );
}
